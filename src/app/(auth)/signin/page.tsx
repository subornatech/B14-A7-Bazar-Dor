
"use client";

import SocialLogin from "@/components/SocialLogin";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";

const SignInPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      console.log(data);
    }

    if (error) {
      console.log(error);
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
        <form onSubmit={onSubmit} className="w-full max-w-2xl">
          <fieldset className="fieldset w-full rounded-2xl border border-base-300 bg-base-200 p-4 py-5 sm:p-6 md:p-8">
            <label className="label py-1 text-sm sm:text-base">
              ইমেইল
            </label>

            <input
              type="email"
              name="email"
              className="input h-12 w-full sm:h-14"
              placeholder="ইমেইল ঠিকানা লিখুন"
              required
            />

            <label className="label py-1 text-sm sm:text-base">
              পাসওয়ার্ড
            </label>

            <input
              type="password"
              name="password"
              className="input h-12 w-full sm:h-14"
              placeholder="কমপক্ষে ৮ অক্ষর"
              required
            />

            <button
              type="submit"
              className="btn mt-5 h-12 w-full bg-[#05893E] text-base text-white shadow-xl hover:bg-[#047532] sm:mt-7 sm:h-14 sm:text-xl"
            >
              সাইন ইন
            </button>

            <div className="divider divider-neutral mb-4 mt-6 text-sm sm:mb-6 sm:mt-8 sm:text-base">
              অথবা
            </div>

            <SocialLogin />

            <div className="pt-5 text-sm sm:text-base flex justify-center">
              অ্যাকাউন্ট নেই?{" "}
              <Link
                className="text-[#05893E]"
                href="/signup"
              >
                সাইন আপ করুন
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

export default SignInPage;
