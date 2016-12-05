# Week One

## Design and build a reusable primary navigation bar. It must meet the following criteria:
* be responsive
* have a series of links that is not a dropdown on mid to large screens
* small screen/device layout must have the links shown as a dropdown
* have a button suitable to be used for “sign up” or “log out”
* have space for a logo, with a placeholder icon

### The Code
#### HTML
`<header>
  <nav>
    <ul class="topnav" id="myTopnav">
      <li><a href="#home"><img src="logo.svg" alt="logo"><h1>GreenPill</h1></a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#about">About</a></li>
      <li><button id="sign-up-btn" type="button" name="signup">Sign Up</button></li>
      <li><button id="log-in-btn" type="button" name="login">Log In</button></li>
      <li class="icon">
        <a href="javascript:void(0);" onclick="myFunction()">&#9776;</a>
      </li>
    </ul>
  </nav>
</header>`

#### CSS
h1 {
  display: inline-block;
  margin-left: 5px;
}

img {
  height: 22px;
  width: 22px;
}

button {
  background-color: #666633;
  border: none;
  color: #FFFFFF;
  font-size: 23px;
  display: inline-block;
  outline: none;
  padding: 14px 16px;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;
}

ul.topnav {
  background-color: #666633;
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
}

ul.topnav li {
  float: left;
}

ul.topnav li a {
  color: #FFFFFF;
  display: inline-block;
  font-size: 26px;
  padding: 14px 16px;
  transition: 0.3s;
  text-decoration: none;
  text-align: center;
}

ul.topnav li a:hover, ul.topnav li button:hover  {
  background-color: #990033;
  cursor: pointer;
}

ul.topnav li.icon {
  display: none;
}

//@media screen and (max-width:680px) {
  ul.topnav li:not(:first-child) {
    display: none;
  }

  ul.topnav li.icon {
    float: right;
    display: inline-block;
  }
}

//@media screen and (max-width:680px) {
  ul.topnav.responsive {
    position: relative;
  }

  ul.topnav.responsive li.icon {
    position: absolute;
    right: 0;
    top: 0;
  }

  ul.topnav.responsive li {
    float: none;
    display: inline;
  }

  ul.topnav.responsive li a, ul.topnav.responsive li button {
    display: block;
    text-align: left;
  }

  button {
    width: 100%;
  }
}

#### Scripts
`function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}`
