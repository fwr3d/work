import Image from 'next/image';
import TechnologySection from '@/components/TechnologySection';
import HeroScene from '@/components/HeroScene';
import ContactForm from '@/components/ContactForm';

import { 
  Target, ShieldCheck, Heart, Users, Database, 
  MapPin, Mail, Building2, GraduationCap, Award, Syringe,
} from 'lucide-react';


export default function Home() {

  return (
    <main className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section id="home" className="relative h-[70vh] w-full flex items-center justify-center bg-gray-100 overflow-hidden">
        
        <HeroScene />

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left pointer-events-none w-full">
           <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6 drop-shadow-sm">
            Field Ready Robotics <br />
            <span className="text-green-700">For Any Environment</span>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <p className="text-md font-semibold text-gray-700 uppercase tracking-wider mb-6">
            Our Network
          </p>
          

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-40 opacity-100 transition-all duration-500">

            <div className="w-80 h-32 relative hover:grayscale-0 transition-all duration-300">
               <Image 
                  src="/HUB.png" 
                  alt="Hub for Neuroengineering Solutions" 
                  fill 
                  className="object-contain"
                  sizes="(max-width: 768px) 320px, 320px"
               />
            </div>

            <div className="w-64 h-32 relative hover:grayscale-0 transition-all duration-300">
               <Image 
                  src="/ACFA.png" 
                  alt="Alberta Cattle Feeders Association" 
                  fill 
                  className="object-contain"
                  sizes="(max-width: 768px) 256px, 256px"
               />
            </div>
            
            <div className="w-80 h-32 relative hover:grayscale-0 transition-all duration-300">
               <Image 
                  src="/UOFL_Horizontal.png" 
                  alt="University of Lethbridge" 
                  fill 
                  className="object-contain"
                  sizes="(max-width: 768px) 256px, 320px"
               />
            </div>

          </div>
        </div>
      </section>
      
        {/* --- TECHNOLOGY SECTION (Dynamic Slide Window) --- */}
      <TechnologySection />


      {/* --- BENTO GRID VALUE PROP SECTION --- */}
      <section id="whyus" className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold mb-6">
        <Syringe className="w-4 h-4" />
        <span className="uppercase tracking-wide">Automated Injection Project</span>
      </div>
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Replacing manual risk <br />
              with <span className="text-green-700">robotic reliability.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-blue-100 pl-6">
              Huroca brings industrial robotics and computer vision to the feedlot,
              delivering safer, faster, and perfectly accurate injections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            <div className="col-span-1 md:col-span-6 lg:col-span-7 group relative p-8 md:p-10 bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target size={180} strokeWidth={1} />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                  <Users size={28} />
                </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Operational Efficiency</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Automates a labour-intensive and repetitive task, allowing for labour to be directed elsewhere
              </p>
              </div>
            </div>

            <div className="col-span-1 md:col-span-3 lg:col-span-5 group p-8 md:p-10 bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 shadow-sm">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safer Workplaces</h3>
              <p className="text-gray-600 leading-relaxed">
                Automation removes staff from the line of fire, reducing injuries, liability and exposure
              </p>
            </div>

            <div className="col-span-1 md:col-span-3 lg:col-span-4 group p-8 bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-4 text-rose-600">
                <Heart size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Animal Welfare</h3>
              <p className="text-gray-700 text-sm">
                Reliable vision system reduces the risk of injury to the animal
              </p>
            </div>

            <div className="col-span-1 md:col-span-3 lg:col-span-4 group p-8 bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4 text-amber-600">
                <Target size={24} />
              </div>
        
                            <h3 className="text-lg font-bold text-gray-900 mb-2">  Reliability</h3>
                <p className="text-gray-700 text-sm">
                  Manual injections are dangerous and inconsistent. Huroca delivers repeatable accuracy.
                       </p>
            </div>

            <div className="col-span-1 md:col-span-6 lg:col-span-4 group p-8 bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                  <Database size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Traceability</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Automated logging of animal ID, dosage, and timestamp for accurate records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-30 bg-white border-t border-gray-100 relative overflow-hidden">
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
                      <h4 className="font-bold text-gray-900 text-lg">Letters of Support</h4>
                      <p className="text-sm text-gray-700 mt-1"> UFA & Alberta Cattle Feeders Association</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center text-purple-600 shrink-0">
                      <GraduationCap size={40} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Research Driven</h4>
                      <p className="text-sm text-gray-700 mt-1">Univ. of Lethbridge & Hub for Neuroengineering Solutions</p>
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
                            <p className="text-sm text-gray-700">Solving real problems for real producers.</p>
                         </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-6">
                         <p className="text-gray-600 italic text-lg leading-relaxed">
                           "We aren't just building robots; we are building the future workforce of agriculture. Reliable, safe, and always operational."
                         </p>
                         <div className="mt-4 flex items-center gap-3">
                             {/* Small Quote Portrait - Converted */}
                             <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 border border-gray-200 relative">
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
      <section id="team" className="relative py-25 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Team</h2>
          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            Bringing together expertise in Computer Science, Neuroscience, Agriculture and Robotics to transform the future of Industry.
          </p>
          
          {/* Core Team Grid - Converted to Next/Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-12 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden relative">
                 <Image src="/potraits/emilio-2.jpeg" alt="Emilio Hurtado" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Emilio Hurtado</h3>
              <p className="text-green-700 font-bold mb-3">Co-Founder & CEO</p>
              <p className="text-gray-700 text-sm">
                Combines a background in AI & Neuroscience with hands-on feedlot experience to lead the vision for automated cattle care.
              </p>
            </div>

            <div className="bg-white p-12 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden relative">
                 <Image src="/potraits/chandra.jpg" alt="Chandra Suryadevara" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Chandra Suryadevara</h3>
              <p className="text-green-700 font-bold mb-3">Co-Founder & CTO</p>
              <p className="text-gray-700 text-sm">
                Specializing in advanced computer science, Software-Hardware integration and innovative robotics solutions.
              </p>
            </div>
            <div className="bg-white p-12 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden relative">
                 <Image src="/potraits/naveen.jpg" alt="Naveen Kumar Vadlamudi" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Naveen Vadlamudi</h3>
              <p className="text-green-700 font-bold mb-3">Co-Founder & COO</p>
              <p className="text-gray-700 text-sm">
                 Experienced leader uniting technical vision with organizational management to optimize company performance.
              </p>
            </div>
            <div className="bg-white p-12 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden relative">
                 <Image src="/potraits/brendon.png" alt="Brendon Penner" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Brendon Penner</h3>
              <p className="text-green-700 font-bold mb-3">CFO</p>
              <p className="text-gray-700 text-sm">
                 Financial leader with Neuroengineering Hub management experience, delivering strategic guidance and operational excellence.
              </p>
            </div>
            </div>
          </div>
          </section>
             <section id="mentors" className="relative bg-white overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mentors & Advisors</h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
              Bridging the gap between academic innovation and industry reality. 
              Our advisory board combines deep research in Computer Science and Business with 
              practical insights from the feedlot sector, ensuring our technology is not just 
              theoretically sound, but built for the real world.
            </p>
          
            
            {/* Advisors - Converted to Next/Image */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-all">
                <div className="w-32 h-32 bg-blue-50 rounded-full mx-auto mb-4 overflow-hidden relative border border-blue-100">
                  <Image src="/potraits/hardeep.jpeg" alt="Dr. Hardeep Ryait" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Dr. Hardeep Ryait</h3>
                <p className="text-green-700 text-xs font-bold uppercase tracking-wide mb-2">Technical Mentor</p>
                <p className="text-gray-700 text-s leading-relaxed">
                  Expert engineering guidance on technical architecture and research direction.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-purple-100 transition-all">
                <div className="w-32 h-32 bg-purple-50 rounded-full mx-auto mb-4 overflow-hidden relative border border-purple-100">
                  <Image src="/potraits/Shapiro.png" alt="Dr. Sydney Shapiro" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Dr. Sydney Shapiro</h3>
                <p className="text-green-700 text-xs font-bold uppercase tracking-wide mb-2">Business Advisor</p>
                <p className="text-gray-700 text-s leading-relaxed">
                  Strategic direction and growth mentorship for scaling ventures.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-green-100 transition-all">
                <div className="w-32 h-32 bg-green-50 rounded-full mx-auto mb-4 overflow-hidden relative border border-green-100">
                  <Image src="/potraits/cristo.jpeg" alt="Cristo Hurtado" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cristo Hurtado</h3>
                <p className="text-green-700 text-xs font-bold uppercase tracking-wide mb-2">Industry Advisor</p>
                <p className="text-gray-700 text-s leading-relaxed">
                  Deep feedlot industry insights and operational guidance.
                </p>
              </div>
            </div>

        </div>
      </section>

       <section id="contact" className="relative py-40 bg-white overflow-hidden border-t border-gray-100">
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
                Ready to replace repetition with  <br/> 
                <span className="text-green-700">Reliability?</span>
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
             <ContactForm />
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