import hanson from 'hanson';

module.exports = function(source) {
  this.cacheable && this.cacheable();
  var value = hanson.parse(source);
  this.value = [value];
  return hanson.stringify(value);
};