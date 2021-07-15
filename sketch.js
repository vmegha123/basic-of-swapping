var a=prompt("Enter 1st variable")
  var b=prompt("Enter 2nd variable")
function setup() {
  createCanvas(400, 400);
  var b2=createButton("click here to swap")
  b2.mousePressed(swap)
}

function draw() {
  background(220);

}
function swap(){
  [a,b]=[b,a]
  console.log("value of 1st variable after swapping"+a)
  console.log("value of 2st variable after swapping"+b)
}