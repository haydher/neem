import HouseHoldDataType from "./HouseHoldDataType";

type HouseholdType = {
  readonly data: HouseHoldDataType[];
  readonly addNewMember: () => void;
  readonly handleIsCovered: (id: number) => void;
};

export default HouseholdType;
