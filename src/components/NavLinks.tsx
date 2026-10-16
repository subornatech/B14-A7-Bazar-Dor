
import baseUrl from "@/Service/baseUrl";
import Link from "next/link";

interface Navs {
  id: string;
  slug: string;
  icon: string;
  nameBn: string;
}

const NavLinks = async () => {
  const res = await fetch(`${baseUrl}/categories`);
  const data = await res.json();

  const navsData: Navs[] = Array.isArray(data) ? data : [];

  return (
    <nav className="w-full">
      <div
        className="
          flex w-full items-center gap-4
          overflow-x-auto whitespace-nowrap
          py-3
          sm:gap-6
           lg:gap-4
          lg:overflow-visible
        "
      >
        {navsData.map((nav) => (
          <Link
            href={`/category/${nav.slug}`}
            key={nav.id}
            className=" flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium text-gray-800
              transition-colors duration-200
              hover:bg-[#05893E]/10
              hover:text-[#05893E]
              sm:gap-2 sm:text-base
              lg:text-lg
            "
          >
            <span className="text-base sm:text-lg lg:text-xl">
              {nav.icon}
            </span>

            <span>{nav.nameBn}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;
