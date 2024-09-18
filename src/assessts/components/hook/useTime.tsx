import React from "react";
import { useState, useEffect } from "react";

export default function useTime() {
    const [time, setTime] = useState<Date | boolean>(false);

    useEffect(() => {
        const now = new Date();
        document.title = formatTime(now);
        const intervalID =  setInterval(() => {
            const now = new Date();
            setTime(now);
            document.title = formatTime(now);
        }, 1000)

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    function formatTime(date: Date|boolean) {
        if (!(date instanceof Date)) return '';

        const hour = (date.getHours() % 12 || 12).toString().padStart(2, '0');
        const min = date.getMinutes().toString().padStart(2, '0');
        const sec = date.getSeconds().toString().padStart(2, '0');
        return `${hour}:${min}:${sec}`;
    }

    function formatDate(date: Date|boolean) {
        if (!(date instanceof Date)) return '';

        const daysOfWeek = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
        const dayOfWeek = daysOfWeek[date.getDay()];
        const day = date.getDate();
        const month = date.getMonth() + 1; // Tháng 0-11, cộng thêm 1 để có tháng 1-12
        const year = date.getFullYear();

        return `${dayOfWeek}, ${day}/${month}/${year}`;
    }

    if(!time) return time;
    return {
        date: formatDate(time),
        time: formatTime(time)
    }
}