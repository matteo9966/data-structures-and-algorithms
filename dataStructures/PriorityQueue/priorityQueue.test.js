const {PriorityQueue,Priority} = require('./priorityQueue');
describe('priority queue tests',()=>{
  
    test('enqueue a value in an empty priority queue',()=>{
        const queue = new PriorityQueue();
        queue.enqueue(new Priority(1,"incidente"));
        expect(queue.priors).toHaveLength(1);
    })

    test('enqueue a value in a queue with 3 priorities',()=>{
        const queue = new PriorityQueue();
        queue.enqueue(new Priority(1,"incidente"));
        queue.enqueue(new Priority(2,"contusione"));
        queue.enqueue(new Priority(5,"febbre debole"));
        queue.enqueue(new Priority(0,"incidente quasi mortale"));
        queue.enqueue(new Priority(1,"incidente"));
        queue.enqueue(new Priority(7,"incidente"));
        queue.enqueue(new Priority(2,"ferita da sparo"));
        
        expect(queue.priors).toHaveLength(7);
        expect(queue.priorities).toEqual([0,1,2,2,1,7,5]);
    })
   
    test('dequeue from an empty queue returns null',()=>{
        const queue = new PriorityQueue();
        expect(queue.dequeue()).toBeNull();
    })
    test('dequeue from an empty queue returns null',()=>{
        const queue = new PriorityQueue();
        queue.enqueue(new Priority(1,"incidente"));
        queue.enqueue(new Priority(2,"contusione"));
        queue.enqueue(new Priority(5,"febbre debole"));
        queue.enqueue(new Priority(0,"incidente quasi mortale"));
        queue.enqueue(new Priority(1,"incidente"));
        queue.enqueue(new Priority(7,"incidente"));
        queue.enqueue(new Priority(2,"ferita da sparo"));

        expect(queue.dequeue()).toEqual({priority:0,value:"incidente quasi mortale"});
        expect(queue.priorities).toEqual([1,1,2,2,5,7]);
        
    })

})