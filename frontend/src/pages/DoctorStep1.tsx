import type { UseFormRegister } from "react-hook-form";
import type { OnboardingFormData } from "./MedicalOnboarding";

interface DoctorStep1Props {
  register: UseFormRegister<OnboardingFormData>;
}

const DoctorStep1 = ({ register }: DoctorStep1Props) => {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      <header className="bg-surface-container-lowest border-b border-outline-variant shadow-sm flex justify-between items-center w-full px-4 md:px-margin-desktop h-16 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-primary text-[28px]"
            data-icon="local_hospital"
          >
            local_hospital
          </span>
          <span className="text-headline-md font-headline-md font-bold text-primary">
            MedLink
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-2 rounded-full cursor-pointer active:opacity-80 transition-opacity">
            <span
              className="material-symbols-outlined"
              data-icon="help_outline"
            >
              help_outline
            </span>
          </button>
          <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-2 rounded-full cursor-pointer active:opacity-80 transition-opacity">
            <span
              className="material-symbols-outlined"
              data-icon="account_circle"
            >
              account_circle
            </span>
          </button>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto px-4 md:px-margin-desktop py-8 md:py-xxl flex justify-center bg-surface">
          <div className="w-full max-w-2xl">
            <div className="mb-6">
              <h1 className="font-headline-md text-headline-md text-on-surface mb-1">
                Doctor Profile Verification
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                Step 1 of 4: Credentials &amp; Practice Type
              </p>
              <div className="w-full bg-surface-container-highest rounded-full h-2 mb-3">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 md:p-xl shadow-sm">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <label
                    className="font-label-lg text-label-lg text-on-surface"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <span
                      className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
                      data-icon="call"
                    >
                      call
                    </span>
                    <input
                      {...register("phoneNumber", { required: true })}
                      className="w-full pl-10 pr-3 py-2 bg-surface-container-lowest border border-outline rounded-lg focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface transition-colors"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="+1 (555) 000-0000"
                      required
                      type="tel"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="font-label-lg text-label-lg text-on-surface"
                    htmlFor="LicenseNumber"
                  >
                    LicenseNumber
                  </label>
                  <div className="relative">
                    <span
                      className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
                      data-icon="badge"
                    >
                      badge
                    </span>
                    <input
                      {...register("LicenseNumber", { required: true })}
                      className="w-full pl-10 pr-3 py-2 bg-surface-container-lowest border border-outline rounded-lg focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface transition-colors"
                      id="LicenseNumber"
                      name="LicenseNumber"
                      placeholder="e.g. MD-1234567"
                      required
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="font-label-lg text-label-lg text-on-surface"
                    htmlFor="licensedSince"
                  >
                    Licensed Since
                  </label>
                  <div className="relative">
                    <span
                      className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
                      data-icon="calendar_today"
                    >
                      calendar_today
                    </span>
                    <input
                      {...register("licensedSince", { required: true })}
                      className="w-full pl-10 pr-3 py-2 bg-surface-container-lowest border border-outline rounded-lg focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface transition-colors"
                      id="licensedSince"
                      name="licensedSince"
                      required
                      type="date"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="font-label-lg text-label-lg text-on-surface"
                    htmlFor="PracticeType"
                  >
                    PracticeType
                  </label>
                  <div className="relative">
                    <span
                      className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
                      data-icon="domain"
                    >
                      domain
                    </span>
                    <select
                      {...register("PracticeType", { required: true })}
                      className="w-full pl-10 pr-10 py-2 bg-surface-container-lowest border border-outline rounded-lg focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface appearance-none transition-colors"
                      id="PracticeType"
                      name="PracticeType"
                      required
                    >
                      <option disabled value="">
                        Select Practice Type
                      </option>
                      <option value="hospital">hospital</option>
                      <option value="private">private</option>
                      <option value="both">both</option>
                    </select>
                    <span
                      className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none"
                      data-icon="expand_more"
                    >
                      expand_more
                    </span>
                  </div>
                </div>
                <div className="flex justify-end gap-4 mt-4 pt-6 border-t border-outline-variant">
                  <button
                    className="px-6 py-2 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high transition-colors"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="px-6 py-2 rounded-lg font-label-lg text-label-lg bg-primary text-on-primary hover:bg-primary-container transition-colors shadow-sm flex items-center gap-1"
                    type="submit"
                  >
                    Continue
                    <span
                      className="material-symbols-outlined text-[18px]"
                      data-icon="arrow_forward"
                    >
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <span
                className="material-symbols-outlined text-outline text-[48px] opacity-20"
                data-icon="verified_user"
              >
                verified_user
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DoctorStep1;
