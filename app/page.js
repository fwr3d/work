"use client";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault(); // Stop the default HTML form refresh

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formspree.io/f/mrbjenoe", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        router.push('/thank-you'); // Next.js client-side redirect
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Error submitting form");
    }
  }
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Robotics for the <br />
            <span className="text-blue-600">Modern Cattle Industry</span>
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Huroca combines advanced robotics and computer vision to automate agricultural processes, improving efficiency and animal welfare.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              See Our Tech
            </button>
            <button className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    {/* Supported By Section */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Industry and Academic Network
          </p>
          
          {/* Logo Grid */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-100 transition-all duration-500">

            
            {/* Logo 1 */}
            <div className="w-64 h-32 flex justify-center items-center hover:grayscale-0 transition-all duration-300">
              <img src="/UFA.png" alt="Supporter 1" className="h-full w-auto object-contain" />
            </div>

            {/* Logo 2 */}
            
            <div className="w-80 h-32 flex justify-center items-center hover:grayscale-0 transition-all duration-300">
              <img src="/HUB.png" alt="Supporter 4" className="h-full w-auto object-contain" />
            </div>
            {/* Logo 3 */}
            <div className="w-64 h-32 flex justify-center items-center hover:grayscale-0 transition-all duration-300">
              <img src="/ACFA.png" alt="Supporter 2" className="h-full w-auto object-contain" />
            </div>

            
            {/* Logo 4 */}
            <div className="w-64 h-32 flex justify-center items-center hover:grayscale-0 transition-all duration-300">
              <img src="/UOFL_Horizontal.png" alt="Supporter 3" className="h-full w-auto object-contain" />
            </div>

            

          </div>
        </div>
      </section>
      {/* Features / Tech Section */}
      <section id="technology" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Core Technologies</h2>
            <p className="mt-4 text-gray-500">Built with cutting-edge tools for precision agriculture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition bg-gray-50">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-blue-600 font-bold">
                01
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Robotic Automation</h3>
              <p className="text-gray-600">Autonomous systems designed to handle complex agricultural tasks with precision.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition bg-gray-50">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 text-green-600 font-bold">
                02
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Computer Vision</h3>
              <p className="text-gray-600">Advanced AI perception to monitor health and navigate dynamic environments.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition bg-gray-50">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 text-purple-600 font-bold">
                03
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Simulation (Isaac Sim)</h3>
              <p className="text-gray-600">Tested rigorously in high-fidelity simulations before deployment.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Team</h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Bringing together expertise in Computer Science, Neuroscience, and Robotics to transform agriculture.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Team Member 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              {/* Image Placeholder - Replace src later */}
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                 {/* <img src="/team-member-1.jpg" alt="Founder Name" className="w-full h-full object-cover" /> */}
                 <span className="w-full h-full flex items-center justify-center text-gray-400 text-4xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Your Name</h3>
              <p className="text-blue-600 font-medium mb-3">Co-Founder & CEO</p>
              <p className="text-gray-500 text-sm">
                Computer Science & Neuroscience background. Leading the vision for automated cattle care.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                 <span className="w-full h-full flex items-center justify-center text-gray-400 text-4xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Co-Founder Name</h3>
              <p className="text-blue-600 font-medium mb-3">Co-Founder & CTO</p>
              <p className="text-gray-500 text-sm">
                Specializing in Robotics and Hardware integration for rugged environments.
              </p>
            </div>

            {/* Team Member 3 (Optional) */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                 <span className="w-full h-full flex items-center justify-center text-gray-400 text-4xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Partner Name</h3>
              <p className="text-blue-600 font-medium mb-3">Lead Engineer</p>
              <p className="text-gray-500 text-sm">
                Expertise in AI agents and simulation environments.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-gray-500">
              Interested in piloting our tech or investing? We'd love to hear from you.
            </p>
          </div>

          {/* Added Form Submission */}
            <form 
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm"
            >
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg border bg-white border-gray-300 text-black focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg border bg-white border-gray-300 text-black focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                placeholder="john@example.com"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="w-full px-4 py-3 rounded-lg border bg-white border-gray-300 text-black focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                placeholder="Tell us about your farm or inquiry..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-800 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-2xl font-bold mb-4">Huroca</p>
          <p className="text-gray-400 text-sm mb-8">
            Innovating cattle welfare with robotics. <br /> Based in Lethbridge, Alberta.
          </p>
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Huroca. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}