import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../lib/routes";

function UserButton() {
    return (
        <button type="button" className="_hover03"><Link to={AppRoutes.EXIT}>Выйти</Link></button>
    )
}

export default UserButton;