class Graph {
    constructor() {
      this.AdjList = new Map();
    }
    
    addVertex(vertex) {
      if (!this.AdjList.has(vertex)) {
        this.AdjList.set(vertex, []);
      } else {
        throw 'Already Exist!!!';
      }
    }
    
    addEdge(vertex, node) {
      if (this.AdjList.has(vertex)) {
        if (this.AdjList.has(node)){
          let arr = this.AdjList.get(vertex);
          if(!arr.includes(node)){
            arr.push(node);
          }
        }else {
          throw `Can't add non-existing vertex ->'${node}'`;
        }
      } else {
        throw `You should add '${vertex}' first`;
      }
    }
    
    print() {
      for (let [key, value] of this.AdjList) {
        console.log(key, value);
      }
    }
  }



//   function Graph2(){
//     this.adjList = new Map();
//   }

//   Graph2.prototype.addVertex = function(vertex){
//     if(!this.adjList.has())
    
//   }