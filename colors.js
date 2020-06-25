/*These Functions Make The Background and Text Color Acessible To Seeing Impaired*/

function outerblack() {
    document.body.style.backgroundColor = "#c2c2c2";
    document.getElementById("title").style.backgroundColor = "#000";
    document.getElementById("title").style.color = "#fff";
    document.getElementById("title").style.border = " 4px solid #9adacd"
    document.getElementById("drop_zone").style.backgroundColor = "#efefef";
    document.getElementById("drop_zone").style.color = "#000";
    document.getElementById("dropped").style.backgroundColor = "#000";
    document.getElementById("dropped").style.color = "#fff";
    document.getElementById("dropped").style.border = " 4px solid #9adacd"
    var elements = document.getElementsByClassName('container'); // get all elements
    elements[0].style.backgroundColor = "#000";
    elements[3].style.backgroundColor = "#000";
    elements[0].style.border = "#000";
    elements[2].style.border = "none";
    elements[3].style.border = "#000";

    return false;
}

function outeryellow() {
        document.body.style.backgroundColor = "#e6e6e6";
        document.getElementById("title").style.backgroundColor = "#fff";
        document.getElementById("title").style.color = "#000";
        document.getElementById("title").style.border = "none"
        document.getElementById("drop_zone").style.backgroundColor = "#fff";
        document.getElementById("drop_zone").style.color = "#000";
        document.getElementById("dropped").style.backgroundColor = "#fee46a";
        document.getElementById("dropped").style.color = "#000";
        document.getElementById("dropped").style.border = " 1px solid #e6e6e6"
        var elements = document.getElementsByClassName('container'); // get all elements
        elements[0].style.backgroundColor = "#fee46a";
        elements[3].style.backgroundColor = "#fff";
        elements[0].style.border = "2px solid #e6e6e6";
        elements[2].style.border = "1px solid #e6e6e6";
        elements[3].style.border = "2px solid #e6e6e6";
        return false;
}

function blackyellow() {
    document.body.style.backgroundColor = "#fee46a";
    document.getElementById("title").style.backgroundColor = "#000";
    document.getElementById("title").style.color = "#FFF";
    document.getElementById("title").style.border = " 4px solid #ffda33"
    document.getElementById("drop_zone").style.backgroundColor = "#efefef";
    document.getElementById("drop_zone").style.color = "#000";
    document.getElementById("dropped").style.backgroundColor = "#000";
    document.getElementById("dropped").style.color = "#ff0";
    document.getElementById("dropped").style.border = " 4px solid #ffda33"
    var elements = document.getElementsByClassName('container'); // get all elements
    elements[0].style.backgroundColor = "#000";
    elements[3].style.backgroundColor = "#000";
    elements[0].style.border = "#000";
    elements[2].style.border = "none";
    elements[3].style.border = "#000";
    return false;
}

function greyscale() {
    document.body.style.backgroundColor = "#c2c2c2";
    document.getElementById("title").style.backgroundColor = "#555";
    document.getElementById("title").style.color = "#bdbdbb";
    document.getElementById("title").style.border = " 4px solid #bdbdbb"
    document.getElementById("drop_zone").style.backgroundColor = "#fff";
    document.getElementById("drop_zone").style.color = "#555";
    document.getElementById("dropped").style.backgroundColor = "#555";
    document.getElementById("dropped").style.color = "#bdbdbb";
    document.getElementById("dropped").style.border = " 1px solid #555"
    var elements = document.getElementsByClassName('container'); // get all elements
    elements[0].style.backgroundColor = "#555";
    elements[3].style.backgroundColor = "#fff";
    elements[0].style.border = "none";
    elements[2].style.border = "1px solid #c2c2c2";
    elements[3].style.border = "2px solid #c2c2c2";
    return false;
}

function white() {
    document.body.style.backgroundColor = "#2E3641";
    document.getElementById("title").style.backgroundColor = "#2E3641";
    document.getElementById("title").style.color = "#fff";
    document.getElementById("title").style.border = " 2px solid #2E3641"
    document.getElementById("drop_zone").style.backgroundColor = "#fff";
    document.getElementById("drop_zone").style.color = "#000";
    document.getElementById("dropped").style.backgroundColor = "#fff";
    document.getElementById("dropped").style.color = "#000";
    document.getElementById("dropped").style.border = " 1px solid #2E3641"
    var elements = document.getElementsByClassName('container'); // get all elements
    elements[0].style.backgroundColor = "#FFF";
    elements[3].style.backgroundColor = "#FFF";
    elements[0].style.border = "1px solid #282c34";
    elements[2].style.border = "1px solid #282c34";
    elements[3].style.border = "1px solid #282c34";

    return false;
}

function tealWhite() {
  document.body.style.backgroundColor = "#b8edd8";
  document.getElementById("title").style.backgroundColor = "#54565c";
  document.getElementById("title").style.color = "#FFF";
  document.getElementById("title").style.border = " 4px solid #54565c"
  document.getElementById("drop_zone").style.backgroundColor = "#f2f2f2";
  document.getElementById("drop_zone").style.color = "#54565c";
  document.getElementById("dropped").style.backgroundColor = "#fff";
  document.getElementById("dropped").style.color = "#54565c";
  document.getElementById("dropped").style.border = " 1px solid #989898"
  var elements = document.getElementsByClassName('container'); // get all elements
  elements[0].style.backgroundColor = "#FFF";
  elements[3].style.backgroundColor = "#FFF";
  elements[0].style.border = "1px solid #b5b5b5";
  elements[2].style.border = "1px solid #b5b5b5";
  elements[3].style.border = "1px solid #b5b5b5";
  return false;
}

function whiteGrey() {
    document.body.style.backgroundColor = "#b5b5b5";
    document.getElementById("title").style.backgroundColor = "#fff";
    document.getElementById("title").style.color = "#989898";
    document.getElementById("title").style.border = " 4px solid #989898"
    document.getElementById("drop_zone").style.backgroundColor = "#f2f2f2";
    document.getElementById("drop_zone").style.color = "#989898";
    document.getElementById("dropped").style.backgroundColor = "#fff";
    document.getElementById("dropped").style.color = "#989898";
    document.getElementById("dropped").style.border = " 2px solid #989898"
    var elements = document.getElementsByClassName('container'); // get all elements
    elements[0].style.backgroundColor = "#FFF";
    elements[3].style.backgroundColor = "#FFF";
    elements[0].style.border = "1px solid #b5b5b5";
    elements[2].style.border = "1px solid #b5b5b5";
    elements[3].style.border = "1px solid #b5b5b5";
    return false;
}

function blackTeal() {
  document.body.style.backgroundColor = "#93c8bd";
  document.getElementById("title").style.backgroundColor = "#000";
  document.getElementById("title").style.color = "#fff";
  document.getElementById("title").style.border = " 4px solid #9adacd"
  document.getElementById("drop_zone").style.backgroundColor = "#efefef";
  document.getElementById("drop_zone").style.color = "#000";
  document.getElementById("dropped").style.backgroundColor = "#000";
  document.getElementById("dropped").style.color = "#cce5e0";
  document.getElementById("dropped").style.border = " 4px solid #9adacd"
  var elements = document.getElementsByClassName('container'); // get all elements
  elements[0].style.backgroundColor = "#000";
  elements[3].style.backgroundColor = "#000";
  elements[0].style.border = "#000";
  elements[2].style.border = "none";
  elements[3].style.border = "#000";
}
