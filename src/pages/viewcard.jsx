import { PopupBrowse } from "../components/Popups/PopupBrowse/PopupBrowse";
import { useParams } from "react-router-dom";

function ViewCard() {
  let { cardID } = useParams();

  return <PopupBrowse $display cardID={cardID} />;
}

export default ViewCard;
