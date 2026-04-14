import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/lib/data";

export default function Navigation() {
  return (
    <header className="w-full border-b border-border">
      <div className="container border-x border-border py-6 px-12!">
        <div className="flex justify-between gap-4 items-center">
          <Link href="/">
            <Image
              src={`/GG.svg`}
              alt="GizenGraphics Logo"
              width={60}
              height={32}
              loading="eager"
              className="w-auto h-auto"
            />
          </Link>
          <nav>
            <ul className="flex gap-12">
              {navigation.map((item) => (
                <li className="font-medium" key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
