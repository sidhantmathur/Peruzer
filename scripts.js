
let exampleList = ['Shelf','Book','Political Idealogy','Laptop','Smartphone','Printer','Bicycle','Backpack',
'Boots','Sofa','Movie','TV','Smart Speaker','Headphones','Smart Watch','Watch','Washing Machine','Dryer',
'Dishwasher','Coffee Table','Desk','Mouse','Dog','Cat','Pet','Coffee Shop','Coffee Beans','Tea Leaves','Tires',
'Smart Home','Reddit App','Camera','Programming Language','IDE','Text Editor','Industry','Job',];

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.addEventListener("click", newExample);
btn2.addEventListener("click", newExample);

var spans = Array.prototype.slice.call(document.querySelectorAll('.changeText'));

function newExample() {
    let randomNumber = Math.floor(Math.random() * (exampleList.length));
    spans.forEach(function(span){
        span.textContent = exampleList[randomNumber];
    });
}