import json
from pprint import pprint

with open('players.json') as data_file:
    players = json.load(data_file)

dates = [
    '10-01-2015',
    '10-02-2015',
    '10-03-2015',
    '10-04-2015'
]

comboSalaries = []

for day in dates:
    with open('salaries/' + day + '.json') as data_file:
        salaries = json.load(data_file)
        for item in salaries:
            item[unicode('date')] = unicode(day)
            item[unicode('name')] = item['name'][1:]
            comboSalaries.append(item)

# pprint(comboSalaries)

for player in players:
    pname = player['name']
    date = player['date']

    for item in comboSalaries:
        if item['date'] == date and item['name'] == pname:
            player['salary'] = item['salary']

pprint(players)
