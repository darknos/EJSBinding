function doClick(e) {
    alert($.label.text);
}

$.index.open();


$.ejs = {
	model : {name: "ivan"}
};


$.binder = Alloy.createWidget("ip.binder.ejs", {parent: $});