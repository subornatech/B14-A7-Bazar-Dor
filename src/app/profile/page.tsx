
"use client";

import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";

const Profile = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const handleSignout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="min-h-screen w-full ">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">

      
        <div className="mb-8 space-y-2">
          <h1 className="text-2xl font-bold sm:text-3xl">
            আমার প্রোফাইল
          </h1>

          <p className="text-base text-[#1D271F] sm:text-xl">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        
        <div className="flex w-190 flex-col gap-6 rounded-xl bg-[#FAFCFA] p-5 shadow-sm sm:p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex min-w-0 items-center gap-4 sm:gap-6">
            <div className="shrink-0">
              <Image
                src={user?.image || "/default-avatar.png"}
                alt="Profile image"
                width={100}
                height={100}
                className="h-16 w-16 rounded-2xl object-cover sm:h-20 sm:w-20"
              />
            </div>

            <div className="min-w-0 space-y-1">
              <h2 className=" text-base font-semibold sm:text-lg">
                {user?.name || "ব্যবহারকারীর নাম"}
              </h2>

              <p className="break-all text-sm text-[#1D271F] sm:text-base">
                {user?.email || "ইমেইল পাওয়া যায়নি"}
              </p>
            </div>
          </div>

        
          <div className="shrink-0">
            <button
              onClick={handleSignout}
              className="btn flex w-full items-center justify-center gap-2 border border-red-200 bg-white text-base text-[#D03739] hover:bg-red-50 sm:w-auto sm:text-lg"
            >
              <FiLogOut size={20} />
              সাইন আউট
            </button>
          </div>
        </div>

        
        <div className="mt-6 w-190 rounded-xl bg-[#FAFCFA] p-5 shadow-sm sm:mt-8 sm:p-6 md:p-8">
          <h2 className="mb-5 text-xl font-semibold sm:text-2xl">
            তথ্য
          </h2>

          <form
            className="w-full space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <fieldset className="fieldset w-2xl">
              <label className="label text-base sm:text-lg">
                নাম
              </label>

              <input
                id="name"
                type="text"
                defaultValue={user?.name || ""}
                placeholder="আপনার নাম লিখুন"
                className="input h-12 w-full bg-white sm:h-14"
              />
            </fieldset>

           
               <button type="submit"
                   className="btn mt-2 h-12 w-2xl border-none bg-[#05893E] text-base text-white shadow-sm hover:bg-[#047532] sm:h-14 sm:text-lg">

                   আপডেট
                  </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Profile;
