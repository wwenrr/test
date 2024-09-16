import Image from "next/image";
// import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import Main from "./test";

export default async function Home() {
  const gitURL: string = `https://wwenrr.github.io/test/api`
  const URL: string = `/api`

  console.log(URL)
  const ans = await fetch('http://localhost:3000/api')
    .then(e => {return e.json()})

  console.log("ans", ans)

  return (
    <>
      <Main props={ans} />
    </>
  );
}
