"use client";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center fade-in-up">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-inverse-surface/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-[480px] bg-surface-container-lowest rounded-[2rem] shadow-[0_20px_40px_rgba(25,28,30,0.1)] border border-outline-variant/10 overflow-hidden m-4 flex flex-col">
        {/* Header */}
        <div className="px-8 pt-8 pb-5 flex items-center justify-between border-b border-outline-variant/10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">
              settings
            </span>
            <h2 className="font-headline text-xl font-extrabold text-on-surface">
              Preferences
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-low hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface-variant text-sm">
              close
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8 overflow-y-auto max-h-[60vh] chat-scroll">
          
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant/60">
              Appearance
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-on-surface">Dark Mode</p>
                <p className="text-xs text-on-surface-variant/70 mt-0.5">Toggle high-contrast viewing</p>
                <p className="text-[10px] text-primary/80 font-bold tracking-wide mt-1">Upcoming feature</p>
              </div>
              <button className="w-12 h-6 rounded-full bg-surface-container-high relative flex items-center p-1 transition-colors pointer-events-none opacity-50 relative">
                <div className="w-4 h-4 rounded-full bg-on-surface-variant/40" />
              </button>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-outline-variant/5">
              <div>
                <p className="text-sm font-bold text-on-surface">Compact View</p>
                <p className="text-xs text-on-surface-variant/70 mt-0.5">Reduce spacing in chat</p>
                <p className="text-[10px] text-primary/80 font-bold tracking-wide mt-1">Upcoming feature</p>
              </div>
              <button className="w-12 h-6 rounded-full bg-surface-container-high relative flex items-center p-1 transition-colors pointer-events-none opacity-50 relative">
                <div className="w-4 h-4 rounded-full bg-on-surface-variant/40" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant/60">
              Data & Privacy
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-on-surface">Chat History</p>
                <p className="text-xs text-on-surface-variant/70 mt-0.5">Save conversations in your workspace</p>
              </div>
              <button className="w-12 h-6 rounded-full bg-primary relative flex items-center justify-end p-1 transition-colors">
                <div className="w-4 h-4 rounded-full bg-on-primary" />
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 bg-surface-container-low border-t border-outline-variant/10 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-bold shadow-md hover:shadow-lg active:scale-95 transition-all"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
