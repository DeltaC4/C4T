function generator() {
 //   debugger;
    var x = Math.floor((Math.random()* 20)+1);
    console.log(x);
    var imgUrl = "<img src='img/pic" + x + ".jpg'>";
    document.getElementById('divImage').innerHTML= imgUrl;
}