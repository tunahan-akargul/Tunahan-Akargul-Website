
const inputElement = document.getElementById("inputText");
const makeMissionButton = document.getElementById("makeMissionButton");
const deleteButton = document.getElementById("deleteButton");
const daySelect = document.getElementById("day");
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");
const errorMessage = document.getElementById("errorMessage");
const selectText = document.querySelector(".choiceDiv1");
const everydayButton = document.getElementById("everyday");
const everydayText = document.getElementById("everydayText");

let divCount = 0;
let removedDivsOrder;
let transform = -180;
let checked = true;
let yearValue = Number(yearSelect.value);

// Div'leri geri yükleme
if (checked == true){
    daySelect.disabled = true;
    monthSelect.disabled = true;
    yearSelect.disabled = true;
    makeTransparent(selectText);
    makeTransparent(daySelect);
    makeTransparent(monthSelect);
    makeTransparent(yearSelect);
    makeOpaque(everydayText);
}else{
    daySelect.disabled = false;
    monthSelect.disabled = false;
    yearSelect.disabled = false;
    makeOpaque(daySelect);
    makeOpaque(monthSelect);
    makeOpaque(yearSelect);
    makeOpaque(selectText);
    makeTransparent(everydayText);
}


function makeTransparent(valiable){
    valiable.style.color = "rgba(0,0,0,0.3)";
    valiable.style.borderColor = "rgba(0,0,0,0.3)";
}

function makeOpaque(valiable){
    valiable.style.color = "rgba(0,0,0,1)";
    valiable.style.borderColor = "rgba(0,0,0,1)";
}

everydayButton.onclick = function(){
    if (checked == true){
        checked = false;
        everydayButton.style.backgroundColor = ("rgb(255,255,255)");
    }else{
        checked = true;
        everydayButton.style.backgroundColor = ("rgb(0,0,0)");
    }


if (checked == true){
    daySelect.disabled = true;
    monthSelect.disabled = true;
    yearSelect.disabled = true;
    makeTransparent(selectText);
    makeTransparent(daySelect);
    makeTransparent(monthSelect);
    makeTransparent(yearSelect);


}else{
    daySelect.disabled = false;
    monthSelect.disabled = false;
    yearSelect.disabled = false;
    makeOpaque(daySelect);
    makeOpaque(monthSelect);
    makeOpaque(yearSelect);
    makeOpaque(selectText);
}

}

makeMissionButton.onclick = function(){

    let dayValue = Number(daySelect.value);
    let monthValue = Number(monthSelect.value);
    let yearValue = Number(yearSelect.value);

    
    if (inputElement.value == null || inputElement.value == undefined || inputElement.value == "" || inputElement.value.trim() == ""){
        errorMessage.textContent = "Please enter any mission.";
    }else if (checked == true){
        createEverydayDivFunction();
    }else if (daySelect.value === "" || dayValue < 1 || dayValue > 30) {
        errorMessage.textContent = "Please enter a valid day between 1 and 30.";
    } else if (monthSelect.value === "" || monthValue < 1 || monthValue > 12) {
        errorMessage.textContent = "Please enter a valid month between 1 and 12.";
    } else if (yearSelect.value === "" || yearValue < 2000) {
        errorMessage.textContent = "Please enter a valid year greater than or equal to 2000.";
    }
    else{
        createDivFunction();
}

function createDivFunction(){
    divCount++;
        const newDiv = document.createElement('div');
        newDiv.setAttribute("order",divCount);
        newDiv.setAttribute("transform", -1);

        if (yearValue >= 2024){
            newDiv.className = 'newMissionBackground';
        }
        else{
            newDiv.className = 'oldMissionBackground';
        }


        const newText = document.createElement("label");
        newText.className = "missionText";
        newText.textContent = inputElement.value;
        newDiv.appendChild(newText);

        const newButton = document.createElement("button");
        newButton.textContent = "DELETE";
        newButton.className = 'deleteButton';
        newDiv.appendChild(newButton);

        newDiv.classList.add("createAnimate");
        newDiv.addEventListener("animationend", function(){
            newDiv.classList.remove("createAnimate");
        },{once: true})

        newButton.onclick = function() {
            newDiv.classList.add("deleteAnimate");
            newDiv.addEventListener("animationend", function(){
                newDiv.classList.remove("deleteAnimate");
                newDiv.remove(); 
                removedDivsOrder = Number(newDiv.getAttribute("order"));
                upAnimationFunction();
            }, {once: true});
        };

        const newDate= document.createElement("label");
        newDate.className = "dateText";

        if (yearValue >= 2024){
            newDate.style.color = "rgb(80, 80, 80)";
        }else{
            newDate.style.color = "rgb(240, 240, 240)";
        }

        newDate.textContent = daySelect.value+"/"+monthSelect.value+"/"+yearSelect.value
        newDiv.appendChild(newDate);

        
        if (divCount === 1) {
            newDiv.style.top = '110px';
        } else {
            const previousDiv = document.body.children[document.body.children.length - 1];
            const previousRect = previousDiv.getBoundingClientRect();

            newDiv.style.top = (previousRect.bottom + 20) + 'px';
        }

        document.body.appendChild(newDiv);

        inputElement.value = null;
        errorMessage.textContent = "";
        monthSelect.value = null;
        daySelect.value = null;
        yearSelect.value = null;
    }

}

function createEverydayDivFunction(){
    divCount++;
        const newDiv = document.createElement('div');
        newDiv.className = 'newMissionBackground';
        newDiv.setAttribute("order",divCount);
        newDiv.setAttribute("transform", -1);

        const newText = document.createElement("label");
        newText.className = "missionText";
        newText.textContent = inputElement.value;
        newDiv.appendChild(newText);

        const newButton = document.createElement("button");
        newButton.textContent = "DELETE";
        newButton.className = 'deleteButton';
        newDiv.appendChild(newButton);

        newDiv.classList.add("createAnimate");
        newDiv.addEventListener("animationend", function(){
            newDiv.classList.remove("createAnimate");
        },{once: true})

        newButton.onclick = function() {
            newDiv.classList.add("deleteAnimate");
            newDiv.addEventListener("animationend", function(){
                newDiv.classList.remove("deleteAnimate");
                newDiv.remove(); 
                removedDivsOrder = Number(newDiv.getAttribute("order"));
                upAnimationFunction();
            }, {once: true});
        };

        const newDate= document.createElement("label");
        newDate.className = "dateText";
        newDate.style.color = "rgb(80, 80, 80)"
        newDate.textContent = "Everyday";
        newDiv.appendChild(newDate);
        
        if (divCount === 1) {
            newDiv.style.top = '110px';
        } else {
            const previousDiv = document.body.children[document.body.children.length - 1];
            const previousRect = previousDiv.getBoundingClientRect();

            newDiv.style.top = (previousRect.bottom + 20) + 'px';
        }

        document.body.appendChild(newDiv);

        inputElement.value = null;
        errorMessage.textContent = "";
}

function upAnimationFunction() {
    for (let i = removedDivsOrder + 1; i <= divCount; i++) {

        let targetDiv = document.querySelector(`div[order="${i}"]`);
        targetDiv.setAttribute("transform", Number(targetDiv.getAttribute("transform")) + 1);

        const styleSheet = document.createElement('style');
        document.head.appendChild(styleSheet);

        styleSheet.innerHTML = `
            @keyframes moveUp {
                from {
                    transform: translateY(${Number(targetDiv.getAttribute("transform")) * transform}px);
                }
                to {
                    transform: translateY(${(Number(targetDiv.getAttribute("transform")) + 1) * transform}px);
                }
            }
        
            .upAnimate {
                animation: moveUp 0.4s ease forwards;
            }
        `;

        targetDiv.classList.add("upAnimate");
        targetDiv.addEventListener("animationend", function () {
            targetDiv.style.transform = `translateY(${(Number(targetDiv.getAttribute("transform")) + 1) * transform}px)`;
            targetDiv.classList.remove("upAnimate");
        }, { once: true });

        targetDiv.setAttribute("order", Number(targetDiv.getAttribute("order")) - 1);
    }
    divCount -= 1;
}

document.querySelectorAll('.choice').forEach(function(input) {
    input.addEventListener('input', function() {
        // Remove any non-digit characters
        input.value = input.value.replace(/[^0-9]/g, '');
    });
});