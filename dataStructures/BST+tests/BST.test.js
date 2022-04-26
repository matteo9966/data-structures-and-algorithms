const { BST } = require("./BST");

test("passing no value should return null", () => {
  const bst = new BST();
  expect(bst.insert()).toBeUndefined();
});

test("passing a number should return a bst with that as root", () => {
  const bst = new BST();
  bst.insert(5);
  expect(bst.root.value).toBe(5);
  expect(bst.root.left).toBeNull();
  expect(bst.root.right).toBeNull();
});

test("passing multiple values returns a bst", () => {
  const bst = new BST();
  bst.insert(50);
  bst.insert(20);
  bst.insert(60);
  bst.insert(10);
  bst.insert(100);

  const copyBST = {
    root: {
      value: 50,
      left: {
        value: 20,
        left: { value: 10, left: null, right: null },
        right: null,
      },
      right: {
        value: 60,
        left: null,
        right: { value: 100, left: null, right: null },
      },
    },
  };

  expect(bst).toEqual(copyBST);
});

test('removing from tree without elements returns undefined',()=>{
  const bst = new BST();
  const tree = bst.remove(10);
  expect(tree).toBeNull();
})

test('removing a leaf that has no children',()=>{
  const expectedBST = {
    root: {
      value: 50,
      left: {
        value: 20,
        left: null,
        right: null,
      },
      right: {
        value: 60,
        left: { value: 55, left: null, right: null },
        right: { value: 100, left: null, right: null },
      },
    },
  };
  const bst = new BST();
  bst.insert(50);
  bst.insert(20);
  bst.insert(60);
  bst.insert(55);
  bst.insert(10);
  bst.insert(100);
  bst.remove(10);
  expect(bst).toEqual(expectedBST);

})
test('removing a leaf that has 1 child',()=>{
  const expectedBST = {
    root: {
      value: 50,
      left: {
        value: 20,
        left: { value: 10, left: null, right: null },
        right: null,
      },
      right: { value: 100, left: null, right: null },
    
    },
  };
  const bst = new BST();
  bst.insert(50);
  bst.insert(20);
  bst.insert(60);
  bst.insert(10);
  bst.insert(100);
  bst.remove(60);
  expect(bst).toEqual(expectedBST);

})
test('BFS with 5 nodes',()=>{

  const expectedList = [50,20,60,10,100];
  const bst = new BST();
  bst.insert(50);
  bst.insert(20);
  bst.insert(60);
  bst.insert(10);
  bst.insert(100);
  
  expect(bst.BFS()).toEqual(expectedList);

})

