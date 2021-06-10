function searchWord(key, text) {
  key = key || '';
  const keyOwnWord = '\\b' + key + '\\b';
  const re = new RegExp(keyOwnWord, 'gi');

  text = text || '';
  const highlightedText = text.replace((re), (match, cap1) => {
    return '**' + match.toUpperCase() + '**';  
  });
  return highlightedText ? highlightedText : '';
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

res = searchWord('sed', text);      // 3
console.log(res);
res = searchWord('qui', text);      // 4
console.log(res);
//res = searchWord('', text);      // 866
//console.log(res);
res = searchWord('sed', '');      // 0
console.log(res);
res = searchWord('sed');      // 0
console.log(res);
res = searchWord('');      // 0
console.log(res);