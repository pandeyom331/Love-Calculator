function calculate()
{
  var your_name = document.getElementById("name1").value;
  var your_crush =document.getElementById("name2").value;

 var len = your_name.length;
 var len1 = your_crush.length;

 var n = Math.floor(Math.random() * len * 10) + 1;

 var n1 = Math.floor(Math.random() * len1 * 10) + 1;

  var sum = n + n1;

  if(sum > 100)
  {
    sum = sum - 100;
  }
  else if(sum > 200)
  {
    sum = sum - 180;
  }

 document.getElementById("mybutton").onclick = function()
 {
   location.href = "#Calculated";
 }

 if(sum > 100)
 {
   $(".rum").text("Congrats Your love Percentage is Above hundred");
 }

 document.getElementById("result").innerHTML = sum;

document.querySelector("#mybutton").addEventListener("click",function()
{
  makeSound(sum);
});

function makeSound(key)
{

  if(sum > 50 && sum < 100)
  {
    var sound1 = new Audio("music/stay.mp3");
    return sound1.play();
  }
  else if(sum > 100)
  {
    var sound2 = new Audio("music/you.mp3");
    return sound2.play();
  }
  else if(sum < 50)
  {
    var sound2 = new Audio("music/spak.mp3");
    return sound2.play();

   }
}

 $(".cal").fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);
}
