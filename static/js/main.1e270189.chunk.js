(this["webpackJsonphalbton-react"]=this["webpackJsonphalbton-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),u=n(5),c=n.n(u),m=(n(13),n(14),n(6)),i=function(e){var t=e.fret,n=t.note,r="note";return t.rootNote?r+=" root":n||(r+=" notDisplayed"),o.a.createElement("span",{className:"fret"},o.a.createElement("div",{className:r}))},f=function(e){var t=e.string.frets.map((function(e){return o.a.createElement(i,{key:e.fretnumber,fret:e})}));return o.a.createElement("div",{className:"string"},t)},s=n(7),l=n(3),g={name:"C",targetName:"C"},N={name:"D",targetName:"D"},d={name:"E",targetName:"E"},b={name:"F",targetName:"F"},v={name:"G",targetName:"G"},E={name:"A",targetName:"A"},p={name:"B",targetName:"B/H"},h=[g,{name:"C#",targetName:"C#/D\u266d"},N,{name:"D#",targetName:"D#/E\u266d"},d,b,{name:"F#",targetName:"F#/G\u266d"},v,{name:"G#",targetName:"G#/A\u266d"},E,{name:"A#",targetName:"A#/H\u266d"},p],k={1:d,2:E,3:N,4:v,5:p,6:d},j=function(e){return Object.keys(e).map((function(e){return parseInt(e)}))},w=function(e,t){return D[e].frets.map((function(e,n){return Object(l.a)({},e,{rootNote:e.targetName===t,fretnumber:n})}))},y=function(e,t,n){var r=O(t,n);return D[e].frets.map((function(e,n){return Object(l.a)({},e,{note:e.targetName===r.name,rootNote:e.targetName===t,fretnumber:n})}))},O=function(e,t){var n=(h.findIndex((function(t){return t.targetName===e}))+t)%h.length;return h[n]},A=function(e,t){return function(e,t){var n=t[e],r=Object(s.a)(Array(20).keys()),a=h.findIndex((function(e){return e===n}));return r.map((function(e){return h[(a+e)%h.length]}),r)}(e,t).map((function(e,t){return Object(l.a)({},e,{note:!1,rootNote:!1,fretnumber:t})}))},D=j(r=k).reduce((function(e,t){return e[t]={frets:A(t,r),stringNumber:t},e}),{}),C=function(){var e=Object(a.useState)(function(e,t){return j(t).reduce((function(t,n){return t[n]={frets:w(n,e),stringNumber:n},t}),{})}("E",k)),t=Object(m.a)(e,2),n=t[0],r=t[1],u=Object.values(n).map((function(e){return o.a.createElement("div",{key:e.stringNumber,className:"fretboard",onClick:function(){return r(function(e,t,n){return j(n).reduce((function(n,r){return n[r]={frets:y(r,e,t),stringNumber:r},n}),{})}("E",3,k))}},o.a.createElement(f,{string:e}))}));return o.a.createElement("div",null,u)};var G=function(){return o.a.createElement("div",null,o.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1e270189.chunk.js.map