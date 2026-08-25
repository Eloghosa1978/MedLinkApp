import type { UseFormRegister } from "react-hook-form";
import type { OnboardingFormData } from "./MedicalOnboarding";

interface DoctorStep2Props {
  register: UseFormRegister<OnboardingFormData>;
}

const DoctorStep2 = ({ register }: DoctorStep2Props) => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-4 md:p-margin-desktop font-body-md text-on-background">
      <main className="w-full max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="font-headline-md text-headline-md text-on-surface mb-4">
            Doctor Profile Verification
          </h1>
          <div className="flex items-center justify-between mb-3">
            <span className="font-label-lg text-label-lg text-on-surface-variant">
              Step 2 of 4: Clinical Experience &amp; Background
            </span>
            <span className="font-label-md text-label-md text-primary">
              50% Completed
            </span>
          </div>
          <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-primary w-1/2 rounded-full transition-all duration-500 ease-in-out"></div>
          </div>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden p-6 md:p-xl">
          <div className="space-y-6">
            <div>
              <label
                className="block font-label-lg text-label-lg text-on-surface mb-1"
                htmlFor="primarySpecialization"
              >
                Primary Specialization
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "20px" }}
                  >
                    medical_services
                  </span>
                </div>
                <input
                  {...register("PrimarySpecialization", { required: true })}
                  className="block w-full pl-8 pr-3 py-3 bg-surface-container-lowest border-outline rounded-lg focus:ring-primary focus:border-primary text-on-surface font-body-md placeholder-outline transition-colors"
                  id="primarySpecialization"
                  placeholder="e.g. Cardiology"
                  type="text"
                />
              </div>
            </div>

            <div>
              <label
                className="block font-label-lg text-label-lg text-on-surface mb-1"
                htmlFor="specializations"
              >
                Specializations{" "}
                <span className="font-label-md text-label-md text-on-surface-variant font-normal">
                  (Comma-separated)
                </span>
              </label>
              <input
                {...register("Specializations", { required: true })}
                className="block w-full px-3 py-3 bg-surface-container-lowest border-outline rounded-lg focus:ring-primary focus:border-primary text-on-surface font-body-md placeholder-outline transition-colors"
                id="specializations"
                placeholder="e.g. Interventional Cardiology, Echocardiography"
                type="text"
              />
            </div>

            <div>
              <label
                className="block font-label-lg text-label-lg text-on-surface mb-1"
                htmlFor="qualifications"
              >
                Qualifications{" "}
                <span className="font-label-md text-label-md text-on-surface-variant font-normal">
                  (Comma-separated)
                </span>
              </label>
              <input
                {...register("Qualifications", { required: true })} // FIX: Lowercase key
                className="block w-full px-3 py-3 bg-surface-container-lowest border-outline rounded-lg focus:ring-primary focus:border-primary text-on-surface font-body-md placeholder-outline transition-colors"
                id="qualifications"
                placeholder="e.g. MD, FACC, PhD"
                type="text"
              />
            </div>

            <div>
              <label
                className="block font-label-lg text-label-lg text-on-surface mb-1"
                htmlFor="specialistSince"
              >
                Specialist Since
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "20px" }}
                  >
                    calendar_month
                  </span>
                </div>
                <input
                  {...register("SpecialistSince", { required: true })}
                  className="block w-full pl-8 pr-3 py-3 bg-surface-container-lowest border-outline rounded-lg focus:ring-primary focus:border-primary text-on-surface font-body-md transition-colors"
                  id="specialistSince"
                  type="date"
                />
              </div>
            </div>

            <div>
              <label
                className="block font-label-lg text-label-lg text-on-surface mb-1"
                htmlFor="biography"
              >
                Biography
              </label>
              <textarea
                {...register("Biography", { required: true })}
                className="block w-full px-3 py-3 bg-surface-container-lowest border-outline rounded-lg focus:ring-primary focus:border-primary text-on-surface font-body-md placeholder-outline transition-colors resize-y"
                id="biography"
                placeholder="Provide a brief professional summary..."
                rows={4}
              ></textarea>
            </div>

            <hr className="border-t border-outline-variant my-6" />

            <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-4">
              <button
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-surface-container-low text-on-surface font-label-lg text-label-lg border border-outline-variant hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1"
                type="button"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  arrow_back
                </span>
                Back to Step 1
              </button>
              <button
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm flex items-center justify-center gap-1"
                type="submit"
              >
                Continue to Step 3
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorStep2;
