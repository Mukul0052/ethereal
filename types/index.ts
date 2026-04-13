export interface Category {
  id: string;
  name: string;
  icon: string;
  system_prompt: string;
  created_at?: string;
}

export interface Conversation {
  id: string;
  user_id: string;
  category_id: string;
  created_at: string;
}

export interface Message {
  id: string;
  conversation_id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
}

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}
