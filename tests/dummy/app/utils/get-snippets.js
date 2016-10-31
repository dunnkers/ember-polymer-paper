import snippets from 'dummy/snippets';

export default function getSnippets() {
  let map = {};

  Object.keys(snippets).forEach((filename) => {
    let extidx = filename.lastIndexOf('.');
    let component = filename.substring(0, extidx);
    let name = component.replace('-snippet', '');

    map[name] = map[name] || {
      name,
      component
    };

    if (filename.endsWith('.hbs')) {
      map[name].template = filename;
    } else if (filename.endsWith('.js')) {
      map[name].script = filename;
    }
  });

  return Object.keys(map).map((name) => map[name]);
}
