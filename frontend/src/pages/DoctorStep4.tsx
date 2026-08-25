import type { UseFormRegister } from "react-hook-form";
import type { OnboardingFormData } from "./MedicalOnboarding";

interface DoctorStep4Props {
  register: UseFormRegister<OnboardingFormData>;
}

const DoctorStep4 = ({ register }: DoctorStep4Props) => {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-on-background">
      <header className="bg-surface-container-lowest border-b border-outline-variant shadow-sm flex justify-between items-center w-full px-4 md:px-margin-desktop h-16 shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-primary font-headline-md text-headline-md font-bold">
            MedLink
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Help"
            className="p-1 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors"
          >
            <span
              className="material-symbols-outlined"
              data-icon="help_outline"
            >
              help_outline
            </span>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant shrink-0">
            <img
              alt="User profile"
              className="w-full h-full object-cover"
              data-alt="A professional headshot of a doctor in a modern clinical setting, well-lit with soft natural light. Corporate modern aesthetic, trustworthy and approachable, wearing a white coat over a blue shirt. Slate and indigo background tones."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWIH9I0rYDiwnmIHw66MpgaO9oYIw3tCCNXb-qh5s_lvaYTKko4MbkbwrndXIoqRjrWL9j6pg_NYXUyN3kmVZtvanw4r5IiaFBRi_K16Tj3xT4cq9KNM1opm3djWJyizAhLXvW-x1Ams91QOtjKnFuK-TH-a9ARTrq9Z5-dfuAZyexoFNj4nGlTH1m1lG6ZlYRgR3ZhpI0UVrGPuZLo0nO2HVk6YIoqREDNUFzQQR5gmB7zw6MoTUx"
            />
          </div>
        </div>
      </header>
      <main className="flex-1 flex justify-center items-start pt-8 pb-[48px] px-4 md:px-margin-desktop w-full max-w-7xl mx-auto">
        <div className="w-full max-w-2xl bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 md:p-xl border-b border-outline-variant bg-surface-container-low flex flex-col gap-2">
            <h1 className="font-headline-md text-headline-md text-on-surface m-0 p-0">
              Doctor Profile Verification — Step 4 of 4
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant m-0 p-0">
              Consultation Formats &amp; Fees
            </p>
            <div className="w-full h-2 bg-surface-container-high rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-primary rounded-full w-[100%] transition-all duration-500 ease-in-out"></div>
            </div>
          </div>
          <div className="p-6 md:p-xl flex-1 bg-surface-container-lowest">
            <div className="flex flex-col gap-8">
              <div className="bg-surface-container p-4 rounded-lg border border-outline-variant">
                <div className="flex gap-3 items-start">
                  <span
                    className="material-symbols-outlined text-primary shrink-0"
                    data-icon="info"
                  >
                    info
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant m-0">
                    Please provide details regarding your standard consultation
                    fees and the modes of consultation you offer. This
                    information will be displayed on your public MedLink
                    profile.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <label
                    className="font-label-lg text-label-lg text-on-surface"
                    htmlFor="consultationFee"
                  >
                    Consultation Fee (USD)
                  </label>
                  <div className="relative">
                    <span
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant material-symbols-outlined"
                      data-icon="attach_money"
                      style={{ fontSize: "20px" }}
                    >
                      attach_money
                    </span>
                    <input
                      {...register("consultationFee", { required: true })}
                      className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline rounded-lg text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline"
                      id="consultationFee"
                      min="0"
                      name="consultationFee"
                      placeholder="e.g., 150"
                      required
                      step="10"
                      type="number"
                    />
                  </div>
                  <p className="font-label-md text-label-md text-on-surface-variant">
                    Standard fee for initial consultation.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="font-label-lg text-label-lg text-on-surface"
                    htmlFor="consultationModes"
                  >
                    Consultation Modes
                  </label>
                  <div className="relative">
                    <select
                      {...register("consultationModes", { required: true })}
                      className="w-full pl-4 pr-10 py-3 bg-surface-container-lowest border border-outline rounded-lg text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                      id="consultationModes"
                      name="consultationModes"
                    >
                      <option disabled selected value="">
                        Select mode...
                      </option>
                      <option value="physical">
                        In-Patient (Clinic/Hospital)
                      </option>
                      <option value="virtual">Virtual (Telehealth)</option>
                    </select>
                    <span
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant material-symbols-outlined pointer-events-none"
                      data-icon="arrow_drop_down"
                    >
                      arrow_drop_down
                    </span>
                  </div>
                  <p className="font-label-md text-label-md text-on-surface-variant">
                    Primary method of patient interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-xl border-t border-outline-variant bg-surface-container-lowest flex justify-between items-center gap-4">
            <button
              className="px-6 py-3 rounded-lg font-label-lg text-label-lg text-on-secondary-container bg-secondary-container hover:bg-secondary-fixed-dim transition-colors active:scale-95 flex items-center gap-1"
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
              className="px-6 py-3 rounded-lg font-label-lg text-label-lg text-on-primary bg-primary hover:bg-primary-container transition-colors shadow-sm active:scale-95 flex items-center gap-1"
              type="submit"
            >
              Submit Profile
              <span
                className="material-symbols-outlined"
                data-icon="check_circle"
              >
                check_circle
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorStep4;
