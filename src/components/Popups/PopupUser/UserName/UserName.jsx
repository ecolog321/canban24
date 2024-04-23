function UserName() {
    return (
		<p className="pop-user-set__name">{JSON.parse(localStorage.getItem("user")).name}</p> 
    )
}

export default UserName;