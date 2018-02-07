
let exampleList = ['Shelf','Book','Political Idealogy','Laptop','Smartphone','Printer','Bicycle','Backpack','Boots','Sofa','Movie'];

function newExample() {
    let randomNumber = Math.floor(Math.random() * (exampleList.length));
    document.getElementById('changeText').innerHTML = exampleList[randomNumber];
}
