export const register = ( firstname, lastname, username, email, password) =>{
    return fetch (`http://localhost:5000/api/register`,{
        method:"POST",
        headers:{
            "Content-type":"application/json",
        },
        body: JSON.stringify({
            firstname,
            lastname,
            username,
            email,
            password
        })
    })
    .then(response=> response.json())
    .catch(error => console.log(error))
    
}

export const login = (username,password) => {
    return fetch(`http://localhost:5000/api/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username,password})
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}