const BinaryHeap = require('./BinaryHeap');

describe('test binary heap methods',()=>{
  test('insert value in empty binary heap',()=>{
     
    const bh = new BinaryHeap();
    bh.insert(5);
    expect(bh.values).toEqual([5]);

  })
  test('insert value in binary heap with only root',()=>{
     
    const bh = new BinaryHeap();
    bh.insert(5);
    bh.insert(3);
    expect(bh.values).toEqual([5,3]);
    

  })
  test('insert largest value in binary heap',()=>{
     
    const bh = new BinaryHeap();
    bh.insert(5);
    bh.insert(3);
    bh.insert(10);
    expect(bh.values).toEqual([10,3,5]);
    

  })
  test('insert largest value in binary heap',()=>{
     
    const bh = new BinaryHeap();
    bh.insert(5);
    bh.insert(3);
    bh.insert(10);
    bh.insert(100);
    expect(bh.values).toEqual([100,10,5,3]);
    

  })

  test('removing-largest value from heap with no elements returns null',()=>{     
    const bh = new BinaryHeap();

    expect(bh.extractMax()).toBeNull();

  })
  test('removing-largest value from heap with one element returns the element',()=>{
    const bh = new BinaryHeap();
    bh.insert(100)
    expect(bh.extractMax()).toBe(100);
  })
  test('removing-largest value from heap with multiple nodes returns the node',()=>{
    const bh = new BinaryHeap();
    bh.insert(100)
    bh.insert(90)
    bh.insert(80)
    bh.insert(70)
    bh.insert(60)
    bh.insert(50)
    bh.insert(40)
    const max = bh.extractMax();
    expect(max).toBe(100);
    expect(bh.values).toEqual([90,70,80,40,60,50])
  })
  



})