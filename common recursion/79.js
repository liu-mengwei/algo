var exist = function (board, word) {
  let ret = false

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      let letter = board[y][x];
      if (letter === word[0]) {
        let map = {}
        deep(x, y, word.substring(1), map);
      }
    }
  }

  // 从上下左右四个方向一次寻找，而且不能回去
  function deep(x, y, word, map) {
    if (word === '') {
      ret = true;
      return;
    }

    if (x + 1 < board[y].length && board[x + 1][y] === word[0] && !map[`${x + 1}${y}`]) {
      map[`${x + 1}${y}`] = true;
      deep(x + 1, y, word.substring(1));
      map[`${x + 1}${y}`] = false;

    } else if (x - 1 >= 0 && board[x - 1][y] === word[0] && !map[`${x - 1}${y}`]) {
      map[`${x - 1}${y}`] = true;
      deep(x - 1, y, word.substring(1));
      map[`${x + 1}${y}`] = false;

    } else if (y + 1 < board.length && board[x][y + 1] === word[0] && !map[`${x}${y + 1}`]) {
      map[`${x}${y + 1}`] = true;
      deep(x, y + 1, word.substring(1));
      map[`${x + 1}${y}`] = false;

    } else if (y - 1 >= 0 && board[x][y - 1] === word[0] && !map[`${x}${y - 1}`]) {
      map[`${x}${y - 1}`] = true;
      deep(x, y - 1, word.substring(1))
      map[`${x + 1}${y}`] = false;
    }
  }

  return ret;
};