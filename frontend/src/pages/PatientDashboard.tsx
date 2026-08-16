import "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const PatientDashboard = () => {
  const { handleLogout, mongoUser } = useAuth();

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex overflow-hidden">
      <nav className="hidden md:flex bg-surface-container-lowest flex-col h-screen w-64 p-4 gap-2 border-r border-outline-variant shrink-0 fixed left-0 top-0">
        <div className="flex items-center gap-3 mb-lg px-base">
          <span
            className="material-symbols-outlined text-primary"
            data-icon="local_hospital"
            style={{ fontVariationSettings: "'FILL' 1", fontSize: "32px" }}
          >
            local_hospital
          </span>
          <div>
            <h1 className="font-headline-md text-headline-md font-bold text-primary">
              MedLink
            </h1>
            <p className="font-label-md text-label-md text-on-surface-variant">
              Patient Portal
            </p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
          <Link to="/patient/dashboard">
            <a className="flex items-center gap-3 px-4 py-3 w-full text-primary font-bold bg-secondary-container rounded-lg transition-colors duration-200 scale-95 active:opacity-80">
              <span className="material-symbols-outlined" data-icon="dashboard">
                dashboard
              </span>
              <span className="font-label-lg text-label-lg">Dashboard</span>
            </a>
          </Link>
          <Link to="/patient/doctordiscovery">
            <a className="flex items-center gap-3 px-4 py-3 w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80">
              <span
                className="material-symbols-outlined"
                data-icon="person_search"
              >
                person_search
              </span>
              <span className="font-label-lg text-label-lg">
                Doctor Discovery
              </span>
            </a>
          </Link>
          <Link to="/patient/aisymptomschecker">
            <a className="flex items-center gap-3 px-4 py-3 w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80">
              <span
                className="material-symbols-outlined"
                data-icon="medical_services"
              >
                medical_services
              </span>
              <span className="font-label-lg text-label-lg">
                AI Symptom Checker
              </span>
            </a>
          </Link>
          <Link to="/patient/findpharmacy">
            <a className="flex items-center gap-3 px-4 py-3 w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80">
              <span
                className="material-symbols-outlined"
                data-icon="local_pharmacy"
              >
                local_pharmacy
              </span>
              <span className="font-label-lg text-label-lg">Find Pharmacy</span>
            </a>
          </Link>
          <Link to="/patient/billing">
            <a className="flex items-center gap-3 px-4 py-3 w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80">
              <span className="material-symbols-outlined" data-icon="payments">
                payments
              </span>
              <span className="font-label-lg text-label-lg">Billing</span>
            </a>
          </Link>
          <Link to="/patient/symptomsintake">
            <a className="flex items-center gap-3 px-4 py-3 w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80">
              <span
                className="material-symbols-outlined"
                data-icon="assignment"
              >
                assignment
              </span>
              <span className="font-label-lg text-label-lg">
                Symptom Intake
              </span>
            </a>
          </Link>
          <Link to="/patient/appointmentdetails">
            <a className="flex items-center gap-3 px-4 py-3 w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80">
              <span
                className="material-symbols-outlined"
                data-icon="calendar_today"
              >
                calendar_today
              </span>
              <span className="font-label-lg text-label-lg">
                Appointment Details
              </span>
            </a>
          </Link>
          <Link to="/patient/telemedicineroom">
            <a className="flex items-center gap-3 px-4 py-3 w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80">
              <span
                className="material-symbols-outlined"
                data-icon="video_chat"
              >
                video_chat
              </span>
              <span className="font-label-lg text-label-lg">
                Telemedicine Room
              </span>
            </a>
          </Link>
          <Link to="/patient/messaging">
            <a className="flex items-center gap-3 px-4 py-3 w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80">
              <span className="material-symbols-outlined" data-icon="forum">
                forum
              </span>
              <span className="font-label-lg text-label-lg">Messaging App</span>
            </a>
          </Link>
          <Link to="/patient/digitalprescription">
            <a className="flex items-center gap-3 px-4 py-3 w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80">
              <span
                className="material-symbols-outlined"
                data-icon="prescriptions"
              >
                prescriptions
              </span>
              <span className="font-label-lg text-label-lg">
                Digital Prescription
              </span>
            </a>
          </Link>
          <Link to="/patient/medicalreports">
            <a className="flex items-center gap-3 px-4 py-3 w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80">
              <span
                className="material-symbols-outlined"
                data-icon="description"
              >
                description
              </span>
              <span className="font-label-lg text-label-lg">
                Medical Reports
              </span>
            </a>
          </Link>
          <Link to="/patient/medicalrecords">
            <a className="flex items-center gap-3 px-4 py-3 w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80">
              <span
                className="material-symbols-outlined"
                data-icon="folder_shared"
              >
                folder_shared
              </span>
              <span className="font-label-lg text-label-lg">
                Medical Records
              </span>
            </a>
          </Link>
          <Link to="/patient/notifications">
            <a className="flex items-center gap-3 px-4 py-3 w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80">
              <span
                className="material-symbols-outlined"
                data-icon="notifications"
              >
                notifications
              </span>
              <span className="font-label-lg text-label-lg">Notifications</span>
            </a>
          </Link>
          <Link to="/patient/labservices">
            <a className="flex items-center gap-3 px-4 py-3 w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80">
              <span className="material-symbols-outlined" data-icon="biotech">
                biotech
              </span>
              <span className="font-label-lg text-label-lg">Lab Services</span>
            </a>
          </Link>
          <Link to="/patient/healthmetrics">
            <a className="flex items-center gap-3 px-4 py-3 w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80">
              <span
                className="material-symbols-outlined"
                data-icon="monitoring"
              >
                monitoring
              </span>
              <span className="font-label-lg text-label-lg">
                Health Metrics
              </span>
            </a>
          </Link>
        </div>
        <div className="mt-auto pt-4 border-t border-outline-variant space-y-4">
          <button className="w-full bg-primary text-on-primary font-label-lg text-label-lg py-3 px-4 rounded-lg hover:bg-surface-tint transition-colors">
            Book Appointment
          </button>
          <div className="space-y-1">
            <a className="flex items-center gap-3 px-4 py-3 w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80">
              <span className="material-symbols-outlined" data-icon="help">
                help
              </span>
              <span className="font-label-lg text-label-lg">Support</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80">
              <span className="material-symbols-outlined" data-icon="logout">
                logout
              </span>
              <span
                className="font-label-lg text-label-lg"
                onClick={handleLogout}
              >
                Logout
              </span>
            </a>
          </div>
        </div>
      </nav>
      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-surface md:ml-64 px-4 md:px-margin-desktop py-6 md:py-xl">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">
              Welcome back, {mongoUser?.firstName} {mongoUser?.lastName}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant shadow-sm flex-shrink-0">
              <img
                alt="Sarah Johnson Profile"
                className="w-full h-full object-cover"
                data-alt="A professional headshot of a middle-aged woman with short brown hair, wearing a light blue blouse, set against a bright, modern, minimalist medical office background. Soft, even lighting, high-key medical corporate aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkRii5pb_BZp56MSEtCydFtYKbLr-ETJOYSXRqXV5ZBUSbbcDEX-VBRKz-pU1UOYmc5llFibSsnigpyEvDPS7Vhms8Hzbg50Z7CYARxc_h84DZz1JePjtZsigfWtw9UfRuA_6Umi4ip4laMdKjwRqD5FiJyzQmzDhMkp-B9Zujc7DGsT5poyFKf96f4HPtOmJzDyIzSmFbH99HArVVPMVln0QQPD_IPP7l_nFipGD3KSDBoM38NPKNbA"
              />
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant shadow-sm relative overflow-hidden group">
                <div className="flex justify-between items-start mb-3">
                  <span className="font-label-lg text-label-lg text-on-surface-variant">
                    Heart Rate
                  </span>
                  <span
                    className="material-symbols-outlined text-error/80"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    favorite
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-lg text-headline-lg text-on-surface">
                    72
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    bpm
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 opacity-20 bg-gradient-to-t from-error/30 to-transparent"></div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-start mb-3">
                  <span className="font-label-lg text-label-lg text-on-surface-variant">
                    Blood Pressure
                  </span>
                  <span
                    className="material-symbols-outlined text-primary/80"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    blood_pressure
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-lg text-headline-lg text-on-surface">
                    118/76
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    mmHg
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 opacity-20 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-start mb-3">
                  <span className="font-label-lg text-label-lg text-on-surface-variant">
                    Weight History
                  </span>
                  <span
                    className="material-symbols-outlined text-tertiary/80"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    monitor_weight
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-lg text-headline-lg text-on-surface">
                    164.2
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    lbs
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 opacity-20 bg-gradient-to-t from-tertiary/30 to-transparent"></div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6">
              <div className="flex justify-between items-center mb-4 border-b border-outline-variant/30 pb-3">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Recent Lab Results
                </h3>
                <a className="font-label-lg text-label-lg text-primary hover:underline">
                  View All
                </a>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center justify-between p-3 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer border border-transparent hover:border-outline-variant/50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        biotech
                      </span>
                    </div>
                    <div>
                      <p className="font-label-lg text-label-lg text-on-surface">
                        Complete Blood Count (CBC)
                      </p>
                      <p className="font-label-md text-label-md text-on-surface-variant">
                        Oct 15, 2024 • Quest Diagnostics
                      </p>
                    </div>
                  </div>
                  <span className="bg-primary-container text-on-primary-container font-label-md px-3 py-1 rounded-full">
                    Normal
                  </span>
                </li>
                <li className="flex items-center justify-between p-3 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer border border-transparent hover:border-outline-variant/50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        science
                      </span>
                    </div>
                    <div>
                      <p className="font-label-lg text-label-lg text-on-surface">
                        Lipid Panel
                      </p>
                      <p className="font-label-md text-label-md text-on-surface-variant">
                        Oct 15, 2024 • Quest Diagnostics
                      </p>
                    </div>
                  </div>
                  <span className="bg-primary-container text-on-primary-container font-label-md px-3 py-1 rounded-full">
                    Normal
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
                  Next Appointment
                </span>
                <span
                  className="material-symbols-outlined text-on-surface-variant"
                  data-icon="more_horiz"
                >
                  more_horiz
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="font-headline-md text-headline-md mb-1 text-on-surface">
                  Dr. Aris Thorne
                </h3>
                <p className="font-body-md text-body-md mb-4 text-on-surface-variant">
                  Cardiology Specialist
                </p>
                <div className="flex items-center gap-3 mb-3 p-3 rounded-lg w-fit">
                  <span className="material-symbols-outlined text-sm text-on-surface-variant">
                    calendar_today
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Oct 24, 2024 at 10:30 AM
                  </span>
                </div>
                <button className="w-full mt-sm bg-primary text-on-primary font-label-lg text-label-lg py-3 px-4 rounded-lg hover:bg-surface-tint transition-colors flex justify-center items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined">video_call</span>
                  Join Video Consultation
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6 flex-1">
              <div className="flex justify-between items-center mb-4 border-b border-outline-variant/30 pb-3">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Daily Medications
                </h3>
                <span className="material-symbols-outlined text-on-surface-variant">
                  medication
                </span>
              </div>
              <ul className="flex flex-col gap-1">
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-colors group">
                  <input
                    className="mt-1 rounded-sm text-primary focus:ring-primary border-outline-variant bg-surface-container-low h-4 w-4"
                    type="checkbox"
                  />
                  <div>
                    <p className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">
                      Lisinopril 10mg
                    </p>
                    <p className="font-label-md text-label-md text-on-surface-variant">
                      1 pill, Morning
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-colors group">
                  <input
                    className="mt-1 rounded-sm text-primary focus:ring-primary border-outline-variant bg-surface-container-low h-4 w-4"
                    type="checkbox"
                  />
                  <div>
                    <p className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">
                      Atorvastatin 20mg
                    </p>
                    <p className="font-label-md text-label-md text-on-surface-variant">
                      1 pill, Evening
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-colors group">
                  <input
                    className="mt-1 rounded-sm text-primary focus:ring-primary border-outline-variant bg-surface-container-low h-4 w-4"
                    type="checkbox"
                  />
                  <div>
                    <p className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">
                      Vitamin D3 2000 IU
                    </p>
                    <p className="font-label-md text-label-md text-on-surface-variant">
                      1 pill, with food
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <div className="fixed bottom-margin-desktop right-margin-desktop flex flex-col gap-3 z-50">
        <button
          aria-label="Message Doctor"
          className="w-14 h-14 rounded-xl bg-secondary-container text-on-secondary-container shadow-md hover:shadow-lg transition-all flex items-center justify-center hover:-translate-y-1"
        >
          <span
            className="material-symbols-outlined text-2xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            <Link to="/patient/messagingpage">chat</Link>
          </span>
        </button>
        <button
          aria-label="Book New Appointment"
          className="w-14 h-14 rounded-xl bg-primary text-on-primary shadow-md hover:shadow-lg transition-all flex items-center justify-center hover:-translate-y-1"
        >
          <span
            className="material-symbols-outlined text-2xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            <Link to="/patient/appointmentdetails">add</Link>
          </span>
        </button>
      </div>
    </div>
  );
};
export default PatientDashboard;
