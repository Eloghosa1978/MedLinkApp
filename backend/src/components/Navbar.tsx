const Navbar = () => {
  return (
    <div className="bg-background text-on-background font-body-md h-screen overflow-hidden flex">
<nav className="hidden md:flex bg-surface-container-low flex-col h-screen w-72 p-md gap-base border-r border-outline-variant shrink-0">
<div className="flex items-center gap-sm mb-lg px-base">
<span className="material-symbols-outlined text-primary" data-icon="local_hospital" style="font-variation-settings: 'FILL' 1; font-size: 32px;">local_hospital</span>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-primary">MedLink</h1>
<p className="font-label-md text-label-md text-on-surface-variant">Patient Portal</p>
</div>
</div>
<div className="flex-1 overflow-y-auto space-y-xs pr-xs custom-scrollbar">
<a className="flex items-center gap-sm px-md py-sm w-full text-primary font-bold bg-secondary-container rounded-lg transition-colors duration-200 scale-95 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-lg text-label-lg">Dashboard</span>
</a>
<a className="flex items-center gap-sm px-md py-sm w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="person_search">person_search</span>
<span className="font-label-lg text-label-lg">Doctor Discovery</span>
</a>
<a className="flex items-center gap-sm px-md py-sm w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="medical_services">medical_services</span>
<span className="font-label-lg text-label-lg">AI Symptom Checker</span>
</a>
<a className="flex items-center gap-sm px-md py-sm w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="local_pharmacy">local_pharmacy</span>
<span className="font-label-lg text-label-lg">Find Pharmacy</span>
</a>
<a className="flex items-center gap-sm px-md py-sm w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-lg text-label-lg">Billing</span>
</a>
<a className="flex items-center gap-sm px-md py-sm w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="assignment">assignment</span>
<span className="font-label-lg text-label-lg">Symptom Intake</span>
</a>
<a className="flex items-center gap-sm px-md py-sm w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
<span className="font-label-lg text-label-lg">Appointment Details</span>
</a>
<a className="flex items-center gap-sm px-md py-sm w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="video_chat">video_chat</span>
<span className="font-label-lg text-label-lg">Telemedicine Room</span>
</a>
<a className="flex items-center gap-sm px-md py-sm w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="forum">forum</span>
<span className="font-label-lg text-label-lg">Messaging App</span>
</a>
<a className="flex items-center gap-sm px-md py-sm w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="prescriptions">prescriptions</span>
<span className="font-label-lg text-label-lg">Digital Prescription</span>
</a>
<a className="flex items-center gap-sm px-md py-sm w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="description">description</span>
<span className="font-label-lg text-label-lg">Medical Reports</span>
</a>
<a className="flex items-center gap-sm px-md py-sm w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="folder_shared">folder_shared</span>
<span className="font-label-lg text-label-lg">Medical Records</span>
</a>
<a className="flex items-center gap-sm px-md py-sm w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="font-label-lg text-label-lg">Notifications</span>
</a>
<a className="flex items-center gap-sm px-md py-sm w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="biotech">biotech</span>
<span className="font-label-lg text-label-lg">Lab Services</span>
</a>
<a className="flex items-center gap-sm px-md py-sm w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
<span className="font-label-lg text-label-lg">Health Metrics</span>
</a>
</div>
<!-- Footer -->
<div className="mt-auto pt-md border-t border-outline-variant space-y-md">
<button className="w-full bg-primary text-on-primary font-label-lg text-label-lg py-sm px-md rounded-lg hover:bg-surface-tint transition-colors">
                Book Appointment
            </button>
<div className="space-y-xs">
<a className="flex items-center gap-sm px-md py-sm w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="font-label-lg text-label-lg">Support</span>
</a>
<a className="flex items-center gap-sm px-md py-sm w-full text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors duration-200 scale-95 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-label-lg text-label-lg">Logout</span>
</a>
</div>
</div>
</nav>
<!-- Main Content Canvas -->
<main className="flex-1 flex flex-col h-screen overflow-y-auto bg-background">
<!-- Mobile Top Nav Placeholder (Visible only on mobile) -->
<header className="md:hidden bg-surface-container-lowest p-md flex items-center justify-between border-b border-outline-variant sticky top-0 z-10 shadow-sm">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" data-icon="local_hospital" style="font-variation-settings: 'FILL' 1;">local_hospital</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary">MedLink</h1>
</div>
<button className="text-on-surface-variant p-sm rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
</header>
<div className="p-margin-mobile md:p-margin-desktop flex-1 w-full max-w-7xl mx-auto space-y-xl">
<!-- Dashboard Welcome & Overview (Bento Grid Style) -->
<section className="space-y-md">
<div className="flex items-end justify-between">
<div>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Good Morning, Alex.</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-xs">Here is an overview of your health portal today.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
<!-- Primary Call to Action / Featured Card -->
<div className="col-span-1 md:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant p-lg flex flex-col justify-between relative overflow-hidden group">
<div className="absolute inset-0 bg-primary opacity-5 group-hover:opacity-10 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex items-start justify-between">
<div>
<div className="inline-flex items-center gap-xs bg-error-container text-on-error-container px-sm py-xs rounded-full font-label-md text-label-md mb-sm">
<span className="material-symbols-outlined text-[16px]" data-icon="notification_important">notification_important</span> Action Required
                                    </div>
<h3 className="font-headline-md text-headline-md text-on-surface">Complete Pre-visit Intake</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs max-w-md">Your appointment with Dr. Sarah Jenkins is tomorrow. Please complete the symptom intake form to expedite your visit.</p>
</div>
<span className="material-symbols-outlined text-primary p-sm bg-primary-container rounded-lg" data-icon="assignment">assignment</span>
</div>
<div className="mt-xl">
<button className="bg-primary text-on-primary font-label-lg text-label-lg py-sm px-xl rounded-lg hover:bg-surface-tint transition-colors inline-flex items-center gap-sm">
                                    Start Intake <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
<!-- Upcoming Appointment Mini Card -->
<div className="col-span-1 md:col-span-4 bg-surface-container-low rounded-xl p-lg flex flex-col justify-between">
<div className="flex items-center justify-between mb-sm">
<h4 className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider">Next Appointment</h4>
<span className="material-symbols-outlined text-on-surface-variant" data-icon="more_horiz">more_horiz</span>
</div>
<div className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant">
<div className="flex items-center gap-md">
<img className="w-12 h-12 rounded-full object-cover border border-outline-variant" data-alt="A professional headshot of a female doctor in a white coat with a stethoscope, bright clinic background, modern clinical aesthetic, high quality, well lit." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpo-qLuvmHmYwFA2fFelW9YhstLHGTc__POPUDJHwj9BWCSpeKpSkAVYm0UCDWEb69ukojThwwXdMPZgI6vFQ-qqRbpsk_UL4IW1mwsf2D3dh_kM3Kh90fAmDB8cKfdMb-Lx3LNsUXvDd2qqqPy584Uq_9LUaZkD2K78IqzmoEqeuwWwRtGzKTzpCDyPGAxsTApyDMATfqFo1ujwT2n2BRqw8DbFc_r9ZwW-zK8hrGVHbX-wLz40vCZg"/>
<div>
<p className="font-label-lg text-label-lg text-on-surface font-bold">Dr. Sarah Jenkins</p>
<p className="font-label-md text-label-md text-on-surface-variant">Cardiology</p>
</div>
</div>
<div className="mt-md pt-md border-t border-outline-variant flex items-center justify-between text-on-surface-variant">
<div className="flex items-center gap-xs font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px]" data-icon="calendar_today">calendar_today</span> Oct 24, 10:00 AM
                                </div>
<span className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-full font-label-md text-label-md">Video Visit</span>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
</div>
  )
}

export default Navbar