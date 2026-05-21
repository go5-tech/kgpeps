import sys, json, csv, io, requests, re
from collections import defaultdict

def fetch_csv(url):
    # Convert Google Sheets URL to CSV export URL
    m = re.search(r'/d/([a-zA-Z0-9_-]+)', url)
    if m:
        sid = m.group(1)
        url = f'https://docs.google.com/spreadsheets/d/{sid}/export?format=csv'
    r = requests.get(url, timeout=10)
    r.raise_for_status()
    return r.text

def parse(csv_text):
    reader = csv.DictReader(io.StringIO(csv_text))
    groups = defaultdict(list)
    meta = {}
    for row in reader:
        name = row.get('name', '').strip()
        if not name:
            continue
        variant = {
            'mg': row.get('size', '').strip(),
            'price': int(row.get('price', 0) or 0),
            'origPrice': int(row.get('orig_price', 0) or 0)
        }
        if not meta.get(name):
            meta[name] = {
                'id': name.lower().replace(' ', '-').replace('+', '-'),
                'name': name,
                'img': row.get('img', '').strip(),
                'cat': row.get('cat', '').strip(),
                'tgt': row.get('tgt', '').strip(),
                'desc': row.get('desc', '').strip(),
                'dose': row.get('dose', '').strip(),
                'half': row.get('half', '').strip(),
                'purity': row.get('purity', '').strip(),
                'badges': [b.strip() for b in row.get('badges', '').split(',') if b.strip()],
                'wa': row.get('wa', '').strip(),
                'variants': []
            }
        meta[name]['variants'].append(variant)
    return list(meta.values())

if __name__ == '__main__':
    url, out = sys.argv[1], sys.argv[2]
    products = parse(fetch_csv(url))
    with open(out, 'w') as f:
        json.dump(products, f, indent=2, ensure_ascii=False)
    print(f"Written {len(products)} products to {out}")
