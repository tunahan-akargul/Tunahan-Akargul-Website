const myImage = document.getElementById("myImage");
let imageNumber = 0;

myImage.addEventListener('animationiteration', () => {
    imageNumber++;
    imageNumber = (imageNumber % 5);

switch(imageNumber){
    case 0:
        myImage.src = "../myImages/0.png";
        break
    case 1:
        myImage.src = "../myImages/1.png";
        break
    case 2:
        myImage.src = "../myImages/2.png";
        break
    case 3:
        myImage.src = "../myImages/3.png";
        break
    case 4:
        myImage.src = "../myImages/4.png";
        break
}
});
