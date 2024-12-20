
var shoppyUserApi = "https://retoolapi.dev/oS3XyU/shoppyUser";

function registerUser(requestBody){

    let request = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    }

    fetch(shoppyUserApi, request)
        .then(response => response.json())
        .then(responseData => {
            alert("User Registered Successfully...");
            window.location.href = "./login.html";
        })
}

function checkSession(){

    let userName = sessionStorage.getItem('userName') || '';
    if(userName == ""){
        alert('Please login to View the page...');
        window.location.href = './login.html';
    }
}

function logout(){
    sessionStorage.removeItem('userName');
    alert("You've logged out successfully...");
    window.location.href = "./index.html";
}