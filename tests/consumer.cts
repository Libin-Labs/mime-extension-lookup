import * as api from '@lp-labs/mime-extension-lookup';
import { mimeFromExtension } from '@lp-labs/mime-extension-lookup';
console.log(mimeFromExtension('.json'));
// @ts-expect-error invalid argument must be rejected by declarations
api.mimeFromExtension(1);
