type Props = {
  readonly checked: boolean;
  readonly onChange: () => void;
};

export default function FieldCheckbox({ checked, onChange }: Props): JSX.Element {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => onChange()}
      className="w-primary h-primary accent-primary rounded-sm focus:accent-primary"
    />
  );
}
