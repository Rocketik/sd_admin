import React from 'react'
import partnersDelete from "../../../assets/images/partnersDelete.png";
export default function PartnersItem( { image } ) {
    return (
        <div className="admin_content_inner_partners_item">
            <img src={image} alt="" className="backdropImage" />
            <img src={ partnersDelete } className="deleteIcon" alt="" srcset="" />
        </div>
    )
}
