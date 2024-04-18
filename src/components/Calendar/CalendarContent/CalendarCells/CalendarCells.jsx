import { CalendarCell, Calendar } from "./CalendarCells.styled"

export function CalendarCells() {
    return (
		<Calendar>
			<CalendarCell $opacity={false}>28</CalendarCell>
			<CalendarCell $opacity={false}>30</CalendarCell>
			<CalendarCell $opacity={false}>29</CalendarCell>
			<CalendarCell $opacity={true}>31</CalendarCell>
			<CalendarCell $opacity={true}>1</CalendarCell>
			<CalendarCell $opacity={true}>2</CalendarCell>
			<CalendarCell $opacity={true}>3</CalendarCell>
			<CalendarCell $opacity={true}>4</CalendarCell>
			<CalendarCell $opacity={true}>5</CalendarCell>
			<CalendarCell $opacity={true}>6</CalendarCell>
			<CalendarCell $opacity={true}>7</CalendarCell>
			<CalendarCell $opacity={true} $current={true}>8</CalendarCell>
			<CalendarCell $opacity={true}>9</CalendarCell>
			<CalendarCell $opacity={true}>10</CalendarCell>
			<CalendarCell $opacity={true}>11</CalendarCell>
			<CalendarCell $opacity={true}>12</CalendarCell>
			<CalendarCell $opacity={true}>13</CalendarCell>
			<CalendarCell $opacity={true}>14</CalendarCell>
			<CalendarCell $opacity={true}>15</CalendarCell>
			<CalendarCell $opacity={true}>16</CalendarCell>
			<CalendarCell $opacity={true}>17</CalendarCell>
			<CalendarCell $opacity={true}>18</CalendarCell>
			<CalendarCell $opacity={true}>19</CalendarCell>
			<CalendarCell $opacity={true}>20</CalendarCell>
			<CalendarCell $opacity={true}>21</CalendarCell>
			<CalendarCell $opacity={true}>22</CalendarCell>
			<CalendarCell $opacity={true}>23</CalendarCell>
			<CalendarCell $opacity={true}>24</CalendarCell>
			<CalendarCell $opacity={true}>25</CalendarCell>
			<CalendarCell $opacity={true}>26</CalendarCell>
			<CalendarCell $opacity={true}>27</CalendarCell>
			<CalendarCell $opacity={true}>28</CalendarCell>
			<CalendarCell $opacity={true}>29</CalendarCell>
			<CalendarCell $opacity={true}>30</CalendarCell>
			<CalendarCell $opacity={true}>31</CalendarCell>
			<CalendarCell $opacity={false}>1</CalendarCell>
		</Calendar>
    )
}