
const myDiv = document.getElementById("myDiv");
let menuIsOpen = false;

// Check if page can be scrolled
function canScroll() {
    return document.documentElement.scrollHeight > window.innerHeight;
}

// Initialize menu state - open if at top or if page can't scroll
function initializeMenu() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (!canScroll() || currentScrollTop === 0) {
        // Open menu
        if (!menuIsOpen) {
            myDiv.classList.add("come");
            myDiv.addEventListener("animationend", function(){
                myDiv.classList.remove("come");
                myDiv.style = "top: 0px;"
            });
            menuIsOpen = true;
        }
    }
}

// Initialize on page load
initializeMenu();

window.addEventListener("scroll", function() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // If at top of page - open menu
    if (currentScrollTop === 0 && menuIsOpen == false) {
        myDiv.classList.add("come");
        myDiv.addEventListener("animationend", function(){
            myDiv.classList.remove("come");
            myDiv.style = "top: 0px;"
        });
        menuIsOpen = true;
    }
    // If not at top of page - close menu
    else if (currentScrollTop > 0 && menuIsOpen == true) {
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
sitesPage = function(){
    window.location.href = "../Pages/SitesPage.html";
}
aboutPageForPages = function(){
    window.location.href = "../../Pages/AboutPage.html";
}
gamesPageForPages = function(){
    window.location.href = "../../Pages/GamesPage.html";
}
sitesPageForPages = function(){
    window.location.href = "../../Pages/SitesPage.html";
}
homePageForPages = function(){
    window.location.href = "../../Pages/HomePage.html";
}
toDoListForPages = function(){
    window.location.href = "../../ToDoListProject/index.html";
}
blogPageForPages = function(){
    window.location.href = "../../Pages/BlogPage.html";
}