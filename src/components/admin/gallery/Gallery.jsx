import React from 'react';
import Admin from './../Admin';
import AdminContentHeader from './../AdminContentHeader';

// const galleryTableConfig
export default function Gallery( props ) { 
    return (
        <Admin>
            <div className="admin_content">
                <AdminContentHeader title="Տեսադարան" />
                <div className="admin_content_inner">
                    <table>
                        <thead>

                        </thead>
                    </table>
                </div>
            </div>
        </Admin>
    )
}

