import { useState } from "react";
import Grid from "./Grid";
import Household from "./HouseHold/Household";
import HouseHoldDataType from "../Types/HouseHoldDataType";

type Props = {
  readonly data: HouseHoldDataType[];
};

const header = ["Covered", "Name", "Subscriber", "Insurance", "SSN"];

export default function Form1({ data }: Props) {
  const [houseHold, setHouseHold] = useState<HouseHoldDataType[]>(data);

  function handleIsCovered(id: number, covered: boolean) {
    const index = houseHold.findIndex((item) => item.id === id);
    const temp = [...houseHold];
    temp[index] = { ...temp[index], covered };

    setHouseHold(temp);

    // api call to the BE
  }

  function handleInsurance(id: number, insurance: string) {
    const index = houseHold.findIndex((item) => item.id === id);
    const temp = [...houseHold];
    temp[index] = { ...temp[index], insurance };

    setHouseHold(temp);

    // api call to the BE
  }

  function addNewMember() {
    // add a POST request to the API to add a new member

    const newMember = {
      id: 4,
      fullName: "Test new member",
      nickName: "New",
      isSubscribed: false,
      insurance: "primary",
      ssn: null,
      covered: false,
    };

    setHouseHold([...houseHold, newMember]);
  }

  function handleIsSub(id: number) {
    // logic can be added depending on the need for a scenario
    // when user clicks on checkbox (covered) to remove the subscriber
    // ideally, either the checkbox should be disabled if radio is selected
    // or prevent the action but pass a message to the user to unselect the radio

    // Only optimal solution here is to map over the array and update the isSubscribed
    const updateIsSub = houseHold.map((item) => {
      if (item.id === id) {
        return { ...item, isSubscribed: true };
      }
      return { ...item, isSubscribed: false };
    });

    setHouseHold(updateIsSub);
  }

  function handleSSN(id: number, ssn: string) {
    const pattern = /^[0-9.-]*$/;

    const ssnLength = ssn?.match(/\d+/g)?.join("").length;
    if (!pattern.test(ssn) || (ssnLength && ssnLength > 9)) {
      return;
    }

    const index = houseHold.findIndex((item) => item.id === id);
    const temp = [...houseHold];
    temp[index] = { ...temp[index], ssn };

    setHouseHold(temp);
  }

  return (
    <div className="max-w-32 border border-gray-300 p-4 m-4 rounded-md">
      <h1 className="flex font-medium">HouseHold</h1>

      <Grid>
        {header?.map((item): JSX.Element => {
          return <span key={item}>{item}</span>;
        })}
      </Grid>

      <Grid>
        {houseHold?.map((houseHold) => {
          return (
            <Household
              handleInsurance={handleInsurance}
              handleIsCovered={handleIsCovered}
              handleIsSub={handleIsSub}
              houseHold={houseHold}
              handleSSN={handleSSN}
              key={houseHold.id}
            />
          );
        })}
      </Grid>

      <div className="flex justify-end">
        <button className="text-xs text-primary font-regular" onClick={addNewMember}>
          + Add New Member
        </button>
      </div>
    </div>
  );
}
