
"use client";

import { useState } from "react";
import { signIn } from "@/lib/auth-client";

const SocialLogin = () => {
  const [loading, setLoading] = useState<"google" | "github" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSocialSignIn = async (
    provider: "google" | "github"
  ) => {
    if (loading) return;

    setLoading(provider);
    setErrorMessage("");

    try {
      const { data, error } = await signIn.social({
        provider,
        callbackURL: "/",
      });

      if (error) {
        console.error(`${provider} sign-in error:`, error);

        setErrorMessage(
          error.message || `${provider} দিয়ে সাইন ইন করা যায়নি।`
        );
        return;
      }

      console.log(`${provider} sign-in response:`, data);
    } catch (error) {
      console.error(`${provider} sign-in failed:`, error);

      setErrorMessage(
        "সার্ভারে সমস্যা হয়েছে। কিছুক্ষণ পর আবার চেষ্টা করুন।"
      );
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => handleSocialSignIn("google")}
          disabled={loading !== null}
          className="btn h-12 w-full rounded-xl border-gray-400 bg-white text-base text-black hover:bg-gray-100 sm:flex-1"
        >
          <svg
            aria-label="Google logo"
            role="img"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 37.97 46.98 31.81 46.98 24.55Z" />
            <path fill="#FBBC05" d="M10.53 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19a23.9 23.9 0 0 0 0 21.56l7.98-6.19Z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.14 1.44-4.89 2.3-8.18 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
          </svg>
          {loading === "google"
            ? "সংযোগ হচ্ছে..."
            : "Google দিয়ে চালিয়ে যান"}
        </button>

        <button
          type="button"
          onClick={() => handleSocialSignIn("github")}
          disabled={loading !== null}
          className="btn h-12 w-full rounded-xl border-gray-400 bg-white text-base text-black hover:bg-gray-100 sm:flex-1"
        >
          <svg
            aria-label="GitHub logo"
            role="img"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.93c-2.78.6-3.37-1.19-3.37-1.19-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.71c.85 0 1.71.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85V21c0 .27.16.59.67.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z"
            />
          </svg>
          {loading === "github"
            ? "সংযোগ হচ্ছে..."
            : "GitHub দিয়ে চালিয়ে যান"}
        </button>
      </div>

      {errorMessage && (
        <p
          role="alert"
          className="mt-3 rounded-lg bg-red-100 p-3 text-sm text-red-700"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default SocialLogin;
