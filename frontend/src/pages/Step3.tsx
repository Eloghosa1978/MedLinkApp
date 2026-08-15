import { type UseFormRegister } from "react-hook-form";

interface Step3FormData {
  address?: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
  };
}

interface Step3Props {
  register: UseFormRegister<Step3FormData>;
}

const Step3 = ({ register }: Step3Props) => {
  return (
    <div>
      <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
        <header className="bg-surface-container-lowest border-b border-outline-variant shadow-sm docked full-width top-0 w-full z-10 sticky">
          <div className="flex justify-between items-center w-full px-4 md:px-margin-desktop h-16">
            <div className="flex items-center gap-3">
              <span className="text-headline-md font-headline-md font-bold text-primary">
                MedLink
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                aria-label="Help"
                className="p-2 rounded-full hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80 transition-opacity text-on-surface-variant flex items-center justify-center"
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
                className="p-2 rounded-full hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80 transition-opacity text-on-surface-variant flex items-center justify-center"
              >
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
          <main className="flex-1 flex flex-col overflow-y-auto px-4 py-6 md:px-margin-desktop md:py-xl items-center">
            <div className="w-full max-w-2xl">
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-3">
                  <h2 className="text-headline-md font-headline-md text-on-surface">
                    Registration
                  </h2>
                  <span className="text-label-lg font-label-lg text-on-surface-variant">
                    Step 3 of 4
                  </span>
                </div>
                <div className="w-full bg-surface-container-high rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 md:p-xl shadow-sm">
                <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface mb-8">
                  Residential Address
                </h1>
                <div className="space-y-6">
                  <div className="space-y-1">
                    <label
                      className="block text-label-lg font-label-lg text-on-surface"
                      htmlFor="address.street"
                    >
                      Street Address
                    </label>
                    <input
                      {...register("address.street", { required: true })}
                      className="w-full bg-surface-container-lowest border border-outline rounded-lg px-4 py-3 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      id="address.street"
                      name="address.street"
                      placeholder="123 Main St"
                      type="text"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label
                        className="block text-label-lg font-label-lg text-on-surface"
                        htmlFor="address.city"
                      >
                        City
                      </label>
                      <input
                        {...register("address.city", { required: true })}
                        className="w-full bg-surface-container-lowest border border-outline rounded-lg px-4 py-3 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        id="address.city"
                        name="address.city"
                        placeholder="Seattle"
                        type="text"
                      />
                    </div>
                    <div className="space-y-1">
                      <label
                        className="block text-label-lg font-label-lg text-on-surface"
                        htmlFor="address.state"
                      >
                        State / Province
                      </label>
                      <input
                        {...register("address.state", { required: true })}
                        className="w-full bg-surface-container-lowest border border-outline rounded-lg px-4 py-3 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        id="address.state"
                        name="address.state"
                        placeholder="WA"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      className="block text-label-lg font-label-lg text-on-surface"
                      htmlFor="address.country"
                    >
                      Country
                    </label>
                    <select
                      {...register("address.country", { required: true })}
                      className="w-full bg-surface-container-lowest border border-outline rounded-lg px-4 py-3 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                      id="address.country"
                      name="address.country"
                    >
                      <option disabled selected value="">
                        Select a country
                      </option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>
                  <div className="pt-6 border-t border-outline-variant flex justify-between items-center mt-xl">
                    <button
                      className="text-primary font-label-lg text-label-lg hover:underline px-4 py-3 rounded-lg hover:bg-primary-fixed transition-colors"
                      type="button"
                    >
                      Back
                    </button>
                    <button
                      className="bg-primary text-on-primary font-label-lg text-label-lg px-6 py-3 rounded-lg hover:bg-primary-container transition-colors shadow-sm active:scale-95 transition-transform flex items-center gap-1"
                      type="submit"
                    >
                      Continue to Next Step
                      <span className="material-symbols-outlined text-[18px]">
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
    </div>
  );
};

export default Step3;
