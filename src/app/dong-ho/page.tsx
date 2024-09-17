'use client'
import React, { useState, useEffect } from "react";
import './style.scss'

export default function Page() {
    const [time, setTime] = useState<Date | boolean>(false);

    useEffect(() => {
        const intervalID =  setInterval(() => {
            setTime(prev => new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID);
        }
      }, []);

    function formatDate() {
        if (!(time instanceof Date)) return '';

        const daysOfWeek = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
        const dayOfWeek = daysOfWeek[time.getDay()];
        const date = time.getDate();
        const month = time.getMonth() + 1; // Tháng 0-11, cộng thêm 1 để có tháng 1-12
        const year = time.getFullYear();
        

        return `${dayOfWeek}, ${date}/${month}/${year}\n `;
    }

    function formatTime() {
        if (!(time instanceof Date)) return '';

        const hour = (time.getHours() % 12 || 12).toString().padStart(2, '0');
        const min = time.getMinutes().toString().padStart(2, '0');
        const sec = time.getSeconds().toString().padStart(2, '0');
        return `${hour}:${min}:${sec}`
    }

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
    
                <p>{time && formatDate()}</p>
                <br />
                <p>{time && formatTime()}</p>
            </div>
        </>
    )
}