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

    return(
        <>
            <nav className={style.nav}>
                {
                    nav_list.map((item, index) => (
                        <Link href={item.href} 
                            className={`${style.box} ${path === item.href ? style.active : ''}`}  
                            key={index}
                        >
                            <p>{item.name}</p>

                        </Link>
                    ))
                }
            </nav>
        </>
    )
}