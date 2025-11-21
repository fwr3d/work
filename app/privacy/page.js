export const metadata = {
  title: "Privacy Policy | Huroca",
  description: "Privacy Policy for Huroca Technologies Inc.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white py-20 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-blue prose-lg text-gray-600">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: November 21, 2025</p>

        <p>
          At Huroca Technologies Inc. ("Huroca", "we", "us", or "our"), we respect your privacy and are committed to protecting the personal information of our users, partners, and visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h3>
        <p>
          We may collect personal information that you voluntarily provide to us when you express interest in obtaining information about us or our products and services, when you participate in activities on the website (such as our contact form), or otherwise when you contact us.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
          <li><strong>Business Data:</strong> Information related to your feedlot or agricultural operations if provided during pilot program inquiries.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h3>
        <p>
          We use the information we collect or receive:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To facilitate account creation and logon processes.</li>
          <li>To send you marketing and promotional communications (with your consent).</li>
          <li>To respond to user inquiries/offer support to users.</li>
          <li>To evaluate partnerships for our pilot programs.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Storage and Security</h3>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Contact Us</h3>
        <p>
          If you have questions or comments about this policy, you may email us at:
          <br />
          <a href="mailto:info@hurocatech.com" className="text-green-800 font-semibold hover:underline">info@hurocatech.com</a>
        </p>
        <p>
          <strong>Huroca Technologies Inc.</strong><br />
          Lethbridge, Alberta, Canada
        </p>
      </div>
    </main>
  );
}