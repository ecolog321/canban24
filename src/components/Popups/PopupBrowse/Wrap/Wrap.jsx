import Calendar from "../../../Calendar/Calendar"
import { Subtitle } from "../../../styles/shared"
import { FormBrowseArea, FormBrowseBlock, PopBrowseForm, PopBrowseWrap } from "./Wrap.styled"


export const Wrap=({currentCard, selected, setSelected, isEdit})=>{
    return (

		<PopBrowseWrap>
			<PopBrowseForm>
				<FormBrowseBlock>
					<Subtitle>Описание задачи</Subtitle>
					<FormBrowseArea $isEdit={isEdit} readOnly={isEdit} placeholder="Введите описание задачи" value={currentCard?.description}>{currentCard?.description}</FormBrowseArea>
				</FormBrowseBlock>
			</PopBrowseForm>
			<Calendar  selected={selected} setSelected={setSelected}/>
		</PopBrowseWrap>
    )
}