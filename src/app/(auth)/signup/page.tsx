
"use client";

import SocialLogin from "@/components/SocialLogin";
import { signUp } from "../../../lib/auth-client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    if (!user.name.trim() || !user.email || !user.password) {
      toast.error("নাম, ইমেইল ও পাসওয়ার্ড লিখুন।");
      return;
    }

    if (user.password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await signUp.email({
        ...user,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "সাইন আপ ব্যর্থ হয়েছে।");
        return;
      }

      if (data) {
        toast.success("অ্যাকাউন্ট তৈরি হয়েছে!");
        router.push("/");
        router.refresh();
      }
    } catch {
      toast.error("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
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
        <form onSubmit={onSubmit} className="w-full max-w-2xl">
          <fieldset
            disabled={loading}
            className="fieldset w-full rounded-2xl border border-base-300 bg-base-200 px-4 py-5 sm:px-6 sm:py-7 md:px-8 md:py-8"
          >
            <label className="label text-sm sm:text-base">নাম</label>
            <input
              type="text"
              name="name"
              className="input h-12 w-full rounded-2xl text-base sm:h-14"
              placeholder="নাম লিখুন"
              required
            />

            <label className="label text-sm sm:text-base">
              ছবির লিংক
            </label>
            <input
              type="url"
              name="image"
              className="input h-12 w-full rounded-2xl text-base sm:h-14"
              placeholder="ছবির লিংক দিন"
            />

            <label className="label text-sm sm:text-base">ইমেইল</label>
            <input
              type="email"
              name="email"
              className="input h-12 w-full rounded-2xl text-base sm:h-14"
              placeholder="ইমেইল ঠিকানা লিখুন"
              required
            />

            <label className="label text-sm sm:text-base">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              name="password"
              minLength={8}
              className="input h-12 w-full rounded-2xl text-base sm:h-14 sm:text-lg"
              placeholder="কমপক্ষে ৮ অক্ষর"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="btn mt-4 h-12 w-full rounded-2xl bg-[#05893E] text-base text-white hover:bg-[#047532] sm:h-14 sm:text-xl"
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
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
              <Link className="text-[#05893E]" href="/signin">
                সাইন ইন করুন
              </Link>
            </div>
          </fieldset>
        </form>
      </div>

      <div className="mt-10 flex justify-center pb-6 text-sm sm:mt-16 sm:text-base md:mt-20 md:text-lg">
        <Link href="/">
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
