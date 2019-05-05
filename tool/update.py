import json
import os.path

import firebase_admin
from firebase_admin import credentials, firestore


def main():
    key_json = os.path.expanduser("~/.config/serviceAccountKey.json")
    cred = credentials.Certificate(key_json)
    firebase_admin.initialize_app(cred)

    with open('data.json', 'r') as f:
        items = json.load(f)

    db = firestore.client()
    coll = db.collection('places')

    ids = []
    docs = coll.get()
    for doc in docs:
        ids.append(doc.id)

    for item in items:
        if item['id'] in ids:
            continue

        doc = coll.document(item['id'])
        doc.set({
            'name': item['name'],
            'position': firestore.GeoPoint(
                item['position']['lat'], item['position']['lng']
            )
        })
        print(item)


if __name__ == '__main__':
    main()
