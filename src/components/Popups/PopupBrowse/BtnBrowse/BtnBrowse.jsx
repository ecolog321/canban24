import { AppRoutes } from "../../../../lib/routes"
import { Link } from "react-router-dom";

export const BtnBrowse=()=>{
   return   <div className="pop-browse__btn-browse ">
                <div className="btn-group">
                    <button className="btn-browse__edit _btn-bor _hover03"><a href="#">Редактировать задачу</a></button>
                    <button className="btn-browse__delete _btn-bor _hover03"><a href="#">Удалить задачу</a></button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01"><Link to={AppRoutes.HOME}>Закрыть</Link></button>
            </div>
}