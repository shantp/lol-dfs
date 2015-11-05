import json
from pprint import pprint

with open('players_sheet.json') as data_file:
    players = json.load(data_file)

dates = [
    '10-01-2015',
    '10-02-2015',
    '10-03-2015',
    '10-04-2015',
    '10-08-2015_12',
    '10-08-2015_34',
    '10-08-2015_56',
    '10-09-2015_12',
    '10-09-2015_34',
    '10-09-2015_56',
    '10-10-2015_12',
    '10-10-2015_34',
    '10-10-2015_56',
    '10-11-2015_12',
    '10-11-2015_34',
    '10-11-2015_56',
    '10-15-2015',
    '10-24-2015'
]

comboSalaries = []

for day in dates:
    with open('salaries/' + day + '.json') as data_file:
        salaries = json.load(data_file)
        for item in salaries:
            item[unicode('date')] = unicode(day.split('_')[0])
            item[unicode('name')] = item['name'][1:].lower()
            if (len(day.split('_')) > 1):
                item[unicode('games')] = unicode(day.split('_')[1])
            comboSalaries.append(item)

for player in players:
    pname = player['name'].lower()
    date = player['date']
    if 'game' in player.keys():
        pgame = player['game'].split(' ')[1]
        player[unicode('game')] = int(pgame)

    for item in comboSalaries:
        if date == '10-16-2015' or date == '10-17-2015' or date == '10-18-2015':
            date = '10-15-2015'
        if date == '10-25-2015':
            date = '10-24-2015'
        if item['date'] == date and item['name'] == pname:
            if 'games' in item.keys():
                if unicode(player['game']) in item['games']:
                    player[unicode('salary')] = unicode(item['salary'])
                    player[unicode('position')] = unicode(item['position'])
            else:
                player[unicode('salary')] = unicode(item['salary'])
                player[unicode('position')] = unicode(item['position'])

with open('players.json', 'w') as outfile:
    json.dump(players, outfile)
