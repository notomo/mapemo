
import json
import time
import uuid

import requests
import xmltodict


def main():
    with open('input.json', 'r') as f:
        items = json.load(f)

    new_items = []
    for i, item in enumerate(items):
        if 'name' not in item and 'address' not in item:
            new_items.append(item)
            print(f'`name` or `address` not found by index: {i}')
            continue

        position, err = get_position(item)
        if not len(err) == 0:
            new_items.append(item)
            print(err)
            continue

        new_item = {
            'name': item['name'],
            'position': position.to_dict(),
        }

        if 'address' in item:
            new_item['address'] = item['address']

        if 'id' in item:
            new_item['id'] = item['id']
        else:
            new_item['id'] = uuid.uuid4().hex
        new_items.append(new_item)
        print(new_item)

    with open('output.json', 'w') as f:
        json.dump(new_items, f, ensure_ascii=False, indent=2, sort_keys=True)


class Position:
    def __init__(self, _lat: float, _lng: float) -> None:
        self.lat = _lat
        self.lng = _lng

    def to_dict(self):
        return {
            'lat': self.lat,
            'lng': self.lng
        }


def get_position(item):
    if 'target' not in item and 'position' in item:
        pos = item['position']
        return Position(pos['lat'], pos['lng']), ''

    time.sleep(6)

    if 'address' in item:
        params = {'q': item['address']}
    else:
        params = {'q': item['name']}

    response = requests.get('https://www.geocoding.jp/api/', params=params)
    if not response.status_code == 200:
        return {}, f'"{item}" status: {response.status_code}'

    result = xmltodict.parse(response.text)['result']
    if 'coordinate' not in result:
        return {}, f'"{item}" coordinate not found'

    coordinate = result['coordinate']

    lat = float(coordinate['lat'])
    lng = float(coordinate['lng'])
    if lat <= 0 or lng <= 0:
        return {}, f'"{item}" coordinate is invalid'

    return Position(lat, lng), ''


if __name__ == '__main__':
    main()
