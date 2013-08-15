this["JST"] = this["JST"] || {};

this["JST"]["src/templates/popup"] = function anonymous(locals
/**/) {
jade.debug = [{ lineno: 1, filename: "src/templates/popup.jade" }];
try {
var buf = [];
var locals_ = (locals || {}),Name = locals_.Name,Description = locals_.Description,Link = locals_.Link;jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<h3>" + (jade.escape(null == (jade.interp = Name) ? "" : jade.interp)));
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</h3>");
jade.debug.shift();
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<p>" + (jade.escape(null == (jade.interp = Description) ? "" : jade.interp)));
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</p>");
jade.debug.shift();
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("<a" + (jade.attrs({ 'href':(Link), 'target':("_blank") }, {"href":true,"target":true})) + ">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("Link");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno);
}
};