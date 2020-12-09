// A big portion of the pathfinding algorithm code came from https://medium.com/@adriennetjohnson/a-walkthrough-of-dijkstras-algorithm-in-javascript-e94b74192026
// Author is Adrienne Johnson
class Graph {
    constructor() {
      this.nodes = [];
      this.adjacencyList = {};
      this.directionList = {};
    }

    addNode(node) {
        this.nodes.push(node); 
        this.adjacencyList[node] = [];
        this.directionList[node] = [];
    }

    addEdge(node1, node2, weight, direction) {
        this.adjacencyList[node1].push({node:node2, weight: weight});
        this.adjacencyList[node2].push({node:node1, weight: weight});

        this.directionList[node1].push({node:node2, direction: direction});
        if (direction == "East"){ direction = "West";}
        else if (direction == "North"){ direction = "South";}
        else if (direction == "West"){ direction = "East";}
        else if (direction == "South"){ direction = "North";}
        this.directionList[node2].push({node:node1, direction:direction});
    }

    stp(start, end){

        let times = {};
        let backtrace = {};
        let pq = new PriorityQueue();
    
        times[start] = 0;
  
  this.nodes.forEach(node => {
    if (node !== start) {
      times[node] = Infinity
    }
  });

      pq.enqueue([start, 0]);

      while (!pq.isEmpty()) {
        let shortestStep = pq.dequeue();
        let currentNode = shortestStep[0];
        this.adjacencyList[currentNode].forEach(neighbor => {
          let time = times[currentNode] + neighbor.weight;

          if (time < times[neighbor.node]) {
            times[neighbor.node] = time ;
            backtrace[neighbor.node] = currentNode;
            pq.enqueue([neighbor.node, time]);
          }
        });
      }

      let path = [end];
  let lastStep = end;
  while(lastStep !== start) {
    path.unshift(backtrace[lastStep])
    lastStep = backtrace[lastStep]
  }

  let directions = ("Starting from" + path[0] + " take ");
  var i;
  for (i = 1; i<path.length;i++){
    directions += (times[path[i]] - times[path[i- 1]]) + " steps towards" + (path[i]);


    for (let j = 0; j <this.directionList[path[i-1]].length; j++) {
      if(this.directionList[path[i-1]][j].node == path[i]){
        directions += "(" + this.directionList[path[i-1]][j].direction + ")";
      }
    }
  if (i+1 < path.length){
    directions += " then ";
  }
 } 

   return directions;

}
}
class PriorityQueue {
    constructor() {
      this.collection = [];
    }
    enqueue(element){
        if (this.isEmpty()){ 
          this.collection.push(element);
        } else {
          let added = false;
          for (let i = 1; i <= this.collection.length; i++){
            if (element[1] < this.collection[i-1][1]){ 
              this.collection.splice(i-1, 0, element);
              added = true;
              break;
            }
          }
          if (!added){
              this.collection.push(element);
          }
        }
      };
      dequeue() {
        let value = this.collection.shift();
        return value;
      };
      isEmpty() {
        return (this.collection.length === 0) 
      };
    }
function Wayfind(Start, End) {

const map = new Graph();
map.addNode(" Front Entrance");
map.addNode(" Service Desk");
map.addNode(" Study rooms");
map.addNode(" Mens Washroom");
map.addNode(" Curbside Pickup");
map.addNode(" Womens Washroom");
map.addEdge(" Front Entrance", " Study rooms", 20, "West");
map.addEdge(" Front Entrance", " Service Desk", 16, "East");
map.addEdge(" Front Entrance", " Womens Washroom", 14, "North");
map.addEdge(" Womens Washroom", " Mens Washroom", 10, "East");
map.addEdge(" Womens Washroom", " Curbside Pickup", 5, "East");
map.addEdge(" Mens Washroom", " Curbside Pickup", 5, "West");
map.addEdge(" Mens Washroom", " Service Desk", 5, "South");

let path = map.stp(Start, End);

return path;

}

function update(){

  var urlParams;
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);

  path = Wayfind(urlParams["start"], urlParams["end"]);

  document.getElementById("dir").innerHTML = path;
}

function drawLine(x, y, stopX, stopY){

  
  var can = document.getElementById('canvas');
  var ctx = can.getContext('2d');

  ctx.clearRect (0, 0, can.width, can.height);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(stopX, stopY);
  ctx.closePath();
  ctx.stroke();

  //Give each node their own (x,y) coords.
}





