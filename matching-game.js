let numberOfFaces = 5;
const theLeftSide = document.getElementById("leftSide");

let theRightSide = document.getElementById("rightSide");

function generateFaces() {
  for (let i = 0; i < numberOfFaces; i++) {
    const face = document.createElement("img");
    face.src = "images/smile.png";

    let randomTop = Math.floor(Math.random() * 400) + 1;
    face.style.top = randomTop + "px";

    let randomLeft = Math.floor(Math.random() * 400) + 1;
    face.style.left = randomLeft + "px";

    theLeftSide.appendChild(face);
  }

  const leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSideImages);

  theLeftSide.lastChild.addEventListener("click", nextLevel);
  document.body.addEventListener("click", gameOver);
}

function nextLevel(e) {
  e.stopPropagation();
  numberOfFaces += 5;
  while (theLeftSide.firstChild) {
    theLeftSide.removeChild(theLeftSide.firstChild);
  }
  while (theRightSide.firstChild) {
    theRightSide.removeChild(theRightSide.firstChild);
  }
  generateFaces();
}

function gameOver() {
  alert("Game Over!");

  document.body.removeEventListener("click", gameOver);
  theLeftSide.lastChild.removeEventListener("click", nextLevel);
}