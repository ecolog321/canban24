import { PopNewCardCalendar } from "../../PopNewCard/PopNewCardCalenar/PopNewCardCalendar"

export const Wrap=()=>{
    return (
        <div className="pop-browse__wrap">
								<form className="pop-browse__form form-browse" id="formBrowseCard" action="#">									
									<div className="form-browse__block">
										<label htmlFor="textArea01" className="subttl">Описание задачи</label>
										<textarea className="form-browse__area" name="text" id="textArea01"  readOnly placeholder="Введите описание задачи..."></textarea>
									</div>
								</form>
								<PopNewCardCalendar/>
							</div>
    )
}