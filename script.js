function handleLogin(event) {
    event.preventDefault()

    const username = document.getElementById('input-username').value 
    const passaword = document.getElementById('input-username').value 

    console.log(`Username: ${username} \n ${passaword}`)
    alert(`Login with: ${username} \n Password: ${passaword}`)


}

document.getElementById('login-form').addEventListener('submit' , handleLogin)
