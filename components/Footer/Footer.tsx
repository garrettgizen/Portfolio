import React from "react";
import FooterContact from "./FooterContact";
import FooterNavigation from "./FooterNavigation";
import FooterSeperator from "./FooterSeperator";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="bg-footerBackground text-footerForeground">
      <div className="flex flex-col container px-0! border-footerBorder border-x">
        <div className="grid grid-cols-1 divide-y border-b border-footerBorder divide-footerBorder tablet:grid-cols-2 tablet:divide-y-0 tablet:divide-x *:py-12 *:tablet:py-20 *:px-4 *:tablet:first:pr-12 *:tablet:last:pl-12">
          <article aria-label="Call Me Section">
            <FooterContact />
          </article>
          <article aria-label="Site Navigation">
            <FooterNavigation />
          </article>
        </div>
        <FooterSeperator />
        <Copyright />
      </div>
    </footer>
  );
}
