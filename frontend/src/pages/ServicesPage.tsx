import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden pt-20">
      <header className="fixed top-0 w-full bg-surface-container-lowest shadow-sm z-50">
        <nav className="flex justify-between items-center px-10 md:px-10 px-4 h-20 w-full max-w-7xl mx-auto z-50">
          <div className="text-headline-md font-headline-md font-bold text-primary">
            MedLink
          </div>
          <ul className="hidden md:flex items-center space-x-6 font-body-md text-body-md">
            <Link to="/services">
              <li className="cursor-pointer text-primary font-bold border-b-2 border-primary pb-1">
                Services
              </li>
            </Link>
            <Link to="/">
              <li className="cursor-pointer text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-low px-3 py-2 rounded-md duration-200">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="cursor-pointer text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-low px-3 py-2 rounded-md duration-200">
                About
              </li>
            </Link>
          </ul>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <button className="hidden md:inline-flex items-center justify-center px-4 py-2 font-label-lg text-label-lg text-primary hover:bg-surface-container-low rounded-lg transition-colors">
                Sign In
              </button>
            </Link>
            <Link to="/emergencyservices">
              <button className="inline-flex items-center justify-center px-6 py-2 font-label-lg text-label-lg bg-error text-on-error hover:bg-error-container hover:text-on-error-container rounded-lg transition-colors shadow-sm">
                Emergency
              </button>
            </Link>
          </div>
        </nav>
      </header>
      <section className="bg-surface-container-low py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display-lg text-display-lg text-primary-container mb-4">
            Our Healthcare Services
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Providing specialized, compassionate care for every patient. Explore
            our comprehensive range of medical services designed to support your
            health and well-being at every stage of life.
          </p>
        </div>
      </section>
      <section className="py-24 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-headline-lg">
                  health_and_safety
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                Primary Care
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-lg">
                Comprehensive routine checkups, preventive care, and ongoing
                health management for all ages.
              </p>
              <a
                className="inline-flex items-center font-label-lg text-label-lg text-primary hover:text-primary-container mt-auto"
                href="#"
              >
                Learn More
                <span className="material-symbols-outlined ml-1 text-body-md">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-headline-lg">
                  surgical
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                Specialized Surgery
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-lg">
                Advanced surgical procedures performed by expert specialists
                using state-of-the-art technology.
              </p>
              <a
                className="inline-flex items-center font-label-lg text-label-lg text-primary hover:text-primary-container mt-auto"
                href="#"
              >
                Learn More
                <span className="material-symbols-outlined ml-1 text-body-md">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-headline-lg">
                  devices
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                Telemedicine
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-lg">
                Convenient virtual consultations with healthcare providers from
                the comfort of your home.
              </p>
              <a
                className="inline-flex items-center font-label-lg text-label-lg text-primary hover:text-primary-container mt-auto"
                href="#"
              >
                Learn More
                <span className="material-symbols-outlined ml-1 text-body-md">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-headline-lg">
                  psychology
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                Mental Health
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-lg">
                Compassionate psychiatric care, counseling, and therapy services
                for emotional well-being.
              </p>
              <a
                className="inline-flex items-center font-label-lg text-label-lg text-primary hover:text-primary-container mt-auto"
                href="#"
              >
                Learn More
                <span className="material-symbols-outlined ml-1 text-body-md">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-headline-lg">
                  child_care
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                Pediatrics
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-lg">
                Dedicated medical care tailored specifically for infants,
                children, and adolescents.
              </p>
              <a
                className="inline-flex items-center font-label-lg text-label-lg text-primary hover:text-primary-container mt-auto"
                href="#"
              >
                Learn More
                <span className="material-symbols-outlined ml-1 text-body-md">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-headline-lg">
                  medical_information
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                Diagnostic Imaging
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-lg">
                Accurate and detailed imaging services including X-rays, MRIs,
                and CT scans.
              </p>
              <a
                className="inline-flex items-center font-label-lg text-label-lg text-primary hover:text-primary-container mt-auto"
                href="#"
              >
                Learn More
                <span className="material-symbols-outlined ml-1 text-body-md">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-headline-lg">
                  favorite
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                Cardiology
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-lg">
                Expert diagnosis and treatment of heart conditions to keep your
                cardiovascular system healthy.
              </p>
              <a
                className="inline-flex items-center font-label-lg text-label-lg text-primary hover:text-primary-container mt-auto"
                href="#"
              >
                Learn More
                <span className="material-symbols-outlined ml-1 text-body-md">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-headline-lg">
                  directions_run
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                Physical Therapy
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-lg">
                Rehabilitation programs designed to restore mobility, reduce
                pain, and improve fitness.
              </p>
              <a
                className="inline-flex items-center font-label-lg text-label-lg text-primary hover:text-primary-container mt-auto"
                href="#"
              >
                Learn More
                <span className="material-symbols-outlined ml-1 text-body-md">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary py-24 px-4 md:px-10 text-on-primary">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="material-symbols-outlined text-display-lg mb-4">
            calendar_month
          </span>
          <h2 className="font-headline-lg text-headline-lg md:text-display-lg font-display-lg mb-3">
            Ready to Schedule a Visit?
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed mb-xl max-w-2xl">
            Our specialists are ready to provide the care you need. Book your
            appointment online today or call our dedicated patient support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button className="bg-surface-container-lowest text-primary hover:bg-surface-container-low font-label-lg text-label-lg py-4 px-8 rounded-lg shadow-sm transition-colors w-full sm:w-auto">
              Book Appointment Online
            </button>
            <button className="bg-transparent border-2 border-surface-container-lowest text-on-primary hover:bg-on-primary/10 font-label-lg text-label-lg py-4 px-8 rounded-lg transition-colors w-full sm:w-auto flex items-center justify-center">
              <span className="material-symbols-outlined mr-3">call</span>
              1-800-MEDLINK
            </button>
          </div>
        </div>
      </section>
      <footer className="w-full py-8 bg-surface-container-lowest border-t border-surface-container-highest">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 w-full max-w-7xl mx-auto gap-6">
          <div className="text-headline-md font-headline-md font-bold text-on-surface">
            MedLink
          </div>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 font-label-lg text-label-lg">
            <li>
              <a
                className="text-on-surface-variant hover:text-primary hover:underline transition-all"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant hover:text-primary hover:underline transition-all"
                href="#"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant hover:text-primary hover:underline transition-all"
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant hover:text-primary hover:underline transition-all"
                href="#"
              >
                Careers
              </a>
            </li>
          </ul>
          <div className="text-on-surface-variant font-label-lg text-label-lg text-center md:text-right">
            © 2024 MedLink Healthcare Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
