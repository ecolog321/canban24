import { CalendarCells } from "./CalendarCells/CalendarCells";
import { CalendarContent } from "./CalendarContent.styled";
import { CalendarDays } from "./CalendarDays/CalendarDays";

export function Calendarcontent() {
    return (
        <CalendarContent>
            <CalendarDays/>
            <CalendarCells/>
        </CalendarContent>
        
    )
}