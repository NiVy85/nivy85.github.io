var canvas, ctx, paintDiv, paintStyle;
var mouse = {x:0,y:0};

function initiate() {
    canvas= document.getElementById('paint');
    ctx = canvas.getContext('2d');
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';
    paintDiv = document.getElementById('paintDiv');
    paintStyle = getComputedStyle(paintDiv);
    canvas.height = parseInt(paintStyle.getPropertyValue('height'));
    canvas.width = parseInt(paintStyle.getPropertyValue('width'));
    canvas.addEventListener('mousemove', function(e) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
    }, false);
    canvas.addEventListener('mousedown', function(e){
        ctx.beginPath();
        ctx.moveTo(mouse.x,mouse.y);
        canvas.addEventListener('mousemove', onPaint, false);
    }, false);
    canvas.addEventListener('mouseup', function(e){
        canvas.removeEventListener('mousemove', onPaint, false);
    }, false)
    canvas.addEventListener('mouseleave', function(e){
        canvas.removeEventListener('mousemove', onPaint, false);
    }, false)

    canvas.addEventListener('contextmenu', function(e) {
        e.preventDefault()
        ctx.clearRect(0,0,canvas.width,canvas.height);
    })

    var onPaint = function() {
        ctx.lineTo(mouse.x,mouse.y);
        ctx.stroke();
    }
}

window.onload = initiate;






