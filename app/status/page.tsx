import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ApiStatus() {
  return (
    <div className="min-h-screen bg-surface flex flex-col pt-20">
      <Navbar />
      <main className="flex-1 max-w-4xl w-full mx-auto py-24 px-6 md:px-12">
        <h1 className="text-4xl font-headline font-black mb-8 text-on-surface">API Status</h1>
        <div className="bg-surface-variant/30 rounded-2xl p-8 border border-outline-variant/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
            <h2 className="text-2xl font-bold text-on-surface">All Systems Operational</h2>
          </div>
          <p className="text-on-surface-variant mb-8">All services including the Chat API and underlying model inference are running smoothly.</p>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-4 border-b border-outline-variant/10">
              <span className="font-medium text-on-surface">Chat Inference API</span>
              <span className="text-green-500 font-bold text-sm bg-green-500/10 px-3 py-1 rounded-full">Operational</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-outline-variant/10">
              <span className="font-medium text-on-surface">Authentication Services</span>
              <span className="text-green-500 font-bold text-sm bg-green-500/10 px-3 py-1 rounded-full">Operational</span>
            </div>
            <div className="flex justify-between items-center py-4">
              <span className="font-medium text-on-surface">Frontend Hosting</span>
              <span className="text-green-500 font-bold text-sm bg-green-500/10 px-3 py-1 rounded-full">Operational</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
