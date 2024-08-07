import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function Calendar({ selected, setSelected }) {

  let footer = <p>Выберите срок исполнения</p>;
  if (selected) {
    footer = <p>Дата исполнения {format(selected, "PP", { locale: ru })}</p>;
  }
  return (
    <DayPicker
      locale={ru}
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}
