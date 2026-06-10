import { SidebarLeftIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export const BackToDashboard = () => {
  return (
    <Link
      className="nav__link-label"
      style={{
        display: "flex",
        gridGap: "0.5rem",
        alignItems: "center",
        textDecoration: "none",
        fontSize: "14px",
        marginBottom: "1.5rem",
      }}
      href="/admin"
    >
      {" "}
      <HugeiconsIcon
        size={20}
        style={{ opacity: "0.5" }}
        icon={SidebarLeftIcon}
      ></HugeiconsIcon>
      Dashboard
    </Link>
  );
};
