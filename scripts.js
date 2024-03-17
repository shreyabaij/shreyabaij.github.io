let bulbState = "off";
function switchon() {
  let img = document.getElementById("myImage");
  if (bulbState === "off") {
    img.src = "turned-on.png";
    bulbState = "on";
  } else {
    img.src = "turned-off.png";
    bulbState = "off";
  }
}
