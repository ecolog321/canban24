function UserEmail() {
    return (
        <p className="pop-user-set__mail">{JSON.parse(localStorage.getItem("user")).login}</p>
    )
}

export default UserEmail;