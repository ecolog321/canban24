import { PopExitForm } from "./PopExitForm/PopExitForm";
import { PopExit, PopExitBlock, PopExitContainer, PopExitTTl1 } from "./PopupExit.styled";

export function PopupExit({$display, setIsAuth}) {
    return (
        <PopExit $display={$display}>
            <PopExitContainer>
                <PopExitBlock>
                    <PopExitTTl1><h2>Выйти из аккаунта?</h2></PopExitTTl1>
                    <PopExitForm setIsAuth={setIsAuth}></PopExitForm>
                </PopExitBlock>
            </PopExitContainer>
        </PopExit>
    )    
}