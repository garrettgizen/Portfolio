"use client";
import { useField, useFormFields } from "@payloadcms/ui";
import { useEffect } from "react";

export const NewSlugField = () => {
  const { value: title } = useFormFields(([fields]) => fields.title);
  const { value, setValue } = useField<string>({ path: "slug" });

  useEffect(() => {
    if (typeof title === "string") {
      setValue(
        title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, ""),
      );
    }
  }, [title]);

  return (
    <div className="field-type text">
      <label className="field-label">Slug</label>
      <input
        type="text"
        value={value ?? ""}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
