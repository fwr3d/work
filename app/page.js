"use client";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'; 
import Image from 'next/image'; // Optimized Image Component
import dynamic from 'next/dynamic';
import { 
  Target, ShieldCheck, Heart, Users, Database, 
  Cpu, Eye, MonitorPlay, CheckCircle2, 
  MapPin, Mail, Building2, GraduationCap, Award,Loader2
} from 'lucide-react';

// Lazy load Spline (SSR false)
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-gray-50" />, 
});

export default function Home() {
  const router = useRouter();

  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(true); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const techImages = ["/SIM.png", "/SIM2.png"]; 

  // 1. Detect Screen Size to Disable Spline on Mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // 2. Slideshow Interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % techImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [techImages.length]);

  async function handleSubmit(event) {
    event.preventDefault(); 
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formspree.io/f/mrbjenoe", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        router.push('/thank-you'); 
      } else {
        setIsSubmitting(false);
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("Error submitting form");
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section id="home" className="relative h-[70vh] w-full flex items-center justify-center bg-gray-50 overflow-hidden">
        
        {/* Only render Spline if NOT mobile */}
        {!isMobile && (
          <div className={`absolute inset-0 z-0 hidden md:block transition-opacity duration-1000 ease-in-out ${isSplineLoaded ? 'opacity-100' : 'opacity-0'}`}>
             <Spline 
               scene="https://prod.spline.design/QkMeddUzFh1r5iQy/scene.splinecode" 
               onLoad={() => setIsSplineLoaded(true)}
             />
          </div>
        )}

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left pointer-events-none w-full">
           <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6 drop-shadow-sm">
            Autonomous  <br />
            <span className="text-green-700">Precision Vaccinations</span>
          </h1>
             <p className="mt-4 text-xl text-gray-600 max-w-2xl mb-10 font-medium">
            Huroca combines advanced robotics and computer vision to automate agricultural processes.
          </p>
          <div className="flex justify-start gap-4 pointer-events-auto">
              <a 
                href="#about" 
                className="bg-green-800 backdrop-blur-sm text-white border border-gray-300 px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-green-600 transition text-base md:text-lg inline-block text-center"
              >
                Learn More
              </a>
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Supported By Section */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Industry and Academic Network
          </p>
          
          {/* Logo Grid - Converted to Next/Image */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-100 transition-all duration-500">
            
            <div className="w-80 h-32 relative hover:grayscale-0 transition-all duration-300">
               <Image 
                  src="/HUB.png" 
                  alt="Hub for Neuroengineering Solutions" 
                  fill 
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 320px"
               />
            </div>
            
            <div className="w-64 h-32 relative hover:grayscale-0 transition-all duration-300">
               <Image 
                  src="/ACFA.png" 
                  alt="Alberta Cattle Feeders Association" 
                  fill 
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 256px"
               />
            </div>
            
            <div className="w-64 h-32 relative hover:grayscale-0 transition-all duration-300">
               <Image 
                  src="/UOFL_Horizontal.png" 
                  alt="University of Lethbridge" 
                  fill 
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 256px"
               />
            </div>
          </div>
        </div>
      </section>
      
       <section id="technology" className="relative py-30 bg-white border-t border-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Validated in <span className="text-green-700">Simulation.</span> <br />
              Deployed in Reality.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
               Huroca utilizes NVIDIA Isaac Sim technology to validate every movement before it happens in the real world. We bridge the gap between synthetic training and physical execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            
            {/* Left Col: Slideshow Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-gray-200 group">
               <div className="aspect-[4/3] bg-slate-900 relative flex items-center justify-center overflow-hidden">

                  {/* Slideshow Images - Converted to Next/Image */}
                  {techImages.map((src, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                        index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    >
                      <Image 
                        src={src}
                        alt={`Simulation View ${index + 1}`}
                        fill
                        className="object-contain"
                        priority={index === 0} 
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}

                  {/* Navigation Dots */}
                  <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 z-20">
                    {techImages.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-green-500 w-4' : 'bg-white/50 hover:bg-white'}`}
                      />
                    ))}
                  </div>
               </div>
            </div>

            {/* Right Col: Features List */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                  <Eye className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Driven Perception</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our system uses Mask R-CNN (Detectron2) to identify the perfect injection site on the neck musculature instantly.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
                   <Cpu className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Chute Compatible</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Designed as a modular add-on that integrates into your existing standard squeeze chutes without the need to rebuild your facility.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                 <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 border border-orange-100">
                   <CheckCircle2 className="w-10 h-10" />
                 </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Robotic Precision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A 6-DOF robotic arm adjusts to animal variability in real-time, ensuring consistent depth and dosage regardless of animal size.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                 <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-green-50 flex items-center justify-center text-green-600 border border-green-100">
                   <MonitorPlay className="w-10 h-10" />
                 </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Zero Downtime</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The "Robotics-as-a-Service" model covers hardware, software, and maintenance, ensuring you are always operational without upfront CapEx risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID VALUE PROP SECTION --- */}
      <section id="whyus" className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Replacing manual risk <br />
              with <span className="text-green-700">robotic reliability.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-blue-100 pl-6">
              Huroca brings industrial robotics and computer vision to the feedlot,
              delivering safer, faster, and perfectly accurate injections every single time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            <div className="col-span-1 md:col-span-6 lg:col-span-7 group relative p-8 md:p-10 bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target size={180} strokeWidth={1} />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Risk-Free Precision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Manual injections are dangerous and inconsistent. Huroca delivers perfect,
                  repeatable accuracy eliminating site lesions and ensuring exact dosing protocols.
                </p>
              </div>
            </div>

            <div className="col-span-1 md:col-span-3 lg:col-span-5 group p-8 md:p-10 bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 shadow-sm">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safer Workplaces</h3>
              <p className="text-gray-600 leading-relaxed">
                Automation removes staff from the “line of fire,” drastically reducing injuries, liability exposure, and insurance costs.
              </p>
            </div>

            <div className="col-span-1 md:col-span-3 lg:col-span-4 group p-8 bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-4 text-rose-600">
                <Heart size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Animal Welfare</h3>
              <p className="text-gray-500 text-sm">
                Touchless vision systems lower handling stress, reducing dark-cutting beef risks.
              </p>
            </div>

            <div className="col-span-1 md:col-span-3 lg:col-span-4 group p-8 bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4 text-amber-600">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Operational Efficiency</h3>
              <p className="text-gray-500 text-sm">
                Solves staffing shortages so your crew can apply their expertise where it matters most
              </p>
            </div>

            <div className="col-span-1 md:col-span-6 lg:col-span-4 group p-8 bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                  <Database size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Traceability</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Automated logging of animal ID, dosage, and timestamp. 100% accurate records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

         <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Text Column */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-wide uppercase mb-6">
                  <MapPin size={14} />
                  Born in Lethbridge
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Bringing technology where it’s <br/>
                  <span className="text-green-700">needed the most.</span>
                </h2>
                
                <div className="space-y-6 text-lg text-gray-600">
                  <p>
                    Huroca is a homegrown startup born in 
                    <span className="font-semibold text-gray-900"> Lethbridge, Alberta</span> the heart of Canada’s Feedlot Alley.
                  </p>
                  <p>
                    We saw a gap between advanced automation technology and the rugged, practical needs of Southern Alberta feedlots. Our mission is simple: to build the bridge that brings industry grade robotics directly to the chute.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center text-blue-600 shrink-0">
                      <Building2 size={40} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Industry Network</h4>
                      <p className="text-sm text-gray-500 mt-1"> UFA & Alberta Cattle Feeders Association</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center text-purple-600 shrink-0">
                      <GraduationCap size={40} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Research Driven</h4>
                      <p className="text-sm text-gray-500 mt-1">Univ. of Lethbridge & Hub for Neuroengineering Solutions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-green-100 to-blue-50 rounded-[2.5rem] blur-2xl opacity-60"></div>
                <div className="relative bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100">
                   <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                         <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-700">
                            <Award size={24} />
                         </div>
                         <div>
                            <h3 className="font-bold text-xl text-gray-900">Made for the Industry</h3>
                            <p className="text-sm text-gray-500">Solving real problems for real producers.</p>
                         </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-6">
                         <p className="text-gray-600 italic text-lg leading-relaxed">
                           "We aren't just building robots; we are building the future workforce of the feedlot. Reliable, safe, and always operational."
                         </p>
                         <div className="mt-4 flex items-center gap-3">
                             {/* Small Quote Portrait - Converted */}
                             <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 border border-gray-200 relative">
                                <Image 
                                  src="/potraits/emilio.jpeg" 
                                  alt="Emilio Hurtado" 
                                  fill 
                                  className="object-cover" 
                                />
                            </div>
                            <span className="text-s font-bold text-gray-900">Emilio Hurtado, CEO</span>
                         </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 text-center">
                         <div className="p-3 bg-blue-50 rounded-lg">
                            <span className="block text-lg font-bold text-blue-700">AB</span>
                            <span className="text-[10px] font-bold text-blue-400 uppercase">Born</span>
                         </div>
                         <div className="p-3 bg-green-50 rounded-lg">
                            <span className="block text-lg font-bold text-green-700">2024</span>
                            <span className="text-[10px] font-bold text-green-400 uppercase">Est.</span>
                         </div>
                         <div className="p-3 bg-purple-50 rounded-lg">
                            <span className="block text-lg font-bold text-purple-700">UofL</span>
                            <span className="text-[10px] font-bold text-purple-400 uppercase">R&D</span>
                         </div>
                      </div>
                   </div>
                </div>
              </div>

            </div>
         </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Team</h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Bringing together expertise in Computer Science, Neuroscience, and Robotics to transform agriculture.
          </p>
          
          {/* Core Team Grid - Converted to Next/Image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden relative">
                 <Image src="/potraits/emilio.jpeg" alt="Emilio Hurtado" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Emilio Hurtado</h3>
              <p className="text-green-700 font-medium mb-3">Co-Founder & CEO</p>
              <p className="text-gray-500 text-sm">
                Combines a background in AI & Neuroscience with hands-on feedlot experience to lead the vision for automated cattle care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden relative">
                 <Image src="/potraits/chandra.jpg" alt="Chandra Suryadevara" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Chandra Suryadevara</h3>
              <p className="text-green-700 font-medium mb-3">Co-Founder & CTO</p>
              <p className="text-gray-500 text-sm">
                Specializing in Software-Hardware integration, robotics systems, and software architecture.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden relative">
                 <Image src="/potraits/brendon.png" alt="Brendon Penner" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Brendon Penner</h3>
              <p className="text-green-700 font-medium mb-3">COO</p>
              <p className="text-gray-500 text-sm">
                 Leadership-driven operations expert with experience managing the Hub for Neuroengineering Solutions. Dedicated to team success and execution excellence.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 relative inline-block">
              Mentors & Advisors
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-green-100 rounded-full"></span>
            </h3>
            
            {/* Advisors - Converted to Next/Image */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-all">
                <div className="w-20 h-20 bg-blue-50 rounded-full mx-auto mb-4 overflow-hidden relative border border-blue-100">
                  <Image src="/potraits/hardeep.jpeg" alt="Dr. Hardeep Ryait" fill className="object-cover" />
                </div>
                <h3 className="text-base font-bold text-gray-900">Dr. Hardeep Ryait</h3>
                <p className="text-green-600 text-xs font-bold uppercase tracking-wide mb-2">Technical Mentor</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Expert engineering guidance on technical architecture and research direction.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-purple-100 transition-all">
                <div className="w-20 h-20 bg-purple-50 rounded-full mx-auto mb-4 overflow-hidden relative border border-purple-100">
                  <Image src="/potraits/Shapiro.png" alt="Dr. Sydney Shapiro" fill className="object-cover" />
                </div>
                <h3 className="text-base font-bold text-gray-900">Dr. Sydney Shapiro</h3>
                <p className="text-green-600 text-xs font-bold uppercase tracking-wide mb-2">Business Advisor</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Strategic direction and growth mentorship for scaling ventures.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-green-100 transition-all">
                <div className="w-20 h-20 bg-green-50 rounded-full mx-auto mb-4 overflow-hidden relative border border-green-100">
                  <Image src="/potraits/cristo.jpeg" alt="Cristo Hurtado" fill className="object-cover" />
                </div>
                <h3 className="text-base font-bold text-gray-900">Cristo Hurtado</h3>
                <p className="text-green-600 text-xs font-bold uppercase tracking-wide mb-2">Industry Advisor</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Deep feedlot industry insights and operational guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section id="contact" className="relative py-24 bg-white overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Col: Info & CTA */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Ready to automate <br/> 
                <span className="text-green-700">your feedlot?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Whether you are interested in piloting our technology, investing in the future of ag-tech, or just want to learn more, we want to hear from you. We are currently accepting partners for our pilot program in Alberta.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Headquarters</h3>
                    <p className="text-gray-600 mt-1">Lethbridge, Alberta<br/>Canada</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 shrink-0 border border-green-100">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Email Us</h3>
                    <a href="mailto:info@hurocatech.com" className="text-gray-600 hover:text-green-700 mt-1 block transition-colors">
                      info@hurocatech.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Form Card */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 p-8 lg:p-10 relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
               <form 
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:ring-2 focus:ring-green-800 focus:border-transparent outline-none transition-all placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:ring-2 focus:ring-green-800 focus:border-transparent outline-none transition-all placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:ring-2 focus:ring-green-800 focus:border-transparent outline-none transition-all placeholder-gray-400"
                    placeholder="Tell us about your farm or inquiry..."
                  ></textarea>
                </div>

               <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-green-900 text-white font-bold py-4 px-6 rounded-xl hover:bg-green-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-green-900/20 flex justify-center items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                 {/* Footer Icon - Converted to Next/Image with specific size */}
                 <Image 
                    src="/Huroca-Icon.png" 
                    alt="Huroca" 
                    width={32} 
                    height={32} 
                    className="brightness-0 invert h-8 w-auto" 
                 />
                 <span className="text-2xl font-bold text-white">Huroca</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Pioneering autonomous robotics for the modern feedlot. Born in Alberta, built for the world.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
                <li><a href="#technology" className="hover:text-green-400 transition-colors">Technology</a></li>
                <li><a href="#whyus" className="hover:text-green-400 transition-colors">Why Us</a></li>
                <li><a href="#team" className="hover:text-green-400 transition-colors">Our Team</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 text-green-500" />
                  <span>Lethbridge, Alberta<br/>Canada</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-green-500" />
                  <a href="mailto:info@hurocatech.com" className="hover:text-green-400 transition-colors">info@hurocatech.com</a>
                </li>
              </ul>
            </div>

           <div>
              <h4 className="text-white font-semibold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Huroca Technologies Inc. All rights reserved.</p>
            <p>Designed & Developed in Southern Alberta.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}