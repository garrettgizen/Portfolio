import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export const BackToSite = () => {
  return (
    <Link
      className="nav__link-label"
      style={{
        display: "flex",
        gridGap: "0.5rem",
        alignItems: "center",
        textDecoration: "none",
        fontSize: "14px",
        marginTop: "1.5rem",
      }}
      href="/"
    >
      {" "}
      <HugeiconsIcon
        size={20}
        style={{ opacity: "0.5" }}
        icon={ArrowLeft02Icon}
      ></HugeiconsIcon>
      Back To Site
    </Link>
  );
};
