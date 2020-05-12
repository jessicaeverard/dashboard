var x;
var widthF;
var widthS;
var nWidthF;
var nWidthS;
var vw;
var resize;

function getSize(flag) {
    vw = window.innerWidth;
    out(vw)
    resize = flag;
    out("Down: " + flag);

    if (widthF == null) {
        widthF = (vw / 2) - 10;
        out("First Panel Width: "+widthF);
    } else {
        widthF = document.getElementById("first").style.width.split("px")[0];
        out(widthF);
    }
    if (widthS == null) {
        widthS = (vw / 2) - 10;
        out("Second Panel Width: "+widthS);
    } else {
        widthS = document.getElementById("second").style.width.split("px")[0];
        out(widthS);
    }


}
function newSize() {
    out("Up: " + resize);

    if (nWidthF == null && resize != 0) {

    }

    resize = 0;
}
function out(flag) {
    console.log(flag);
}


