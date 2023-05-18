window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("topnav").style.padding = "1px 1px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("topnav").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}