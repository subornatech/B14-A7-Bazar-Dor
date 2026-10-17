
"use client";

import baseUrl from "@/Service/baseUrl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Navs {
  id: string;
  slug: string;
  icon: string;
  nameBn: string;
}

const NavLinks = () => {
  const pathname = usePathname();
  const [navsData, setNavsData] = useState<Navs[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${baseUrl}/categories`);
        const data = await res.json();

        setNavsData(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

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
        {navsData.map((nav) => {
          const isActive = pathname === `/category/${nav.slug}`;

          return (
            <Link
              href={`/category/${nav.slug}`}
              key={nav.id}
              className={`
                flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium
                transition-colors duration-200
                sm:gap-2 sm:text-base lg:text-lg
                ${
                  isActive
                    ? "bg-[#05893E] text-white"
                    : "text-gray-800 hover:bg-[#05893E]/10 hover:text-[#05893E]"
                }
              `}
            >
              <span className="text-base sm:text-lg lg:text-xl">
                {nav.icon}
              </span>

              <span>{nav.nameBn}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavLinks;
