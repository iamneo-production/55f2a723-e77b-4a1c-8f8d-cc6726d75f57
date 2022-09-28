import React from 'react';

import AdminHeader from '../AdminHeader/header' 
import AdminHome from '../AdminHomeComponent/movies'

const Admin = () => {
    return (
        <div>
        <AdminHeader></AdminHeader>
        <AdminHome></AdminHome>
        </div>        
    )
}

export default Admin