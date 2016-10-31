import snippets from 'dummy/snippets';

export default function getSnippets() {
  return Object.keys(snippets).map((filename) => {
   let snippetName = filename.replace('.hbs', '');
   let name = snippetName.replace('-snippet', '');

   return {
     snippetName,
     filename,
     name
   };
 });
}
