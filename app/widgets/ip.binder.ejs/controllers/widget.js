var args = arguments[0] || {};

var ejs = require(WPATH("ejs"));

ejs.filters.test = function(v) {
	return "test + " + v;
};

_.each(args.parent.__views, function(view){
	var props = {};
	_.each(JSON.parse(JSON.stringify(view)), function(val, name) {
		if (name.match(/^ejs_/)) {
			var prop = name.replace(/^ejs_/, "");
			props[prop] = ejs.render(val,args.parent.ejs);
		}		
	});
	view.applyProperties(props);
});
