import argparse
import json
import os.path
from typing import Optional

import firebase_admin
from firebase_admin import credentials, firestore


def run(limit: Optional[int], name: str):
    key_json = os.path.expanduser("~/.config/serviceAccountKey.json")
    cred = credentials.Certificate(key_json)
    firebase_admin.initialize_app(cred)

    db = firestore.client()
    coll = db.collection('places')

    items = []
    docs = coll
    if limit is not None:
        docs = coll.limit(limit)

    for doc in docs.get():
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
        if 'address' in data:
            item['address'] = data['address']
        items.append(item)

    with open(name, 'w') as f:
        json.dump(items, f, ensure_ascii=False, indent=2, sort_keys=True)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int)
    parser.add_argument("--name", default="input.json")
    args = parser.parse_args()
    run(args.limit, args.name)
