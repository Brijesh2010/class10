var marks = [10,20,50,60,40]

var avg 

function setup() 
{
  createCanvas(400,400);

  var sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4]

  avg = sum / marks.length

  console.log(marks)
  console.log(sum)
  console.log(avg)
}

function draw() 
{
background(51);

}

