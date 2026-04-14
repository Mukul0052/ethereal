import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-surface flex flex-col pt-20">
      <Navbar />
      <main className="flex-1 max-w-4xl w-full mx-auto py-24 px-6 md:px-12">
        <h1 className="text-4xl font-headline font-black mb-8 text-on-surface">Terms of Service</h1>
        <div className="prose dark:prose-invert max-w-none text-on-surface-variant">
          <p>Last updated: April 2026</p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-on-surface">1. Acceptance of Terms</h2>
          <p>By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-on-surface">2. User Responsibilities</h2>
          <p>You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-on-surface">3. Limitation of Liability</h2>
          <p>In no event shall we be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
