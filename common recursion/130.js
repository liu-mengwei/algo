var solve = function (grid) {
  let directionArr = [[1, 0], [0, 1], [-1, 0], [0, -1]];

  //特判
  if (!grid.length) return;

  let m = grid.length;
  let n = grid[0].length;

  let visited = new Array(m);
  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(n);
  }

  // 在边界内
  function inArea(x, y) {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  function deep(startX, startY) {
    // 从4个方向去找
    visited[startX][startY] = true;

    for (let i = 0; i < 4; i++) {
      let newX = startX + directionArr[i][0];
      let newY = startY + directionArr[i][1];

      if (inArea(newX, newY) && grid[newX][newY] === 'O' && !visited[newX][newY]) {
        deep(newX, newY);
      }
    }
  }

  // 从四周边界去找 找到与边界O相邻的
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if ((i === 0 
        || j === 0 
        || i === grid.length - 1 
        || j === grid[i].length - 1)
         && grid[i][j] === 'O' 
         && !visited[i][j]) {
        deep(i, j);
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!visited[i][j]) {
        grid[i][j] = 'X';
      }
    }
  }
};