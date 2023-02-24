type Props = {
  readonly checked: boolean;
  readonly disabled: boolean;
  readonly id: number;
  readonly onChange: (value: string) => void;
};

export default function FieldRadio({ checked, onChange, id, disabled }: Props): JSX.Element {
  const disabledClass = disabled ? "opacity-50 pointer-events-none" : "";

  // values for input field like name can be passed from props
  // by adding name, it removes our ability to tab into the input field
  // when using tab to navigate through the form
  // on the selected radio is focusable
  return (
    <input
      name="isSubscribed"
      type="radio"
      checked={checked}
      value={id}
      onChange={(event) => onChange(event?.target.value)}
      className={`w-primary h-primary accent-primary rounded-sm focus:accent-primary ${disabledClass}`}
    />
  );
}
