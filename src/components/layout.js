import React from 'react'
import Navbar from "./Navbar"
import "./layout.css"

export default function layout({children}) {
    return (
        <>
          <Navbar/>  
          <main>
              {children}
          </main>
        </>
    )
}
