this["JST"] = this["JST"] || {};

this["JST"]["src/templates/about"] = function anonymous(locals) {
jade.debug = [{ lineno: 1, filename: "src/templates/about.jade" }];
try {
var buf = [];
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("The Detroit farm map is an open source collaboration project to map all the urban farms and gardens in the Detroit metro area.");
jade.debug.shift();
buf.push("\n");
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("If you know of a farm or garden that needs to be on this map or have questions/comments shoot us an email at ");
jade.debug.shift();
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("<a href=\"mailto:info@farmmap.us\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("info@farmmap.us");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("<hr/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("If you are interested in setting up a similar map in your area let us know, we would love to help out!  ");
jade.debug.shift();
buf.push("\n");
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push("Source code is avaible ");
jade.debug.shift();
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("<a href=\"https://github.com/wanderer/Detroit-Farm-Map\" target=\"_blank\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("here");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.unshift({ lineno: 9, filename: jade.debug[0].filename });
buf.push("<hr/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 9, filename: jade.debug[0].filename });
buf.push("<a href=\"bitcoin:1LW5fuyfrwwpXeVDFVf6eHr95ei79bFktF?label=detroit%20farm%20map\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 9, filename: jade.debug[0].filename });
buf.push("Click here to donate with Bitcoins  ");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.unshift({ lineno: 11, filename: jade.debug[0].filename });
buf.push("<br/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 11, filename: jade.debug[0].filename });
buf.push("If clicking on the line above does not work, use this address:");
jade.debug.shift();
jade.debug.unshift({ lineno: 13, filename: jade.debug[0].filename });
buf.push("<br/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 13, filename: jade.debug[0].filename });
buf.push("<code>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 13, filename: jade.debug[0].filename });
buf.push("1LW5fuyfrwwpXeVDFVf6eHr95ei79bFktF");
jade.debug.shift();
jade.debug.shift();
buf.push("</code>");
jade.debug.shift();
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno);
}
};

this["JST"]["src/templates/list"] = function anonymous(locals) {
jade.debug = [{ lineno: 1, filename: "src/templates/list.jade" }];
try {
var buf = [];
var locals_ = (locals || {}),markerArray = locals_.markerArray;jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<ul>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
// iterate markerArray
;(function(){
  var $$obj = markerArray;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var data = $$obj[i];

jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<li>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<a" + (jade.attrs({ 'href':("#"), 'data-index':(i), "class": [('listLink')] }, {"href":true,"data-index":true})) + ">" + (jade.escape(null == (jade.interp = data.data.Name) ? "" : jade.interp)));
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.shift();
buf.push("</li>");
jade.debug.shift();
jade.debug.shift();
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var data = $$obj[i];

jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<li>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<a" + (jade.attrs({ 'href':("#"), 'data-index':(i), "class": [('listLink')] }, {"href":true,"data-index":true})) + ">" + (jade.escape(null == (jade.interp = data.data.Name) ? "" : jade.interp)));
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.shift();
buf.push("</li>");
jade.debug.shift();
jade.debug.shift();
    }

  }
}).call(this);

jade.debug.shift();
jade.debug.shift();
buf.push("</ul>");
jade.debug.shift();
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno);
}
};

this["JST"]["src/templates/popup"] = function anonymous(locals) {
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