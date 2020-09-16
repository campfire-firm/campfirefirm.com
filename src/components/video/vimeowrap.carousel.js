!function(t,e){function i(i){"ontouchstart"in t&&(this.element="object"==typeof i?i:e.getElementById(i),this.element.addEventListener("touchstart",this,!1),this.element.addEventListener("click",this,!0))}var A=A||function(){var t,e,i,A=60,n=!1,s=[];return{setFPS:function(t){A=t||60},start:function(t){0!==arguments.length&&this.setFPS(t),e=setInterval(this.update,1e3/A)},stop:function(){clearInterval(e)},setAutostart:function(t){n=t,n&&!e&&this.start()},add:function(t){s.push(t),n&&!e&&this.start()},getAll:function(){return s},removeAll:function(){s=[]},remove:function(e){t=s.indexOf(e),-1!==t&&s.splice(t,1)},update:function(e){t=0,i=s.length;for(var A=e||(new Date).getTime();i>t;)s[t].update(A)?t++:(s.splice(t,1),i--);0===i&&n===!0&&this.stop()}}}();A.Tween=function(t){var e=t,i={},n={},s={},a=1e3,o=0,h=null,r=A.Easing.Linear.EaseNone,l=null,u=null,d=null;this.to=function(t,i){null!==i&&(a=i);for(var A in t)null!==e[A]&&(s[A]=t[A]);return this},this.start=function(t){A.add(this),h=t?t+o:(new Date).getTime()+o;for(var a in s)null!==e[a]&&(i[a]=e[a],n[a]=s[a]-e[a]);return this},this.stop=function(){return A.remove(this),this},this.delay=function(t){return o=t,this},this.easing=function(t){return r=t,this},this.chain=function(t){return l=t,this},this.onUpdate=function(t){return u=t,this},this.onComplete=function(t){return d=t,this},this.update=function(t){var A,s,o;if(h>t)return!0;s=(t-h)/a,s=s>1?1:s,o=r(s);for(A in n)e[A]=i[A]+n[A]*o;return null!==u&&u.call(e,o),1==s?(null!==d&&d.call(e),null!==l&&l.start(),!1):!0}},A.Easing={Linear:{},Quadratic:{},Cubic:{},Quartic:{},Quintic:{},Sinusoidal:{},Exponential:{},Circular:{},Elastic:{},Back:{},Bounce:{}},A.Easing.Exponential.EaseIn=function(t){return 0===t?0:Math.pow(2,10*(t-1))},A.Easing.Exponential.EaseOut=function(t){return 1==t?1:-Math.pow(2,-10*t)+1},A.Easing.Exponential.EaseInOut=function(t){return 0===t?0:1==t?1:(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*(t-1))+2)},vimeowrap.carousel=function(n,s){function a(t){u.length=t.length;var i=u.width-2*s.offsetx;u.visible=s.visible>0?s.visible:Math.floor(i/s.thumb.width);for(var A=Math.round((i-u.visible*s.thumb.width)/Math.max(u.visible-1,1)),n=[],a=s.template,o=0;o<t.length;o++)n.push('<li style="margin-right:'+A+'px;">'),n.push(a.populate(t[o])),n.push("</li>");var h=e.getElementById(r.id+"_list");h.innerHTML=n.join(""),u.offset=s.thumb.width+A,vimeowrap.utils.css(h,{width:t.length*u.offset})}function o(e){var i=e||t.event,A=i.target||i.srcElement;if(A&&"li"!==A.nodeName.toLowerCase())for(;A&&(A=A.parentNode,"li"!==A.nodeName.toLowerCase()););for(var a=0,o=A.parentNode.children,h=0;h<o.length&&(a=h,o[h]!==A);h++);return a!==n.config.item&&n.playlistItem(a,s.autoplay),!1}function h(){l.style.left=u.xx+"px"}var r,l,u=this,d={position:"bottom",size:130,offsetx:50,offsety:10,autoplay:!1,template:'<a href="{{url}}" title="{{title}}"><img src="{{thumbnail_'+(s.thumb&&s.thumb.quality?s.thumb.quality:"small")+'}}" alt="" /><span>{{title}}</span></a>',style:"",easing:A.Easing.Exponential.EaseInOut,speed:250,thumb:{width:100,height:75}};s=vimeowrap.utils.extend(d,s),this.config=s,this.xx=0,this.visible=0,this.position=0,this.offset=0,this.length=0,A.start(),this.setup=function(){var A=s.fontdir||"https://luwes.github.io/vimeowrap.js/fonts/",h="@font-face {font-family:'Pictish'; src:url('"+A+"pictish.eot'); src:url('"+A+"pictish.eot?#iefix') format('embedded-opentype'), url(data:application/x-font-woff;charset=utf-8;base64,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) format('woff'), url('"+A+"pictish.ttf') format('truetype'), url('"+A+"pictish.svg#PictishRegular') format('svg'); font-weight:normal; font-style:normal;}#{{id}} a {text-decoration:none;}#{{id}} a:active, #{{id}} a:focus {outline:none;}#{{id}} {font:bold 12px/14px helvetica,arial,sans-serif;-webkit-tap-highlight-color:rgba(0,0,0,0);}#{{id}} ul {margin:0;padding:0;}#{{id}} ul li {display:block;float:left;width:{{thumb_width}}px;line-height:14px;}#{{id}} ul li a {display:block;color:#{{color}};text-align:center;}#{{id}} ul li a img {border:none;width:{{thumb_width}}px;height:{{thumb_height}}px;}#{{id}}_navleft, #{{id}}_navright {color:#000;display:block;font-family:'Pictish';font-size:19px;position:absolute;top:32px;width:20px;height:19px;padding:10px;}#{{id}}_navright {right:0;}";h+="ontouchstart"in t?"#{{id}} ul li a.pressed {color:#F75342;}#{{id}}_navleft.pressed, #{{id}}_navright.pressed {color:#{{color}};}":"#{{id}} ul li a:hover {color:#F75342;}#{{id}}_navleft:hover, #{{id}}_navright:hover {color:#{{color}};}",h+=s.style;var u=e.createTextNode(h.populate({id:n.id+"_carousel",color:n.config.color,thumb_width:s.thumb.width,thumb_height:s.thumb.height})),d=e.createElement("style");d.type="text/css",vimeowrap.utils.prepend(d,e.getElementsByTagName("head")[0]),d.styleSheet?d.styleSheet.cssText=u.nodeValue:d.appendChild(u),r=e.createElement("div"),r.id=n.id+"_carousel",n.container.appendChild(r),vimeowrap.utils.css(r,{width:this.width,height:this.height,position:"absolute",left:this.x,top:this.y}),new i(r);var c=e.createElement("div");c.id=r.id+"_wrap",r.appendChild(c),vimeowrap.utils.css(c,{width:this.width-2*s.offsetx,height:this.height-s.offsety,overflow:"hidden",position:"absolute",left:s.offsetx,top:s.offsety}),l=e.createElement("ul"),l.id=r.id+"_list",c.appendChild(l),vimeowrap.utils.css(l,{height:this.height,position:"absolute","list-style":"none"}),l.onclick=o;var p=e.createElement("a");p.id=r.id+"_navleft",p.href="#left",p.innerHTML="<span>[</span>",r.appendChild(p),p.onclick=this.left;var f=e.createElement("a");f.id=r.id+"_navright",f.href="#right",f.innerHTML="<span>]</span>",r.appendChild(f),f.onclick=this.right,n.events.playlist.add(a)},this.left=function(){return u.position>0&&u.to(u.position-u.visible),!1},this.right=function(){return u.position<u.length-u.visible&&u.to(u.position+u.visible),!1},this.to=function(t){return u.position=t,new A.Tween(u).to({xx:-t*u.offset},s.speed).onUpdate(h).easing(s.easing).start(),!1}},i.prototype={handleEvent:function(t){this[t.type](t)},touchstart:function(t){this.moved=!1,this.theTarget=e.elementFromPoint(t.targetTouches[0].clientX,t.targetTouches[0].clientY),3==this.theTarget.nodeType&&(this.theTarget=theTarget.parentNode),this.theTarget.className+=" pressed",this.element.addEventListener("touchmove",this,!1),this.element.addEventListener("touchend",this,!1)},touchmove:function(){this.moved=!0,this.theTarget.className=this.theTarget.className.replace(/ ?pressed/gi,"")},touchend:function(t){if(t.preventDefault(),this.element.removeEventListener("touchmove",this,!1),this.element.removeEventListener("touchend",this,!1),!this.moved&&this.theTarget){this.theTarget.className=this.theTarget.className.replace(/ ?pressed/gi,"");var i=e.createEvent("MouseEvents");i.initEvent("click",!0,!0),this.theTarget.dispatchEvent(i)}this.theTarget=void 0},click:function(t){void 0===this.theTarget&&(t.stopImmediatePropagation(),t.preventDefault())}}}(window,document);