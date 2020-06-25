var exist = function (board, word) {
  let directionArr = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 表示上下左右四个方向

  let m = board.length;
  let n = board[0].length;

  let visited = new Array(m);
  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(n);
  }

  function inArea(x, y) {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  function search(startX, startY, index) {
    // 移动到了末尾
    if (index === word.length - 1) {
      return board[startX][startY] === word[index];
    }

    if (board[startX][startY] !== word[index]) {
      return false;
    }

    visited[startX][startY] = true;

    // 试着去在上下左右四个方向去移动
    for (let i = 0; i < 4; i++) {
      let newX = startX + directionArr[i][0];
      let newY = startY + directionArr[i][1];

      // 符合范围 并且没有访问过
      if (inArea(newX, newY) && !visited[newX][newY] && search(newX, newY, index + 1)) {
        return true;
      }
    }

    // 当前值出去
    visited[startX][startY] = false;
    return false;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (search(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED")