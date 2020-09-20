(this["webpackJsonphalbton-react"]=this["webpackJsonphalbton-react"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),u=(n(14),n(15),n(1)),m=n(7),i=n(4),s={name:"C",targetName:"C"},l={name:"D",targetName:"D"},f={name:"E",targetName:"E"},N={name:"F",targetName:"F"},g={name:"G",targetName:"G"},v={name:"A",targetName:"A"},b={name:"B",targetName:"B/H"},d=[s,{name:"C#",targetName:"C#/D\u266d"},l,{name:"D#",targetName:"D#/E\u266d"},f,N,{name:"F#",targetName:"F#/G\u266d"},g,{name:"G#",targetName:"G#/A\u266d"},v,{name:"A#",targetName:"A#/H\u266d"},b],E={1:f,2:v,3:l,4:g,5:b,6:f},p={name:"Standard",tuning:E},h=[p,{name:"DropD",tuning:{1:f,2:v,3:l,4:g,5:b,6:l}},{name:"DropC",tuning:{1:l,2:v,3:N,4:s,5:g,6:s}}],j=function(e){return Object.keys(e).map((function(e){return parseInt(e)}))},O=function(e,t,n,a){var r=y(t,n);return I(a)[e].frets.map((function(e,n){return Object(i.a)({},e,{offsetNote:e.targetName===r.targetName,rootNote:e.targetName===t,fretnumber:n})}))},k=function(e,t,n){var a=function(e){var t=h.find((function(t){return t.name===e}));return t?t.tuning:E}(n);return j(a).reduce((function(n,r){return n[r]={frets:O(r,e,t,a),stringNumber:r},n}),{})},y=function(e,t){var n,a,r=d.findIndex((function(t){return t.targetName===e})),o=(n=r+t,a=d.length,(n%a+a)%a);return d[o]},w=function(e,t){return function(e,t){var n=t[e],a=Object(m.a)(Array(20).keys()),r=d.findIndex((function(e){return e===n}));return a.map((function(e){return d[(r+e)%d.length]}),a)}(e,t).map((function(e,t){return Object(i.a)({},e,{offsetNote:!1,rootNote:!1,fretnumber:t})}))},I=function(e){return j(e).reduce((function(t,n){return t[n]={frets:w(n,e),stringNumber:n},t}),{})},C=function(e){var t=e.offsetNote;return r.a.createElement("div",{className:"display"},t.name)},S=function(e){var t=e.changeFretboard,n=Object(a.useState)(s.targetName),o=Object(u.a)(n,2),c=o[0],m=o[1],i=Object(a.useState)("0"),l=Object(u.a)(i,2),f=l[0],N=l[1],g=Object(a.useState)(p.name),v=Object(u.a)(g,2),b=v[0],E=v[1],j=Object(a.useState)(s),O=Object(u.a)(j,2),w=O[0],I=O[1],S=function(e){return!!e||isNaN(+e)};return r.a.createElement("form",{className:"tuner"},r.a.createElement("span",null,"Wenn ich vom Grundton"),r.a.createElement("select",{className:"tuner--rootNote",value:c,onChange:function(e){var n=e.target.value;m(n),S(f)&&(t(k(n,parseInt(f),p.name)),I(y(n,parseInt(f))))}},d.map((function(e){return r.a.createElement("option",{key:e.name,value:e.targetName},e.name)}))),r.a.createElement("input",{className:"tuner--offset",type:"number",value:f,onChange:function(e){var n=e.target.value;N(n),console.log(isNaN(+n)),S(n)&&(t(k(c,parseInt(n),p.name)),I(y(c,parseInt(n))))}}),r.a.createElement("span",null,"Schritte weitergehe und"),r.a.createElement("select",{className:"tuner--tuning",value:b,onChange:function(e){var n=e.target.value;E(n),S(f)&&t(k(c,parseInt(f),n))}},h.map((function(e){return r.a.createElement("option",{key:e.name,value:e.name},e.name)}))),r.a.createElement("span",null,"Tuning verwende, lande ich beim"),r.a.createElement(C,{offsetNote:w}))},D=function(e){var t=e.offsetNote,n=void 0!==t&&t,a=e.rootNote,o="";return o=void 0!==a&&a?"note__root":n?"note__offset":"note__notVisible",r.a.createElement("div",{className:"note"},r.a.createElement("div",{className:o}))},A=n(8),F=function(e){var t=e.noteName,n=Object(a.useState)(!1),o=Object(u.a)(n,2),c=o[0],m=o[1];Object(A.a)("ctrl+k",(function(){return m((function(e){return!e}))}));var i=c?"notename--notesVisible":"notename--notesInvisible";return r.a.createElement("div",{className:"notename "+i},t)},G=function(e){var t=e.fret,n=t.offsetNote,a=t.rootNote,o=t.name;return r.a.createElement("span",{className:"fret"},r.a.createElement(D,{rootNote:a,offsetNote:n}),r.a.createElement(F,{noteName:o}))},_=function(e){var t=e.string.frets.map((function(e){return r.a.createElement(G,{key:e.fretnumber,fret:e})}));return r.a.createElement("div",{className:"string"},t)},B=function(e){var t=e.fretboard,n=Object.values(t).map((function(e){return r.a.createElement("div",{key:e.stringNumber,className:"fretboard"},r.a.createElement(_,{string:e}))}));return r.a.createElement("div",null,n)},x=function(){var e=Object(a.useState)(k(s.targetName,0,p.name)),t=Object(u.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",null,r.a.createElement(S,{changeFretboard:o}),r.a.createElement(B,{fretboard:n}),r.a.createElement("footer",null,"Press CTRL+k to toggle notenames"))};var W=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.89158f4e.chunk.js.map