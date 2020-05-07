function resize(flag){
    console.log("hello");
    widthF=document.getElementById("first").style.width;
    widthS=document.getElementById("second").style.width;
    if (flag==1){

    } else if (flag==2){

    }
}

document.getElementsByTagName("div")[0].onresize = function() {resize(1)}

