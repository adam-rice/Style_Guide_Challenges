function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

document.getElementById('sign-up-btn').addEventListener('click', function() {
  alert('sign up!');
});

document.getElementById('log-in-btn').addEventListener('click', function() {
  alert('log in!');
});
