let email = document.getElementById("email");
let msg = document.getElementById("msg");
let txt = document.getElementById("txt");

email.onfocus = function () {
  msg.style.display = "block";
};

email.onblur = function () {
  msg.style.display = "none";
};
let hh = document.getElementById("hh");
hh.style.setProperty("font-size", "50px");

hh.style.cssText = "color:red;";
