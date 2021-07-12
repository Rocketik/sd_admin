import React from 'react'
import MenuDrawer from './MenuDrawer';

export default function Admin({ children }) {
    return (
        <div className="admin">
               <MenuDrawer />
               { children }
        </div>
    )
}

