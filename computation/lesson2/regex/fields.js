function fields(str) {
   return str.split(/[ \t,]+/);
}

res = fields("Pete,201,Student")
console.log(res);
// -> ['Pete', '201', 'Student']

res = fields("Pete \t 201    ,  TA")
console.log(res);
// -> ['Pete', '201', 'TA']

res = fields("Pete \t 201")
console.log(res);
// -> ['Pete', '201']

res = fields("Pete \n 201")
console.log(res);
// -> ['Pete', '\n', '201']
