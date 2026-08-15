import { type UseFormRegister } from "react-hook-form";
import type { OnboardingFormData } from "./MedicalOnboarding";

interface Step2Props {
  register: UseFormRegister<OnboardingFormData>;
}

const Step2 = ({ register }: Step2Props) => {
  return (
    <div>
      <div className="bg-background min-h-screen flex flex-col font-body-md text-on-surface">
        <header className="bg-surface-container-lowest border-b border-outline-variant shadow-sm w-full top-0 z-50">
          <div className="flex justify-between items-center w-full px-4 md:px-margin-desktop h-16">
            <div className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-2xl"
                data-icon="local_hospital"
              >
                local_hospital
              </span>
              <span className="text-headline-md font-headline-md font-bold text-primary">
                MedLink
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors">
                <span
                  className="material-symbols-outlined"
                  data-icon="help_outline"
                >
                  help_outline
                </span>
              </button>
              <button className="text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors">
                <span
                  className="material-symbols-outlined"
                  data-icon="account_circle"
                >
                  account_circle
                </span>
              </button>
            </div>
          </div>
        </header>
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 flex flex-col items-center py-8 px-4 md:px-margin-desktop overflow-y-auto">
            <div className="w-full max-w-2xl">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-label-lg text-label-lg text-on-surface-variant">
                    Step 2: Medical History
                  </span>
                  <span className="font-label-lg text-label-lg text-primary">
                    50%
                  </span>
                </div>
                <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden">
                <div className="p-6 md:p-xl border-b border-outline-variant bg-surface-container-low">
                  <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-1">
                    Physical Measurements &amp; Conditions
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Please provide accurate physical measurements and note any
                    known allergies or chronic conditions to help us tailor your
                    care.
                  </p>
                </div>
                <div className="p-6 md:p-xl flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label
                        className="font-label-lg text-label-lg text-on-surface"
                        htmlFor="height"
                      >
                        Height (cm)
                      </label>
                      <div className="relative">
                        <input
                          {...register("height", { required: true })}
                          className="w-full bg-surface-container-lowest border border-outline text-on-surface rounded-lg px-3 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow font-body-md pl-10"
                          id="height"
                          name="height"
                          placeholder="e.g., 175"
                          type="number"
                        />
                        <span
                          className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
                          data-icon="height"
                        >
                          height
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        className="font-label-lg text-label-lg text-on-surface"
                        htmlFor="weight"
                      >
                        Weight (kg)
                      </label>
                      <div className="relative">
                        <input
                          {...register("weight", { required: true })}
                          className="w-full bg-surface-container-lowest border border-outline text-on-surface rounded-lg px-3 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow font-body-md pl-10"
                          id="weight"
                          name="weight"
                          placeholder="e.g., 70"
                          type="number"
                        />
                        <span
                          className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
                          data-icon="weight"
                        >
                          weight
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-lg text-label-lg text-on-surface flex justify-between"
                      htmlFor="allergies"
                    >
                      Allergies
                      <span className="text-on-surface-variant font-label-md">
                        Separate with commas
                      </span>
                    </label>
                    <textarea
                      {...register("allergies", { required: true })}
                      className="w-full bg-surface-container-lowest border border-outline text-on-surface rounded-lg px-3 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow font-body-md resize-y"
                      id="allergies"
                      name="allergies"
                      placeholder="e.g., Penicillin, Peanuts, Latex"
                      rows={3}
                    ></textarea>
                    <p className="font-label-md text-label-md text-on-surface-variant mt-1">
                      Leave blank if none known.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-lg text-label-lg text-on-surface flex justify-between"
                      htmlFor="chronicConditions"
                    >
                      Chronic Conditions
                      <span className="text-on-surface-variant font-label-md">
                        Separate with commas
                      </span>
                    </label>
                    <textarea
                      {...register("chronicConditions", { required: true })}
                      className="w-full bg-surface-container-lowest border border-outline text-on-surface rounded-lg px-3 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow font-body-md resize-y"
                      id="chronicConditions"
                      name="chronicConditions"
                      placeholder="e.g., Hypertension, Asthma, Type 2 Diabetes"
                      rows={3}
                    ></textarea>
                    <p className="font-label-md text-label-md text-on-surface-variant mt-1">
                      Include any ongoing medical conditions requiring
                      treatment.
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant mt-3">
                    <button
                      className="font-label-lg text-label-lg text-primary hover:bg-surface-container p-2 rounded-lg transition-colors flex items-center gap-1"
                      type="button"
                    >
                      <span
                        className="material-symbols-outlined"
                        data-icon="arrow_back"
                      >
                        arrow_back
                      </span>
                      Back
                    </button>
                    <button
                      className="bg-primary text-on-primary font-label-lg text-label-lg py-3 px-6 rounded-lg hover:bg-primary-container transition-colors flex items-center gap-1 shadow-sm"
                      type="submit"
                    >
                      Continue to Next Step
                      <span
                        className="material-symbols-outlined"
                        data-icon="arrow_forward"
                      >
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="font-label-md text-label-md text-on-surface-variant flex items-center justify-center gap-1">
                  <span
                    className="material-symbols-outlined text-[16px]"
                    data-icon="lock"
                  >
                    lock
                  </span>
                  Your information is securely encrypted and HIPAA compliant.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Step2;
