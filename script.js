const input = document.getElementById("username");
const nextBtn = document.getElementById("nextBtn");
const msg = document.getElementById("msg");

const inputName = input.value.trim();

nextBtn.addEventListener("click", function (e) {
    if (input.value.trim() === "") {
        e.preventDefault();
        msg.innerText="kindly enter name first";
        msg.style.color="red";
        msg.style.fontSize = "10px";
    }
    else {
        localStorage.setItem("username", input.value.trim()); 
    }

});