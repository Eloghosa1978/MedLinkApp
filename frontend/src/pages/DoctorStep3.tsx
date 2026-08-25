import type { UseFormRegister } from "react-hook-form";
import type { OnboardingFormData } from "./MedicalOnboarding";

interface DoctorStep3Props {
  register: UseFormRegister<OnboardingFormData>;
  practiceTypeOverride?: string;
}

const DoctorStep3 = ({ register, practiceTypeOverride }: DoctorStep3Props) => {
  const rawType = practiceTypeOverride || "";
  const normalizedPracticeType = rawType.trim().toLowerCase();

  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-on-background">
      <main className="flex-grow flex items-center justify-center p-4 md:p-margin-desktop bg-surface-container-low min-h-screen">
        <div className="w-full max-w-2xl bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col">
          <div className="p-6 md:p-xl border-b border-outline-variant bg-surface-container-lowest">
            <div className="flex items-center justify-between mb-4">
              <h1 className="font-headline-md text-headline-md text-on-surface">
                Doctor Profile Verification
              </h1>
              <span className="font-label-lg text-label-lg text-primary">
                Step 3 of 4
              </span>
            </div>
            <div className="w-full bg-surface-container-highest rounded-full h-2 mb-1">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mt-3">
              Dynamic Workspace Routing - Practice &amp; Hospital Affiliation
            </p>
          </div>
          <div className="p-6 md:p-xl flex-grow bg-surface-container-lowest">
            <div className="space-y-6">
              {(normalizedPracticeType === "private" ||
                normalizedPracticeType === "both" ||
                normalizedPracticeType === "") && (
                <div>
                  <h2 className="font-label-lg text-label-lg text-on-surface mb-4 pb-1 border-b border-outline-variant">
                    Practice Location
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1 md:col-span-2 space-y-1">
                      <label
                        className="block font-label-md text-label-md text-on-surface-variant"
                        htmlFor="practiceLocation_street"
                      >
                        Street Address
                      </label>
                      <div className="relative">
                        <span
                          className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
                          data-icon="location_on"
                        >
                          location_on
                        </span>
                        <input
                          {...register("practiceLocation.street", {
                            // required:
                            //   normalizedPracticeType === "private" ||
                            //   normalizedPracticeType === "both"
                            //     ? true
                            //     : false,
                          })}
                          className="w-full pl-8 pr-3 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          id="practiceLocation_street"
                          name="practiceLocation.street"
                          placeholder="123 Medical Center Dr."
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-span-1 space-y-1">
                      <label
                        className="block font-label-md text-label-md text-on-surface-variant"
                        htmlFor="practiceLocation_city"
                      >
                        City
                      </label>
                      <div className="relative">
                        <span
                          className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
                          data-icon="location_city"
                        >
                          location_city
                        </span>
                        <input
                          {...register("practiceLocation.city", {
                            // required:
                            //   normalizedPracticeType === "private" ||
                            //   normalizedPracticeType === "both"
                            //     ? true
                            //     : false,
                          })}
                          className="w-full pl-8 pr-3 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          id="practiceLocation_city"
                          name="practiceLocation.city"
                          placeholder="e.g. San Francisco"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {(normalizedPracticeType === "hospital" ||
                normalizedPracticeType === "both" ||
                normalizedPracticeType === "") && (
                <div className="pt-3">
                  <h2 className="font-label-lg text-label-lg text-on-surface mb-4 pb-1 border-b border-outline-variant">
                    Hospital Affiliation
                  </h2>
                  <div className="space-y-1 max-w-md">
                    <label
                      className="block font-label-md text-label-md text-on-surface-variant"
                      htmlFor="hospitalId"
                    >
                      Primary Hospital ID
                    </label>
                    <div className="relative">
                      <span
                        className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
                        data-icon="local_hospital"
                      >
                        local_hospital
                      </span>
                      <input
                        {...register("hospitalId", {
                          // required:
                          //   normalizedPracticeType === "hospital" ||
                          //   normalizedPracticeType === "both"
                          //     ? true
                          //     : false,
                        })}
                        className="w-full pl-8 pr-3 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        id="hospitalId"
                        name="hospitalId"
                        placeholder="e.g. HOSP-99214"
                        type="text"
                      />
                    </div>
                    <p className="font-label-md text-label-md text-on-surface-variant mt-xs">
                      Required for physicians with hospital admitting
                      privileges.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="p-6 md:p-xl bg-surface-container-low border-t border-outline-variant flex justify-between items-center rounded-b-xl">
            <button
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface px-4 py-3 rounded-lg hover:bg-surface-container-high transition-colors flex items-center gap-1"
              type="button"
            >
              <span
                className="material-symbols-outlined text-sm"
                data-icon="arrow_back"
              >
                arrow_back
              </span>
              Back
            </button>
            <button
              className="font-label-lg text-label-lg bg-primary text-on-primary px-6 py-3 rounded-lg hover:bg-primary-container transition-colors flex items-center gap-1 shadow-sm"
              type="submit"
            >
              Next Step
              <span
                className="material-symbols-outlined text-sm"
                data-icon="arrow_forward"
              >
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorStep3;
