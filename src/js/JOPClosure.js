/*!
Copyright JOP.js All rights reserved
-------------------------------------
author: did1335 (Ting-Hong,CHU)
ver: 0.0.1
Released under the MIT license
-------------------------------------
*/
var JOP = function(a) {
    this.obj = a
};
JOP.prototype.JOPcss = function() {
    for (var a in this.obj) {
        var c = this.obj[a].css
          , b = this.obj[a].val;
        document.querySelector(this.obj[a].sl).style[String(c)] = b
    }
}
;
JOP.prototype.JOPenabled = function() {
    for (var a in this.obj) {
        var c = this.obj[a].sl
          , b = this.obj[a].val;
        if ("0" === b || "false" === b)
            var d = !0;
        else
            "1" === b || "true" === b ? d = !1 : alert("input error");
        document.querySelector(c).disabled = !!d
    }
}
;
JOP.prototype.JOPshow = function() {
    for (var a in this.obj) {
        var c = this.obj[a].sl
          , b = this.obj[a].val;
        if ("0" === b || "false" === b)
            var d = !0;
        else
            "1" === b || "true" === b ? d = !1 : alert("input error");
        document.querySelector(c).hidden = d
    }
}
;
JOP.prototype.JOPhtml = function() {
    for (var a in this.obj) {
        var c = this.obj[a].val;
        document.querySelector(this.obj[a].sl).innerHTML = c
    }
}
;
JOP.prototype.JOPjs = function() {
    for (var a in this.obj) {
        var c = this.obj[a].pro
          , b = this.obj[a].val;
        document.querySelector(this.obj[a].sl)[String(c)] = b
    }
}
;
