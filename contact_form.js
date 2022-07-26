const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


function hoverImg(x) {
    document.getElementById("send_text").style.display="inline";
    document.getElementById("send_icon").style.display="none";
  }
  
  function normalImg(x) {
    document.getElementById("send_text").style.display="none";
    document.getElementById("send_icon").style.display="inline";
   
  }