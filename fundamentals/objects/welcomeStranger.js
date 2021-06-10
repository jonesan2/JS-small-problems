let welcomeStranger = function(names, jobs) {
  nameOutput = names.join(' ');
  jobOutput = jobs.title + ' ' + jobs.occupation;
  console.log(`Hello, ${nameOutput}! Nice to have a ${jobOutput} around.`);
}

welcomeStranger(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

