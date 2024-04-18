import { PopNewCardCalendar } from "./PopNewCardCalenar/PopNewCardCalendar";
import { PopNewCardCategories } from "./PopNewCardCategories/PopNewCardCategories";
import { PopNewCardForm } from "./PopNewCardForm/PopNewCardForm";

export function PopNewCard({tasks,setTaskList}) {

    function onClick() {
        const newTask = {
          id: tasks.length + 1,
          theme: "Research",
          title: "Новая задача",
          date: "20.03.24",
          status: "Без статуса",
        };

        setTaskList([...tasks,newTask])
      }

    return (
        <div className="pop-new-card" id="popNewCard">
        <div className="pop-new-card__container">
            <div className="pop-new-card__block">
                <div className="pop-new-card__content">
                    <h3 className="pop-new-card__ttl">Создание задачи</h3>
                    <a href="#" className="pop-new-card__close">&#10006;</a>
                    <div className="pop-new-card__wrap">
                        <PopNewCardForm/>
                        <PopNewCardCalendar/>
                        <PopNewCardCategories/>
                    </div>
                   
                    <button onClick={onClick} className="form-new__create _hover01" id="btnCreate">Создать задачу</button>
                </div>
            </div>
        </div>
    </div>
    )
    
}