import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-surface flex flex-col pt-20">
      <Navbar />
      <main className="flex-1 max-w-4xl w-full mx-auto py-24 px-6 md:px-12">
        <h1 className="text-4xl font-headline font-black mb-8 text-on-surface">Privacy Policy</h1>
        <div className="prose dark:prose-invert max-w-none text-on-surface-variant">
          <p>Last updated: April 2026</p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-on-surface">1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you use our services, including account details and chat logs.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-on-surface">2. How We Use Your Information</h2>
          <p>Your information is used to provide, maintain, and improve our services, as well as to personalize your experience.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-on-surface">3. Data Security</h2>
          <p>We implement robust security measures, including enterprise-grade encryption, to protect your personal data from unauthorized access or disclosure.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
