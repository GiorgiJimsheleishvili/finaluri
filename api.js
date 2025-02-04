fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
        let user = data.results[0];
        document.getElementById("user-data").innerHTML = `
            <img src="${user.picture.medium}" alt="User">
            <p>${user.name.first} ${user.name.last}</p>
            <p>Email: ${user.email}</p>
        `;
    })
    .catch(error => console.error("Error fetching user data:", error));
