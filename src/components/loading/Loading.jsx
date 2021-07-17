import React from 'react'
import ReactLoading from 'react-loading';
import styles from "./loading.module.css"
// ------- types -------
// blank
// balls
// bars
// bubbles
// cubes
// cylon
// spin
// spinningBubbles
// spokes
// -------- url ----------
// https://www.npmjs.com/package/react-loading
export default function Loading({type,color,height,width}) {
    return (
        <div className={styles.Loading}>
            <ReactLoading type={type}  color={color}  height={height} width={width} />
        </div>
    )
}
