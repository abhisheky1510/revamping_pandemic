function login(){
  var x = document.getElementById("inputUser").value;
  var y = document.getElementById("inputPassword").value;
  var z = document.getElementById("login")
  if(x != "MI" || y != "2020"){
    z.action = "./portal.html"
    alert("Invalid Credentials");

  }
}


