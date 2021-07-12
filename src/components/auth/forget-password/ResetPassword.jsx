import React from "react";
 

export default function ResetPassword({title,children}) {
  return (
    <div className="auth">
      <div className="auth_inner">
        <div className="auth_inner_header">
          <div className="auth_inner_header_title">
            <p className="reset-title">{title}</p>
          </div>
        </div>
        {children}
        
      </div>
    </div>
  );
}
