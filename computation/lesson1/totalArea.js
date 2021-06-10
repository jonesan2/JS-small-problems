function totalArea(rects) {
  return rects.map(rect => rect[0] * rect[1]).reduce((acc, elem) => acc + elem);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

ans = totalArea(rectangles);    // 141
console.log(ans);
