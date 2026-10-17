
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import SocialLogin from "@/components/SocialLogin";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    try {
      const { data, error } = await signIn.email({
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        console.error("Sign-in error:", error);

        setErrorMessage(
          error.message || "ইমেইল অথবা পাসওয়ার্ড সঠিক নয়।"
        );
        return;
      }

      if (data) {
        router.replace("/");
        router.refresh();
      } else {
        setErrorMessage(
          "সাইন ইন সম্পন্ন হয়নি। আবার চেষ্টা করুন।"
        );
      }
    } catch (error) {
      console.error("Sign-in failed:", error);

      setErrorMessage(
        "সার্ভারে সমস্যা হয়েছে। কিছুক্ষণ পর আবার চেষ্টা করুন।"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="my-8 text-center sm:my-10">
        <h2 className="text-2xl font-bold sm:text-3xl">
          সাইন ইন
        </h2>

        <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base md:text-xl">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-2xl"
        >
          <fieldset
            disabled={loading}
            className="fieldset w-full rounded-2xl border border-base-300 bg-base-200 p-4 py-5 sm:p-6 md:p-8"
          >
            <label
              htmlFor="email"
              className="label py-1 text-sm sm:text-base"
            >
              ইমেইল
            </label>

            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              className="input h-12 w-full sm:h-14"
              placeholder="ইমেইল ঠিকানা লিখুন"
              required
            />

            <label
              htmlFor="password"
              className="label py-1 text-sm sm:text-base"
            >
              পাসওয়ার্ড
            </label>

            <input
              id="password"
              type="password"
              name="password"
              autoComplete="current-password"
              className="input h-12 w-full sm:h-14"
              placeholder="পাসওয়ার্ড লিখুন"
              required
            />

            {errorMessage && (
              <p
                role="alert"
                className="mt-3 rounded-lg bg-red-100 p-3 text-sm text-red-700"
              >
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn mt-5 h-12 w-full border-none bg-[#05893E] text-base text-white shadow-xl hover:bg-[#047532] disabled:cursor-not-allowed disabled:opacity-60 sm:mt-7 sm:h-14 sm:text-xl"
            >
              {loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
            </button>

            <div className="divider divider-neutral mb-4 mt-6 text-sm sm:mb-6 sm:mt-8 sm:text-base">
              অথবা
            </div>

            <SocialLogin />

            <div className="flex justify-center pt-5 text-sm sm:text-base">
              অ্যাকাউন্ট নেই?{" "}
              <Link
                className="ml-1 text-[#05893E] hover:underline"
                href="/signup"
              >
                সাইন আপ করুন
              </Link>
            </div>
          </fieldset>
        </form>
      </div>

      <div className="mt-10 flex justify-center pb-6 text-sm sm:mt-16 sm:text-base md:mt-20 md:text-lg">
        <Link href="/" className="hover:text-[#05893E]">
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
