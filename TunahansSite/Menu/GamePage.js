const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

let gameNumber = 1;

//If we want use it once. Whe have to write setTimeout.
setInterval(function(){
    image1.classList.add("gamesAnimation");
    image1.addEventListener("animationend", function(){
        image1.classList.remove("gamesAnimation");
    });
    image2.classList.add("gamesAnimation");
    image2.addEventListener("animationend", function(){
        image2.classList.remove("gamesAnimation");
    });
    gameNumber++;
    if((gameNumber % 2) == 0){
        image1.src = "../myImages/AltF42D Images/image4.webp";
        image2.src = "../myImages/AltF42D Images/image5.webp";
    }else{
        image1.src = "../myImages/AltF42D Images/image2.webp";
        image2.src = "../myImages/AltF42D Images/image3.webp";
    }
}, 3000);
