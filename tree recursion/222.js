
var countNodes = function (root) {
  let count = 0;

  function countfn(root) {
    if (!root) return;

    count++;
    countfn(root.left);
    countfn(root.right);
  }

  countfn(root);

  return count;
};

