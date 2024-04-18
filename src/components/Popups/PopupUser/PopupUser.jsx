import UserName from "./UserName/UserName.jsx"
import UserEmail from "./UserEmail/UserEmail.jsx"
import UserTheme from "./UserTheme/UserTheme.jsx"
import UserButton from "./UserButton/UserButton.jsx"

function PopupUser () {
    
    return (
        <div className="header__pop-user-set pop-user-set" id="user-set-target">
        <a href="x"></a>
        <UserName/>
        <UserEmail/>
        <UserTheme/>
        <UserButton />
        </div>
    )
}

export default PopupUser;