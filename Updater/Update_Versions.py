import os
import yaml
import requests

def get_latest_version(package_name):
    response = requests.get(f'https://pypi.org/pypi/{package_name}/json')
    if response.status_code == 200:
        data = response.json()
        return data['info']['version']
    return None

def update_yaml_file(file_path):
    with open(file_path, 'r') as file:
        data = yaml.safe_load(file)

    updated = False
    for key, value in data.items():
        if isinstance(value, str) and 'version' in key.lower():
            latest_version = get_latest_version(value)
            if latest_version:
                data[key] = latest_version
                updated = True

    if updated:
        with open(file_path, 'w') as file:
            yaml.safe_dump(data, file)
        return True

    return False

def main():
    for root, _, files in os.walk('.'):
        for file in files:
            if file.endswith(('.yml', '.yaml')):
                file_path = os.path.join(root, file)
                if update_yaml_file(file_path):
                    print(f'Updated {file_path}')

if __name__ == "__main__":
    main()
