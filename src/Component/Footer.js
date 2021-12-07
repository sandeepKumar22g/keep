
import React from 'react'

const Footer = () => {
   let date = new Date().getFullYear()

    return (
        <>
            <footer style={{marginTop:"25%",  display:'flex', justifyContent: "center", alignItems:"center", backgroundColor:"grey"}}>
                <p style={{textAlign:"center", fontWeight:"bolder"}}>Copyright © {date}</p>
            </footer>
        </>
    )
}

export default Footer
