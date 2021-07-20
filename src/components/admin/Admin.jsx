import React from 'react'
import MenuDrawer from './MenuDrawer';

export default function Admin({ children, isGalery }) {
    return (
        <div className="admin">
               <MenuDrawer isGalery={isGalery} />
               { children }
        </div>
    )
}

