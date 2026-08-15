import { useNavigate, useSearchParams } from "react-router-dom";
import Step1 from "./Step1";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

interface OnboardingFormData {
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  genotype: "AA" | "AS" | "AC" | "SS" | "SC" | "CC";
  height?: number;
  weight?: number;
  allergies?: string;
  chronicConditions?: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
  };
  emergencyContact: {
    name: string;
    relationship: string;
    phoneNumber: string;
  };
}

const MedicalOnboarding = () => {
  const { onBoarding, mongoUser } = useAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnboardingFormData>();
  console.log("Current Form Errors Tracker Status:", errors);

  const currentStep = Number(searchParams.get("step") ?? "1") || 1;

  useEffect(() => {
    if (mongoUser?.onboardingStep && mongoUser.onboardingStep !== currentStep) {
      setSearchParams({ step: mongoUser.onboardingStep.toString() });
    }
  }, [mongoUser, currentStep, setSearchParams]);

  const mutation = useMutation({
    mutationFn: (onboardingData: object) => {
      return onBoarding(onboardingData);
    },

    onSuccess: (response) => {
      if (currentStep === 4) {
        navigate("/patient/dashboard", { replace: true });
        return;
      }

      const nextStep = Number(
        response?.data?.onboardingStep || currentStep + 1,
      );

      if (nextStep <= 4) {
        setSearchParams({ step: String(nextStep) });
      } else {
        navigate("/patient/dashboard", { replace: true });
      }
    },
  });

  return (
    <div className="bg-background text-on-background min-h-screen font-body-md overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter h-16 bg-surface shadow-sm transition-colors border-b border-outline-variant/30">
        <div className="flex items-center gap-4">
          <span className="font-headline-md text-headline-md font-bold text-primary">
            Fluent Health
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            <a
              className="font-label-lg text-label-lg text-primary border-b-2 border-primary py-2"
              href="#"
            >
              Onboarding
            </a>
            <a
              className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md mt-3"
              onClick={() => navigate(-1)}
            >
              Go back
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-surface-container transition-colors">
            <span
              className="material-symbols-outlined text-primary"
              data-icon="notifications"
            >
              notifications
            </span>
          </button>
          <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden">
            <img
              className="w-full h-full object-cover"
              data-alt="A clean professional studio portrait of a healthcare worker or user, minimalist lighting, blue and white corporate tones, soft depth of field, high-resolution photography."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUnjsqCiCqLPQrN3nSTlLDRfBA-DHY20EGk4yVtc8fAhL2wYlVB8WQqnKrRb39K76AtVKSn9p80rLMN9ghuRuFxj3vM5EmidjjjRYbfGsPnd2VNbN8IyQ9t4iM9whUBRGwbmNv9FFFdJ-8OVXydXWlh6T2AXHKRY0x1lQS4corGDrr7WMPcc_d2vr1eA4gvbevUFa1_xHCQmzkPV8o6U3hCEl07urYKYQHeFo--ssJSWyJyazHW0OfYg"
            />
          </div>
        </div>
      </header>
      <form
        onSubmit={handleSubmit((formData) => {
          if (currentStep === 1) {
            mutation.mutate({
              bloodGroup: formData.bloodGroup,
              genotype: formData.genotype,
            });
          } else if (currentStep === 2) {
            mutation.mutate({
              height: formData.height ? Number(formData.height) : undefined,
              weight: formData.weight ? Number(formData.weight) : undefined,
              allergies: formData.allergies
                ? formData.allergies.split(",").map((s) => s.trim())
                : [],
              chronicConditions: formData.chronicConditions
                ? formData.chronicConditions.split(",").map((s) => s.trim())
                : [],
            });
          } else if (currentStep === 3) {
            mutation.mutate({
              address: {
                street: formData.address.street,
                city: formData.address.city,
                state: formData.address.state,
                country: formData.address.country,
              },
            });
          } else if (currentStep === 4) {
            mutation.mutate({
              emergencyContact: {
                name: formData.emergencyContact.name,
                relationship: formData.emergencyContact.relationship,
                phoneNumber: formData.emergencyContact.phoneNumber,
              },
            });

            navigate("/patient/dashboard", { replace: true });
          }
        })}
      >
        {currentStep === 1 ? (
          <Step1 register={register} />
        ) : currentStep === 2 ? (
          <Step2 register={register} />
        ) : currentStep === 3 ? (
          <Step3 register={register} />
        ) : (
          <Step4 register={register} />
        )}
      </form>
      <footer className="mt-auto border-t border-outline-variant py-8 px-4 md:px-margin-desktop bg-surface-container-low text-center">
        <p className="font-label-md text-on-surface-variant">
          © 2024 Fluent Health Systems. All rights reserved. • Privacy Policy •
          Terms of Service
        </p>
      </footer>
    </div>
  );
};

export default MedicalOnboarding;
export type { OnboardingFormData };
