import Calendar from "../../../Calendar/Calendar";
import { Subtitle } from "../../../styles/shared";
import {
  FormBrowseArea,
  FormBrowseBlock,
  PopBrowseForm,
  PopBrowseWrap,
} from "./Wrap.styled";

export const Wrap = ({
  currentCard,
  setCurrentCard,
  selected,
  setSelected,
  isEdit,
  setChangedTask,
}) => {
  return (
    <PopBrowseWrap>
      <PopBrowseForm>
        <FormBrowseBlock>
          <Subtitle>Описание задачи</Subtitle>
          <FormBrowseArea
            $isEdit={isEdit}
            readOnly={!isEdit}
            placeholder="Введите описание задачи"
            value={currentCard?.description}
            onChange={(e) => {
              setChangedTask({ ...currentCard, description: e.target.value });
              setCurrentCard({ ...currentCard, description: e.target.value });
            }}
          >
            {currentCard?.description}
          </FormBrowseArea>
        </FormBrowseBlock>
      </PopBrowseForm>
      <Calendar selected={selected} setSelected={setSelected} />
    </PopBrowseWrap>
  );
};
