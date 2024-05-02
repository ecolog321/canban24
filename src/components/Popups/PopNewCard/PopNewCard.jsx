import Calendar from "../../Calendar/Calendar";
import { PopNew,PopNewBlock, PopNewContainer, PopNewContent } from "./PopNewCard.styled";
import { PopNewCardCategories } from "./PopNewCardCategories/PopNewCardCategories";
import { PopNewCardForm } from "./PopNewCardForm/PopNewCardForm";

export function PopNewCard({tasks,setTaskList, $display}) {

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
        <PopNew $display={$display}>
            <PopNewContainer>
                <PopNewBlock>
                    <PopNewContent>
                        <h3>Создание задачи</h3>
                        <a href=""></a>
                        <div>
                        <PopNewCardForm/>
                        <Calendar/>
                        <PopNewCardCategories/>
                        </div>
                        <button onClick={onClick} className="form-new__create _hover01" id="btnCreate">Создать задачу</button>
                    </PopNewContent>
                </PopNewBlock>
            </PopNewContainer>
        </PopNew>

    )
    
}