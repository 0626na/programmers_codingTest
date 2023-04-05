function solution(board) {
  let answer = 0;
  let maxX = board[0].length - 1;
  let maxy = board.length - 1;
  let x = 0;
  let y = 0;

  board.some((item, index) => {
    const locX = [...item].findIndex((loc) => loc === "R");
    if (locX !== -1) {
      x = locX;
      y = index;
      return true;
    }
    return false;
  });
  return answer;
}
