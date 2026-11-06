const TYPES: Readonly<Record<string, string>> = {
  txt: 'text/plain',
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  json: 'application/json',
  pdf: 'application/pdf',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  svg: 'image/svg+xml',
  xml: 'application/xml',
  csv: 'text/csv',
  wasm: 'application/wasm',
};
export function mimeFromExtension(extension: string): string | undefined {
  if (typeof extension !== 'string') throw new TypeError('Expected extension text');
  return TYPES[extension.replace(/^\./, '').toLowerCase()];
}
