import React from 'react';
import "../styles/Index.scss";

const Layout = ({children}) => {
    return (
        <div className="Layout">
            {children}
        </div>
    );
}

export default Layout;