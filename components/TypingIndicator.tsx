export default function TypingIndicator() {
  return (
    <div className="flex gap-4 items-start">
      {/* Bot avatar */}
      <div className="w-8 h-8 rounded-xl bg-surface-container-high flex items-center justify-center flex-shrink-0 mt-1 opacity-50">
        <span className="material-symbols-outlined text-primary text-lg">
          auto_awesome
        </span>
      </div>

      {/* Typing bubble */}
      <div className="bg-surface-container-low px-6 py-5 rounded-[1.5rem] rounded-tl-sm flex items-center gap-1.5 border border-outline-variant/5">
        <div 
          className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-dot-bounce" 
          style={{ animationDelay: "-0.32s" }} 
        />
        <div 
          className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-dot-bounce" 
          style={{ animationDelay: "-0.16s" }} 
        />
        <div 
          className="w-1.5 h-1.5 bg-primary/80 rounded-full animate-dot-bounce" 
          style={{ animationDelay: "0ms" }} 
        />
      </div>
    </div>
  );
}
