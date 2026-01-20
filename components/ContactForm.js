"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 p-8 lg:p-10 relative">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
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
  );
}