import { PopExitForm } from "./PopExitForm/PopExitForm";
import { PopExit, PopExitBlock, PopExitContainer, PopExitTTl1 } from "./PopupExit.styled";

export function PopupExit({$display, logOut}) {
    return (
        <PopExit $display={$display}>
            <PopExitContainer>
                <PopExitBlock>
                    <PopExitTTl1><h2>Выйти из аккаунта?</h2></PopExitTTl1>
                    <PopExitForm logOut={logOut}></PopExitForm>
                </PopExitBlock>
            </PopExitContainer>
        </PopExit>
    )    
}