/* jshint esversion: 6 */

function changeObjProperty(o) {
    o.siteUrl = 'http://www.baidu.com';
    o = Object.create({});
    o.siteUrl = 'http://www.google.com';
}
let webSite = Object.create({});
changeObjProperty(webSite);
console.log(webSite.siteUrl);
