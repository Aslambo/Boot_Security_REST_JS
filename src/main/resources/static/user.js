fetch("/api/user")
    .then(respone => respone.json())
    .catch(error => console.log(error))

let userPage = ''
const showUserInfo = (user) => {
    const container = document.getElementById("tbody-user")
    userPage +=
        `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.surname}</td>
            <td>${user.age}</td>
            <td>${user.email}</td>
            <td>${user.roles.map(role => role.name)}</td>
        </tr>`
    container.innerHTML = userPage
}
fetch("/api/user")
    .then(response => response.json())
    .then(data => showUserInfo(data))
    .catch(error => console.log(error))