var amdextract = require('amdextract');

module.exports = function(source) {
  var options = this.options || {};
  options.removeUnusedDependencies = true;

	return amdextract.parse(source, options).optimizedContent;
};
