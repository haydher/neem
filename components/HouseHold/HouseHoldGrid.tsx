import FieldCheckbox from "../Form/FieldCheckbox";
import FieldInput from "../Form/FieldInput";
import FieldRadio from "../Form/FieldRadio";
import FieldSelect from "../Form/FieldSelect";
import Grid from "../Grid";
import HouseholdType from "../../Types/HouseholdType";
import Name from "./Name";
import React from "react";

const header = ["Covered", "Name", "Subscriber", "Insurance", "SSN"];

export default function HouseHoldGrid({ data, addNewMember, handleIsCovered }: HouseholdType) {
  return (
    <div>
      <Grid>
        {header?.map((item): JSX.Element => {
          return <span key={item}>{item}</span>;
        })}
      </Grid>

      {data?.map((houseHold) => {
        return (
          <Grid key={houseHold.id}>
            <FieldCheckbox checked={houseHold.covered} onChange={handleIsCovered} />
            <Name fullName={houseHold?.fullName} nickName={houseHold?.nickName} />
            <FieldRadio checked={houseHold.isSubscribed} />
            <FieldSelect value={houseHold.insurance} />
            <FieldInput />
          </Grid>
        );
      })}

      <div className="flex justify-end">
        <button className="text-xs text-primary font-regular" onClick={addNewMember}>
          + Add New Member
        </button>
      </div>
    </div>
  );
}
