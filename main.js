canvas = document.getElementById ('drawCanvas');

ctx = canvas.getContext("2d");

var mouse_event = "empty";
var last_position_of_x, last_position_of_y;
var current_position_of_mouse_x, current_position_of_mouse_y;

canvas.addEventListener("mousedown", mouseclick);

function mouseclick(e)
{
    mouse_event = "mouseDown";
}

canvas.addEventListener("mouseleave", mouseout);

function mouseout(e)
{
    mouse_event = "mouseleave";
}

canvas.addEventListener("mouseup", mouselift);

function mouselift(e)
{
    mouse_event = "mouseUP";
}

cavas.addEventListener("mousemove", mousewalk);
function mousewalk(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetleft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if ("mouse_event == mouseDown") 
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + current_position_of_mouse_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x = ") + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
