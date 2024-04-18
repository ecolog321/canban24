import React from "react";
import { Btn, Container } from "../styles/shared";
import UserButton from "../Popups/PopupUser/UserButton/UserButton";
import { AppRoutes} from "../../lib/routes";
import { Link } from "react-router-dom";

export const NotFound=()=>{
return(
    <Container>
        <h2>Упс, такой страницы нет, попробойте другую!</h2>
       <Btn><Link to={AppRoutes.HOME}>На главную</Link></Btn>
    </Container>
)

}