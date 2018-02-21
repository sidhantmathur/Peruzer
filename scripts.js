
let exampleList = ['Shelf','Book','Political Idealogy','Laptop','Smartphone','Printer','Bicycle','Backpack',
'Boots','Sofa','Movie','TV','Smart Speaker','Headphones','Smart Watch','Watch','Washing Machine','Dryer',
'Dishwasher','Coffee Table','Desk','Mouse','Dog','Cat','Pet','Coffee Shop','Coffee Beans','Tea Leaves','Tires',
'Smart Home','Reddit App','Camera','Programming Language','IDE','Text Editor','Industry','Job',];

function newExample() {
    let randomNumber = Math.floor(Math.random() * (exampleList.length));
    document.getElementById('changeText').innerHTML = exampleList[randomNumber];
}
