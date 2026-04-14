import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-surface flex flex-col pt-20">
      <Navbar />
      <main className="flex-1 max-w-4xl w-full mx-auto py-24 px-6 md:px-12">
        <h1 className="text-4xl font-headline font-black mb-8 text-on-surface">Contact Us</h1>
        <div className="prose dark:prose-invert max-w-none text-on-surface-variant mb-12">
          <p>Get in touch with our team for support, business inquiries, or general questions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-surface-variant/30 p-8 rounded-2xl border border-outline-variant/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-bold text-on-surface mb-2">Email</h3>
            <p className="text-on-surface-variant mb-4">Drop a line at:</p>
            <a href="mailto:unithkumarsharma@gmail.com" className="text-primary font-bold hover:underline break-all">unithkumarsharma@gmail.com</a>
          </div>
          
          <div className="bg-surface-variant/30 p-8 rounded-2xl border border-outline-variant/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-bold text-on-surface mb-2">LinkedIn</h3>
            <p className="text-on-surface-variant mb-4">Connect professionally:</p>
            <a href="https://www.linkedin.com/in/unithkumarsharma/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline break-all">unithkumarsharma</a>
          </div>

          <div className="bg-surface-variant/30 p-8 rounded-2xl border border-outline-variant/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-bold text-on-surface mb-2">Phone</h3>
            <p className="text-on-surface-variant mb-4">Give a call at:</p>
            <a href="tel:8607705140" className="text-primary font-bold hover:underline">8607705140</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
