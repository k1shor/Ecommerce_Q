export const register = ( firstname, lastname, username, email, password) =>{
    return fetch (`http://localhost:5000/register`,{
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