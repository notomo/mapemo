import json
import os.path

import firebase_admin
from firebase_admin import credentials, firestore


def main():
    key_json = os.path.expanduser("~/.config/serviceAccountKey.json")
    cred = credentials.Certificate(key_json)
    firebase_admin.initialize_app(cred)

    db = firestore.client()
    coll = db.collection('places')

    items = []
    limit = 25
    for doc in coll.limit(limit).get():
        data = doc.to_dict()
        position = data['position']
        item = {
            'id': doc.id,
            'name': data['name'],
            'position': {
                'lat': position.latitude,
                'lng': position.longitude,
            }
        }
        items.append(item)

    with open('first.json', 'w') as f:
        json.dump(items, f, ensure_ascii=False, indent=2, sort_keys=True)


if __name__ == '__main__':
    main()
