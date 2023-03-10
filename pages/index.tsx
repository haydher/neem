import Head from "next/head";

import Form1 from "../components/Form1";
import HouseHoldDataType from "../Types/HouseHoldDataType";

export default function Home({ data }: { data: HouseHoldDataType[] }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Form1 data={data} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // const res = await fetch(`/api/...`);
  // const data = await res.json();
  // sanitize data

  return {
    props: {
      data: data,
    },
  };
}

const data = [
  {
    id: 1,
    fullName: "asdadadadadadadadadadadadadadadadadadadadadadadadJermone Bell",
    nickName: "Rome",
    isSubscribed: true,
    insurance: "primary",
    ssn: null,
    covered: true,
  },
  {
    id: 2,
    fullName: "Stacy Bell",
    nickName: "Stacy",
    isSubscribed: false,
    insurance: "secondary",
    ssn: null,
    covered: true,
  },
  {
    id: 3,
    fullName: "Rebecca Bell",
    nickName: "Beca",
    isSubscribed: false,
    insurance: null,
    ssn: null,
    covered: false,
  },
];
