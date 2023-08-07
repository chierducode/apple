/* function blur */
let navbar = document.getElementById('navbar'); /* recupere navbar */
let content = document.getElementById('mainContainer'); /* recupere mainContainer */
navbar.addEventListener('mouseover', function() { /* utilise la fonction si mouseover */
  content.classList.add('blurred'); /* function blur */
});

/* function unblur */
navbar.addEventListener('mouseout', function() {
content.classList.remove('blurred');
});