//priority queue is a data structure similar to a binary heap,
// the only difference is that every node has a {value,priority}
// lowest priority value means higher in the heap

module.exports.Priority = class Priority {
  constructor(priority, value) {
    this.priority = priority;
    this.value = value;
  }
};

module.exports.PriorityQueue = class PriorityQueue {
  constructor() {
    /**
     * @type {[Priority]}
     */
    this.priors = [];
  }
  /**
   *
   * @param {Priority} priority
   */
  enqueue(priority) {
    const bubbleUp = (index) => {
      const parent_index = Math.floor((index - 1) / 2);
      if (parent_index < 0) return;

      const parent = this.priors[parent_index];
      const child = this.priors[index];
      const parent_priority = parent.priority;
      const child_priority = child.priority;
      if (parent_priority <= child_priority) return;
      //scambio il parent con il figlio e ripeto
      [this.priors[index], this.priors[parent_index]] = [
        this.priors[parent_index],
        this.priors[index],
      ];
      return bubbleUp(parent_index);
    };

    if (!priority) return;
    this.priors.push(priority);
    const priorityIndex = this.priors.length - 1; //[{},{}...,{priority just added}] - index in array
    bubbleUp(priorityIndex);

    return this;
  }

  dequeue() {
    const swap = (i1, i2) => {

      [this.priors[i1], this.priors[i2]]=[this.priors[i2], this.priors[i1]];
    };

    const sinkDown = (index) => {
      const left_child_index = 2 * index + 1;
      const right_child_index = 2 * index + 2;
      const leftChild = this.priors[left_child_index]; //priorities is the array of priorities
      const rightChild = this.priors[right_child_index];
      if (!leftChild) return; // if there is no left child there won't be any right child
      //now i'm sure there is a left child.
      let index_for_swap = null;
      const leftChild_priority = leftChild.priority;
      if (leftChild_priority < this.priors[index].priority) {
        index_for_swap = left_child_index;
      }
      //ora vedo se c'è un figlio destro. se c'è un figlio  destro
      if (
        rightChild &&
        rightChild.priority < leftChild.priority &&
        rightChild.priority < this.priors[index].priority
      ) {
        index_for_swap = right_child_index;
      }

      if (!index_for_swap) return;
      swap(index_for_swap, index);

      return sinkDown(index_for_swap);
    };

    if (this.priors.length === 0) return null;
    if (this.priors.length === 1) return this.priors.pop();

    const last_element_index = this.priors.length - 1;
    console.log(this.priors);
     
    
    swap(last_element_index, 0);
   
    const priority = this.priors.pop(); // questo è il valore da restituire
    console.log({priority})
    sinkDown(0);
    return priority;
  }

  /**
   * @description priorities is an array of only the priorities number[];
   */
  get priorities() {
    return this.priors.map((priority) => priority.priority);
  }
};

function dataListener() {
  process.stdin.setEncoding("utf-8");
  process.stdin.on("data", (data) => {
    try {
      let priority = data.match(/^\d*\s/);
      let indexOfSpace = data.indexOf(" ");
      if (!indexOfSpace) throw new Error("scegli un valore per la priorità");
      let value = data.slice(indexOfSpace).trim();

      console.log(value.trim());
      if (!priority) {
        throw new Error(" no priority!");
      }
      if (!value) {
        throw new Error("scegli una tipologia di ");
      }

      priority = priority[0].trim();
    } catch (error) {
      console.log(error.message);
    }
  });
}

const queue = new module.exports.PriorityQueue();
queue.enqueue(new module.exports.Priority(1,"incidente"));
queue.enqueue(new module.exports.Priority(2,"contusione"));
queue.enqueue(new module.exports.Priority(5,"febbre debole"));
queue.enqueue(new module.exports.Priority(0,"incidente quasi mortale"));
queue.enqueue(new module.exports.Priority(1,"incidente"));
queue.enqueue(new module.exports.Priority(7,"incidente"));
queue.enqueue(new module.exports.Priority(2,"ferita da sparo"));

queue.dequeue();

// dataListener();
