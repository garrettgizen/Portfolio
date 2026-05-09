import React from "react";

export default function FooterContact() {
  return (
    <div className="flex flex-col gap-2 tablet:max-w-97">
      <span className="opacity-60">Let’s Chat</span>
      <h5 className="text-lg mb-6">
        <strong>Like what you see?</strong> How about we get in touch and let’s
        build our dream designs.
      </h5>
      <a className="button dark" href="tel:3062703526">
        Call Me Now!
      </a>
    </div>
  );
}
