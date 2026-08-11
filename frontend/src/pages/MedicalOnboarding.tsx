const MedicalOnboarding = () => {
  return (
    <div className="bg-background text-on-background min-h-screen font-body-md overflow-x-hidden">
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-gutter h-16 bg-surface shadow-sm transition-colors border-b border-outline-variant/30">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md font-bold text-primary">Fluent Health</span>
</div>
<div className="hidden md:flex items-center gap-8">
<nav className="flex gap-6">
<a className="font-label-lg text-label-lg text-primary border-b-2 border-primary py-2" href="#">Onboarding</a>
<a className="font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container transition-colors py-2 px-2 rounded-lg" href="#">Directory</a>
<a className="font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container transition-colors py-2 px-2 rounded-lg" href="#">Support</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-primary" data-icon="notifications">notifications</span>
</button>
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A clean professional studio portrait of a healthcare worker or user, minimalist lighting, blue and white corporate tones, soft depth of field, high-resolution photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUnjsqCiCqLPQrN3nSTlLDRfBA-DHY20EGk4yVtc8fAhL2wYlVB8WQqnKrRb39K76AtVKSn9p80rLMN9ghuRuFxj3vM5EmidjjjRYbfGsPnd2VNbN8IyQ9t4iM9whUBRGwbmNv9FFFdJ-8OVXydXWlh6T2AXHKRY0x1lQS4corGDrr7WMPcc_d2vr1eA4gvbevUFa1_xHCQmzkPV8o6U3hCEl07urYKYQHeFo--ssJSWyJyazHW0OfYg"/>
</div>
</div>
</header>
<main className="pt-24 pb-12 px-4 md:px-margin-desktop max-w-5xl mx-auto">
<div className="mb-12">
<div className="flex justify-between items-center relative">
<div className="absolute top-5 left-0 w-full h-[2px] bg-outline-variant -z-10"></div>
<div className="absolute top-5 left-0 h-[2px] bg-primary transition-all duration-500 ease-in-out -z-10" id="progress-bar" style={{width: "0%"}}></div>
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-on-primary shadow-lg transition-colors border-4 border-background" id="step-circle-1">
<span className="material-symbols-outlined" data-icon="history_edu">history_edu</span>
</div>
<span className="font-label-md text-label-md text-primary" id="step-label-1">Medical History</span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high text-on-surface-variant transition-colors border-4 border-background" id="step-circle-2">
<span className="material-symbols-outlined" data-icon="medical_services">medical_services</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant" id="step-label-2">Medications</span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high text-on-surface-variant transition-colors border-4 border-background" id="step-circle-3">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant" id="step-label-3">Vitals</span>
</div>
</div>
</div>
<div className="bg-surface-container-low rounded-xl p-6 md:p-10 shadow-sm min-h-[600px] flex flex-col">
<section className="active-step step-transition space-y-8" id="wizard-step-1">
<div className="border-b border-outline-variant pb-6">
<h1 className="font-headline-lg text-headline-lg text-primary mb-2">Medical History</h1>
<p className="font-body-md text-on-surface-variant">Please provide details regarding your chronic conditions and previous surgical procedures to help us tailor your care plan.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-6">
<label className="block">
<span className="font-label-lg text-label-lg text-on-surface mb-2 block">Chronic Conditions</span>
<div className="grid grid-cols-1 gap-3">
<label className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-lg border border-outline-variant cursor-pointer hover:bg-surface-container-high transition-colors">
<input className="w-5 h-5 rounded text-primary border-outline focus:ring-primary" type="checkbox"/>
<span className="font-body-md">Hypertension</span>
</label>
<label className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-lg border border-outline-variant cursor-pointer hover:bg-surface-container-high transition-colors">
<input className="w-5 h-5 rounded text-primary border-outline focus:ring-primary" type="checkbox"/>
<span className="font-body-md">Type 2 Diabetes</span>
</label>
<label className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-lg border border-outline-variant cursor-pointer hover:bg-surface-container-high transition-colors">
<input className="w-5 h-5 rounded text-primary border-outline focus:ring-primary" type="checkbox"/>
<span className="font-body-md">Asthma / Respiratory</span>
</label>
<label className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-lg border border-outline-variant cursor-pointer hover:bg-surface-container-high transition-colors">
<input className="w-5 h-5 rounded text-primary border-outline focus:ring-primary" type="checkbox"/>
<span className="font-body-md">Thyroid Disorder</span>
</label>
</div>
</label>
</div>
<div className="space-y-6">
<label className="block">
<span className="font-label-lg text-label-lg text-on-surface mb-2 block">Past Surgeries &amp; Procedures</span>
<textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 font-body-md placeholder:text-outline focus:border-primary transition-all" placeholder="e.g. Appendectomy (2015), ACL Repair (2018)..." rows={6}></textarea>
</label>
<div className="p-4 bg-secondary-container/30 rounded-lg border border-secondary-container flex gap-4 items-start">
<span className="material-symbols-outlined text-primary" data-icon="info">info</span>
<p className="font-label-md text-on-secondary-container text-xs">Your data is encrypted and only accessible by your verified healthcare providers.</p>
</div>
</div>
</div>
</section>
<section className="hide-step step-transition space-y-8" id="wizard-step-2">
<div className="border-b border-outline-variant pb-6">
<h1 className="font-headline-lg text-headline-lg text-primary mb-2">Medications &amp; Allergies</h1>
<p className="font-body-md text-on-surface-variant">List all currently active medications, including dosages, and any known drug allergies.</p>
</div>
<div className="space-y-6">
<div className="flex justify-between items-center">
<h3 className="font-headline-md text-headline-md">Current Medications</h3>
<button className="flex items-center gap-2 text-primary font-label-lg hover:bg-primary-fixed p-2 rounded-lg transition-colors">
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span> Add Medication
                        </button>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-4 bg-surface-container-lowest border border-outline-variant rounded-lg">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="pill">pill</span>
</div>
<div>
<p className="font-label-lg text-on-surface">Lisinopril</p>
<p className="font-body-md text-on-surface-variant text-sm">10mg Oral Tablet • Once Daily</p>
</div>
</div>
<button className="text-error hover:bg-error-container p-2 rounded-full transition-colors">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container-lowest border border-outline-variant rounded-lg">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="pill">pill</span>
</div>
<div>
<p className="font-label-lg text-on-surface">Atorvastatin</p>
<p className="font-body-md text-on-surface-variant text-sm">20mg Oral Tablet • Evening</p>
</div>
</div>
<button className="text-error hover:bg-error-container p-2 rounded-full transition-colors">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
</div>
</div>
<div className="pt-6 border-t border-outline-variant">
<label className="block">
<span className="font-label-lg text-label-lg text-on-surface mb-2 block">Drug Allergies</span>
<div className="relative">
<span className="absolute left-4 top-3.5 material-symbols-outlined text-outline" data-icon="warning">warning</span>
<input className="w-full pl-12 bg-surface-container-lowest border border-outline-variant rounded-lg p-3 font-body-md" placeholder="e.g. Penicillin, Sulfa drugs..." type="text"/>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-3 py-1 bg-error-container text-on-error-container rounded-full font-label-md flex items-center gap-2">
                                    Penicillin <span className="material-symbols-outlined text-sm cursor-pointer" data-icon="close">close</span>
</span>
<span className="px-3 py-1 bg-error-container text-on-error-container rounded-full font-label-md flex items-center gap-2">
                                    Latex <span className="material-symbols-outlined text-sm cursor-pointer" data-icon="close">close</span>
</span>
</div>
</label>
</div>
</div>
</section>
<section className="hide-step step-transition space-y-8" id="wizard-step-3">
<div className="border-b border-outline-variant pb-6">
<h1 className="font-headline-lg text-headline-lg text-primary mb-2">Vitals &amp; Bio-Data</h1>
<p className="font-body-md text-on-surface-variant">Core physical measurements for baseline medical evaluation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<label className="block">
<span className="font-label-lg text-label-lg text-on-surface mb-2 block">Height (cm)</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 font-body-md focus:border-primary" placeholder="175" type="number"/>
</label>
<label className="block">
<span className="font-label-lg text-label-lg text-on-surface mb-2 block">Weight (kg)</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 font-body-md focus:border-primary" placeholder="72" type="number"/>
</label>
<label className="block">
<span className="font-label-lg text-label-lg text-on-surface mb-2 block">Blood Type</span>
<select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 font-body-md focus:border-primary appearance-none">
<option>Select Type</option>
<option>A+</option>
<option>A-</option>
<option>B+</option>
<option>B-</option>
<option>O+</option>
<option>O-</option>
<option>AB+</option>
<option>AB-</option>
</select>
</label>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
<div className="p-6 bg-surface-container border border-outline-variant rounded-xl flex items-center gap-6">
<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-4xl" data-icon="favorite">favorite</span>
</div>
<div>
<p className="font-label-lg text-on-surface">Pulse Rate</p>
<p className="font-display-lg text-display-lg text-primary">72 <span className="text-body-md text-on-surface-variant">BPM</span></p>
<p className="text-xs text-on-surface-variant mt-1">Normal Range: 60-100</p>
</div>
</div>
<div className="p-6 bg-surface-container border border-outline-variant rounded-xl flex items-center gap-6">
<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-4xl" data-icon="blood_pressure">blood_pressure</span>
</div>
<div>
<p className="font-label-lg text-on-surface">Blood Pressure</p>
<p className="font-display-lg text-display-lg text-primary">120/80 <span className="text-body-md text-on-surface-variant">mmHg</span></p>
<p className="text-xs text-on-surface-variant mt-1">Normal Range: &lt;120/80</p>
</div>
</div>
</div>
<div className="flex items-start gap-3 p-4 bg-primary-fixed/30 rounded-lg">
<span className="material-symbols-outlined text-primary" data-icon="lock">lock</span>
<p className="font-body-md text-on-primary-fixed-variant">This information is strictly confidential and protected under HIPAA compliance guidelines.</p>
</div>
</section>
<div className="mt-auto pt-10 flex justify-between items-center border-t border-outline-variant">
<button className="invisible flex items-center gap-2 px-6 py-3 font-label-lg text-on-surface-variant hover:bg-surface-container transition-all rounded-lg" id="prev-btn">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span> Previous
                </button>
<div className="flex gap-4">
<button className="px-6 py-3 font-label-lg text-on-surface-variant border border-outline-variant hover:bg-surface-container-high transition-all rounded-lg">
                        Save Draft
                    </button>
<button className="flex items-center gap-2 px-8 py-3 bg-primary text-on-primary font-label-lg rounded-lg shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all" id="next-btn">
                        Save &amp; Continue <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
</main>
<footer className="mt-auto border-t border-outline-variant py-8 px-4 md:px-margin-desktop bg-surface-container-low text-center">
<p className="font-label-md text-on-surface-variant">© 2024 Fluent Health Systems. All rights reserved. • Privacy Policy • Terms of Service</p>
</footer>
</div>
  )
}

export default MedicalOnboarding