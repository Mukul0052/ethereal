interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
  createdAt?: string;
  userName?: string;
}

export default function MessageBubble({
  role,
  content,
  createdAt,
  userName = "YOU",
}: MessageBubbleProps) {
  const isUser = role === "user";

  const formattedTime = createdAt
    ? new Date(createdAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

  return (
    <div
      className={`flex items-start gap-4 group animate-message-in ${
        isUser ? "flex-row-reverse" : ""
      }`}
    >
      {/* Avatar placed next to the bubble exactly like Screenshot 2 */}
      {isUser ? (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center mt-1 overflow-hidden bg-primary shadow-sm rounded-lg border border-outline-variant/10">
           {/* Mock user portrait from Unsplash since actual auth avatars aren't stored locally */}
           <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="User" 
              className="w-full h-full object-cover"
           />
        </div>
      ) : (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center mt-1 bg-secondary-container rounded-lg shadow-sm border border-outline-variant/5">
          <span className="material-symbols-outlined text-[18px] text-secondary">
            auto_awesome
          </span>
        </div>
      )}

      {/* Bubble + timestamp */}
      <div
        className={`flex max-w-[70%] flex-col ${
          isUser ? "items-end space-y-1.5" : "items-start space-y-1.5"
        }`}
      >
        <div
          className={`p-6 text-[15px] leading-relaxed whitespace-pre-wrap transition-shadow ${
            isUser
              ? "rounded-[1.5rem] rounded-tr-[4px] bg-primary text-white shadow-sm"
              : "rounded-[1.5rem] rounded-tl-[4px] bg-white border border-outline-variant/10 text-on-surface shadow-sm"
          }`}
        >
          {content}
        </div>
        <p 
          className={`text-[9px] text-on-surface-variant/40 font-bold uppercase tracking-widest ${
            isUser ? "pr-2" : "pl-2"
          }`}
        >
          {isUser ? userName : "ETHÉREAL"} • {formattedTime}
        </p>
      </div>
    </div>
  );
}
