const username = localStorage.getItem("username");
 
if(username){
    document.getElementById("h1").innerText = `Hi, ${username.toUpperCase()}!`;
}