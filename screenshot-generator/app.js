function generator(){
    var x = document.getElementById("input").value;
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    var url = `https://screenshotapi.net/api/v1/screenshot?token=H9WUZL7DURUBNCFXYJBNAAP5VCCGFB2H&url=${x}&width=${width}&height=${height}&fresh=true&output=image`;
    var download = document.getElementById("load");

    img.src=url;
    document.getElementById("load").style.display="block";
    console.log(url);
    console.log(height);
    console.log(width);
}

function noImage(){
    document.getElementById("load").style.display="none";
}