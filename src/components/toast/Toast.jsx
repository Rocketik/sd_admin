import React from 'react'

export default function Toast() {
    const style = {
        position: "fixed",
        zIndex: 10000,
        width: "320px",
        top: 0,
        right: "20px"
    }
    return (
        <div id="ino-toast-container" style={style}></div>
    )
}
