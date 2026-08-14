import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<"patient" | "doctor">("patient");
  const [errMsg, setErrMsg] = useState<string>("");
  const { syncUserWithBackend } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await syncUserWithBackend(
        { firstName, lastName, role },
        userCredentials.user,
      );

      if (role === "patient") {
        navigate("/patient/dashboard");
      } else if (role === "doctor") {
        navigate("/doctor/dashboard");
      }
    } catch (err) {
      console.error(err);
      setErrMsg("A problem occured while registering");
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col antialiased">
      <header className="bg-surface-container-lowest border-b border-outline-variant shadow-sm w-full top-0">
        <div className="flex justify-between items-center h-16 px-4 md:px-10 max-w-7xl mx-auto">
          <div className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-1">
            <img
              alt="MedLink Logo"
              className="w-8 h-8 rounded-md object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrJ-NA2xVL4y3NIC0lpXni_MdQ0vxt4Aji4fkGis9VUuf4lkROaA_2C2rmLYzG5JZh0x1vlgQIbM0PHc9QNxihJdqhqgX0WtFNZs6eb10dZwaPiuqrjf4k1Wext_iq7QbUfQAkFBJex_g9MZvIG5uDZTaGmqP1bZzOpZFOZWh6HFObE4xffIQn1cyfRo9r2_vXqoXDb7ixzPDJmzzxm6tu6g7O8fenfgXLH1MlQ2apnORyPp5UbZWN"
            />
            MedLink
          </div>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
            href="#"
          >
            <span
              className="material-symbols-outlined"
              data-icon="help"
              style={{ fontSize: "20px" }}
            >
              help
            </span>
            Need Help?
          </a>
        </div>
      </header>
      <main className="flex-grow flex w-full">
        <div className="flex flex-col md:flex-row w-full">
          <div className="hidden md:flex md:w-1/2 bg-surface-container relative overflow-hidden flex-col justify-center items-center">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover opacity-80 mix-blend-multiply"
                data-alt="A high-quality, professional photograph of a diverse medical team in a modern, brightly lit hospital corridor. The scene conveys trust, expertise, and compassion. The lighting is soft and clinical, emphasizing a clean, modern aesthetic with subtle cool-toned blue accents that match the corporate brand identity. The image is composed to leave empty space for overlaid text, prioritizing a calm and reliable mood suitable for an enterprise healthcare platform."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKhoSzxXVy35QN5hYcY8drWwW74SQFasrrS5Mtyh-fbo89NWoFx74U6w-Jt6tbR_tdoga39iP_roHCuc-KuXkiJNROVW4x_xGc9eTmfyXcH53oPwZR1EN1KPq_JlckYSb1qS32OWVHWSwOYeL2Wn5mu6nhne-nHxB1hSdttQ9LiTHi50jft3H5vOPwhfFkaQL_0E5-mQWPYxqh6rd_uZYRMuUkOFIA1WLcYr3phxdAwYWvNrN6_2d9"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
            </div>
            <div className="relative z-10 p-10 text-white max-w-lg mt-auto pb-[48px]">
              <h1 className="font-display-lg text-display-lg mb-4 text-white drop-shadow-md">
                Connect to Better Care.
              </h1>
              <p className="font-body-lg text-body-lg text-white/90 mb-8 drop-shadow-sm">
                Join the MedLink network to streamline your medical records,
                connect with specialists, and manage your health journey
                securely.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  <img
                    alt="Doctor profile"
                    className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                    data-alt="A professional headshot of a smiling female doctor wearing a stethoscope, looking confidently at the camera. The background is a blurred modern clinic. The lighting is bright and even, highlighting her trustworthy expression. This image fits a clean, high-trust healthcare aesthetic."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDVM9SC5ndM4s4vobWgOdY5IfQSsN1k7I4h9I62-hJQk1XGROem8ML_kYf8Ewvj6SZj4HMzAwtm3oJJdZCA_H4hyN8cIjQ_0iNECBOUfomSD51edb-_5To4nOf4IO9BQR-dcIgfYWjn_yciAX8RaMLgq-Mau4e0GAQwWLAZKjR85j2FZINBGYbIUEQTrB1QndcNyeMyOJTYP_c0NQ4ZgNc62dcINScIYKaG0VwYstMMLL3PGXxevBd"
                  />
                  <img
                    alt="Doctor profile"
                    className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                    data-alt="A professional headshot of a mature male physician in a white coat. He exudes experience and reliability. The lighting is soft and flattering, set against a subtle, cool-toned background that aligns with a corporate medical brand identity."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIG8m4C6KVezibnjyQHUc11yUdZYp_3tuhtbe3vvLxtPosFNUCBPG49Zg-gwNTp2plcCfl0vWBNZ1iyQrUVbTzk2YRG2eYothWJe1CdDOLrdx7QZZFiitbRl6F5-FtEu6jQS5N7bjq6Uw_1n-ngGURs_lRUgiRs_hLaXk9S28GNmdl5_XZmPFdHPhQwjd6efrNMXUsv3Nnyn26SV0cjapY3lSJdQHJoHyW77YbA_lcGaTWEhHSIEPC"
                  />
                  <div className="w-10 h-10 rounded-full border-2 border-primary bg-secondary-container flex items-center justify-center text-on-secondary-container font-label-md text-label-md z-10">
                    +5k
                  </div>
                </div>
                <div className="font-label-lg text-label-lg text-white/90">
                  Trusted by professionals worldwide.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-margin-mobile md:p-10 bg-surface-container-lowest relative">
            <div className="w-full max-w-md">
              <div className="mb-8 text-center md:text-left">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-1">
                  Create your account
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Enter your details to get started with MedLink.
                </p>
              </div>
              <div className="flex items-center gap-3 mb-6 p-3 bg-surface-container-low rounded-lg border border-outline-variant">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="lock"
                  data-weight="fill"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  lock
                </span>
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg text-on-surface">
                    Secure &amp; Confidential
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    HIPAA Compliant Platform
                  </span>
                </div>
                <span
                  className="material-symbols-outlined text-green-600 ml-auto"
                  data-icon="verified_user"
                  data-weight="fill"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </span>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {errMsg ? (
                  <p style={{ color: "red", textAlign: "center" }}>{errMsg}</p>
                ) : null}
                <div className="space-y-1">
                  <label className="font-label-lg text-label-lg text-on-surface block">
                    I am joining as a:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="cursor-pointer">
                      <input
                        checked={role === "patient"}
                        className="peer sr-only"
                        name="role"
                        type="radio"
                        value={role}
                        onChange={() => setRole("patient")}
                      />
                      <div
                        className="p-3 rounded-lg border-2 border-outline-variant peer-checked:border-primary peer-checked:bg-surface-container flex flex-col items-center justify-center gap-1 transition-all hover:bg-surface-container-low h-full"
                        onClick={() => setRole("patient")}
                      >
                        <span
                          className="material-symbols-outlined text-secondary peer-checked:text-primary"
                          data-icon="person"
                        >
                          person
                        </span>
                        <span className="font-label-lg text-label-lg text-on-surface-variant peer-checked:text-on-surface peer-checked:font-bold">
                          Patient
                        </span>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        className="peer sr-only"
                        name="role"
                        type="radio"
                        value={role}
                        checked={role === "doctor"}
                        onChange={() => setRole("doctor")}
                      />
                      <div
                        className="p-3 rounded-lg border-2 border-outline-variant peer-checked:border-primary peer-checked:bg-surface-container flex flex-col items-center justify-center gap-1 transition-all hover:bg-surface-container-low h-full"
                        onClick={() => setRole("doctor")}
                      >
                        <span
                          className="material-symbols-outlined text-secondary peer-checked:text-primary"
                          data-icon="medical_services"
                        >
                          medical_services
                        </span>
                        <span className="font-label-lg text-label-lg text-on-surface-variant peer-checked:text-on-surface peer-checked:font-bold">
                          Doctor
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    className="font-label-lg text-label-lg text-on-surface block"
                    htmlFor="fullName"
                  >
                    First Name
                  </label>
                  <div className="relative">
                    <span
                      className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
                      data-icon="badge"
                    >
                      badge
                    </span>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-md py-3 pl-10 pr-3 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-shadow"
                      id="fullName"
                      name="fullName"
                      placeholder="Jane"
                      required
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    className="font-label-lg text-label-lg text-on-surface block"
                    htmlFor="fullName"
                  >
                    Last Name
                  </label>
                  <div className="relative">
                    <span
                      className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
                      data-icon="badge"
                    >
                      badge
                    </span>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-md py-3 pl-10 pr-3 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-shadow"
                      id="fullName"
                      name="fullName"
                      placeholder="Doe"
                      required
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    className="font-label-lg text-label-lg text-on-surface block"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <span
                      className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
                      data-icon="mail"
                    >
                      mail
                    </span>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-md py-3 pl-10 pr-3 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-shadow"
                      id="email"
                      name="email"
                      placeholder="jane@example.com"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    className="font-label-lg text-label-lg text-on-surface block"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <span
                      className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
                      data-icon="key"
                    >
                      key
                    </span>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-md py-3 pl-10 pr-3 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-shadow"
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      required
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <p className="font-label-md text-label-md text-on-surface-variant mt-xs">
                    Must be at least 8 characters long.
                  </p>
                </div>
                <div className="flex items-start gap-3 pt-1">
                  <input
                    className="mt-1 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest cursor-pointer"
                    id="terms"
                    required
                    type="checkbox"
                  />
                  <label
                    className="font-label-md text-label-md text-on-surface-variant cursor-pointer"
                    htmlFor="terms"
                  >
                    By creating an account, I agree to MedLink's{" "}
                    <a className="text-primary hover:underline" href="#">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a className="text-primary hover:underline" href="#">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
                <button
                  className="w-full bg-primary text-on-primary font-label-lg text-label-lg py-3 rounded-lg hover:bg-on-primary-fixed-variant transition-colors flex justify-center items-center gap-1 h-[48px] mt-4 shadow-sm"
                  type="submit"
                >
                  Create Account
                  <span
                    className="material-symbols-outlined"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </button>
              </form>
              <div className="mt-6 text-center">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Already have an account?
                  <Link to="/login">
                    <a
                      className="font-label-lg text-label-lg text-primary hover:underline"
                      href="#"
                    >
                      Log in here
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-surface-container-high dark:bg-inverse-surface w-full py-8 border-t border-outline-variant dark:border-outline">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 max-w-7xl mx-auto">
          <div className="flex flex-col gap-base">
            <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">
              MedLink
            </div>
            <div className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface">
              © 2024 MedLink Health Systems. All rights reserved.
            </div>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end items-center font-label-md text-label-md">
            <a
              className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity"
              href="#"
            >
              HIPAA Compliance
            </a>
            <a
              className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity"
              href="#"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Register;
