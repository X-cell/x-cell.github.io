

document.getElementById('contact').addEventListener('click', contactClick);

function contactClick() {
  var form = document.getElementById('mc_embed_signup');
  var intro = document.getElementsByClassName('intro')[0];
  intro.style.display = "none";
  form.style.display="block";
}

document.getElementById('home').addEventListener('click', homeClick);

function homeClick() {
  var form = document.getElementById('mc_embed_signup');
  var intro = document.getElementsByClassName('intro')[0];
  form.style.display="none";
  intro.style.display = "block";

}
