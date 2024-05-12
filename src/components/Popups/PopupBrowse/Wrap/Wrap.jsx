import Calendar from "../../../Calendar/Calendar"
import { Subtitle } from "../../../styles/shared"
import { FormBrowseArea, FormBrowseBlock, PopBrowseForm, PopBrowseWrap } from "./Wrap.styled"


export const Wrap=({currentCard, selected, setSelected})=>{
    return (

		<PopBrowseWrap>
			<PopBrowseForm>
				<FormBrowseBlock>
					<Subtitle>Описание задачи</Subtitle>
					<FormBrowseArea readOnly placeholder="Введите описание задачи">{currentCard?.description}</FormBrowseArea>
				</FormBrowseBlock>
			</PopBrowseForm>
			<Calendar  selected={selected} setSelected={setSelected}/>
		</PopBrowseWrap>
    )
}