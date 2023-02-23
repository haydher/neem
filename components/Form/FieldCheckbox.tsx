import React, { useState } from "react";
import FieldCheckboxType from "../../Types/FieldCheckbox";

export default function FieldCheckbox({ checked, onChange }: FieldCheckboxType): JSX.Element {
  const [fieldChecked, setChecked] = useState(checked);

  function handleChange() {
    const toggle = !fieldChecked;

    onChange(toggle);
    setChecked(toggle);
  }

  return (
    <input
      type="checkbox"
      checked={fieldChecked}
      onChange={handleChange}
      className="w-primary h-primary accent-primary rounded-sm focus:accent-primary"
    />
  );
}
