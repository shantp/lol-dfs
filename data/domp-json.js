'use strict';
const fs = require('fs');
const json = require('../game1.json');

let newjson = {};
let container = {};

if (!('contains' in String.prototype)) {
  String.prototype.contains = function(str, startIndex) {
    return ''.indexOf.call(this, str, startIndex) !== -1;
  };
}

json.forEach((node) => {
  let key = Object.keys(node)[0];
  container[key] = node[key].text;
});

function getPlayersFromTeam(teamid) {
  return [1,2,3,4,5].map((pid) => {
    return {
      name: container['Team'+teamid+'Player'+pid+'Name'],
      kills: container['Team'+teamid+'Player'+pid+'Kills'],
      deaths: container['Team'+teamid+'Player'+pid+'Deaths'],
      assists: container['Team'+teamid+'Player'+pid+'Assists'],
      creeps: container['Team'+teamid+'Player'+pid+'Creeps']
    }
  });
}

let teams = [1,2].map((teamid) => {
  return {
    id: container['Team'+teamid+'Player1Name'].split(' ')[0],
    players: getPlayersFromTeam(teamid),
    towers: container['Team'+teamid+'Towers'],
    dragons: container['Team'+teamid+'Dragons'],
    barons: container['Team'+teamid+'Barons'],
  }
});

fs.writeFile('match1.json', JSON.stringify(teams));

console.log(JSON.stringify(teams));
