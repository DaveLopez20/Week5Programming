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

for (user of userList) {
user.addEventListener("click", function(){
this.style.color = 'gold';

});

}