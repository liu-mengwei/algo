
var solveNQueens = function (n) {
  function setVisitedArr() {
    // 生成visited数组
    let visited = new Array(n);
    for (let i = 0; i < visited.length; i++) {
      visited[i] = new Array(n).fill(false);
    }
    return visited;
  }

  function setGrid() {
    // 生成棋盘
    let grid = new Array(n);
    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(n).fill('.');
    }
    return grid;
  }

  function deep(startX, startY, index, visited) {
    if (visited[startX][startY]) return;
    grid[startX][startY] = 'Q';
    index--;

    if (index === 0) { // 找到解
      ret.push(formatRet(grid));
      grid[startX][startY] = '.';
      return;
    }

    // 将当前点设成皇后
    let temp = copyArr(visited);
    let visitedAfter = updateVisited(startX, startY, temp);

    // 再可访问点中寻找下一个点
    for (let i = startX; i < grid.length; i++) {
      let startJ = i === startX ? startY + 1 : 0;
      for (let j = startJ; j < grid[i].length; j++) {
        deep(i, j, index, visitedAfter);
      }
    }

    // visted要回到之前的状态
    grid[startX][startY] = '.';
  }

  // 棋盘范围
  function inArea(x, y) {
    return x >= 0 && y >= 0 && x < n && y < n;
  }

  function updateVisited(startX, startY, visited) {
    // 从 6个方向扩散
    visited[startX][startY] = true;

    for (let i = 0; i < movesArr.length; i++) {
      let dir = movesArr[i];
      for (let j = 1; j <= 8; j++) {
        let newX = startX + dir[0] * j;
        let newY = startY + dir[1] * j;

        if (!inArea(newX, newY)) {
          break;
        }

        visited[newX][newY] = true;
      }
    }
    return visited;
  }

  function copyArr(b) {
    let copy = setVisitedArr();
    for (let i = 0; i < b.length; i++) {
      for (let j = 0; j < b[i].length; j++) {
        copy[i][j] = b[i][j];
      }
    }
    return copy;
  }

  function formatRet(grid) {
    let ret = [];
    grid.forEach(item => {
      ret.push(item.join(''));
    })
    return ret;
  }

  const movesArr = [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]];
  let ret = [];
  let visited = setVisitedArr();
  let grid = setGrid();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // 重置visited数组
      deep(i, j, n, visited);
    }
  }

  return ret;
};

solveNQueens(4);