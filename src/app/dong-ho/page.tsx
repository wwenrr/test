'use client'
import React, { useState, useEffect } from "react";
import './style.scss'
import useTime from "@/assessts/components/hook/useTime";

export default function Page() {
    const time  = useTime();
    const time1 = useTime();

    return(
        <>
            <div className="content">
                {!time &&
                <div className="load-box">
                    <div className="load">
            
                    </div>
                    <br />
                    <p>Đợi xíu fen, tui đang load</p>
                </div> }
    
                <p>{time && time.date}</p>
                <br />
                <p>{time && time.time}</p>
            </div>
        </>
    )
}