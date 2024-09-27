const names = ["Edward","Tank", "Nikolai", "Takeo", "Samantha", "Ludwig", "Monty"];

for (name of names) {
    console.log(name);
    if(name === "Samantha") {
        console.log("Samantha is in the list!");
        break;
    }
}

let loading = 0;

while (loading < 10) {
    console.log("Website is loading until a year has passed!");
    loading++;
}

const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");


changeColor.addEventListener('click', function(){
text.classList.toggle('change');
});

const userList = document.querySelectorAll(".name-list li");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function (){

const newLi = document.createElement("LI");
const liContent = document.createTextNode(listInput.value);
newLi.appendChild(liContent);
userList.appendChild(newLi);
});