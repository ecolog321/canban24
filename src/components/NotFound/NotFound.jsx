
import { Btn, ContainerNotFound } from "../styles/shared";
import { AppRoutes} from "../../lib/routes";
import { Link } from "react-router-dom";

export const NotFound=()=>{
return(
    <ContainerNotFound>
        <h2>Упс, такой страницы нет, попробойте другую!</h2>
       <Btn><Link to={AppRoutes.HOME}>На главную</Link></Btn>
    </ContainerNotFound>
)

}