function showDiv(x) {
    var x = document.getElementById(x);
    x.style.display = "block";
    return x;
  }
  
  function hideDiv(x) {
    var x = document.getElementById(x);
    x.style.display = "none";
  }

  module.exports = showDiv;