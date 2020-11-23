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
        if (direction == "Right"){ direction = "Left";}
        else if (direction == "Forward"){ direction = "Backwards";}
        else if (direction == "Left"){ direction = "Right";}
        else if (direction == "Backwards"){ direction = "Forward";}
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
map.addEdge(" Front Entrance", " Study rooms", 20, "Left");
map.addEdge(" Front Entrance", " Service Desk", 16, "Right");
map.addEdge(" Front Entrance", " Mens Washroom", 14, "Forward");
map.addEdge(" Mens Washroom", " Womens Washroom", 10, "Right");
map.addEdge(" Mens Washroom", " Curbside Pickup", 5, "Right");
map.addEdge(" Womens Washroom", " Curbside Pickup", 5, "Left");
map.addEdge(" Womens Washroom", " Service Desk", 5, "Backwards");

let path = map.stp(Start, End);

document.getElementById("directions").innerHTML = path;

  
}





/*TESTS

let path = map.stp(" Front Entrance"," Women's Washroom");
let path2 = map.stp(" Study rooms"," Women's Washroom");
let path3 = map.stp(" Service Desk"," Men's Washroom");
let path4 = map.stp(" Men's Washroom"," Service Desk");

console.log("Test 1:")
console.log(path);
console.log("Test 2:");
console.log(path2);
console.log("Test 3:");
console.log(path3);
console.log("Test 4:");
console.log(path4);*/




