'use client'

import React from "react";
import style from "@/assessts/css/nav.module.scss"
import Link from 'next/link';
import useTime from "@/assessts/components/hook/useTime";

export default function Nav() {
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
                            className={style.box} key={index}
                            passHref
                        >
                            <p>{item.name}</p>

                        </Link>
                    ))
                }
            </nav>
        </>
    )
}