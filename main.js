function generator() {
    var x = Math.floor((Math.random()* 20)+1);
    var imgUrl = "<img src='img/pic" + x + ".jpg'>";
    document.getElementById('divImage').innerHTML= imgUrl;
}