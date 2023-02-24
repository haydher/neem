import FieldCheckbox from "components/Form/FieldCheckbox";
import FieldInput from "components/Form/FieldInput";
import FieldRadio from "components/Form/FieldRadio";
import FieldSelect from "components/Form/FieldSelect";
import HouseHoldDataType from "Types/HouseHoldDataType";
import Name from "./Name";
import React from "react";

type Props = {
  readonly handleInsurance: (id: number, value: string) => void;
  readonly handleIsCovered: (id: number, value: boolean) => void;
  readonly handleIsSub: (id: number, value: string) => void;
  readonly handleSSN: (id: number, value: string) => void;
  readonly houseHold: HouseHoldDataType;
};

export default function Household({
  handleInsurance,
  handleIsCovered,
  handleIsSub,
  handleSSN,
  houseHold,
}: Props): JSX.Element {
  const handleInput = (value: string) => handleSSN(houseHold.id, value);
  const handleRadio = (value: string) => handleIsSub(houseHold.id, value);
  const handleSelect = (insurance: string) => handleInsurance(houseHold.id, insurance);
  const toggleCheckBox = () => handleIsCovered(houseHold.id, !houseHold.covered);

  return (
    <React.Fragment>
      <FieldCheckbox checked={houseHold.covered} onChange={toggleCheckBox} />
      <Name fullName={houseHold?.fullName} nickName={houseHold?.nickName} />
      <FieldRadio
        checked={houseHold.isSubscribed}
        disabled={!houseHold.covered}
        id={houseHold.id}
        onChange={handleRadio}
      />
      <FieldSelect value={houseHold.insurance} disabled={!houseHold.covered} onChange={handleSelect} />
      <FieldInput value={houseHold.ssn} disabled={!houseHold.covered} onChange={handleInput} />
    </React.Fragment>
  );
}
