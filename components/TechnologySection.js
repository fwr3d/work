"use client";
import { useState, useEffect,useRef} from 'react';
import Image from 'next/image';
import { ChevronLeft,TriangleAlert,CalendarCheck,BadgeCheck,CheckCheck, Eye, Cpu, CheckCircle2, MonitorPlay, Syringe, ScanBarcode, ChevronRight} from 'lucide-react';

const getColorClasses = (color) => {
    const map = {
      blue:   "bg-blue-50 text-blue-600 border-blue-100",
      purple: "bg-purple-50 text-purple-600 border-purple-100",
      orange: "bg-orange-50 text-orange-600 border-orange-100",
      green:  "bg-green-50 text-green-600 border-green-100",
      yellow: "bg-yellow-100 text-yellow-600 border-yellow-100",
      indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
      red:    "bg-red-50 text-red-600 border-red-100",
      gray:   "bg-gray-50 text-gray-600 border-gray-100",
    };
    return map[color] || map.blue;
  };

const ComparisonSlider = ({ before, after }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMove = (event) => {
        if (!isDragging || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    // Touch support for mobile
    const handleTouchMove = (event) => {
        if (!isDragging || !containerRef.current) return;
        const touch = event.touches[0];
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    return (
        <div 
            className="w-full h-full relative select-none cursor-ew-resize group" 
            ref={containerRef}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseDown={() => setIsDragging(true)}
            onMouseMove={handleMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
        >

            <Image
                src={after}
                fill
                alt='after Image'
                className="object-cover"
                priority={true}
                draggable={false}
                sizes="(max-width: 768px) 100vw, 50vw"
            />

  
            <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <Image
                    src={before}
                    alt='before image'
                    fill
                    priority={true}
                    className="object-cover"
                    draggable={false}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Slider Handle Line */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="bg-white absolute rounded-full h-8 w-8 -left-[14px] top-[calc(50%-16px)] flex items-center justify-center shadow-lg text-gray-400">
                   {/* Tiny arrows icon inside handle */}
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/></svg>
                </div>
            </div>
            
            {/* Optional Labels */}
            <div className="absolute top-4 left-4 bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm z-10">BEFORE</div>
            <div className="absolute top-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm z-10">AFTER</div>
        </div>
    );
};

const PROJECTS = [
  {
    id: 'injection',
    label: 'Automated Injection Project',
    labelIcon: <Syringe className="w-4 h-4" />,
    labelColor: 'blue',
    title: (
      <>
        Validated in <span className="text-green-700">Simulation</span> <br />
        Deployed in <span className="text-green-700">Reality</span>
      </>
    ),
    description: "Huroca utilizes NVIDIA Isaac Sim technology to validate every movement before it happens in the real world. We bridge the gap between synthetic training and physical execution.",
    images: [
      "/SIM.png", 
      "/SIM2.png",
      "/SIM3.jpeg"
    ],
    features: [
      {
        icon: <Eye className="w-10 h-10" />,
        color: "blue",
        title: "AI-Driven Perception",
        desc: "Our system uses Artificial Intelligence to identify the perfect injection site on the neck musculature instantly."
      },
      {
        icon: <Cpu className="w-10 h-10" />,
        color: "purple",
        title: "Chute Compatible",
        desc: "Designed as a modular add-on that integrates into your existing standard squeeze chutes without the need to rebuild."
      },
      {
        icon: <CheckCircle2 className="w-10 h-10" />,
        color: "orange",
        title: "Robotic Precision",
        desc: "A 6-DOF robotic arm adjusts to animal variability in real-time, ensuring consistent depth and dosage."
      },
      {
        icon: <MonitorPlay className="w-10 h-10" />,
        color: "green",
        title: "Robotics as a Service",
        desc: "The RaaS model covers hardware, software, and maintenance without upfront CapEx risk."
      }
    ]
  },
  {
    id: 'pallet',
    label: 'Automated Inventory Project',
    labelIcon: <ScanBarcode className="w-4 h-4" />,
    labelColor: 'indigo',
    title: (
      <>
        Real-time <span className="text-indigo-700">Detection</span> <br />
        Automated <span className="text-indigo-700">Inventory</span>
      </>
    ),
    description: "By automating reconciliation, you can audit frequently to catch discrepancies the moment they happen. This delivers the accuracy needed to reduce theft and drive smarter purchasing decisions",
    images: [
      "/new-before.jpg", // Ensure these paths exist or use placeholders
      "/new-after.png"
    ],
    features: [
      {
        icon: <CheckCheck className="w-10 h-10" />,
        color: "indigo",
        title: "Automated Reconciliation",
        desc: "Matches physical shelf stock to digital records"
      },
      {
        icon: <CalendarCheck className="w-10 h-10" />,
        color: "yellow",
        title: "Frequent Audits",
        desc: "Lowers manual effort. Enables more frequent wall-to-wall checks"
      },
      {
        icon: <TriangleAlert className="w-10 h-10" />,
        color: "red",
        title: "Discrepancy Tracking",
        desc: "Flags record misalignments to pinpoint theft or errors"
      },
      {
        icon: <BadgeCheck className="w-10 h-10" />,
        color: "green",
        title: "Verified On-Hand",
        desc: "Provides visual proof of stock levels for purchasing"
      }
    ]
  }
];


    export default function TechnologySection() {
        const [currentSlide, setCurrentSlide] = useState(0);
        const [activeProjIdx, setActiveProjIdx] = useState(0);
        const [isAnimating, setIsAnimating] = useState(false);
        const project = PROJECTS[activeProjIdx];

        useEffect(() => {
          if (project.id === 'pallet') return;
            const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % project.images.length);
            }, 4000);
            return () => clearInterval(timer);
        }, [project.images.length, activeProjIdx]);
        
        useEffect(() => {
            setCurrentSlide(0);
            }, [activeProjIdx]);

        const handleNextProject = () => {
            if (isAnimating) return;
            setIsAnimating(true);
            setTimeout(() => {
            setActiveProjIdx((prev) => (prev + 1) % PROJECTS.length);
            setIsAnimating(false);
            }, 300); 
        };

        const handlePrevProject = () => {
            if (isAnimating) return;
            setIsAnimating(true);
            setTimeout(() => {
            setActiveProjIdx((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
            setIsAnimating(false);
            }, 300);
        };

        return(


            <section id="technology" className="relative py-25 bg-white border-t border-gray-100 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.03]" 
                    style={{ 
                        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                        backgroundSize: '40px 40px' 
                    }}>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    
                    {/* Header with Navigation Controls */}
                    <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        
                        {/* Dynamic Text Content */}
                        <div className={`transition-all duration-300 max-w-3xl ${isAnimating ? 'opacity-0 translate-x-14' : 'opacity-100 translate-x-0'}`}>
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-6 ${getColorClasses(project.labelColor)}`}>
                                {project.labelIcon}
                                <span className="uppercase tracking-wide">{project.label}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {project.title}
                            </h2>
                            <p className="text-xl text-gray-600">
                            {project.description}
                            </p>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center gap-3 shrink-0 mb-0 md:mb-28"> {/*need a way to remove mb for mobile phones */}
                            <button 
                                onClick={handlePrevProject}
                                className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all active:scale-95"
                            >
                            <ChevronLeft className="w-8 h-8 text-gray-600" />
                            </button>
                            <span className="text-sm font-medium text-gray-800 tabular-nums">
                            {activeProjIdx + 1} / {PROJECTS.length}
                            </span>
                            <button 
                                onClick={handleNextProject}
                                className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-all active:scale-95 shadow-lg"
                            >
                            <ChevronRight className="w-8 h-8" />
                            </button>
                        </div>
                    </div>

                    {/* Content Grid (Slideshow + Features) */}
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-start transition-all duration-300 ${isAnimating ? 'opacity-0 translate-x-14' : 'opacity-100 translate-x-0'}`}>
                        
                        {/* Left Col: Slideshow Container */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-gray-200 group mt-5">
                        <div className="aspect-[4/3] bg-slate-900 relative flex items-center justify-center overflow-hidden">

                            {project.id === 'pallet' ? (
                                <ComparisonSlider 
                                    before={project.images[0]} 
                                    after={project.images[1]} 
                                />
                            ) : (
                              <>
                            {project.images.map((src, index) => (
                                <div 
                                key={`${project.id}-img-${index}`} // Unique key forces re-render on project switch
                                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                }`}
                                >
                                {/* Using simple img for demo if Next/Image paths are tricky, but Next/Image is better */}
                                <Image 
                                    src={src}
                                    alt={`View ${index + 1}`}
                                    fill
                                    className="object-contain"
                                    priority={index === 0} 
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                </div>
                            ))}
                            </>)}

                            {/* Navigation Dots */}
                            {project.id!== 'pallet'&& ( 
                            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 z-20">
                                {project.images.map((_, index) => (
                                <button 
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-green-500 w-4' : 'bg-white/50 hover:bg-white'}`}
                                />
                                ))}
                            </div>
                            )}
                        </div>
                        </div>

                        {/* Right Col: Dynamic Features List */}
                        <div className="space-y-8 min-h-[500px]">
                        {project.features.map((feature, idx) => (
                            <div key={idx} className="flex gap-4 group">
                                <div className={`flex-shrink-0 w-20 h-20 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${getColorClasses(feature.color)}`}>
                                {feature.icon}
                                </div>
                                <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.desc}
                                </p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </section>
        );
    }