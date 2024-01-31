// CW-Lesson-29__DOM__practic-one
function randomNum() {
    return Math.floor(Math.random() * 500);
}

// getRandomColor
let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange', 'grey'];
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
const squares = document.querySelectorAll('div.square');
squares.forEach((element) => {
    element.style.backgroundColor = getRandomColor();
    element.textContent = randomNum();
});


// increment
const btn_Increment = document.getElementById("increment")
function isdiigt(a) {
    if (isFinite(Number(a))) {
        return Number(a)
    }
    else { return null }
}
btn_Increment.addEventListener('click', function () {
    const squares = document.querySelectorAll('div.square');
    squares.forEach((element) => {
        const content = isdiigt(element.textContent)
        if (content != null) {
            element.textContent = content + 1;
        }
    });
}

);
let setContent = new Set([])
//Reset All
const btn_resetAll = document.getElementById('resetAll');

btn_resetAll.addEventListener('click', function () {
    const squares = document.querySelectorAll('div.square');

    squares.forEach((element) => {
        element.textContent = '0';
    });
});
//"Create New"
//Додайте кнопку "зеленого кольору", клік ЛКМ призводить до створення нового блока.
//Значенням блока є середнє арифметичне поточних значень уже існуючих блоків (заокруглене в більшу сторонунну).
function createNewBlok(number) {
    const newBlok = document.createElement('div');
    newBlok.classList.add('square');
    newBlok.innerText = number;
    newBlok.style.backgroundColor = getRandomColor();
    document.querySelector('.elements__squares').appendChild(newBlok);
}

function calcAverage() {
    const blocks = document.querySelectorAll('.square');
    let sum = Array.from(blocks).reduce((sum, blok) => {
        if (typeof (parseInt(blok.textContent) == 'number')) {
            return sum + parseInt(blok.textContent);
        }
    }, 0);
    return Math.ceil(sum / blocks.length);
};
// "Delete All"
document.querySelector('.createNew').addEventListener('click', () => {
    let number = calcAverage();
    createNewBlok(number);
});
const buttonDelete = document.getElementById('deleteAll');

buttonDelete.addEventListener('click', function (e){
    
    let ask = confirm("Are you sure you want to delate blocks?");
    if(ask == true){
        const childrens = document.querySelectorAll("div.elements__squares div");
        if(childrens.length > 0){
            for(let i = 0; i < childrens.length; i++){
                childrens[i].remove();
            }
        }
       
} 
    });

// "Refill with Text"
const btn_Refill = document.getElementById("refillText");
const textArray = ["Apple", "Grapefruit", "Persimmon", "Banana", "Peach", "Cantaloupe", "Orange", "Plum", "Honeydew Melon", "Mango", "Cherry", "Blackberry", "Pineapple", "Pear", "Kiwifruit", "Watermelon", "Grape", "Mulberry", "Kiwi", "Guava", "Jackfruit", "Papaya", "Pomegranate", "Currant", "Strawberry", "Apricot", "Elderberry"]
function randomNumText() {
    return Math.floor(Math.random() * textArray.length);
}
// function add_set_content(q){
//     if (!setContent.has(textArray[q])){
//         setContent.add(textArray[q]);
//         return true;
//     }
//     else{
//         return false;
//     }

// }

btn_Refill.addEventListener('click', function () {
    const squares = document.querySelectorAll('div.square');
    squares.forEach((element) => {
        let rand = randomNumText();
        // while(add_set_content(textArray[rand])){
        //     rand = randomNumText();
        // }
        element.textContent = textArray[rand];



    });
});

// error div
function showMessage(message, className, time = 5000) {
    const errorBlock = document.createElement('div');
    errorBlock.classList.add(className);
    errorBlock.innerText = message;
    document.body.appendChild(errorBlock);
    setTimeout(() => {
        document.body.removeChild(errorBlock);
    }, time);

};

workingWithError('error', 'errorBlock');


