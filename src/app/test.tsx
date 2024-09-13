'use client'

import React, { useEffect } from "react";

export default function Main( {props}:any) {
    useEffect( () => {
        // console.log(props)
        fetch('/api')
            .then(respond => respond.json())
            .then(e => JSON.parse(e))
            .then(e => console.log(e))
    }, [])

    return(
        <>
            test test
        </>
    )
}