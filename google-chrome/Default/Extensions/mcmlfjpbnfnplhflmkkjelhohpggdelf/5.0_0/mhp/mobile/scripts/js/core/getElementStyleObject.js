var elementStyleObjects=new Array();var elements=new Array();var elementObjects=new Array();Array.prototype.contains=function(b){var a=this.length;while(a--){if(this[a]===b){return a}}return -1};function getElementStyleObject(a){var c=elements.contains(a);if(c>=0){return elementStyleObjects[c]}var b=document.getElementById(a);elementObjects.push(b);if(b==null){return null}b=b.style;elementStyleObjects.push(b);return b}function getElementObject(a){var d=elements.contains(a);if(d>=0){return elementObjects[d]}var c=document.getElementById(a);elementObjects.push(c);var b=c.style;elementStyleObjects.push(b);return c};