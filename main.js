function createContent() {
  // document.getElementById('splash').addEventListener('click', splashClick);
  // get data of first ten music articles on guadian
  var url = "https://api.github.com/users/naazy/repos";
  var request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  // request.onload = function(e) {
  //   if (request.readyState === 4) {
  //     if (request.status === 200) {
  var data = JSON.parse(request.responseText);
  console.log(data);

}

createContent();

document.getElementById('splash').addEventListener('click', splashClick);

function splashClick() {
  var splashDiv = document.getElementById('splash');
  var wrapper = document.getElementsByClassName('wrapper')[0];
  var body = document.getElementsByTagName('body')[0];
  var box = document.getElementsByClassName('box')[0];


  splashDiv.style.display = "none";
  // google.style.display = "block";


//shows and styles the education/github section
  wrapper.style.display = "block";
  wrapper.style["margin-top"] = 0;
  body.style["overflow-y"] = "auto";
  body.style.display = "block";
  box.style["background-color"] = "rgb(58, 189, 171)";

}
