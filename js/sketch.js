let selectedMotif = 'DIAMOND_MOTIF';
let selectedGrid = 'REGULAR';

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id('ikatCanvas');
  colorMode(RGB, 255);
  noLoop();
  background(255);
}

function redrawPattern() {
  // Get values from HTML dropdowns
  selectedMotif = document.getElementById('motifSelect').value;
  selectedGrid = document.getElementById('gridSelect').value;

  // Clear background and redraw
  background(255);
  stroke(randomColor());
  switch (selectedGrid) {
    case 'REGULAR':
      regularGrid(selectedMotif);
      break;
    case 'ANGLED':
      angledGrid(selectedMotif);
      break;
    case 'CIRCULAR':
      circularGrid(width / 2, height / 2, 10, 200, 80, selectedMotif);
      break;
  }
}

// Your existing motif/grid functions here...
function regularGrid(motifType) {
  for (let x = 0; x < width; x += 50) {
    for (let y = 0; y < height; y += 50) {
      drawMotif(x, y, motifType);
    }
  }
}

function angledGrid(motifType) {
  for (let x = 10; x <= width; x += 85) {
    for (let y = 10; y <= height; y += 90) {
      if ((x % 10) === 0) {
        drawMotif(x, y, motifType);
      } else {
        drawMotif(x, y + 45, motifType);
      }
    }
  }
}

function circularGrid(rotX, rotY, rotAngle, rotNum, motifGap, motifType) {
  push();
  translate(rotX, rotY);
  for (let i = 0; i < rotNum; i++) {
    rotate(PI / rotAngle);
    for (let y = 0; y < height; y += motifGap) {
      drawMotif(0, y, motifType);
    }
  }
  pop();
}

// Color helper
function randomColor() {
  return color(random(255), random(255), random(255));
}

// Motif drawing logic
function drawMotif(x, y, motifType) {
  switch (motifType) {
    case 'DIAMOND_MOTIF':
      diamondM(x, y);
      break;
    case 'SQUARE_MOTIF':
      squareM(x, y);
      break;
    case 'TRIANGLE_MOTIF':
      triangleM(x, y);
      break;
    case 'S_TRIANGLE_MOTIF':
      sTriangleM(x, y);
      break;
    default:
      diamondM(x, y);
  }
}

// Your motif functions (triangleM, diamondM, etc.) should be added below