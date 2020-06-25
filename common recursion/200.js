
/**
 * map{`${x}${y}`} 这样计数是错误的，超过10位会有bug
 */

var numIslands = function (grid) {
  let ret = 0;
  let directionArr = [[1, 0], [0, 1], [-1, 0], [0, -1]];

  //特判
  if (!grid.length) return 0;

  let m = grid.length;
  let n = grid[0].length;

  // 在边界内
  function inArea(x, y) {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  function deep(startX, startY) {
    // 直接沉掉 不用另开map
    grid[startX][startY] = 0;

    // 从4个方向去找
    for (let i = 0; i < 4; i++) {
      let newX = startX + directionArr[i][0];
      let newY = startY + directionArr[i][1];

      // 在范围内 并且不是已经被访问过的岛屿
      if (inArea(newX, newY) && grid[newX][newY] === '1') {
        deep(newX, newY);
      }
    }

  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        ret += 1;
        // 看这个岛屿还能扩展到哪些
        deep(i, j);
      }
    }
  }

  return ret;
};

numIslands([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]])