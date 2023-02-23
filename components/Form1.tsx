import { useState } from "react";
import HouseHoldDataType from "../Types/HouseHoldDataType";
import HouseHoldGrid from "./HouseHold/HouseHoldGrid";

export default function Form1({ data }: { data: HouseHoldDataType[] }) {
  const [houseHold, setHouseHold] = useState<HouseHoldDataType[]>(data);

  function handleIsCovered(id: number) {
    const updateIsCovered = houseHold.map((item) => {
      if (item.id === id) {
        return { ...item, covered: !item.covered };
      }
      return item;
    });

    setHouseHold(updateIsCovered);

    // api call to the BE
  }

  function handleInsurance(id: number, insurance: string) {
    const updateInsurance = houseHold.map((item) => {
      if (item.id === id) {
        return { ...item, insurance };
      }
      return item;
    });

    setHouseHold(updateInsurance);

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
      covered: true,
    };

    setHouseHold([...houseHold, newMember]);
  }

  const props = {
    handleIsCovered,
    addNewMember,
    handleInsurance,
    data,
  };

  return (
    <div className="max-w-32 border border-gray-300 p-4 m-4 rounded-md">
      <h1 className="flex font-medium">HouseHold</h1>
      <HouseHoldGrid {...props} />
    </div>
  );
}
