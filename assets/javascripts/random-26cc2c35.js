!function(){$(document).ready(function(){return $.get("quotes.json",function(t){var e,n,o,r;return o=t,console.log(t),r=Math.floor(Math.random()*o.length),e=o[r],$("#js-author").html(e.author),$("#js-title").html(e.title),(""!==e.twitter||void 0!==e.twitter)&&(n='<a href="'+e.url+'">'+e.twitter+"</a>",$("#js-twitter").append(n)),$("#js-content").fadeIn()})})}.call(this);