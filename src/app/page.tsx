// 'use client'

import Image from "next/image";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import Main from "./test";


const secretKey = process.env.NEXT_PUBLIC_API_KEY;

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATA_BASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID
};

const app = initializeApp(firebaseConfig);

export default async function Home() {
  // console.log(123123)
  // console.log(secretKey)
  let test;
  fetch('/api')
    .then(e => console.log(e))


  return (
    <div style={{fontSize: '25px'}}>
        <div className="">API key là: {secretKey=='1234' ? "tìm thấy" : "không tìm thấy"}</div>
        <div className="">API key là: {secretKey}</div>
        <div className="">API key là: {process.env.LMAO_BRO}</div>
        <Main props={{secretKey}}/>
    </div>
  );
}
