"use client";

import Link from "next/link";
import {
  SidebarLeftIcon,
  UserMultiple02Icon,
  Album02Icon,
  Layers01Icon,
  File01Icon,
  ArrowLeft02Icon,
  LogoutSquare01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRouter, usePathname } from "next/navigation";
import {} from "next/navigation";

export const CustomizedNavagation = () => {
  const pathName = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/users/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <nav className="flex flex-col gap-2 py-18  border-r border-r-(--theme-elevation-150)/50 px-2 h-dvh sticky top-0">
      <ul className="flex flex-col gap-0.5 px-0 mb-5 list-none *:flex *:gap-2 *:items-center *:transition-colors *:cursor-pointer *:px-3 *:py-2 *:rounded-2xl *:hover:bg-black/60!">
        <Link
          style={{
            background:
              pathName === "/admin/" ? "rgb(0,0,0,0.5)" : "transparent",
          }}
          className={`no-underline text-lg`}
          href="/admin"
        >
          <HugeiconsIcon
            size={20}
            style={{ opacity: "0.5" }}
            icon={SidebarLeftIcon}
          ></HugeiconsIcon>{" "}
          Dashboard
        </Link>
        <Link
          style={{
            background: pathName.includes("users")
              ? "rgb(0,0,0,0.5)"
              : "transparent",
          }}
          className="no-underline text-lg"
          href="/admin/collections/users/"
        >
          <HugeiconsIcon
            size={20}
            style={{ opacity: "0.5" }}
            icon={UserMultiple02Icon}
          ></HugeiconsIcon>{" "}
          Users
        </Link>
      </ul>

      <div className="flex flex-col gap-1.5">
        <span className="px-3 text-sm text-(--theme-elevation-400)">
          Content
        </span>
        <ul className="flex flex-col gap-0.5 px-0 list-none *:flex *:gap-2 *:items-center *:transition-colors *:cursor-pointer *:px-3 *:py-2 *:rounded-2xl *:hover:bg-black/60!">
          <Link
            style={{
              background: pathName.includes("media")
                ? "rgb(0,0,0,0.5)"
                : "transparent",
            }}
            className="no-underline text-lg"
            href="/admin/collections/media/"
          >
            <HugeiconsIcon
              size={20}
              style={{ opacity: "0.5" }}
              icon={Album02Icon}
            ></HugeiconsIcon>{" "}
            Media
          </Link>
          <Link
            style={{
              background: pathName.includes("categories")
                ? "rgb(0,0,0,0.5)"
                : "transparent",
            }}
            className="no-underline text-lg"
            href="/admin/collections/categories/"
          >
            <HugeiconsIcon
              size={20}
              style={{ opacity: "0.5" }}
              icon={Layers01Icon}
            ></HugeiconsIcon>{" "}
            Categories
          </Link>
          <Link
            style={{
              background: pathName.includes("projects")
                ? "rgb(0,0,0,0.5)"
                : "transparent",
            }}
            className="no-underline text-lg"
            href="/admin/collections/projects/"
          >
            <HugeiconsIcon
              size={20}
              style={{ opacity: "0.5" }}
              icon={File01Icon}
            ></HugeiconsIcon>{" "}
            Projects
          </Link>
        </ul>
      </div>

      <ul className="flex flex-col gap-0.5 px-0 mt-auto list-none *:flex *:gap-2 *:items-center *:transition-colors *:cursor-pointer *:px-3 *:py-2 *:rounded-2xl *:hover:bg-black/60!">
        <Link className={`no-underline text-lg`} href="/">
          <HugeiconsIcon
            size={20}
            style={{ opacity: "0.5" }}
            icon={ArrowLeft02Icon}
          ></HugeiconsIcon>{" "}
          Back To Site
        </Link>
        <Link
          onClick={handleLogout}
          className="no-underline text-lg"
          href="/admin/collections/users/"
        >
          <HugeiconsIcon
            size={20}
            style={{ opacity: "0.5" }}
            icon={LogoutSquare01Icon}
          ></HugeiconsIcon>{" "}
          Logout
        </Link>
      </ul>
    </nav>
  );
};
