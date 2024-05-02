export const PopNewCardForm=({newTask, setNewTask})=>{
    return <form className="pop-new-card__form form-new" id="formNewCard" action="#">
                <div className="form-new__block">
                    <label htmlFor="formTitle" className="subttl">Название задачи</label>
                    <input onChange={(e)=>{setNewTask({...newTask, title:e.target.value})}} className="form-new__input" type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus />
                </div>
                <div className="form-new__block">
                    <label htmlFor="textArea" className="subttl">Описание задачи</label>
                    <textarea onChange={(e)=>{setNewTask({...newTask, description:e.target.value})}} className="form-new__area" name="text" id="textArea"  placeholder="Введите описание задачи..."></textarea>
                </div>
            </form>
}