type HouseHoldDataType = {
  readonly id: number;
  readonly fullName: string;
  readonly nickName: string;
  readonly isSubscribed: boolean;
  readonly insurance: string | null;
  readonly ssn: string | null;
  readonly covered: boolean;
};

export default HouseHoldDataType;
