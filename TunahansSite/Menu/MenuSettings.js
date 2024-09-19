
const myDiv = document.getElementById("myDiv");
let menuIsOpen = false;

window.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    if (mouseY < 100 && menuIsOpen == false) {
        myDiv.classList.add("come");
        myDiv.addEventListener("animationend", function(){
            myDiv.classList.remove("come");
            myDiv.style = "top: 0px;"
        });
        menuIsOpen = true;
    }
    else if (mouseY >= 300 && menuIsOpen == true){
        myDiv.classList.add("left");
        myDiv.addEventListener("animationend", function(){
            myDiv.classList.remove("left");
            myDiv.style = "top: -100;"
        });
        menuIsOpen = false;
    }
});

const openOption = document.getElementById("openOption");
const openDiv = document.getElementById("openDiv");
openDiv.style.display = "none";

const animatedElement = document.getElementById('animatedElement');

openOption.addEventListener("mouseover", function(){
    openDiv.style.display = "block";
});

openOption.addEventListener("mouseout", function(){
    openDiv.style.display = "none";
});

openDiv.addEventListener("mouseover", function(){
    openDiv.style.display = "block";
});

aboutPage = function(){
    window.location.href = "../Pages/AboutPage.html";
}
homePage = function(){
    window.location.href = "../Pages/HomePage.html";
}
gamesPage = function(){
    window.location.href = "../Pages/GamesPage.html";
}
toDoList = function(){
    window.location.href = "../ToDoListProject/index.html";
}
blogPage = function(){
    window.location.href = "../Pages/BlogPage.html";
}