var amdextract = require('amdextract');

module.exports = function(source) {
	return amdextract.parse(source).optimizedContent;
};
