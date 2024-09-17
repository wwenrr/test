'use client'
import React, { useState, useEffect } from "react";
import './style.scss'

export default function Page() {
    const [time, setTime] = useState<Date | boolean>(false);

    useEffect(() => {
        const intervalID =  setInterval(() => {
            const now = new Date();
            setTime(now);
            document.title = formatTime(now);
        }, 1000)

        return () => {
            clearInterval(intervalID);
        }
      }, []);

      function formatDate(date: Date|boolean) {
        if (!(date instanceof Date)) return '';

        const daysOfWeek = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
        const dayOfWeek = daysOfWeek[date.getDay()];
        const day = date.getDate();
        const month = date.getMonth() + 1; // Tháng 0-11, cộng thêm 1 để có tháng 1-12
        const year = date.getFullYear();

        return `${dayOfWeek}, ${day}/${month}/${year}`;
    }

    function formatTime(date: Date|boolean) {
        if (!(date instanceof Date)) return '';

        const hour = (date.getHours() % 12 || 12).toString().padStart(2, '0');
        const min = date.getMinutes().toString().padStart(2, '0');
        const sec = date.getSeconds().toString().padStart(2, '0');
        return `${hour}:${min}:${sec}`;
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
    
                <p>{time && formatDate(time)}</p>
                <br />
                <p>{time && formatTime(time)}</p>
            </div>
        </>
    )
}