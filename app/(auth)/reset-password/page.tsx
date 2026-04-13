"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[440px] px-6 sm:px-10 py-12 rounded-[2rem] bg-surface-container-lowest shadow-[0_20px_40px_rgba(25,28,30,0.06)] border border-outline-variant/10 fade-in-up md:ml-12 lg:ml-24">
      
      {/* Brand Header */}
      <div className="mb-10">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-surface-container-high transition-colors mb-6"
        >
          <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
            arrow_back
          </span>
        </button>
        <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface leading-tight">
          Reset Password.
        </h2>
        <p className="mt-2 text-sm text-on-surface-variant font-medium">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      {success ? (
        <div className="rounded-2xl bg-primary-fixed/30 px-6 py-8 text-center border border-primary/10 fade-in-up">
           <div className="w-12 h-12 rounded-full bg-primary mx-auto flex items-center justify-center mb-4 shadow-sm">
              <span className="material-symbols-outlined text-white">mark_email_read</span>
           </div>
           <h3 className="font-bold text-on-surface text-lg mb-2">Check your inbox</h3>
           <p className="text-[13px] text-on-surface-variant font-medium">
              We've sent a secure recovery link to <strong>{email}</strong>. Please check your spam folder if it doesn't arrive within a few minutes.
           </p>
           <Link href="/login" className="mt-6 inline-block w-full py-3 bg-white border border-outline-variant/20 rounded-xl text-[13px] font-bold text-on-surface hover:bg-surface-container transition-colors">
              Return to Sign In
           </Link>
        </div>
      ) : (
        /* Form */
        <form onSubmit={handleResetPassword} className="space-y-6">
          <div>
            <label
              htmlFor="reset-email"
              className="mb-2 block text-xs font-bold uppercase tracking-widest text-on-surface-variant/60"
            >
              Email Address
            </label>
            <input
              id="reset-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@domain.com"
              className="w-full rounded-2xl bg-surface-container-low px-5 py-4 text-sm font-medium text-on-surface placeholder:text-on-surface-variant/40 border-[1px] border-transparent focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all focus:outline-none"
            />
          </div>

          {error && (
            <div className="rounded-2xl bg-error-container/50 px-5 py-3 text-sm font-medium text-error border border-error/10">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !email.trim()}
            className="w-full rounded-2xl bg-gradient-to-r from-primary to-primary-container py-4 text-sm font-bold text-on-primary shadow-lg active:scale-[0.98] transition-transform flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed group"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined animate-spin text-lg">
                  progress_activity
                </span>
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Send Reset Link
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
