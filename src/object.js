/* jhint exversion: 6 */

const map = new Map();

const k1 = ['a'];
const k2 = ['a'];

map.set(k1, 111).set(k2, 222);

map.get(k1); // 111
map.get(k2); // 222S
