type Props = {
  readonly value: string | null;
  readonly disabled: boolean;
  readonly onChange: (value: string) => void;
};

export default function FieldSelect({ value, onChange, disabled }: Props): JSX.Element {
  const disabledClass = disabled ? "opacity-50 pointer-events-none bg-disabled" : "";
  const defaultClass = "p-3 border border-border rounded-md focus:ring-primary focus:border-primary block w-full";

  return (
    <select
      className={`${defaultClass} ${disabledClass}`}
      id="insurance"
      onChange={(event) => onChange(event.target.value)}
      value={value ?? ""}
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
