function solution(genres, plays) {
  let answer = [];
  const genresMap = new Map();
  let genresArr = [];

  genres.map((item) => genresMap.set(item, 0));
  for (let index = 0; index < genres.length; index++)
    genresMap.set(genres[index], genresMap.get(genres[index]) + plays[index]);

  for (const [key, value] of genresMap) {
    genresArr.push([key, value]);
  }

  genresArr.sort((a, b) => b[1] - a[1]);
  genresArr.map((item) => {
    let findedArr = [];

    genres.map((el, index) => {
      if (item[0] === el) findedArr.push([index, plays[index]]);
    });

    findedArr.sort((a, b) => b[1] - a[1]);

    if (findedArr.length < 2) answer.push(findedArr[0][0]);
    else {
      answer.push(findedArr[0][0]);
      answer.push(findedArr[1][0]);
    }
  });

  return answer;
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);

solution(["classic", "pop", "classic", "classic"], [800, 600, 150, 800]);
