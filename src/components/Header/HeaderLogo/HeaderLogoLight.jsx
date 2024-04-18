import { AppRoutes } from "../../../lib/routes";
import { HeaderLogo } from "./HeaderLogo.styled";
import {Link} from 'react-router-dom';

function HeaderLogoLight() {
   return (
      <HeaderLogo>
        <Link to={AppRoutes.HOME}><img src="../../logo.png" alt="logo" /></Link>
    </HeaderLogo>
   )
}

export default HeaderLogoLight;