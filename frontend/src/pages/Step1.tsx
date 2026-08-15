import { type UseFormRegister } from "react-hook-form";

interface Step1FormData {
  bloodGroup: string;
  genotype: string;
}

interface Step1Props {
  register: UseFormRegister<Step1FormData>;
}

const Step1 = ({ register }: Step1Props) => {
  return (
    <div>
      <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
        <header className="bg-surface-container-lowest dark:bg-surface-container-lowest border-b border-outline-variant dark:border-outline shadow-sm flex justify-between items-center w-full px-4 md:px-margin-desktop h-16 docked full-width top-0 shrink-0">
          <div className="flex items-center">
            <span className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight">
              MedLink
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              aria-label="Help"
              className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors p-2 rounded-full cursor-pointer active:opacity-80 transition-opacity"
            >
              <span
                className="material-symbols-outlined"
                data-icon="help_outline"
              >
                help_outline
              </span>
            </button>
            <button
              aria-label="Account"
              className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors p-2 rounded-full cursor-pointer active:opacity-80 transition-opacity"
            >
              <span
                className="material-symbols-outlined"
                data-icon="account_circle"
              >
                account_circle
              </span>
            </button>
          </div>
        </header>
        <main className="flex-grow flex items-center justify-center p-4 md:p-margin-desktop relative">
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-fixed via-surface to-surface"></div>
          <div className="w-full max-w-2xl bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm relative z-10">
            <div className="p-6 md:p-xl border-b border-outline-variant bg-surface-container-low rounded-t-xl">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <p className="font-label-md text-label-md text-primary tracking-wider uppercase mb-xs">
                    Registration
                  </p>
                  <h1 className="font-headline-md text-headline-md md:font-headline-lg md:text-headline-lg text-on-surface">
                    Patient Identity
                  </h1>
                </div>
                <div className="text-right">
                  <span className="font-label-lg text-label-lg text-on-surface-variant">
                    Step 1 of 4
                  </span>
                </div>
              </div>
              <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden mt-4">
                <div
                  aria-valuemax={100}
                  aria-valuemin={0}
                  aria-valuenow={25}
                  className="h-full bg-primary transition-all duration-500 ease-out"
                  role="progressbar"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>
            <div className="p-6 md:p-xl">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label
                      className="block font-label-lg text-label-lg text-on-surface"
                      htmlFor="bloodGroup"
                    >
                      Blood Group
                    </label>
                    <div className="relative">
                      <select
                        {...register("bloodGroup", { required: true })}
                        className="w-full appearance-none bg-surface-container-lowest border border-outline rounded-lg px-4 py-3 text-body-md font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary hover:bg-surface-bright transition-colors cursor-pointer"
                        id="bloodGroup"
                        name="bloodGroup"
                      >
                        <option disabled hidden selected value="">
                          Select Blood Group
                        </option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                        <span
                          className="material-symbols-outlined"
                          data-icon="expand_more"
                        >
                          expand_more
                        </span>
                      </div>
                    </div>
                    <p className="font-label-md text-label-md text-on-surface-variant">
                      Required for emergency medical files.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <label
                      className="block font-label-lg text-label-lg text-on-surface"
                      htmlFor="genotype"
                    >
                      Genotype
                    </label>
                    <div className="relative">
                      <select
                        {...register("genotype", { required: true })}
                        className="w-full appearance-none bg-surface-container-lowest border border-outline rounded-lg px-4 py-3 text-body-md font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary hover:bg-surface-bright transition-colors cursor-pointer"
                        id="genotype"
                        name="genotype"
                      >
                        <option disabled hidden selected>
                          Select Genotype
                        </option>
                        <option value="AA">AA</option>
                        <option value="AS">AS</option>
                        <option value="AC">AC</option>
                        <option value="SS">SS</option>
                        <option value="SC">SC</option>
                        <option value="CC">CC</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                        <span
                          className="material-symbols-outlined"
                          data-icon="expand_more"
                        >
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-outline-variant mt-8 flex justify-end">
                  <button
                    className="bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-8 py-3 rounded-lg transition-colors active:scale-95 flex items-center gap-3 cursor-pointer shadow-sm"
                    type="submit"
                  >
                    Continue to Next Step
                    <span
                      className="material-symbols-outlined text-on-primary"
                      data-icon="arrow_forward"
                    >
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Step1;
