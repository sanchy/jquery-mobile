//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
//>>description: Creates the define method on window, for async loading
//>>label: Define
//>>excludeEnd("jqmBuildExclude");

// creates the define method on window, only used where async loading
// is not desired in the docs and experiments
window.define = function(){
	Array.prototype.slice.call( arguments ).pop()( window.jQuery );
};
