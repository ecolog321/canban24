import Calendar from "../../../Calendar/Calendar"
import { Subtitle } from "../../../styles/shared"
import { FormBrowseArea, FormBrowseBlock, PopBrowseForm, PopBrowseWrap } from "./Wrap.styled"


export const Wrap=()=>{
    return (

		<PopBrowseWrap>
			<PopBrowseForm>
				<FormBrowseBlock>
					<Subtitle>Описание задачи</Subtitle>
					<FormBrowseArea readOnly placeholder="Введите описание задачи" name="text"></FormBrowseArea>
				</FormBrowseBlock>
			</PopBrowseForm>
			<Calendar/>
		</PopBrowseWrap>
    )
}