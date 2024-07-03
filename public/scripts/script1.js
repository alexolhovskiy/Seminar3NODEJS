

let quad = document.getElementById("quad");
let box = document.querySelector(".main");
var step = 5, x = box.getBoundingClientRect().left + window.pageXOffset, y = box.getBoundingClientRect().top + window.pageYOffset, x_f = true, y_f = true;
function main() {
    console.log("Home");
    if (x_f == true) {
        if ((x + 200 + step) < box.getBoundingClientRect().left + box.clientWidth + window.pageXOffset) {
            x += step;
        } else {
            x_f = false;
        }
    } else {
        if (x > box.getBoundingClientRect().left + window.pageXOffset + step) {
            x -= step;
        } else {
            x_f = true;
        }
    }

    if (y_f == true) {
        if ((y + 200 + step) < box.getBoundingClientRect().top + box.clientHeight + window.pageYOffset) {
            y += step;
        } else {
            y_f = false;
        }
    } else {
        if (y > box.getBoundingClientRect().top + window.pageYOffset + step) {
            y -= step;
        } else {
            y_f = true;
        }
    }
    console.log(box.getBoundingClientRect().left + " " + box.getBoundingClientRect().top);
    console.log(box.clientWidth + " " + box.clientHeight);
    console.log(x + " " + y);
    quad.style.cssText = "left:" + x + "px;top:" + y + "px;";
}

setInterval(main, 100);