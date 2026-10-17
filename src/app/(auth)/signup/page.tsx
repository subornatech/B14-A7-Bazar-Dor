
"use client";

import SocialLogin from "@/components/SocialLogin";
import { signUp } from "@/lib/auth-client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const image = String(formData.get("image") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    if (!name || !email || !password) {
      toast.error("নাম, ইমেইল ও পাসওয়ার্ড লিখুন।");
      return;
    }

    if (password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
      return;
    }

    if (image) {
      try {
        const imageUrl = new URL(image);

        if (!["http:", "https:"].includes(imageUrl.protocol)) {
          toast.error("একটি সঠিক ছবির URL দিন।");
          return;
        }
      } catch {
        toast.error("ছবির লিংকটি সঠিক নয়।");
        return;
      }
    }

    try {
      setLoading(true);

      const { data, error } = await signUp.email({
        name,
        email,
        password,
        ...(image ? { image } : {}),
        callbackURL: "/",
      });

      if (error) {
        console.error("Sign-up error:", error);

        toast.error(
          error.message || "সাইন আপ ব্যর্থ হয়েছে। আবার চেষ্টা করুন।"
        );
        return;
      }

      if (data) {
        toast.success("অ্যাকাউন্ট তৈরি হয়েছে!");

        router.replace("/");
        router.refresh();
      } else {
        toast.error("সাইন আপ সম্পন্ন হয়নি। আবার চেষ্টা করুন।");
      }
    } catch (error) {
      console.error("Sign-up request failed:", error);

      toast.error(
        "সার্ভারে সমস্যা হয়েছে। কিছুক্ষণ পর আবার চেষ্টা করুন।"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="my-7 text-center sm:my-10">
        <h2 className="text-2xl font-bold sm:text-3xl">
          অ্যাকাউন্ট তৈরি করুন
        </h2>

        <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base md:text-xl">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      <div className="flex justify-center text-center text-base sm:text-lg">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-2xl"
        >
          <fieldset
            disabled={loading}
            className="fieldset w-full rounded-2xl border border-base-300 bg-base-200 px-4 py-5 sm:px-6 sm:py-7 md:px-8 md:py-8"
          >
            <label
              htmlFor="name"
              className="label text-sm sm:text-base"
            >
              নাম
            </label>

            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              className="input h-12 w-full rounded-2xl text-base sm:h-14"
              placeholder="নাম লিখুন"
              required
            />

            <label
              htmlFor="image"
              className="label text-sm sm:text-base"
            >
              ছবির লিংক (ঐচ্ছিক)
            </label>

            <input
              id="image"
              type="url"
              name="image"
              className="input h-12 w-full rounded-2xl text-base sm:h-14"
              placeholder="ছবির লিংক দিন"
            />

            <label
              htmlFor="email"
              className="label text-sm sm:text-base"
            >
              ইমেইল
            </label>

            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              className="input h-12 w-full rounded-2xl text-base sm:h-14"
              placeholder="ইমেইল ঠিকানা লিখুন"
              required
            />

            <label
              htmlFor="password"
              className="label text-sm sm:text-base"
            >
              পাসওয়ার্ড
            </label>

            <input
              id="password"
              type="password"
              name="password"
              autoComplete="new-password"
              minLength={8}
              className="input h-12 w-full rounded-2xl text-base sm:h-14 sm:text-lg"
              placeholder="কমপক্ষে ৮ অক্ষর"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="btn mt-4 h-12 w-full rounded-2xl border-none bg-[#05893E] text-base text-white hover:bg-[#047532] disabled:opacity-60 sm:h-14 sm:text-xl"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm" />
                  অ্যাকাউন্ট তৈরি হচ্ছে...
                </>
              ) : (
                "অ্যাকাউন্ট তৈরি করুন"
              )}
            </button>

            <div className="divider divider-neutral text-sm sm:text-base">
              অথবা
            </div>

            <SocialLogin />

            <div className="pt-4 text-sm sm:text-base">
              অ্যাকাউন্ট আছে?{" "}
              <Link
                className="text-[#05893E] hover:underline"
                href="/signin"
              >
                সাইন ইন করুন
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

export default SignUpPage;
