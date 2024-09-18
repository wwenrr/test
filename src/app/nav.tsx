'use client'

import React, { useEffect, useState } from "react";
import style from "@/assessts/css/nav.module.scss"
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Nav() {
    const path = usePathname()

    const nav_list = [
        {
            name:"Home",
            href: "/",
        },
        {
            name: "app đếm tiền",
            href: '/dem-tien',
        },
        {
            name: "đồng hồ",
            href: '/dong-ho',
        },
    ]

    useEffect(() => {
        console.log(path)
    }, [path])

    useEffect(() => {
        console.log("tui đang bị lag")   
    })

    return(
        <>
            <nav className={style.nav}>
                {
                    nav_list.map((item, index) => (
                        <Link href={item.href} 
                        className={`${style.box} ${path === item.href ? style.active : ''}`}  
                            key={index}
                            id={index.toString()}
                        >
                            <p>{item.name}</p>

                        </Link>
                    ))
                }
            </nav>
        </>
    )
}