function Cdcp(){}

Cdcp.prototype.setBackgroundColorOfElementFromImage = function (element, image)
{
  var canvas= document.createElement('canvas');
  var myImg = document.createElement('img');

  $(image).each(function(i,imgObj){
    myImg.src = imgObj.src;

    $(myImg).one('load',function(){

      var context = canvas.getContext('2d');
      context.drawImage(myImg, 0, 0);

      data = context.getImageData(1, 1, 1, 1).data;

      var r = data[0];
      var g = data[1];
      var b = data[2];
      var a = data[3];

      $(element).css('background-color','rgba(' + r + ',' + g + ',' + b + ',' + a + ')');
    });
  })
};

var Cdcp = new Cdcp();
