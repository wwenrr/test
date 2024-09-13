'use client'

import React, { useEffect } from "react";

export default function Main( {props}:any) {
    useEffect(() => {
        console.log(props)
    }, [])

    return(
        <>
            test test
        </>
    )
}