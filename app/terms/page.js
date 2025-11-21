export const metadata = {
  title: "Terms of Service | Huroca",
  description: "Terms of Service for Huroca Technologies Inc.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white py-20 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-blue prose-lg text-gray-600">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: November 21, 2025</p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h3>
        <p>
          These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Huroca Technologies Inc. ("Huroca", "we", "us", or "our"), concerning your access to and use of the Huroca website and services.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Intellectual Property Rights</h3>
        <p>
          Unless otherwise indicated, the Site and our proprietary robotics technology, software, and algorithms are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Limitations of Liability</h3>
        <p>
          In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our pilot technology.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Governing Law</h3>
        <p>
          These Terms shall be governed by and defined following the laws of Alberta, Canada. Huroca Technologies Inc. and yourself irrevocably consent that the courts of Alberta shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h3>
        <p>
          To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
          <br />
          <a href="mailto:info@hurocatech.com" className="text-green-800 font-semibold hover:underline">info@hurocatech.com</a>
        </p>
      </div>
    </main>
  );
}