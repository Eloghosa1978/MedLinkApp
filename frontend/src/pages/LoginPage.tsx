import React, { useState } from "react";
import "../Design.css";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<"patient" | "doctor">("patient");
  const [errMsg, setErrMsg] = useState<string>("");
  const { syncUserWithBackend } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      const dynamicProfile = await syncUserWithBackend();
      if (dynamicProfile) {
        if (dynamicProfile.role !== role) {
          await signOut(auth);
          setErrMsg("Invalid role selection for this account.");
          return;
        }
      }
      if (role === "patient") {
        navigate("/patient/dashboard");
      } else if (role === "doctor") {
        navigate("/doctor/dashboard");
      }
    } catch (err) {
      console.error(err);
      setErrMsg("An error occured while logging you in");
    }
  };

  return (
    <div>
      <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col overflow-x-hidden">
        <main className="flex-grow flex flex-col lg:flex-row min-h-screen relative">
          <section className="hidden lg:flex lg:w-1/2 bg-primary-container relative overflow-hidden items-center justify-center p-8">
            <div className="absolute inset-0 pattern-bg opacity-10"></div>
            <div className="relative z-10 max-w-lg text-center">
              <div className="mb-6 inline-flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-secondary text-5xl"
                  data-icon="health_and_safety"
                >
                  health_and_safety
                </span>
                <h1 className="font-display-lg text-display-lg text-on-primary-container tracking-tighter">
                  MedLink
                </h1>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-secondary-container mb-4">
                Advancing Care through Connected Intelligence.
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container opacity-80">
                A unified ecosystem for patients and providers to manage health
                metrics, appointments, and medical records with uncompromising
                security.
              </p>

              <div className="mt-8 rounded-xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-64 object-cover"
                  data-alt="A professional medical environment featuring a high-tech digital interface displaying health analytics. The scene is bathed in a clinical yet soft corporate blue lighting, reflecting the MedLink brand's authoritative and empathetic identity. Detailed elements include a floating holographic stethoscope and clear data visualizations on a glass surface. The aesthetic is minimalist and modern, emphasizing clarity and technological advancement."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5_AsYldWvDhsgqop9cYsA3RTKlXHLXdUJypdsKNKG29uJrzpPCxI2122JMo-hN8DRAzPqYmmkB9Uq9mcElV8CWO5k1j8ZJrKN1qeN4iOOBhsoPVdbzNzTHCMnipufsdpPO81NXUH27sAMHjgqO81Pzt8UG-oDFlEV5oPdlLx-esMScEtsSrAkkQ1e91uHK0qLvohnW8oy5URTICt8HaJDmhnnw0j0hwUmylyHkb0TCpmA9VXZ7RiB5UDpe0sYEhoiHyVlSHH74BmE"
                />
              </div>
            </div>

            <div className="absolute bottom-10 left-10 flex gap-4 opacity-40">
              <span
                className="material-symbols-outlined text-secondary"
                data-icon="shield_with_heart"
              >
                shield_with_heart
              </span>
              <span
                className="material-symbols-outlined text-secondary"
                data-icon="clinical_notes"
              >
                clinical_notes
              </span>
              <span
                className="material-symbols-outlined text-secondary"
                data-icon="verified_user"
              >
                verified_user
              </span>
            </div>
          </section>

          <section className="flex-1 flex flex-col items-center justify-center p-margin-4 lg:p-8 bg-surface relative">
            <div className="lg:hidden mb-6 flex items-center gap-1">
              <span
                className="material-symbols-outlined text-secondary text-3xl"
                data-icon="health_and_safety"
              >
                health_and_safety
              </span>
              <span className="font-display-lg text-headline-md text-primary font-bold">
                MedLink
              </span>
            </div>
            <div className="w-full max-w-[440px] bg-surface-container-lowest p-6 lg:p-8 rounded-xl border border-outline-variant/10 auth-card-shadow">
              <div className="flex bg-surface-container rounded-lg p-2 mb-6">
                <button
                  className="flex-1 py-1 rounded-md font-label-md transition-all bg-secondary text-on-secondary shadow-sm"
                  id="tab-login"
                >
                  Login
                </button>
                <button
                  className="flex-1 py-1 rounded-md font-label-md transition-all text-on-surface-variant hover:bg-surface-container-high"
                  id="tab-register"
                >
                  <Link to="/signup-details">Create Account</Link>
                </button>
              </div>
              <div className="mb-6" id="auth-header">
                <h3 className="font-headline-md text-headline-md text-primary mb-1">
                  Welcome Back
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Please select your role to continue accessing the portal.
                </p>
              </div>

              <div className="flex gap-3 mb-6">
                <button
                  className={
                    role === "patient"
                      ? "flex-1 flex flex-col items-center gap-1 p-4 rounded-xl border-2 border-secondary bg-secondary-container/5 transition-all group"
                      : "flex-1 flex flex-col items-center gap-1 p-4 rounded-xl border border-outline-variant hover:border-secondary transition-all group"
                  }
                  id="role-patient"
                  onClick={() => setRole("patient")}
                >
                  <span
                    className="material-symbols-outlined text-secondary text-3xl group-hover:scale-110 transition-transform"
                    data-icon="person"
                  >
                    person
                  </span>
                  <span className="font-label-md text-secondary">
                    I am a Patient
                  </span>
                </button>
                <button
                  className={
                    role === "doctor"
                      ? "flex-1 flex flex-col items-center gap-1 p-4 rounded-xl border-2 border-secondary bg-secondary-container/5 transition-all group"
                      : "flex-1 flex flex-col items-center gap-1 p-4 rounded-xl border border-outline-variant hover:border-secondary transition-all group"
                  }
                  id="role-doctor"
                  onClick={() => setRole("doctor")}
                >
                  <span
                    className="material-symbols-outlined text-on-surface-variant text-3xl group-hover:scale-110 transition-transform"
                    data-icon="medical_services"
                  >
                    medical_services
                  </span>
                  <span className="font-label-md text-on-surface-variant">
                    I am a Doctor
                  </span>
                </button>
              </div>

              <form
                className="space-y-4"
                id="auth-form"
                onSubmit={handleSubmit}
              >
                {errMsg ? (
                  <p style={{ color: "red", textAlign: "center" }}>{errMsg}</p>
                ) : null}
                <div className="space-y-1">
                  <label
                    className="font-label-md text-on-surface-variant ml-1"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <div className="relative group">
                    <span
                      className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline"
                      data-icon="mail"
                    >
                      mail
                    </span>
                    <input
                      className="w-full h-12 pl-12 pr-4 bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      id="email"
                      placeholder="name@medical.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    className="font-label-md text-on-surface-variant ml-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative group">
                    <span
                      className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline"
                      data-icon="lock"
                    >
                      lock
                    </span>
                    <input
                      className="w-full h-12 pl-12 pr-12 bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      id="password"
                      placeholder="••••••••"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-secondary transition-colors"
                      type="button"
                    >
                      <span
                        className="material-symbols-outlined"
                        data-icon="visibility"
                        id="pw-toggle-icon"
                      >
                        visibility
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex justify-end" id="forgot-pw-container">
                  <a
                    className="font-label-md text-secondary hover:underline transition-all"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  className="w-full h-[48px] bg-secondary text-on-secondary font-label-md rounded-lg hover:bg-on-secondary-fixed-variant active:scale-[0.98] transition-all shadow-md"
                  type="submit"
                >
                  Sign In
                </button>
              </form>
            </div>

            <footer className="mt-8 w-full max-w-[440px] flex flex-col md:flex-row justify-between items-center gap-3 px-1">
              <span className="font-body-sm text-on-surface-variant opacity-60">
                © 2024 MedLink Healthcare
              </span>
              <div className="flex gap-4">
                <a
                  className="font-label-md text-secondary hover:text-on-secondary-fixed-variant transition-colors flex items-center gap-1"
                  href="#"
                >
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="support_agent"
                  >
                    support_agent
                  </span>{" "}
                  Support
                </a>
                <a
                  className="font-label-md text-secondary hover:text-on-secondary-fixed-variant transition-colors"
                  href="#"
                >
                  Legal
                </a>
              </div>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
