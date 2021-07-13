import React from 'react';
import deleteIcon from "../../../assets/images/deleteIcon.png"

export default function TRow({ type, data }) {
    return (
        <tr>
            {data.map( (el,i) => type === "head" ? <th key={i}>{el}</th> : <td key={i}>{el}</td> )}
            {type !== "head" ?  <td ><img src={deleteIcon} alt="" /></td> : "" }
           
        </tr>
            
        
    )
}
