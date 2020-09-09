function prevDefDrag(event) {
    event.preventDefault();
    event.stopPropagation();
}

var mX;
var mY;
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    mX = event.clientX;
    mY = event.clientY;
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var theTarget = document.getElementById(data);
    var newY = theTarget.offsetTop + (event.clientY - mY);
    var newX = theTarget.offsetLeft + (event.clientX - mX);
    document.getElementById(data).style.left = newX;
    document.getElementById(data).style.top = newY;
    document.getElementById("desktop").appendChild(document.getElementById(data));
	event.dataTransfer.clearData();
}
