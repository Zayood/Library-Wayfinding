class Graph {
    constructor() {
      this.nodes = [];
      this.adjacencyList = {};
    }

    addNode(node) {
        this.nodes.push(node); 
        this.adjacencyList[node] = [];
    }

    addEdge(node1, node2, weight) {
        this.adjacencyList[node1].push({node:node2, weight: weight});
        this.adjacencyList[node2].push({node:node1, weight: weight});
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
            times[neighbor.node] = time;
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
  return `Path is ${path} and time is ${times[end]}`
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

const map = new Graph();
map.addNode("Front Entrance");
map.addNode("Service Desk");
map.addNode("Study rooms");
map.addNode("Men's Washroom");
map.addNode("Curbside Pickup");
map.addNode("Women's Washroom");
map.addEdge("Front Entrance", "Study rooms", 20);
map.addEdge("Front Entrance", "Service Desk", 16);
map.addEdge("Front Entrance", "Men's Washroom", 14);
map.addEdge("Men's Washroom", "Women's Washroom", 10);
map.addEdge("Men's Washroom", "Curbside Pickup", 5);
map.addEdge("Women's Washroom", "Curbside Pickup", 5);
map.addEdge("Women's Washroom", "Service Desk", 5);
