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
