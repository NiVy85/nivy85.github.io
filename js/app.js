var desktop = document.getElementById('desktop');
var chatIcon = document.getElementById('chat');
var memIcon = document.getElementById('memory');
var dddIcon = document.getElementById('ddd');
var winId = document.createElement('div');
var winCount = 0;

function createWindow(winId1, winId2) {
	firstWin = document.createElement('div');
	secWin = document.createElement('div');

	firstWin.setAttribute("id", "" + winId1);
	firstWin.setAttribute("tabindex", winCount);
	firstWin.setAttribute("class", "cWin");
	firstWin.setAttribute("draggable", "true");
	firstWin.setAttribute("ondragstart", "drag(event)");
	firstWin.innerHTML = "<span id = \"close\" onclick = \"this.parentNode.parentNode.removeChild(this.parentNode, winCount--); return false;\">X</span>";

	secWin.setAttribute("id", "" + winId2);
	secWin.setAttribute("class", "innDiv");
	secWin.setAttribute("draggable", "true");
	secWin.setAttribute("ondragstart", "return false;");
	firstWin.appendChild(secWin);
	desktop.appendChild(firstWin);
	winCount++;
}

chatIcon.ondblclick = function () {
	var rand1 = Math.floor(Math.random() * 9999);
	var rand2 = Math.floor(Math.random() * 9999);
	createWindow(rand1, rand1 + 1);
	document.getElementById(rand1).lastChild.innerHTML='<object id="chatobj" type="text/html" data="js/chat/chat.html"</object>';
}

memIcon.ondblclick = function () {
	var rand1 = Math.floor(Math.random() * 9999);
	var rand2 = Math.floor(Math.random() * 9999);
	createWindow(rand1, rand2);
	startGame(rand2);
}

dddIcon.ondblclick = function () {
	var rand1 = Math.floor(Math.random() * 9999);
	var rand2 = Math.floor(Math.random() * 9999);
	createWindow(rand1, rand1 + 1);
	document.getElementById(rand1).lastChild.innerHTML='<object id="paintobj" type="text/html" data="js/paint/paint.html"</object>';
}
	