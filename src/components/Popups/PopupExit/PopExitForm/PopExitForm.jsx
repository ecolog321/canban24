import { AppRoutes } from "../../../../lib/routes";
import {Link} from "react-router-dom";

export const PopExitForm = ({setIsAuth}) => {
const toogleAuth=()=>{
  setIsAuth(false)
}

  return (
    <form className="pop-exit__form" id="formExit" action="#">
      <div className="pop-exit__form-group">
        <button onClick={toogleAuth} className="pop-exit__exit-yes _hover01" id="exitYes">
            <Link to={AppRoutes.LOGIN}>Да, выйти</Link>
        </button>
        <button className="pop-exit__exit-no _hover03" id="exitNo">
            <Link to={AppRoutes.HOME}>Нет, остаться</Link>
        </button>
      </div>
    </form>
  );
};
