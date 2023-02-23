import React from "react";

export default function FieldRadio({ checked }: { checked: boolean }): JSX.Element {
  return (
    <input
      type="radio"
      checked={checked}
      className="w-primary h-primary accent-primary rounded-sm focus:accent-primary"
    />
  );
}
