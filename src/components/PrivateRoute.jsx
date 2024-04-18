import React from "react";
import {Navigate, Outlet} from 'react-router-dom';
import { AppRoutes } from "../lib/routes";

export const PrivateRoute=({user})=>{
    return (
        user ? <Outlet/> : <Navigate to={AppRoutes.LOGIN}/>
    )
}