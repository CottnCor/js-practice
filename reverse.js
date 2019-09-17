/*jshint esversion: 6 */

const reverse = ([h, ...t]) => h ? reverse(t) + h : '';
console.log([...reverse('🏠🐷😊😢')]);


