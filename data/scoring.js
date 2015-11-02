var playersData = require('./players.json');

var players = [];

playersData.forEach((player) => {
  var score = 0;
  score += player.kills * 3;
  score += player.assists * 2;
  score -= player.deaths;
  score += player.creeps * .02;
  if (player.kills >= 10 || player.assists >= 10) {
    score += 2;
  }
  player.score = score;
  players.push(player);
});

console.log(players);
