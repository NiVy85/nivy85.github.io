// place memorycards face up in random order, 
// put dummycard face down on top of real cards,
// onclick hide dummy card, bubble listener to real card,
// compare to next card,
// if correct = score + hide real cards, else cover with dummy,
// limit counter. (player has set amount of tries). click = counter--
// 
// cards.class game.js


// wrap js in div @ window.child

// async?
var bricks = [];
var tilesClicked = 0;
var theBoard;
var testArray = [];

function startGame(winId) {
    bricks = [];
    windowId = "" + winId;
    iStart = "<img class=\"imageC\" draggable=\"false\" id=\"mem";
    iMid = "\" src=\"image\\i";
    iEnd = ".png\"</img>";

    for(var i = 0; i < 8; i++) {
        var temp = "";
        temp = iStart + i + iMid + i + iEnd
        bricks.push(temp);
        bricks.push(temp);
    }

    // randomize bricks
    bricks.shuffleBricks();

    // create inner window div, append to window, unique ID
    setBoard(windowId);
    theBoard = document.getElementById(windowId); // TARGET UNIQUE WIN ID <-----------
    theBoard.addEventListener('click', cardClick, false);
    // create table Math.sqrt(array.lenght)*Math.sqrt(array.lenght) append to inner window(div)
}

Array.prototype.shuffleBricks = function () {
    for(i = 0; i < this.length; i++) {
        var rand = Math.floor(Math.random() * (this.length - 1)), temp;
        temp = bricks[i];
        bricks[i] = bricks[rand];
        bricks[rand] = temp;
    }
}

function setBoard(id) {
    tilesChecked = 0;
    var board = '';
    bricks.shuffleBricks();
    for(var i = 0; i < bricks.length; i++) {
        board += "<div id=\"b_" + i + "\">" + bricks[i] + "</div>";
    }
    document.getElementById(id).innerHTML = board;
}

function cardClick(e) {
    if (e.target.id.substr(0,2) != 'b_') { return false; }
    tilesClicked++;
    testArray.push(e.target.firstElementChild);
    if (tilesClicked < 3) {
        if (e.target.id.substr(0,2) == 'b_') {
            e.target.firstElementChild.style.visibility = 'visible';
        }
    }
    if (tilesClicked == 2) {
        if (testArray[0].id === testArray[1].id) {
            tilesClicked = 0;
            testArray = [];
        } else {
            setTimeout(function () {
                testArray[0].style.visibility = 'hidden';
                testArray[1].style.visibility = 'hidden';
                testArray = [];
                tilesClicked = 0;
            }, 800); 
        }
    }
}
