import { useState } from "react";

export default function FieldSelect({ value }: { value: string | null }): JSX.Element {
  const [fieldValue, setValue] = useState(value);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setValue(event.target.value);
  }

  return (
    <select
      id="insurance"
      value={fieldValue ? fieldValue : ""}
      onChange={handleChange}
      className="p-3 border border-border rounded-md focus:ring-primary focus:border-primary block w-full "
    >
      {["Primary", "Secondary"].map((item) => {
        return (
          <option key={item} value={item.toLowerCase()}>
            {item}
          </option>
        );
      })}
    </select>
  );
}

//item.toLowerCase() === value?.toLowerCase() ? item : ""
