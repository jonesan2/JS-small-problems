function substring(string, start, end) {
  let result = '';

  if (end === undefined) end = string.length;
  if (!Number.isInteger(start)) start = 0;
  if (start < 0 || Number.isNaN(start)) start = 0;
  if (end < 0 || Number.isNaN(end)) end = 0;

  if (start > string.length) start = string.length;
  if (end > string.length) end = string.length;

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  for (let i = start; i < end; i++) {
    result += string[i];
  }
  console.log(result);
  return result;
} 

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"
