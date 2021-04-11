class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (root === null) {
    return result;
  }
  let currentLevel = [root];
  let nextLevel: TreeNode[] = [];
  let levelVals: number[] = [];
  while (currentLevel.length > 0) {
    const node = currentLevel.shift() as TreeNode;
    if (node?.left) {
      nextLevel.push(node.left);
    }
    if (node?.right) {
      nextLevel.push(node.right);
    }
    levelVals.push(node.val);

    if (currentLevel.length === 0) {
      if (nextLevel.length > 0) {
        currentLevel = nextLevel;
        nextLevel = [];
      }

      result.push(levelVals);
      levelVals = [];
    }
  }

  return result;
}
