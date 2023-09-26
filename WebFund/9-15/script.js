var theDojo = [
  [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
  [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
  [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
  [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
  [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
  [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
  [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
  [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
  [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
  [9, 2, 2, 2, 0, 7, 0, 1, 1, 0],
];
var dojoDiv = document.querySelector('#the-dojo');

// Creates the rows of buttons for this game
function render(theDojo) {
  var result = '';
  for (var i = 0; i < theDojo.length; i++) {
    for (var j = 0; j < theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
  }
  return result;
}

// TODO - Make this function tell us how many ninjas are hiding
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
  console.log({ i, j });
  var count = 0;
  for (var x = i-1;  x <= i+1; x++) {
    for (var y =j-1; y <= j+1; y++) {
      if(x == i && y == j){
        continue
      }
      if (theDojo[x] !== undefined && theDojo[x][y] !== undefined) {
        count+=theDojo[x][y];
      }
    }
  }
  alert(`${count} ninjas are hiding under the adjacent squares`);
}

//My attempt :(
  
/*function howMany(i, j, element) {
  console.log({ i, j });
  var sum = 0;
  if(i-1 < 0) { //checks top
    if(j-1 < 0){ //top left corner
      sum += theDojo[i][j+1] + theDojo[i+1][j] + theDojo[i+1][j+1];
    }
    else if(j + 1 > theDojo.length-1){ //top right corner
      sum += theDojo[i][j-1] + theDojo[i+1][j-1] + theDojo[i+1][j];
    }
    else {
      sum += theDojo[i][j-1] + theDojo[i][j+1]; //middle column
      sum += theDojo[i+1][j-1] + theDojo[i+1][j] + theDojo[i+1][j+1]; //col to the right
    }
  }
  else if(i + 1 > theDojo.length-1) { //bottom
    if(j-1 < 0 ) { //bottom left corner
      sum += theDojo[i-1][j] + theDojo[i-1][j+1] + theDojo[i-1][j+1];
    }
    else if(j + 1 > theDojo.length-1) { //bottom right corner
      sum += theDojo[i-1][j-1] + theDojo[i-1][j] + theDojo[i][j-1];
    }
    else {
      sum += theDojo[i-1][j-1] + theDojo[i-1][j] + theDojo[i-1][j+1]; //col to the left
      sum += theDojo[i][j-1] + theDojo[i][j+1]; //middle column
    }
  }
  else if(j-1 < 0) { //left edge
    sum += theDojo[i-1][j] + theDojo[i-1][j+1];
    sum += theDojo[i][j+1] + theDojo[i+1][j] + theDojo[i+1][j+1];
  }
  else if(j + 1 > theDojo.length-1) { //right edge
    sum += theDojo[i-1][j-1] + theDojo[i-1][j] + theDojo[i][j-1];
    sum += theDojo[i+1][j-1] + theDojo[i+1][j];
  }
  else { //in the middle somewhere
    sum += theDojo[i-1][j-1] + theDojo[i-1][j] + theDojo[i-1][j+1]; //col to the left
    sum += theDojo[i][j-1] + theDojo[i-1][j] + theDojo[i-1][j+1]; //middle column
    sum += theDojo[i+1][j-1] + theDojo[i+1][j] + theDojo[i+1][j+1]; //col to the right
  }

  alert('Ninjas adjacent ' + sum);
} */

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = 'color:cyan;font-size:1.5rem;font-weight:bold;';
console.log('%c' + 'IF YOU ARE A DOJO STUDENT...', style);
console.log('%c' + 'GOOD LUCK THIS IS A CHALLENGE!', style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div>
dojoDiv.innerHTML = render(theDojo);
