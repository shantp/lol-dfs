import json

with open('players.json') as data_file:
    players = json.load(data_file)

playerNames = []


#print(players)
for item in players:
    playerNames.append(item['name'].lower())

playerNames = list(set(playerNames))
for name in playerNames:
    print(name)
    for item in players:
        if item['name'].lower() == name:
            print('hi')
