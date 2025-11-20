import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center bg-gray-50">
      
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 max-w-md w-full">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h1>
        
        <p className="text-gray-600 mb-8">
          Thanks for reaching out to Huroca. We have received your inquiry and will get back to you within 24 hours.
        </p>

        {/* Back to Home Button */}
        <Link 
          href="/" 
          className="block w-full bg-blue-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-800 transition duration-200"
        >
          Back to Home
        </Link>
      </div>

    </main>
  );
}