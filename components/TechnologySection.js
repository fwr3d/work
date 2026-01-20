"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Syringe, ScanBarcode, Eye, Cpu, CheckCircle2, MonitorPlay, CheckCheck, CalendarCheck, TriangleAlert, BadgeCheck } from 'lucide-react';

const getColorClasses = (color) => {
    const map = {
        blue: "bg-blue-50 text-blue-600 border-blue-100",
        purple: "bg-purple-50 text-purple-600 border-purple-100",
        orange: "bg-orange-50 text-orange-600 border-orange-100",
        green: "bg-green-50 text-green-600 border-green-100",
        yellow: "bg-yellow-100 text-yellow-600 border-yellow-100",
        indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
        red: "bg-red-50 text-red-600 border-red-100",
        gray: "bg-gray-50 text-gray-600 border-gray-100",
    };
    return map[color] || map.blue;
};

// ... [ComparisonSlider remains unchanged] ...
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
            <Image src={after} fill alt='after' className="object-cover" priority={true} draggable={false} sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                <Image src={before} alt='before' fill priority={true} className="object-cover" draggable={false} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none" style={{ left: `${sliderPosition}%` }}>
                <div className="bg-white absolute rounded-full h-8 w-8 -left-[14px] top-[calc(50%-16px)] flex items-center justify-center shadow-lg text-gray-400">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/></svg>
                </div>
            </div>
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
      title: (<>Validated in <span className="text-green-700">Simulation</span> <br />Deployed in <span className="text-green-700">Reality</span></>),
      description: "Huroca utilizes NVIDIA Isaac Sim technology to validate every movement before it happens in the real world. We bridge the gap between synthetic training and physical execution.",
      images: ["/SIM.png", "/SIM2.png", "/SIM3.jpeg"],
      features: [
        { icon: <Eye className="w-10 h-10" />, color: "blue", title: "AI-Driven Perception", desc: "Our system uses Artificial Intelligence to identify the perfect injection site on the neck musculature instantly." },
        { icon: <Cpu className="w-10 h-10" />, color: "purple", title: "Chute Compatible", desc: "Designed as a modular add-on that integrates into your existing standard squeeze chutes without the need to rebuild." },
        { icon: <CheckCircle2 className="w-10 h-10" />, color: "orange", title: "Robotic Precision", desc: "A 6-DOF robotic arm adjusts to animal variability in real-time, ensuring consistent depth and dosage." },
        { icon: <MonitorPlay className="w-10 h-10" />, color: "green", title: "Robotics as a Service", desc: "The RaaS model covers hardware, software, and maintenance without upfront CapEx risk." }
      ]
    },
    {
      id: 'pallet',
      label: 'Automated Inventory Project',
      labelIcon: <ScanBarcode className="w-4 h-4" />,
      labelColor: 'indigo',
      title: (<>Real-time <span className="text-indigo-700">Detection</span> <br />Automated <span className="text-indigo-700">Inventory</span></>),
      description: "By automating reconciliation, you can audit frequently to catch discrepancies the moment they happen. This delivers the accuracy needed to reduce theft and drive smarter purchasing decisions",
      images: ["/new-before.jpg", "/new-after.png"],
      features: [
        { icon: <CheckCheck className="w-10 h-10" />, color: "indigo", title: "Automated Reconciliation", desc: "Matches physical shelf stock to digital records" },
        { icon: <CalendarCheck className="w-10 h-10" />, color: "yellow", title: "Frequent Audits", desc: "Lowers manual effort. Enables more frequent wall-to-wall checks" },
        { icon: <TriangleAlert className="w-10 h-10" />, color: "red", title: "Discrepancy Tracking", desc: "Flags record misalignments to pinpoint theft or errors" },
        { icon: <BadgeCheck className="w-10 h-10" />, color: "green", title: "Verified On-Hand", desc: "Provides visual proof of stock levels for purchasing" }
      ]
    }
  ];

export default function TechnologySection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeProjIdx, setActiveProjIdx] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [animDirection, setAnimDirection] = useState('next');
    
    // We use this to track where we should "Freeze" the user
    const freezePositionRef = useRef(null);
    const containerRef = useRef(null);
    const project = PROJECTS[activeProjIdx];

    // -- 1. "HARD FREEZE" LOGIC --
    // This effect locks the body scroll when animating to prevent "drifting"
    useEffect(() => {
        if (isAnimating) {
            // Calculate scrollbar width to prevent layout shift
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            
            // Lock body
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            
            // Force browser to stay at the freeze point if set
            if (freezePositionRef.current !== null) {
                window.scrollTo(0, freezePositionRef.current);
            }
        } else {
            // Unlock body
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            freezePositionRef.current = null;
        }

        // Cleanup on unmount
        return () => {
             document.body.style.overflow = '';
             document.body.style.paddingRight = '';
        }
    }, [isAnimating]);


    // -- 2. Scroll Listener --
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || isAnimating) return; // Ignore scroll if already animating
            
            const { top, height } = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const scrollDistance = height - windowHeight;
            const scrolled = -top;

            // Only trigger if we are inside the section
            if (scrolled >= -50 && scrolled <= scrollDistance + 50) {
                const progress = scrolled / scrollDistance;
                
                let newIndex = activeProjIdx;
                let shouldTrigger = false;

                // TRIGGER POINT: Going Down (Project 1 -> 2)
                // We use a tighter threshold (0.5) to catch it early
                if (progress > 0.5 && activeProjIdx === 0) {
                    newIndex = 1;
                    setAnimDirection('next');
                    shouldTrigger = true;
                    
                    // PRE-CALCULATE THE "FREEZE" SPOT
                    // When going down, we want to freeze exactly at the "Project 2" anchor point
                    // which is somewhat down the scroll container.
                    const absoluteTop = window.scrollY + top; 
                    freezePositionRef.current = absoluteTop + (height / 2) + 10; 
                } 
                // TRIGGER POINT: Going Up (Project 2 -> 1)
                else if (progress < 0.5 && activeProjIdx === 1) {
                    newIndex = 0;
                    setAnimDirection('prev');
                    shouldTrigger = true;

                    // When going up, freeze at the "Top" of the section
                    const absoluteTop = window.scrollY + top; 
                    freezePositionRef.current = absoluteTop + 10;
                }

                if (shouldTrigger) {
                    triggerTransition(newIndex);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeProjIdx, isAnimating]);


    // -- 3. Transition Handler --
    const triggerTransition = (newIndex) => {
        setIsAnimating(true);
        
        // Immediate scroll snap to the calculated freeze position
        // This stops momentum scrolling instantly.
        if (freezePositionRef.current) {
            window.scrollTo({
                top: freezePositionRef.current,
                behavior: 'auto' // 'auto' is instant (no smooth scroll) to create the "Freeze" effect
            });
        }
        
        // Wait for exit animation
        setTimeout(() => {
            setActiveProjIdx(newIndex);
            
            // Wait a tiny bit for render, then unlock
            setTimeout(() => {
                setIsAnimating(false);
            }, 100);
        }, 500); 
    };


    // -- 4. Manual Button Click Handler --
    const scrollToProject = (index) => {
        if (!containerRef.current) return;
        setAnimDirection(index > activeProjIdx ? 'next' : 'prev');
        
        const { top, height } = containerRef.current.getBoundingClientRect();
        const absoluteTop = window.scrollY + top; 
        
        // Calculate target manually
        const targetY = index === 0 ? absoluteTop : absoluteTop + (height / 2) + 20;
        freezePositionRef.current = targetY; // Set freeze point for the animation
        
        triggerTransition(index);
    };

    const handleNext = () => { if (activeProjIdx < PROJECTS.length - 1) scrollToProject(activeProjIdx + 1); };
    const handlePrev = () => { if (activeProjIdx > 0) scrollToProject(activeProjIdx - 1); };

    // -- 5. Slideshow --
    useEffect(() => {
        if (project.id === 'pallet') return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % project.images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [project.images.length, activeProjIdx, project.id]);
    useEffect(() => { setCurrentSlide(0); }, [activeProjIdx]);

    // -- 6. Animation Classes --
    const getAnimationClasses = () => {
        if (isAnimating) {
            return animDirection === 'next' 
                ? 'opacity-0 -translate-x-12 blur-sm' 
                : 'opacity-0 translate-x-12 blur-sm';
        }
        return 'opacity-100 translate-x-0 blur-0';
    };

    return (
        <section id="technology" ref={containerRef} className="relative h-[250vh] bg-white border-t border-gray-100">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    {/* Header */}
                    <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] w-full max-w-3xl ${getAnimationClasses()}`}>
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

                        {/* Buttons */}
                        <div className="flex items-center gap-3 shrink-0 mb-0 md:mb-20">
                            <button onClick={handlePrev} disabled={activeProjIdx === 0} className={`w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center transition-all active:scale-95 ${activeProjIdx === 0 ? 'opacity-50 cursor-not-allowed text-gray-300' : 'hover:bg-gray-50 text-gray-600'}`}>
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                            <span className="text-sm font-medium text-gray-800 tabular-nums">
                                {activeProjIdx + 1} / {PROJECTS.length}
                            </span>
                            <button onClick={handleNext} disabled={activeProjIdx === PROJECTS.length - 1} className={`w-14 h-14 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-lg ${activeProjIdx === PROJECTS.length - 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${getAnimationClasses()}`}>
                        
                        {/* Left Col */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-gray-200 group mt-5">
                            <div className="aspect-[4/3] bg-slate-900 relative flex items-center justify-center overflow-hidden">
                                {project.id === 'pallet' ? (
                                    <ComparisonSlider before={project.images[0]} after={project.images[1]} />
                                ) : (
                                    <>
                                        {project.images.map((src, index) => (
                                            <div key={`${project.id}-img-${index}`} className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                                                <Image src={src} alt={`View ${index + 1}`} fill className="object-contain" priority={index === 0} sizes="(max-width: 768px) 100vw, 50vw" />
                                            </div>
                                        ))}
                                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                                            {project.images.map((_, index) => (
                                                <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-green-500 w-4' : 'bg-white/50 hover:bg-white'}`} />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Right Col */}
                        <div className="space-y-6 lg:space-y-8 min-h-[400px]">
                            {project.features.map((feature, idx) => (
                                <div key={`${project.id}-feat-${idx}`} className="flex gap-4 group">
                                    <div className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${getColorClasses(feature.color)}`}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2">{feature.title}</h3>
                                        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}