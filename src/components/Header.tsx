
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Marquee from "./Marquee";
import UserInfo from "./UserInfo";
import logoImage from "../../public/logo-icon.png"

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="bg-[#E1E8E1]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-4 sm:py-6 lg:py-7">
      
          <Link  href="/" className="flex min-w-0 items-center gap-3 sm:gap-5">
            <Image
              className="h-12 w-12 shrink-0 rounded-2xl bg-[#05893E] p-2 sm:h-16 sm:w-16 sm:rounded-3xl sm:p-3"
              src={logoImage}
              width={100}
              height={100}
              alt="বাজার দর লোগো"
              priority
            />

            <div className="min-w-0">
              <h2 className="text-xl font-extrabold sm:text-2xl lg:text-3xl">
                বাজার দর
              </h2>

              <p className="mt-1 text-xs sm:text-sm lg:text-base">
                {date}
              </p>
            </div>
          </Link>

          <div className="shrink-0">
            <UserInfo />
          </div>
        </div>
        <div className="pb-3 sm:pb-4">
          <NavLinks />
        </div>
      </div>

      <Marquee />
    </header>
  );
};

export default Header;