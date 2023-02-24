type Props = {
  readonly disabled: boolean;
  readonly value: string | null;
  readonly onChange: (value: string) => void;
};

export default function FieldInput({ value, onChange, disabled }: Props): JSX.Element {
  const disabledClass = disabled ? "opacity-50 pointer-events-none bg-disabled" : "";

  return (
    <input
      className={`rounded-md p-3 border border-border ${disabledClass}`}
      onChange={(event) => onChange && onChange(event.target.value)}
      placeholder="Ins. ID/SSn"
      type="text"
      value={value ?? ""}
    />
  );
}
