import { type UseFormRegister } from "react-hook-form";

interface Step4FormData {
  emergencyContact?: {
    name?: string;
    relationship?: string;
    phoneNumber?: string;
  };
}

interface Step4Props {
  register: UseFormRegister<Step4FormData>;
}

const Step4 = ({ register }: Step4Props) => {
  return (
    <div>
      <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col">
        <header className="bg-surface-container-lowest dark:bg-surface-container-lowest border-b border-outline-variant dark:border-outline shadow-sm flex justify-between items-center w-full px-4 md:px-margin-desktop h-16 sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <span
              className="material-symbols-outlined text-primary text-[28px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              medical_services
            </span>
            <span className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim">
              MedLink
            </span>
          </div>
          <div className="flex items-center gap-4 text-primary dark:text-primary-fixed-dim">
            <button className="hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors p-2 rounded-full cursor-pointer active:opacity-80 transition-opacity">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <button className="hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors p-2 rounded-full cursor-pointer active:opacity-80 transition-opacity">
              <img
                alt="User profile"
                className="w-8 h-8 rounded-full object-cover"
                data-alt="A small, professional headshot of a user profile avatar. The photo features a neutral background and soft lighting, conveying trust and reliability suitable htmlFor a medical or enterprise software application. The avatar is circular and fits neatly within a 32x32 pixel area."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByddOt0KScBWMES0vloe5xNLL_3OQeHGlS0x2prExMllFeyYaczB7hurTxmfDiAw3SHqQl1Xvh0Nk4W-1fNHEXArng4-UUEiswmCkRwELUlh5hPjxtlsBfQJMzVk88CWuZC5pVjhoyKKwDO5nAqC2qMUFhk0xvd3zdOgxnkPKWUu910Rwp6XYsZf4Sh36Dj8HZQdLf20nXD2w2DN82uKkbDPX48nUsjhAYNHq5TLsOV7c0qAw9y7DV"
              />
            </button>
          </div>
        </header>
        <main className="flex-grow flex items-center justify-center p-4 md:p-margin-desktop bg-surface-container-low">
          <div className="w-full max-w-2xl bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col md:flex-row">
            <div className="hidden md:block md:w-1/3 bg-surface-container-high p-6 flex flex-col justify-between border-r border-outline-variant relative overflow-hidden">
              <div className="relative z-10">
                <span
                  className="material-symbols-outlined text-[48px] text-primary mb-4"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  contact_phone
                </span>
                <h2 className="text-headline-md font-headline-md text-on-surface mb-3">
                  Almost Done
                </h2>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  We just need a reliable contact in case of an emergency to
                  finalize your registration.
                </p>
              </div>
              <div
                className="absolute bottom-0 left-0 w-full h-1/2 opacity-20 pointer-events-none"
                style={{ backgroundSize: "16px 16px" }}
              ></div>
            </div>
            <div className="w-full md:w-2/3 p-6 md:p-xl flex flex-col">
              <div className="mb-6">
                <div className="flex justify-between items-end mb-3">
                  <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface">
                    Emergency Contact
                  </h1>
                  <span className="text-label-lg font-label-lg text-on-surface-variant">
                    Step 4 of 4
                  </span>
                </div>
                <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-full rounded-full transition-all duration-500 ease-out"></div>
                </div>
              </div>
              <div
                className="flex flex-col gap-6 flex-grow"
                id="onboardingForm"
              >
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-label-lg font-label-lg text-on-surface"
                      htmlFor="emergencyContactName"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                        person
                      </span>
                      <input
                        {...register("emergencyContact.name", {
                          required: true,
                        })}
                        className="w-full bg-surface-container-lowest border border-outline text-on-surface text-body-md font-body-md rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        id="emergencyContactName"
                        name="emergencyContact.name"
                        placeholder="Jane Doe"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-label-lg font-label-lg text-on-surface"
                      htmlFor="emergencyContactRelationship"
                    >
                      Relationship
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                        family_restroom
                      </span>
                      <input
                        {...register("emergencyContact.relationship", {
                          required: true,
                        })}
                        className="w-full bg-surface-container-lowest border border-outline text-on-surface text-body-md font-body-md rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        id="emergencyContactRelationship"
                        name="emergencyContact.relationship"
                        placeholder="Spouse, Sibling, etc."
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-label-lg font-label-lg text-on-surface"
                      htmlFor="emergencyContactPhone"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                        call
                      </span>
                      <input
                        {...register("emergencyContact.phoneNumber", {
                          required: true,
                        })}
                        className="w-full bg-surface-container-lowest border border-outline text-on-surface text-body-md font-body-md rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        id="emergencyContactPhone"
                        name="emergencyContact.phoneNumber"
                        placeholder="(555) 123-4567"
                        required
                        type="tel"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-6 flex justify-between items-center border-t border-outline-variant">
                  <button
                    className="text-primary hover:bg-surface-container-high px-4 py-2 rounded-lg text-label-lg font-label-lg transition-colors flex items-center gap-1"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_back
                    </span>
                    Back
                  </button>
                  <button
                    className="bg-primary hover:bg-primary-container text-on-primary px-6 py-2 rounded-lg text-label-lg font-label-lg transition-colors flex items-center justify-center min-w-[160px]"
                    id="submitBtn"
                    type="submit"
                  >
                    <span id="btnText">Finish Onboarding</span>
                    <span
                      className="material-symbols-outlined animate-spin hidden ml-2"
                      id="btnLoader"
                    >
                      progress_activity
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

export default Step4;
