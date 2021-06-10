let post1 = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut <h1>What what</h1> perspiciatis <ul><li>Number 1</li><li>Number 2</li></ul>unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  tags: [{tag: 'bruh'}, {tag: 'rpnd'}, {tag: 'yeet'}],
};

let post2 = {
  title: 'ipsum dolor sit amet',
  published: 'May 1, 2015',
  body: 'Sed ut <h1>What what</h1> perspiciatis <ul><li>Number 3</li><li>Number 4</li></ul>unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
};

let posts = [post1, post2];
let postTemplate = Handlebars.compile($('#post').html());
Handlebars.registerPartial('tagTemplate', $('#tagTemplate').html());

$(document.body).append(postTemplate(posts));
