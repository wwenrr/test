'use client'

import Image from "next/image";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import Main from "./test";

export default async function Home() {
  const [text, setText] = useState('')

  return (
    <div style={{fontSize: '25px'}}>
        <input type="text" />
    </div>
  );
}
