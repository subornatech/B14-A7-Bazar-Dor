
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const UpdateInformationPage = () => {
  const { data: session, isPending } = authClient.useSession();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("আপনার নাম লিখুন।");
      return;
    }

    try {
      setLoading(true);

      const { error } = await authClient.updateUser({
        name: name.trim(),
      });

      if (error) {
        toast.error(error.message || "তথ্য আপডেট করা যায়নি।");
        return;
      }

      toast.success("তথ্য সফলভাবে আপডেট হয়েছে!");
      router.push("/profile");
      router.refresh();
    } catch {
      toast.error("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return <p className="mt-10 text-center">লোড হচ্ছে...</p>;
  }

  if (!session) {
    return (
      <div className="mt-10 text-center">
        <p>এই পেজটি ব্যবহার করতে সাইন ইন করুন।</p>
        <button
          onClick={() => router.push("/signin")}
          className="btn mt-4 bg-[#05893E] text-white"
        >
          সাইন ইন
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-10 sm:px-6">
      <div className="mx-auto w-full max-w-xl rounded-2xl border border-base-300 bg-base-200 p-5 sm:p-8">
        <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
          Update Information
        </h2>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-base">
              Name
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={session.user.name || "Enter your name"}
              className="input h-12 w-full rounded-xl sm:h-14"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn h-12 w-full rounded-xl bg-[#05893E] text-base text-white hover:bg-[#047532] sm:h-14 sm:text-lg"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              "Update Information"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateInformationPage;
