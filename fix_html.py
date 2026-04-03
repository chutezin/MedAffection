import io

def fix_html(filepath):
    try:
        with io.open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Web scraper added unicode non-breaking space entities in scripts
        content = content.replace('&#194;&#160;', '  ')
        content = content.replace('&#195;&#167;', 'ç')
        content = content.replace('&#195;&#163;', 'ã')
        content = content.replace('&#195;&#173;', 'í')
        content = content.replace('&#195;&#179;', 'ó')
        content = content.replace('&#195;&#186;', 'ú')
        content = content.replace('&#195;&#170;', 'ê')
        content = content.replace('&#195;&#161;', 'á')
        content = content.replace('&#195;&#162;', 'â')
        content = content.replace('&#195;&#181;', 'õ')
        content = content.replace('&#226;&#128;&#147;', '-')
        content = content.replace('&#226;&#128;&#148;', '—')
        content = content.replace('&#195;&#129;', 'Á')
        content = content.replace('&#226;&#128;&#145;', '-')

        with io.open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print("HTML entities fixed successfully.")
    except Exception as e:
        print(f"Error fixing {filepath}: {e}")

fix_html('index.html')
