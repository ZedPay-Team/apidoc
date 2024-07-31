(()=>{var qo={9737:()=>{+function(x){"use strict";var v=".dropdown-backdrop",a='[data-toggle="dropdown"]',h=function(l){x(l).on("click.bs.dropdown",this.toggle)};h.VERSION="3.4.1";function r(l){var s=l.attr("data-target");s||(s=l.attr("href"),s=s&&/#[A-Za-z]/.test(s)&&s.replace(/.*(?=#[^\s]*$)/,""));var u=s!=="#"?x(document).find(s):null;return u&&u.length?u:l.parent()}function n(l){l&&l.which===3||(x(v).remove(),x(a).each(function(){var s=x(this),u=r(s),g={relatedTarget:this};u.hasClass("open")&&(l&&l.type=="click"&&/input|textarea/i.test(l.target.tagName)&&x.contains(u[0],l.target)||(u.trigger(l=x.Event("hide.bs.dropdown",g)),!l.isDefaultPrevented()&&(s.attr("aria-expanded","false"),u.removeClass("open").trigger(x.Event("hidden.bs.dropdown",g)))))}))}h.prototype.toggle=function(l){var s=x(this);if(!s.is(".disabled, :disabled")){var u=r(s),g=u.hasClass("open");if(n(),!g){"ontouchstart"in document.documentElement&&!u.closest(".navbar-nav").length&&x(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(x(this)).on("click",n);var i={relatedTarget:this};if(u.trigger(l=x.Event("show.bs.dropdown",i)),l.isDefaultPrevented())return;s.trigger("focus").attr("aria-expanded","true"),u.toggleClass("open").trigger(x.Event("shown.bs.dropdown",i))}return!1}},h.prototype.keydown=function(l){if(!(!/(38|40|27|32)/.test(l.which)||/input|textarea/i.test(l.target.tagName))){var s=x(this);if(l.preventDefault(),l.stopPropagation(),!s.is(".disabled, :disabled")){var u=r(s),g=u.hasClass("open");if(!g&&l.which!=27||g&&l.which==27)return l.which==27&&u.find(a).trigger("focus"),s.trigger("click");var i=" li:not(.disabled):visible a",y=u.find(".dropdown-menu"+i);if(y.length){var f=y.index(l.target);l.which==38&&f>0&&f--,l.which==40&&f<y.length-1&&f++,~f||(f=0),y.eq(f).trigger("focus")}}}};function p(l){return this.each(function(){var s=x(this),u=s.data("bs.dropdown");u||s.data("bs.dropdown",u=new h(this)),typeof l=="string"&&u[l].call(s)})}var d=x.fn.dropdown;x.fn.dropdown=p,x.fn.dropdown.Constructor=h,x.fn.dropdown.noConflict=function(){return x.fn.dropdown=d,this},x(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(l){l.stopPropagation()}).on("click.bs.dropdown.data-api",a,h.prototype.toggle).on("keydown.bs.dropdown.data-api",a,h.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",h.prototype.keydown)}(jQuery)},6927:()=>{+function(x){"use strict";var v=function(r,n){this.init("popover",r,n)};if(!x.fn.tooltip)throw new Error("Popover requires tooltip.js");v.VERSION="3.4.1",v.DEFAULTS=x.extend({},x.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),v.prototype=x.extend({},x.fn.tooltip.Constructor.prototype),v.prototype.constructor=v,v.prototype.getDefaults=function(){return v.DEFAULTS},v.prototype.setContent=function(){var r=this.tip(),n=this.getTitle(),p=this.getContent();if(this.options.html){var d=typeof p;this.options.sanitize&&(n=this.sanitizeHtml(n),d==="string"&&(p=this.sanitizeHtml(p))),r.find(".popover-title").html(n),r.find(".popover-content").children().detach().end()[d==="string"?"html":"append"](p)}else r.find(".popover-title").text(n),r.find(".popover-content").children().detach().end().text(p);r.removeClass("fade top bottom left right in"),r.find(".popover-title").html()||r.find(".popover-title").hide()},v.prototype.hasContent=function(){return this.getTitle()||this.getContent()},v.prototype.getContent=function(){var r=this.$element,n=this.options;return r.attr("data-content")||(typeof n.content=="function"?n.content.call(r[0]):n.content)},v.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};function a(r){return this.each(function(){var n=x(this),p=n.data("bs.popover"),d=typeof r=="object"&&r;!p&&/destroy|hide/.test(r)||(p||n.data("bs.popover",p=new v(this,d)),typeof r=="string"&&p[r]())})}var h=x.fn.popover;x.fn.popover=a,x.fn.popover.Constructor=v,x.fn.popover.noConflict=function(){return x.fn.popover=h,this}}(jQuery)},3497:()=>{+function(x){"use strict";function v(r,n){this.$body=x(document.body),this.$scrollElement=x(r).is(document.body)?x(window):x(r),this.options=x.extend({},v.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",x.proxy(this.process,this)),this.refresh(),this.process()}v.VERSION="3.4.1",v.DEFAULTS={offset:10},v.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},v.prototype.refresh=function(){var r=this,n="offset",p=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),x.isWindow(this.$scrollElement[0])||(n="position",p=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var d=x(this),l=d.data("target")||d.attr("href"),s=/^#./.test(l)&&x(l);return s&&s.length&&s.is(":visible")&&[[s[n]().top+p,l]]||null}).sort(function(d,l){return d[0]-l[0]}).each(function(){r.offsets.push(this[0]),r.targets.push(this[1])})},v.prototype.process=function(){var r=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),p=this.options.offset+n-this.$scrollElement.height(),d=this.offsets,l=this.targets,s=this.activeTarget,u;if(this.scrollHeight!=n&&this.refresh(),r>=p)return s!=(u=l[l.length-1])&&this.activate(u);if(s&&r<d[0])return this.activeTarget=null,this.clear();for(u=d.length;u--;)s!=l[u]&&r>=d[u]&&(d[u+1]===void 0||r<d[u+1])&&this.activate(l[u])},v.prototype.activate=function(r){this.activeTarget=r,this.clear();var n=this.selector+'[data-target="'+r+'"],'+this.selector+'[href="'+r+'"]',p=x(n).parents("li").addClass("active");p.parent(".dropdown-menu").length&&(p=p.closest("li.dropdown").addClass("active")),p.trigger("activate.bs.scrollspy")},v.prototype.clear=function(){x(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function a(r){return this.each(function(){var n=x(this),p=n.data("bs.scrollspy"),d=typeof r=="object"&&r;p||n.data("bs.scrollspy",p=new v(this,d)),typeof r=="string"&&p[r]()})}var h=x.fn.scrollspy;x.fn.scrollspy=a,x.fn.scrollspy.Constructor=v,x.fn.scrollspy.noConflict=function(){return x.fn.scrollspy=h,this},x(window).on("load.bs.scrollspy.data-api",function(){x('[data-spy="scroll"]').each(function(){var r=x(this);a.call(r,r.data())})})}(jQuery)},7814:()=>{+function(x){"use strict";var v=function(n){this.element=x(n)};v.VERSION="3.4.1",v.TRANSITION_DURATION=150,v.prototype.show=function(){var n=this.element,p=n.closest("ul:not(.dropdown-menu)"),d=n.data("target");if(d||(d=n.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!n.parent("li").hasClass("active")){var l=p.find(".active:last a"),s=x.Event("hide.bs.tab",{relatedTarget:n[0]}),u=x.Event("show.bs.tab",{relatedTarget:l[0]});if(l.trigger(s),n.trigger(u),!(u.isDefaultPrevented()||s.isDefaultPrevented())){var g=x(document).find(d);this.activate(n.closest("li"),p),this.activate(g,g.parent(),function(){l.trigger({type:"hidden.bs.tab",relatedTarget:n[0]}),n.trigger({type:"shown.bs.tab",relatedTarget:l[0]})})}}},v.prototype.activate=function(n,p,d){var l=p.find("> .active"),s=d&&x.support.transition&&(l.length&&l.hasClass("fade")||!!p.find("> .fade").length);function u(){l.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),s?(n[0].offsetWidth,n.addClass("in")):n.removeClass("fade"),n.parent(".dropdown-menu").length&&n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),d&&d()}l.length&&s?l.one("bsTransitionEnd",u).emulateTransitionEnd(v.TRANSITION_DURATION):u(),l.removeClass("in")};function a(n){return this.each(function(){var p=x(this),d=p.data("bs.tab");d||p.data("bs.tab",d=new v(this)),typeof n=="string"&&d[n]()})}var h=x.fn.tab;x.fn.tab=a,x.fn.tab.Constructor=v,x.fn.tab.noConflict=function(){return x.fn.tab=h,this};var r=function(n){n.preventDefault(),a.call(x(this),"show")};x(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',r).on("click.bs.tab.data-api",'[data-toggle="pill"]',r)}(jQuery)},6278:()=>{+function(x){"use strict";var v=["sanitize","whiteList","sanitizeFn"],a=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],h=/^aria-[\w-]*$/i,r={"*":["class","dir","id","lang","role",h],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},n=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,p=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function d(i,y){var f=i.nodeName.toLowerCase();if(x.inArray(f,y)!==-1)return x.inArray(f,a)!==-1?Boolean(i.nodeValue.match(n)||i.nodeValue.match(p)):!0;for(var c=x(y).filter(function(A,S){return S instanceof RegExp}),_=0,m=c.length;_<m;_++)if(f.match(c[_]))return!0;return!1}function l(i,y,f){if(i.length===0)return i;if(f&&typeof f=="function")return f(i);if(!document.implementation||!document.implementation.createHTMLDocument)return i;var c=document.implementation.createHTMLDocument("sanitization");c.body.innerHTML=i;for(var _=x.map(y,function(R,T){return T}),m=x(c.body).find("*"),A=0,S=m.length;A<S;A++){var b=m[A],C=b.nodeName.toLowerCase();if(x.inArray(C,_)===-1){b.parentNode.removeChild(b);continue}for(var w=x.map(b.attributes,function(R){return R}),P=[].concat(y["*"]||[],y[C]||[]),I=0,N=w.length;I<N;I++)d(w[I],P)||b.removeAttribute(w[I].nodeName)}return c.body.innerHTML}var s=function(i,y){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",i,y)};s.VERSION="3.4.1",s.TRANSITION_DURATION=150,s.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:r},s.prototype.init=function(i,y,f){if(this.enabled=!0,this.type=i,this.$element=x(y),this.options=this.getOptions(f),this.$viewport=this.options.viewport&&x(document).find(x.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var c=this.options.trigger.split(" "),_=c.length;_--;){var m=c[_];if(m=="click")this.$element.on("click."+this.type,this.options.selector,x.proxy(this.toggle,this));else if(m!="manual"){var A=m=="hover"?"mouseenter":"focusin",S=m=="hover"?"mouseleave":"focusout";this.$element.on(A+"."+this.type,this.options.selector,x.proxy(this.enter,this)),this.$element.on(S+"."+this.type,this.options.selector,x.proxy(this.leave,this))}}this.options.selector?this._options=x.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},s.prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.getOptions=function(i){var y=this.$element.data();for(var f in y)y.hasOwnProperty(f)&&x.inArray(f,v)!==-1&&delete y[f];return i=x.extend({},this.getDefaults(),y,i),i.delay&&typeof i.delay=="number"&&(i.delay={show:i.delay,hide:i.delay}),i.sanitize&&(i.template=l(i.template,i.whiteList,i.sanitizeFn)),i},s.prototype.getDelegateOptions=function(){var i={},y=this.getDefaults();return this._options&&x.each(this._options,function(f,c){y[f]!=c&&(i[f]=c)}),i},s.prototype.enter=function(i){var y=i instanceof this.constructor?i:x(i.currentTarget).data("bs."+this.type);if(y||(y=new this.constructor(i.currentTarget,this.getDelegateOptions()),x(i.currentTarget).data("bs."+this.type,y)),i instanceof x.Event&&(y.inState[i.type=="focusin"?"focus":"hover"]=!0),y.tip().hasClass("in")||y.hoverState=="in"){y.hoverState="in";return}if(clearTimeout(y.timeout),y.hoverState="in",!y.options.delay||!y.options.delay.show)return y.show();y.timeout=setTimeout(function(){y.hoverState=="in"&&y.show()},y.options.delay.show)},s.prototype.isInStateTrue=function(){for(var i in this.inState)if(this.inState[i])return!0;return!1},s.prototype.leave=function(i){var y=i instanceof this.constructor?i:x(i.currentTarget).data("bs."+this.type);if(y||(y=new this.constructor(i.currentTarget,this.getDelegateOptions()),x(i.currentTarget).data("bs."+this.type,y)),i instanceof x.Event&&(y.inState[i.type=="focusout"?"focus":"hover"]=!1),!y.isInStateTrue()){if(clearTimeout(y.timeout),y.hoverState="out",!y.options.delay||!y.options.delay.hide)return y.hide();y.timeout=setTimeout(function(){y.hoverState=="out"&&y.hide()},y.options.delay.hide)}},s.prototype.show=function(){var i=x.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(i);var y=x.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(i.isDefaultPrevented()||!y)return;var f=this,c=this.tip(),_=this.getUID(this.type);this.setContent(),c.attr("id",_),this.$element.attr("aria-describedby",_),this.options.animation&&c.addClass("fade");var m=typeof this.options.placement=="function"?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,A=/\s?auto?\s?/i,S=A.test(m);S&&(m=m.replace(A,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(m).data("bs."+this.type,this),this.options.container?c.appendTo(x(document).find(this.options.container)):c.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var b=this.getPosition(),C=c[0].offsetWidth,w=c[0].offsetHeight;if(S){var P=m,I=this.getPosition(this.$viewport);m=m=="bottom"&&b.bottom+w>I.bottom?"top":m=="top"&&b.top-w<I.top?"bottom":m=="right"&&b.right+C>I.width?"left":m=="left"&&b.left-C<I.left?"right":m,c.removeClass(P).addClass(m)}var N=this.getCalculatedOffset(m,b,C,w);this.applyPlacement(N,m);var R=function(){var T=f.hoverState;f.$element.trigger("shown.bs."+f.type),f.hoverState=null,T=="out"&&f.leave(f)};x.support.transition&&this.$tip.hasClass("fade")?c.one("bsTransitionEnd",R).emulateTransitionEnd(s.TRANSITION_DURATION):R()}},s.prototype.applyPlacement=function(i,y){var f=this.tip(),c=f[0].offsetWidth,_=f[0].offsetHeight,m=parseInt(f.css("margin-top"),10),A=parseInt(f.css("margin-left"),10);isNaN(m)&&(m=0),isNaN(A)&&(A=0),i.top+=m,i.left+=A,x.offset.setOffset(f[0],x.extend({using:function(N){f.css({top:Math.round(N.top),left:Math.round(N.left)})}},i),0),f.addClass("in");var S=f[0].offsetWidth,b=f[0].offsetHeight;y=="top"&&b!=_&&(i.top=i.top+_-b);var C=this.getViewportAdjustedDelta(y,i,S,b);C.left?i.left+=C.left:i.top+=C.top;var w=/top|bottom/.test(y),P=w?C.left*2-c+S:C.top*2-_+b,I=w?"offsetWidth":"offsetHeight";f.offset(i),this.replaceArrow(P,f[0][I],w)},s.prototype.replaceArrow=function(i,y,f){this.arrow().css(f?"left":"top",50*(1-i/y)+"%").css(f?"top":"left","")},s.prototype.setContent=function(){var i=this.tip(),y=this.getTitle();this.options.html?(this.options.sanitize&&(y=l(y,this.options.whiteList,this.options.sanitizeFn)),i.find(".tooltip-inner").html(y)):i.find(".tooltip-inner").text(y),i.removeClass("fade in top bottom left right")},s.prototype.hide=function(i){var y=this,f=x(this.$tip),c=x.Event("hide.bs."+this.type);function _(){y.hoverState!="in"&&f.detach(),y.$element&&y.$element.removeAttr("aria-describedby").trigger("hidden.bs."+y.type),i&&i()}if(this.$element.trigger(c),!c.isDefaultPrevented())return f.removeClass("in"),x.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",_).emulateTransitionEnd(s.TRANSITION_DURATION):_(),this.hoverState=null,this},s.prototype.fixTitle=function(){var i=this.$element;(i.attr("title")||typeof i.attr("data-original-title")!="string")&&i.attr("data-original-title",i.attr("title")||"").attr("title","")},s.prototype.hasContent=function(){return this.getTitle()},s.prototype.getPosition=function(i){i=i||this.$element;var y=i[0],f=y.tagName=="BODY",c=y.getBoundingClientRect();c.width==null&&(c=x.extend({},c,{width:c.right-c.left,height:c.bottom-c.top}));var _=window.SVGElement&&y instanceof window.SVGElement,m=f?{top:0,left:0}:_?null:i.offset(),A={scroll:f?document.documentElement.scrollTop||document.body.scrollTop:i.scrollTop()},S=f?{width:x(window).width(),height:x(window).height()}:null;return x.extend({},c,A,S,m)},s.prototype.getCalculatedOffset=function(i,y,f,c){return i=="bottom"?{top:y.top+y.height,left:y.left+y.width/2-f/2}:i=="top"?{top:y.top-c,left:y.left+y.width/2-f/2}:i=="left"?{top:y.top+y.height/2-c/2,left:y.left-f}:{top:y.top+y.height/2-c/2,left:y.left+y.width}},s.prototype.getViewportAdjustedDelta=function(i,y,f,c){var _={top:0,left:0};if(!this.$viewport)return _;var m=this.options.viewport&&this.options.viewport.padding||0,A=this.getPosition(this.$viewport);if(/right|left/.test(i)){var S=y.top-m-A.scroll,b=y.top+m-A.scroll+c;S<A.top?_.top=A.top-S:b>A.top+A.height&&(_.top=A.top+A.height-b)}else{var C=y.left-m,w=y.left+m+f;C<A.left?_.left=A.left-C:w>A.right&&(_.left=A.left+A.width-w)}return _},s.prototype.getTitle=function(){var i,y=this.$element,f=this.options;return i=y.attr("data-original-title")||(typeof f.title=="function"?f.title.call(y[0]):f.title),i},s.prototype.getUID=function(i){do i+=~~(Math.random()*1e6);while(document.getElementById(i));return i},s.prototype.tip=function(){if(!this.$tip&&(this.$tip=x(this.options.template),this.$tip.length!=1))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},s.prototype.enable=function(){this.enabled=!0},s.prototype.disable=function(){this.enabled=!1},s.prototype.toggleEnabled=function(){this.enabled=!this.enabled},s.prototype.toggle=function(i){var y=this;i&&(y=x(i.currentTarget).data("bs."+this.type),y||(y=new this.constructor(i.currentTarget,this.getDelegateOptions()),x(i.currentTarget).data("bs."+this.type,y))),i?(y.inState.click=!y.inState.click,y.isInStateTrue()?y.enter(y):y.leave(y)):y.tip().hasClass("in")?y.leave(y):y.enter(y)},s.prototype.destroy=function(){var i=this;clearTimeout(this.timeout),this.hide(function(){i.$element.off("."+i.type).removeData("bs."+i.type),i.$tip&&i.$tip.detach(),i.$tip=null,i.$arrow=null,i.$viewport=null,i.$element=null})},s.prototype.sanitizeHtml=function(i){return l(i,this.options.whiteList,this.options.sanitizeFn)};function u(i){return this.each(function(){var y=x(this),f=y.data("bs.tooltip"),c=typeof i=="object"&&i;!f&&/destroy|hide/.test(i)||(f||y.data("bs.tooltip",f=new s(this,c)),typeof i=="string"&&f[i]())})}var g=x.fn.tooltip;x.fn.tooltip=u,x.fn.tooltip.Constructor=s,x.fn.tooltip.noConflict=function(){return x.fn.tooltip=g,this}}(jQuery)},2027:x=>{var v=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},a=-1,h=1,r=0;v.Diff=function(n,p){return[n,p]},v.prototype.diff_main=function(n,p,d,l){typeof l=="undefined"&&(this.Diff_Timeout<=0?l=Number.MAX_VALUE:l=new Date().getTime()+this.Diff_Timeout*1e3);var s=l;if(n==null||p==null)throw new Error("Null input. (diff_main)");if(n==p)return n?[new v.Diff(r,n)]:[];typeof d=="undefined"&&(d=!0);var u=d,g=this.diff_commonPrefix(n,p),i=n.substring(0,g);n=n.substring(g),p=p.substring(g),g=this.diff_commonSuffix(n,p);var y=n.substring(n.length-g);n=n.substring(0,n.length-g),p=p.substring(0,p.length-g);var f=this.diff_compute_(n,p,u,s);return i&&f.unshift(new v.Diff(r,i)),y&&f.push(new v.Diff(r,y)),this.diff_cleanupMerge(f),f},v.prototype.diff_compute_=function(n,p,d,l){var s;if(!n)return[new v.Diff(h,p)];if(!p)return[new v.Diff(a,n)];var u=n.length>p.length?n:p,g=n.length>p.length?p:n,i=u.indexOf(g);if(i!=-1)return s=[new v.Diff(h,u.substring(0,i)),new v.Diff(r,g),new v.Diff(h,u.substring(i+g.length))],n.length>p.length&&(s[0][0]=s[2][0]=a),s;if(g.length==1)return[new v.Diff(a,n),new v.Diff(h,p)];var y=this.diff_halfMatch_(n,p);if(y){var f=y[0],c=y[1],_=y[2],m=y[3],A=y[4],S=this.diff_main(f,_,d,l),b=this.diff_main(c,m,d,l);return S.concat([new v.Diff(r,A)],b)}return d&&n.length>100&&p.length>100?this.diff_lineMode_(n,p,l):this.diff_bisect_(n,p,l)},v.prototype.diff_lineMode_=function(n,p,d){var l=this.diff_linesToChars_(n,p);n=l.chars1,p=l.chars2;var s=l.lineArray,u=this.diff_main(n,p,!1,d);this.diff_charsToLines_(u,s),this.diff_cleanupSemantic(u),u.push(new v.Diff(r,""));for(var g=0,i=0,y=0,f="",c="";g<u.length;){switch(u[g][0]){case h:y++,c+=u[g][1];break;case a:i++,f+=u[g][1];break;case r:if(i>=1&&y>=1){u.splice(g-i-y,i+y),g=g-i-y;for(var _=this.diff_main(f,c,!1,d),m=_.length-1;m>=0;m--)u.splice(g,0,_[m]);g=g+_.length}y=0,i=0,f="",c="";break}g++}return u.pop(),u},v.prototype.diff_bisect_=function(n,p,d){for(var l=n.length,s=p.length,u=Math.ceil((l+s)/2),g=u,i=2*u,y=new Array(i),f=new Array(i),c=0;c<i;c++)y[c]=-1,f[c]=-1;y[g+1]=0,f[g+1]=0;for(var _=l-s,m=_%2!=0,A=0,S=0,b=0,C=0,w=0;w<u&&!(new Date().getTime()>d);w++){for(var P=-w+A;P<=w-S;P+=2){var I=g+P,N;P==-w||P!=w&&y[I-1]<y[I+1]?N=y[I+1]:N=y[I-1]+1;for(var R=N-P;N<l&&R<s&&n.charAt(N)==p.charAt(R);)N++,R++;if(y[I]=N,N>l)S+=2;else if(R>s)A+=2;else if(m){var T=g+_-P;if(T>=0&&T<i&&f[T]!=-1){var L=l-f[T];if(N>=L)return this.diff_bisectSplit_(n,p,N,R,d)}}}for(var H=-w+b;H<=w-C;H+=2){var T=g+H,L;H==-w||H!=w&&f[T-1]<f[T+1]?L=f[T+1]:L=f[T-1]+1;for(var $=L-H;L<l&&$<s&&n.charAt(l-L-1)==p.charAt(s-$-1);)L++,$++;if(f[T]=L,L>l)C+=2;else if($>s)b+=2;else if(!m){var I=g+_-H;if(I>=0&&I<i&&y[I]!=-1){var N=y[I],R=g+N-I;if(L=l-L,N>=L)return this.diff_bisectSplit_(n,p,N,R,d)}}}}return[new v.Diff(a,n),new v.Diff(h,p)]},v.prototype.diff_bisectSplit_=function(n,p,d,l,s){var u=n.substring(0,d),g=p.substring(0,l),i=n.substring(d),y=p.substring(l),f=this.diff_main(u,g,!1,s),c=this.diff_main(i,y,!1,s);return f.concat(c)},v.prototype.diff_linesToChars_=function(n,p){var d=[],l={};d[0]="";function s(y){for(var f="",c=0,_=-1,m=d.length;_<y.length-1;){_=y.indexOf(`
`,c),_==-1&&(_=y.length-1);var A=y.substring(c,_+1);(l.hasOwnProperty?l.hasOwnProperty(A):l[A]!==void 0)?f+=String.fromCharCode(l[A]):(m==u&&(A=y.substring(c),_=y.length),f+=String.fromCharCode(m),l[A]=m,d[m++]=A),c=_+1}return f}var u=4e4,g=s(n);u=65535;var i=s(p);return{chars1:g,chars2:i,lineArray:d}},v.prototype.diff_charsToLines_=function(n,p){for(var d=0;d<n.length;d++){for(var l=n[d][1],s=[],u=0;u<l.length;u++)s[u]=p[l.charCodeAt(u)];n[d][1]=s.join("")}},v.prototype.diff_commonPrefix=function(n,p){if(!n||!p||n.charAt(0)!=p.charAt(0))return 0;for(var d=0,l=Math.min(n.length,p.length),s=l,u=0;d<s;)n.substring(u,s)==p.substring(u,s)?(d=s,u=d):l=s,s=Math.floor((l-d)/2+d);return s},v.prototype.diff_commonSuffix=function(n,p){if(!n||!p||n.charAt(n.length-1)!=p.charAt(p.length-1))return 0;for(var d=0,l=Math.min(n.length,p.length),s=l,u=0;d<s;)n.substring(n.length-s,n.length-u)==p.substring(p.length-s,p.length-u)?(d=s,u=d):l=s,s=Math.floor((l-d)/2+d);return s},v.prototype.diff_commonOverlap_=function(n,p){var d=n.length,l=p.length;if(d==0||l==0)return 0;d>l?n=n.substring(d-l):d<l&&(p=p.substring(0,d));var s=Math.min(d,l);if(n==p)return s;for(var u=0,g=1;;){var i=n.substring(s-g),y=p.indexOf(i);if(y==-1)return u;g+=y,(y==0||n.substring(s-g)==p.substring(0,g))&&(u=g,g++)}},v.prototype.diff_halfMatch_=function(n,p){if(this.Diff_Timeout<=0)return null;var d=n.length>p.length?n:p,l=n.length>p.length?p:n;if(d.length<4||l.length*2<d.length)return null;var s=this;function u(S,b,C){for(var w=S.substring(C,C+Math.floor(S.length/4)),P=-1,I="",N,R,T,L;(P=b.indexOf(w,P+1))!=-1;){var H=s.diff_commonPrefix(S.substring(C),b.substring(P)),$=s.diff_commonSuffix(S.substring(0,C),b.substring(0,P));I.length<$+H&&(I=b.substring(P-$,P)+b.substring(P,P+H),N=S.substring(0,C-$),R=S.substring(C+H),T=b.substring(0,P-$),L=b.substring(P+H))}return I.length*2>=S.length?[N,R,T,L,I]:null}var g=u(d,l,Math.ceil(d.length/4)),i=u(d,l,Math.ceil(d.length/2)),y;if(!g&&!i)return null;i?g?y=g[4].length>i[4].length?g:i:y=i:y=g;var f,c,_,m;n.length>p.length?(f=y[0],c=y[1],_=y[2],m=y[3]):(_=y[0],m=y[1],f=y[2],c=y[3]);var A=y[4];return[f,c,_,m,A]},v.prototype.diff_cleanupSemantic=function(n){for(var p=!1,d=[],l=0,s=null,u=0,g=0,i=0,y=0,f=0;u<n.length;)n[u][0]==r?(d[l++]=u,g=y,i=f,y=0,f=0,s=n[u][1]):(n[u][0]==h?y+=n[u][1].length:f+=n[u][1].length,s&&s.length<=Math.max(g,i)&&s.length<=Math.max(y,f)&&(n.splice(d[l-1],0,new v.Diff(a,s)),n[d[l-1]+1][0]=h,l--,l--,u=l>0?d[l-1]:-1,g=0,i=0,y=0,f=0,s=null,p=!0)),u++;for(p&&this.diff_cleanupMerge(n),this.diff_cleanupSemanticLossless(n),u=1;u<n.length;){if(n[u-1][0]==a&&n[u][0]==h){var c=n[u-1][1],_=n[u][1],m=this.diff_commonOverlap_(c,_),A=this.diff_commonOverlap_(_,c);m>=A?(m>=c.length/2||m>=_.length/2)&&(n.splice(u,0,new v.Diff(r,_.substring(0,m))),n[u-1][1]=c.substring(0,c.length-m),n[u+1][1]=_.substring(m),u++):(A>=c.length/2||A>=_.length/2)&&(n.splice(u,0,new v.Diff(r,c.substring(0,A))),n[u-1][0]=h,n[u-1][1]=_.substring(0,_.length-A),n[u+1][0]=a,n[u+1][1]=c.substring(A),u++),u++}u++}},v.prototype.diff_cleanupSemanticLossless=function(n){function p(A,S){if(!A||!S)return 6;var b=A.charAt(A.length-1),C=S.charAt(0),w=b.match(v.nonAlphaNumericRegex_),P=C.match(v.nonAlphaNumericRegex_),I=w&&b.match(v.whitespaceRegex_),N=P&&C.match(v.whitespaceRegex_),R=I&&b.match(v.linebreakRegex_),T=N&&C.match(v.linebreakRegex_),L=R&&A.match(v.blanklineEndRegex_),H=T&&S.match(v.blanklineStartRegex_);return L||H?5:R||T?4:w&&!I&&N?3:I||N?2:w||P?1:0}for(var d=1;d<n.length-1;){if(n[d-1][0]==r&&n[d+1][0]==r){var l=n[d-1][1],s=n[d][1],u=n[d+1][1],g=this.diff_commonSuffix(l,s);if(g){var i=s.substring(s.length-g);l=l.substring(0,l.length-g),s=i+s.substring(0,s.length-g),u=i+u}for(var y=l,f=s,c=u,_=p(l,s)+p(s,u);s.charAt(0)===u.charAt(0);){l+=s.charAt(0),s=s.substring(1)+u.charAt(0),u=u.substring(1);var m=p(l,s)+p(s,u);m>=_&&(_=m,y=l,f=s,c=u)}n[d-1][1]!=y&&(y?n[d-1][1]=y:(n.splice(d-1,1),d--),n[d][1]=f,c?n[d+1][1]=c:(n.splice(d+1,1),d--))}d++}},v.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,v.whitespaceRegex_=/\s/,v.linebreakRegex_=/[\r\n]/,v.blanklineEndRegex_=/\n\r?\n$/,v.blanklineStartRegex_=/^\r?\n\r?\n/,v.prototype.diff_cleanupEfficiency=function(n){for(var p=!1,d=[],l=0,s=null,u=0,g=!1,i=!1,y=!1,f=!1;u<n.length;)n[u][0]==r?(n[u][1].length<this.Diff_EditCost&&(y||f)?(d[l++]=u,g=y,i=f,s=n[u][1]):(l=0,s=null),y=f=!1):(n[u][0]==a?f=!0:y=!0,s&&(g&&i&&y&&f||s.length<this.Diff_EditCost/2&&g+i+y+f==3)&&(n.splice(d[l-1],0,new v.Diff(a,s)),n[d[l-1]+1][0]=h,l--,s=null,g&&i?(y=f=!0,l=0):(l--,u=l>0?d[l-1]:-1,y=f=!1),p=!0)),u++;p&&this.diff_cleanupMerge(n)},v.prototype.diff_cleanupMerge=function(n){n.push(new v.Diff(r,""));for(var p=0,d=0,l=0,s="",u="",g;p<n.length;)switch(n[p][0]){case h:l++,u+=n[p][1],p++;break;case a:d++,s+=n[p][1],p++;break;case r:d+l>1?(d!==0&&l!==0&&(g=this.diff_commonPrefix(u,s),g!==0&&(p-d-l>0&&n[p-d-l-1][0]==r?n[p-d-l-1][1]+=u.substring(0,g):(n.splice(0,0,new v.Diff(r,u.substring(0,g))),p++),u=u.substring(g),s=s.substring(g)),g=this.diff_commonSuffix(u,s),g!==0&&(n[p][1]=u.substring(u.length-g)+n[p][1],u=u.substring(0,u.length-g),s=s.substring(0,s.length-g))),p-=d+l,n.splice(p,d+l),s.length&&(n.splice(p,0,new v.Diff(a,s)),p++),u.length&&(n.splice(p,0,new v.Diff(h,u)),p++),p++):p!==0&&n[p-1][0]==r?(n[p-1][1]+=n[p][1],n.splice(p,1)):p++,l=0,d=0,s="",u="";break}n[n.length-1][1]===""&&n.pop();var i=!1;for(p=1;p<n.length-1;)n[p-1][0]==r&&n[p+1][0]==r&&(n[p][1].substring(n[p][1].length-n[p-1][1].length)==n[p-1][1]?(n[p][1]=n[p-1][1]+n[p][1].substring(0,n[p][1].length-n[p-1][1].length),n[p+1][1]=n[p-1][1]+n[p+1][1],n.splice(p-1,1),i=!0):n[p][1].substring(0,n[p+1][1].length)==n[p+1][1]&&(n[p-1][1]+=n[p+1][1],n[p][1]=n[p][1].substring(n[p+1][1].length)+n[p+1][1],n.splice(p+1,1),i=!0)),p++;i&&this.diff_cleanupMerge(n)},v.prototype.diff_xIndex=function(n,p){var d=0,l=0,s=0,u=0,g;for(g=0;g<n.length&&(n[g][0]!==h&&(d+=n[g][1].length),n[g][0]!==a&&(l+=n[g][1].length),!(d>p));g++)s=d,u=l;return n.length!=g&&n[g][0]===a?u:u+(p-s)},v.prototype.diff_prettyHtml=function(n){for(var p=[],d=/&/g,l=/</g,s=/>/g,u=/\n/g,g=0;g<n.length;g++){var i=n[g][0],y=n[g][1],f=y.replace(d,"&amp;").replace(l,"&lt;").replace(s,"&gt;").replace(u,"&para;<br>");switch(i){case h:p[g]='<ins style="background:#e6ffe6;">'+f+"</ins>";break;case a:p[g]='<del style="background:#ffe6e6;">'+f+"</del>";break;case r:p[g]="<span>"+f+"</span>";break}}return p.join("")},v.prototype.diff_text1=function(n){for(var p=[],d=0;d<n.length;d++)n[d][0]!==h&&(p[d]=n[d][1]);return p.join("")},v.prototype.diff_text2=function(n){for(var p=[],d=0;d<n.length;d++)n[d][0]!==a&&(p[d]=n[d][1]);return p.join("")},v.prototype.diff_levenshtein=function(n){for(var p=0,d=0,l=0,s=0;s<n.length;s++){var u=n[s][0],g=n[s][1];switch(u){case h:d+=g.length;break;case a:l+=g.length;break;case r:p+=Math.max(d,l),d=0,l=0;break}}return p+=Math.max(d,l),p},v.prototype.diff_toDelta=function(n){for(var p=[],d=0;d<n.length;d++)switch(n[d][0]){case h:p[d]="+"+encodeURI(n[d][1]);break;case a:p[d]="-"+n[d][1].length;break;case r:p[d]="="+n[d][1].length;break}return p.join("	").replace(/%20/g," ")},v.prototype.diff_fromDelta=function(n,p){for(var d=[],l=0,s=0,u=p.split(/\t/g),g=0;g<u.length;g++){var i=u[g].substring(1);switch(u[g].charAt(0)){case"+":try{d[l++]=new v.Diff(h,decodeURI(i))}catch(c){throw new Error("Illegal escape in diff_fromDelta: "+i)}break;case"-":case"=":var y=parseInt(i,10);if(isNaN(y)||y<0)throw new Error("Invalid number in diff_fromDelta: "+i);var f=n.substring(s,s+=y);u[g].charAt(0)=="="?d[l++]=new v.Diff(r,f):d[l++]=new v.Diff(a,f);break;default:if(u[g])throw new Error("Invalid diff operation in diff_fromDelta: "+u[g])}}if(s!=n.length)throw new Error("Delta length ("+s+") does not equal source text length ("+n.length+").");return d},v.prototype.match_main=function(n,p,d){if(n==null||p==null||d==null)throw new Error("Null input. (match_main)");return d=Math.max(0,Math.min(d,n.length)),n==p?0:n.length?n.substring(d,d+p.length)==p?d:this.match_bitap_(n,p,d):-1},v.prototype.match_bitap_=function(n,p,d){if(p.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var l=this.match_alphabet_(p),s=this;function u(N,R){var T=N/p.length,L=Math.abs(d-R);return s.Match_Distance?T+L/s.Match_Distance:L?1:T}var g=this.Match_Threshold,i=n.indexOf(p,d);i!=-1&&(g=Math.min(u(0,i),g),i=n.lastIndexOf(p,d+p.length),i!=-1&&(g=Math.min(u(0,i),g)));var y=1<<p.length-1;i=-1;for(var f,c,_=p.length+n.length,m,A=0;A<p.length;A++){for(f=0,c=_;f<c;)u(A,d+c)<=g?f=c:_=c,c=Math.floor((_-f)/2+f);_=c;var S=Math.max(1,d-c+1),b=Math.min(d+c,n.length)+p.length,C=Array(b+2);C[b+1]=(1<<A)-1;for(var w=b;w>=S;w--){var P=l[n.charAt(w-1)];if(A===0?C[w]=(C[w+1]<<1|1)&P:C[w]=(C[w+1]<<1|1)&P|((m[w+1]|m[w])<<1|1)|m[w+1],C[w]&y){var I=u(A,w-1);if(I<=g)if(g=I,i=w-1,i>d)S=Math.max(1,2*d-i);else break}}if(u(A+1,d)>g)break;m=C}return i},v.prototype.match_alphabet_=function(n){for(var p={},d=0;d<n.length;d++)p[n.charAt(d)]=0;for(var d=0;d<n.length;d++)p[n.charAt(d)]|=1<<n.length-d-1;return p},v.prototype.patch_addContext_=function(n,p){if(p.length!=0){if(n.start2===null)throw Error("patch not initialized");for(var d=p.substring(n.start2,n.start2+n.length1),l=0;p.indexOf(d)!=p.lastIndexOf(d)&&d.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)l+=this.Patch_Margin,d=p.substring(n.start2-l,n.start2+n.length1+l);l+=this.Patch_Margin;var s=p.substring(n.start2-l,n.start2);s&&n.diffs.unshift(new v.Diff(r,s));var u=p.substring(n.start2+n.length1,n.start2+n.length1+l);u&&n.diffs.push(new v.Diff(r,u)),n.start1-=s.length,n.start2-=s.length,n.length1+=s.length+u.length,n.length2+=s.length+u.length}},v.prototype.patch_make=function(n,p,d){var l,s;if(typeof n=="string"&&typeof p=="string"&&typeof d=="undefined")l=n,s=this.diff_main(l,p,!0),s.length>2&&(this.diff_cleanupSemantic(s),this.diff_cleanupEfficiency(s));else if(n&&typeof n=="object"&&typeof p=="undefined"&&typeof d=="undefined")s=n,l=this.diff_text1(s);else if(typeof n=="string"&&p&&typeof p=="object"&&typeof d=="undefined")l=n,s=p;else if(typeof n=="string"&&typeof p=="string"&&d&&typeof d=="object")l=n,s=d;else throw new Error("Unknown call format to patch_make.");if(s.length===0)return[];for(var u=[],g=new v.patch_obj,i=0,y=0,f=0,c=l,_=l,m=0;m<s.length;m++){var A=s[m][0],S=s[m][1];switch(!i&&A!==r&&(g.start1=y,g.start2=f),A){case h:g.diffs[i++]=s[m],g.length2+=S.length,_=_.substring(0,f)+S+_.substring(f);break;case a:g.length1+=S.length,g.diffs[i++]=s[m],_=_.substring(0,f)+_.substring(f+S.length);break;case r:S.length<=2*this.Patch_Margin&&i&&s.length!=m+1?(g.diffs[i++]=s[m],g.length1+=S.length,g.length2+=S.length):S.length>=2*this.Patch_Margin&&i&&(this.patch_addContext_(g,c),u.push(g),g=new v.patch_obj,i=0,c=_,y=f);break}A!==h&&(y+=S.length),A!==a&&(f+=S.length)}return i&&(this.patch_addContext_(g,c),u.push(g)),u},v.prototype.patch_deepCopy=function(n){for(var p=[],d=0;d<n.length;d++){var l=n[d],s=new v.patch_obj;s.diffs=[];for(var u=0;u<l.diffs.length;u++)s.diffs[u]=new v.Diff(l.diffs[u][0],l.diffs[u][1]);s.start1=l.start1,s.start2=l.start2,s.length1=l.length1,s.length2=l.length2,p[d]=s}return p},v.prototype.patch_apply=function(n,p){if(n.length==0)return[p,[]];n=this.patch_deepCopy(n);var d=this.patch_addPadding(n);p=d+p+d,this.patch_splitMax(n);for(var l=0,s=[],u=0;u<n.length;u++){var g=n[u].start2+l,i=this.diff_text1(n[u].diffs),y,f=-1;if(i.length>this.Match_MaxBits?(y=this.match_main(p,i.substring(0,this.Match_MaxBits),g),y!=-1&&(f=this.match_main(p,i.substring(i.length-this.Match_MaxBits),g+i.length-this.Match_MaxBits),(f==-1||y>=f)&&(y=-1))):y=this.match_main(p,i,g),y==-1)s[u]=!1,l-=n[u].length2-n[u].length1;else{s[u]=!0,l=y-g;var c;if(f==-1?c=p.substring(y,y+i.length):c=p.substring(y,f+this.Match_MaxBits),i==c)p=p.substring(0,y)+this.diff_text2(n[u].diffs)+p.substring(y+i.length);else{var _=this.diff_main(i,c,!1);if(i.length>this.Match_MaxBits&&this.diff_levenshtein(_)/i.length>this.Patch_DeleteThreshold)s[u]=!1;else{this.diff_cleanupSemanticLossless(_);for(var m=0,A,S=0;S<n[u].diffs.length;S++){var b=n[u].diffs[S];b[0]!==r&&(A=this.diff_xIndex(_,m)),b[0]===h?p=p.substring(0,y+A)+b[1]+p.substring(y+A):b[0]===a&&(p=p.substring(0,y+A)+p.substring(y+this.diff_xIndex(_,m+b[1].length))),b[0]!==a&&(m+=b[1].length)}}}}}return p=p.substring(d.length,p.length-d.length),[p,s]},v.prototype.patch_addPadding=function(n){for(var p=this.Patch_Margin,d="",l=1;l<=p;l++)d+=String.fromCharCode(l);for(var l=0;l<n.length;l++)n[l].start1+=p,n[l].start2+=p;var s=n[0],u=s.diffs;if(u.length==0||u[0][0]!=r)u.unshift(new v.Diff(r,d)),s.start1-=p,s.start2-=p,s.length1+=p,s.length2+=p;else if(p>u[0][1].length){var g=p-u[0][1].length;u[0][1]=d.substring(u[0][1].length)+u[0][1],s.start1-=g,s.start2-=g,s.length1+=g,s.length2+=g}if(s=n[n.length-1],u=s.diffs,u.length==0||u[u.length-1][0]!=r)u.push(new v.Diff(r,d)),s.length1+=p,s.length2+=p;else if(p>u[u.length-1][1].length){var g=p-u[u.length-1][1].length;u[u.length-1][1]+=d.substring(0,g),s.length1+=g,s.length2+=g}return d},v.prototype.patch_splitMax=function(n){for(var p=this.Match_MaxBits,d=0;d<n.length;d++)if(!(n[d].length1<=p)){var l=n[d];n.splice(d--,1);for(var s=l.start1,u=l.start2,g="";l.diffs.length!==0;){var i=new v.patch_obj,y=!0;for(i.start1=s-g.length,i.start2=u-g.length,g!==""&&(i.length1=i.length2=g.length,i.diffs.push(new v.Diff(r,g)));l.diffs.length!==0&&i.length1<p-this.Patch_Margin;){var f=l.diffs[0][0],c=l.diffs[0][1];f===h?(i.length2+=c.length,u+=c.length,i.diffs.push(l.diffs.shift()),y=!1):f===a&&i.diffs.length==1&&i.diffs[0][0]==r&&c.length>2*p?(i.length1+=c.length,s+=c.length,y=!1,i.diffs.push(new v.Diff(f,c)),l.diffs.shift()):(c=c.substring(0,p-i.length1-this.Patch_Margin),i.length1+=c.length,s+=c.length,f===r?(i.length2+=c.length,u+=c.length):y=!1,i.diffs.push(new v.Diff(f,c)),c==l.diffs[0][1]?l.diffs.shift():l.diffs[0][1]=l.diffs[0][1].substring(c.length))}g=this.diff_text2(i.diffs),g=g.substring(g.length-this.Patch_Margin);var _=this.diff_text1(l.diffs).substring(0,this.Patch_Margin);_!==""&&(i.length1+=_.length,i.length2+=_.length,i.diffs.length!==0&&i.diffs[i.diffs.length-1][0]===r?i.diffs[i.diffs.length-1][1]+=_:i.diffs.push(new v.Diff(r,_))),y||n.splice(++d,0,i)}}},v.prototype.patch_toText=function(n){for(var p=[],d=0;d<n.length;d++)p[d]=n[d];return p.join("")},v.prototype.patch_fromText=function(n){var p=[];if(!n)return p;for(var d=n.split(`
`),l=0,s=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;l<d.length;){var u=d[l].match(s);if(!u)throw new Error("Invalid patch string: "+d[l]);var g=new v.patch_obj;for(p.push(g),g.start1=parseInt(u[1],10),u[2]===""?(g.start1--,g.length1=1):u[2]=="0"?g.length1=0:(g.start1--,g.length1=parseInt(u[2],10)),g.start2=parseInt(u[3],10),u[4]===""?(g.start2--,g.length2=1):u[4]=="0"?g.length2=0:(g.start2--,g.length2=parseInt(u[4],10)),l++;l<d.length;){var i=d[l].charAt(0);try{var y=decodeURI(d[l].substring(1))}catch(f){throw new Error("Illegal escape in patch_fromText: "+y)}if(i=="-")g.diffs.push(new v.Diff(a,y));else if(i=="+")g.diffs.push(new v.Diff(h,y));else if(i==" ")g.diffs.push(new v.Diff(r,y));else{if(i=="@")break;if(i!=="")throw new Error('Invalid patch mode "'+i+'" in: '+y)}l++}}return p},v.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0},v.patch_obj.prototype.toString=function(){var n,p;this.length1===0?n=this.start1+",0":this.length1==1?n=this.start1+1:n=this.start1+1+","+this.length1,this.length2===0?p=this.start2+",0":this.length2==1?p=this.start2+1:p=this.start2+1+","+this.length2;for(var d=["@@ -"+n+" +"+p+` @@
`],l,s=0;s<this.diffs.length;s++){switch(this.diffs[s][0]){case h:l="+";break;case a:l="-";break;case r:l=" ";break}d[s+1]=l+encodeURI(this.diffs[s][1])+`
`}return d.join("").replace(/%20/g," ")},x.exports=v,x.exports.diff_match_patch=v,x.exports.DIFF_DELETE=a,x.exports.DIFF_INSERT=h,x.exports.DIFF_EQUAL=r},177:function(x){/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/(function(v,a){x.exports=a()})(this,function(){return function(v){function a(r){if(h[r])return h[r].exports;var n=h[r]={exports:{},id:r,loaded:!1};return v[r].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}var h={};return a.m=v,a.c=h,a.p="",a(0)}([function(v,a,h){"use strict";function r(){var b=A();return b.compile=function(C,w){return g.compile(C,w,b)},b.precompile=function(C,w){return g.precompile(C,w,b)},b.AST=s.default,b.Compiler=g.Compiler,b.JavaScriptCompiler=y.default,b.Parser=u.parser,b.parse=u.parse,b.parseWithoutProcessing=u.parseWithoutProcessing,b}var n=h(1).default;a.__esModule=!0;var p=h(2),d=n(p),l=h(45),s=n(l),u=h(46),g=h(51),i=h(52),y=n(i),f=h(49),c=n(f),_=h(44),m=n(_),A=d.default.create,S=r();S.create=r,m.default(S),S.Visitor=c.default,S.default=S,a.default=S,v.exports=a.default},function(v,a){"use strict";a.default=function(h){return h&&h.__esModule?h:{default:h}},a.__esModule=!0},function(v,a,h){"use strict";function r(){var b=new l.HandlebarsEnvironment;return f.extend(b,l),b.SafeString=u.default,b.Exception=i.default,b.Utils=f,b.escapeExpression=f.escapeExpression,b.VM=_,b.template=function(C){return _.template(C,b)},b}var n=h(3).default,p=h(1).default;a.__esModule=!0;var d=h(4),l=n(d),s=h(37),u=p(s),g=h(6),i=p(g),y=h(5),f=n(y),c=h(38),_=n(c),m=h(44),A=p(m),S=r();S.create=r,A.default(S),S.default=S,a.default=S,v.exports=a.default},function(v,a){"use strict";a.default=function(h){if(h&&h.__esModule)return h;var r={};if(h!=null)for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&(r[n]=h[n]);return r.default=h,r},a.__esModule=!0},function(v,a,h){"use strict";function r(b,C,w){this.helpers=b||{},this.partials=C||{},this.decorators=w||{},s.registerDefaultHelpers(this),u.registerDefaultDecorators(this)}var n=h(1).default;a.__esModule=!0,a.HandlebarsEnvironment=r;var p=h(5),d=h(6),l=n(d),s=h(10),u=h(30),g=h(32),i=n(g),y=h(33),f="4.7.7";a.VERSION=f;var c=8;a.COMPILER_REVISION=c;var _=7;a.LAST_COMPATIBLE_COMPILER_REVISION=_;var m={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};a.REVISION_CHANGES=m;var A="[object Object]";r.prototype={constructor:r,logger:i.default,log:i.default.log,registerHelper:function(b,C){if(p.toString.call(b)===A){if(C)throw new l.default("Arg not supported with multiple helpers");p.extend(this.helpers,b)}else this.helpers[b]=C},unregisterHelper:function(b){delete this.helpers[b]},registerPartial:function(b,C){if(p.toString.call(b)===A)p.extend(this.partials,b);else{if(typeof C=="undefined")throw new l.default('Attempting to register a partial called "'+b+'" as undefined');this.partials[b]=C}},unregisterPartial:function(b){delete this.partials[b]},registerDecorator:function(b,C){if(p.toString.call(b)===A){if(C)throw new l.default("Arg not supported with multiple decorators");p.extend(this.decorators,b)}else this.decorators[b]=C},unregisterDecorator:function(b){delete this.decorators[b]},resetLoggedPropertyAccesses:function(){y.resetLoggedProperties()}};var S=i.default.log;a.log=S,a.createFrame=p.createFrame,a.logger=i.default},function(v,a){"use strict";function h(m){return g[m]}function r(m){for(var A=1;A<arguments.length;A++)for(var S in arguments[A])Object.prototype.hasOwnProperty.call(arguments[A],S)&&(m[S]=arguments[A][S]);return m}function n(m,A){for(var S=0,b=m.length;S<b;S++)if(m[S]===A)return S;return-1}function p(m){if(typeof m!="string"){if(m&&m.toHTML)return m.toHTML();if(m==null)return"";if(!m)return m+"";m=""+m}return y.test(m)?m.replace(i,h):m}function d(m){return!m&&m!==0||!(!_(m)||m.length!==0)}function l(m){var A=r({},m);return A._parent=m,A}function s(m,A){return m.path=A,m}function u(m,A){return(m?m+".":"")+A}a.__esModule=!0,a.extend=r,a.indexOf=n,a.escapeExpression=p,a.isEmpty=d,a.createFrame=l,a.blockParams=s,a.appendContextPath=u;var g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},i=/[&<>"'`=]/g,y=/[&<>"'`=]/,f=Object.prototype.toString;a.toString=f;var c=function(m){return typeof m=="function"};c(/x/)&&(a.isFunction=c=function(m){return typeof m=="function"&&f.call(m)==="[object Function]"}),a.isFunction=c;var _=Array.isArray||function(m){return!(!m||typeof m!="object")&&f.call(m)==="[object Array]"};a.isArray=_},function(v,a,h){"use strict";function r(d,l){var s=l&&l.loc,u=void 0,g=void 0,i=void 0,y=void 0;s&&(u=s.start.line,g=s.end.line,i=s.start.column,y=s.end.column,d+=" - "+u+":"+i);for(var f=Error.prototype.constructor.call(this,d),c=0;c<p.length;c++)this[p[c]]=f[p[c]];Error.captureStackTrace&&Error.captureStackTrace(this,r);try{s&&(this.lineNumber=u,this.endLineNumber=g,n?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:y,enumerable:!0})):(this.column=i,this.endColumn=y))}catch(_){}}var n=h(7).default;a.__esModule=!0;var p=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];r.prototype=new Error,a.default=r,v.exports=a.default},function(v,a,h){v.exports={default:h(8),__esModule:!0}},function(v,a,h){var r=h(9);v.exports=function(n,p,d){return r.setDesc(n,p,d)}},function(v,a){var h=Object;v.exports={create:h.create,getProto:h.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:h.getOwnPropertyDescriptor,setDesc:h.defineProperty,setDescs:h.defineProperties,getKeys:h.keys,getNames:h.getOwnPropertyNames,getSymbols:h.getOwnPropertySymbols,each:[].forEach}},function(v,a,h){"use strict";function r(C){l.default(C),u.default(C),i.default(C),f.default(C),_.default(C),A.default(C),b.default(C)}function n(C,w,P){C.helpers[w]&&(C.hooks[w]=C.helpers[w],P||delete C.helpers[w])}var p=h(1).default;a.__esModule=!0,a.registerDefaultHelpers=r,a.moveHelperToHooks=n;var d=h(11),l=p(d),s=h(12),u=p(s),g=h(25),i=p(g),y=h(26),f=p(y),c=h(27),_=p(c),m=h(28),A=p(m),S=h(29),b=p(S)},function(v,a,h){"use strict";a.__esModule=!0;var r=h(5);a.default=function(n){n.registerHelper("blockHelperMissing",function(p,d){var l=d.inverse,s=d.fn;if(p===!0)return s(this);if(p===!1||p==null)return l(this);if(r.isArray(p))return p.length>0?(d.ids&&(d.ids=[d.name]),n.helpers.each(p,d)):l(this);if(d.data&&d.ids){var u=r.createFrame(d.data);u.contextPath=r.appendContextPath(d.data.contextPath,d.name),d={data:u}}return s(p,d)})},v.exports=a.default},function(v,a,h){(function(r){"use strict";var n=h(13).default,p=h(1).default;a.__esModule=!0;var d=h(5),l=h(6),s=p(l);a.default=function(u){u.registerHelper("each",function(g,i){function y(I,N,R){A&&(A.key=I,A.index=N,A.first=N===0,A.last=!!R,S&&(A.contextPath=S+I)),m+=f(g[I],{data:A,blockParams:d.blockParams([g[I],I],[S+I,null])})}if(!i)throw new s.default("Must pass iterator to #each");var f=i.fn,c=i.inverse,_=0,m="",A=void 0,S=void 0;if(i.data&&i.ids&&(S=d.appendContextPath(i.data.contextPath,i.ids[0])+"."),d.isFunction(g)&&(g=g.call(this)),i.data&&(A=d.createFrame(i.data)),g&&typeof g=="object")if(d.isArray(g))for(var b=g.length;_<b;_++)_ in g&&y(_,_,_===g.length-1);else if(r.Symbol&&g[r.Symbol.iterator]){for(var C=[],w=g[r.Symbol.iterator](),P=w.next();!P.done;P=w.next())C.push(P.value);g=C;for(var b=g.length;_<b;_++)y(_,_,_===g.length-1)}else(function(){var I=void 0;n(g).forEach(function(N){I!==void 0&&y(I,_-1),I=N,_++}),I!==void 0&&y(I,_-1,!0)})();return _===0&&(m=c(this)),m})},v.exports=a.default}).call(a,function(){return this}())},function(v,a,h){v.exports={default:h(14),__esModule:!0}},function(v,a,h){h(15),v.exports=h(21).Object.keys},function(v,a,h){var r=h(16);h(18)("keys",function(n){return function(p){return n(r(p))}})},function(v,a,h){var r=h(17);v.exports=function(n){return Object(r(n))}},function(v,a){v.exports=function(h){if(h==null)throw TypeError("Can't call method on  "+h);return h}},function(v,a,h){var r=h(19),n=h(21),p=h(24);v.exports=function(d,l){var s=(n.Object||{})[d]||Object[d],u={};u[d]=l(s),r(r.S+r.F*p(function(){s(1)}),"Object",u)}},function(v,a,h){var r=h(20),n=h(21),p=h(22),d="prototype",l=function(s,u,g){var i,y,f,c=s&l.F,_=s&l.G,m=s&l.S,A=s&l.P,S=s&l.B,b=s&l.W,C=_?n:n[u]||(n[u]={}),w=_?r:m?r[u]:(r[u]||{})[d];_&&(g=u);for(i in g)y=!c&&w&&i in w,y&&i in C||(f=y?w[i]:g[i],C[i]=_&&typeof w[i]!="function"?g[i]:S&&y?p(f,r):b&&w[i]==f?function(P){var I=function(N){return this instanceof P?new P(N):P(N)};return I[d]=P[d],I}(f):A&&typeof f=="function"?p(Function.call,f):f,A&&((C[d]||(C[d]={}))[i]=f))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,v.exports=l},function(v,a){var h=v.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=h)},function(v,a){var h=v.exports={version:"1.2.6"};typeof __e=="number"&&(__e=h)},function(v,a,h){var r=h(23);v.exports=function(n,p,d){if(r(n),p===void 0)return n;switch(d){case 1:return function(l){return n.call(p,l)};case 2:return function(l,s){return n.call(p,l,s)};case 3:return function(l,s,u){return n.call(p,l,s,u)}}return function(){return n.apply(p,arguments)}}},function(v,a){v.exports=function(h){if(typeof h!="function")throw TypeError(h+" is not a function!");return h}},function(v,a){v.exports=function(h){try{return!!h()}catch(r){return!0}}},function(v,a,h){"use strict";var r=h(1).default;a.__esModule=!0;var n=h(6),p=r(n);a.default=function(d){d.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new p.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},v.exports=a.default},function(v,a,h){"use strict";var r=h(1).default;a.__esModule=!0;var n=h(5),p=h(6),d=r(p);a.default=function(l){l.registerHelper("if",function(s,u){if(arguments.length!=2)throw new d.default("#if requires exactly one argument");return n.isFunction(s)&&(s=s.call(this)),!u.hash.includeZero&&!s||n.isEmpty(s)?u.inverse(this):u.fn(this)}),l.registerHelper("unless",function(s,u){if(arguments.length!=2)throw new d.default("#unless requires exactly one argument");return l.helpers.if.call(this,s,{fn:u.inverse,inverse:u.fn,hash:u.hash})})},v.exports=a.default},function(v,a){"use strict";a.__esModule=!0,a.default=function(h){h.registerHelper("log",function(){for(var r=[void 0],n=arguments[arguments.length-1],p=0;p<arguments.length-1;p++)r.push(arguments[p]);var d=1;n.hash.level!=null?d=n.hash.level:n.data&&n.data.level!=null&&(d=n.data.level),r[0]=d,h.log.apply(h,r)})},v.exports=a.default},function(v,a){"use strict";a.__esModule=!0,a.default=function(h){h.registerHelper("lookup",function(r,n,p){return r&&p.lookupProperty(r,n)})},v.exports=a.default},function(v,a,h){"use strict";var r=h(1).default;a.__esModule=!0;var n=h(5),p=h(6),d=r(p);a.default=function(l){l.registerHelper("with",function(s,u){if(arguments.length!=2)throw new d.default("#with requires exactly one argument");n.isFunction(s)&&(s=s.call(this));var g=u.fn;if(n.isEmpty(s))return u.inverse(this);var i=u.data;return u.data&&u.ids&&(i=n.createFrame(u.data),i.contextPath=n.appendContextPath(u.data.contextPath,u.ids[0])),g(s,{data:i,blockParams:n.blockParams([s],[i&&i.contextPath])})})},v.exports=a.default},function(v,a,h){"use strict";function r(l){d.default(l)}var n=h(1).default;a.__esModule=!0,a.registerDefaultDecorators=r;var p=h(31),d=n(p)},function(v,a,h){"use strict";a.__esModule=!0;var r=h(5);a.default=function(n){n.registerDecorator("inline",function(p,d,l,s){var u=p;return d.partials||(d.partials={},u=function(g,i){var y=l.partials;l.partials=r.extend({},y,d.partials);var f=p(g,i);return l.partials=y,f}),d.partials[s.args[0]]=s.fn,u})},v.exports=a.default},function(v,a,h){"use strict";a.__esModule=!0;var r=h(5),n={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(p){if(typeof p=="string"){var d=r.indexOf(n.methodMap,p.toLowerCase());p=d>=0?d:parseInt(p,10)}return p},log:function(p){if(p=n.lookupLevel(p),typeof console!="undefined"&&n.lookupLevel(n.level)<=p){var d=n.methodMap[p];console[d]||(d="log");for(var l=arguments.length,s=Array(l>1?l-1:0),u=1;u<l;u++)s[u-1]=arguments[u];console[d].apply(console,s)}}};a.default=n,v.exports=a.default},function(v,a,h){"use strict";function r(_){var m=s(null);m.constructor=!1,m.__defineGetter__=!1,m.__defineSetter__=!1,m.__lookupGetter__=!1;var A=s(null);return A.__proto__=!1,{properties:{whitelist:i.createNewLookupObject(A,_.allowedProtoProperties),defaultValue:_.allowProtoPropertiesByDefault},methods:{whitelist:i.createNewLookupObject(m,_.allowedProtoMethods),defaultValue:_.allowProtoMethodsByDefault}}}function n(_,m,A){return p(typeof _=="function"?m.methods:m.properties,A)}function p(_,m){return _.whitelist[m]!==void 0?_.whitelist[m]===!0:_.defaultValue!==void 0?_.defaultValue:(d(m),!1)}function d(_){c[_]!==!0&&(c[_]=!0,f.log("error",'Handlebars: Access has been denied to resolve the property "'+_+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function l(){u(c).forEach(function(_){delete c[_]})}var s=h(34).default,u=h(13).default,g=h(3).default;a.__esModule=!0,a.createProtoAccessControl=r,a.resultIsAllowed=n,a.resetLoggedProperties=l;var i=h(36),y=h(32),f=g(y),c=s(null)},function(v,a,h){v.exports={default:h(35),__esModule:!0}},function(v,a,h){var r=h(9);v.exports=function(n,p){return r.create(n,p)}},function(v,a,h){"use strict";function r(){for(var d=arguments.length,l=Array(d),s=0;s<d;s++)l[s]=arguments[s];return p.extend.apply(void 0,[n(null)].concat(l))}var n=h(34).default;a.__esModule=!0,a.createNewLookupObject=r;var p=h(5)},function(v,a){"use strict";function h(r){this.string=r}a.__esModule=!0,h.prototype.toString=h.prototype.toHTML=function(){return""+this.string},a.default=h,v.exports=a.default},function(v,a,h){"use strict";function r(R){var T=R&&R[0]||1,L=w.COMPILER_REVISION;if(!(T>=w.LAST_COMPATIBLE_COMPILER_REVISION&&T<=w.COMPILER_REVISION)){if(T<w.LAST_COMPATIBLE_COMPILER_REVISION){var H=w.REVISION_CHANGES[L],$=w.REVISION_CHANGES[T];throw new C.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+H+") or downgrade your runtime to an older version ("+$+").")}throw new C.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+R[1]+").")}}function n(R,T){function L(O,U,M){M.hash&&(U=S.extend({},U,M.hash),M.ids&&(M.ids[0]=!0)),O=T.VM.resolvePartial.call(this,O,U,M);var K=S.extend({},M,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),G=T.VM.invokePartial.call(this,O,U,K);if(G==null&&T.compile&&(M.partials[M.name]=T.compile(O,R.compilerOptions,T),G=M.partials[M.name](U,K)),G!=null){if(M.indent){for(var te=G.split(`
`),se=0,pe=te.length;se<pe&&(te[se]||se+1!==pe);se++)te[se]=M.indent+te[se];G=te.join(`
`)}return G}throw new C.default("The partial "+M.name+" could not be compiled when running in runtime-only mode")}function H(O){function U(se){return""+R.main(Y,se,Y.helpers,Y.partials,K,te,G)}var M=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],K=M.data;H._setup(M),!M.partial&&R.useData&&(K=u(O,K));var G=void 0,te=R.useBlockParams?[]:void 0;return R.useDepths&&(G=M.depths?O!=M.depths[0]?[O].concat(M.depths):M.depths:[O]),(U=g(R.main,U,Y,M.depths||[],K,te))(O,M)}if(!T)throw new C.default("No environment passed to template");if(!R||!R.main)throw new C.default("Unknown template object: "+typeof R);R.main.decorator=R.main_d,T.VM.checkRevision(R.compiler);var $=R.compiler&&R.compiler[0]===7,Y={strict:function(O,U,M){if(!(O&&U in O))throw new C.default('"'+U+'" not defined in '+O,{loc:M});return Y.lookupProperty(O,U)},lookupProperty:function(O,U){var M=O[U];return M==null||Object.prototype.hasOwnProperty.call(O,U)||N.resultIsAllowed(M,Y.protoAccessControl,U)?M:void 0},lookup:function(O,U){for(var M=O.length,K=0;K<M;K++){var G=O[K]&&Y.lookupProperty(O[K],U);if(G!=null)return O[K][U]}},lambda:function(O,U){return typeof O=="function"?O.call(U):O},escapeExpression:S.escapeExpression,invokePartial:L,fn:function(O){var U=R[O];return U.decorator=R[O+"_d"],U},programs:[],program:function(O,U,M,K,G){var te=this.programs[O],se=this.fn(O);return U||G||K||M?te=p(this,O,se,U,M,K,G):te||(te=this.programs[O]=p(this,O,se)),te},data:function(O,U){for(;O&&U--;)O=O._parent;return O},mergeIfNeeded:function(O,U){var M=O||U;return O&&U&&O!==U&&(M=S.extend({},U,O)),M},nullContext:f({}),noop:T.VM.noop,compilerInfo:R.compiler};return H.isTop=!0,H._setup=function(O){if(O.partial)Y.protoAccessControl=O.protoAccessControl,Y.helpers=O.helpers,Y.partials=O.partials,Y.decorators=O.decorators,Y.hooks=O.hooks;else{var U=S.extend({},T.helpers,O.helpers);i(U,Y),Y.helpers=U,R.usePartial&&(Y.partials=Y.mergeIfNeeded(O.partials,T.partials)),(R.usePartial||R.useDecorators)&&(Y.decorators=S.extend({},T.decorators,O.decorators)),Y.hooks={},Y.protoAccessControl=N.createProtoAccessControl(O);var M=O.allowCallsToHelperMissing||$;P.moveHelperToHooks(Y,"helperMissing",M),P.moveHelperToHooks(Y,"blockHelperMissing",M)}},H._child=function(O,U,M,K){if(R.useBlockParams&&!M)throw new C.default("must pass block params");if(R.useDepths&&!K)throw new C.default("must pass parent depths");return p(Y,O,R[O],U,0,M,K)},H}function p(R,T,L,H,$,Y,O){function U(M){var K=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],G=O;return!O||M==O[0]||M===R.nullContext&&O[0]===null||(G=[M].concat(O)),L(R,M,R.helpers,R.partials,K.data||H,Y&&[K.blockParams].concat(Y),G)}return U=g(L,U,R,O,H,Y),U.program=T,U.depth=O?O.length:0,U.blockParams=$||0,U}function d(R,T,L){return R?R.call||L.name||(L.name=R,R=L.partials[R]):R=L.name==="@partial-block"?L.data["partial-block"]:L.partials[L.name],R}function l(R,T,L){var H=L.data&&L.data["partial-block"];L.partial=!0,L.ids&&(L.data.contextPath=L.ids[0]||L.data.contextPath);var $=void 0;if(L.fn&&L.fn!==s&&function(){L.data=w.createFrame(L.data);var Y=L.fn;$=L.data["partial-block"]=function(O){var U=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return U.data=w.createFrame(U.data),U.data["partial-block"]=H,Y(O,U)},Y.partials&&(L.partials=S.extend({},L.partials,Y.partials))}(),R===void 0&&$&&(R=$),R===void 0)throw new C.default("The partial "+L.name+" could not be found");if(R instanceof Function)return R(T,L)}function s(){return""}function u(R,T){return T&&"root"in T||(T=T?w.createFrame(T):{},T.root=R),T}function g(R,T,L,H,$,Y){if(R.decorator){var O={};T=R.decorator(T,O,L,H&&H[0],$,Y,H),S.extend(T,O)}return T}function i(R,T){c(R).forEach(function(L){var H=R[L];R[L]=y(H,T)})}function y(R,T){var L=T.lookupProperty;return I.wrapHelper(R,function(H){return S.extend({lookupProperty:L},H)})}var f=h(39).default,c=h(13).default,_=h(3).default,m=h(1).default;a.__esModule=!0,a.checkRevision=r,a.template=n,a.wrapProgram=p,a.resolvePartial=d,a.invokePartial=l,a.noop=s;var A=h(5),S=_(A),b=h(6),C=m(b),w=h(4),P=h(10),I=h(43),N=h(33)},function(v,a,h){v.exports={default:h(40),__esModule:!0}},function(v,a,h){h(41),v.exports=h(21).Object.seal},function(v,a,h){var r=h(42);h(18)("seal",function(n){return function(p){return n&&r(p)?n(p):p}})},function(v,a){v.exports=function(h){return typeof h=="object"?h!==null:typeof h=="function"}},function(v,a){"use strict";function h(r,n){if(typeof r!="function")return r;var p=function(){var d=arguments[arguments.length-1];return arguments[arguments.length-1]=n(d),r.apply(this,arguments)};return p}a.__esModule=!0,a.wrapHelper=h},function(v,a){(function(h){"use strict";a.__esModule=!0,a.default=function(r){var n=typeof h!="undefined"?h:window,p=n.Handlebars;r.noConflict=function(){return n.Handlebars===r&&(n.Handlebars=p),r}},v.exports=a.default}).call(a,function(){return this}())},function(v,a){"use strict";a.__esModule=!0;var h={helpers:{helperExpression:function(r){return r.type==="SubExpression"||(r.type==="MustacheStatement"||r.type==="BlockStatement")&&!!(r.params&&r.params.length||r.hash)},scopedId:function(r){return/^\.|this\b/.test(r.original)},simpleId:function(r){return r.parts.length===1&&!h.helpers.scopedId(r)&&!r.depth}}};a.default=h,v.exports=a.default},function(v,a,h){"use strict";function r(_,m){if(_.type==="Program")return _;s.default.yy=c,c.locInfo=function(S){return new c.SourceLocation(m&&m.srcName,S)};var A=s.default.parse(_);return A}function n(_,m){var A=r(_,m),S=new g.default(m);return S.accept(A)}var p=h(1).default,d=h(3).default;a.__esModule=!0,a.parseWithoutProcessing=r,a.parse=n;var l=h(47),s=p(l),u=h(48),g=p(u),i=h(50),y=d(i),f=h(5);a.parser=s.default;var c={};f.extend(c,y)},function(v,a){"use strict";a.__esModule=!0;var h=function(){function r(){this.yy={}}var n={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(d,l,s,u,g,i,y){var f=i.length-1;switch(g){case 1:return i[f-1];case 2:this.$=u.prepareProgram(i[f]);break;case 3:this.$=i[f];break;case 4:this.$=i[f];break;case 5:this.$=i[f];break;case 6:this.$=i[f];break;case 7:this.$=i[f];break;case 8:this.$=i[f];break;case 9:this.$={type:"CommentStatement",value:u.stripComment(i[f]),strip:u.stripFlags(i[f],i[f]),loc:u.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:i[f],value:i[f],loc:u.locInfo(this._$)};break;case 11:this.$=u.prepareRawBlock(i[f-2],i[f-1],i[f],this._$);break;case 12:this.$={path:i[f-3],params:i[f-2],hash:i[f-1]};break;case 13:this.$=u.prepareBlock(i[f-3],i[f-2],i[f-1],i[f],!1,this._$);break;case 14:this.$=u.prepareBlock(i[f-3],i[f-2],i[f-1],i[f],!0,this._$);break;case 15:this.$={open:i[f-5],path:i[f-4],params:i[f-3],hash:i[f-2],blockParams:i[f-1],strip:u.stripFlags(i[f-5],i[f])};break;case 16:this.$={path:i[f-4],params:i[f-3],hash:i[f-2],blockParams:i[f-1],strip:u.stripFlags(i[f-5],i[f])};break;case 17:this.$={path:i[f-4],params:i[f-3],hash:i[f-2],blockParams:i[f-1],strip:u.stripFlags(i[f-5],i[f])};break;case 18:this.$={strip:u.stripFlags(i[f-1],i[f-1]),program:i[f]};break;case 19:var c=u.prepareBlock(i[f-2],i[f-1],i[f],i[f],!1,this._$),_=u.prepareProgram([c],i[f-1].loc);_.chained=!0,this.$={strip:i[f-2].strip,program:_,chain:!0};break;case 20:this.$=i[f];break;case 21:this.$={path:i[f-1],strip:u.stripFlags(i[f-2],i[f])};break;case 22:this.$=u.prepareMustache(i[f-3],i[f-2],i[f-1],i[f-4],u.stripFlags(i[f-4],i[f]),this._$);break;case 23:this.$=u.prepareMustache(i[f-3],i[f-2],i[f-1],i[f-4],u.stripFlags(i[f-4],i[f]),this._$);break;case 24:this.$={type:"PartialStatement",name:i[f-3],params:i[f-2],hash:i[f-1],indent:"",strip:u.stripFlags(i[f-4],i[f]),loc:u.locInfo(this._$)};break;case 25:this.$=u.preparePartialBlock(i[f-2],i[f-1],i[f],this._$);break;case 26:this.$={path:i[f-3],params:i[f-2],hash:i[f-1],strip:u.stripFlags(i[f-4],i[f])};break;case 27:this.$=i[f];break;case 28:this.$=i[f];break;case 29:this.$={type:"SubExpression",path:i[f-3],params:i[f-2],hash:i[f-1],loc:u.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:i[f],loc:u.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:u.id(i[f-2]),value:i[f],loc:u.locInfo(this._$)};break;case 32:this.$=u.id(i[f-1]);break;case 33:this.$=i[f];break;case 34:this.$=i[f];break;case 35:this.$={type:"StringLiteral",value:i[f],original:i[f],loc:u.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(i[f]),original:Number(i[f]),loc:u.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:i[f]==="true",original:i[f]==="true",loc:u.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:u.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:u.locInfo(this._$)};break;case 40:this.$=i[f];break;case 41:this.$=i[f];break;case 42:this.$=u.preparePath(!0,i[f],this._$);break;case 43:this.$=u.preparePath(!1,i[f],this._$);break;case 44:i[f-2].push({part:u.id(i[f]),original:i[f],separator:i[f-1]}),this.$=i[f-2];break;case 45:this.$=[{part:u.id(i[f]),original:i[f]}];break;case 46:this.$=[];break;case 47:i[f-1].push(i[f]);break;case 48:this.$=[];break;case 49:i[f-1].push(i[f]);break;case 50:this.$=[];break;case 51:i[f-1].push(i[f]);break;case 58:this.$=[];break;case 59:i[f-1].push(i[f]);break;case 64:this.$=[];break;case 65:i[f-1].push(i[f]);break;case 70:this.$=[];break;case 71:i[f-1].push(i[f]);break;case 78:this.$=[];break;case 79:i[f-1].push(i[f]);break;case 82:this.$=[];break;case 83:i[f-1].push(i[f]);break;case 86:this.$=[];break;case 87:i[f-1].push(i[f]);break;case 90:this.$=[];break;case 91:i[f-1].push(i[f]);break;case 94:this.$=[];break;case 95:i[f-1].push(i[f]);break;case 98:this.$=[i[f]];break;case 99:i[f-1].push(i[f]);break;case 100:this.$=[i[f]];break;case 101:i[f-1].push(i[f])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(d,l){throw new Error(d)},parse:function(d){function l(){var Y;return Y=s.lexer.lex()||1,typeof Y!="number"&&(Y=s.symbols_[Y]||Y),Y}var s=this,u=[0],g=[null],i=[],y=this.table,f="",c=0,_=0,m=0;this.lexer.setInput(d),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var A=this.lexer.yylloc;i.push(A);var S=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);for(var b,C,w,P,I,N,R,T,L,H={};;){if(w=u[u.length-1],this.defaultActions[w]?P=this.defaultActions[w]:(b!==null&&typeof b!="undefined"||(b=l()),P=y[w]&&y[w][b]),typeof P=="undefined"||!P.length||!P[0]){var $="";if(!m){L=[];for(N in y[w])this.terminals_[N]&&N>2&&L.push("'"+this.terminals_[N]+"'");$=this.lexer.showPosition?"Parse error on line "+(c+1)+`:
`+this.lexer.showPosition()+`
Expecting `+L.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(c+1)+": Unexpected "+(b==1?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError($,{text:this.lexer.match,token:this.terminals_[b]||b,line:this.lexer.yylineno,loc:A,expected:L})}}if(P[0]instanceof Array&&P.length>1)throw new Error("Parse Error: multiple actions possible at state: "+w+", token: "+b);switch(P[0]){case 1:u.push(b),g.push(this.lexer.yytext),i.push(this.lexer.yylloc),u.push(P[1]),b=null,C?(b=C,C=null):(_=this.lexer.yyleng,f=this.lexer.yytext,c=this.lexer.yylineno,A=this.lexer.yylloc,m>0&&m--);break;case 2:if(R=this.productions_[P[1]][1],H.$=g[g.length-R],H._$={first_line:i[i.length-(R||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(R||1)].first_column,last_column:i[i.length-1].last_column},S&&(H._$.range=[i[i.length-(R||1)].range[0],i[i.length-1].range[1]]),I=this.performAction.call(H,f,_,c,this.yy,P[1],g,i),typeof I!="undefined")return I;R&&(u=u.slice(0,-1*R*2),g=g.slice(0,-1*R),i=i.slice(0,-1*R)),u.push(this.productions_[P[1]][0]),g.push(H.$),i.push(H._$),T=y[u[u.length-2]][u[u.length-1]],u.push(T);break;case 3:return!0}}return!0}},p=function(){var d={EOF:1,parseError:function(l,s){if(!this.yy.parser)throw new Error(l);this.yy.parser.parseError(l,s)},setInput:function(l){return this._input=l,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var s=l.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},unput:function(l){var s=l.length,u=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s-1),this.offset-=s;var g=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),u.length-1&&(this.yylineno-=u.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:u?(u.length===g.length?this.yylloc.first_column:0)+g[g.length-u.length].length-u[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-s]),this},more:function(){return this._more=!0,this},less:function(l){this.unput(this.match.slice(l))},pastInput:function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var l=this.pastInput(),s=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+s+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,s,u,g,i;this._more||(this.yytext="",this.match="");for(var y=this._currentRules(),f=0;f<y.length&&(u=this._input.match(this.rules[y[f]]),!u||s&&!(u[0].length>s[0].length)||(s=u,g=f,this.options.flex));f++);return s?(i=s[0].match(/(?:\r\n?|\n).*/g),i&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],l=this.performAction.call(this,this.yy,this,y[g],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var l=this.next();return typeof l!="undefined"?l:this.lex()},begin:function(l){this.conditionStack.push(l)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(l){this.begin(l)}};return d.options={},d.performAction=function(l,s,u,g){function i(y,f){return s.yytext=s.yytext.substring(y,s.yyleng-f+y)}switch(u){case 0:if(s.yytext.slice(-2)==="\\\\"?(i(0,1),this.begin("mu")):s.yytext.slice(-1)==="\\"?(i(0,1),this.begin("emu")):this.begin("mu"),s.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(i(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(s.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return s.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return s.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return s.yytext=s.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},d.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],d.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},d}();return n.lexer=p,r.prototype=n,n.Parser=r,new r}();a.default=h,v.exports=a.default},function(v,a,h){"use strict";function r(){var i=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=i}function n(i,y,f){y===void 0&&(y=i.length);var c=i[y-1],_=i[y-2];return c?c.type==="ContentStatement"?(_||!f?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(c.original):void 0:f}function p(i,y,f){y===void 0&&(y=-1);var c=i[y+1],_=i[y+2];return c?c.type==="ContentStatement"?(_||!f?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(c.original):void 0:f}function d(i,y,f){var c=i[y==null?0:y+1];if(c&&c.type==="ContentStatement"&&(f||!c.rightStripped)){var _=c.value;c.value=c.value.replace(f?/^\s+/:/^[ \t]*\r?\n?/,""),c.rightStripped=c.value!==_}}function l(i,y,f){var c=i[y==null?i.length-1:y-1];if(c&&c.type==="ContentStatement"&&(f||!c.leftStripped)){var _=c.value;return c.value=c.value.replace(f?/\s+$/:/[ \t]+$/,""),c.leftStripped=c.value!==_,c.leftStripped}}var s=h(1).default;a.__esModule=!0;var u=h(49),g=s(u);r.prototype=new g.default,r.prototype.Program=function(i){var y=!this.options.ignoreStandalone,f=!this.isRootSeen;this.isRootSeen=!0;for(var c=i.body,_=0,m=c.length;_<m;_++){var A=c[_],S=this.accept(A);if(S){var b=n(c,_,f),C=p(c,_,f),w=S.openStandalone&&b,P=S.closeStandalone&&C,I=S.inlineStandalone&&b&&C;S.close&&d(c,_,!0),S.open&&l(c,_,!0),y&&I&&(d(c,_),l(c,_)&&A.type==="PartialStatement"&&(A.indent=/([ \t]+$)/.exec(c[_-1].original)[1])),y&&w&&(d((A.program||A.inverse).body),l(c,_)),y&&P&&(d(c,_),l((A.inverse||A.program).body))}}return i},r.prototype.BlockStatement=r.prototype.DecoratorBlock=r.prototype.PartialBlockStatement=function(i){this.accept(i.program),this.accept(i.inverse);var y=i.program||i.inverse,f=i.program&&i.inverse,c=f,_=f;if(f&&f.chained)for(c=f.body[0].program;_.chained;)_=_.body[_.body.length-1].program;var m={open:i.openStrip.open,close:i.closeStrip.close,openStandalone:p(y.body),closeStandalone:n((c||y).body)};if(i.openStrip.close&&d(y.body,null,!0),f){var A=i.inverseStrip;A.open&&l(y.body,null,!0),A.close&&d(c.body,null,!0),i.closeStrip.open&&l(_.body,null,!0),!this.options.ignoreStandalone&&n(y.body)&&p(c.body)&&(l(y.body),d(c.body))}else i.closeStrip.open&&l(y.body,null,!0);return m},r.prototype.Decorator=r.prototype.MustacheStatement=function(i){return i.strip},r.prototype.PartialStatement=r.prototype.CommentStatement=function(i){var y=i.strip||{};return{inlineStandalone:!0,open:y.open,close:y.close}},a.default=r,v.exports=a.default},function(v,a,h){"use strict";function r(){this.parents=[]}function n(g){this.acceptRequired(g,"path"),this.acceptArray(g.params),this.acceptKey(g,"hash")}function p(g){n.call(this,g),this.acceptKey(g,"program"),this.acceptKey(g,"inverse")}function d(g){this.acceptRequired(g,"name"),this.acceptArray(g.params),this.acceptKey(g,"hash")}var l=h(1).default;a.__esModule=!0;var s=h(6),u=l(s);r.prototype={constructor:r,mutating:!1,acceptKey:function(g,i){var y=this.accept(g[i]);if(this.mutating){if(y&&!r.prototype[y.type])throw new u.default('Unexpected node type "'+y.type+'" found when accepting '+i+" on "+g.type);g[i]=y}},acceptRequired:function(g,i){if(this.acceptKey(g,i),!g[i])throw new u.default(g.type+" requires "+i)},acceptArray:function(g){for(var i=0,y=g.length;i<y;i++)this.acceptKey(g,i),g[i]||(g.splice(i,1),i--,y--)},accept:function(g){if(g){if(!this[g.type])throw new u.default("Unknown type: "+g.type,g);this.current&&this.parents.unshift(this.current),this.current=g;var i=this[g.type](g);return this.current=this.parents.shift(),!this.mutating||i?i:i!==!1?g:void 0}},Program:function(g){this.acceptArray(g.body)},MustacheStatement:n,Decorator:n,BlockStatement:p,DecoratorBlock:p,PartialStatement:d,PartialBlockStatement:function(g){d.call(this,g),this.acceptKey(g,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:n,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(g){this.acceptArray(g.pairs)},HashPair:function(g){this.acceptRequired(g,"value")}},a.default=r,v.exports=a.default},function(v,a,h){"use strict";function r(A,S){if(S=S.path?S.path.original:S,A.path.original!==S){var b={loc:A.path.loc};throw new m.default(A.path.original+" doesn't match "+S,b)}}function n(A,S){this.source=A,this.start={line:S.first_line,column:S.first_column},this.end={line:S.last_line,column:S.last_column}}function p(A){return/^\[.*\]$/.test(A)?A.substring(1,A.length-1):A}function d(A,S){return{open:A.charAt(2)==="~",close:S.charAt(S.length-3)==="~"}}function l(A){return A.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function s(A,S,b){b=this.locInfo(b);for(var C=A?"@":"",w=[],P=0,I=0,N=S.length;I<N;I++){var R=S[I].part,T=S[I].original!==R;if(C+=(S[I].separator||"")+R,T||R!==".."&&R!=="."&&R!=="this")w.push(R);else{if(w.length>0)throw new m.default("Invalid path: "+C,{loc:b});R===".."&&P++}}return{type:"PathExpression",data:A,depth:P,parts:w,original:C,loc:b}}function u(A,S,b,C,w,P){var I=C.charAt(3)||C.charAt(2),N=I!=="{"&&I!=="&",R=/\*/.test(C);return{type:R?"Decorator":"MustacheStatement",path:A,params:S,hash:b,escaped:N,strip:w,loc:this.locInfo(P)}}function g(A,S,b,C){r(A,b),C=this.locInfo(C);var w={type:"Program",body:S,strip:{},loc:C};return{type:"BlockStatement",path:A.path,params:A.params,hash:A.hash,program:w,openStrip:{},inverseStrip:{},closeStrip:{},loc:C}}function i(A,S,b,C,w,P){C&&C.path&&r(A,C);var I=/\*/.test(A.open);S.blockParams=A.blockParams;var N=void 0,R=void 0;if(b){if(I)throw new m.default("Unexpected inverse block on decorator",b);b.chain&&(b.program.body[0].closeStrip=C.strip),R=b.strip,N=b.program}return w&&(w=N,N=S,S=w),{type:I?"DecoratorBlock":"BlockStatement",path:A.path,params:A.params,hash:A.hash,program:S,inverse:N,openStrip:A.strip,inverseStrip:R,closeStrip:C&&C.strip,loc:this.locInfo(P)}}function y(A,S){if(!S&&A.length){var b=A[0].loc,C=A[A.length-1].loc;b&&C&&(S={source:b.source,start:{line:b.start.line,column:b.start.column},end:{line:C.end.line,column:C.end.column}})}return{type:"Program",body:A,strip:{},loc:S}}function f(A,S,b,C){return r(A,b),{type:"PartialBlockStatement",name:A.path,params:A.params,hash:A.hash,program:S,openStrip:A.strip,closeStrip:b&&b.strip,loc:this.locInfo(C)}}var c=h(1).default;a.__esModule=!0,a.SourceLocation=n,a.id=p,a.stripFlags=d,a.stripComment=l,a.preparePath=s,a.prepareMustache=u,a.prepareRawBlock=g,a.prepareBlock=i,a.prepareProgram=y,a.preparePartialBlock=f;var _=h(6),m=c(_)},function(v,a,h){"use strict";function r(){}function n(m,A,S){if(m==null||typeof m!="string"&&m.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+m);A=A||{},"data"in A||(A.data=!0),A.compat&&(A.useDepths=!0);var b=S.parse(m,A),C=new S.Compiler().compile(b,A);return new S.JavaScriptCompiler().compile(C,A)}function p(m,A,S){function b(){var P=S.parse(m,A),I=new S.Compiler().compile(P,A),N=new S.JavaScriptCompiler().compile(I,A,void 0,!0);return S.template(N)}function C(P,I){return w||(w=b()),w.call(this,P,I)}if(A===void 0&&(A={}),m==null||typeof m!="string"&&m.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+m);A=y.extend({},A),"data"in A||(A.data=!0),A.compat&&(A.useDepths=!0);var w=void 0;return C._setup=function(P){return w||(w=b()),w._setup(P)},C._child=function(P,I,N,R){return w||(w=b()),w._child(P,I,N,R)},C}function d(m,A){if(m===A)return!0;if(y.isArray(m)&&y.isArray(A)&&m.length===A.length){for(var S=0;S<m.length;S++)if(!d(m[S],A[S]))return!1;return!0}}function l(m){if(!m.path.parts){var A=m.path;m.path={type:"PathExpression",data:!1,depth:0,parts:[A.original+""],original:A.original+"",loc:A.loc}}}var s=h(34).default,u=h(1).default;a.__esModule=!0,a.Compiler=r,a.precompile=n,a.compile=p;var g=h(6),i=u(g),y=h(5),f=h(45),c=u(f),_=[].slice;r.prototype={compiler:r,equals:function(m){var A=this.opcodes.length;if(m.opcodes.length!==A)return!1;for(var S=0;S<A;S++){var b=this.opcodes[S],C=m.opcodes[S];if(b.opcode!==C.opcode||!d(b.args,C.args))return!1}A=this.children.length;for(var S=0;S<A;S++)if(!this.children[S].equals(m.children[S]))return!1;return!0},guid:0,compile:function(m,A){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=A,this.stringParams=A.stringParams,this.trackIds=A.trackIds,A.blockParams=A.blockParams||[],A.knownHelpers=y.extend(s(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},A.knownHelpers),this.accept(m)},compileProgram:function(m){var A=new this.compiler,S=A.compile(m,this.options),b=this.guid++;return this.usePartial=this.usePartial||S.usePartial,this.children[b]=S,this.useDepths=this.useDepths||S.useDepths,b},accept:function(m){if(!this[m.type])throw new i.default("Unknown type: "+m.type,m);this.sourceNode.unshift(m);var A=this[m.type](m);return this.sourceNode.shift(),A},Program:function(m){this.options.blockParams.unshift(m.blockParams);for(var A=m.body,S=A.length,b=0;b<S;b++)this.accept(A[b]);return this.options.blockParams.shift(),this.isSimple=S===1,this.blockParams=m.blockParams?m.blockParams.length:0,this},BlockStatement:function(m){l(m);var A=m.program,S=m.inverse;A=A&&this.compileProgram(A),S=S&&this.compileProgram(S);var b=this.classifySexpr(m);b==="helper"?this.helperSexpr(m,A,S):b==="simple"?(this.simpleSexpr(m),this.opcode("pushProgram",A),this.opcode("pushProgram",S),this.opcode("emptyHash"),this.opcode("blockValue",m.path.original)):(this.ambiguousSexpr(m,A,S),this.opcode("pushProgram",A),this.opcode("pushProgram",S),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(m){var A=m.program&&this.compileProgram(m.program),S=this.setupFullMustacheParams(m,A,void 0),b=m.path;this.useDecorators=!0,this.opcode("registerDecorator",S.length,b.original)},PartialStatement:function(m){this.usePartial=!0;var A=m.program;A&&(A=this.compileProgram(m.program));var S=m.params;if(S.length>1)throw new i.default("Unsupported number of partial arguments: "+S.length,m);S.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):S.push({type:"PathExpression",parts:[],depth:0}));var b=m.name.original,C=m.name.type==="SubExpression";C&&this.accept(m.name),this.setupFullMustacheParams(m,A,void 0,!0);var w=m.indent||"";this.options.preventIndent&&w&&(this.opcode("appendContent",w),w=""),this.opcode("invokePartial",C,b,w),this.opcode("append")},PartialBlockStatement:function(m){this.PartialStatement(m)},MustacheStatement:function(m){this.SubExpression(m),m.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(m){this.DecoratorBlock(m)},ContentStatement:function(m){m.value&&this.opcode("appendContent",m.value)},CommentStatement:function(){},SubExpression:function(m){l(m);var A=this.classifySexpr(m);A==="simple"?this.simpleSexpr(m):A==="helper"?this.helperSexpr(m):this.ambiguousSexpr(m)},ambiguousSexpr:function(m,A,S){var b=m.path,C=b.parts[0],w=A!=null||S!=null;this.opcode("getContext",b.depth),this.opcode("pushProgram",A),this.opcode("pushProgram",S),b.strict=!0,this.accept(b),this.opcode("invokeAmbiguous",C,w)},simpleSexpr:function(m){var A=m.path;A.strict=!0,this.accept(A),this.opcode("resolvePossibleLambda")},helperSexpr:function(m,A,S){var b=this.setupFullMustacheParams(m,A,S),C=m.path,w=C.parts[0];if(this.options.knownHelpers[w])this.opcode("invokeKnownHelper",b.length,w);else{if(this.options.knownHelpersOnly)throw new i.default("You specified knownHelpersOnly, but used the unknown helper "+w,m);C.strict=!0,C.falsy=!0,this.accept(C),this.opcode("invokeHelper",b.length,C.original,c.default.helpers.simpleId(C))}},PathExpression:function(m){this.addDepth(m.depth),this.opcode("getContext",m.depth);var A=m.parts[0],S=c.default.helpers.scopedId(m),b=!m.depth&&!S&&this.blockParamIndex(A);b?this.opcode("lookupBlockParam",b,m.parts):A?m.data?(this.options.data=!0,this.opcode("lookupData",m.depth,m.parts,m.strict)):this.opcode("lookupOnContext",m.parts,m.falsy,m.strict,S):this.opcode("pushContext")},StringLiteral:function(m){this.opcode("pushString",m.value)},NumberLiteral:function(m){this.opcode("pushLiteral",m.value)},BooleanLiteral:function(m){this.opcode("pushLiteral",m.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(m){var A=m.pairs,S=0,b=A.length;for(this.opcode("pushHash");S<b;S++)this.pushParam(A[S].value);for(;S--;)this.opcode("assignToHash",A[S].key);this.opcode("popHash")},opcode:function(m){this.opcodes.push({opcode:m,args:_.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(m){m&&(this.useDepths=!0)},classifySexpr:function(m){var A=c.default.helpers.simpleId(m.path),S=A&&!!this.blockParamIndex(m.path.parts[0]),b=!S&&c.default.helpers.helperExpression(m),C=!S&&(b||A);if(C&&!b){var w=m.path.parts[0],P=this.options;P.knownHelpers[w]?b=!0:P.knownHelpersOnly&&(C=!1)}return b?"helper":C?"ambiguous":"simple"},pushParams:function(m){for(var A=0,S=m.length;A<S;A++)this.pushParam(m[A])},pushParam:function(m){var A=m.value!=null?m.value:m.original||"";if(this.stringParams)A.replace&&(A=A.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),m.depth&&this.addDepth(m.depth),this.opcode("getContext",m.depth||0),this.opcode("pushStringParam",A,m.type),m.type==="SubExpression"&&this.accept(m);else{if(this.trackIds){var S=void 0;if(!m.parts||c.default.helpers.scopedId(m)||m.depth||(S=this.blockParamIndex(m.parts[0])),S){var b=m.parts.slice(1).join(".");this.opcode("pushId","BlockParam",S,b)}else A=m.original||A,A.replace&&(A=A.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",m.type,A)}this.accept(m)}},setupFullMustacheParams:function(m,A,S,b){var C=m.params;return this.pushParams(C),this.opcode("pushProgram",A),this.opcode("pushProgram",S),m.hash?this.accept(m.hash):this.opcode("emptyHash",b),C},blockParamIndex:function(m){for(var A=0,S=this.options.blockParams.length;A<S;A++){var b=this.options.blockParams[A],C=b&&y.indexOf(b,m);if(b&&C>=0)return[A,C]}}}},function(v,a,h){"use strict";function r(c){this.value=c}function n(){}function p(c,_,m,A){var S=_.popStack(),b=0,C=m.length;for(c&&C--;b<C;b++)S=_.nameLookup(S,m[b],A);return c?[_.aliasable("container.strict"),"(",S,", ",_.quotedString(m[b]),", ",JSON.stringify(_.source.currentLocation)," )"]:S}var d=h(13).default,l=h(1).default;a.__esModule=!0;var s=h(4),u=h(6),g=l(u),i=h(5),y=h(53),f=l(y);n.prototype={nameLookup:function(c,_){return this.internalNameLookup(c,_)},depthedLookup:function(c){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(c),")"]},compilerInfo:function(){var c=s.COMPILER_REVISION,_=s.REVISION_CHANGES[c];return[c,_]},appendToBuffer:function(c,_,m){return i.isArray(c)||(c=[c]),c=this.source.wrap(c,_),this.environment.isSimple?["return ",c,";"]:m?["buffer += ",c,";"]:(c.appendToBuffer=!0,c)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(c,_){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",c,",",JSON.stringify(_),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(c,_,m,A){this.environment=c,this.options=_,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!A,this.name=this.environment.name,this.isChild=!!m,this.context=m||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(c,_),this.useDepths=this.useDepths||c.useDepths||c.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||c.useBlockParams;var S=c.opcodes,b=void 0,C=void 0,w=void 0,P=void 0;for(w=0,P=S.length;w<P;w++)b=S[w],this.source.currentLocation=b.loc,C=C||b.loc,this[b.opcode].apply(this,b.args);if(this.source.currentLocation=C,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new g.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),A?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var I=this.createFunctionContext(A);if(this.isChild)return I;var N={compiler:this.compilerInfo(),main:I};this.decorators&&(N.main_d=this.decorators,N.useDecorators=!0);var R=this.context,T=R.programs,L=R.decorators;for(w=0,P=T.length;w<P;w++)T[w]&&(N[w]=T[w],L[w]&&(N[w+"_d"]=L[w],N.useDecorators=!0));return this.environment.usePartial&&(N.usePartial=!0),this.options.data&&(N.useData=!0),this.useDepths&&(N.useDepths=!0),this.useBlockParams&&(N.useBlockParams=!0),this.options.compat&&(N.compat=!0),A?N.compilerOptions=this.options:(N.compiler=JSON.stringify(N.compiler),this.source.currentLocation={start:{line:1,column:0}},N=this.objectLiteral(N),_.srcName?(N=N.toStringWithSourceMap({file:_.destName}),N.map=N.map&&N.map.toString()):N=N.toString()),N},preamble:function(){this.lastContext=0,this.source=new f.default(this.options.srcName),this.decorators=new f.default(this.options.srcName)},createFunctionContext:function(c){var _=this,m="",A=this.stackVars.concat(this.registers.list);A.length>0&&(m+=", "+A.join(", "));var S=0;d(this.aliases).forEach(function(w){var P=_.aliases[w];P.children&&P.referenceCount>1&&(m+=", alias"+ ++S+"="+w,P.children[0]="alias"+S)}),this.lookupPropertyFunctionIsUsed&&(m+=", "+this.lookupPropertyFunctionVarDeclaration());var b=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&b.push("blockParams"),this.useDepths&&b.push("depths");var C=this.mergeSource(m);return c?(b.push(C),Function.apply(this,b)):this.source.wrap(["function(",b.join(","),`) {
  `,C,"}"])},mergeSource:function(c){var _=this.environment.isSimple,m=!this.forceBuffer,A=void 0,S=void 0,b=void 0,C=void 0;return this.source.each(function(w){w.appendToBuffer?(b?w.prepend("  + "):b=w,C=w):(b&&(S?b.prepend("buffer += "):A=!0,C.add(";"),b=C=void 0),S=!0,_||(m=!1))}),m?b?(b.prepend("return "),C.add(";")):S||this.source.push('return "";'):(c+=", buffer = "+(A?"":this.initializeBuffer()),b?(b.prepend("return buffer + "),C.add(";")):this.source.push("return buffer;")),c&&this.source.prepend("var "+c.substring(2)+(A?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(c){var _=this.aliasable("container.hooks.blockHelperMissing"),m=[this.contextName(0)];this.setupHelperArgs(c,0,m);var A=this.popStack();m.splice(1,0,A),this.push(this.source.functionCall(_,"call",m))},ambiguousBlockValue:function(){var c=this.aliasable("container.hooks.blockHelperMissing"),_=[this.contextName(0)];this.setupHelperArgs("",0,_,!0),this.flushInline();var m=this.topStack();_.splice(1,0,m),this.pushSource(["if (!",this.lastHelper,") { ",m," = ",this.source.functionCall(c,"call",_),"}"])},appendContent:function(c){this.pendingContent?c=this.pendingContent+c:this.pendingLocation=this.source.currentLocation,this.pendingContent=c},append:function(){if(this.isInline())this.replaceStack(function(_){return[" != null ? ",_,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var c=this.popStack();this.pushSource(["if (",c," != null) { ",this.appendToBuffer(c,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(c){this.lastContext=c},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(c,_,m,A){var S=0;A||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(c[S++])),this.resolvePath("context",c,S,_,m)},lookupBlockParam:function(c,_){this.useBlockParams=!0,this.push(["blockParams[",c[0],"][",c[1],"]"]),this.resolvePath("context",_,1)},lookupData:function(c,_,m){c?this.pushStackLiteral("container.data(data, "+c+")"):this.pushStackLiteral("data"),this.resolvePath("data",_,0,!0,m)},resolvePath:function(c,_,m,A,S){var b=this;if(this.options.strict||this.options.assumeObjects)return void this.push(p(this.options.strict&&S,this,_,c));for(var C=_.length;m<C;m++)this.replaceStack(function(w){var P=b.nameLookup(w,_[m],c);return A?[" && ",P]:[" != null ? ",P," : ",w]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(c,_){this.pushContext(),this.pushString(_),_!=="SubExpression"&&(typeof c=="string"?this.pushString(c):this.pushStackLiteral(c))},emptyHash:function(c){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(c?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var c=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(c.ids)),this.stringParams&&(this.push(this.objectLiteral(c.contexts)),this.push(this.objectLiteral(c.types))),this.push(this.objectLiteral(c.values))},pushString:function(c){this.pushStackLiteral(this.quotedString(c))},pushLiteral:function(c){this.pushStackLiteral(c)},pushProgram:function(c){c!=null?this.pushStackLiteral(this.programExpression(c)):this.pushStackLiteral(null)},registerDecorator:function(c,_){var m=this.nameLookup("decorators",_,"decorator"),A=this.setupHelperArgs(_,c);this.decorators.push(["fn = ",this.decorators.functionCall(m,"",["fn","props","container",A])," || fn;"])},invokeHelper:function(c,_,m){var A=this.popStack(),S=this.setupHelper(c,_),b=[];m&&b.push(S.name),b.push(A),this.options.strict||b.push(this.aliasable("container.hooks.helperMissing"));var C=["(",this.itemsSeparatedBy(b,"||"),")"],w=this.source.functionCall(C,"call",S.callParams);this.push(w)},itemsSeparatedBy:function(c,_){var m=[];m.push(c[0]);for(var A=1;A<c.length;A++)m.push(_,c[A]);return m},invokeKnownHelper:function(c,_){var m=this.setupHelper(c,_);this.push(this.source.functionCall(m.name,"call",m.callParams))},invokeAmbiguous:function(c,_){this.useRegister("helper");var m=this.popStack();this.emptyHash();var A=this.setupHelper(0,c,_),S=this.lastHelper=this.nameLookup("helpers",c,"helper"),b=["(","(helper = ",S," || ",m,")"];this.options.strict||(b[0]="(helper = ",b.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",b,A.paramsInit?["),(",A.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",A.callParams)," : helper))"])},invokePartial:function(c,_,m){var A=[],S=this.setupParams(_,1,A);c&&(_=this.popStack(),delete S.name),m&&(S.indent=JSON.stringify(m)),S.helpers="helpers",S.partials="partials",S.decorators="container.decorators",c?A.unshift(_):A.unshift(this.nameLookup("partials",_,"partial")),this.options.compat&&(S.depths="depths"),S=this.objectLiteral(S),A.push(S),this.push(this.source.functionCall("container.invokePartial","",A))},assignToHash:function(c){var _=this.popStack(),m=void 0,A=void 0,S=void 0;this.trackIds&&(S=this.popStack()),this.stringParams&&(A=this.popStack(),m=this.popStack());var b=this.hash;m&&(b.contexts[c]=m),A&&(b.types[c]=A),S&&(b.ids[c]=S),b.values[c]=_},pushId:function(c,_,m){c==="BlockParam"?this.pushStackLiteral("blockParams["+_[0]+"].path["+_[1]+"]"+(m?" + "+JSON.stringify("."+m):"")):c==="PathExpression"?this.pushString(_):c==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:n,compileChildren:function(c,_){for(var m=c.children,A=void 0,S=void 0,b=0,C=m.length;b<C;b++){A=m[b],S=new this.compiler;var w=this.matchExistingProgram(A);if(w==null){this.context.programs.push("");var P=this.context.programs.length;A.index=P,A.name="program"+P,this.context.programs[P]=S.compile(A,_,this.context,!this.precompile),this.context.decorators[P]=S.decorators,this.context.environments[P]=A,this.useDepths=this.useDepths||S.useDepths,this.useBlockParams=this.useBlockParams||S.useBlockParams,A.useDepths=this.useDepths,A.useBlockParams=this.useBlockParams}else A.index=w.index,A.name="program"+w.index,this.useDepths=this.useDepths||w.useDepths,this.useBlockParams=this.useBlockParams||w.useBlockParams}},matchExistingProgram:function(c){for(var _=0,m=this.context.environments.length;_<m;_++){var A=this.context.environments[_];if(A&&A.equals(c))return A}},programExpression:function(c){var _=this.environment.children[c],m=[_.index,"data",_.blockParams];return(this.useBlockParams||this.useDepths)&&m.push("blockParams"),this.useDepths&&m.push("depths"),"container.program("+m.join(", ")+")"},useRegister:function(c){this.registers[c]||(this.registers[c]=!0,this.registers.list.push(c))},push:function(c){return c instanceof r||(c=this.source.wrap(c)),this.inlineStack.push(c),c},pushStackLiteral:function(c){this.push(new r(c))},pushSource:function(c){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),c&&this.source.push(c)},replaceStack:function(c){var _=["("],m=void 0,A=void 0,S=void 0;if(!this.isInline())throw new g.default("replaceStack on non-inline");var b=this.popStack(!0);if(b instanceof r)m=[b.value],_=["(",m],S=!0;else{A=!0;var C=this.incrStack();_=["((",this.push(C)," = ",b,")"],m=this.topStack()}var w=c.call(this,m);S||this.popStack(),A&&this.stackSlot--,this.push(_.concat(w,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var c=this.inlineStack;this.inlineStack=[];for(var _=0,m=c.length;_<m;_++){var A=c[_];if(A instanceof r)this.compileStack.push(A);else{var S=this.incrStack();this.pushSource([S," = ",A,";"]),this.compileStack.push(S)}}},isInline:function(){return this.inlineStack.length},popStack:function(c){var _=this.isInline(),m=(_?this.inlineStack:this.compileStack).pop();if(!c&&m instanceof r)return m.value;if(!_){if(!this.stackSlot)throw new g.default("Invalid stack pop");this.stackSlot--}return m},topStack:function(){var c=this.isInline()?this.inlineStack:this.compileStack,_=c[c.length-1];return _ instanceof r?_.value:_},contextName:function(c){return this.useDepths&&c?"depths["+c+"]":"depth"+c},quotedString:function(c){return this.source.quotedString(c)},objectLiteral:function(c){return this.source.objectLiteral(c)},aliasable:function(c){var _=this.aliases[c];return _?(_.referenceCount++,_):(_=this.aliases[c]=this.source.wrap(c),_.aliasable=!0,_.referenceCount=1,_)},setupHelper:function(c,_,m){var A=[],S=this.setupHelperArgs(_,c,A,m),b=this.nameLookup("helpers",_,"helper"),C=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:A,paramsInit:S,name:b,callParams:[C].concat(A)}},setupParams:function(c,_,m){var A={},S=[],b=[],C=[],w=!m,P=void 0;w&&(m=[]),A.name=this.quotedString(c),A.hash=this.popStack(),this.trackIds&&(A.hashIds=this.popStack()),this.stringParams&&(A.hashTypes=this.popStack(),A.hashContexts=this.popStack());var I=this.popStack(),N=this.popStack();(N||I)&&(A.fn=N||"container.noop",A.inverse=I||"container.noop");for(var R=_;R--;)P=this.popStack(),m[R]=P,this.trackIds&&(C[R]=this.popStack()),this.stringParams&&(b[R]=this.popStack(),S[R]=this.popStack());return w&&(A.args=this.source.generateArray(m)),this.trackIds&&(A.ids=this.source.generateArray(C)),this.stringParams&&(A.types=this.source.generateArray(b),A.contexts=this.source.generateArray(S)),this.options.data&&(A.data="data"),this.useBlockParams&&(A.blockParams="blockParams"),A},setupHelperArgs:function(c,_,m,A){var S=this.setupParams(c,_,m);return S.loc=JSON.stringify(this.source.currentLocation),S=this.objectLiteral(S),A?(this.useRegister("options"),m.push("options"),["options=",S]):m?(m.push(S),""):S}},function(){for(var c="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),_=n.RESERVED_WORDS={},m=0,A=c.length;m<A;m++)_[c[m]]=!0}(),n.isValidJavaScriptVariableName=function(c){return!n.RESERVED_WORDS[c]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(c)},a.default=n,v.exports=a.default},function(v,a,h){"use strict";function r(s,u,g){if(d.isArray(s)){for(var i=[],y=0,f=s.length;y<f;y++)i.push(u.wrap(s[y],g));return i}return typeof s=="boolean"||typeof s=="number"?s+"":s}function n(s){this.srcFile=s,this.source=[]}var p=h(13).default;a.__esModule=!0;var d=h(5),l=void 0;try{}catch(s){}l||(l=function(s,u,g,i){this.src="",i&&this.add(i)},l.prototype={add:function(s){d.isArray(s)&&(s=s.join("")),this.src+=s},prepend:function(s){d.isArray(s)&&(s=s.join("")),this.src=s+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),n.prototype={isEmpty:function(){return!this.source.length},prepend:function(s,u){this.source.unshift(this.wrap(s,u))},push:function(s,u){this.source.push(this.wrap(s,u))},merge:function(){var s=this.empty();return this.each(function(u){s.add(["  ",u,`
`])}),s},each:function(s){for(var u=0,g=this.source.length;u<g;u++)s(this.source[u])},empty:function(){var s=this.currentLocation||{start:{}};return new l(s.start.line,s.start.column,this.srcFile)},wrap:function(s){var u=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return s instanceof l?s:(s=r(s,this,u),new l(u.start.line,u.start.column,this.srcFile,s))},functionCall:function(s,u,g){return g=this.generateList(g),this.wrap([s,u?"."+u+"(":"(",g,")"])},quotedString:function(s){return'"'+(s+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(s){var u=this,g=[];p(s).forEach(function(y){var f=r(s[y],u);f!=="undefined"&&g.push([u.quotedString(y),":",f])});var i=this.generateList(g);return i.prepend("{"),i.add("}"),i},generateList:function(s){for(var u=this.empty(),g=0,i=s.length;g<i;g++)g&&u.add(","),u.add(r(s[g],this));return u},generateArray:function(s){var u=this.generateList(s);return u.prepend("["),u.add("]"),u}},a.default=n,v.exports=a.default}])})},9414:(x,v,a)=>{var h;/*!
* Sizzle CSS Selector Engine v2.3.9
* https://sizzlejs.com/
*
* Copyright JS Foundation and other contributors
* Released under the MIT license
* https://js.foundation/
*
* Date: 2022-12-19
*/(function(r){var n,p,d,l,s,u,g,i,y,f,c,_,m,A,S,b,C,w,P,I="sizzle"+1*new Date,N=r.document,R=0,T=0,L=He(),H=He(),$=He(),Y=He(),O=function(B,z){return B===z&&(c=!0),0},U={}.hasOwnProperty,M=[],K=M.pop,G=M.push,te=M.push,se=M.slice,pe=function(B,z){for(var X=0,ae=B.length;X<ae;X++)if(B[X]===z)return X;return-1},ee="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",he="[\\x20\\t\\r\\n\\f]",be="(?:\\\\[\\da-fA-F]{1,6}"+he+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Te="\\["+he+"*("+be+")(?:"+he+"*([*^$|!~]?=)"+he+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+be+"))|)"+he+"*\\]",je=":("+be+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Te+")*)|.*)\\)|)",ht=new RegExp(he+"+","g"),gt=new RegExp("^"+he+"+|((?:^|[^\\\\])(?:\\\\.)*)"+he+"+$","g"),_t=new RegExp("^"+he+"*,"+he+"*"),Dt=new RegExp("^"+he+"*([>+~]|"+he+")"+he+"*"),Be=new RegExp(he+"|>"),St=new RegExp(je),Me=new RegExp("^"+be+"$"),Xe={ID:new RegExp("^#("+be+")"),CLASS:new RegExp("^\\.("+be+")"),TAG:new RegExp("^("+be+"|[*])"),ATTR:new RegExp("^"+Te),PSEUDO:new RegExp("^"+je),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+he+"*(even|odd|(([+-]|)(\\d*)n|)"+he+"*(?:([+-]|)"+he+"*(\\d+)|))"+he+"*\\)|)","i"),bool:new RegExp("^(?:"+ee+")$","i"),needsContext:new RegExp("^"+he+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+he+"*((?:-\\d)?\\d*)"+he+"*\\)|)(?=[^-]|$)","i")},Xt=/HTML$/i,On=/^(?:input|select|textarea|button)$/i,ft=/^h\d$/i,Le=/^[^{]+\{\s*\[native \w/,de=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Pe=/[+~]/,xe=new RegExp("\\\\[\\da-fA-F]{1,6}"+he+"?|\\\\([^\\r\\n\\f])","g"),re=function(B,z){var X="0x"+B.slice(1)-65536;return z||(X<0?String.fromCharCode(X+65536):String.fromCharCode(X>>10|55296,X&1023|56320))},_e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ye=function(B,z){return z?B==="\0"?"\uFFFD":B.slice(0,-1)+"\\"+B.charCodeAt(B.length-1).toString(16)+" ":"\\"+B},ve=function(){_()},Ne=It(function(B){return B.disabled===!0&&B.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{te.apply(M=se.call(N.childNodes),N.childNodes),M[N.childNodes.length].nodeType}catch(B){te={apply:M.length?function(z,X){G.apply(z,se.call(X))}:function(z,X){for(var ae=z.length,q=0;z[ae++]=X[q++];);z.length=ae-1}}}function we(B,z,X,ae){var q,le,J,j,ne,ue,me,Ee=z&&z.ownerDocument,Ae=z?z.nodeType:9;if(X=X||[],typeof B!="string"||!B||Ae!==1&&Ae!==9&&Ae!==11)return X;if(!ae&&(_(z),z=z||m,S)){if(Ae!==11&&(ne=de.exec(B)))if(q=ne[1]){if(Ae===9)if(J=z.getElementById(q)){if(J.id===q)return X.push(J),X}else return X;else if(Ee&&(J=Ee.getElementById(q))&&P(z,J)&&J.id===q)return X.push(J),X}else{if(ne[2])return te.apply(X,z.getElementsByTagName(B)),X;if((q=ne[3])&&p.getElementsByClassName&&z.getElementsByClassName)return te.apply(X,z.getElementsByClassName(q)),X}if(p.qsa&&!Y[B+" "]&&(!b||!b.test(B))&&(Ae!==1||z.nodeName.toLowerCase()!=="object")){if(me=B,Ee=z,Ae===1&&(Be.test(B)||Dt.test(B))){for(Ee=Pe.test(B)&&Jt(z.parentNode)||z,(Ee!==z||!p.scope)&&((j=z.getAttribute("id"))?j=j.replace(_e,ye):z.setAttribute("id",j=I)),ue=u(B),le=ue.length;le--;)ue[le]=(j?"#"+j:":scope")+" "+wn(ue[le]);me=ue.join(",")}try{if(p.cssSupportsSelector&&!CSS.supports("selector(:is("+me+"))"))throw new Error;return te.apply(X,Ee.querySelectorAll(me)),X}catch(Ue){Y(B,!0)}finally{j===I&&z.removeAttribute("id")}}}return i(B.replace(gt,"$1"),z,X,ae)}function He(){var B=[];function z(X,ae){return B.push(X+" ")>d.cacheLength&&delete z[B.shift()],z[X+" "]=ae}return z}function $e(B){return B[I]=!0,B}function Ge(B){var z=m.createElement("fieldset");try{return!!B(z)}catch(X){return!1}finally{z.parentNode&&z.parentNode.removeChild(z),z=null}}function ut(B,z){for(var X=B.split("|"),ae=X.length;ae--;)d.attrHandle[X[ae]]=z}function pt(B,z){var X=z&&B,ae=X&&B.nodeType===1&&z.nodeType===1&&B.sourceIndex-z.sourceIndex;if(ae)return ae;if(X){for(;X=X.nextSibling;)if(X===z)return-1}return B?1:-1}function sn(B){return function(z){var X=z.nodeName.toLowerCase();return X==="input"&&z.type===B}}function Ut(B){return function(z){var X=z.nodeName.toLowerCase();return(X==="input"||X==="button")&&z.type===B}}function Tt(B){return function(z){return"form"in z?z.parentNode&&z.disabled===!1?"label"in z?"label"in z.parentNode?z.parentNode.disabled===B:z.disabled===B:z.isDisabled===B||z.isDisabled!==!B&&Ne(z)===B:z.disabled===B:"label"in z?z.disabled===B:!1}}function Ft(B){return $e(function(z){return z=+z,$e(function(X,ae){for(var q,le=B([],X.length,z),J=le.length;J--;)X[q=le[J]]&&(X[q]=!(ae[q]=X[q]))})})}function Jt(B){return B&&typeof B.getElementsByTagName!="undefined"&&B}p=we.support={},s=we.isXML=function(B){var z=B&&B.namespaceURI,X=B&&(B.ownerDocument||B).documentElement;return!Xt.test(z||X&&X.nodeName||"HTML")},_=we.setDocument=function(B){var z,X,ae=B?B.ownerDocument||B:N;return ae==m||ae.nodeType!==9||!ae.documentElement||(m=ae,A=m.documentElement,S=!s(m),N!=m&&(X=m.defaultView)&&X.top!==X&&(X.addEventListener?X.addEventListener("unload",ve,!1):X.attachEvent&&X.attachEvent("onunload",ve)),p.scope=Ge(function(q){return A.appendChild(q).appendChild(m.createElement("div")),typeof q.querySelectorAll!="undefined"&&!q.querySelectorAll(":scope fieldset div").length}),p.cssSupportsSelector=Ge(function(){return CSS.supports("selector(*)")&&m.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")}),p.attributes=Ge(function(q){return q.className="i",!q.getAttribute("className")}),p.getElementsByTagName=Ge(function(q){return q.appendChild(m.createComment("")),!q.getElementsByTagName("*").length}),p.getElementsByClassName=Le.test(m.getElementsByClassName),p.getById=Ge(function(q){return A.appendChild(q).id=I,!m.getElementsByName||!m.getElementsByName(I).length}),p.getById?(d.filter.ID=function(q){var le=q.replace(xe,re);return function(J){return J.getAttribute("id")===le}},d.find.ID=function(q,le){if(typeof le.getElementById!="undefined"&&S){var J=le.getElementById(q);return J?[J]:[]}}):(d.filter.ID=function(q){var le=q.replace(xe,re);return function(J){var j=typeof J.getAttributeNode!="undefined"&&J.getAttributeNode("id");return j&&j.value===le}},d.find.ID=function(q,le){if(typeof le.getElementById!="undefined"&&S){var J,j,ne,ue=le.getElementById(q);if(ue){if(J=ue.getAttributeNode("id"),J&&J.value===q)return[ue];for(ne=le.getElementsByName(q),j=0;ue=ne[j++];)if(J=ue.getAttributeNode("id"),J&&J.value===q)return[ue]}return[]}}),d.find.TAG=p.getElementsByTagName?function(q,le){if(typeof le.getElementsByTagName!="undefined")return le.getElementsByTagName(q);if(p.qsa)return le.querySelectorAll(q)}:function(q,le){var J,j=[],ne=0,ue=le.getElementsByTagName(q);if(q==="*"){for(;J=ue[ne++];)J.nodeType===1&&j.push(J);return j}return ue},d.find.CLASS=p.getElementsByClassName&&function(q,le){if(typeof le.getElementsByClassName!="undefined"&&S)return le.getElementsByClassName(q)},C=[],b=[],(p.qsa=Le.test(m.querySelectorAll))&&(Ge(function(q){var le;A.appendChild(q).innerHTML="<a id='"+I+"'></a><select id='"+I+"-\r\\' msallowcapture=''><option selected=''></option></select>",q.querySelectorAll("[msallowcapture^='']").length&&b.push("[*^$]="+he+`*(?:''|"")`),q.querySelectorAll("[selected]").length||b.push("\\["+he+"*(?:value|"+ee+")"),q.querySelectorAll("[id~="+I+"-]").length||b.push("~="),le=m.createElement("input"),le.setAttribute("name",""),q.appendChild(le),q.querySelectorAll("[name='']").length||b.push("\\["+he+"*name"+he+"*="+he+`*(?:''|"")`),q.querySelectorAll(":checked").length||b.push(":checked"),q.querySelectorAll("a#"+I+"+*").length||b.push(".#.+[+~]"),q.querySelectorAll("\\\f"),b.push("[\\r\\n\\f]")}),Ge(function(q){q.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var le=m.createElement("input");le.setAttribute("type","hidden"),q.appendChild(le).setAttribute("name","D"),q.querySelectorAll("[name=d]").length&&b.push("name"+he+"*[*^$|!~]?="),q.querySelectorAll(":enabled").length!==2&&b.push(":enabled",":disabled"),A.appendChild(q).disabled=!0,q.querySelectorAll(":disabled").length!==2&&b.push(":enabled",":disabled"),q.querySelectorAll("*,:x"),b.push(",.*:")})),(p.matchesSelector=Le.test(w=A.matches||A.webkitMatchesSelector||A.mozMatchesSelector||A.oMatchesSelector||A.msMatchesSelector))&&Ge(function(q){p.disconnectedMatch=w.call(q,"*"),w.call(q,"[s!='']:x"),C.push("!=",je)}),p.cssSupportsSelector||b.push(":has"),b=b.length&&new RegExp(b.join("|")),C=C.length&&new RegExp(C.join("|")),z=Le.test(A.compareDocumentPosition),P=z||Le.test(A.contains)?function(q,le){var J=q.nodeType===9&&q.documentElement||q,j=le&&le.parentNode;return q===j||!!(j&&j.nodeType===1&&(J.contains?J.contains(j):q.compareDocumentPosition&&q.compareDocumentPosition(j)&16))}:function(q,le){if(le){for(;le=le.parentNode;)if(le===q)return!0}return!1},O=z?function(q,le){if(q===le)return c=!0,0;var J=!q.compareDocumentPosition-!le.compareDocumentPosition;return J||(J=(q.ownerDocument||q)==(le.ownerDocument||le)?q.compareDocumentPosition(le):1,J&1||!p.sortDetached&&le.compareDocumentPosition(q)===J?q==m||q.ownerDocument==N&&P(N,q)?-1:le==m||le.ownerDocument==N&&P(N,le)?1:f?pe(f,q)-pe(f,le):0:J&4?-1:1)}:function(q,le){if(q===le)return c=!0,0;var J,j=0,ne=q.parentNode,ue=le.parentNode,me=[q],Ee=[le];if(!ne||!ue)return q==m?-1:le==m?1:ne?-1:ue?1:f?pe(f,q)-pe(f,le):0;if(ne===ue)return pt(q,le);for(J=q;J=J.parentNode;)me.unshift(J);for(J=le;J=J.parentNode;)Ee.unshift(J);for(;me[j]===Ee[j];)j++;return j?pt(me[j],Ee[j]):me[j]==N?-1:Ee[j]==N?1:0}),m},we.matches=function(B,z){return we(B,null,null,z)},we.matchesSelector=function(B,z){if(_(B),p.matchesSelector&&S&&!Y[z+" "]&&(!C||!C.test(z))&&(!b||!b.test(z)))try{var X=w.call(B,z);if(X||p.disconnectedMatch||B.document&&B.document.nodeType!==11)return X}catch(ae){Y(z,!0)}return we(z,m,null,[B]).length>0},we.contains=function(B,z){return(B.ownerDocument||B)!=m&&_(B),P(B,z)},we.attr=function(B,z){(B.ownerDocument||B)!=m&&_(B);var X=d.attrHandle[z.toLowerCase()],ae=X&&U.call(d.attrHandle,z.toLowerCase())?X(B,z,!S):void 0;return ae!==void 0?ae:p.attributes||!S?B.getAttribute(z):(ae=B.getAttributeNode(z))&&ae.specified?ae.value:null},we.escape=function(B){return(B+"").replace(_e,ye)},we.error=function(B){throw new Error("Syntax error, unrecognized expression: "+B)},we.uniqueSort=function(B){var z,X=[],ae=0,q=0;if(c=!p.detectDuplicates,f=!p.sortStable&&B.slice(0),B.sort(O),c){for(;z=B[q++];)z===B[q]&&(ae=X.push(q));for(;ae--;)B.splice(X[ae],1)}return f=null,B},l=we.getText=function(B){var z,X="",ae=0,q=B.nodeType;if(q){if(q===1||q===9||q===11){if(typeof B.textContent=="string")return B.textContent;for(B=B.firstChild;B;B=B.nextSibling)X+=l(B)}else if(q===3||q===4)return B.nodeValue}else for(;z=B[ae++];)X+=l(z);return X},d=we.selectors={cacheLength:50,createPseudo:$e,match:Xe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(B){return B[1]=B[1].replace(xe,re),B[3]=(B[3]||B[4]||B[5]||"").replace(xe,re),B[2]==="~="&&(B[3]=" "+B[3]+" "),B.slice(0,4)},CHILD:function(B){return B[1]=B[1].toLowerCase(),B[1].slice(0,3)==="nth"?(B[3]||we.error(B[0]),B[4]=+(B[4]?B[5]+(B[6]||1):2*(B[3]==="even"||B[3]==="odd")),B[5]=+(B[7]+B[8]||B[3]==="odd")):B[3]&&we.error(B[0]),B},PSEUDO:function(B){var z,X=!B[6]&&B[2];return Xe.CHILD.test(B[0])?null:(B[3]?B[2]=B[4]||B[5]||"":X&&St.test(X)&&(z=u(X,!0))&&(z=X.indexOf(")",X.length-z)-X.length)&&(B[0]=B[0].slice(0,z),B[2]=X.slice(0,z)),B.slice(0,3))}},filter:{TAG:function(B){var z=B.replace(xe,re).toLowerCase();return B==="*"?function(){return!0}:function(X){return X.nodeName&&X.nodeName.toLowerCase()===z}},CLASS:function(B){var z=L[B+" "];return z||(z=new RegExp("(^|"+he+")"+B+"("+he+"|$)"))&&L(B,function(X){return z.test(typeof X.className=="string"&&X.className||typeof X.getAttribute!="undefined"&&X.getAttribute("class")||"")})},ATTR:function(B,z,X){return function(ae){var q=we.attr(ae,B);return q==null?z==="!=":z?(q+="",z==="="?q===X:z==="!="?q!==X:z==="^="?X&&q.indexOf(X)===0:z==="*="?X&&q.indexOf(X)>-1:z==="$="?X&&q.slice(-X.length)===X:z==="~="?(" "+q.replace(ht," ")+" ").indexOf(X)>-1:z==="|="?q===X||q.slice(0,X.length+1)===X+"-":!1):!0}},CHILD:function(B,z,X,ae,q){var le=B.slice(0,3)!=="nth",J=B.slice(-4)!=="last",j=z==="of-type";return ae===1&&q===0?function(ne){return!!ne.parentNode}:function(ne,ue,me){var Ee,Ae,Ue,De,nt,ot,We=le!==J?"nextSibling":"previousSibling",Re=ne.parentNode,gn=j&&ne.nodeName.toLowerCase(),Pn=!me&&!j,Et=!1;if(Re){if(le){for(;We;){for(De=ne;De=De[We];)if(j?De.nodeName.toLowerCase()===gn:De.nodeType===1)return!1;ot=We=B==="only"&&!ot&&"nextSibling"}return!0}if(ot=[J?Re.firstChild:Re.lastChild],J&&Pn){for(De=Re,Ue=De[I]||(De[I]={}),Ae=Ue[De.uniqueID]||(Ue[De.uniqueID]={}),Ee=Ae[B]||[],nt=Ee[0]===R&&Ee[1],Et=nt&&Ee[2],De=nt&&Re.childNodes[nt];De=++nt&&De&&De[We]||(Et=nt=0)||ot.pop();)if(De.nodeType===1&&++Et&&De===ne){Ae[B]=[R,nt,Et];break}}else if(Pn&&(De=ne,Ue=De[I]||(De[I]={}),Ae=Ue[De.uniqueID]||(Ue[De.uniqueID]={}),Ee=Ae[B]||[],nt=Ee[0]===R&&Ee[1],Et=nt),Et===!1)for(;(De=++nt&&De&&De[We]||(Et=nt=0)||ot.pop())&&!((j?De.nodeName.toLowerCase()===gn:De.nodeType===1)&&++Et&&(Pn&&(Ue=De[I]||(De[I]={}),Ae=Ue[De.uniqueID]||(Ue[De.uniqueID]={}),Ae[B]=[R,Et]),De===ne)););return Et-=q,Et===ae||Et%ae===0&&Et/ae>=0}}},PSEUDO:function(B,z){var X,ae=d.pseudos[B]||d.setFilters[B.toLowerCase()]||we.error("unsupported pseudo: "+B);return ae[I]?ae(z):ae.length>1?(X=[B,B,"",z],d.setFilters.hasOwnProperty(B.toLowerCase())?$e(function(q,le){for(var J,j=ae(q,z),ne=j.length;ne--;)J=pe(q,j[ne]),q[J]=!(le[J]=j[ne])}):function(q){return ae(q,0,X)}):ae}},pseudos:{not:$e(function(B){var z=[],X=[],ae=g(B.replace(gt,"$1"));return ae[I]?$e(function(q,le,J,j){for(var ne,ue=ae(q,null,j,[]),me=q.length;me--;)(ne=ue[me])&&(q[me]=!(le[me]=ne))}):function(q,le,J){return z[0]=q,ae(z,null,J,X),z[0]=null,!X.pop()}}),has:$e(function(B){return function(z){return we(B,z).length>0}}),contains:$e(function(B){return B=B.replace(xe,re),function(z){return(z.textContent||l(z)).indexOf(B)>-1}}),lang:$e(function(B){return Me.test(B||"")||we.error("unsupported lang: "+B),B=B.replace(xe,re).toLowerCase(),function(z){var X;do if(X=S?z.lang:z.getAttribute("xml:lang")||z.getAttribute("lang"))return X=X.toLowerCase(),X===B||X.indexOf(B+"-")===0;while((z=z.parentNode)&&z.nodeType===1);return!1}}),target:function(B){var z=r.location&&r.location.hash;return z&&z.slice(1)===B.id},root:function(B){return B===A},focus:function(B){return B===m.activeElement&&(!m.hasFocus||m.hasFocus())&&!!(B.type||B.href||~B.tabIndex)},enabled:Tt(!1),disabled:Tt(!0),checked:function(B){var z=B.nodeName.toLowerCase();return z==="input"&&!!B.checked||z==="option"&&!!B.selected},selected:function(B){return B.parentNode&&B.parentNode.selectedIndex,B.selected===!0},empty:function(B){for(B=B.firstChild;B;B=B.nextSibling)if(B.nodeType<6)return!1;return!0},parent:function(B){return!d.pseudos.empty(B)},header:function(B){return ft.test(B.nodeName)},input:function(B){return On.test(B.nodeName)},button:function(B){var z=B.nodeName.toLowerCase();return z==="input"&&B.type==="button"||z==="button"},text:function(B){var z;return B.nodeName.toLowerCase()==="input"&&B.type==="text"&&((z=B.getAttribute("type"))==null||z.toLowerCase()==="text")},first:Ft(function(){return[0]}),last:Ft(function(B,z){return[z-1]}),eq:Ft(function(B,z,X){return[X<0?X+z:X]}),even:Ft(function(B,z){for(var X=0;X<z;X+=2)B.push(X);return B}),odd:Ft(function(B,z){for(var X=1;X<z;X+=2)B.push(X);return B}),lt:Ft(function(B,z,X){for(var ae=X<0?X+z:X>z?z:X;--ae>=0;)B.push(ae);return B}),gt:Ft(function(B,z,X){for(var ae=X<0?X+z:X;++ae<z;)B.push(ae);return B})}},d.pseudos.nth=d.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[n]=sn(n);for(n in{submit:!0,reset:!0})d.pseudos[n]=Ut(n);function Xn(){}Xn.prototype=d.filters=d.pseudos,d.setFilters=new Xn,u=we.tokenize=function(B,z){var X,ae,q,le,J,j,ne,ue=H[B+" "];if(ue)return z?0:ue.slice(0);for(J=B,j=[],ne=d.preFilter;J;){(!X||(ae=_t.exec(J)))&&(ae&&(J=J.slice(ae[0].length)||J),j.push(q=[])),X=!1,(ae=Dt.exec(J))&&(X=ae.shift(),q.push({value:X,type:ae[0].replace(gt," ")}),J=J.slice(X.length));for(le in d.filter)(ae=Xe[le].exec(J))&&(!ne[le]||(ae=ne[le](ae)))&&(X=ae.shift(),q.push({value:X,type:le,matches:ae}),J=J.slice(X.length));if(!X)break}return z?J.length:J?we.error(B):H(B,j).slice(0)};function wn(B){for(var z=0,X=B.length,ae="";z<X;z++)ae+=B[z].value;return ae}function It(B,z,X){var ae=z.dir,q=z.next,le=q||ae,J=X&&le==="parentNode",j=T++;return z.first?function(ne,ue,me){for(;ne=ne[ae];)if(ne.nodeType===1||J)return B(ne,ue,me);return!1}:function(ne,ue,me){var Ee,Ae,Ue,De=[R,j];if(me){for(;ne=ne[ae];)if((ne.nodeType===1||J)&&B(ne,ue,me))return!0}else for(;ne=ne[ae];)if(ne.nodeType===1||J)if(Ue=ne[I]||(ne[I]={}),Ae=Ue[ne.uniqueID]||(Ue[ne.uniqueID]={}),q&&q===ne.nodeName.toLowerCase())ne=ne[ae]||ne;else{if((Ee=Ae[le])&&Ee[0]===R&&Ee[1]===j)return De[2]=Ee[2];if(Ae[le]=De,De[2]=B(ne,ue,me))return!0}return!1}}function dn(B){return B.length>1?function(z,X,ae){for(var q=B.length;q--;)if(!B[q](z,X,ae))return!1;return!0}:B[0]}function At(B,z,X){for(var ae=0,q=z.length;ae<q;ae++)we(B,z[ae],X);return X}function hn(B,z,X,ae,q){for(var le,J=[],j=0,ne=B.length,ue=z!=null;j<ne;j++)(le=B[j])&&(!X||X(le,ae,q))&&(J.push(le),ue&&z.push(j));return J}function Tn(B,z,X,ae,q,le){return ae&&!ae[I]&&(ae=Tn(ae)),q&&!q[I]&&(q=Tn(q,le)),$e(function(J,j,ne,ue){var me,Ee,Ae,Ue=[],De=[],nt=j.length,ot=J||At(z||"*",ne.nodeType?[ne]:ne,[]),We=B&&(J||!z)?hn(ot,Ue,B,ne,ue):ot,Re=X?q||(J?B:nt||ae)?[]:j:We;if(X&&X(We,Re,ne,ue),ae)for(me=hn(Re,De),ae(me,[],ne,ue),Ee=me.length;Ee--;)(Ae=me[Ee])&&(Re[De[Ee]]=!(We[De[Ee]]=Ae));if(J){if(q||B){if(q){for(me=[],Ee=Re.length;Ee--;)(Ae=Re[Ee])&&me.push(We[Ee]=Ae);q(null,Re=[],me,ue)}for(Ee=Re.length;Ee--;)(Ae=Re[Ee])&&(me=q?pe(J,Ae):Ue[Ee])>-1&&(J[me]=!(j[me]=Ae))}}else Re=hn(Re===j?Re.splice(nt,Re.length):Re),q?q(null,j,Re,ue):te.apply(j,Re)})}function Hn(B){for(var z,X,ae,q=B.length,le=d.relative[B[0].type],J=le||d.relative[" "],j=le?1:0,ne=It(function(Ee){return Ee===z},J,!0),ue=It(function(Ee){return pe(z,Ee)>-1},J,!0),me=[function(Ee,Ae,Ue){var De=!le&&(Ue||Ae!==y)||((z=Ae).nodeType?ne(Ee,Ae,Ue):ue(Ee,Ae,Ue));return z=null,De}];j<q;j++)if(X=d.relative[B[j].type])me=[It(dn(me),X)];else{if(X=d.filter[B[j].type].apply(null,B[j].matches),X[I]){for(ae=++j;ae<q&&!d.relative[B[ae].type];ae++);return Tn(j>1&&dn(me),j>1&&wn(B.slice(0,j-1).concat({value:B[j-2].type===" "?"*":""})).replace(gt,"$1"),X,j<ae&&Hn(B.slice(j,ae)),ae<q&&Hn(B=B.slice(ae)),ae<q&&wn(B))}me.push(X)}return dn(me)}function Mn(B,z){var X=z.length>0,ae=B.length>0,q=function(le,J,j,ne,ue){var me,Ee,Ae,Ue=0,De="0",nt=le&&[],ot=[],We=y,Re=le||ae&&d.find.TAG("*",ue),gn=R+=We==null?1:Math.random()||.1,Pn=Re.length;for(ue&&(y=J==m||J||ue);De!==Pn&&(me=Re[De])!=null;De++){if(ae&&me){for(Ee=0,!J&&me.ownerDocument!=m&&(_(me),j=!S);Ae=B[Ee++];)if(Ae(me,J||m,j)){ne.push(me);break}ue&&(R=gn)}X&&((me=!Ae&&me)&&Ue--,le&&nt.push(me))}if(Ue+=De,X&&De!==Ue){for(Ee=0;Ae=z[Ee++];)Ae(nt,ot,J,j);if(le){if(Ue>0)for(;De--;)nt[De]||ot[De]||(ot[De]=K.call(ne));ot=hn(ot)}te.apply(ne,ot),ue&&!le&&ot.length>0&&Ue+z.length>1&&we.uniqueSort(ne)}return ue&&(R=gn,y=We),nt};return X?$e(q):q}g=we.compile=function(B,z){var X,ae=[],q=[],le=$[B+" "];if(!le){for(z||(z=u(B)),X=z.length;X--;)le=Hn(z[X]),le[I]?ae.push(le):q.push(le);le=$(B,Mn(q,ae)),le.selector=B}return le},i=we.select=function(B,z,X,ae){var q,le,J,j,ne,ue=typeof B=="function"&&B,me=!ae&&u(B=ue.selector||B);if(X=X||[],me.length===1){if(le=me[0]=me[0].slice(0),le.length>2&&(J=le[0]).type==="ID"&&z.nodeType===9&&S&&d.relative[le[1].type]){if(z=(d.find.ID(J.matches[0].replace(xe,re),z)||[])[0],z)ue&&(z=z.parentNode);else return X;B=B.slice(le.shift().value.length)}for(q=Xe.needsContext.test(B)?0:le.length;q--&&(J=le[q],!d.relative[j=J.type]);)if((ne=d.find[j])&&(ae=ne(J.matches[0].replace(xe,re),Pe.test(le[0].type)&&Jt(z.parentNode)||z))){if(le.splice(q,1),B=ae.length&&wn(le),!B)return te.apply(X,ae),X;break}}return(ue||g(B,me))(ae,z,!S,X,!z||Pe.test(B)&&Jt(z.parentNode)||z),X},p.sortStable=I.split("").sort(O).join("")===I,p.detectDuplicates=!!c,_(),p.sortDetached=Ge(function(B){return B.compareDocumentPosition(m.createElement("fieldset"))&1}),Ge(function(B){return B.innerHTML="<a href='#'></a>",B.firstChild.getAttribute("href")==="#"})||ut("type|href|height|width",function(B,z,X){if(!X)return B.getAttribute(z,z.toLowerCase()==="type"?1:2)}),(!p.attributes||!Ge(function(B){return B.innerHTML="<input/>",B.firstChild.setAttribute("value",""),B.firstChild.getAttribute("value")===""}))&&ut("value",function(B,z,X){if(!X&&B.nodeName.toLowerCase()==="input")return B.defaultValue}),Ge(function(B){return B.getAttribute("disabled")==null})||ut(ee,function(B,z,X){var ae;if(!X)return B[z]===!0?z.toLowerCase():(ae=B.getAttributeNode(z))&&ae.specified?ae.value:null});var Jn=r.Sizzle;we.noConflict=function(){return r.Sizzle===we&&(r.Sizzle=Jn),we},h=function(){return we}.call(v,a,v,x),h!==void 0&&(x.exports=h)})(window)},7178:(x,v,a)=>{var h,r;h=[a(8934),a(7792),a(2134),a(8663),a(454),a(6981),a(7661),a(8048),a(461),a(1045),a(6525),a(5385)],r=function(n,p,d,l,s,u,g){"use strict";var i=/%20/g,y=/#.*$/,f=/([?&])_=[^&]*/,c=/^(.*?):[ \t]*([^\r\n]*)$/mg,_=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,m=/^(?:GET|HEAD)$/,A=/^\/\//,S={},b={},C="*/".concat("*"),w=p.createElement("a");w.href=s.href;function P(L){return function(H,$){typeof H!="string"&&($=H,H="*");var Y,O=0,U=H.toLowerCase().match(l)||[];if(d($))for(;Y=U[O++];)Y[0]==="+"?(Y=Y.slice(1)||"*",(L[Y]=L[Y]||[]).unshift($)):(L[Y]=L[Y]||[]).push($)}}function I(L,H,$,Y){var O={},U=L===b;function M(K){var G;return O[K]=!0,n.each(L[K]||[],function(te,se){var pe=se(H,$,Y);if(typeof pe=="string"&&!U&&!O[pe])return H.dataTypes.unshift(pe),M(pe),!1;if(U)return!(G=pe)}),G}return M(H.dataTypes[0])||!O["*"]&&M("*")}function N(L,H){var $,Y,O=n.ajaxSettings.flatOptions||{};for($ in H)H[$]!==void 0&&((O[$]?L:Y||(Y={}))[$]=H[$]);return Y&&n.extend(!0,L,Y),L}function R(L,H,$){for(var Y,O,U,M,K=L.contents,G=L.dataTypes;G[0]==="*";)G.shift(),Y===void 0&&(Y=L.mimeType||H.getResponseHeader("Content-Type"));if(Y){for(O in K)if(K[O]&&K[O].test(Y)){G.unshift(O);break}}if(G[0]in $)U=G[0];else{for(O in $){if(!G[0]||L.converters[O+" "+G[0]]){U=O;break}M||(M=O)}U=U||M}if(U)return U!==G[0]&&G.unshift(U),$[U]}function T(L,H,$,Y){var O,U,M,K,G,te={},se=L.dataTypes.slice();if(se[1])for(M in L.converters)te[M.toLowerCase()]=L.converters[M];for(U=se.shift();U;)if(L.responseFields[U]&&($[L.responseFields[U]]=H),!G&&Y&&L.dataFilter&&(H=L.dataFilter(H,L.dataType)),G=U,U=se.shift(),U){if(U==="*")U=G;else if(G!=="*"&&G!==U){if(M=te[G+" "+U]||te["* "+U],!M){for(O in te)if(K=O.split(" "),K[1]===U&&(M=te[G+" "+K[0]]||te["* "+K[0]],M)){M===!0?M=te[O]:te[O]!==!0&&(U=K[0],se.unshift(K[1]));break}}if(M!==!0)if(M&&L.throws)H=M(H);else try{H=M(H)}catch(pe){return{state:"parsererror",error:M?pe:"No conversion from "+G+" to "+U}}}}return{state:"success",data:H}}return n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:s.href,type:"GET",isLocal:_.test(s.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":C,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(L,H){return H?N(N(L,n.ajaxSettings),H):N(n.ajaxSettings,L)},ajaxPrefilter:P(S),ajaxTransport:P(b),ajax:function(L,H){typeof L=="object"&&(H=L,L=void 0),H=H||{};var $,Y,O,U,M,K,G,te,se,pe,ee=n.ajaxSetup({},H),he=ee.context||ee,be=ee.context&&(he.nodeType||he.jquery)?n(he):n.event,Te=n.Deferred(),je=n.Callbacks("once memory"),ht=ee.statusCode||{},gt={},_t={},Dt="canceled",Be={readyState:0,getResponseHeader:function(Me){var Xe;if(G){if(!U)for(U={};Xe=c.exec(O);)U[Xe[1].toLowerCase()+" "]=(U[Xe[1].toLowerCase()+" "]||[]).concat(Xe[2]);Xe=U[Me.toLowerCase()+" "]}return Xe==null?null:Xe.join(", ")},getAllResponseHeaders:function(){return G?O:null},setRequestHeader:function(Me,Xe){return G==null&&(Me=_t[Me.toLowerCase()]=_t[Me.toLowerCase()]||Me,gt[Me]=Xe),this},overrideMimeType:function(Me){return G==null&&(ee.mimeType=Me),this},statusCode:function(Me){var Xe;if(Me)if(G)Be.always(Me[Be.status]);else for(Xe in Me)ht[Xe]=[ht[Xe],Me[Xe]];return this},abort:function(Me){var Xe=Me||Dt;return $&&$.abort(Xe),St(0,Xe),this}};if(Te.promise(Be),ee.url=((L||ee.url||s.href)+"").replace(A,s.protocol+"//"),ee.type=H.method||H.type||ee.method||ee.type,ee.dataTypes=(ee.dataType||"*").toLowerCase().match(l)||[""],ee.crossDomain==null){K=p.createElement("a");try{K.href=ee.url,K.href=K.href,ee.crossDomain=w.protocol+"//"+w.host!=K.protocol+"//"+K.host}catch(Me){ee.crossDomain=!0}}if(ee.data&&ee.processData&&typeof ee.data!="string"&&(ee.data=n.param(ee.data,ee.traditional)),I(S,ee,H,Be),G)return Be;te=n.event&&ee.global,te&&n.active++===0&&n.event.trigger("ajaxStart"),ee.type=ee.type.toUpperCase(),ee.hasContent=!m.test(ee.type),Y=ee.url.replace(y,""),ee.hasContent?ee.data&&ee.processData&&(ee.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(ee.data=ee.data.replace(i,"+")):(pe=ee.url.slice(Y.length),ee.data&&(ee.processData||typeof ee.data=="string")&&(Y+=(g.test(Y)?"&":"?")+ee.data,delete ee.data),ee.cache===!1&&(Y=Y.replace(f,"$1"),pe=(g.test(Y)?"&":"?")+"_="+u.guid+++pe),ee.url=Y+pe),ee.ifModified&&(n.lastModified[Y]&&Be.setRequestHeader("If-Modified-Since",n.lastModified[Y]),n.etag[Y]&&Be.setRequestHeader("If-None-Match",n.etag[Y])),(ee.data&&ee.hasContent&&ee.contentType!==!1||H.contentType)&&Be.setRequestHeader("Content-Type",ee.contentType),Be.setRequestHeader("Accept",ee.dataTypes[0]&&ee.accepts[ee.dataTypes[0]]?ee.accepts[ee.dataTypes[0]]+(ee.dataTypes[0]!=="*"?", "+C+"; q=0.01":""):ee.accepts["*"]);for(se in ee.headers)Be.setRequestHeader(se,ee.headers[se]);if(ee.beforeSend&&(ee.beforeSend.call(he,Be,ee)===!1||G))return Be.abort();if(Dt="abort",je.add(ee.complete),Be.done(ee.success),Be.fail(ee.error),$=I(b,ee,H,Be),!$)St(-1,"No Transport");else{if(Be.readyState=1,te&&be.trigger("ajaxSend",[Be,ee]),G)return Be;ee.async&&ee.timeout>0&&(M=window.setTimeout(function(){Be.abort("timeout")},ee.timeout));try{G=!1,$.send(gt,St)}catch(Me){if(G)throw Me;St(-1,Me)}}function St(Me,Xe,Xt,On){var ft,Le,de,Pe,xe,re=Xe;G||(G=!0,M&&window.clearTimeout(M),$=void 0,O=On||"",Be.readyState=Me>0?4:0,ft=Me>=200&&Me<300||Me===304,Xt&&(Pe=R(ee,Be,Xt)),!ft&&n.inArray("script",ee.dataTypes)>-1&&n.inArray("json",ee.dataTypes)<0&&(ee.converters["text script"]=function(){}),Pe=T(ee,Pe,Be,ft),ft?(ee.ifModified&&(xe=Be.getResponseHeader("Last-Modified"),xe&&(n.lastModified[Y]=xe),xe=Be.getResponseHeader("etag"),xe&&(n.etag[Y]=xe)),Me===204||ee.type==="HEAD"?re="nocontent":Me===304?re="notmodified":(re=Pe.state,Le=Pe.data,de=Pe.error,ft=!de)):(de=re,(Me||!re)&&(re="error",Me<0&&(Me=0))),Be.status=Me,Be.statusText=(Xe||re)+"",ft?Te.resolveWith(he,[Le,re,Be]):Te.rejectWith(he,[Be,re,de]),Be.statusCode(ht),ht=void 0,te&&be.trigger(ft?"ajaxSuccess":"ajaxError",[Be,ee,ft?Le:de]),je.fireWith(he,[Be,re]),te&&(be.trigger("ajaxComplete",[Be,ee]),--n.active||n.event.trigger("ajaxStop")))}return Be},getJSON:function(L,H,$){return n.get(L,H,$,"json")},getScript:function(L,H){return n.get(L,void 0,H,"script")}}),n.each(["get","post"],function(L,H){n[H]=function($,Y,O,U){return d(Y)&&(U=U||O,O=Y,Y=void 0),n.ajax(n.extend({url:$,type:H,dataType:U,data:Y,success:O},n.isPlainObject($)&&$))}}),n.ajaxPrefilter(function(L){var H;for(H in L.headers)H.toLowerCase()==="content-type"&&(L.contentType=L.headers[H]||"")}),n}.apply(v,h),r!==void 0&&(x.exports=r)},7533:(x,v,a)=>{var h,r;h=[a(8934),a(2134),a(6981),a(7661),a(7178)],r=function(n,p,d,l){"use strict";var s=[],u=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var g=s.pop()||n.expando+"_"+d.guid++;return this[g]=!0,g}}),n.ajaxPrefilter("json jsonp",function(g,i,y){var f,c,_,m=g.jsonp!==!1&&(u.test(g.url)?"url":typeof g.data=="string"&&(g.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&u.test(g.data)&&"data");if(m||g.dataTypes[0]==="jsonp")return f=g.jsonpCallback=p(g.jsonpCallback)?g.jsonpCallback():g.jsonpCallback,m?g[m]=g[m].replace(u,"$1"+f):g.jsonp!==!1&&(g.url+=(l.test(g.url)?"&":"?")+g.jsonp+"="+f),g.converters["script json"]=function(){return _||n.error(f+" was not called"),_[0]},g.dataTypes[0]="json",c=window[f],window[f]=function(){_=arguments},y.always(function(){c===void 0?n(window).removeProp(f):window[f]=c,g[f]&&(g.jsonpCallback=i.jsonpCallback,s.push(f)),_&&p(c)&&c(_[0]),_=c=void 0}),"script"})}.apply(v,h),r!==void 0&&(x.exports=r)},4581:(x,v,a)=>{var h,r;h=[a(8934),a(4552),a(2134),a(2889),a(7178),a(8482),a(2632),a(655)],r=function(n,p,d){"use strict";n.fn.load=function(l,s,u){var g,i,y,f=this,c=l.indexOf(" ");return c>-1&&(g=p(l.slice(c)),l=l.slice(0,c)),d(s)?(u=s,s=void 0):s&&typeof s=="object"&&(i="POST"),f.length>0&&n.ajax({url:l,type:i||"GET",dataType:"html",data:s}).done(function(_){y=arguments,f.html(g?n("<div>").append(n.parseHTML(_)).find(g):_)}).always(u&&function(_,m){f.each(function(){u.apply(this,y||[_.responseText,m,_])})}),this}}.apply(v,h),r!==void 0&&(x.exports=r)},5488:(x,v,a)=>{var h,r;h=[a(8934),a(7792),a(7178)],r=function(n,p){"use strict";n.ajaxPrefilter(function(d){d.crossDomain&&(d.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(d){return n.globalEval(d),d}}}),n.ajaxPrefilter("script",function(d){d.cache===void 0&&(d.cache=!1),d.crossDomain&&(d.type="GET")}),n.ajaxTransport("script",function(d){if(d.crossDomain||d.scriptAttrs){var l,s;return{send:function(u,g){l=n("<script>").attr(d.scriptAttrs||{}).prop({charset:d.scriptCharset,src:d.url}).on("load error",s=function(i){l.remove(),s=null,i&&g(i.type==="error"?404:200,i.type)}),p.head.appendChild(l[0])},abort:function(){s&&s()}}}})}.apply(v,h),r!==void 0&&(x.exports=r)},454:(x,v,a)=>{var h;h=function(){"use strict";return window.location}.call(v,a,v,x),h!==void 0&&(x.exports=h)},6981:(x,v,a)=>{var h;h=function(){"use strict";return{guid:Date.now()}}.call(v,a,v,x),h!==void 0&&(x.exports=h)},7661:(x,v,a)=>{var h;h=function(){"use strict";return/\?/}.call(v,a,v,x),h!==void 0&&(x.exports=h)},8853:(x,v,a)=>{var h,r;h=[a(8934),a(9523),a(7178)],r=function(n,p){"use strict";n.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest}catch(s){}};var d={0:200,1223:204},l=n.ajaxSettings.xhr();p.cors=!!l&&"withCredentials"in l,p.ajax=l=!!l,n.ajaxTransport(function(s){var u,g;if(p.cors||l&&!s.crossDomain)return{send:function(i,y){var f,c=s.xhr();if(c.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(f in s.xhrFields)c[f]=s.xhrFields[f];s.mimeType&&c.overrideMimeType&&c.overrideMimeType(s.mimeType),!s.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");for(f in i)c.setRequestHeader(f,i[f]);u=function(_){return function(){u&&(u=g=c.onload=c.onerror=c.onabort=c.ontimeout=c.onreadystatechange=null,_==="abort"?c.abort():_==="error"?typeof c.status!="number"?y(0,"error"):y(c.status,c.statusText):y(d[c.status]||c.status,c.statusText,(c.responseType||"text")!=="text"||typeof c.responseText!="string"?{binary:c.response}:{text:c.responseText},c.getAllResponseHeaders()))}},c.onload=u(),g=c.onerror=c.ontimeout=u("error"),c.onabort!==void 0?c.onabort=g:c.onreadystatechange=function(){c.readyState===4&&window.setTimeout(function(){u&&g()})},u=u("abort");try{c.send(s.hasContent&&s.data||null)}catch(_){if(u)throw _}},abort:function(){u&&u()}}})}.apply(v,h),r!==void 0&&(x.exports=r)},8468:(x,v,a)=>{var h,r;h=[a(8934),a(2853),a(4043),a(4015),a(4580)],r=function(n){"use strict";return n}.apply(v,h),r!==void 0&&(x.exports=r)},2853:(x,v,a)=>{var h,r;h=[a(8934),a(7163),a(7060),a(2941),a(8663),a(655)],r=function(n,p,d,l,s){"use strict";var u,g=n.expr.attrHandle;n.fn.extend({attr:function(i,y){return p(this,n.attr,i,y,arguments.length>1)},removeAttr:function(i){return this.each(function(){n.removeAttr(this,i)})}}),n.extend({attr:function(i,y,f){var c,_,m=i.nodeType;if(!(m===3||m===8||m===2)){if(typeof i.getAttribute=="undefined")return n.prop(i,y,f);if((m!==1||!n.isXMLDoc(i))&&(_=n.attrHooks[y.toLowerCase()]||(n.expr.match.bool.test(y)?u:void 0)),f!==void 0){if(f===null){n.removeAttr(i,y);return}return _&&"set"in _&&(c=_.set(i,f,y))!==void 0?c:(i.setAttribute(y,f+""),f)}return _&&"get"in _&&(c=_.get(i,y))!==null?c:(c=n.find.attr(i,y),c==null?void 0:c)}},attrHooks:{type:{set:function(i,y){if(!l.radioValue&&y==="radio"&&d(i,"input")){var f=i.value;return i.setAttribute("type",y),f&&(i.value=f),y}}}},removeAttr:function(i,y){var f,c=0,_=y&&y.match(s);if(_&&i.nodeType===1)for(;f=_[c++];)i.removeAttribute(f)}}),u={set:function(i,y,f){return y===!1?n.removeAttr(i,f):i.setAttribute(f,f),f}},n.each(n.expr.match.bool.source.match(/\w+/g),function(i,y){var f=g[y]||n.find.attr;g[y]=function(c,_,m){var A,S,b=_.toLowerCase();return m||(S=g[b],g[b]=A,A=f(c,_,m)!=null?b:null,g[b]=S),A}})}.apply(v,h),r!==void 0&&(x.exports=r)},4015:(x,v,a)=>{var h,r;h=[a(8934),a(4552),a(2134),a(8663),a(9081),a(8048)],r=function(n,p,d,l,s){"use strict";function u(i){return i.getAttribute&&i.getAttribute("class")||""}function g(i){return Array.isArray(i)?i:typeof i=="string"?i.match(l)||[]:[]}n.fn.extend({addClass:function(i){var y,f,c,_,m,A;return d(i)?this.each(function(S){n(this).addClass(i.call(this,S,u(this)))}):(y=g(i),y.length?this.each(function(){if(c=u(this),f=this.nodeType===1&&" "+p(c)+" ",f){for(m=0;m<y.length;m++)_=y[m],f.indexOf(" "+_+" ")<0&&(f+=_+" ");A=p(f),c!==A&&this.setAttribute("class",A)}}):this)},removeClass:function(i){var y,f,c,_,m,A;return d(i)?this.each(function(S){n(this).removeClass(i.call(this,S,u(this)))}):arguments.length?(y=g(i),y.length?this.each(function(){if(c=u(this),f=this.nodeType===1&&" "+p(c)+" ",f){for(m=0;m<y.length;m++)for(_=y[m];f.indexOf(" "+_+" ")>-1;)f=f.replace(" "+_+" "," ");A=p(f),c!==A&&this.setAttribute("class",A)}}):this):this.attr("class","")},toggleClass:function(i,y){var f,c,_,m,A=typeof i,S=A==="string"||Array.isArray(i);return d(i)?this.each(function(b){n(this).toggleClass(i.call(this,b,u(this),y),y)}):typeof y=="boolean"&&S?y?this.addClass(i):this.removeClass(i):(f=g(i),this.each(function(){if(S)for(m=n(this),_=0;_<f.length;_++)c=f[_],m.hasClass(c)?m.removeClass(c):m.addClass(c);else(i===void 0||A==="boolean")&&(c=u(this),c&&s.set(this,"__className__",c),this.setAttribute&&this.setAttribute("class",c||i===!1?"":s.get(this,"__className__")||""))}))},hasClass:function(i){var y,f,c=0;for(y=" "+i+" ";f=this[c++];)if(f.nodeType===1&&(" "+p(u(f))+" ").indexOf(y)>-1)return!0;return!1}})}.apply(v,h),r!==void 0&&(x.exports=r)},4043:(x,v,a)=>{var h,r;h=[a(8934),a(7163),a(2941),a(655)],r=function(n,p,d){"use strict";var l=/^(?:input|select|textarea|button)$/i,s=/^(?:a|area)$/i;n.fn.extend({prop:function(u,g){return p(this,n.prop,u,g,arguments.length>1)},removeProp:function(u){return this.each(function(){delete this[n.propFix[u]||u]})}}),n.extend({prop:function(u,g,i){var y,f,c=u.nodeType;if(!(c===3||c===8||c===2))return(c!==1||!n.isXMLDoc(u))&&(g=n.propFix[g]||g,f=n.propHooks[g]),i!==void 0?f&&"set"in f&&(y=f.set(u,i,g))!==void 0?y:u[g]=i:f&&"get"in f&&(y=f.get(u,g))!==null?y:u[g]},propHooks:{tabIndex:{get:function(u){var g=n.find.attr(u,"tabindex");return g?parseInt(g,10):l.test(u.nodeName)||s.test(u.nodeName)&&u.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),d.optSelected||(n.propHooks.selected={get:function(u){var g=u.parentNode;return g&&g.parentNode&&g.parentNode.selectedIndex,null},set:function(u){var g=u.parentNode;g&&(g.selectedIndex,g.parentNode&&g.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this})}.apply(v,h),r!==void 0&&(x.exports=r)},2941:(x,v,a)=>{var h,r;h=[a(7792),a(9523)],r=function(n,p){"use strict";return function(){var d=n.createElement("input"),l=n.createElement("select"),s=l.appendChild(n.createElement("option"));d.type="checkbox",p.checkOn=d.value!=="",p.optSelected=s.selected,d=n.createElement("input"),d.value="t",d.type="radio",p.radioValue=d.value==="t"}(),p}.apply(v,h),r!==void 0&&(x.exports=r)},4580:(x,v,a)=>{var h,r;h=[a(8934),a(4552),a(2941),a(7060),a(2134),a(8048)],r=function(n,p,d,l,s){"use strict";var u=/\r/g;n.fn.extend({val:function(g){var i,y,f,c=this[0];return arguments.length?(f=s(g),this.each(function(_){var m;this.nodeType===1&&(f?m=g.call(this,_,n(this).val()):m=g,m==null?m="":typeof m=="number"?m+="":Array.isArray(m)&&(m=n.map(m,function(A){return A==null?"":A+""})),i=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],(!i||!("set"in i)||i.set(this,m,"value")===void 0)&&(this.value=m))})):c?(i=n.valHooks[c.type]||n.valHooks[c.nodeName.toLowerCase()],i&&"get"in i&&(y=i.get(c,"value"))!==void 0?y:(y=c.value,typeof y=="string"?y.replace(u,""):y==null?"":y)):void 0}}),n.extend({valHooks:{option:{get:function(g){var i=n.find.attr(g,"value");return i!=null?i:p(n.text(g))}},select:{get:function(g){var i,y,f,c=g.options,_=g.selectedIndex,m=g.type==="select-one",A=m?null:[],S=m?_+1:c.length;for(_<0?f=S:f=m?_:0;f<S;f++)if(y=c[f],(y.selected||f===_)&&!y.disabled&&(!y.parentNode.disabled||!l(y.parentNode,"optgroup"))){if(i=n(y).val(),m)return i;A.push(i)}return A},set:function(g,i){for(var y,f,c=g.options,_=n.makeArray(i),m=c.length;m--;)f=c[m],(f.selected=n.inArray(n.valHooks.option.get(f),_)>-1)&&(y=!0);return y||(g.selectedIndex=-1),_}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(g,i){if(Array.isArray(i))return g.checked=n.inArray(n(g).val(),i)>-1}},d.checkOn||(n.valHooks[this].get=function(g){return g.getAttribute("value")===null?"on":g.value})})}.apply(v,h),r!==void 0&&(x.exports=r)},8924:(x,v,a)=>{var h,r;h=[a(8934),a(8082),a(2134),a(8663)],r=function(n,p,d,l){"use strict";function s(u){var g={};return n.each(u.match(l)||[],function(i,y){g[y]=!0}),g}return n.Callbacks=function(u){u=typeof u=="string"?s(u):n.extend({},u);var g,i,y,f,c=[],_=[],m=-1,A=function(){for(f=f||u.once,y=g=!0;_.length;m=-1)for(i=_.shift();++m<c.length;)c[m].apply(i[0],i[1])===!1&&u.stopOnFalse&&(m=c.length,i=!1);u.memory||(i=!1),g=!1,f&&(i?c=[]:c="")},S={add:function(){return c&&(i&&!g&&(m=c.length-1,_.push(i)),function b(C){n.each(C,function(w,P){d(P)?(!u.unique||!S.has(P))&&c.push(P):P&&P.length&&p(P)!=="string"&&b(P)})}(arguments),i&&!g&&A()),this},remove:function(){return n.each(arguments,function(b,C){for(var w;(w=n.inArray(C,c,w))>-1;)c.splice(w,1),w<=m&&m--}),this},has:function(b){return b?n.inArray(b,c)>-1:c.length>0},empty:function(){return c&&(c=[]),this},disable:function(){return f=_=[],c=i="",this},disabled:function(){return!c},lock:function(){return f=_=[],!i&&!g&&(c=i=""),this},locked:function(){return!!f},fireWith:function(b,C){return f||(C=C||[],C=[b,C.slice?C.slice():C],_.push(C),g||A()),this},fire:function(){return S.fireWith(this,arguments),this},fired:function(){return!!y}};return S},n}.apply(v,h),r!==void 0&&(x.exports=r)},8934:(x,v,a)=>{var h,r;h=[a(3727),a(8045),a(3623),a(3932),a(1780),a(5431),a(5949),a(7763),a(9694),a(4194),a(3),a(9523),a(2134),a(9031),a(1224),a(8082)],r=function(n,p,d,l,s,u,g,i,y,f,c,_,m,A,S,b){"use strict";var C="3.6.3",w=function(I,N){return new w.fn.init(I,N)};w.fn=w.prototype={jquery:C,constructor:w,length:0,toArray:function(){return d.call(this)},get:function(I){return I==null?d.call(this):I<0?this[I+this.length]:this[I]},pushStack:function(I){var N=w.merge(this.constructor(),I);return N.prevObject=this,N},each:function(I){return w.each(this,I)},map:function(I){return this.pushStack(w.map(this,function(N,R){return I.call(N,R,N)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(w.grep(this,function(I,N){return(N+1)%2}))},odd:function(){return this.pushStack(w.grep(this,function(I,N){return N%2}))},eq:function(I){var N=this.length,R=+I+(I<0?N:0);return this.pushStack(R>=0&&R<N?[this[R]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var I,N,R,T,L,H,$=arguments[0]||{},Y=1,O=arguments.length,U=!1;for(typeof $=="boolean"&&(U=$,$=arguments[Y]||{},Y++),typeof $!="object"&&!m($)&&($={}),Y===O&&($=this,Y--);Y<O;Y++)if((I=arguments[Y])!=null)for(N in I)T=I[N],!(N==="__proto__"||$===T)&&(U&&T&&(w.isPlainObject(T)||(L=Array.isArray(T)))?(R=$[N],L&&!Array.isArray(R)?H=[]:!L&&!w.isPlainObject(R)?H={}:H=R,L=!1,$[N]=w.extend(U,H,T)):T!==void 0&&($[N]=T));return $},w.extend({expando:"jQuery"+(C+Math.random()).replace(/\D/g,""),isReady:!0,error:function(I){throw new Error(I)},noop:function(){},isPlainObject:function(I){var N,R;return!I||i.call(I)!=="[object Object]"?!1:(N=p(I),N?(R=y.call(N,"constructor")&&N.constructor,typeof R=="function"&&f.call(R)===c):!0)},isEmptyObject:function(I){var N;for(N in I)return!1;return!0},globalEval:function(I,N,R){S(I,{nonce:N&&N.nonce},R)},each:function(I,N){var R,T=0;if(P(I))for(R=I.length;T<R&&N.call(I[T],T,I[T])!==!1;T++);else for(T in I)if(N.call(I[T],T,I[T])===!1)break;return I},makeArray:function(I,N){var R=N||[];return I!=null&&(P(Object(I))?w.merge(R,typeof I=="string"?[I]:I):s.call(R,I)),R},inArray:function(I,N,R){return N==null?-1:u.call(N,I,R)},merge:function(I,N){for(var R=+N.length,T=0,L=I.length;T<R;T++)I[L++]=N[T];return I.length=L,I},grep:function(I,N,R){for(var T,L=[],H=0,$=I.length,Y=!R;H<$;H++)T=!N(I[H],H),T!==Y&&L.push(I[H]);return L},map:function(I,N,R){var T,L,H=0,$=[];if(P(I))for(T=I.length;H<T;H++)L=N(I[H],H,R),L!=null&&$.push(L);else for(H in I)L=N(I[H],H,R),L!=null&&$.push(L);return l($)},guid:1,support:_}),typeof Symbol=="function"&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(I,N){g["[object "+N+"]"]=N.toLowerCase()});function P(I){var N=!!I&&"length"in I&&I.length,R=b(I);return m(I)||A(I)?!1:R==="array"||N===0||typeof N=="number"&&N>0&&N-1 in I}return w}.apply(v,h),r!==void 0&&(x.exports=r)},1224:(x,v,a)=>{var h,r;h=[a(7792)],r=function(n){"use strict";var p={type:!0,src:!0,nonce:!0,noModule:!0};function d(l,s,u){u=u||n;var g,i,y=u.createElement("script");if(y.text=l,s)for(g in p)i=s[g]||s.getAttribute&&s.getAttribute(g),i&&y.setAttribute(g,i);u.head.appendChild(y).parentNode.removeChild(y)}return d}.apply(v,h),r!==void 0&&(x.exports=r)},7163:(x,v,a)=>{var h,r;h=[a(8934),a(8082),a(2134)],r=function(n,p,d){"use strict";var l=function(s,u,g,i,y,f,c){var _=0,m=s.length,A=g==null;if(p(g)==="object"){y=!0;for(_ in g)l(s,u,_,g[_],!0,f,c)}else if(i!==void 0&&(y=!0,d(i)||(c=!0),A&&(c?(u.call(s,i),u=null):(A=u,u=function(S,b,C){return A.call(n(S),C)})),u))for(;_<m;_++)u(s[_],g,c?i:i.call(s[_],_,u(s[_],g)));return y?s:A?u.call(s):m?u(s[0],g):f};return l}.apply(v,h),r!==void 0&&(x.exports=r)},1133:(x,v)=>{var a,h;a=[],h=function(){"use strict";var r=/^-ms-/,n=/-([a-z])/g;function p(l,s){return s.toUpperCase()}function d(l){return l.replace(r,"ms-").replace(n,p)}return d}.apply(v,a),h!==void 0&&(x.exports=h)},8048:(x,v,a)=>{var h,r;h=[a(8934),a(7792),a(2134),a(5250),a(1764)],r=function(n,p,d,l){"use strict";var s,u=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,g=n.fn.init=function(i,y,f){var c,_;if(!i)return this;if(f=f||s,typeof i=="string")if(i[0]==="<"&&i[i.length-1]===">"&&i.length>=3?c=[null,i,null]:c=u.exec(i),c&&(c[1]||!y))if(c[1]){if(y=y instanceof n?y[0]:y,n.merge(this,n.parseHTML(c[1],y&&y.nodeType?y.ownerDocument||y:p,!0)),l.test(c[1])&&n.isPlainObject(y))for(c in y)d(this[c])?this[c](y[c]):this.attr(c,y[c]);return this}else return _=p.getElementById(c[2]),_&&(this[0]=_,this.length=1),this;else return!y||y.jquery?(y||f).find(i):this.constructor(y).find(i);else{if(i.nodeType)return this[0]=i,this.length=1,this;if(d(i))return f.ready!==void 0?f.ready(i):i(n)}return n.makeArray(i,this)};return g.prototype=n.fn,s=n(p),g}.apply(v,h),r!==void 0&&(x.exports=r)},70:(x,v,a)=>{var h,r;h=[a(8934),a(7730),a(655)],r=function(n,p){"use strict";var d=function(s){return n.contains(s.ownerDocument,s)},l={composed:!0};return p.getRootNode&&(d=function(s){return n.contains(s.ownerDocument,s)||s.getRootNode(l)===s.ownerDocument}),d}.apply(v,h),r!==void 0&&(x.exports=r)},7060:(x,v,a)=>{var h;h=function(){"use strict";function r(n,p){return n.nodeName&&n.nodeName.toLowerCase()===p.toLowerCase()}return r}.call(v,a,v,x),h!==void 0&&(x.exports=h)},2889:(x,v,a)=>{var h,r;h=[a(8934),a(7792),a(5250),a(3360),a(1622)],r=function(n,p,d,l,s){"use strict";return n.parseHTML=function(u,g,i){if(typeof u!="string")return[];typeof g=="boolean"&&(i=g,g=!1);var y,f,c;return g||(s.createHTMLDocument?(g=p.implementation.createHTMLDocument(""),y=g.createElement("base"),y.href=p.location.href,g.head.appendChild(y)):g=p),f=d.exec(u),c=!i&&[],f?[g.createElement(f[1])]:(f=l([u],g,c),c&&c.length&&n(c).remove(),n.merge([],f.childNodes))},n.parseHTML}.apply(v,h),r!==void 0&&(x.exports=r)},461:(x,v,a)=>{var h,r;h=[a(8934)],r=function(n){"use strict";return n.parseXML=function(p){var d,l;if(!p||typeof p!="string")return null;try{d=new window.DOMParser().parseFromString(p,"text/xml")}catch(s){}return l=d&&d.getElementsByTagName("parsererror")[0],(!d||l)&&n.error("Invalid XML: "+(l?n.map(l.childNodes,function(s){return s.textContent}).join(`
`):p)),d},n.parseXML}.apply(v,h),r!==void 0&&(x.exports=r)},5703:(x,v,a)=>{var h,r;h=[a(8934),a(7792),a(3442),a(6525)],r=function(n,p){"use strict";var d=n.Deferred();n.fn.ready=function(s){return d.then(s).catch(function(u){n.readyException(u)}),this},n.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--n.readyWait:n.isReady)||(n.isReady=!0,!(s!==!0&&--n.readyWait>0)&&d.resolveWith(p,[n]))}}),n.ready.then=d.then;function l(){p.removeEventListener("DOMContentLoaded",l),window.removeEventListener("load",l),n.ready()}p.readyState==="complete"||p.readyState!=="loading"&&!p.documentElement.doScroll?window.setTimeout(n.ready):(p.addEventListener("DOMContentLoaded",l),window.addEventListener("load",l))}.apply(v,h),r!==void 0&&(x.exports=r)},3442:(x,v,a)=>{var h,r;h=[a(8934)],r=function(n){"use strict";n.readyException=function(p){window.setTimeout(function(){throw p})}}.apply(v,h),r!==void 0&&(x.exports=r)},4552:(x,v,a)=>{var h,r;h=[a(8663)],r=function(n){"use strict";function p(d){var l=d.match(n)||[];return l.join(" ")}return p}.apply(v,h),r!==void 0&&(x.exports=r)},1622:(x,v,a)=>{var h,r;h=[a(7792),a(9523)],r=function(n,p){"use strict";return p.createHTMLDocument=function(){var d=n.implementation.createHTMLDocument("").body;return d.innerHTML="<form></form><form></form>",d.childNodes.length===2}(),p}.apply(v,h),r!==void 0&&(x.exports=r)},8082:(x,v,a)=>{var h,r;h=[a(5949),a(7763)],r=function(n,p){"use strict";function d(l){return l==null?l+"":typeof l=="object"||typeof l=="function"?n[p.call(l)]||"object":typeof l}return d}.apply(v,h),r!==void 0&&(x.exports=r)},5250:(x,v,a)=>{var h;h=function(){"use strict";return/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i}.call(v,a,v,x),h!==void 0&&(x.exports=h)},8515:(x,v,a)=>{var h,r;h=[a(8934),a(7163),a(1133),a(7060),a(6871),a(618),a(4507),a(5057),a(3122),a(5410),a(610),a(7432),a(3781),a(4405),a(3997),a(8048),a(5703),a(655)],r=function(n,p,d,l,s,u,g,i,y,f,c,_,m,A,S){"use strict";var b=/^(none|table(?!-c[ea]).+)/,C={position:"absolute",visibility:"hidden",display:"block"},w={letterSpacing:"0",fontWeight:"400"};function P(R,T,L){var H=s.exec(T);return H?Math.max(0,H[2]-(L||0))+(H[3]||"px"):T}function I(R,T,L,H,$,Y){var O=T==="width"?1:0,U=0,M=0;if(L===(H?"border":"content"))return 0;for(;O<4;O+=2)L==="margin"&&(M+=n.css(R,L+i[O],!0,$)),H?(L==="content"&&(M-=n.css(R,"padding"+i[O],!0,$)),L!=="margin"&&(M-=n.css(R,"border"+i[O]+"Width",!0,$))):(M+=n.css(R,"padding"+i[O],!0,$),L!=="padding"?M+=n.css(R,"border"+i[O]+"Width",!0,$):U+=n.css(R,"border"+i[O]+"Width",!0,$));return!H&&Y>=0&&(M+=Math.max(0,Math.ceil(R["offset"+T[0].toUpperCase()+T.slice(1)]-Y-M-U-.5))||0),M}function N(R,T,L){var H=y(R),$=!A.boxSizingReliable()||L,Y=$&&n.css(R,"boxSizing",!1,H)==="border-box",O=Y,U=c(R,T,H),M="offset"+T[0].toUpperCase()+T.slice(1);if(u.test(U)){if(!L)return U;U="auto"}return(!A.boxSizingReliable()&&Y||!A.reliableTrDimensions()&&l(R,"tr")||U==="auto"||!parseFloat(U)&&n.css(R,"display",!1,H)==="inline")&&R.getClientRects().length&&(Y=n.css(R,"boxSizing",!1,H)==="border-box",O=M in R,O&&(U=R[M])),U=parseFloat(U)||0,U+I(R,T,L||(Y?"border":"content"),O,H,U)+"px"}return n.extend({cssHooks:{opacity:{get:function(R,T){if(T){var L=c(R,"opacity");return L===""?"1":L}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(R,T,L,H){if(!(!R||R.nodeType===3||R.nodeType===8||!R.style)){var $,Y,O,U=d(T),M=g.test(T),K=R.style;if(M||(T=S(U)),O=n.cssHooks[T]||n.cssHooks[U],L!==void 0){if(Y=typeof L,Y==="string"&&($=s.exec(L))&&$[1]&&(L=_(R,T,$),Y="number"),L==null||L!==L)return;Y==="number"&&!M&&(L+=$&&$[3]||(n.cssNumber[U]?"":"px")),!A.clearCloneStyle&&L===""&&T.indexOf("background")===0&&(K[T]="inherit"),(!O||!("set"in O)||(L=O.set(R,L,H))!==void 0)&&(M?K.setProperty(T,L):K[T]=L)}else return O&&"get"in O&&($=O.get(R,!1,H))!==void 0?$:K[T]}},css:function(R,T,L,H){var $,Y,O,U=d(T),M=g.test(T);return M||(T=S(U)),O=n.cssHooks[T]||n.cssHooks[U],O&&"get"in O&&($=O.get(R,!0,L)),$===void 0&&($=c(R,T,H)),$==="normal"&&T in w&&($=w[T]),L===""||L?(Y=parseFloat($),L===!0||isFinite(Y)?Y||0:$):$}}),n.each(["height","width"],function(R,T){n.cssHooks[T]={get:function(L,H,$){if(H)return b.test(n.css(L,"display"))&&(!L.getClientRects().length||!L.getBoundingClientRect().width)?f(L,C,function(){return N(L,T,$)}):N(L,T,$)},set:function(L,H,$){var Y,O=y(L),U=!A.scrollboxSize()&&O.position==="absolute",M=U||$,K=M&&n.css(L,"boxSizing",!1,O)==="border-box",G=$?I(L,T,$,K,O):0;return K&&U&&(G-=Math.ceil(L["offset"+T[0].toUpperCase()+T.slice(1)]-parseFloat(O[T])-I(L,T,"border",!1,O)-.5)),G&&(Y=s.exec(H))&&(Y[3]||"px")!=="px"&&(L.style[T]=H,H=n.css(L,T)),P(L,H,G)}}}),n.cssHooks.marginLeft=m(A.reliableMarginLeft,function(R,T){if(T)return(parseFloat(c(R,"marginLeft"))||R.getBoundingClientRect().left-f(R,{marginLeft:0},function(){return R.getBoundingClientRect().left}))+"px"}),n.each({margin:"",padding:"",border:"Width"},function(R,T){n.cssHooks[R+T]={expand:function(L){for(var H=0,$={},Y=typeof L=="string"?L.split(" "):[L];H<4;H++)$[R+i[H]+T]=Y[H]||Y[H-2]||Y[0];return $}},R!=="margin"&&(n.cssHooks[R+T].set=P)}),n.fn.extend({css:function(R,T){return p(this,function(L,H,$){var Y,O,U={},M=0;if(Array.isArray(H)){for(Y=y(L),O=H.length;M<O;M++)U[H[M]]=n.css(L,H[M],!1,Y);return U}return $!==void 0?n.style(L,H,$):n.css(L,H)},R,T,arguments.length>1)}}),n}.apply(v,h),r!==void 0&&(x.exports=r)},3781:(x,v,a)=>{var h;h=function(){"use strict";function r(n,p){return{get:function(){if(n()){delete this.get;return}return(this.get=p).apply(this,arguments)}}}return r}.call(v,a,v,x),h!==void 0&&(x.exports=h)},7432:(x,v,a)=>{var h,r;h=[a(8934),a(6871)],r=function(n,p){"use strict";function d(l,s,u,g){var i,y,f=20,c=g?function(){return g.cur()}:function(){return n.css(l,s,"")},_=c(),m=u&&u[3]||(n.cssNumber[s]?"":"px"),A=l.nodeType&&(n.cssNumber[s]||m!=="px"&&+_)&&p.exec(n.css(l,s));if(A&&A[3]!==m){for(_=_/2,m=m||A[3],A=+_||1;f--;)n.style(l,s,A+m),(1-y)*(1-(y=c()/_||.5))<=0&&(f=0),A=A/y;A=A*2,n.style(l,s,A+m),u=u||[]}return u&&(A=+A||+_||0,i=u[1]?A+(u[1]+1)*u[2]:+u[2],g&&(g.unit=m,g.start=A,g.end=i)),i}return d}.apply(v,h),r!==void 0&&(x.exports=r)},610:(x,v,a)=>{var h,r;h=[a(8934),a(70),a(3151),a(618),a(3122),a(4507),a(9508),a(4405)],r=function(n,p,d,l,s,u,g,i){"use strict";function y(f,c,_){var m,A,S,b,C=u.test(c),w=f.style;return _=_||s(f),_&&(b=_.getPropertyValue(c)||_[c],C&&b&&(b=b.replace(g,"$1")||void 0),b===""&&!p(f)&&(b=n.style(f,c)),!i.pixelBoxStyles()&&l.test(b)&&d.test(c)&&(m=w.width,A=w.minWidth,S=w.maxWidth,w.minWidth=w.maxWidth=w.width=b,b=_.width,w.width=m,w.minWidth=A,w.maxWidth=S)),b!==void 0?b+"":b}return y}.apply(v,h),r!==void 0&&(x.exports=r)},3997:(x,v,a)=>{var h,r;h=[a(7792),a(8934)],r=function(n,p){"use strict";var d=["Webkit","Moz","ms"],l=n.createElement("div").style,s={};function u(i){for(var y=i[0].toUpperCase()+i.slice(1),f=d.length;f--;)if(i=d[f]+y,i in l)return i}function g(i){var y=p.cssProps[i]||s[i];return y||(i in l?i:s[i]=u(i)||i)}return g}.apply(v,h),r!==void 0&&(x.exports=r)},2365:(x,v,a)=>{var h,r;h=[a(8934),a(655)],r=function(n){"use strict";n.expr.pseudos.hidden=function(p){return!n.expr.pseudos.visible(p)},n.expr.pseudos.visible=function(p){return!!(p.offsetWidth||p.offsetHeight||p.getClientRects().length)}}.apply(v,h),r!==void 0&&(x.exports=r)},8516:(x,v,a)=>{var h,r;h=[a(8934),a(9081),a(5626)],r=function(n,p,d){"use strict";var l={};function s(g){var i,y=g.ownerDocument,f=g.nodeName,c=l[f];return c||(i=y.body.appendChild(y.createElement(f)),c=n.css(i,"display"),i.parentNode.removeChild(i),c==="none"&&(c="block"),l[f]=c,c)}function u(g,i){for(var y,f,c=[],_=0,m=g.length;_<m;_++)f=g[_],f.style&&(y=f.style.display,i?(y==="none"&&(c[_]=p.get(f,"display")||null,c[_]||(f.style.display="")),f.style.display===""&&d(f)&&(c[_]=s(f))):y!=="none"&&(c[_]="none",p.set(f,"display",y)));for(_=0;_<m;_++)c[_]!=null&&(g[_].style.display=c[_]);return g}return n.fn.extend({show:function(){return u(this,!0)},hide:function(){return u(this)},toggle:function(g){return typeof g=="boolean"?g?this.show():this.hide():this.each(function(){d(this)?n(this).show():n(this).hide()})}}),u}.apply(v,h),r!==void 0&&(x.exports=r)},4405:(x,v,a)=>{var h,r;h=[a(8934),a(7792),a(7730),a(9523)],r=function(n,p,d,l){"use strict";return function(){function s(){if(A){m.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",A.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",d.appendChild(m).appendChild(A);var S=window.getComputedStyle(A);g=S.top!=="1%",_=u(S.marginLeft)===12,A.style.right="60%",f=u(S.right)===36,i=u(S.width)===36,A.style.position="absolute",y=u(A.offsetWidth/3)===12,d.removeChild(m),A=null}}function u(S){return Math.round(parseFloat(S))}var g,i,y,f,c,_,m=p.createElement("div"),A=p.createElement("div");A.style&&(A.style.backgroundClip="content-box",A.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle=A.style.backgroundClip==="content-box",n.extend(l,{boxSizingReliable:function(){return s(),i},pixelBoxStyles:function(){return s(),f},pixelPosition:function(){return s(),g},reliableMarginLeft:function(){return s(),_},scrollboxSize:function(){return s(),y},reliableTrDimensions:function(){var S,b,C,w;return c==null&&(S=p.createElement("table"),b=p.createElement("tr"),C=p.createElement("div"),S.style.cssText="position:absolute;left:-11111px;border-collapse:separate",b.style.cssText="border:1px solid",b.style.height="1px",C.style.height="9px",C.style.display="block",d.appendChild(S).appendChild(b).appendChild(C),w=window.getComputedStyle(b),c=parseInt(w.height,10)+parseInt(w.borderTopWidth,10)+parseInt(w.borderBottomWidth,10)===b.offsetHeight,d.removeChild(S)),c}}))}(),l}.apply(v,h),r!==void 0&&(x.exports=r)},5057:(x,v,a)=>{var h;h=function(){"use strict";return["Top","Right","Bottom","Left"]}.call(v,a,v,x),h!==void 0&&(x.exports=h)},3122:(x,v,a)=>{var h;h=function(){"use strict";return function(r){var n=r.ownerDocument.defaultView;return(!n||!n.opener)&&(n=window),n.getComputedStyle(r)}}.call(v,a,v,x),h!==void 0&&(x.exports=h)},5626:(x,v,a)=>{var h,r;h=[a(8934),a(70)],r=function(n,p){"use strict";return function(d,l){return d=l||d,d.style.display==="none"||d.style.display===""&&p(d)&&n.css(d,"display")==="none"}}.apply(v,h),r!==void 0&&(x.exports=r)},3151:(x,v,a)=>{var h,r;h=[a(5057)],r=function(n){"use strict";return new RegExp(n.join("|"),"i")}.apply(v,h),r!==void 0&&(x.exports=r)},4507:(x,v,a)=>{var h;h=function(){"use strict";return/^--/}.call(v,a,v,x),h!==void 0&&(x.exports=h)},618:(x,v,a)=>{var h,r;h=[a(8308)],r=function(n){"use strict";return new RegExp("^("+n+")(?!px)[a-z%]+$","i")}.apply(v,h),r!==void 0&&(x.exports=r)},5410:(x,v,a)=>{var h;h=function(){"use strict";return function(r,n,p){var d,l,s={};for(l in n)s[l]=r.style[l],r.style[l]=n[l];d=p.call(r);for(l in n)r.style[l]=s[l];return d}}.call(v,a,v,x),h!==void 0&&(x.exports=h)},1786:(x,v,a)=>{var h,r;h=[a(8934),a(7163),a(1133),a(9081),a(2109)],r=function(n,p,d,l,s){"use strict";var u=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,g=/[A-Z]/g;function i(f){return f==="true"?!0:f==="false"?!1:f==="null"?null:f===+f+""?+f:u.test(f)?JSON.parse(f):f}function y(f,c,_){var m;if(_===void 0&&f.nodeType===1)if(m="data-"+c.replace(g,"-$&").toLowerCase(),_=f.getAttribute(m),typeof _=="string"){try{_=i(_)}catch(A){}s.set(f,c,_)}else _=void 0;return _}return n.extend({hasData:function(f){return s.hasData(f)||l.hasData(f)},data:function(f,c,_){return s.access(f,c,_)},removeData:function(f,c){s.remove(f,c)},_data:function(f,c,_){return l.access(f,c,_)},_removeData:function(f,c){l.remove(f,c)}}),n.fn.extend({data:function(f,c){var _,m,A,S=this[0],b=S&&S.attributes;if(f===void 0){if(this.length&&(A=s.get(S),S.nodeType===1&&!l.get(S,"hasDataAttrs"))){for(_=b.length;_--;)b[_]&&(m=b[_].name,m.indexOf("data-")===0&&(m=d(m.slice(5)),y(S,m,A[m])));l.set(S,"hasDataAttrs",!0)}return A}return typeof f=="object"?this.each(function(){s.set(this,f)}):p(this,function(C){var w;if(S&&C===void 0)return w=s.get(S,f),w!==void 0||(w=y(S,f),w!==void 0)?w:void 0;this.each(function(){s.set(this,f,C)})},null,c,arguments.length>1,null,!0)},removeData:function(f){return this.each(function(){s.remove(this,f)})}}),n}.apply(v,h),r!==void 0&&(x.exports=r)},7172:(x,v,a)=>{var h,r;h=[a(8934),a(1133),a(8663),a(2238)],r=function(n,p,d,l){"use strict";function s(){this.expando=n.expando+s.uid++}return s.uid=1,s.prototype={cache:function(u){var g=u[this.expando];return g||(g={},l(u)&&(u.nodeType?u[this.expando]=g:Object.defineProperty(u,this.expando,{value:g,configurable:!0}))),g},set:function(u,g,i){var y,f=this.cache(u);if(typeof g=="string")f[p(g)]=i;else for(y in g)f[p(y)]=g[y];return f},get:function(u,g){return g===void 0?this.cache(u):u[this.expando]&&u[this.expando][p(g)]},access:function(u,g,i){return g===void 0||g&&typeof g=="string"&&i===void 0?this.get(u,g):(this.set(u,g,i),i!==void 0?i:g)},remove:function(u,g){var i,y=u[this.expando];if(y!==void 0){if(g!==void 0)for(Array.isArray(g)?g=g.map(p):(g=p(g),g=g in y?[g]:g.match(d)||[]),i=g.length;i--;)delete y[g[i]];(g===void 0||n.isEmptyObject(y))&&(u.nodeType?u[this.expando]=void 0:delete u[this.expando])}},hasData:function(u){var g=u[this.expando];return g!==void 0&&!n.isEmptyObject(g)}},s}.apply(v,h),r!==void 0&&(x.exports=r)},2238:(x,v,a)=>{var h;h=function(){"use strict";return function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType}}.call(v,a,v,x),h!==void 0&&(x.exports=h)},9081:(x,v,a)=>{var h,r;h=[a(7172)],r=function(n){"use strict";return new n}.apply(v,h),r!==void 0&&(x.exports=r)},2109:(x,v,a)=>{var h,r;h=[a(7172)],r=function(n){"use strict";return new n}.apply(v,h),r!==void 0&&(x.exports=r)},6525:(x,v,a)=>{var h,r;h=[a(8934),a(2134),a(3623),a(8924)],r=function(n,p,d){"use strict";function l(g){return g}function s(g){throw g}function u(g,i,y,f){var c;try{g&&p(c=g.promise)?c.call(g).done(i).fail(y):g&&p(c=g.then)?c.call(g,i,y):i.apply(void 0,[g].slice(f))}catch(_){y.apply(void 0,[_])}}return n.extend({Deferred:function(g){var i=[["notify","progress",n.Callbacks("memory"),n.Callbacks("memory"),2],["resolve","done",n.Callbacks("once memory"),n.Callbacks("once memory"),0,"resolved"],["reject","fail",n.Callbacks("once memory"),n.Callbacks("once memory"),1,"rejected"]],y="pending",f={state:function(){return y},always:function(){return c.done(arguments).fail(arguments),this},catch:function(_){return f.then(null,_)},pipe:function(){var _=arguments;return n.Deferred(function(m){n.each(i,function(A,S){var b=p(_[S[4]])&&_[S[4]];c[S[1]](function(){var C=b&&b.apply(this,arguments);C&&p(C.promise)?C.promise().progress(m.notify).done(m.resolve).fail(m.reject):m[S[0]+"With"](this,b?[C]:arguments)})}),_=null}).promise()},then:function(_,m,A){var S=0;function b(C,w,P,I){return function(){var N=this,R=arguments,T=function(){var H,$;if(!(C<S)){if(H=P.apply(N,R),H===w.promise())throw new TypeError("Thenable self-resolution");$=H&&(typeof H=="object"||typeof H=="function")&&H.then,p($)?I?$.call(H,b(S,w,l,I),b(S,w,s,I)):(S++,$.call(H,b(S,w,l,I),b(S,w,s,I),b(S,w,l,w.notifyWith))):(P!==l&&(N=void 0,R=[H]),(I||w.resolveWith)(N,R))}},L=I?T:function(){try{T()}catch(H){n.Deferred.exceptionHook&&n.Deferred.exceptionHook(H,L.stackTrace),C+1>=S&&(P!==s&&(N=void 0,R=[H]),w.rejectWith(N,R))}};C?L():(n.Deferred.getStackHook&&(L.stackTrace=n.Deferred.getStackHook()),window.setTimeout(L))}}return n.Deferred(function(C){i[0][3].add(b(0,C,p(A)?A:l,C.notifyWith)),i[1][3].add(b(0,C,p(_)?_:l)),i[2][3].add(b(0,C,p(m)?m:s))}).promise()},promise:function(_){return _!=null?n.extend(_,f):f}},c={};return n.each(i,function(_,m){var A=m[2],S=m[5];f[m[1]]=A.add,S&&A.add(function(){y=S},i[3-_][2].disable,i[3-_][3].disable,i[0][2].lock,i[0][3].lock),A.add(m[3].fire),c[m[0]]=function(){return c[m[0]+"With"](this===c?void 0:this,arguments),this},c[m[0]+"With"]=A.fireWith}),f.promise(c),g&&g.call(c,c),c},when:function(g){var i=arguments.length,y=i,f=Array(y),c=d.call(arguments),_=n.Deferred(),m=function(A){return function(S){f[A]=this,c[A]=arguments.length>1?d.call(arguments):S,--i||_.resolveWith(f,c)}};if(i<=1&&(u(g,_.done(m(y)).resolve,_.reject,!i),_.state()==="pending"||p(c[y]&&c[y].then)))return _.then();for(;y--;)u(c[y],m(y),_.reject);return _.promise()}}),n}.apply(v,h),r!==void 0&&(x.exports=r)},1009:(x,v,a)=>{var h,r;h=[a(8934),a(6525)],r=function(n){"use strict";var p=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;n.Deferred.exceptionHook=function(d,l){window.console&&window.console.warn&&d&&p.test(d.name)&&window.console.warn("jQuery.Deferred exception: "+d.message,d.stack,l)}}.apply(v,h),r!==void 0&&(x.exports=r)},7722:(x,v,a)=>{var h,r;h=[a(8934),a(7060),a(1133),a(8082),a(2134),a(9031),a(3623),a(7982),a(8138)],r=function(n,p,d,l,s,u,g){"use strict";var i=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;n.proxy=function(y,f){var c,_,m;if(typeof f=="string"&&(c=y[f],f=y,y=c),!!s(y))return _=g.call(arguments,2),m=function(){return y.apply(f||this,_.concat(g.call(arguments)))},m.guid=y.guid=y.guid||n.guid++,m},n.holdReady=function(y){y?n.readyWait++:n.ready(!0)},n.isArray=Array.isArray,n.parseJSON=JSON.parse,n.nodeName=p,n.isFunction=s,n.isWindow=u,n.camelCase=d,n.type=l,n.now=Date.now,n.isNumeric=function(y){var f=n.type(y);return(f==="number"||f==="string")&&!isNaN(y-parseFloat(y))},n.trim=function(y){return y==null?"":(y+"").replace(i,"$1")}}.apply(v,h),r!==void 0&&(x.exports=r)},7982:(x,v,a)=>{var h,r;h=[a(8934),a(7178),a(7881)],r=function(n){"use strict";n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(p,d){n.fn[d]=function(l){return this.on(d,l)}})}.apply(v,h),r!==void 0&&(x.exports=r)},8138:(x,v,a)=>{var h,r;h=[a(8934),a(7881),a(1045)],r=function(n){"use strict";n.fn.extend({bind:function(p,d,l){return this.on(p,null,d,l)},unbind:function(p,d){return this.off(p,null,d)},delegate:function(p,d,l,s){return this.on(d,p,l,s)},undelegate:function(p,d,l){return arguments.length===1?this.off(p,"**"):this.off(d,p||"**",l)},hover:function(p,d){return this.mouseenter(p).mouseleave(d||p)}}),n.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(p,d){n.fn[d]=function(l,s){return arguments.length>0?this.on(d,null,l,s):this.trigger(d)}})}.apply(v,h),r!==void 0&&(x.exports=r)},5126:(x,v,a)=>{var h,r;h=[a(8934),a(7163),a(9031),a(8515)],r=function(n,p,d){"use strict";return n.each({Height:"height",Width:"width"},function(l,s){n.each({padding:"inner"+l,content:s,"":"outer"+l},function(u,g){n.fn[g]=function(i,y){var f=arguments.length&&(u||typeof i!="boolean"),c=u||(i===!0||y===!0?"margin":"border");return p(this,function(_,m,A){var S;return d(_)?g.indexOf("outer")===0?_["inner"+l]:_.document.documentElement["client"+l]:_.nodeType===9?(S=_.documentElement,Math.max(_.body["scroll"+l],S["scroll"+l],_.body["offset"+l],S["offset"+l],S["client"+l])):A===void 0?n.css(_,m,c):n.style(_,m,A,c)},s,f?i:void 0,f)}})}),n}.apply(v,h),r!==void 0&&(x.exports=r)},7429:(x,v,a)=>{var h,r;h=[a(8934),a(1133),a(7792),a(2134),a(6871),a(8663),a(5057),a(5626),a(7432),a(9081),a(8516),a(8048),a(1387),a(6525),a(8482),a(2632),a(8515),a(8314)],r=function(n,p,d,l,s,u,g,i,y,f,c){"use strict";var _,m,A=/^(?:toggle|show|hide)$/,S=/queueHooks$/;function b(){m&&(d.hidden===!1&&window.requestAnimationFrame?window.requestAnimationFrame(b):window.setTimeout(b,n.fx.interval),n.fx.tick())}function C(){return window.setTimeout(function(){_=void 0}),_=Date.now()}function w(T,L){var H,$=0,Y={height:T};for(L=L?1:0;$<4;$+=2-L)H=g[$],Y["margin"+H]=Y["padding"+H]=T;return L&&(Y.opacity=Y.width=T),Y}function P(T,L,H){for(var $,Y=(R.tweeners[L]||[]).concat(R.tweeners["*"]),O=0,U=Y.length;O<U;O++)if($=Y[O].call(H,L,T))return $}function I(T,L,H){var $,Y,O,U,M,K,G,te,se="width"in L||"height"in L,pe=this,ee={},he=T.style,be=T.nodeType&&i(T),Te=f.get(T,"fxshow");H.queue||(U=n._queueHooks(T,"fx"),U.unqueued==null&&(U.unqueued=0,M=U.empty.fire,U.empty.fire=function(){U.unqueued||M()}),U.unqueued++,pe.always(function(){pe.always(function(){U.unqueued--,n.queue(T,"fx").length||U.empty.fire()})}));for($ in L)if(Y=L[$],A.test(Y)){if(delete L[$],O=O||Y==="toggle",Y===(be?"hide":"show"))if(Y==="show"&&Te&&Te[$]!==void 0)be=!0;else continue;ee[$]=Te&&Te[$]||n.style(T,$)}if(K=!n.isEmptyObject(L),!(!K&&n.isEmptyObject(ee))){se&&T.nodeType===1&&(H.overflow=[he.overflow,he.overflowX,he.overflowY],G=Te&&Te.display,G==null&&(G=f.get(T,"display")),te=n.css(T,"display"),te==="none"&&(G?te=G:(c([T],!0),G=T.style.display||G,te=n.css(T,"display"),c([T]))),(te==="inline"||te==="inline-block"&&G!=null)&&n.css(T,"float")==="none"&&(K||(pe.done(function(){he.display=G}),G==null&&(te=he.display,G=te==="none"?"":te)),he.display="inline-block")),H.overflow&&(he.overflow="hidden",pe.always(function(){he.overflow=H.overflow[0],he.overflowX=H.overflow[1],he.overflowY=H.overflow[2]})),K=!1;for($ in ee)K||(Te?"hidden"in Te&&(be=Te.hidden):Te=f.access(T,"fxshow",{display:G}),O&&(Te.hidden=!be),be&&c([T],!0),pe.done(function(){be||c([T]),f.remove(T,"fxshow");for($ in ee)n.style(T,$,ee[$])})),K=P(be?Te[$]:0,$,pe),$ in Te||(Te[$]=K.start,be&&(K.end=K.start,K.start=0))}}function N(T,L){var H,$,Y,O,U;for(H in T)if($=p(H),Y=L[$],O=T[H],Array.isArray(O)&&(Y=O[1],O=T[H]=O[0]),H!==$&&(T[$]=O,delete T[H]),U=n.cssHooks[$],U&&"expand"in U){O=U.expand(O),delete T[$];for(H in O)H in T||(T[H]=O[H],L[H]=Y)}else L[$]=Y}function R(T,L,H){var $,Y,O=0,U=R.prefilters.length,M=n.Deferred().always(function(){delete K.elem}),K=function(){if(Y)return!1;for(var se=_||C(),pe=Math.max(0,G.startTime+G.duration-se),ee=pe/G.duration||0,he=1-ee,be=0,Te=G.tweens.length;be<Te;be++)G.tweens[be].run(he);return M.notifyWith(T,[G,he,pe]),he<1&&Te?pe:(Te||M.notifyWith(T,[G,1,0]),M.resolveWith(T,[G]),!1)},G=M.promise({elem:T,props:n.extend({},L),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},H),originalProperties:L,originalOptions:H,startTime:_||C(),duration:H.duration,tweens:[],createTween:function(se,pe){var ee=n.Tween(T,G.opts,se,pe,G.opts.specialEasing[se]||G.opts.easing);return G.tweens.push(ee),ee},stop:function(se){var pe=0,ee=se?G.tweens.length:0;if(Y)return this;for(Y=!0;pe<ee;pe++)G.tweens[pe].run(1);return se?(M.notifyWith(T,[G,1,0]),M.resolveWith(T,[G,se])):M.rejectWith(T,[G,se]),this}}),te=G.props;for(N(te,G.opts.specialEasing);O<U;O++)if($=R.prefilters[O].call(G,T,te,G.opts),$)return l($.stop)&&(n._queueHooks(G.elem,G.opts.queue).stop=$.stop.bind($)),$;return n.map(te,P,G),l(G.opts.start)&&G.opts.start.call(T,G),G.progress(G.opts.progress).done(G.opts.done,G.opts.complete).fail(G.opts.fail).always(G.opts.always),n.fx.timer(n.extend(K,{elem:T,anim:G,queue:G.opts.queue})),G}return n.Animation=n.extend(R,{tweeners:{"*":[function(T,L){var H=this.createTween(T,L);return y(H.elem,T,s.exec(L),H),H}]},tweener:function(T,L){l(T)?(L=T,T=["*"]):T=T.match(u);for(var H,$=0,Y=T.length;$<Y;$++)H=T[$],R.tweeners[H]=R.tweeners[H]||[],R.tweeners[H].unshift(L)},prefilters:[I],prefilter:function(T,L){L?R.prefilters.unshift(T):R.prefilters.push(T)}}),n.speed=function(T,L,H){var $=T&&typeof T=="object"?n.extend({},T):{complete:H||!H&&L||l(T)&&T,duration:T,easing:H&&L||L&&!l(L)&&L};return n.fx.off?$.duration=0:typeof $.duration!="number"&&($.duration in n.fx.speeds?$.duration=n.fx.speeds[$.duration]:$.duration=n.fx.speeds._default),($.queue==null||$.queue===!0)&&($.queue="fx"),$.old=$.complete,$.complete=function(){l($.old)&&$.old.call(this),$.queue&&n.dequeue(this,$.queue)},$},n.fn.extend({fadeTo:function(T,L,H,$){return this.filter(i).css("opacity",0).show().end().animate({opacity:L},T,H,$)},animate:function(T,L,H,$){var Y=n.isEmptyObject(T),O=n.speed(L,H,$),U=function(){var M=R(this,n.extend({},T),O);(Y||f.get(this,"finish"))&&M.stop(!0)};return U.finish=U,Y||O.queue===!1?this.each(U):this.queue(O.queue,U)},stop:function(T,L,H){var $=function(Y){var O=Y.stop;delete Y.stop,O(H)};return typeof T!="string"&&(H=L,L=T,T=void 0),L&&this.queue(T||"fx",[]),this.each(function(){var Y=!0,O=T!=null&&T+"queueHooks",U=n.timers,M=f.get(this);if(O)M[O]&&M[O].stop&&$(M[O]);else for(O in M)M[O]&&M[O].stop&&S.test(O)&&$(M[O]);for(O=U.length;O--;)U[O].elem===this&&(T==null||U[O].queue===T)&&(U[O].anim.stop(H),Y=!1,U.splice(O,1));(Y||!H)&&n.dequeue(this,T)})},finish:function(T){return T!==!1&&(T=T||"fx"),this.each(function(){var L,H=f.get(this),$=H[T+"queue"],Y=H[T+"queueHooks"],O=n.timers,U=$?$.length:0;for(H.finish=!0,n.queue(this,T,[]),Y&&Y.stop&&Y.stop.call(this,!0),L=O.length;L--;)O[L].elem===this&&O[L].queue===T&&(O[L].anim.stop(!0),O.splice(L,1));for(L=0;L<U;L++)$[L]&&$[L].finish&&$[L].finish.call(this);delete H.finish})}}),n.each(["toggle","show","hide"],function(T,L){var H=n.fn[L];n.fn[L]=function($,Y,O){return $==null||typeof $=="boolean"?H.apply(this,arguments):this.animate(w(L,!0),$,Y,O)}}),n.each({slideDown:w("show"),slideUp:w("hide"),slideToggle:w("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(T,L){n.fn[T]=function(H,$,Y){return this.animate(L,H,$,Y)}}),n.timers=[],n.fx.tick=function(){var T,L=0,H=n.timers;for(_=Date.now();L<H.length;L++)T=H[L],!T()&&H[L]===T&&H.splice(L--,1);H.length||n.fx.stop(),_=void 0},n.fx.timer=function(T){n.timers.push(T),n.fx.start()},n.fx.interval=13,n.fx.start=function(){m||(m=!0,b())},n.fx.stop=function(){m=null},n.fx.speeds={slow:600,fast:200,_default:400},n}.apply(v,h),r!==void 0&&(x.exports=r)},8314:(x,v,a)=>{var h,r;h=[a(8934),a(3997),a(8515)],r=function(n,p){"use strict";function d(l,s,u,g,i){return new d.prototype.init(l,s,u,g,i)}n.Tween=d,d.prototype={constructor:d,init:function(l,s,u,g,i,y){this.elem=l,this.prop=u,this.easing=i||n.easing._default,this.options=s,this.start=this.now=this.cur(),this.end=g,this.unit=y||(n.cssNumber[u]?"":"px")},cur:function(){var l=d.propHooks[this.prop];return l&&l.get?l.get(this):d.propHooks._default.get(this)},run:function(l){var s,u=d.propHooks[this.prop];return this.options.duration?this.pos=s=n.easing[this.easing](l,this.options.duration*l,0,1,this.options.duration):this.pos=s=l,this.now=(this.end-this.start)*s+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),u&&u.set?u.set(this):d.propHooks._default.set(this),this}},d.prototype.init.prototype=d.prototype,d.propHooks={_default:{get:function(l){var s;return l.elem.nodeType!==1||l.elem[l.prop]!=null&&l.elem.style[l.prop]==null?l.elem[l.prop]:(s=n.css(l.elem,l.prop,""),!s||s==="auto"?0:s)},set:function(l){n.fx.step[l.prop]?n.fx.step[l.prop](l):l.elem.nodeType===1&&(n.cssHooks[l.prop]||l.elem.style[p(l.prop)]!=null)?n.style(l.elem,l.prop,l.now+l.unit):l.elem[l.prop]=l.now}}},d.propHooks.scrollTop=d.propHooks.scrollLeft={set:function(l){l.elem.nodeType&&l.elem.parentNode&&(l.elem[l.prop]=l.now)}},n.easing={linear:function(l){return l},swing:function(l){return .5-Math.cos(l*Math.PI)/2},_default:"swing"},n.fx=d.prototype.init,n.fx.step={}}.apply(v,h),r!==void 0&&(x.exports=r)},8393:(x,v,a)=>{var h,r;h=[a(8934),a(655),a(7429)],r=function(n){"use strict";n.expr.pseudos.animated=function(p){return n.grep(n.timers,function(d){return p===d.elem}).length}}.apply(v,h),r!==void 0&&(x.exports=r)},7881:(x,v,a)=>{var h,r;h=[a(8934),a(7792),a(7730),a(2134),a(8663),a(8104),a(3623),a(2238),a(9081),a(7060),a(8048),a(655)],r=function(n,p,d,l,s,u,g,i,y,f){"use strict";var c=/^([^.]*)(?:\.(.+)|)/;function _(){return!0}function m(){return!1}function A(w,P){return w===S()==(P==="focus")}function S(){try{return p.activeElement}catch(w){}}function b(w,P,I,N,R,T){var L,H;if(typeof P=="object"){typeof I!="string"&&(N=N||I,I=void 0);for(H in P)b(w,H,I,N,P[H],T);return w}if(N==null&&R==null?(R=I,N=I=void 0):R==null&&(typeof I=="string"?(R=N,N=void 0):(R=N,N=I,I=void 0)),R===!1)R=m;else if(!R)return w;return T===1&&(L=R,R=function($){return n().off($),L.apply(this,arguments)},R.guid=L.guid||(L.guid=n.guid++)),w.each(function(){n.event.add(this,P,R,N,I)})}n.event={global:{},add:function(w,P,I,N,R){var T,L,H,$,Y,O,U,M,K,G,te,se=y.get(w);if(i(w))for(I.handler&&(T=I,I=T.handler,R=T.selector),R&&n.find.matchesSelector(d,R),I.guid||(I.guid=n.guid++),($=se.events)||($=se.events=Object.create(null)),(L=se.handle)||(L=se.handle=function(pe){return typeof n!="undefined"&&n.event.triggered!==pe.type?n.event.dispatch.apply(w,arguments):void 0}),P=(P||"").match(s)||[""],Y=P.length;Y--;)H=c.exec(P[Y])||[],K=te=H[1],G=(H[2]||"").split(".").sort(),K&&(U=n.event.special[K]||{},K=(R?U.delegateType:U.bindType)||K,U=n.event.special[K]||{},O=n.extend({type:K,origType:te,data:N,handler:I,guid:I.guid,selector:R,needsContext:R&&n.expr.match.needsContext.test(R),namespace:G.join(".")},T),(M=$[K])||(M=$[K]=[],M.delegateCount=0,(!U.setup||U.setup.call(w,N,G,L)===!1)&&w.addEventListener&&w.addEventListener(K,L)),U.add&&(U.add.call(w,O),O.handler.guid||(O.handler.guid=I.guid)),R?M.splice(M.delegateCount++,0,O):M.push(O),n.event.global[K]=!0)},remove:function(w,P,I,N,R){var T,L,H,$,Y,O,U,M,K,G,te,se=y.hasData(w)&&y.get(w);if(!(!se||!($=se.events))){for(P=(P||"").match(s)||[""],Y=P.length;Y--;){if(H=c.exec(P[Y])||[],K=te=H[1],G=(H[2]||"").split(".").sort(),!K){for(K in $)n.event.remove(w,K+P[Y],I,N,!0);continue}for(U=n.event.special[K]||{},K=(N?U.delegateType:U.bindType)||K,M=$[K]||[],H=H[2]&&new RegExp("(^|\\.)"+G.join("\\.(?:.*\\.|)")+"(\\.|$)"),L=T=M.length;T--;)O=M[T],(R||te===O.origType)&&(!I||I.guid===O.guid)&&(!H||H.test(O.namespace))&&(!N||N===O.selector||N==="**"&&O.selector)&&(M.splice(T,1),O.selector&&M.delegateCount--,U.remove&&U.remove.call(w,O));L&&!M.length&&((!U.teardown||U.teardown.call(w,G,se.handle)===!1)&&n.removeEvent(w,K,se.handle),delete $[K])}n.isEmptyObject($)&&y.remove(w,"handle events")}},dispatch:function(w){var P,I,N,R,T,L,H=new Array(arguments.length),$=n.event.fix(w),Y=(y.get(this,"events")||Object.create(null))[$.type]||[],O=n.event.special[$.type]||{};for(H[0]=$,P=1;P<arguments.length;P++)H[P]=arguments[P];if($.delegateTarget=this,!(O.preDispatch&&O.preDispatch.call(this,$)===!1)){for(L=n.event.handlers.call(this,$,Y),P=0;(R=L[P++])&&!$.isPropagationStopped();)for($.currentTarget=R.elem,I=0;(T=R.handlers[I++])&&!$.isImmediatePropagationStopped();)(!$.rnamespace||T.namespace===!1||$.rnamespace.test(T.namespace))&&($.handleObj=T,$.data=T.data,N=((n.event.special[T.origType]||{}).handle||T.handler).apply(R.elem,H),N!==void 0&&($.result=N)===!1&&($.preventDefault(),$.stopPropagation()));return O.postDispatch&&O.postDispatch.call(this,$),$.result}},handlers:function(w,P){var I,N,R,T,L,H=[],$=P.delegateCount,Y=w.target;if($&&Y.nodeType&&!(w.type==="click"&&w.button>=1)){for(;Y!==this;Y=Y.parentNode||this)if(Y.nodeType===1&&!(w.type==="click"&&Y.disabled===!0)){for(T=[],L={},I=0;I<$;I++)N=P[I],R=N.selector+" ",L[R]===void 0&&(L[R]=N.needsContext?n(R,this).index(Y)>-1:n.find(R,this,null,[Y]).length),L[R]&&T.push(N);T.length&&H.push({elem:Y,handlers:T})}}return Y=this,$<P.length&&H.push({elem:Y,handlers:P.slice($)}),H},addProp:function(w,P){Object.defineProperty(n.Event.prototype,w,{enumerable:!0,configurable:!0,get:l(P)?function(){if(this.originalEvent)return P(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[w]},set:function(I){Object.defineProperty(this,w,{enumerable:!0,configurable:!0,writable:!0,value:I})}})},fix:function(w){return w[n.expando]?w:new n.Event(w)},special:{load:{noBubble:!0},click:{setup:function(w){var P=this||w;return u.test(P.type)&&P.click&&f(P,"input")&&C(P,"click",_),!1},trigger:function(w){var P=this||w;return u.test(P.type)&&P.click&&f(P,"input")&&C(P,"click"),!0},_default:function(w){var P=w.target;return u.test(P.type)&&P.click&&f(P,"input")&&y.get(P,"click")||f(P,"a")}},beforeunload:{postDispatch:function(w){w.result!==void 0&&w.originalEvent&&(w.originalEvent.returnValue=w.result)}}}};function C(w,P,I){if(!I){y.get(w,P)===void 0&&n.event.add(w,P,_);return}y.set(w,P,!1),n.event.add(w,P,{namespace:!1,handler:function(N){var R,T,L=y.get(this,P);if(N.isTrigger&1&&this[P]){if(L.length)(n.event.special[P]||{}).delegateType&&N.stopPropagation();else if(L=g.call(arguments),y.set(this,P,L),R=I(this,P),this[P](),T=y.get(this,P),L!==T||R?y.set(this,P,!1):T={},L!==T)return N.stopImmediatePropagation(),N.preventDefault(),T&&T.value}else L.length&&(y.set(this,P,{value:n.event.trigger(n.extend(L[0],n.Event.prototype),L.slice(1),this)}),N.stopImmediatePropagation())}})}return n.removeEvent=function(w,P,I){w.removeEventListener&&w.removeEventListener(P,I)},n.Event=function(w,P){if(!(this instanceof n.Event))return new n.Event(w,P);w&&w.type?(this.originalEvent=w,this.type=w.type,this.isDefaultPrevented=w.defaultPrevented||w.defaultPrevented===void 0&&w.returnValue===!1?_:m,this.target=w.target&&w.target.nodeType===3?w.target.parentNode:w.target,this.currentTarget=w.currentTarget,this.relatedTarget=w.relatedTarget):this.type=w,P&&n.extend(this,P),this.timeStamp=w&&w.timeStamp||Date.now(),this[n.expando]=!0},n.Event.prototype={constructor:n.Event,isDefaultPrevented:m,isPropagationStopped:m,isImmediatePropagationStopped:m,isSimulated:!1,preventDefault:function(){var w=this.originalEvent;this.isDefaultPrevented=_,w&&!this.isSimulated&&w.preventDefault()},stopPropagation:function(){var w=this.originalEvent;this.isPropagationStopped=_,w&&!this.isSimulated&&w.stopPropagation()},stopImmediatePropagation:function(){var w=this.originalEvent;this.isImmediatePropagationStopped=_,w&&!this.isSimulated&&w.stopImmediatePropagation(),this.stopPropagation()}},n.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},n.event.addProp),n.each({focus:"focusin",blur:"focusout"},function(w,P){n.event.special[w]={setup:function(){return C(this,w,A),!1},trigger:function(){return C(this,w),!0},_default:function(I){return y.get(I.target,w)},delegateType:P}}),n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(w,P){n.event.special[w]={delegateType:P,bindType:P,handle:function(I){var N,R=this,T=I.relatedTarget,L=I.handleObj;return(!T||T!==R&&!n.contains(R,T))&&(I.type=L.origType,N=L.handler.apply(this,arguments),I.type=P),N}}}),n.fn.extend({on:function(w,P,I,N){return b(this,w,P,I,N)},one:function(w,P,I,N){return b(this,w,P,I,N,1)},off:function(w,P,I){var N,R;if(w&&w.preventDefault&&w.handleObj)return N=w.handleObj,n(w.delegateTarget).off(N.namespace?N.origType+"."+N.namespace:N.origType,N.selector,N.handler),this;if(typeof w=="object"){for(R in w)this.off(R,P,w[R]);return this}return(P===!1||typeof P=="function")&&(I=P,P=void 0),I===!1&&(I=m),this.each(function(){n.event.remove(this,w,I,P)})}}),n}.apply(v,h),r!==void 0&&(x.exports=r)},6611:(x,v,a)=>{var h,r;h=[a(8934),a(9081),a(8266),a(7881),a(1045)],r=function(n,p,d){"use strict";return d.focusin||n.each({focus:"focusin",blur:"focusout"},function(l,s){var u=function(g){n.event.simulate(s,g.target,n.event.fix(g))};n.event.special[s]={setup:function(){var g=this.ownerDocument||this.document||this,i=p.access(g,s);i||g.addEventListener(l,u,!0),p.access(g,s,(i||0)+1)},teardown:function(){var g=this.ownerDocument||this.document||this,i=p.access(g,s)-1;i?p.access(g,s,i):(g.removeEventListener(l,u,!0),p.remove(g,s))}}}),n}.apply(v,h),r!==void 0&&(x.exports=r)},8266:(x,v,a)=>{var h,r;h=[a(9523)],r=function(n){"use strict";return n.focusin="onfocusin"in window,n}.apply(v,h),r!==void 0&&(x.exports=r)},1045:(x,v,a)=>{var h,r;h=[a(8934),a(7792),a(9081),a(2238),a(9694),a(2134),a(9031),a(7881)],r=function(n,p,d,l,s,u,g){"use strict";var i=/^(?:focusinfocus|focusoutblur)$/,y=function(f){f.stopPropagation()};return n.extend(n.event,{trigger:function(f,c,_,m){var A,S,b,C,w,P,I,N,R=[_||p],T=s.call(f,"type")?f.type:f,L=s.call(f,"namespace")?f.namespace.split("."):[];if(S=N=b=_=_||p,!(_.nodeType===3||_.nodeType===8)&&!i.test(T+n.event.triggered)&&(T.indexOf(".")>-1&&(L=T.split("."),T=L.shift(),L.sort()),w=T.indexOf(":")<0&&"on"+T,f=f[n.expando]?f:new n.Event(T,typeof f=="object"&&f),f.isTrigger=m?2:3,f.namespace=L.join("."),f.rnamespace=f.namespace?new RegExp("(^|\\.)"+L.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,f.result=void 0,f.target||(f.target=_),c=c==null?[f]:n.makeArray(c,[f]),I=n.event.special[T]||{},!(!m&&I.trigger&&I.trigger.apply(_,c)===!1))){if(!m&&!I.noBubble&&!g(_)){for(C=I.delegateType||T,i.test(C+T)||(S=S.parentNode);S;S=S.parentNode)R.push(S),b=S;b===(_.ownerDocument||p)&&R.push(b.defaultView||b.parentWindow||window)}for(A=0;(S=R[A++])&&!f.isPropagationStopped();)N=S,f.type=A>1?C:I.bindType||T,P=(d.get(S,"events")||Object.create(null))[f.type]&&d.get(S,"handle"),P&&P.apply(S,c),P=w&&S[w],P&&P.apply&&l(S)&&(f.result=P.apply(S,c),f.result===!1&&f.preventDefault());return f.type=T,!m&&!f.isDefaultPrevented()&&(!I._default||I._default.apply(R.pop(),c)===!1)&&l(_)&&w&&u(_[T])&&!g(_)&&(b=_[w],b&&(_[w]=null),n.event.triggered=T,f.isPropagationStopped()&&N.addEventListener(T,y),_[T](),f.isPropagationStopped()&&N.removeEventListener(T,y),n.event.triggered=void 0,b&&(_[w]=b)),f.result}},simulate:function(f,c,_){var m=n.extend(new n.Event,_,{type:f,isSimulated:!0});n.event.trigger(m,null,c)}}),n.fn.extend({trigger:function(f,c){return this.each(function(){n.event.trigger(f,c,this)})},triggerHandler:function(f,c){var _=this[0];if(_)return n.event.trigger(f,c,_,!0)}}),n}.apply(v,h),r!==void 0&&(x.exports=r)},692:(x,v,a)=>{var h,r,h,r;h=[a(8934)],r=function(n){"use strict";h=[],r=function(){return n}.apply(v,h),r!==void 0&&(x.exports=r)}.apply(v,h),r!==void 0&&(x.exports=r)},4278:(x,v,a)=>{var h,r;h=[a(8934)],r=function(n){"use strict";var p=window.jQuery,d=window.$;n.noConflict=function(l){return window.$===n&&(window.$=d),l&&window.jQuery===n&&(window.jQuery=p),n},typeof noGlobal=="undefined"&&(window.jQuery=window.$=n)}.apply(v,h),r!==void 0&&(x.exports=r)},4002:(x,v,a)=>{var h,r;h=[a(8934),a(655),a(8482),a(8924),a(6525),a(1009),a(5703),a(1786),a(1387),a(6572),a(8468),a(7881),a(6611),a(2632),a(8123),a(5594),a(8515),a(2365),a(5385),a(7178),a(8853),a(5488),a(7533),a(4581),a(461),a(2889),a(7429),a(8393),a(5356),a(5126),a(7722),a(692),a(4278)],r=function(n){"use strict";return n}.apply(v,h),r!==void 0&&(x.exports=r)},2632:(x,v,a)=>{var h,r;h=[a(8934),a(70),a(3932),a(2134),a(1780),a(8104),a(7163),a(9422),a(8950),a(5219),a(2455),a(7162),a(3360),a(8771),a(9081),a(2109),a(2238),a(1224),a(7060),a(8048),a(8482),a(655),a(7881)],r=function(n,p,d,l,s,u,g,i,y,f,c,_,m,A,S,b,C,w,P){"use strict";var I=/<script|<style|<link/i,N=/checked\s*(?:[^=]|=\s*.checked.)/i,R=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function T(M,K){return P(M,"table")&&P(K.nodeType!==11?K:K.firstChild,"tr")&&n(M).children("tbody")[0]||M}function L(M){return M.type=(M.getAttribute("type")!==null)+"/"+M.type,M}function H(M){return(M.type||"").slice(0,5)==="true/"?M.type=M.type.slice(5):M.removeAttribute("type"),M}function $(M,K){var G,te,se,pe,ee,he,be;if(K.nodeType===1){if(S.hasData(M)&&(pe=S.get(M),be=pe.events,be)){S.remove(K,"handle events");for(se in be)for(G=0,te=be[se].length;G<te;G++)n.event.add(K,se,be[se][G])}b.hasData(M)&&(ee=b.access(M),he=n.extend({},ee),b.set(K,he))}}function Y(M,K){var G=K.nodeName.toLowerCase();G==="input"&&u.test(M.type)?K.checked=M.checked:(G==="input"||G==="textarea")&&(K.defaultValue=M.defaultValue)}function O(M,K,G,te){K=d(K);var se,pe,ee,he,be,Te,je=0,ht=M.length,gt=ht-1,_t=K[0],Dt=l(_t);if(Dt||ht>1&&typeof _t=="string"&&!A.checkClone&&N.test(_t))return M.each(function(Be){var St=M.eq(Be);Dt&&(K[0]=_t.call(this,Be,St.html())),O(St,K,G,te)});if(ht&&(se=m(K,M[0].ownerDocument,!1,M,te),pe=se.firstChild,se.childNodes.length===1&&(se=pe),pe||te)){for(ee=n.map(c(se,"script"),L),he=ee.length;je<ht;je++)be=se,je!==gt&&(be=n.clone(be,!0,!0),he&&n.merge(ee,c(be,"script"))),G.call(M[je],be,je);if(he)for(Te=ee[ee.length-1].ownerDocument,n.map(ee,H),je=0;je<he;je++)be=ee[je],y.test(be.type||"")&&!S.access(be,"globalEval")&&n.contains(Te,be)&&(be.src&&(be.type||"").toLowerCase()!=="module"?n._evalUrl&&!be.noModule&&n._evalUrl(be.src,{nonce:be.nonce||be.getAttribute("nonce")},Te):w(be.textContent.replace(R,""),be,Te))}return M}function U(M,K,G){for(var te,se=K?n.filter(K,M):M,pe=0;(te=se[pe])!=null;pe++)!G&&te.nodeType===1&&n.cleanData(c(te)),te.parentNode&&(G&&p(te)&&_(c(te,"script")),te.parentNode.removeChild(te));return M}return n.extend({htmlPrefilter:function(M){return M},clone:function(M,K,G){var te,se,pe,ee,he=M.cloneNode(!0),be=p(M);if(!A.noCloneChecked&&(M.nodeType===1||M.nodeType===11)&&!n.isXMLDoc(M))for(ee=c(he),pe=c(M),te=0,se=pe.length;te<se;te++)Y(pe[te],ee[te]);if(K)if(G)for(pe=pe||c(M),ee=ee||c(he),te=0,se=pe.length;te<se;te++)$(pe[te],ee[te]);else $(M,he);return ee=c(he,"script"),ee.length>0&&_(ee,!be&&c(M,"script")),he},cleanData:function(M){for(var K,G,te,se=n.event.special,pe=0;(G=M[pe])!==void 0;pe++)if(C(G)){if(K=G[S.expando]){if(K.events)for(te in K.events)se[te]?n.event.remove(G,te):n.removeEvent(G,te,K.handle);G[S.expando]=void 0}G[b.expando]&&(G[b.expando]=void 0)}}}),n.fn.extend({detach:function(M){return U(this,M,!0)},remove:function(M){return U(this,M)},text:function(M){return g(this,function(K){return K===void 0?n.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=K)})},null,M,arguments.length)},append:function(){return O(this,arguments,function(M){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var K=T(this,M);K.appendChild(M)}})},prepend:function(){return O(this,arguments,function(M){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var K=T(this,M);K.insertBefore(M,K.firstChild)}})},before:function(){return O(this,arguments,function(M){this.parentNode&&this.parentNode.insertBefore(M,this)})},after:function(){return O(this,arguments,function(M){this.parentNode&&this.parentNode.insertBefore(M,this.nextSibling)})},empty:function(){for(var M,K=0;(M=this[K])!=null;K++)M.nodeType===1&&(n.cleanData(c(M,!1)),M.textContent="");return this},clone:function(M,K){return M=M==null?!1:M,K=K==null?M:K,this.map(function(){return n.clone(this,M,K)})},html:function(M){return g(this,function(K){var G=this[0]||{},te=0,se=this.length;if(K===void 0&&G.nodeType===1)return G.innerHTML;if(typeof K=="string"&&!I.test(K)&&!f[(i.exec(K)||["",""])[1].toLowerCase()]){K=n.htmlPrefilter(K);try{for(;te<se;te++)G=this[te]||{},G.nodeType===1&&(n.cleanData(c(G,!1)),G.innerHTML=K);G=0}catch(pe){}}G&&this.empty().append(K)},null,M,arguments.length)},replaceWith:function(){var M=[];return O(this,arguments,function(K){var G=this.parentNode;n.inArray(this,M)<0&&(n.cleanData(c(this)),G&&G.replaceChild(K,this))},M)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(M,K){n.fn[M]=function(G){for(var te,se=[],pe=n(G),ee=pe.length-1,he=0;he<=ee;he++)te=he===ee?this:this.clone(!0),n(pe[he])[K](te),s.apply(se,te.get());return this.pushStack(se)}}),n}.apply(v,h),r!==void 0&&(x.exports=r)},8123:(x,v,a)=>{var h,r;h=[a(7178)],r=function(n){"use strict";return n._evalUrl=function(p,d,l){return n.ajax({url:p,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(s){n.globalEval(s,d,l)}})},n._evalUrl}.apply(v,h),r!==void 0&&(x.exports=r)},3360:(x,v,a)=>{var h,r;h=[a(8934),a(8082),a(70),a(9422),a(8950),a(5219),a(2455),a(7162)],r=function(n,p,d,l,s,u,g,i){"use strict";var y=/<|&#?\w+;/;function f(c,_,m,A,S){for(var b,C,w,P,I,N,R=_.createDocumentFragment(),T=[],L=0,H=c.length;L<H;L++)if(b=c[L],b||b===0)if(p(b)==="object")n.merge(T,b.nodeType?[b]:b);else if(!y.test(b))T.push(_.createTextNode(b));else{for(C=C||R.appendChild(_.createElement("div")),w=(l.exec(b)||["",""])[1].toLowerCase(),P=u[w]||u._default,C.innerHTML=P[1]+n.htmlPrefilter(b)+P[2],N=P[0];N--;)C=C.lastChild;n.merge(T,C.childNodes),C=R.firstChild,C.textContent=""}for(R.textContent="",L=0;b=T[L++];){if(A&&n.inArray(b,A)>-1){S&&S.push(b);continue}if(I=d(b),C=g(R.appendChild(b),"script"),I&&i(C),m)for(N=0;b=C[N++];)s.test(b.type||"")&&m.push(b)}return R}return f}.apply(v,h),r!==void 0&&(x.exports=r)},2455:(x,v,a)=>{var h,r;h=[a(8934),a(7060)],r=function(n,p){"use strict";function d(l,s){var u;return typeof l.getElementsByTagName!="undefined"?u=l.getElementsByTagName(s||"*"):typeof l.querySelectorAll!="undefined"?u=l.querySelectorAll(s||"*"):u=[],s===void 0||s&&p(l,s)?n.merge([l],u):u}return d}.apply(v,h),r!==void 0&&(x.exports=r)},7162:(x,v,a)=>{var h,r;h=[a(9081)],r=function(n){"use strict";function p(d,l){for(var s=0,u=d.length;s<u;s++)n.set(d[s],"globalEval",!l||n.get(l[s],"globalEval"))}return p}.apply(v,h),r!==void 0&&(x.exports=r)},8771:(x,v,a)=>{var h,r;h=[a(7792),a(9523)],r=function(n,p){"use strict";return function(){var d=n.createDocumentFragment(),l=d.appendChild(n.createElement("div")),s=n.createElement("input");s.setAttribute("type","radio"),s.setAttribute("checked","checked"),s.setAttribute("name","t"),l.appendChild(s),p.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,l.innerHTML="<textarea>x</textarea>",p.noCloneChecked=!!l.cloneNode(!0).lastChild.defaultValue,l.innerHTML="<option></option>",p.option=!!l.lastChild}(),p}.apply(v,h),r!==void 0&&(x.exports=r)},8950:(x,v,a)=>{var h;h=function(){"use strict";return/^$|^module$|\/(?:java|ecma)script/i}.call(v,a,v,x),h!==void 0&&(x.exports=h)},9422:(x,v,a)=>{var h;h=function(){"use strict";return/<([a-z][^\/\0>\x20\t\r\n\f]*)/i}.call(v,a,v,x),h!==void 0&&(x.exports=h)},5219:(x,v,a)=>{var h,r;h=[a(8771)],r=function(n){"use strict";var p={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};return p.tbody=p.tfoot=p.colgroup=p.caption=p.thead,p.th=p.td,n.option||(p.optgroup=p.option=[1,"<select multiple='multiple'>","</select>"]),p}.apply(v,h),r!==void 0&&(x.exports=r)},5356:(x,v,a)=>{var h,r;h=[a(8934),a(7163),a(7730),a(2134),a(618),a(610),a(3781),a(4405),a(9031),a(8048),a(8515),a(655)],r=function(n,p,d,l,s,u,g,i,y){"use strict";return n.offset={setOffset:function(f,c,_){var m,A,S,b,C,w,P,I=n.css(f,"position"),N=n(f),R={};I==="static"&&(f.style.position="relative"),C=N.offset(),S=n.css(f,"top"),w=n.css(f,"left"),P=(I==="absolute"||I==="fixed")&&(S+w).indexOf("auto")>-1,P?(m=N.position(),b=m.top,A=m.left):(b=parseFloat(S)||0,A=parseFloat(w)||0),l(c)&&(c=c.call(f,_,n.extend({},C))),c.top!=null&&(R.top=c.top-C.top+b),c.left!=null&&(R.left=c.left-C.left+A),"using"in c?c.using.call(f,R):N.css(R)}},n.fn.extend({offset:function(f){if(arguments.length)return f===void 0?this:this.each(function(A){n.offset.setOffset(this,f,A)});var c,_,m=this[0];if(m)return m.getClientRects().length?(c=m.getBoundingClientRect(),_=m.ownerDocument.defaultView,{top:c.top+_.pageYOffset,left:c.left+_.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var f,c,_,m=this[0],A={top:0,left:0};if(n.css(m,"position")==="fixed")c=m.getBoundingClientRect();else{for(c=this.offset(),_=m.ownerDocument,f=m.offsetParent||_.documentElement;f&&(f===_.body||f===_.documentElement)&&n.css(f,"position")==="static";)f=f.parentNode;f&&f!==m&&f.nodeType===1&&(A=n(f).offset(),A.top+=n.css(f,"borderTopWidth",!0),A.left+=n.css(f,"borderLeftWidth",!0))}return{top:c.top-A.top-n.css(m,"marginTop",!0),left:c.left-A.left-n.css(m,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var f=this.offsetParent;f&&n.css(f,"position")==="static";)f=f.offsetParent;return f||d})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(f,c){var _=c==="pageYOffset";n.fn[f]=function(m){return p(this,function(A,S,b){var C;if(y(A)?C=A:A.nodeType===9&&(C=A.defaultView),b===void 0)return C?C[c]:A[S];C?C.scrollTo(_?C.pageXOffset:b,_?b:C.pageYOffset):A[S]=b},f,m,arguments.length)}}),n.each(["top","left"],function(f,c){n.cssHooks[c]=g(i.pixelPosition,function(_,m){if(m)return m=u(_,c),s.test(m)?n(_).position()[c]+"px":m})}),n}.apply(v,h),r!==void 0&&(x.exports=r)},1387:(x,v,a)=>{var h,r;h=[a(8934),a(9081),a(6525),a(8924)],r=function(n,p){"use strict";return n.extend({queue:function(d,l,s){var u;if(d)return l=(l||"fx")+"queue",u=p.get(d,l),s&&(!u||Array.isArray(s)?u=p.access(d,l,n.makeArray(s)):u.push(s)),u||[]},dequeue:function(d,l){l=l||"fx";var s=n.queue(d,l),u=s.length,g=s.shift(),i=n._queueHooks(d,l),y=function(){n.dequeue(d,l)};g==="inprogress"&&(g=s.shift(),u--),g&&(l==="fx"&&s.unshift("inprogress"),delete i.stop,g.call(d,y,i)),!u&&i&&i.empty.fire()},_queueHooks:function(d,l){var s=l+"queueHooks";return p.get(d,s)||p.access(d,s,{empty:n.Callbacks("once memory").add(function(){p.remove(d,[l+"queue",s])})})}}),n.fn.extend({queue:function(d,l){var s=2;return typeof d!="string"&&(l=d,d="fx",s--),arguments.length<s?n.queue(this[0],d):l===void 0?this:this.each(function(){var u=n.queue(this,d,l);n._queueHooks(this,d),d==="fx"&&u[0]!=="inprogress"&&n.dequeue(this,d)})},dequeue:function(d){return this.each(function(){n.dequeue(this,d)})},clearQueue:function(d){return this.queue(d||"fx",[])},promise:function(d,l){var s,u=1,g=n.Deferred(),i=this,y=this.length,f=function(){--u||g.resolveWith(i,[i])};for(typeof d!="string"&&(l=d,d=void 0),d=d||"fx";y--;)s=p.get(i[y],d+"queueHooks"),s&&s.empty&&(u++,s.empty.add(f));return f(),g.promise(l)}}),n}.apply(v,h),r!==void 0&&(x.exports=r)},6572:(x,v,a)=>{var h,r;h=[a(8934),a(1387),a(7429)],r=function(n){"use strict";return n.fn.delay=function(p,d){return p=n.fx&&n.fx.speeds[p]||p,d=d||"fx",this.queue(d,function(l,s){var u=window.setTimeout(l,p);s.stop=function(){window.clearTimeout(u)}})},n.fn.delay}.apply(v,h),r!==void 0&&(x.exports=r)},4338:(x,v,a)=>{var h,r;h=[a(8934),a(9414)],r=function(n,p){"use strict";n.find=p,n.expr=p.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=p.uniqueSort,n.text=p.getText,n.isXMLDoc=p.isXML,n.contains=p.contains,n.escapeSelector=p.escape}.apply(v,h),r!==void 0&&(x.exports=r)},655:(x,v,a)=>{var h,r;h=[a(4338)],r=function(){"use strict"}.apply(v,h),r!==void 0&&(x.exports=r)},5385:(x,v,a)=>{var h,r;h=[a(8934),a(8082),a(8104),a(2134),a(8048),a(8482),a(4043)],r=function(n,p,d,l){"use strict";var s=/\[\]$/,u=/\r?\n/g,g=/^(?:submit|button|image|reset|file)$/i,i=/^(?:input|select|textarea|keygen)/i;function y(f,c,_,m){var A;if(Array.isArray(c))n.each(c,function(S,b){_||s.test(f)?m(f,b):y(f+"["+(typeof b=="object"&&b!=null?S:"")+"]",b,_,m)});else if(!_&&p(c)==="object")for(A in c)y(f+"["+A+"]",c[A],_,m);else m(f,c)}return n.param=function(f,c){var _,m=[],A=function(S,b){var C=l(b)?b():b;m[m.length]=encodeURIComponent(S)+"="+encodeURIComponent(C==null?"":C)};if(f==null)return"";if(Array.isArray(f)||f.jquery&&!n.isPlainObject(f))n.each(f,function(){A(this.name,this.value)});else for(_ in f)y(_,f[_],c,A);return m.join("&")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var f=n.prop(this,"elements");return f?n.makeArray(f):this}).filter(function(){var f=this.type;return this.name&&!n(this).is(":disabled")&&i.test(this.nodeName)&&!g.test(f)&&(this.checked||!d.test(f))}).map(function(f,c){var _=n(this).val();return _==null?null:Array.isArray(_)?n.map(_,function(m){return{name:c.name,value:m.replace(u,`\r
`)}}):{name:c.name,value:_.replace(u,`\r
`)}}).get()}}),n}.apply(v,h),r!==void 0&&(x.exports=r)},8482:(x,v,a)=>{var h,r;h=[a(8934),a(8045),a(5431),a(1721),a(2495),a(8020),a(7060),a(8048),a(1764),a(655)],r=function(n,p,d,l,s,u,g){"use strict";var i=/^(?:parents|prev(?:Until|All))/,y={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(c){var _=n(c,this),m=_.length;return this.filter(function(){for(var A=0;A<m;A++)if(n.contains(this,_[A]))return!0})},closest:function(c,_){var m,A=0,S=this.length,b=[],C=typeof c!="string"&&n(c);if(!u.test(c)){for(;A<S;A++)for(m=this[A];m&&m!==_;m=m.parentNode)if(m.nodeType<11&&(C?C.index(m)>-1:m.nodeType===1&&n.find.matchesSelector(m,c))){b.push(m);break}}return this.pushStack(b.length>1?n.uniqueSort(b):b)},index:function(c){return c?typeof c=="string"?d.call(n(c),this[0]):d.call(this,c.jquery?c[0]:c):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(c,_){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(c,_))))},addBack:function(c){return this.add(c==null?this.prevObject:this.prevObject.filter(c))}});function f(c,_){for(;(c=c[_])&&c.nodeType!==1;);return c}return n.each({parent:function(c){var _=c.parentNode;return _&&_.nodeType!==11?_:null},parents:function(c){return l(c,"parentNode")},parentsUntil:function(c,_,m){return l(c,"parentNode",m)},next:function(c){return f(c,"nextSibling")},prev:function(c){return f(c,"previousSibling")},nextAll:function(c){return l(c,"nextSibling")},prevAll:function(c){return l(c,"previousSibling")},nextUntil:function(c,_,m){return l(c,"nextSibling",m)},prevUntil:function(c,_,m){return l(c,"previousSibling",m)},siblings:function(c){return s((c.parentNode||{}).firstChild,c)},children:function(c){return s(c.firstChild)},contents:function(c){return c.contentDocument!=null&&p(c.contentDocument)?c.contentDocument:(g(c,"template")&&(c=c.content||c),n.merge([],c.childNodes))}},function(c,_){n.fn[c]=function(m,A){var S=n.map(this,_,m);return c.slice(-5)!=="Until"&&(A=m),A&&typeof A=="string"&&(S=n.filter(A,S)),this.length>1&&(y[c]||n.uniqueSort(S),i.test(c)&&S.reverse()),this.pushStack(S)}}),n}.apply(v,h),r!==void 0&&(x.exports=r)},1764:(x,v,a)=>{var h,r;h=[a(8934),a(5431),a(2134),a(8020),a(655)],r=function(n,p,d,l){"use strict";function s(u,g,i){return d(g)?n.grep(u,function(y,f){return!!g.call(y,f,y)!==i}):g.nodeType?n.grep(u,function(y){return y===g!==i}):typeof g!="string"?n.grep(u,function(y){return p.call(g,y)>-1!==i}):n.filter(g,u,i)}n.filter=function(u,g,i){var y=g[0];return i&&(u=":not("+u+")"),g.length===1&&y.nodeType===1?n.find.matchesSelector(y,u)?[y]:[]:n.find.matches(u,n.grep(g,function(f){return f.nodeType===1}))},n.fn.extend({find:function(u){var g,i,y=this.length,f=this;if(typeof u!="string")return this.pushStack(n(u).filter(function(){for(g=0;g<y;g++)if(n.contains(f[g],this))return!0}));for(i=this.pushStack([]),g=0;g<y;g++)n.find(u,f[g],i);return y>1?n.uniqueSort(i):i},filter:function(u){return this.pushStack(s(this,u||[],!1))},not:function(u){return this.pushStack(s(this,u||[],!0))},is:function(u){return!!s(this,typeof u=="string"&&l.test(u)?n(u):u||[],!1).length}})}.apply(v,h),r!==void 0&&(x.exports=r)},1721:(x,v,a)=>{var h,r;h=[a(8934)],r=function(n){"use strict";return function(p,d,l){for(var s=[],u=l!==void 0;(p=p[d])&&p.nodeType!==9;)if(p.nodeType===1){if(u&&n(p).is(l))break;s.push(p)}return s}}.apply(v,h),r!==void 0&&(x.exports=r)},8020:(x,v,a)=>{var h,r;h=[a(8934),a(655)],r=function(n){"use strict";return n.expr.match.needsContext}.apply(v,h),r!==void 0&&(x.exports=r)},2495:(x,v,a)=>{var h;h=function(){"use strict";return function(r,n){for(var p=[];r;r=r.nextSibling)r.nodeType===1&&r!==n&&p.push(r);return p}}.call(v,a,v,x),h!==void 0&&(x.exports=h)},3:(x,v,a)=>{var h,r;h=[a(4194)],r=function(n){"use strict";return n.call(Object)}.apply(v,h),r!==void 0&&(x.exports=r)},3727:(x,v,a)=>{var h;h=function(){"use strict";return[]}.call(v,a,v,x),h!==void 0&&(x.exports=h)},5949:(x,v,a)=>{var h;h=function(){"use strict";return{}}.call(v,a,v,x),h!==void 0&&(x.exports=h)},7792:(x,v,a)=>{var h;h=function(){"use strict";return window.document}.call(v,a,v,x),h!==void 0&&(x.exports=h)},7730:(x,v,a)=>{var h,r;h=[a(7792)],r=function(n){"use strict";return n.documentElement}.apply(v,h),r!==void 0&&(x.exports=r)},3932:(x,v,a)=>{var h,r;h=[a(3727)],r=function(n){"use strict";return n.flat?function(p){return n.flat.call(p)}:function(p){return n.concat.apply([],p)}}.apply(v,h),r!==void 0&&(x.exports=r)},4194:(x,v,a)=>{var h,r;h=[a(9694)],r=function(n){"use strict";return n.toString}.apply(v,h),r!==void 0&&(x.exports=r)},8045:(x,v,a)=>{var h;h=function(){"use strict";return Object.getPrototypeOf}.call(v,a,v,x),h!==void 0&&(x.exports=h)},9694:(x,v,a)=>{var h,r;h=[a(5949)],r=function(n){"use strict";return n.hasOwnProperty}.apply(v,h),r!==void 0&&(x.exports=r)},5431:(x,v,a)=>{var h,r;h=[a(3727)],r=function(n){"use strict";return n.indexOf}.apply(v,h),r!==void 0&&(x.exports=r)},2134:(x,v,a)=>{var h;h=function(){"use strict";return function(n){return typeof n=="function"&&typeof n.nodeType!="number"&&typeof n.item!="function"}}.call(v,a,v,x),h!==void 0&&(x.exports=h)},9031:(x,v,a)=>{var h;h=function(){"use strict";return function(n){return n!=null&&n===n.window}}.call(v,a,v,x),h!==void 0&&(x.exports=h)},8308:(x,v,a)=>{var h;h=function(){"use strict";return/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source}.call(v,a,v,x),h!==void 0&&(x.exports=h)},1780:(x,v,a)=>{var h,r;h=[a(3727)],r=function(n){"use strict";return n.push}.apply(v,h),r!==void 0&&(x.exports=r)},8104:(x,v,a)=>{var h;h=function(){"use strict";return/^(?:checkbox|radio)$/i}.call(v,a,v,x),h!==void 0&&(x.exports=h)},6871:(x,v,a)=>{var h,r;h=[a(8308)],r=function(n){"use strict";return new RegExp("^(?:([+-])=|)("+n+")([a-z%]*)$","i")}.apply(v,h),r!==void 0&&(x.exports=r)},8663:(x,v,a)=>{var h;h=function(){"use strict";return/[^\x20\t\r\n\f]+/g}.call(v,a,v,x),h!==void 0&&(x.exports=h)},9508:(x,v,a)=>{var h,r;h=[a(2992)],r=function(n){"use strict";return new RegExp("^"+n+"+|((?:^|[^\\\\])(?:\\\\.)*)"+n+"+$","g")}.apply(v,h),r!==void 0&&(x.exports=r)},3623:(x,v,a)=>{var h,r;h=[a(3727)],r=function(n){"use strict";return n.slice}.apply(v,h),r!==void 0&&(x.exports=r)},9523:(x,v,a)=>{var h;h=function(){"use strict";return{}}.call(v,a,v,x),h!==void 0&&(x.exports=h)},7763:(x,v,a)=>{var h,r;h=[a(5949)],r=function(n){"use strict";return n.toString}.apply(v,h),r!==void 0&&(x.exports=r)},2992:(x,v,a)=>{var h;h=function(){"use strict";return"[\\x20\\t\\r\\n\\f]"}.call(v,a,v,x),h!==void 0&&(x.exports=h)},5594:(x,v,a)=>{var h,r;h=[a(8934),a(2134),a(8048),a(2632),a(8482)],r=function(n,p){"use strict";return n.fn.extend({wrapAll:function(d){var l;return this[0]&&(p(d)&&(d=d.call(this[0])),l=n(d,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&l.insertBefore(this[0]),l.map(function(){for(var s=this;s.firstElementChild;)s=s.firstElementChild;return s}).append(this)),this},wrapInner:function(d){return p(d)?this.each(function(l){n(this).wrapInner(d.call(this,l))}):this.each(function(){var l=n(this),s=l.contents();s.length?s.wrapAll(d):l.append(d)})},wrap:function(d){var l=p(d);return this.each(function(s){n(this).wrapAll(l?d.call(this,s):d)})},unwrap:function(d){return this.parent(d).not("body").each(function(){n(this).replaceWith(this.childNodes)}),this}}),n}.apply(v,h),r!==void 0&&(x.exports=r)},6486:function(x,v,a){x=a.nmd(x);var h;/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/(function(){var r,n="4.17.21",p=200,d="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",s="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",g=500,i="__lodash_placeholder__",y=1,f=2,c=4,_=1,m=2,A=1,S=2,b=4,C=8,w=16,P=32,I=64,N=128,R=256,T=512,L=30,H="...",$=800,Y=16,O=1,U=2,M=3,K=1/0,G=9007199254740991,te=17976931348623157e292,se=0/0,pe=4294967295,ee=pe-1,he=pe>>>1,be=[["ary",N],["bind",A],["bindKey",S],["curry",C],["curryRight",w],["flip",T],["partial",P],["partialRight",I],["rearg",R]],Te="[object Arguments]",je="[object Array]",ht="[object AsyncFunction]",gt="[object Boolean]",_t="[object Date]",Dt="[object DOMException]",Be="[object Error]",St="[object Function]",Me="[object GeneratorFunction]",Xe="[object Map]",Xt="[object Number]",On="[object Null]",ft="[object Object]",Le="[object Promise]",de="[object Proxy]",Pe="[object RegExp]",xe="[object Set]",re="[object String]",_e="[object Symbol]",ye="[object Undefined]",ve="[object WeakMap]",Ne="[object WeakSet]",we="[object ArrayBuffer]",He="[object DataView]",$e="[object Float32Array]",Ge="[object Float64Array]",ut="[object Int8Array]",pt="[object Int16Array]",sn="[object Int32Array]",Ut="[object Uint8Array]",Tt="[object Uint8ClampedArray]",Ft="[object Uint16Array]",Jt="[object Uint32Array]",Xn=/\b__p \+= '';/g,wn=/\b(__p \+=) '' \+/g,It=/(__e\(.*?\)|\b__t\)) \+\n'';/g,dn=/&(?:amp|lt|gt|quot|#39);/g,At=/[&<>"']/g,hn=RegExp(dn.source),Tn=RegExp(At.source),Hn=/<%-([\s\S]+?)%>/g,Mn=/<%([\s\S]+?)%>/g,Jn=/<%=([\s\S]+?)%>/g,B=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,z=/^\w*$/,X=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ae=/[\\^$.*+?()[\]{}|]/g,q=RegExp(ae.source),le=/^\s+/,J=/\s/,j=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ne=/\{\n\/\* \[wrapped with (.+)\] \*/,ue=/,? & /,me=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ee=/[()=,{}\[\]\/\s]/,Ae=/\\(\\)?/g,Ue=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,De=/\w*$/,nt=/^[-+]0x[0-9a-f]+$/i,ot=/^0b[01]+$/i,We=/^\[object .+?Constructor\]$/,Re=/^0o[0-7]+$/i,gn=/^(?:0|[1-9]\d*)$/,Pn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Et=/($^)/,Zn=/['\n\r\u2028\u2029\\]/g,Tr="\\ud800-\\udfff",jo="\\u0300-\\u036f",Qo="\\ufe20-\\ufe2f",el="\\u20d0-\\u20ff",Ss=jo+Qo+el,ws="\\u2700-\\u27bf",Ts="a-z\\xdf-\\xf6\\xf8-\\xff",tl="\\xac\\xb1\\xd7\\xf7",nl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",rl="\\u2000-\\u206f",il=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ps="A-Z\\xc0-\\xd6\\xd8-\\xde",Cs="\\ufe0e\\ufe0f",Ds=tl+nl+rl+il,hi="['\u2019]",sl="["+Tr+"]",Is="["+Ds+"]",Pr="["+Ss+"]",Rs="\\d+",al="["+ws+"]",Ns="["+Ts+"]",Ls="[^"+Tr+Ds+Rs+ws+Ts+Ps+"]",gi="\\ud83c[\\udffb-\\udfff]",ol="(?:"+Pr+"|"+gi+")",ks="[^"+Tr+"]",mi="(?:\\ud83c[\\udde6-\\uddff]){2}",yi="[\\ud800-\\udbff][\\udc00-\\udfff]",qn="["+Ps+"]",Bs="\\u200d",Fs="(?:"+Ns+"|"+Ls+")",ll="(?:"+qn+"|"+Ls+")",Os="(?:"+hi+"(?:d|ll|m|re|s|t|ve))?",Hs="(?:"+hi+"(?:D|LL|M|RE|S|T|VE))?",Ms=ol+"?",$s="["+Cs+"]?",ul="(?:"+Bs+"(?:"+[ks,mi,yi].join("|")+")"+$s+Ms+")*",pl="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",cl="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Us=$s+Ms+ul,fl="(?:"+[al,mi,yi].join("|")+")"+Us,dl="(?:"+[ks+Pr+"?",Pr,mi,yi,sl].join("|")+")",hl=RegExp(hi,"g"),gl=RegExp(Pr,"g"),vi=RegExp(gi+"(?="+gi+")|"+dl+Us,"g"),ml=RegExp([qn+"?"+Ns+"+"+Os+"(?="+[Is,qn,"$"].join("|")+")",ll+"+"+Hs+"(?="+[Is,qn+Fs,"$"].join("|")+")",qn+"?"+Fs+"+"+Os,qn+"+"+Hs,cl,pl,Rs,fl].join("|"),"g"),yl=RegExp("["+Bs+Tr+Ss+Cs+"]"),vl=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,_l=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Al=-1,lt={};lt[$e]=lt[Ge]=lt[ut]=lt[pt]=lt[sn]=lt[Ut]=lt[Tt]=lt[Ft]=lt[Jt]=!0,lt[Te]=lt[je]=lt[we]=lt[gt]=lt[He]=lt[_t]=lt[Be]=lt[St]=lt[Xe]=lt[Xt]=lt[ft]=lt[Pe]=lt[xe]=lt[re]=lt[ve]=!1;var at={};at[Te]=at[je]=at[we]=at[He]=at[gt]=at[_t]=at[$e]=at[Ge]=at[ut]=at[pt]=at[sn]=at[Xe]=at[Xt]=at[ft]=at[Pe]=at[xe]=at[re]=at[_e]=at[Ut]=at[Tt]=at[Ft]=at[Jt]=!0,at[Be]=at[St]=at[ve]=!1;var El={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},bl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},xl={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Sl={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},wl=parseFloat,Tl=parseInt,Ws=typeof a.g=="object"&&a.g&&a.g.Object===Object&&a.g,Pl=typeof self=="object"&&self&&self.Object===Object&&self,Pt=Ws||Pl||Function("return this")(),zs=v&&!v.nodeType&&v,pr=zs&&!0&&x&&!x.nodeType&&x,Gs=pr&&pr.exports===zs,_i=Gs&&Ws.process,Zt=function(){try{var Z=pr&&pr.require&&pr.require("util").types;return Z||_i&&_i.binding&&_i.binding("util")}catch(oe){}}(),Ks=Zt&&Zt.isArrayBuffer,Vs=Zt&&Zt.isDate,Ys=Zt&&Zt.isMap,Xs=Zt&&Zt.isRegExp,Js=Zt&&Zt.isSet,Zs=Zt&&Zt.isTypedArray;function Wt(Z,oe,ie){switch(ie.length){case 0:return Z.call(oe);case 1:return Z.call(oe,ie[0]);case 2:return Z.call(oe,ie[0],ie[1]);case 3:return Z.call(oe,ie[0],ie[1],ie[2])}return Z.apply(oe,ie)}function Cl(Z,oe,ie,Ce){for(var ze=-1,tt=Z==null?0:Z.length;++ze<tt;){var bt=Z[ze];oe(Ce,bt,ie(bt),Z)}return Ce}function qt(Z,oe){for(var ie=-1,Ce=Z==null?0:Z.length;++ie<Ce&&oe(Z[ie],ie,Z)!==!1;);return Z}function Dl(Z,oe){for(var ie=Z==null?0:Z.length;ie--&&oe(Z[ie],ie,Z)!==!1;);return Z}function qs(Z,oe){for(var ie=-1,Ce=Z==null?0:Z.length;++ie<Ce;)if(!oe(Z[ie],ie,Z))return!1;return!0}function Cn(Z,oe){for(var ie=-1,Ce=Z==null?0:Z.length,ze=0,tt=[];++ie<Ce;){var bt=Z[ie];oe(bt,ie,Z)&&(tt[ze++]=bt)}return tt}function Cr(Z,oe){var ie=Z==null?0:Z.length;return!!ie&&jn(Z,oe,0)>-1}function Ai(Z,oe,ie){for(var Ce=-1,ze=Z==null?0:Z.length;++Ce<ze;)if(ie(oe,Z[Ce]))return!0;return!1}function ct(Z,oe){for(var ie=-1,Ce=Z==null?0:Z.length,ze=Array(Ce);++ie<Ce;)ze[ie]=oe(Z[ie],ie,Z);return ze}function Dn(Z,oe){for(var ie=-1,Ce=oe.length,ze=Z.length;++ie<Ce;)Z[ze+ie]=oe[ie];return Z}function Ei(Z,oe,ie,Ce){var ze=-1,tt=Z==null?0:Z.length;for(Ce&&tt&&(ie=Z[++ze]);++ze<tt;)ie=oe(ie,Z[ze],ze,Z);return ie}function Il(Z,oe,ie,Ce){var ze=Z==null?0:Z.length;for(Ce&&ze&&(ie=Z[--ze]);ze--;)ie=oe(ie,Z[ze],ze,Z);return ie}function bi(Z,oe){for(var ie=-1,Ce=Z==null?0:Z.length;++ie<Ce;)if(oe(Z[ie],ie,Z))return!0;return!1}var Rl=xi("length");function Nl(Z){return Z.split("")}function Ll(Z){return Z.match(me)||[]}function js(Z,oe,ie){var Ce;return ie(Z,function(ze,tt,bt){if(oe(ze,tt,bt))return Ce=tt,!1}),Ce}function Dr(Z,oe,ie,Ce){for(var ze=Z.length,tt=ie+(Ce?1:-1);Ce?tt--:++tt<ze;)if(oe(Z[tt],tt,Z))return tt;return-1}function jn(Z,oe,ie){return oe===oe?Kl(Z,oe,ie):Dr(Z,Qs,ie)}function kl(Z,oe,ie,Ce){for(var ze=ie-1,tt=Z.length;++ze<tt;)if(Ce(Z[ze],oe))return ze;return-1}function Qs(Z){return Z!==Z}function ea(Z,oe){var ie=Z==null?0:Z.length;return ie?wi(Z,oe)/ie:se}function xi(Z){return function(oe){return oe==null?r:oe[Z]}}function Si(Z){return function(oe){return Z==null?r:Z[oe]}}function ta(Z,oe,ie,Ce,ze){return ze(Z,function(tt,bt,st){ie=Ce?(Ce=!1,tt):oe(ie,tt,bt,st)}),ie}function Bl(Z,oe){var ie=Z.length;for(Z.sort(oe);ie--;)Z[ie]=Z[ie].value;return Z}function wi(Z,oe){for(var ie,Ce=-1,ze=Z.length;++Ce<ze;){var tt=oe(Z[Ce]);tt!==r&&(ie=ie===r?tt:ie+tt)}return ie}function Ti(Z,oe){for(var ie=-1,Ce=Array(Z);++ie<Z;)Ce[ie]=oe(ie);return Ce}function Fl(Z,oe){return ct(oe,function(ie){return[ie,Z[ie]]})}function na(Z){return Z&&Z.slice(0,aa(Z)+1).replace(le,"")}function zt(Z){return function(oe){return Z(oe)}}function Pi(Z,oe){return ct(oe,function(ie){return Z[ie]})}function cr(Z,oe){return Z.has(oe)}function ra(Z,oe){for(var ie=-1,Ce=Z.length;++ie<Ce&&jn(oe,Z[ie],0)>-1;);return ie}function ia(Z,oe){for(var ie=Z.length;ie--&&jn(oe,Z[ie],0)>-1;);return ie}function Ol(Z,oe){for(var ie=Z.length,Ce=0;ie--;)Z[ie]===oe&&++Ce;return Ce}var Hl=Si(El),Ml=Si(bl);function $l(Z){return"\\"+Sl[Z]}function Ul(Z,oe){return Z==null?r:Z[oe]}function Qn(Z){return yl.test(Z)}function Wl(Z){return vl.test(Z)}function zl(Z){for(var oe,ie=[];!(oe=Z.next()).done;)ie.push(oe.value);return ie}function Ci(Z){var oe=-1,ie=Array(Z.size);return Z.forEach(function(Ce,ze){ie[++oe]=[ze,Ce]}),ie}function sa(Z,oe){return function(ie){return Z(oe(ie))}}function In(Z,oe){for(var ie=-1,Ce=Z.length,ze=0,tt=[];++ie<Ce;){var bt=Z[ie];(bt===oe||bt===i)&&(Z[ie]=i,tt[ze++]=ie)}return tt}function Ir(Z){var oe=-1,ie=Array(Z.size);return Z.forEach(function(Ce){ie[++oe]=Ce}),ie}function Gl(Z){var oe=-1,ie=Array(Z.size);return Z.forEach(function(Ce){ie[++oe]=[Ce,Ce]}),ie}function Kl(Z,oe,ie){for(var Ce=ie-1,ze=Z.length;++Ce<ze;)if(Z[Ce]===oe)return Ce;return-1}function Vl(Z,oe,ie){for(var Ce=ie+1;Ce--;)if(Z[Ce]===oe)return Ce;return Ce}function er(Z){return Qn(Z)?Xl(Z):Rl(Z)}function an(Z){return Qn(Z)?Jl(Z):Nl(Z)}function aa(Z){for(var oe=Z.length;oe--&&J.test(Z.charAt(oe)););return oe}var Yl=Si(xl);function Xl(Z){for(var oe=vi.lastIndex=0;vi.test(Z);)++oe;return oe}function Jl(Z){return Z.match(vi)||[]}function Zl(Z){return Z.match(ml)||[]}var ql=function Z(oe){oe=oe==null?Pt:Rr.defaults(Pt.Object(),oe,Rr.pick(Pt,_l));var ie=oe.Array,Ce=oe.Date,ze=oe.Error,tt=oe.Function,bt=oe.Math,st=oe.Object,Di=oe.RegExp,jl=oe.String,jt=oe.TypeError,Nr=ie.prototype,Ql=tt.prototype,tr=st.prototype,Lr=oe["__core-js_shared__"],kr=Ql.toString,it=tr.hasOwnProperty,eu=0,oa=function(){var e=/[^.]+$/.exec(Lr&&Lr.keys&&Lr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Br=tr.toString,tu=kr.call(st),nu=Pt._,ru=Di("^"+kr.call(it).replace(ae,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Fr=Gs?oe.Buffer:r,Rn=oe.Symbol,Or=oe.Uint8Array,la=Fr?Fr.allocUnsafe:r,Hr=sa(st.getPrototypeOf,st),ua=st.create,pa=tr.propertyIsEnumerable,Mr=Nr.splice,ca=Rn?Rn.isConcatSpreadable:r,fr=Rn?Rn.iterator:r,$n=Rn?Rn.toStringTag:r,$r=function(){try{var e=Kn(st,"defineProperty");return e({},"",{}),e}catch(t){}}(),iu=oe.clearTimeout!==Pt.clearTimeout&&oe.clearTimeout,su=Ce&&Ce.now!==Pt.Date.now&&Ce.now,au=oe.setTimeout!==Pt.setTimeout&&oe.setTimeout,Ur=bt.ceil,Wr=bt.floor,Ii=st.getOwnPropertySymbols,ou=Fr?Fr.isBuffer:r,fa=oe.isFinite,lu=Nr.join,uu=sa(st.keys,st),xt=bt.max,Rt=bt.min,pu=Ce.now,cu=oe.parseInt,da=bt.random,fu=Nr.reverse,Ri=Kn(oe,"DataView"),dr=Kn(oe,"Map"),Ni=Kn(oe,"Promise"),nr=Kn(oe,"Set"),hr=Kn(oe,"WeakMap"),gr=Kn(st,"create"),zr=hr&&new hr,rr={},du=Vn(Ri),hu=Vn(dr),gu=Vn(Ni),mu=Vn(nr),yu=Vn(hr),Gr=Rn?Rn.prototype:r,mr=Gr?Gr.valueOf:r,ha=Gr?Gr.toString:r;function k(e){if(mt(e)&&!Ke(e)&&!(e instanceof qe)){if(e instanceof Qt)return e;if(it.call(e,"__wrapped__"))return mo(e)}return new Qt(e)}var ir=function(){function e(){}return function(t){if(!dt(t))return{};if(ua)return ua(t);e.prototype=t;var o=new e;return e.prototype=r,o}}();function Kr(){}function Qt(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}k.templateSettings={escape:Hn,evaluate:Mn,interpolate:Jn,variable:"",imports:{_:k}},k.prototype=Kr.prototype,k.prototype.constructor=k,Qt.prototype=ir(Kr.prototype),Qt.prototype.constructor=Qt;function qe(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=pe,this.__views__=[]}function vu(){var e=new qe(this.__wrapped__);return e.__actions__=Ot(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ot(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ot(this.__views__),e}function _u(){if(this.__filtered__){var e=new qe(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Au(){var e=this.__wrapped__.value(),t=this.__dir__,o=Ke(e),E=t<0,D=o?e.length:0,F=Np(0,D,this.__views__),W=F.start,V=F.end,Q=V-W,ce=E?V:W-1,fe=this.__iteratees__,ge=fe.length,Se=0,Ie=Rt(Q,this.__takeCount__);if(!o||!E&&D==Q&&Ie==Q)return Ha(e,this.__actions__);var Fe=[];e:for(;Q--&&Se<Ie;){ce+=t;for(var Ye=-1,Oe=e[ce];++Ye<ge;){var Ze=fe[Ye],Qe=Ze.iteratee,Vt=Ze.type,Bt=Qe(Oe);if(Vt==U)Oe=Bt;else if(!Bt){if(Vt==O)continue e;break e}}Fe[Se++]=Oe}return Fe}qe.prototype=ir(Kr.prototype),qe.prototype.constructor=qe;function Un(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var E=e[t];this.set(E[0],E[1])}}function Eu(){this.__data__=gr?gr(null):{},this.size=0}function bu(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function xu(e){var t=this.__data__;if(gr){var o=t[e];return o===u?r:o}return it.call(t,e)?t[e]:r}function Su(e){var t=this.__data__;return gr?t[e]!==r:it.call(t,e)}function wu(e,t){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=gr&&t===r?u:t,this}Un.prototype.clear=Eu,Un.prototype.delete=bu,Un.prototype.get=xu,Un.prototype.has=Su,Un.prototype.set=wu;function mn(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var E=e[t];this.set(E[0],E[1])}}function Tu(){this.__data__=[],this.size=0}function Pu(e){var t=this.__data__,o=Vr(t,e);if(o<0)return!1;var E=t.length-1;return o==E?t.pop():Mr.call(t,o,1),--this.size,!0}function Cu(e){var t=this.__data__,o=Vr(t,e);return o<0?r:t[o][1]}function Du(e){return Vr(this.__data__,e)>-1}function Iu(e,t){var o=this.__data__,E=Vr(o,e);return E<0?(++this.size,o.push([e,t])):o[E][1]=t,this}mn.prototype.clear=Tu,mn.prototype.delete=Pu,mn.prototype.get=Cu,mn.prototype.has=Du,mn.prototype.set=Iu;function yn(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var E=e[t];this.set(E[0],E[1])}}function Ru(){this.size=0,this.__data__={hash:new Un,map:new(dr||mn),string:new Un}}function Nu(e){var t=ii(this,e).delete(e);return this.size-=t?1:0,t}function Lu(e){return ii(this,e).get(e)}function ku(e){return ii(this,e).has(e)}function Bu(e,t){var o=ii(this,e),E=o.size;return o.set(e,t),this.size+=o.size==E?0:1,this}yn.prototype.clear=Ru,yn.prototype.delete=Nu,yn.prototype.get=Lu,yn.prototype.has=ku,yn.prototype.set=Bu;function Wn(e){var t=-1,o=e==null?0:e.length;for(this.__data__=new yn;++t<o;)this.add(e[t])}function Fu(e){return this.__data__.set(e,u),this}function Ou(e){return this.__data__.has(e)}Wn.prototype.add=Wn.prototype.push=Fu,Wn.prototype.has=Ou;function on(e){var t=this.__data__=new mn(e);this.size=t.size}function Hu(){this.__data__=new mn,this.size=0}function Mu(e){var t=this.__data__,o=t.delete(e);return this.size=t.size,o}function $u(e){return this.__data__.get(e)}function Uu(e){return this.__data__.has(e)}function Wu(e,t){var o=this.__data__;if(o instanceof mn){var E=o.__data__;if(!dr||E.length<p-1)return E.push([e,t]),this.size=++o.size,this;o=this.__data__=new yn(E)}return o.set(e,t),this.size=o.size,this}on.prototype.clear=Hu,on.prototype.delete=Mu,on.prototype.get=$u,on.prototype.has=Uu,on.prototype.set=Wu;function ga(e,t){var o=Ke(e),E=!o&&Yn(e),D=!o&&!E&&Fn(e),F=!o&&!E&&!D&&lr(e),W=o||E||D||F,V=W?Ti(e.length,jl):[],Q=V.length;for(var ce in e)(t||it.call(e,ce))&&!(W&&(ce=="length"||D&&(ce=="offset"||ce=="parent")||F&&(ce=="buffer"||ce=="byteLength"||ce=="byteOffset")||En(ce,Q)))&&V.push(ce);return V}function ma(e){var t=e.length;return t?e[zi(0,t-1)]:r}function zu(e,t){return si(Ot(e),zn(t,0,e.length))}function Gu(e){return si(Ot(e))}function Li(e,t,o){(o!==r&&!ln(e[t],o)||o===r&&!(t in e))&&vn(e,t,o)}function yr(e,t,o){var E=e[t];(!(it.call(e,t)&&ln(E,o))||o===r&&!(t in e))&&vn(e,t,o)}function Vr(e,t){for(var o=e.length;o--;)if(ln(e[o][0],t))return o;return-1}function Ku(e,t,o,E){return Nn(e,function(D,F,W){t(E,D,o(D),W)}),E}function ya(e,t){return e&&cn(t,wt(t),e)}function Vu(e,t){return e&&cn(t,Mt(t),e)}function vn(e,t,o){t=="__proto__"&&$r?$r(e,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[t]=o}function ki(e,t){for(var o=-1,E=t.length,D=ie(E),F=e==null;++o<E;)D[o]=F?r:hs(e,t[o]);return D}function zn(e,t,o){return e===e&&(o!==r&&(e=e<=o?e:o),t!==r&&(e=e>=t?e:t)),e}function en(e,t,o,E,D,F){var W,V=t&y,Q=t&f,ce=t&c;if(o&&(W=D?o(e,E,D,F):o(e)),W!==r)return W;if(!dt(e))return e;var fe=Ke(e);if(fe){if(W=kp(e),!V)return Ot(e,W)}else{var ge=Nt(e),Se=ge==St||ge==Me;if(Fn(e))return Ua(e,V);if(ge==ft||ge==Te||Se&&!D){if(W=Q||Se?{}:ao(e),!V)return Q?xp(e,Vu(W,e)):bp(e,ya(W,e))}else{if(!at[ge])return D?e:{};W=Bp(e,ge,V)}}F||(F=new on);var Ie=F.get(e);if(Ie)return Ie;F.set(e,W),Fo(e)?e.forEach(function(Oe){W.add(en(Oe,t,o,Oe,e,F))}):ko(e)&&e.forEach(function(Oe,Ze){W.set(Ze,en(Oe,t,o,Ze,e,F))});var Fe=ce?Q?es:Qi:Q?Mt:wt,Ye=fe?r:Fe(e);return qt(Ye||e,function(Oe,Ze){Ye&&(Ze=Oe,Oe=e[Ze]),yr(W,Ze,en(Oe,t,o,Ze,e,F))}),W}function Yu(e){var t=wt(e);return function(o){return va(o,e,t)}}function va(e,t,o){var E=o.length;if(e==null)return!E;for(e=st(e);E--;){var D=o[E],F=t[D],W=e[D];if(W===r&&!(D in e)||!F(W))return!1}return!0}function _a(e,t,o){if(typeof e!="function")throw new jt(l);return Sr(function(){e.apply(r,o)},t)}function vr(e,t,o,E){var D=-1,F=Cr,W=!0,V=e.length,Q=[],ce=t.length;if(!V)return Q;o&&(t=ct(t,zt(o))),E?(F=Ai,W=!1):t.length>=p&&(F=cr,W=!1,t=new Wn(t));e:for(;++D<V;){var fe=e[D],ge=o==null?fe:o(fe);if(fe=E||fe!==0?fe:0,W&&ge===ge){for(var Se=ce;Se--;)if(t[Se]===ge)continue e;Q.push(fe)}else F(t,ge,E)||Q.push(fe)}return Q}var Nn=Va(pn),Aa=Va(Fi,!0);function Xu(e,t){var o=!0;return Nn(e,function(E,D,F){return o=!!t(E,D,F),o}),o}function Yr(e,t,o){for(var E=-1,D=e.length;++E<D;){var F=e[E],W=t(F);if(W!=null&&(V===r?W===W&&!Kt(W):o(W,V)))var V=W,Q=F}return Q}function Ju(e,t,o,E){var D=e.length;for(o=Ve(o),o<0&&(o=-o>D?0:D+o),E=E===r||E>D?D:Ve(E),E<0&&(E+=D),E=o>E?0:Ho(E);o<E;)e[o++]=t;return e}function Ea(e,t){var o=[];return Nn(e,function(E,D,F){t(E,D,F)&&o.push(E)}),o}function Ct(e,t,o,E,D){var F=-1,W=e.length;for(o||(o=Op),D||(D=[]);++F<W;){var V=e[F];t>0&&o(V)?t>1?Ct(V,t-1,o,E,D):Dn(D,V):E||(D[D.length]=V)}return D}var Bi=Ya(),ba=Ya(!0);function pn(e,t){return e&&Bi(e,t,wt)}function Fi(e,t){return e&&ba(e,t,wt)}function Xr(e,t){return Cn(t,function(o){return bn(e[o])})}function Gn(e,t){t=kn(t,e);for(var o=0,E=t.length;e!=null&&o<E;)e=e[fn(t[o++])];return o&&o==E?e:r}function xa(e,t,o){var E=t(e);return Ke(e)?E:Dn(E,o(e))}function Lt(e){return e==null?e===r?ye:On:$n&&$n in st(e)?Rp(e):Gp(e)}function Oi(e,t){return e>t}function Zu(e,t){return e!=null&&it.call(e,t)}function qu(e,t){return e!=null&&t in st(e)}function ju(e,t,o){return e>=Rt(t,o)&&e<xt(t,o)}function Hi(e,t,o){for(var E=o?Ai:Cr,D=e[0].length,F=e.length,W=F,V=ie(F),Q=1/0,ce=[];W--;){var fe=e[W];W&&t&&(fe=ct(fe,zt(t))),Q=Rt(fe.length,Q),V[W]=!o&&(t||D>=120&&fe.length>=120)?new Wn(W&&fe):r}fe=e[0];var ge=-1,Se=V[0];e:for(;++ge<D&&ce.length<Q;){var Ie=fe[ge],Fe=t?t(Ie):Ie;if(Ie=o||Ie!==0?Ie:0,!(Se?cr(Se,Fe):E(ce,Fe,o))){for(W=F;--W;){var Ye=V[W];if(!(Ye?cr(Ye,Fe):E(e[W],Fe,o)))continue e}Se&&Se.push(Fe),ce.push(Ie)}}return ce}function Qu(e,t,o,E){return pn(e,function(D,F,W){t(E,o(D),F,W)}),E}function _r(e,t,o){t=kn(t,e),e=po(e,t);var E=e==null?e:e[fn(nn(t))];return E==null?r:Wt(E,e,o)}function Sa(e){return mt(e)&&Lt(e)==Te}function ep(e){return mt(e)&&Lt(e)==we}function tp(e){return mt(e)&&Lt(e)==_t}function Ar(e,t,o,E,D){return e===t?!0:e==null||t==null||!mt(e)&&!mt(t)?e!==e&&t!==t:np(e,t,o,E,Ar,D)}function np(e,t,o,E,D,F){var W=Ke(e),V=Ke(t),Q=W?je:Nt(e),ce=V?je:Nt(t);Q=Q==Te?ft:Q,ce=ce==Te?ft:ce;var fe=Q==ft,ge=ce==ft,Se=Q==ce;if(Se&&Fn(e)){if(!Fn(t))return!1;W=!0,fe=!1}if(Se&&!fe)return F||(F=new on),W||lr(e)?ro(e,t,o,E,D,F):Dp(e,t,Q,o,E,D,F);if(!(o&_)){var Ie=fe&&it.call(e,"__wrapped__"),Fe=ge&&it.call(t,"__wrapped__");if(Ie||Fe){var Ye=Ie?e.value():e,Oe=Fe?t.value():t;return F||(F=new on),D(Ye,Oe,o,E,F)}}return Se?(F||(F=new on),Ip(e,t,o,E,D,F)):!1}function rp(e){return mt(e)&&Nt(e)==Xe}function Mi(e,t,o,E){var D=o.length,F=D,W=!E;if(e==null)return!F;for(e=st(e);D--;){var V=o[D];if(W&&V[2]?V[1]!==e[V[0]]:!(V[0]in e))return!1}for(;++D<F;){V=o[D];var Q=V[0],ce=e[Q],fe=V[1];if(W&&V[2]){if(ce===r&&!(Q in e))return!1}else{var ge=new on;if(E)var Se=E(ce,fe,Q,e,t,ge);if(!(Se===r?Ar(fe,ce,_|m,E,ge):Se))return!1}}return!0}function wa(e){if(!dt(e)||Mp(e))return!1;var t=bn(e)?ru:We;return t.test(Vn(e))}function ip(e){return mt(e)&&Lt(e)==Pe}function sp(e){return mt(e)&&Nt(e)==xe}function ap(e){return mt(e)&&ci(e.length)&&!!lt[Lt(e)]}function Ta(e){return typeof e=="function"?e:e==null?$t:typeof e=="object"?Ke(e)?Da(e[0],e[1]):Ca(e):Jo(e)}function $i(e){if(!xr(e))return uu(e);var t=[];for(var o in st(e))it.call(e,o)&&o!="constructor"&&t.push(o);return t}function op(e){if(!dt(e))return zp(e);var t=xr(e),o=[];for(var E in e)E=="constructor"&&(t||!it.call(e,E))||o.push(E);return o}function Ui(e,t){return e<t}function Pa(e,t){var o=-1,E=Ht(e)?ie(e.length):[];return Nn(e,function(D,F,W){E[++o]=t(D,F,W)}),E}function Ca(e){var t=ns(e);return t.length==1&&t[0][2]?lo(t[0][0],t[0][1]):function(o){return o===e||Mi(o,e,t)}}function Da(e,t){return is(e)&&oo(t)?lo(fn(e),t):function(o){var E=hs(o,e);return E===r&&E===t?gs(o,e):Ar(t,E,_|m)}}function Jr(e,t,o,E,D){e!==t&&Bi(t,function(F,W){if(D||(D=new on),dt(F))lp(e,t,W,o,Jr,E,D);else{var V=E?E(as(e,W),F,W+"",e,t,D):r;V===r&&(V=F),Li(e,W,V)}},Mt)}function lp(e,t,o,E,D,F,W){var V=as(e,o),Q=as(t,o),ce=W.get(Q);if(ce){Li(e,o,ce);return}var fe=F?F(V,Q,o+"",e,t,W):r,ge=fe===r;if(ge){var Se=Ke(Q),Ie=!Se&&Fn(Q),Fe=!Se&&!Ie&&lr(Q);fe=Q,Se||Ie||Fe?Ke(V)?fe=V:yt(V)?fe=Ot(V):Ie?(ge=!1,fe=Ua(Q,!0)):Fe?(ge=!1,fe=Wa(Q,!0)):fe=[]:wr(Q)||Yn(Q)?(fe=V,Yn(V)?fe=Mo(V):(!dt(V)||bn(V))&&(fe=ao(Q))):ge=!1}ge&&(W.set(Q,fe),D(fe,Q,E,F,W),W.delete(Q)),Li(e,o,fe)}function Ia(e,t){var o=e.length;if(o)return t+=t<0?o:0,En(t,o)?e[t]:r}function Ra(e,t,o){t.length?t=ct(t,function(F){return Ke(F)?function(W){return Gn(W,F.length===1?F[0]:F)}:F}):t=[$t];var E=-1;t=ct(t,zt(ke()));var D=Pa(e,function(F,W,V){var Q=ct(t,function(ce){return ce(F)});return{criteria:Q,index:++E,value:F}});return Bl(D,function(F,W){return Ep(F,W,o)})}function up(e,t){return Na(e,t,function(o,E){return gs(e,E)})}function Na(e,t,o){for(var E=-1,D=t.length,F={};++E<D;){var W=t[E],V=Gn(e,W);o(V,W)&&Er(F,kn(W,e),V)}return F}function pp(e){return function(t){return Gn(t,e)}}function Wi(e,t,o,E){var D=E?kl:jn,F=-1,W=t.length,V=e;for(e===t&&(t=Ot(t)),o&&(V=ct(e,zt(o)));++F<W;)for(var Q=0,ce=t[F],fe=o?o(ce):ce;(Q=D(V,fe,Q,E))>-1;)V!==e&&Mr.call(V,Q,1),Mr.call(e,Q,1);return e}function La(e,t){for(var o=e?t.length:0,E=o-1;o--;){var D=t[o];if(o==E||D!==F){var F=D;En(D)?Mr.call(e,D,1):Vi(e,D)}}return e}function zi(e,t){return e+Wr(da()*(t-e+1))}function cp(e,t,o,E){for(var D=-1,F=xt(Ur((t-e)/(o||1)),0),W=ie(F);F--;)W[E?F:++D]=e,e+=o;return W}function Gi(e,t){var o="";if(!e||t<1||t>G)return o;do t%2&&(o+=e),t=Wr(t/2),t&&(e+=e);while(t);return o}function Je(e,t){return os(uo(e,t,$t),e+"")}function fp(e){return ma(ur(e))}function dp(e,t){var o=ur(e);return si(o,zn(t,0,o.length))}function Er(e,t,o,E){if(!dt(e))return e;t=kn(t,e);for(var D=-1,F=t.length,W=F-1,V=e;V!=null&&++D<F;){var Q=fn(t[D]),ce=o;if(Q==="__proto__"||Q==="constructor"||Q==="prototype")return e;if(D!=W){var fe=V[Q];ce=E?E(fe,Q,V):r,ce===r&&(ce=dt(fe)?fe:En(t[D+1])?[]:{})}yr(V,Q,ce),V=V[Q]}return e}var ka=zr?function(e,t){return zr.set(e,t),e}:$t,hp=$r?function(e,t){return $r(e,"toString",{configurable:!0,enumerable:!1,value:ys(t),writable:!0})}:$t;function gp(e){return si(ur(e))}function tn(e,t,o){var E=-1,D=e.length;t<0&&(t=-t>D?0:D+t),o=o>D?D:o,o<0&&(o+=D),D=t>o?0:o-t>>>0,t>>>=0;for(var F=ie(D);++E<D;)F[E]=e[E+t];return F}function mp(e,t){var o;return Nn(e,function(E,D,F){return o=t(E,D,F),!o}),!!o}function Zr(e,t,o){var E=0,D=e==null?E:e.length;if(typeof t=="number"&&t===t&&D<=he){for(;E<D;){var F=E+D>>>1,W=e[F];W!==null&&!Kt(W)&&(o?W<=t:W<t)?E=F+1:D=F}return D}return Ki(e,t,$t,o)}function Ki(e,t,o,E){var D=0,F=e==null?0:e.length;if(F===0)return 0;t=o(t);for(var W=t!==t,V=t===null,Q=Kt(t),ce=t===r;D<F;){var fe=Wr((D+F)/2),ge=o(e[fe]),Se=ge!==r,Ie=ge===null,Fe=ge===ge,Ye=Kt(ge);if(W)var Oe=E||Fe;else ce?Oe=Fe&&(E||Se):V?Oe=Fe&&Se&&(E||!Ie):Q?Oe=Fe&&Se&&!Ie&&(E||!Ye):Ie||Ye?Oe=!1:Oe=E?ge<=t:ge<t;Oe?D=fe+1:F=fe}return Rt(F,ee)}function Ba(e,t){for(var o=-1,E=e.length,D=0,F=[];++o<E;){var W=e[o],V=t?t(W):W;if(!o||!ln(V,Q)){var Q=V;F[D++]=W===0?0:W}}return F}function Fa(e){return typeof e=="number"?e:Kt(e)?se:+e}function Gt(e){if(typeof e=="string")return e;if(Ke(e))return ct(e,Gt)+"";if(Kt(e))return ha?ha.call(e):"";var t=e+"";return t=="0"&&1/e==-K?"-0":t}function Ln(e,t,o){var E=-1,D=Cr,F=e.length,W=!0,V=[],Q=V;if(o)W=!1,D=Ai;else if(F>=p){var ce=t?null:Pp(e);if(ce)return Ir(ce);W=!1,D=cr,Q=new Wn}else Q=t?[]:V;e:for(;++E<F;){var fe=e[E],ge=t?t(fe):fe;if(fe=o||fe!==0?fe:0,W&&ge===ge){for(var Se=Q.length;Se--;)if(Q[Se]===ge)continue e;t&&Q.push(ge),V.push(fe)}else D(Q,ge,o)||(Q!==V&&Q.push(ge),V.push(fe))}return V}function Vi(e,t){return t=kn(t,e),e=po(e,t),e==null||delete e[fn(nn(t))]}function Oa(e,t,o,E){return Er(e,t,o(Gn(e,t)),E)}function qr(e,t,o,E){for(var D=e.length,F=E?D:-1;(E?F--:++F<D)&&t(e[F],F,e););return o?tn(e,E?0:F,E?F+1:D):tn(e,E?F+1:0,E?D:F)}function Ha(e,t){var o=e;return o instanceof qe&&(o=o.value()),Ei(t,function(E,D){return D.func.apply(D.thisArg,Dn([E],D.args))},o)}function Yi(e,t,o){var E=e.length;if(E<2)return E?Ln(e[0]):[];for(var D=-1,F=ie(E);++D<E;)for(var W=e[D],V=-1;++V<E;)V!=D&&(F[D]=vr(F[D]||W,e[V],t,o));return Ln(Ct(F,1),t,o)}function Ma(e,t,o){for(var E=-1,D=e.length,F=t.length,W={};++E<D;){var V=E<F?t[E]:r;o(W,e[E],V)}return W}function Xi(e){return yt(e)?e:[]}function Ji(e){return typeof e=="function"?e:$t}function kn(e,t){return Ke(e)?e:is(e,t)?[e]:go(rt(e))}var yp=Je;function Bn(e,t,o){var E=e.length;return o=o===r?E:o,!t&&o>=E?e:tn(e,t,o)}var $a=iu||function(e){return Pt.clearTimeout(e)};function Ua(e,t){if(t)return e.slice();var o=e.length,E=la?la(o):new e.constructor(o);return e.copy(E),E}function Zi(e){var t=new e.constructor(e.byteLength);return new Or(t).set(new Or(e)),t}function vp(e,t){var o=t?Zi(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)}function _p(e){var t=new e.constructor(e.source,De.exec(e));return t.lastIndex=e.lastIndex,t}function Ap(e){return mr?st(mr.call(e)):{}}function Wa(e,t){var o=t?Zi(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}function za(e,t){if(e!==t){var o=e!==r,E=e===null,D=e===e,F=Kt(e),W=t!==r,V=t===null,Q=t===t,ce=Kt(t);if(!V&&!ce&&!F&&e>t||F&&W&&Q&&!V&&!ce||E&&W&&Q||!o&&Q||!D)return 1;if(!E&&!F&&!ce&&e<t||ce&&o&&D&&!E&&!F||V&&o&&D||!W&&D||!Q)return-1}return 0}function Ep(e,t,o){for(var E=-1,D=e.criteria,F=t.criteria,W=D.length,V=o.length;++E<W;){var Q=za(D[E],F[E]);if(Q){if(E>=V)return Q;var ce=o[E];return Q*(ce=="desc"?-1:1)}}return e.index-t.index}function Ga(e,t,o,E){for(var D=-1,F=e.length,W=o.length,V=-1,Q=t.length,ce=xt(F-W,0),fe=ie(Q+ce),ge=!E;++V<Q;)fe[V]=t[V];for(;++D<W;)(ge||D<F)&&(fe[o[D]]=e[D]);for(;ce--;)fe[V++]=e[D++];return fe}function Ka(e,t,o,E){for(var D=-1,F=e.length,W=-1,V=o.length,Q=-1,ce=t.length,fe=xt(F-V,0),ge=ie(fe+ce),Se=!E;++D<fe;)ge[D]=e[D];for(var Ie=D;++Q<ce;)ge[Ie+Q]=t[Q];for(;++W<V;)(Se||D<F)&&(ge[Ie+o[W]]=e[D++]);return ge}function Ot(e,t){var o=-1,E=e.length;for(t||(t=ie(E));++o<E;)t[o]=e[o];return t}function cn(e,t,o,E){var D=!o;o||(o={});for(var F=-1,W=t.length;++F<W;){var V=t[F],Q=E?E(o[V],e[V],V,o,e):r;Q===r&&(Q=e[V]),D?vn(o,V,Q):yr(o,V,Q)}return o}function bp(e,t){return cn(e,rs(e),t)}function xp(e,t){return cn(e,io(e),t)}function jr(e,t){return function(o,E){var D=Ke(o)?Cl:Ku,F=t?t():{};return D(o,e,ke(E,2),F)}}function sr(e){return Je(function(t,o){var E=-1,D=o.length,F=D>1?o[D-1]:r,W=D>2?o[2]:r;for(F=e.length>3&&typeof F=="function"?(D--,F):r,W&&kt(o[0],o[1],W)&&(F=D<3?r:F,D=1),t=st(t);++E<D;){var V=o[E];V&&e(t,V,E,F)}return t})}function Va(e,t){return function(o,E){if(o==null)return o;if(!Ht(o))return e(o,E);for(var D=o.length,F=t?D:-1,W=st(o);(t?F--:++F<D)&&E(W[F],F,W)!==!1;);return o}}function Ya(e){return function(t,o,E){for(var D=-1,F=st(t),W=E(t),V=W.length;V--;){var Q=W[e?V:++D];if(o(F[Q],Q,F)===!1)break}return t}}function Sp(e,t,o){var E=t&A,D=br(e);function F(){var W=this&&this!==Pt&&this instanceof F?D:e;return W.apply(E?o:this,arguments)}return F}function Xa(e){return function(t){t=rt(t);var o=Qn(t)?an(t):r,E=o?o[0]:t.charAt(0),D=o?Bn(o,1).join(""):t.slice(1);return E[e]()+D}}function ar(e){return function(t){return Ei(Yo(Vo(t).replace(hl,"")),e,"")}}function br(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var o=ir(e.prototype),E=e.apply(o,t);return dt(E)?E:o}}function wp(e,t,o){var E=br(e);function D(){for(var F=arguments.length,W=ie(F),V=F,Q=or(D);V--;)W[V]=arguments[V];var ce=F<3&&W[0]!==Q&&W[F-1]!==Q?[]:In(W,Q);if(F-=ce.length,F<o)return Qa(e,t,Qr,D.placeholder,r,W,ce,r,r,o-F);var fe=this&&this!==Pt&&this instanceof D?E:e;return Wt(fe,this,W)}return D}function Ja(e){return function(t,o,E){var D=st(t);if(!Ht(t)){var F=ke(o,3);t=wt(t),o=function(V){return F(D[V],V,D)}}var W=e(t,o,E);return W>-1?D[F?t[W]:W]:r}}function Za(e){return An(function(t){var o=t.length,E=o,D=Qt.prototype.thru;for(e&&t.reverse();E--;){var F=t[E];if(typeof F!="function")throw new jt(l);if(D&&!W&&ri(F)=="wrapper")var W=new Qt([],!0)}for(E=W?E:o;++E<o;){F=t[E];var V=ri(F),Q=V=="wrapper"?ts(F):r;Q&&ss(Q[0])&&Q[1]==(N|C|P|R)&&!Q[4].length&&Q[9]==1?W=W[ri(Q[0])].apply(W,Q[3]):W=F.length==1&&ss(F)?W[V]():W.thru(F)}return function(){var ce=arguments,fe=ce[0];if(W&&ce.length==1&&Ke(fe))return W.plant(fe).value();for(var ge=0,Se=o?t[ge].apply(this,ce):fe;++ge<o;)Se=t[ge].call(this,Se);return Se}})}function Qr(e,t,o,E,D,F,W,V,Q,ce){var fe=t&N,ge=t&A,Se=t&S,Ie=t&(C|w),Fe=t&T,Ye=Se?r:br(e);function Oe(){for(var Ze=arguments.length,Qe=ie(Ze),Vt=Ze;Vt--;)Qe[Vt]=arguments[Vt];if(Ie)var Bt=or(Oe),Yt=Ol(Qe,Bt);if(E&&(Qe=Ga(Qe,E,D,Ie)),F&&(Qe=Ka(Qe,F,W,Ie)),Ze-=Yt,Ie&&Ze<ce){var vt=In(Qe,Bt);return Qa(e,t,Qr,Oe.placeholder,o,Qe,vt,V,Q,ce-Ze)}var un=ge?o:this,Sn=Se?un[e]:e;return Ze=Qe.length,V?Qe=Kp(Qe,V):Fe&&Ze>1&&Qe.reverse(),fe&&Q<Ze&&(Qe.length=Q),this&&this!==Pt&&this instanceof Oe&&(Sn=Ye||br(Sn)),Sn.apply(un,Qe)}return Oe}function qa(e,t){return function(o,E){return Qu(o,e,t(E),{})}}function ei(e,t){return function(o,E){var D;if(o===r&&E===r)return t;if(o!==r&&(D=o),E!==r){if(D===r)return E;typeof o=="string"||typeof E=="string"?(o=Gt(o),E=Gt(E)):(o=Fa(o),E=Fa(E)),D=e(o,E)}return D}}function qi(e){return An(function(t){return t=ct(t,zt(ke())),Je(function(o){var E=this;return e(t,function(D){return Wt(D,E,o)})})})}function ti(e,t){t=t===r?" ":Gt(t);var o=t.length;if(o<2)return o?Gi(t,e):t;var E=Gi(t,Ur(e/er(t)));return Qn(t)?Bn(an(E),0,e).join(""):E.slice(0,e)}function Tp(e,t,o,E){var D=t&A,F=br(e);function W(){for(var V=-1,Q=arguments.length,ce=-1,fe=E.length,ge=ie(fe+Q),Se=this&&this!==Pt&&this instanceof W?F:e;++ce<fe;)ge[ce]=E[ce];for(;Q--;)ge[ce++]=arguments[++V];return Wt(Se,D?o:this,ge)}return W}function ja(e){return function(t,o,E){return E&&typeof E!="number"&&kt(t,o,E)&&(o=E=r),t=xn(t),o===r?(o=t,t=0):o=xn(o),E=E===r?t<o?1:-1:xn(E),cp(t,o,E,e)}}function ni(e){return function(t,o){return typeof t=="string"&&typeof o=="string"||(t=rn(t),o=rn(o)),e(t,o)}}function Qa(e,t,o,E,D,F,W,V,Q,ce){var fe=t&C,ge=fe?W:r,Se=fe?r:W,Ie=fe?F:r,Fe=fe?r:F;t|=fe?P:I,t&=~(fe?I:P),t&b||(t&=~(A|S));var Ye=[e,t,D,Ie,ge,Fe,Se,V,Q,ce],Oe=o.apply(r,Ye);return ss(e)&&co(Oe,Ye),Oe.placeholder=E,fo(Oe,e,t)}function ji(e){var t=bt[e];return function(o,E){if(o=rn(o),E=E==null?0:Rt(Ve(E),292),E&&fa(o)){var D=(rt(o)+"e").split("e"),F=t(D[0]+"e"+(+D[1]+E));return D=(rt(F)+"e").split("e"),+(D[0]+"e"+(+D[1]-E))}return t(o)}}var Pp=nr&&1/Ir(new nr([,-0]))[1]==K?function(e){return new nr(e)}:As;function eo(e){return function(t){var o=Nt(t);return o==Xe?Ci(t):o==xe?Gl(t):Fl(t,e(t))}}function _n(e,t,o,E,D,F,W,V){var Q=t&S;if(!Q&&typeof e!="function")throw new jt(l);var ce=E?E.length:0;if(ce||(t&=~(P|I),E=D=r),W=W===r?W:xt(Ve(W),0),V=V===r?V:Ve(V),ce-=D?D.length:0,t&I){var fe=E,ge=D;E=D=r}var Se=Q?r:ts(e),Ie=[e,t,o,E,D,fe,ge,F,W,V];if(Se&&Wp(Ie,Se),e=Ie[0],t=Ie[1],o=Ie[2],E=Ie[3],D=Ie[4],V=Ie[9]=Ie[9]===r?Q?0:e.length:xt(Ie[9]-ce,0),!V&&t&(C|w)&&(t&=~(C|w)),!t||t==A)var Fe=Sp(e,t,o);else t==C||t==w?Fe=wp(e,t,V):(t==P||t==(A|P))&&!D.length?Fe=Tp(e,t,o,E):Fe=Qr.apply(r,Ie);var Ye=Se?ka:co;return fo(Ye(Fe,Ie),e,t)}function to(e,t,o,E){return e===r||ln(e,tr[o])&&!it.call(E,o)?t:e}function no(e,t,o,E,D,F){return dt(e)&&dt(t)&&(F.set(t,e),Jr(e,t,r,no,F),F.delete(t)),e}function Cp(e){return wr(e)?r:e}function ro(e,t,o,E,D,F){var W=o&_,V=e.length,Q=t.length;if(V!=Q&&!(W&&Q>V))return!1;var ce=F.get(e),fe=F.get(t);if(ce&&fe)return ce==t&&fe==e;var ge=-1,Se=!0,Ie=o&m?new Wn:r;for(F.set(e,t),F.set(t,e);++ge<V;){var Fe=e[ge],Ye=t[ge];if(E)var Oe=W?E(Ye,Fe,ge,t,e,F):E(Fe,Ye,ge,e,t,F);if(Oe!==r){if(Oe)continue;Se=!1;break}if(Ie){if(!bi(t,function(Ze,Qe){if(!cr(Ie,Qe)&&(Fe===Ze||D(Fe,Ze,o,E,F)))return Ie.push(Qe)})){Se=!1;break}}else if(!(Fe===Ye||D(Fe,Ye,o,E,F))){Se=!1;break}}return F.delete(e),F.delete(t),Se}function Dp(e,t,o,E,D,F,W){switch(o){case He:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case we:return!(e.byteLength!=t.byteLength||!F(new Or(e),new Or(t)));case gt:case _t:case Xt:return ln(+e,+t);case Be:return e.name==t.name&&e.message==t.message;case Pe:case re:return e==t+"";case Xe:var V=Ci;case xe:var Q=E&_;if(V||(V=Ir),e.size!=t.size&&!Q)return!1;var ce=W.get(e);if(ce)return ce==t;E|=m,W.set(e,t);var fe=ro(V(e),V(t),E,D,F,W);return W.delete(e),fe;case _e:if(mr)return mr.call(e)==mr.call(t)}return!1}function Ip(e,t,o,E,D,F){var W=o&_,V=Qi(e),Q=V.length,ce=Qi(t),fe=ce.length;if(Q!=fe&&!W)return!1;for(var ge=Q;ge--;){var Se=V[ge];if(!(W?Se in t:it.call(t,Se)))return!1}var Ie=F.get(e),Fe=F.get(t);if(Ie&&Fe)return Ie==t&&Fe==e;var Ye=!0;F.set(e,t),F.set(t,e);for(var Oe=W;++ge<Q;){Se=V[ge];var Ze=e[Se],Qe=t[Se];if(E)var Vt=W?E(Qe,Ze,Se,t,e,F):E(Ze,Qe,Se,e,t,F);if(!(Vt===r?Ze===Qe||D(Ze,Qe,o,E,F):Vt)){Ye=!1;break}Oe||(Oe=Se=="constructor")}if(Ye&&!Oe){var Bt=e.constructor,Yt=t.constructor;Bt!=Yt&&"constructor"in e&&"constructor"in t&&!(typeof Bt=="function"&&Bt instanceof Bt&&typeof Yt=="function"&&Yt instanceof Yt)&&(Ye=!1)}return F.delete(e),F.delete(t),Ye}function An(e){return os(uo(e,r,_o),e+"")}function Qi(e){return xa(e,wt,rs)}function es(e){return xa(e,Mt,io)}var ts=zr?function(e){return zr.get(e)}:As;function ri(e){for(var t=e.name+"",o=rr[t],E=it.call(rr,t)?o.length:0;E--;){var D=o[E],F=D.func;if(F==null||F==e)return D.name}return t}function or(e){var t=it.call(k,"placeholder")?k:e;return t.placeholder}function ke(){var e=k.iteratee||vs;return e=e===vs?Ta:e,arguments.length?e(arguments[0],arguments[1]):e}function ii(e,t){var o=e.__data__;return Hp(t)?o[typeof t=="string"?"string":"hash"]:o.map}function ns(e){for(var t=wt(e),o=t.length;o--;){var E=t[o],D=e[E];t[o]=[E,D,oo(D)]}return t}function Kn(e,t){var o=Ul(e,t);return wa(o)?o:r}function Rp(e){var t=it.call(e,$n),o=e[$n];try{e[$n]=r;var E=!0}catch(F){}var D=Br.call(e);return E&&(t?e[$n]=o:delete e[$n]),D}var rs=Ii?function(e){return e==null?[]:(e=st(e),Cn(Ii(e),function(t){return pa.call(e,t)}))}:Es,io=Ii?function(e){for(var t=[];e;)Dn(t,rs(e)),e=Hr(e);return t}:Es,Nt=Lt;(Ri&&Nt(new Ri(new ArrayBuffer(1)))!=He||dr&&Nt(new dr)!=Xe||Ni&&Nt(Ni.resolve())!=Le||nr&&Nt(new nr)!=xe||hr&&Nt(new hr)!=ve)&&(Nt=function(e){var t=Lt(e),o=t==ft?e.constructor:r,E=o?Vn(o):"";if(E)switch(E){case du:return He;case hu:return Xe;case gu:return Le;case mu:return xe;case yu:return ve}return t});function Np(e,t,o){for(var E=-1,D=o.length;++E<D;){var F=o[E],W=F.size;switch(F.type){case"drop":e+=W;break;case"dropRight":t-=W;break;case"take":t=Rt(t,e+W);break;case"takeRight":e=xt(e,t-W);break}}return{start:e,end:t}}function Lp(e){var t=e.match(ne);return t?t[1].split(ue):[]}function so(e,t,o){t=kn(t,e);for(var E=-1,D=t.length,F=!1;++E<D;){var W=fn(t[E]);if(!(F=e!=null&&o(e,W)))break;e=e[W]}return F||++E!=D?F:(D=e==null?0:e.length,!!D&&ci(D)&&En(W,D)&&(Ke(e)||Yn(e)))}function kp(e){var t=e.length,o=new e.constructor(t);return t&&typeof e[0]=="string"&&it.call(e,"index")&&(o.index=e.index,o.input=e.input),o}function ao(e){return typeof e.constructor=="function"&&!xr(e)?ir(Hr(e)):{}}function Bp(e,t,o){var E=e.constructor;switch(t){case we:return Zi(e);case gt:case _t:return new E(+e);case He:return vp(e,o);case $e:case Ge:case ut:case pt:case sn:case Ut:case Tt:case Ft:case Jt:return Wa(e,o);case Xe:return new E;case Xt:case re:return new E(e);case Pe:return _p(e);case xe:return new E;case _e:return Ap(e)}}function Fp(e,t){var o=t.length;if(!o)return e;var E=o-1;return t[E]=(o>1?"& ":"")+t[E],t=t.join(o>2?", ":" "),e.replace(j,`{
/* [wrapped with `+t+`] */
`)}function Op(e){return Ke(e)||Yn(e)||!!(ca&&e&&e[ca])}function En(e,t){var o=typeof e;return t=t==null?G:t,!!t&&(o=="number"||o!="symbol"&&gn.test(e))&&e>-1&&e%1==0&&e<t}function kt(e,t,o){if(!dt(o))return!1;var E=typeof t;return(E=="number"?Ht(o)&&En(t,o.length):E=="string"&&t in o)?ln(o[t],e):!1}function is(e,t){if(Ke(e))return!1;var o=typeof e;return o=="number"||o=="symbol"||o=="boolean"||e==null||Kt(e)?!0:z.test(e)||!B.test(e)||t!=null&&e in st(t)}function Hp(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ss(e){var t=ri(e),o=k[t];if(typeof o!="function"||!(t in qe.prototype))return!1;if(e===o)return!0;var E=ts(o);return!!E&&e===E[0]}function Mp(e){return!!oa&&oa in e}var $p=Lr?bn:bs;function xr(e){var t=e&&e.constructor,o=typeof t=="function"&&t.prototype||tr;return e===o}function oo(e){return e===e&&!dt(e)}function lo(e,t){return function(o){return o==null?!1:o[e]===t&&(t!==r||e in st(o))}}function Up(e){var t=ui(e,function(E){return o.size===g&&o.clear(),E}),o=t.cache;return t}function Wp(e,t){var o=e[1],E=t[1],D=o|E,F=D<(A|S|N),W=E==N&&o==C||E==N&&o==R&&e[7].length<=t[8]||E==(N|R)&&t[7].length<=t[8]&&o==C;if(!(F||W))return e;E&A&&(e[2]=t[2],D|=o&A?0:b);var V=t[3];if(V){var Q=e[3];e[3]=Q?Ga(Q,V,t[4]):V,e[4]=Q?In(e[3],i):t[4]}return V=t[5],V&&(Q=e[5],e[5]=Q?Ka(Q,V,t[6]):V,e[6]=Q?In(e[5],i):t[6]),V=t[7],V&&(e[7]=V),E&N&&(e[8]=e[8]==null?t[8]:Rt(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=D,e}function zp(e){var t=[];if(e!=null)for(var o in st(e))t.push(o);return t}function Gp(e){return Br.call(e)}function uo(e,t,o){return t=xt(t===r?e.length-1:t,0),function(){for(var E=arguments,D=-1,F=xt(E.length-t,0),W=ie(F);++D<F;)W[D]=E[t+D];D=-1;for(var V=ie(t+1);++D<t;)V[D]=E[D];return V[t]=o(W),Wt(e,this,V)}}function po(e,t){return t.length<2?e:Gn(e,tn(t,0,-1))}function Kp(e,t){for(var o=e.length,E=Rt(t.length,o),D=Ot(e);E--;){var F=t[E];e[E]=En(F,o)?D[F]:r}return e}function as(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var co=ho(ka),Sr=au||function(e,t){return Pt.setTimeout(e,t)},os=ho(hp);function fo(e,t,o){var E=t+"";return os(e,Fp(E,Vp(Lp(E),o)))}function ho(e){var t=0,o=0;return function(){var E=pu(),D=Y-(E-o);if(o=E,D>0){if(++t>=$)return arguments[0]}else t=0;return e.apply(r,arguments)}}function si(e,t){var o=-1,E=e.length,D=E-1;for(t=t===r?E:t;++o<t;){var F=zi(o,D),W=e[F];e[F]=e[o],e[o]=W}return e.length=t,e}var go=Up(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(X,function(o,E,D,F){t.push(D?F.replace(Ae,"$1"):E||o)}),t});function fn(e){if(typeof e=="string"||Kt(e))return e;var t=e+"";return t=="0"&&1/e==-K?"-0":t}function Vn(e){if(e!=null){try{return kr.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function Vp(e,t){return qt(be,function(o){var E="_."+o[0];t&o[1]&&!Cr(e,E)&&e.push(E)}),e.sort()}function mo(e){if(e instanceof qe)return e.clone();var t=new Qt(e.__wrapped__,e.__chain__);return t.__actions__=Ot(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function Yp(e,t,o){(o?kt(e,t,o):t===r)?t=1:t=xt(Ve(t),0);var E=e==null?0:e.length;if(!E||t<1)return[];for(var D=0,F=0,W=ie(Ur(E/t));D<E;)W[F++]=tn(e,D,D+=t);return W}function Xp(e){for(var t=-1,o=e==null?0:e.length,E=0,D=[];++t<o;){var F=e[t];F&&(D[E++]=F)}return D}function Jp(){var e=arguments.length;if(!e)return[];for(var t=ie(e-1),o=arguments[0],E=e;E--;)t[E-1]=arguments[E];return Dn(Ke(o)?Ot(o):[o],Ct(t,1))}var Zp=Je(function(e,t){return yt(e)?vr(e,Ct(t,1,yt,!0)):[]}),qp=Je(function(e,t){var o=nn(t);return yt(o)&&(o=r),yt(e)?vr(e,Ct(t,1,yt,!0),ke(o,2)):[]}),jp=Je(function(e,t){var o=nn(t);return yt(o)&&(o=r),yt(e)?vr(e,Ct(t,1,yt,!0),r,o):[]});function Qp(e,t,o){var E=e==null?0:e.length;return E?(t=o||t===r?1:Ve(t),tn(e,t<0?0:t,E)):[]}function ec(e,t,o){var E=e==null?0:e.length;return E?(t=o||t===r?1:Ve(t),t=E-t,tn(e,0,t<0?0:t)):[]}function tc(e,t){return e&&e.length?qr(e,ke(t,3),!0,!0):[]}function nc(e,t){return e&&e.length?qr(e,ke(t,3),!0):[]}function rc(e,t,o,E){var D=e==null?0:e.length;return D?(o&&typeof o!="number"&&kt(e,t,o)&&(o=0,E=D),Ju(e,t,o,E)):[]}function yo(e,t,o){var E=e==null?0:e.length;if(!E)return-1;var D=o==null?0:Ve(o);return D<0&&(D=xt(E+D,0)),Dr(e,ke(t,3),D)}function vo(e,t,o){var E=e==null?0:e.length;if(!E)return-1;var D=E-1;return o!==r&&(D=Ve(o),D=o<0?xt(E+D,0):Rt(D,E-1)),Dr(e,ke(t,3),D,!0)}function _o(e){var t=e==null?0:e.length;return t?Ct(e,1):[]}function ic(e){var t=e==null?0:e.length;return t?Ct(e,K):[]}function sc(e,t){var o=e==null?0:e.length;return o?(t=t===r?1:Ve(t),Ct(e,t)):[]}function ac(e){for(var t=-1,o=e==null?0:e.length,E={};++t<o;){var D=e[t];E[D[0]]=D[1]}return E}function Ao(e){return e&&e.length?e[0]:r}function oc(e,t,o){var E=e==null?0:e.length;if(!E)return-1;var D=o==null?0:Ve(o);return D<0&&(D=xt(E+D,0)),jn(e,t,D)}function lc(e){var t=e==null?0:e.length;return t?tn(e,0,-1):[]}var uc=Je(function(e){var t=ct(e,Xi);return t.length&&t[0]===e[0]?Hi(t):[]}),pc=Je(function(e){var t=nn(e),o=ct(e,Xi);return t===nn(o)?t=r:o.pop(),o.length&&o[0]===e[0]?Hi(o,ke(t,2)):[]}),cc=Je(function(e){var t=nn(e),o=ct(e,Xi);return t=typeof t=="function"?t:r,t&&o.pop(),o.length&&o[0]===e[0]?Hi(o,r,t):[]});function fc(e,t){return e==null?"":lu.call(e,t)}function nn(e){var t=e==null?0:e.length;return t?e[t-1]:r}function dc(e,t,o){var E=e==null?0:e.length;if(!E)return-1;var D=E;return o!==r&&(D=Ve(o),D=D<0?xt(E+D,0):Rt(D,E-1)),t===t?Vl(e,t,D):Dr(e,Qs,D,!0)}function hc(e,t){return e&&e.length?Ia(e,Ve(t)):r}var gc=Je(Eo);function Eo(e,t){return e&&e.length&&t&&t.length?Wi(e,t):e}function mc(e,t,o){return e&&e.length&&t&&t.length?Wi(e,t,ke(o,2)):e}function yc(e,t,o){return e&&e.length&&t&&t.length?Wi(e,t,r,o):e}var vc=An(function(e,t){var o=e==null?0:e.length,E=ki(e,t);return La(e,ct(t,function(D){return En(D,o)?+D:D}).sort(za)),E});function _c(e,t){var o=[];if(!(e&&e.length))return o;var E=-1,D=[],F=e.length;for(t=ke(t,3);++E<F;){var W=e[E];t(W,E,e)&&(o.push(W),D.push(E))}return La(e,D),o}function ls(e){return e==null?e:fu.call(e)}function Ac(e,t,o){var E=e==null?0:e.length;return E?(o&&typeof o!="number"&&kt(e,t,o)?(t=0,o=E):(t=t==null?0:Ve(t),o=o===r?E:Ve(o)),tn(e,t,o)):[]}function Ec(e,t){return Zr(e,t)}function bc(e,t,o){return Ki(e,t,ke(o,2))}function xc(e,t){var o=e==null?0:e.length;if(o){var E=Zr(e,t);if(E<o&&ln(e[E],t))return E}return-1}function Sc(e,t){return Zr(e,t,!0)}function wc(e,t,o){return Ki(e,t,ke(o,2),!0)}function Tc(e,t){var o=e==null?0:e.length;if(o){var E=Zr(e,t,!0)-1;if(ln(e[E],t))return E}return-1}function Pc(e){return e&&e.length?Ba(e):[]}function Cc(e,t){return e&&e.length?Ba(e,ke(t,2)):[]}function Dc(e){var t=e==null?0:e.length;return t?tn(e,1,t):[]}function Ic(e,t,o){return e&&e.length?(t=o||t===r?1:Ve(t),tn(e,0,t<0?0:t)):[]}function Rc(e,t,o){var E=e==null?0:e.length;return E?(t=o||t===r?1:Ve(t),t=E-t,tn(e,t<0?0:t,E)):[]}function Nc(e,t){return e&&e.length?qr(e,ke(t,3),!1,!0):[]}function Lc(e,t){return e&&e.length?qr(e,ke(t,3)):[]}var kc=Je(function(e){return Ln(Ct(e,1,yt,!0))}),Bc=Je(function(e){var t=nn(e);return yt(t)&&(t=r),Ln(Ct(e,1,yt,!0),ke(t,2))}),Fc=Je(function(e){var t=nn(e);return t=typeof t=="function"?t:r,Ln(Ct(e,1,yt,!0),r,t)});function Oc(e){return e&&e.length?Ln(e):[]}function Hc(e,t){return e&&e.length?Ln(e,ke(t,2)):[]}function Mc(e,t){return t=typeof t=="function"?t:r,e&&e.length?Ln(e,r,t):[]}function us(e){if(!(e&&e.length))return[];var t=0;return e=Cn(e,function(o){if(yt(o))return t=xt(o.length,t),!0}),Ti(t,function(o){return ct(e,xi(o))})}function bo(e,t){if(!(e&&e.length))return[];var o=us(e);return t==null?o:ct(o,function(E){return Wt(t,r,E)})}var $c=Je(function(e,t){return yt(e)?vr(e,t):[]}),Uc=Je(function(e){return Yi(Cn(e,yt))}),Wc=Je(function(e){var t=nn(e);return yt(t)&&(t=r),Yi(Cn(e,yt),ke(t,2))}),zc=Je(function(e){var t=nn(e);return t=typeof t=="function"?t:r,Yi(Cn(e,yt),r,t)}),Gc=Je(us);function Kc(e,t){return Ma(e||[],t||[],yr)}function Vc(e,t){return Ma(e||[],t||[],Er)}var Yc=Je(function(e){var t=e.length,o=t>1?e[t-1]:r;return o=typeof o=="function"?(e.pop(),o):r,bo(e,o)});function xo(e){var t=k(e);return t.__chain__=!0,t}function Xc(e,t){return t(e),e}function ai(e,t){return t(e)}var Jc=An(function(e){var t=e.length,o=t?e[0]:0,E=this.__wrapped__,D=function(F){return ki(F,e)};return t>1||this.__actions__.length||!(E instanceof qe)||!En(o)?this.thru(D):(E=E.slice(o,+o+(t?1:0)),E.__actions__.push({func:ai,args:[D],thisArg:r}),new Qt(E,this.__chain__).thru(function(F){return t&&!F.length&&F.push(r),F}))});function Zc(){return xo(this)}function qc(){return new Qt(this.value(),this.__chain__)}function jc(){this.__values__===r&&(this.__values__=Oo(this.value()));var e=this.__index__>=this.__values__.length,t=e?r:this.__values__[this.__index__++];return{done:e,value:t}}function Qc(){return this}function ef(e){for(var t,o=this;o instanceof Kr;){var E=mo(o);E.__index__=0,E.__values__=r,t?D.__wrapped__=E:t=E;var D=E;o=o.__wrapped__}return D.__wrapped__=e,t}function tf(){var e=this.__wrapped__;if(e instanceof qe){var t=e;return this.__actions__.length&&(t=new qe(this)),t=t.reverse(),t.__actions__.push({func:ai,args:[ls],thisArg:r}),new Qt(t,this.__chain__)}return this.thru(ls)}function nf(){return Ha(this.__wrapped__,this.__actions__)}var rf=jr(function(e,t,o){it.call(e,o)?++e[o]:vn(e,o,1)});function sf(e,t,o){var E=Ke(e)?qs:Xu;return o&&kt(e,t,o)&&(t=r),E(e,ke(t,3))}function af(e,t){var o=Ke(e)?Cn:Ea;return o(e,ke(t,3))}var of=Ja(yo),lf=Ja(vo);function uf(e,t){return Ct(oi(e,t),1)}function pf(e,t){return Ct(oi(e,t),K)}function cf(e,t,o){return o=o===r?1:Ve(o),Ct(oi(e,t),o)}function So(e,t){var o=Ke(e)?qt:Nn;return o(e,ke(t,3))}function wo(e,t){var o=Ke(e)?Dl:Aa;return o(e,ke(t,3))}var ff=jr(function(e,t,o){it.call(e,o)?e[o].push(t):vn(e,o,[t])});function df(e,t,o,E){e=Ht(e)?e:ur(e),o=o&&!E?Ve(o):0;var D=e.length;return o<0&&(o=xt(D+o,0)),fi(e)?o<=D&&e.indexOf(t,o)>-1:!!D&&jn(e,t,o)>-1}var hf=Je(function(e,t,o){var E=-1,D=typeof t=="function",F=Ht(e)?ie(e.length):[];return Nn(e,function(W){F[++E]=D?Wt(t,W,o):_r(W,t,o)}),F}),gf=jr(function(e,t,o){vn(e,o,t)});function oi(e,t){var o=Ke(e)?ct:Pa;return o(e,ke(t,3))}function mf(e,t,o,E){return e==null?[]:(Ke(t)||(t=t==null?[]:[t]),o=E?r:o,Ke(o)||(o=o==null?[]:[o]),Ra(e,t,o))}var yf=jr(function(e,t,o){e[o?0:1].push(t)},function(){return[[],[]]});function vf(e,t,o){var E=Ke(e)?Ei:ta,D=arguments.length<3;return E(e,ke(t,4),o,D,Nn)}function _f(e,t,o){var E=Ke(e)?Il:ta,D=arguments.length<3;return E(e,ke(t,4),o,D,Aa)}function Af(e,t){var o=Ke(e)?Cn:Ea;return o(e,pi(ke(t,3)))}function Ef(e){var t=Ke(e)?ma:fp;return t(e)}function bf(e,t,o){(o?kt(e,t,o):t===r)?t=1:t=Ve(t);var E=Ke(e)?zu:dp;return E(e,t)}function xf(e){var t=Ke(e)?Gu:gp;return t(e)}function Sf(e){if(e==null)return 0;if(Ht(e))return fi(e)?er(e):e.length;var t=Nt(e);return t==Xe||t==xe?e.size:$i(e).length}function wf(e,t,o){var E=Ke(e)?bi:mp;return o&&kt(e,t,o)&&(t=r),E(e,ke(t,3))}var Tf=Je(function(e,t){if(e==null)return[];var o=t.length;return o>1&&kt(e,t[0],t[1])?t=[]:o>2&&kt(t[0],t[1],t[2])&&(t=[t[0]]),Ra(e,Ct(t,1),[])}),li=su||function(){return Pt.Date.now()};function Pf(e,t){if(typeof t!="function")throw new jt(l);return e=Ve(e),function(){if(--e<1)return t.apply(this,arguments)}}function To(e,t,o){return t=o?r:t,t=e&&t==null?e.length:t,_n(e,N,r,r,r,r,t)}function Po(e,t){var o;if(typeof t!="function")throw new jt(l);return e=Ve(e),function(){return--e>0&&(o=t.apply(this,arguments)),e<=1&&(t=r),o}}var ps=Je(function(e,t,o){var E=A;if(o.length){var D=In(o,or(ps));E|=P}return _n(e,E,t,o,D)}),Co=Je(function(e,t,o){var E=A|S;if(o.length){var D=In(o,or(Co));E|=P}return _n(t,E,e,o,D)});function Do(e,t,o){t=o?r:t;var E=_n(e,C,r,r,r,r,r,t);return E.placeholder=Do.placeholder,E}function Io(e,t,o){t=o?r:t;var E=_n(e,w,r,r,r,r,r,t);return E.placeholder=Io.placeholder,E}function Ro(e,t,o){var E,D,F,W,V,Q,ce=0,fe=!1,ge=!1,Se=!0;if(typeof e!="function")throw new jt(l);t=rn(t)||0,dt(o)&&(fe=!!o.leading,ge="maxWait"in o,F=ge?xt(rn(o.maxWait)||0,t):F,Se="trailing"in o?!!o.trailing:Se);function Ie(vt){var un=E,Sn=D;return E=D=r,ce=vt,W=e.apply(Sn,un),W}function Fe(vt){return ce=vt,V=Sr(Ze,t),fe?Ie(vt):W}function Ye(vt){var un=vt-Q,Sn=vt-ce,Zo=t-un;return ge?Rt(Zo,F-Sn):Zo}function Oe(vt){var un=vt-Q,Sn=vt-ce;return Q===r||un>=t||un<0||ge&&Sn>=F}function Ze(){var vt=li();if(Oe(vt))return Qe(vt);V=Sr(Ze,Ye(vt))}function Qe(vt){return V=r,Se&&E?Ie(vt):(E=D=r,W)}function Vt(){V!==r&&$a(V),ce=0,E=Q=D=V=r}function Bt(){return V===r?W:Qe(li())}function Yt(){var vt=li(),un=Oe(vt);if(E=arguments,D=this,Q=vt,un){if(V===r)return Fe(Q);if(ge)return $a(V),V=Sr(Ze,t),Ie(Q)}return V===r&&(V=Sr(Ze,t)),W}return Yt.cancel=Vt,Yt.flush=Bt,Yt}var Cf=Je(function(e,t){return _a(e,1,t)}),Df=Je(function(e,t,o){return _a(e,rn(t)||0,o)});function If(e){return _n(e,T)}function ui(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new jt(l);var o=function(){var E=arguments,D=t?t.apply(this,E):E[0],F=o.cache;if(F.has(D))return F.get(D);var W=e.apply(this,E);return o.cache=F.set(D,W)||F,W};return o.cache=new(ui.Cache||yn),o}ui.Cache=yn;function pi(e){if(typeof e!="function")throw new jt(l);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function Rf(e){return Po(2,e)}var Nf=yp(function(e,t){t=t.length==1&&Ke(t[0])?ct(t[0],zt(ke())):ct(Ct(t,1),zt(ke()));var o=t.length;return Je(function(E){for(var D=-1,F=Rt(E.length,o);++D<F;)E[D]=t[D].call(this,E[D]);return Wt(e,this,E)})}),cs=Je(function(e,t){var o=In(t,or(cs));return _n(e,P,r,t,o)}),No=Je(function(e,t){var o=In(t,or(No));return _n(e,I,r,t,o)}),Lf=An(function(e,t){return _n(e,R,r,r,r,t)});function kf(e,t){if(typeof e!="function")throw new jt(l);return t=t===r?t:Ve(t),Je(e,t)}function Bf(e,t){if(typeof e!="function")throw new jt(l);return t=t==null?0:xt(Ve(t),0),Je(function(o){var E=o[t],D=Bn(o,0,t);return E&&Dn(D,E),Wt(e,this,D)})}function Ff(e,t,o){var E=!0,D=!0;if(typeof e!="function")throw new jt(l);return dt(o)&&(E="leading"in o?!!o.leading:E,D="trailing"in o?!!o.trailing:D),Ro(e,t,{leading:E,maxWait:t,trailing:D})}function Of(e){return To(e,1)}function Hf(e,t){return cs(Ji(t),e)}function Mf(){if(!arguments.length)return[];var e=arguments[0];return Ke(e)?e:[e]}function $f(e){return en(e,c)}function Uf(e,t){return t=typeof t=="function"?t:r,en(e,c,t)}function Wf(e){return en(e,y|c)}function zf(e,t){return t=typeof t=="function"?t:r,en(e,y|c,t)}function Gf(e,t){return t==null||va(e,t,wt(t))}function ln(e,t){return e===t||e!==e&&t!==t}var Kf=ni(Oi),Vf=ni(function(e,t){return e>=t}),Yn=Sa(function(){return arguments}())?Sa:function(e){return mt(e)&&it.call(e,"callee")&&!pa.call(e,"callee")},Ke=ie.isArray,Yf=Ks?zt(Ks):ep;function Ht(e){return e!=null&&ci(e.length)&&!bn(e)}function yt(e){return mt(e)&&Ht(e)}function Xf(e){return e===!0||e===!1||mt(e)&&Lt(e)==gt}var Fn=ou||bs,Jf=Vs?zt(Vs):tp;function Zf(e){return mt(e)&&e.nodeType===1&&!wr(e)}function qf(e){if(e==null)return!0;if(Ht(e)&&(Ke(e)||typeof e=="string"||typeof e.splice=="function"||Fn(e)||lr(e)||Yn(e)))return!e.length;var t=Nt(e);if(t==Xe||t==xe)return!e.size;if(xr(e))return!$i(e).length;for(var o in e)if(it.call(e,o))return!1;return!0}function jf(e,t){return Ar(e,t)}function Qf(e,t,o){o=typeof o=="function"?o:r;var E=o?o(e,t):r;return E===r?Ar(e,t,r,o):!!E}function fs(e){if(!mt(e))return!1;var t=Lt(e);return t==Be||t==Dt||typeof e.message=="string"&&typeof e.name=="string"&&!wr(e)}function ed(e){return typeof e=="number"&&fa(e)}function bn(e){if(!dt(e))return!1;var t=Lt(e);return t==St||t==Me||t==ht||t==de}function Lo(e){return typeof e=="number"&&e==Ve(e)}function ci(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=G}function dt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function mt(e){return e!=null&&typeof e=="object"}var ko=Ys?zt(Ys):rp;function td(e,t){return e===t||Mi(e,t,ns(t))}function nd(e,t,o){return o=typeof o=="function"?o:r,Mi(e,t,ns(t),o)}function rd(e){return Bo(e)&&e!=+e}function id(e){if($p(e))throw new ze(d);return wa(e)}function sd(e){return e===null}function ad(e){return e==null}function Bo(e){return typeof e=="number"||mt(e)&&Lt(e)==Xt}function wr(e){if(!mt(e)||Lt(e)!=ft)return!1;var t=Hr(e);if(t===null)return!0;var o=it.call(t,"constructor")&&t.constructor;return typeof o=="function"&&o instanceof o&&kr.call(o)==tu}var ds=Xs?zt(Xs):ip;function od(e){return Lo(e)&&e>=-G&&e<=G}var Fo=Js?zt(Js):sp;function fi(e){return typeof e=="string"||!Ke(e)&&mt(e)&&Lt(e)==re}function Kt(e){return typeof e=="symbol"||mt(e)&&Lt(e)==_e}var lr=Zs?zt(Zs):ap;function ld(e){return e===r}function ud(e){return mt(e)&&Nt(e)==ve}function pd(e){return mt(e)&&Lt(e)==Ne}var cd=ni(Ui),fd=ni(function(e,t){return e<=t});function Oo(e){if(!e)return[];if(Ht(e))return fi(e)?an(e):Ot(e);if(fr&&e[fr])return zl(e[fr]());var t=Nt(e),o=t==Xe?Ci:t==xe?Ir:ur;return o(e)}function xn(e){if(!e)return e===0?e:0;if(e=rn(e),e===K||e===-K){var t=e<0?-1:1;return t*te}return e===e?e:0}function Ve(e){var t=xn(e),o=t%1;return t===t?o?t-o:t:0}function Ho(e){return e?zn(Ve(e),0,pe):0}function rn(e){if(typeof e=="number")return e;if(Kt(e))return se;if(dt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=dt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=na(e);var o=ot.test(e);return o||Re.test(e)?Tl(e.slice(2),o?2:8):nt.test(e)?se:+e}function Mo(e){return cn(e,Mt(e))}function dd(e){return e?zn(Ve(e),-G,G):e===0?e:0}function rt(e){return e==null?"":Gt(e)}var hd=sr(function(e,t){if(xr(t)||Ht(t)){cn(t,wt(t),e);return}for(var o in t)it.call(t,o)&&yr(e,o,t[o])}),$o=sr(function(e,t){cn(t,Mt(t),e)}),di=sr(function(e,t,o,E){cn(t,Mt(t),e,E)}),gd=sr(function(e,t,o,E){cn(t,wt(t),e,E)}),md=An(ki);function yd(e,t){var o=ir(e);return t==null?o:ya(o,t)}var vd=Je(function(e,t){e=st(e);var o=-1,E=t.length,D=E>2?t[2]:r;for(D&&kt(t[0],t[1],D)&&(E=1);++o<E;)for(var F=t[o],W=Mt(F),V=-1,Q=W.length;++V<Q;){var ce=W[V],fe=e[ce];(fe===r||ln(fe,tr[ce])&&!it.call(e,ce))&&(e[ce]=F[ce])}return e}),_d=Je(function(e){return e.push(r,no),Wt(Uo,r,e)});function Ad(e,t){return js(e,ke(t,3),pn)}function Ed(e,t){return js(e,ke(t,3),Fi)}function bd(e,t){return e==null?e:Bi(e,ke(t,3),Mt)}function xd(e,t){return e==null?e:ba(e,ke(t,3),Mt)}function Sd(e,t){return e&&pn(e,ke(t,3))}function wd(e,t){return e&&Fi(e,ke(t,3))}function Td(e){return e==null?[]:Xr(e,wt(e))}function Pd(e){return e==null?[]:Xr(e,Mt(e))}function hs(e,t,o){var E=e==null?r:Gn(e,t);return E===r?o:E}function Cd(e,t){return e!=null&&so(e,t,Zu)}function gs(e,t){return e!=null&&so(e,t,qu)}var Dd=qa(function(e,t,o){t!=null&&typeof t.toString!="function"&&(t=Br.call(t)),e[t]=o},ys($t)),Id=qa(function(e,t,o){t!=null&&typeof t.toString!="function"&&(t=Br.call(t)),it.call(e,t)?e[t].push(o):e[t]=[o]},ke),Rd=Je(_r);function wt(e){return Ht(e)?ga(e):$i(e)}function Mt(e){return Ht(e)?ga(e,!0):op(e)}function Nd(e,t){var o={};return t=ke(t,3),pn(e,function(E,D,F){vn(o,t(E,D,F),E)}),o}function Ld(e,t){var o={};return t=ke(t,3),pn(e,function(E,D,F){vn(o,D,t(E,D,F))}),o}var kd=sr(function(e,t,o){Jr(e,t,o)}),Uo=sr(function(e,t,o,E){Jr(e,t,o,E)}),Bd=An(function(e,t){var o={};if(e==null)return o;var E=!1;t=ct(t,function(F){return F=kn(F,e),E||(E=F.length>1),F}),cn(e,es(e),o),E&&(o=en(o,y|f|c,Cp));for(var D=t.length;D--;)Vi(o,t[D]);return o});function Fd(e,t){return Wo(e,pi(ke(t)))}var Od=An(function(e,t){return e==null?{}:up(e,t)});function Wo(e,t){if(e==null)return{};var o=ct(es(e),function(E){return[E]});return t=ke(t),Na(e,o,function(E,D){return t(E,D[0])})}function Hd(e,t,o){t=kn(t,e);var E=-1,D=t.length;for(D||(D=1,e=r);++E<D;){var F=e==null?r:e[fn(t[E])];F===r&&(E=D,F=o),e=bn(F)?F.call(e):F}return e}function Md(e,t,o){return e==null?e:Er(e,t,o)}function $d(e,t,o,E){return E=typeof E=="function"?E:r,e==null?e:Er(e,t,o,E)}var zo=eo(wt),Go=eo(Mt);function Ud(e,t,o){var E=Ke(e),D=E||Fn(e)||lr(e);if(t=ke(t,4),o==null){var F=e&&e.constructor;D?o=E?new F:[]:dt(e)?o=bn(F)?ir(Hr(e)):{}:o={}}return(D?qt:pn)(e,function(W,V,Q){return t(o,W,V,Q)}),o}function Wd(e,t){return e==null?!0:Vi(e,t)}function zd(e,t,o){return e==null?e:Oa(e,t,Ji(o))}function Gd(e,t,o,E){return E=typeof E=="function"?E:r,e==null?e:Oa(e,t,Ji(o),E)}function ur(e){return e==null?[]:Pi(e,wt(e))}function Kd(e){return e==null?[]:Pi(e,Mt(e))}function Vd(e,t,o){return o===r&&(o=t,t=r),o!==r&&(o=rn(o),o=o===o?o:0),t!==r&&(t=rn(t),t=t===t?t:0),zn(rn(e),t,o)}function Yd(e,t,o){return t=xn(t),o===r?(o=t,t=0):o=xn(o),e=rn(e),ju(e,t,o)}function Xd(e,t,o){if(o&&typeof o!="boolean"&&kt(e,t,o)&&(t=o=r),o===r&&(typeof t=="boolean"?(o=t,t=r):typeof e=="boolean"&&(o=e,e=r)),e===r&&t===r?(e=0,t=1):(e=xn(e),t===r?(t=e,e=0):t=xn(t)),e>t){var E=e;e=t,t=E}if(o||e%1||t%1){var D=da();return Rt(e+D*(t-e+wl("1e-"+((D+"").length-1))),t)}return zi(e,t)}var Jd=ar(function(e,t,o){return t=t.toLowerCase(),e+(o?Ko(t):t)});function Ko(e){return ms(rt(e).toLowerCase())}function Vo(e){return e=rt(e),e&&e.replace(Pn,Hl).replace(gl,"")}function Zd(e,t,o){e=rt(e),t=Gt(t);var E=e.length;o=o===r?E:zn(Ve(o),0,E);var D=o;return o-=t.length,o>=0&&e.slice(o,D)==t}function qd(e){return e=rt(e),e&&Tn.test(e)?e.replace(At,Ml):e}function jd(e){return e=rt(e),e&&q.test(e)?e.replace(ae,"\\$&"):e}var Qd=ar(function(e,t,o){return e+(o?"-":"")+t.toLowerCase()}),eh=ar(function(e,t,o){return e+(o?" ":"")+t.toLowerCase()}),th=Xa("toLowerCase");function nh(e,t,o){e=rt(e),t=Ve(t);var E=t?er(e):0;if(!t||E>=t)return e;var D=(t-E)/2;return ti(Wr(D),o)+e+ti(Ur(D),o)}function rh(e,t,o){e=rt(e),t=Ve(t);var E=t?er(e):0;return t&&E<t?e+ti(t-E,o):e}function ih(e,t,o){e=rt(e),t=Ve(t);var E=t?er(e):0;return t&&E<t?ti(t-E,o)+e:e}function sh(e,t,o){return o||t==null?t=0:t&&(t=+t),cu(rt(e).replace(le,""),t||0)}function ah(e,t,o){return(o?kt(e,t,o):t===r)?t=1:t=Ve(t),Gi(rt(e),t)}function oh(){var e=arguments,t=rt(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var lh=ar(function(e,t,o){return e+(o?"_":"")+t.toLowerCase()});function uh(e,t,o){return o&&typeof o!="number"&&kt(e,t,o)&&(t=o=r),o=o===r?pe:o>>>0,o?(e=rt(e),e&&(typeof t=="string"||t!=null&&!ds(t))&&(t=Gt(t),!t&&Qn(e))?Bn(an(e),0,o):e.split(t,o)):[]}var ph=ar(function(e,t,o){return e+(o?" ":"")+ms(t)});function ch(e,t,o){return e=rt(e),o=o==null?0:zn(Ve(o),0,e.length),t=Gt(t),e.slice(o,o+t.length)==t}function fh(e,t,o){var E=k.templateSettings;o&&kt(e,t,o)&&(t=r),e=rt(e),t=di({},t,E,to);var D=di({},t.imports,E.imports,to),F=wt(D),W=Pi(D,F),V,Q,ce=0,fe=t.interpolate||Et,ge="__p += '",Se=Di((t.escape||Et).source+"|"+fe.source+"|"+(fe===Jn?Ue:Et).source+"|"+(t.evaluate||Et).source+"|$","g"),Ie="//# sourceURL="+(it.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Al+"]")+`
`;e.replace(Se,function(Oe,Ze,Qe,Vt,Bt,Yt){return Qe||(Qe=Vt),ge+=e.slice(ce,Yt).replace(Zn,$l),Ze&&(V=!0,ge+=`' +
__e(`+Ze+`) +
'`),Bt&&(Q=!0,ge+=`';
`+Bt+`;
__p += '`),Qe&&(ge+=`' +
((__t = (`+Qe+`)) == null ? '' : __t) +
'`),ce=Yt+Oe.length,Oe}),ge+=`';
`;var Fe=it.call(t,"variable")&&t.variable;if(!Fe)ge=`with (obj) {
`+ge+`
}
`;else if(Ee.test(Fe))throw new ze(s);ge=(Q?ge.replace(Xn,""):ge).replace(wn,"$1").replace(It,"$1;"),ge="function("+(Fe||"obj")+`) {
`+(Fe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(V?", __e = _.escape":"")+(Q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ge+`return __p
}`;var Ye=Xo(function(){return tt(F,Ie+"return "+ge).apply(r,W)});if(Ye.source=ge,fs(Ye))throw Ye;return Ye}function dh(e){return rt(e).toLowerCase()}function hh(e){return rt(e).toUpperCase()}function gh(e,t,o){if(e=rt(e),e&&(o||t===r))return na(e);if(!e||!(t=Gt(t)))return e;var E=an(e),D=an(t),F=ra(E,D),W=ia(E,D)+1;return Bn(E,F,W).join("")}function mh(e,t,o){if(e=rt(e),e&&(o||t===r))return e.slice(0,aa(e)+1);if(!e||!(t=Gt(t)))return e;var E=an(e),D=ia(E,an(t))+1;return Bn(E,0,D).join("")}function yh(e,t,o){if(e=rt(e),e&&(o||t===r))return e.replace(le,"");if(!e||!(t=Gt(t)))return e;var E=an(e),D=ra(E,an(t));return Bn(E,D).join("")}function vh(e,t){var o=L,E=H;if(dt(t)){var D="separator"in t?t.separator:D;o="length"in t?Ve(t.length):o,E="omission"in t?Gt(t.omission):E}e=rt(e);var F=e.length;if(Qn(e)){var W=an(e);F=W.length}if(o>=F)return e;var V=o-er(E);if(V<1)return E;var Q=W?Bn(W,0,V).join(""):e.slice(0,V);if(D===r)return Q+E;if(W&&(V+=Q.length-V),ds(D)){if(e.slice(V).search(D)){var ce,fe=Q;for(D.global||(D=Di(D.source,rt(De.exec(D))+"g")),D.lastIndex=0;ce=D.exec(fe);)var ge=ce.index;Q=Q.slice(0,ge===r?V:ge)}}else if(e.indexOf(Gt(D),V)!=V){var Se=Q.lastIndexOf(D);Se>-1&&(Q=Q.slice(0,Se))}return Q+E}function _h(e){return e=rt(e),e&&hn.test(e)?e.replace(dn,Yl):e}var Ah=ar(function(e,t,o){return e+(o?" ":"")+t.toUpperCase()}),ms=Xa("toUpperCase");function Yo(e,t,o){return e=rt(e),t=o?r:t,t===r?Wl(e)?Zl(e):Ll(e):e.match(t)||[]}var Xo=Je(function(e,t){try{return Wt(e,r,t)}catch(o){return fs(o)?o:new ze(o)}}),Eh=An(function(e,t){return qt(t,function(o){o=fn(o),vn(e,o,ps(e[o],e))}),e});function bh(e){var t=e==null?0:e.length,o=ke();return e=t?ct(e,function(E){if(typeof E[1]!="function")throw new jt(l);return[o(E[0]),E[1]]}):[],Je(function(E){for(var D=-1;++D<t;){var F=e[D];if(Wt(F[0],this,E))return Wt(F[1],this,E)}})}function xh(e){return Yu(en(e,y))}function ys(e){return function(){return e}}function Sh(e,t){return e==null||e!==e?t:e}var wh=Za(),Th=Za(!0);function $t(e){return e}function vs(e){return Ta(typeof e=="function"?e:en(e,y))}function Ph(e){return Ca(en(e,y))}function Ch(e,t){return Da(e,en(t,y))}var Dh=Je(function(e,t){return function(o){return _r(o,e,t)}}),Ih=Je(function(e,t){return function(o){return _r(e,o,t)}});function _s(e,t,o){var E=wt(t),D=Xr(t,E);o==null&&!(dt(t)&&(D.length||!E.length))&&(o=t,t=e,e=this,D=Xr(t,wt(t)));var F=!(dt(o)&&"chain"in o)||!!o.chain,W=bn(e);return qt(D,function(V){var Q=t[V];e[V]=Q,W&&(e.prototype[V]=function(){var ce=this.__chain__;if(F||ce){var fe=e(this.__wrapped__),ge=fe.__actions__=Ot(this.__actions__);return ge.push({func:Q,args:arguments,thisArg:e}),fe.__chain__=ce,fe}return Q.apply(e,Dn([this.value()],arguments))})}),e}function Rh(){return Pt._===this&&(Pt._=nu),this}function As(){}function Nh(e){return e=Ve(e),Je(function(t){return Ia(t,e)})}var Lh=qi(ct),kh=qi(qs),Bh=qi(bi);function Jo(e){return is(e)?xi(fn(e)):pp(e)}function Fh(e){return function(t){return e==null?r:Gn(e,t)}}var Oh=ja(),Hh=ja(!0);function Es(){return[]}function bs(){return!1}function Mh(){return{}}function $h(){return""}function Uh(){return!0}function Wh(e,t){if(e=Ve(e),e<1||e>G)return[];var o=pe,E=Rt(e,pe);t=ke(t),e-=pe;for(var D=Ti(E,t);++o<e;)t(o);return D}function zh(e){return Ke(e)?ct(e,fn):Kt(e)?[e]:Ot(go(rt(e)))}function Gh(e){var t=++eu;return rt(e)+t}var Kh=ei(function(e,t){return e+t},0),Vh=ji("ceil"),Yh=ei(function(e,t){return e/t},1),Xh=ji("floor");function Jh(e){return e&&e.length?Yr(e,$t,Oi):r}function Zh(e,t){return e&&e.length?Yr(e,ke(t,2),Oi):r}function qh(e){return ea(e,$t)}function jh(e,t){return ea(e,ke(t,2))}function Qh(e){return e&&e.length?Yr(e,$t,Ui):r}function eg(e,t){return e&&e.length?Yr(e,ke(t,2),Ui):r}var tg=ei(function(e,t){return e*t},1),ng=ji("round"),rg=ei(function(e,t){return e-t},0);function ig(e){return e&&e.length?wi(e,$t):0}function sg(e,t){return e&&e.length?wi(e,ke(t,2)):0}return k.after=Pf,k.ary=To,k.assign=hd,k.assignIn=$o,k.assignInWith=di,k.assignWith=gd,k.at=md,k.before=Po,k.bind=ps,k.bindAll=Eh,k.bindKey=Co,k.castArray=Mf,k.chain=xo,k.chunk=Yp,k.compact=Xp,k.concat=Jp,k.cond=bh,k.conforms=xh,k.constant=ys,k.countBy=rf,k.create=yd,k.curry=Do,k.curryRight=Io,k.debounce=Ro,k.defaults=vd,k.defaultsDeep=_d,k.defer=Cf,k.delay=Df,k.difference=Zp,k.differenceBy=qp,k.differenceWith=jp,k.drop=Qp,k.dropRight=ec,k.dropRightWhile=tc,k.dropWhile=nc,k.fill=rc,k.filter=af,k.flatMap=uf,k.flatMapDeep=pf,k.flatMapDepth=cf,k.flatten=_o,k.flattenDeep=ic,k.flattenDepth=sc,k.flip=If,k.flow=wh,k.flowRight=Th,k.fromPairs=ac,k.functions=Td,k.functionsIn=Pd,k.groupBy=ff,k.initial=lc,k.intersection=uc,k.intersectionBy=pc,k.intersectionWith=cc,k.invert=Dd,k.invertBy=Id,k.invokeMap=hf,k.iteratee=vs,k.keyBy=gf,k.keys=wt,k.keysIn=Mt,k.map=oi,k.mapKeys=Nd,k.mapValues=Ld,k.matches=Ph,k.matchesProperty=Ch,k.memoize=ui,k.merge=kd,k.mergeWith=Uo,k.method=Dh,k.methodOf=Ih,k.mixin=_s,k.negate=pi,k.nthArg=Nh,k.omit=Bd,k.omitBy=Fd,k.once=Rf,k.orderBy=mf,k.over=Lh,k.overArgs=Nf,k.overEvery=kh,k.overSome=Bh,k.partial=cs,k.partialRight=No,k.partition=yf,k.pick=Od,k.pickBy=Wo,k.property=Jo,k.propertyOf=Fh,k.pull=gc,k.pullAll=Eo,k.pullAllBy=mc,k.pullAllWith=yc,k.pullAt=vc,k.range=Oh,k.rangeRight=Hh,k.rearg=Lf,k.reject=Af,k.remove=_c,k.rest=kf,k.reverse=ls,k.sampleSize=bf,k.set=Md,k.setWith=$d,k.shuffle=xf,k.slice=Ac,k.sortBy=Tf,k.sortedUniq=Pc,k.sortedUniqBy=Cc,k.split=uh,k.spread=Bf,k.tail=Dc,k.take=Ic,k.takeRight=Rc,k.takeRightWhile=Nc,k.takeWhile=Lc,k.tap=Xc,k.throttle=Ff,k.thru=ai,k.toArray=Oo,k.toPairs=zo,k.toPairsIn=Go,k.toPath=zh,k.toPlainObject=Mo,k.transform=Ud,k.unary=Of,k.union=kc,k.unionBy=Bc,k.unionWith=Fc,k.uniq=Oc,k.uniqBy=Hc,k.uniqWith=Mc,k.unset=Wd,k.unzip=us,k.unzipWith=bo,k.update=zd,k.updateWith=Gd,k.values=ur,k.valuesIn=Kd,k.without=$c,k.words=Yo,k.wrap=Hf,k.xor=Uc,k.xorBy=Wc,k.xorWith=zc,k.zip=Gc,k.zipObject=Kc,k.zipObjectDeep=Vc,k.zipWith=Yc,k.entries=zo,k.entriesIn=Go,k.extend=$o,k.extendWith=di,_s(k,k),k.add=Kh,k.attempt=Xo,k.camelCase=Jd,k.capitalize=Ko,k.ceil=Vh,k.clamp=Vd,k.clone=$f,k.cloneDeep=Wf,k.cloneDeepWith=zf,k.cloneWith=Uf,k.conformsTo=Gf,k.deburr=Vo,k.defaultTo=Sh,k.divide=Yh,k.endsWith=Zd,k.eq=ln,k.escape=qd,k.escapeRegExp=jd,k.every=sf,k.find=of,k.findIndex=yo,k.findKey=Ad,k.findLast=lf,k.findLastIndex=vo,k.findLastKey=Ed,k.floor=Xh,k.forEach=So,k.forEachRight=wo,k.forIn=bd,k.forInRight=xd,k.forOwn=Sd,k.forOwnRight=wd,k.get=hs,k.gt=Kf,k.gte=Vf,k.has=Cd,k.hasIn=gs,k.head=Ao,k.identity=$t,k.includes=df,k.indexOf=oc,k.inRange=Yd,k.invoke=Rd,k.isArguments=Yn,k.isArray=Ke,k.isArrayBuffer=Yf,k.isArrayLike=Ht,k.isArrayLikeObject=yt,k.isBoolean=Xf,k.isBuffer=Fn,k.isDate=Jf,k.isElement=Zf,k.isEmpty=qf,k.isEqual=jf,k.isEqualWith=Qf,k.isError=fs,k.isFinite=ed,k.isFunction=bn,k.isInteger=Lo,k.isLength=ci,k.isMap=ko,k.isMatch=td,k.isMatchWith=nd,k.isNaN=rd,k.isNative=id,k.isNil=ad,k.isNull=sd,k.isNumber=Bo,k.isObject=dt,k.isObjectLike=mt,k.isPlainObject=wr,k.isRegExp=ds,k.isSafeInteger=od,k.isSet=Fo,k.isString=fi,k.isSymbol=Kt,k.isTypedArray=lr,k.isUndefined=ld,k.isWeakMap=ud,k.isWeakSet=pd,k.join=fc,k.kebabCase=Qd,k.last=nn,k.lastIndexOf=dc,k.lowerCase=eh,k.lowerFirst=th,k.lt=cd,k.lte=fd,k.max=Jh,k.maxBy=Zh,k.mean=qh,k.meanBy=jh,k.min=Qh,k.minBy=eg,k.stubArray=Es,k.stubFalse=bs,k.stubObject=Mh,k.stubString=$h,k.stubTrue=Uh,k.multiply=tg,k.nth=hc,k.noConflict=Rh,k.noop=As,k.now=li,k.pad=nh,k.padEnd=rh,k.padStart=ih,k.parseInt=sh,k.random=Xd,k.reduce=vf,k.reduceRight=_f,k.repeat=ah,k.replace=oh,k.result=Hd,k.round=ng,k.runInContext=Z,k.sample=Ef,k.size=Sf,k.snakeCase=lh,k.some=wf,k.sortedIndex=Ec,k.sortedIndexBy=bc,k.sortedIndexOf=xc,k.sortedLastIndex=Sc,k.sortedLastIndexBy=wc,k.sortedLastIndexOf=Tc,k.startCase=ph,k.startsWith=ch,k.subtract=rg,k.sum=ig,k.sumBy=sg,k.template=fh,k.times=Wh,k.toFinite=xn,k.toInteger=Ve,k.toLength=Ho,k.toLower=dh,k.toNumber=rn,k.toSafeInteger=dd,k.toString=rt,k.toUpper=hh,k.trim=gh,k.trimEnd=mh,k.trimStart=yh,k.truncate=vh,k.unescape=_h,k.uniqueId=Gh,k.upperCase=Ah,k.upperFirst=ms,k.each=So,k.eachRight=wo,k.first=Ao,_s(k,function(){var e={};return pn(k,function(t,o){it.call(k.prototype,o)||(e[o]=t)}),e}(),{chain:!1}),k.VERSION=n,qt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){k[e].placeholder=k}),qt(["drop","take"],function(e,t){qe.prototype[e]=function(o){o=o===r?1:xt(Ve(o),0);var E=this.__filtered__&&!t?new qe(this):this.clone();return E.__filtered__?E.__takeCount__=Rt(o,E.__takeCount__):E.__views__.push({size:Rt(o,pe),type:e+(E.__dir__<0?"Right":"")}),E},qe.prototype[e+"Right"]=function(o){return this.reverse()[e](o).reverse()}}),qt(["filter","map","takeWhile"],function(e,t){var o=t+1,E=o==O||o==M;qe.prototype[e]=function(D){var F=this.clone();return F.__iteratees__.push({iteratee:ke(D,3),type:o}),F.__filtered__=F.__filtered__||E,F}}),qt(["head","last"],function(e,t){var o="take"+(t?"Right":"");qe.prototype[e]=function(){return this[o](1).value()[0]}}),qt(["initial","tail"],function(e,t){var o="drop"+(t?"":"Right");qe.prototype[e]=function(){return this.__filtered__?new qe(this):this[o](1)}}),qe.prototype.compact=function(){return this.filter($t)},qe.prototype.find=function(e){return this.filter(e).head()},qe.prototype.findLast=function(e){return this.reverse().find(e)},qe.prototype.invokeMap=Je(function(e,t){return typeof e=="function"?new qe(this):this.map(function(o){return _r(o,e,t)})}),qe.prototype.reject=function(e){return this.filter(pi(ke(e)))},qe.prototype.slice=function(e,t){e=Ve(e);var o=this;return o.__filtered__&&(e>0||t<0)?new qe(o):(e<0?o=o.takeRight(-e):e&&(o=o.drop(e)),t!==r&&(t=Ve(t),o=t<0?o.dropRight(-t):o.take(t-e)),o)},qe.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},qe.prototype.toArray=function(){return this.take(pe)},pn(qe.prototype,function(e,t){var o=/^(?:filter|find|map|reject)|While$/.test(t),E=/^(?:head|last)$/.test(t),D=k[E?"take"+(t=="last"?"Right":""):t],F=E||/^find/.test(t);D&&(k.prototype[t]=function(){var W=this.__wrapped__,V=E?[1]:arguments,Q=W instanceof qe,ce=V[0],fe=Q||Ke(W),ge=function(Ze){var Qe=D.apply(k,Dn([Ze],V));return E&&Se?Qe[0]:Qe};fe&&o&&typeof ce=="function"&&ce.length!=1&&(Q=fe=!1);var Se=this.__chain__,Ie=!!this.__actions__.length,Fe=F&&!Se,Ye=Q&&!Ie;if(!F&&fe){W=Ye?W:new qe(this);var Oe=e.apply(W,V);return Oe.__actions__.push({func:ai,args:[ge],thisArg:r}),new Qt(Oe,Se)}return Fe&&Ye?e.apply(this,V):(Oe=this.thru(ge),Fe?E?Oe.value()[0]:Oe.value():Oe)})}),qt(["pop","push","shift","sort","splice","unshift"],function(e){var t=Nr[e],o=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",E=/^(?:pop|shift)$/.test(e);k.prototype[e]=function(){var D=arguments;if(E&&!this.__chain__){var F=this.value();return t.apply(Ke(F)?F:[],D)}return this[o](function(W){return t.apply(Ke(W)?W:[],D)})}}),pn(qe.prototype,function(e,t){var o=k[t];if(o){var E=o.name+"";it.call(rr,E)||(rr[E]=[]),rr[E].push({name:t,func:o})}}),rr[Qr(r,S).name]=[{name:"wrapper",func:r}],qe.prototype.clone=vu,qe.prototype.reverse=_u,qe.prototype.value=Au,k.prototype.at=Jc,k.prototype.chain=Zc,k.prototype.commit=qc,k.prototype.next=jc,k.prototype.plant=ef,k.prototype.reverse=tf,k.prototype.toJSON=k.prototype.valueOf=k.prototype.value=nf,k.prototype.first=k.prototype.head,fr&&(k.prototype[fr]=Qc),k},Rr=ql();Pt._=Rr,h=function(){return Rr}.call(v,a,v,x),h!==r&&(x.exports=h)}).call(this)},9593:(x,v,a)=>{"use strict";const h=a(4411),r=Symbol("max"),n=Symbol("length"),p=Symbol("lengthCalculator"),d=Symbol("allowStale"),l=Symbol("maxAge"),s=Symbol("dispose"),u=Symbol("noDisposeOnSet"),g=Symbol("lruList"),i=Symbol("cache"),y=Symbol("updateAgeOnGet"),f=()=>1;class c{constructor(P){if(typeof P=="number"&&(P={max:P}),P||(P={}),P.max&&(typeof P.max!="number"||P.max<0))throw new TypeError("max must be a non-negative number");const I=this[r]=P.max||1/0,N=P.length||f;if(this[p]=typeof N!="function"?f:N,this[d]=P.stale||!1,P.maxAge&&typeof P.maxAge!="number")throw new TypeError("maxAge must be a number");this[l]=P.maxAge||0,this[s]=P.dispose,this[u]=P.noDisposeOnSet||!1,this[y]=P.updateAgeOnGet||!1,this.reset()}set max(P){if(typeof P!="number"||P<0)throw new TypeError("max must be a non-negative number");this[r]=P||1/0,A(this)}get max(){return this[r]}set allowStale(P){this[d]=!!P}get allowStale(){return this[d]}set maxAge(P){if(typeof P!="number")throw new TypeError("maxAge must be a non-negative number");this[l]=P,A(this)}get maxAge(){return this[l]}set lengthCalculator(P){typeof P!="function"&&(P=f),P!==this[p]&&(this[p]=P,this[n]=0,this[g].forEach(I=>{I.length=this[p](I.value,I.key),this[n]+=I.length})),A(this)}get lengthCalculator(){return this[p]}get length(){return this[n]}get itemCount(){return this[g].length}rforEach(P,I){I=I||this;for(let N=this[g].tail;N!==null;){const R=N.prev;C(this,P,N,I),N=R}}forEach(P,I){I=I||this;for(let N=this[g].head;N!==null;){const R=N.next;C(this,P,N,I),N=R}}keys(){return this[g].toArray().map(P=>P.key)}values(){return this[g].toArray().map(P=>P.value)}reset(){this[s]&&this[g]&&this[g].length&&this[g].forEach(P=>this[s](P.key,P.value)),this[i]=new Map,this[g]=new h,this[n]=0}dump(){return this[g].map(P=>m(this,P)?!1:{k:P.key,v:P.value,e:P.now+(P.maxAge||0)}).toArray().filter(P=>P)}dumpLru(){return this[g]}set(P,I,N){if(N=N||this[l],N&&typeof N!="number")throw new TypeError("maxAge must be a number");const R=N?Date.now():0,T=this[p](I,P);if(this[i].has(P)){if(T>this[r])return S(this,this[i].get(P)),!1;const $=this[i].get(P).value;return this[s]&&(this[u]||this[s](P,$.value)),$.now=R,$.maxAge=N,$.value=I,this[n]+=T-$.length,$.length=T,this.get(P),A(this),!0}const L=new b(P,I,T,R,N);return L.length>this[r]?(this[s]&&this[s](P,I),!1):(this[n]+=L.length,this[g].unshift(L),this[i].set(P,this[g].head),A(this),!0)}has(P){if(!this[i].has(P))return!1;const I=this[i].get(P).value;return!m(this,I)}get(P){return _(this,P,!0)}peek(P){return _(this,P,!1)}pop(){const P=this[g].tail;return P?(S(this,P),P.value):null}del(P){S(this,this[i].get(P))}load(P){this.reset();const I=Date.now();for(let N=P.length-1;N>=0;N--){const R=P[N],T=R.e||0;if(T===0)this.set(R.k,R.v);else{const L=T-I;L>0&&this.set(R.k,R.v,L)}}}prune(){this[i].forEach((P,I)=>_(this,I,!1))}}const _=(w,P,I)=>{const N=w[i].get(P);if(N){const R=N.value;if(m(w,R)){if(S(w,N),!w[d])return}else I&&(w[y]&&(N.value.now=Date.now()),w[g].unshiftNode(N));return R.value}},m=(w,P)=>{if(!P||!P.maxAge&&!w[l])return!1;const I=Date.now()-P.now;return P.maxAge?I>P.maxAge:w[l]&&I>w[l]},A=w=>{if(w[n]>w[r])for(let P=w[g].tail;w[n]>w[r]&&P!==null;){const I=P.prev;S(w,P),P=I}},S=(w,P)=>{if(P){const I=P.value;w[s]&&w[s](I.key,I.value),w[n]-=I.length,w[i].delete(I.key),w[g].removeNode(P)}};class b{constructor(P,I,N,R,T){this.key=P,this.value=I,this.length=N,this.now=R,this.maxAge=T||0}}const C=(w,P,I,N)=>{let R=I.value;m(w,R)&&(S(w,I),w[d]||(R=void 0)),R&&P.call(N,R.value,R.key,w)};x.exports=c},7874:()=>{(function(x){var v="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},h={bash:a,environment:{pattern:RegExp("\\$"+v),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+v),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};x.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+v),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:h},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:h},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:h.entity}}],environment:{pattern:RegExp("\\$?"+v),alias:"constant"},variable:h.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=x.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],n=h.variable[1].inside,p=0;p<r.length;p++)n[r[p]]=x.languages.bash[r[p]];x.languages.sh=x.languages.bash,x.languages.shell=x.languages.bash})(Prism)},728:()=>{(function(x){x.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var v={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(v).forEach(function(a){var h=v[a],r=[];/^\w+$/.test(a)||r.push(/\w+/.exec(a)[0]),a==="diff"&&r.push("bold"),x.languages.diff[a]={pattern:RegExp("^(?:["+h+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:r,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(a)[0]}}}}),Object.defineProperty(x.languages.diff,"PREFIXES",{value:v})})(Prism)},57:()=>{(function(x){function v(s){return RegExp("(^(?:"+s+"):[ 	]*(?![ 	]))[^]+","i")}x.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:x.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:v(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:x.languages.csp},{pattern:v(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:x.languages.hpkp},{pattern:v(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:x.languages.hsts},{pattern:v(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var a=x.languages,h={"application/javascript":a.javascript,"application/json":a.json||a.javascript,"application/xml":a.xml,"text/xml":a.xml,"text/html":a.html,"text/css":a.css,"text/plain":a.plain},r={"application/json":!0,"application/xml":!0};function n(s){var u=s.replace(/^[a-z]+\//,""),g="\\w+/(?:[\\w.-]+\\+)+"+u+"(?![+\\w.-])";return"(?:"+s+"|"+g+")"}var p;for(var d in h)if(h[d]){p=p||{};var l=r[d]?n(d):d;p[d.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+l+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:h[d]}}p&&x.languages.insertBefore("http","header",p)})(Prism)},4277:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},366:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},6263:()=>{(function(){if(typeof Prism=="undefined"||typeof document=="undefined")return;if(!Prism.plugins.toolbar){console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");return}function x(n,p){n.addEventListener("click",function(){a(p)})}function v(n){var p=document.createElement("textarea");p.value=n.getText(),p.style.top="0",p.style.left="0",p.style.position="fixed",document.body.appendChild(p),p.focus(),p.select();try{var d=document.execCommand("copy");setTimeout(function(){d?n.success():n.error()},1)}catch(l){setTimeout(function(){n.error(l)},1)}document.body.removeChild(p)}function a(n){navigator.clipboard?navigator.clipboard.writeText(n.getText()).then(n.success,function(){v(n)}):v(n)}function h(n){window.getSelection().selectAllChildren(n)}function r(n){var p={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3},d="data-prismjs-";for(var l in p){for(var s=d+l,u=n;u&&!u.hasAttribute(s);)u=u.parentElement;u&&(p[l]=u.getAttribute(s))}return p}Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(n){var p=n.element,d=r(p),l=document.createElement("button");l.className="copy-to-clipboard-button",l.setAttribute("type","button");var s=document.createElement("span");return l.appendChild(s),g("copy"),x(l,{getText:function(){return p.textContent},success:function(){g("copy-success"),u()},error:function(){g("copy-error"),setTimeout(function(){h(p)},1),u()}}),l;function u(){setTimeout(function(){g("copy")},d["copy-timeout"])}function g(i){s.textContent=d[i],l.setAttribute("data-copy-state",i)}})})()},6866:()=>{(function(){if(typeof Prism!="undefined"){var x=/^diff-([\w-]+)/i,v=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g,a=RegExp(/(?:__|[^\r\n<])*(?:\r\n?|\n|(?:__|[^\r\n<])(?![^\r\n]))/.source.replace(/__/g,function(){return v.source}),"gi"),h=!1;Prism.hooks.add("before-sanity-check",function(r){var n=r.language;x.test(n)&&!r.grammar&&(r.grammar=Prism.languages[n]=Prism.languages.diff)}),Prism.hooks.add("before-tokenize",function(r){!h&&!Prism.languages.diff&&!Prism.plugins.autoloader&&(h=!0,console.warn("Prism's Diff Highlight plugin requires the Diff language definition (prism-diff.js).Make sure the language definition is loaded or use Prism's Autoloader plugin."));var n=r.language;x.test(n)&&!Prism.languages[n]&&(Prism.languages[n]=Prism.languages.diff)}),Prism.hooks.add("wrap",function(r){var n,p;if(r.language!=="diff"){var d=x.exec(r.language);if(!d)return;n=d[1],p=Prism.languages[n]}var l=Prism.languages.diff&&Prism.languages.diff.PREFIXES;if(l&&r.type in l){var s=r.content.replace(v,""),u=s.replace(/&lt;/g,"<").replace(/&amp;/g,"&"),g=u.replace(/(^|[\r\n])./g,"$1"),i;p?i=Prism.highlight(g,p,n):i=Prism.util.encode(g);var y=new Prism.Token("prefix",l[r.type],[/\w+/.exec(r.type)[0]]),f=Prism.Token.stringify(y,r.language),c=[],_;for(a.lastIndex=0;_=a.exec(i);)c.push(f+_[0]);/(?:^|[\r\n]).$/.test(u)&&c.push(f),r.content=c.join(""),p&&r.classes.push("language-"+n)}})}})()},5206:()=>{(function(){if(typeof Prism=="undefined"||typeof document=="undefined")return;var x=[],v={},a=function(){};Prism.plugins.toolbar={};var h=Prism.plugins.toolbar.registerButton=function(p,d){var l;if(typeof d=="function"?l=d:l=function(s){var u;return typeof d.onClick=="function"?(u=document.createElement("button"),u.type="button",u.addEventListener("click",function(){d.onClick.call(this,s)})):typeof d.url=="string"?(u=document.createElement("a"),u.href=d.url):u=document.createElement("span"),d.className&&u.classList.add(d.className),u.textContent=d.text,u},p in v){console.warn('There is a button with the key "'+p+'" registered already.');return}x.push(v[p]=l)};function r(p){for(;p;){var d=p.getAttribute("data-toolbar-order");if(d!=null)return d=d.trim(),d.length?d.split(/\s*,\s*/g):[];p=p.parentElement}}var n=Prism.plugins.toolbar.hook=function(p){var d=p.element.parentNode;if(!(!d||!/pre/i.test(d.nodeName))&&!d.parentNode.classList.contains("code-toolbar")){var l=document.createElement("div");l.classList.add("code-toolbar"),d.parentNode.insertBefore(l,d),l.appendChild(d);var s=document.createElement("div");s.classList.add("toolbar");var u=x,g=r(p.element);g&&(u=g.map(function(i){return v[i]||a})),u.forEach(function(i){var y=i(p);if(y){var f=document.createElement("div");f.classList.add("toolbar-item"),f.appendChild(y),s.appendChild(f)}}),l.appendChild(s)}};h("label",function(p){var d=p.element.parentNode;if(!(!d||!/pre/i.test(d.nodeName))&&d.hasAttribute("data-label")){var l,s,u=d.getAttribute("data-label");try{s=document.querySelector("template#"+u)}catch(g){}return s?l=s.content:(d.hasAttribute("data-url")?(l=document.createElement("a"),l.href=d.getAttribute("data-url")):l=document.createElement("span"),l.textContent=u),l}}),Prism.hooks.add("complete",n)})()},5660:(x,v,a)=>{var h=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(n){var p=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,l={},s={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function b(C){return C instanceof u?new u(C.type,b(C.content),C.alias):Array.isArray(C)?C.map(b):C.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++d}),b.__id},clone:function b(C,w){w=w||{};var P,I;switch(s.util.type(C)){case"Object":if(I=s.util.objId(C),w[I])return w[I];P={},w[I]=P;for(var N in C)C.hasOwnProperty(N)&&(P[N]=b(C[N],w));return P;case"Array":return I=s.util.objId(C),w[I]?w[I]:(P=[],w[I]=P,C.forEach(function(R,T){P[T]=b(R,w)}),P);default:return C}},getLanguage:function(b){for(;b;){var C=p.exec(b.className);if(C)return C[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,C){b.className=b.className.replace(RegExp(p,"gi"),""),b.classList.add("language-"+C)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(P){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(P.stack)||[])[1];if(b){var C=document.getElementsByTagName("script");for(var w in C)if(C[w].src==b)return C[w]}return null}},isActive:function(b,C,w){for(var P="no-"+C;b;){var I=b.classList;if(I.contains(C))return!0;if(I.contains(P))return!1;b=b.parentElement}return!!w}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(b,C){var w=s.util.clone(s.languages[b]);for(var P in C)w[P]=C[P];return w},insertBefore:function(b,C,w,P){P=P||s.languages;var I=P[b],N={};for(var R in I)if(I.hasOwnProperty(R)){if(R==C)for(var T in w)w.hasOwnProperty(T)&&(N[T]=w[T]);w.hasOwnProperty(R)||(N[R]=I[R])}var L=P[b];return P[b]=N,s.languages.DFS(s.languages,function(H,$){$===L&&H!=b&&(this[H]=N)}),N},DFS:function b(C,w,P,I){I=I||{};var N=s.util.objId;for(var R in C)if(C.hasOwnProperty(R)){w.call(C,R,C[R],P||R);var T=C[R],L=s.util.type(T);L==="Object"&&!I[N(T)]?(I[N(T)]=!0,b(T,w,null,I)):L==="Array"&&!I[N(T)]&&(I[N(T)]=!0,b(T,w,R,I))}}},plugins:{},highlightAll:function(b,C){s.highlightAllUnder(document,b,C)},highlightAllUnder:function(b,C,w){var P={callback:w,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",P),P.elements=Array.prototype.slice.apply(P.container.querySelectorAll(P.selector)),s.hooks.run("before-all-elements-highlight",P);for(var I=0,N;N=P.elements[I++];)s.highlightElement(N,C===!0,P.callback)},highlightElement:function(b,C,w){var P=s.util.getLanguage(b),I=s.languages[P];s.util.setLanguage(b,P);var N=b.parentElement;N&&N.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(N,P);var R=b.textContent,T={element:b,language:P,grammar:I,code:R};function L($){T.highlightedCode=$,s.hooks.run("before-insert",T),T.element.innerHTML=T.highlightedCode,s.hooks.run("after-highlight",T),s.hooks.run("complete",T),w&&w.call(T.element)}if(s.hooks.run("before-sanity-check",T),N=T.element.parentElement,N&&N.nodeName.toLowerCase()==="pre"&&!N.hasAttribute("tabindex")&&N.setAttribute("tabindex","0"),!T.code){s.hooks.run("complete",T),w&&w.call(T.element);return}if(s.hooks.run("before-highlight",T),!T.grammar){L(s.util.encode(T.code));return}if(C&&n.Worker){var H=new Worker(s.filename);H.onmessage=function($){L($.data)},H.postMessage(JSON.stringify({language:T.language,code:T.code,immediateClose:!0}))}else L(s.highlight(T.code,T.grammar,T.language))},highlight:function(b,C,w){var P={code:b,grammar:C,language:w};if(s.hooks.run("before-tokenize",P),!P.grammar)throw new Error('The language "'+P.language+'" has no grammar.');return P.tokens=s.tokenize(P.code,P.grammar),s.hooks.run("after-tokenize",P),u.stringify(s.util.encode(P.tokens),P.language)},tokenize:function(b,C){var w=C.rest;if(w){for(var P in w)C[P]=w[P];delete C.rest}var I=new y;return f(I,I.head,b),i(b,I,C,I.head,0),_(I)},hooks:{all:{},add:function(b,C){var w=s.hooks.all;w[b]=w[b]||[],w[b].push(C)},run:function(b,C){var w=s.hooks.all[b];if(!(!w||!w.length))for(var P=0,I;I=w[P++];)I(C)}},Token:u};n.Prism=s;function u(b,C,w,P){this.type=b,this.content=C,this.alias=w,this.length=(P||"").length|0}u.stringify=function b(C,w){if(typeof C=="string")return C;if(Array.isArray(C)){var P="";return C.forEach(function(L){P+=b(L,w)}),P}var I={type:C.type,content:b(C.content,w),tag:"span",classes:["token",C.type],attributes:{},language:w},N=C.alias;N&&(Array.isArray(N)?Array.prototype.push.apply(I.classes,N):I.classes.push(N)),s.hooks.run("wrap",I);var R="";for(var T in I.attributes)R+=" "+T+'="'+(I.attributes[T]||"").replace(/"/g,"&quot;")+'"';return"<"+I.tag+' class="'+I.classes.join(" ")+'"'+R+">"+I.content+"</"+I.tag+">"};function g(b,C,w,P){b.lastIndex=C;var I=b.exec(w);if(I&&P&&I[1]){var N=I[1].length;I.index+=N,I[0]=I[0].slice(N)}return I}function i(b,C,w,P,I,N){for(var R in w)if(!(!w.hasOwnProperty(R)||!w[R])){var T=w[R];T=Array.isArray(T)?T:[T];for(var L=0;L<T.length;++L){if(N&&N.cause==R+","+L)return;var H=T[L],$=H.inside,Y=!!H.lookbehind,O=!!H.greedy,U=H.alias;if(O&&!H.pattern.global){var M=H.pattern.toString().match(/[imsuy]*$/)[0];H.pattern=RegExp(H.pattern.source,M+"g")}for(var K=H.pattern||H,G=P.next,te=I;G!==C.tail&&!(N&&te>=N.reach);te+=G.value.length,G=G.next){var se=G.value;if(C.length>b.length)return;if(!(se instanceof u)){var pe=1,ee;if(O){if(ee=g(K,te,b,Y),!ee||ee.index>=b.length)break;var je=ee.index,he=ee.index+ee[0].length,be=te;for(be+=G.value.length;je>=be;)G=G.next,be+=G.value.length;if(be-=G.value.length,te=be,G.value instanceof u)continue;for(var Te=G;Te!==C.tail&&(be<he||typeof Te.value=="string");Te=Te.next)pe++,be+=Te.value.length;pe--,se=b.slice(te,be),ee.index-=te}else if(ee=g(K,0,se,Y),!ee)continue;var je=ee.index,ht=ee[0],gt=se.slice(0,je),_t=se.slice(je+ht.length),Dt=te+se.length;N&&Dt>N.reach&&(N.reach=Dt);var Be=G.prev;gt&&(Be=f(C,Be,gt),te+=gt.length),c(C,Be,pe);var St=new u(R,$?s.tokenize(ht,$):ht,U,ht);if(G=f(C,Be,St),_t&&f(C,G,_t),pe>1){var Me={cause:R+","+L,reach:Dt};i(b,C,w,G.prev,te,Me),N&&Me.reach>N.reach&&(N.reach=Me.reach)}}}}}}function y(){var b={value:null,prev:null,next:null},C={value:null,prev:b,next:null};b.next=C,this.head=b,this.tail=C,this.length=0}function f(b,C,w){var P=C.next,I={value:w,prev:C,next:P};return C.next=I,P.prev=I,b.length++,I}function c(b,C,w){for(var P=C.next,I=0;I<w&&P!==b.tail;I++)P=P.next;C.next=P,P.prev=C,b.length-=I}function _(b){for(var C=[],w=b.head.next;w!==b.tail;)C.push(w.value),w=w.next;return C}if(!n.document)return n.addEventListener&&(s.disableWorkerMessageHandler||n.addEventListener("message",function(b){var C=JSON.parse(b.data),w=C.language,P=C.code,I=C.immediateClose;n.postMessage(s.highlight(P,s.languages[w],w)),I&&n.close()},!1)),s;var m=s.util.currentScript();m&&(s.filename=m.src,m.hasAttribute("data-manual")&&(s.manual=!0));function A(){s.manual||s.highlightAll()}if(!s.manual){var S=document.readyState;S==="loading"||S==="interactive"&&m&&m.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return s}(h);x.exports&&(x.exports=r),typeof a.g!="undefined"&&(a.g.Prism=r),r.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(p,d){var l={};l["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[d]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};s["language-"+d]={pattern:/[\s\S]+/,inside:r.languages[d]};var u={};u[p]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return p}),"i"),lookbehind:!0,greedy:!0,inside:s},r.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(r.languages.markup.tag,"addAttribute",{value:function(n,p){r.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[p,"language-"+p],inside:r.languages[p]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(n){var p=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+p.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+p.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+p.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+p.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:p,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var d=n.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),r.languages.js=r.languages.javascript,function(){if(typeof r=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading\u2026",p=function(m,A){return"\u2716 Error "+m+" while fetching file: "+A},d="\u2716 Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",u="loading",g="loaded",i="failed",y="pre[data-src]:not(["+s+'="'+g+'"]):not(['+s+'="'+u+'"])';function f(m,A,S){var b=new XMLHttpRequest;b.open("GET",m,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?A(b.responseText):b.status>=400?S(p(b.status,b.statusText)):S(d))},b.send(null)}function c(m){var A=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(m||"");if(A){var S=Number(A[1]),b=A[2],C=A[3];return b?C?[S,Number(C)]:[S,void 0]:[S,S]}}r.hooks.add("before-highlightall",function(m){m.selector+=", "+y}),r.hooks.add("before-sanity-check",function(m){var A=m.element;if(A.matches(y)){m.code="",A.setAttribute(s,u);var S=A.appendChild(document.createElement("CODE"));S.textContent=n;var b=A.getAttribute("data-src"),C=m.language;if(C==="none"){var w=(/\.(\w+)$/.exec(b)||[,"none"])[1];C=l[w]||w}r.util.setLanguage(S,C),r.util.setLanguage(A,C);var P=r.plugins.autoloader;P&&P.loadLanguages(C),f(b,function(I){A.setAttribute(s,g);var N=c(A.getAttribute("data-range"));if(N){var R=I.split(/\r\n?|\n/g),T=N[0],L=N[1]==null?R.length:N[1];T<0&&(T+=R.length),T=Math.max(0,Math.min(T-1,R.length)),L<0&&(L+=R.length),L=Math.max(0,Math.min(L,R.length)),I=R.slice(T,L).join(`
`),A.hasAttribute("data-start")||A.setAttribute("data-start",String(T+1))}S.textContent=I,r.highlightElement(S)},function(I){A.setAttribute(s,i),S.textContent=I})}}),r.plugins.fileHighlight={highlight:function(A){for(var S=(A||document).querySelectorAll(y),b=0,C;C=S[b++];)r.highlightElement(C)}};var _=!1;r.fileHighlight=function(){_||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),_=!0),r.plugins.fileHighlight.highlight.apply(this,arguments)}}()},2257:(x,v,a)=>{const h=Symbol("SemVer ANY");class r{static get ANY(){return h}constructor(y,f){if(f=n(f),y instanceof r){if(y.loose===!!f.loose)return y;y=y.value}y=y.trim().split(/\s+/).join(" "),s("comparator",y,f),this.options=f,this.loose=!!f.loose,this.parse(y),this.semver===h?this.value="":this.value=this.operator+this.semver.version,s("comp",this)}parse(y){const f=this.options.loose?p[d.COMPARATORLOOSE]:p[d.COMPARATOR],c=y.match(f);if(!c)throw new TypeError(`Invalid comparator: ${y}`);this.operator=c[1]!==void 0?c[1]:"",this.operator==="="&&(this.operator=""),c[2]?this.semver=new u(c[2],this.options.loose):this.semver=h}toString(){return this.value}test(y){if(s("Comparator.test",y,this.options.loose),this.semver===h||y===h)return!0;if(typeof y=="string")try{y=new u(y,this.options)}catch(f){return!1}return l(y,this.operator,this.semver,this.options)}intersects(y,f){if(!(y instanceof r))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new g(y.value,f).test(this.value):y.operator===""?y.value===""?!0:new g(this.value,f).test(y.semver):(f=n(f),f.includePrerelease&&(this.value==="<0.0.0-0"||y.value==="<0.0.0-0")||!f.includePrerelease&&(this.value.startsWith("<0.0.0")||y.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&y.operator.startsWith(">")||this.operator.startsWith("<")&&y.operator.startsWith("<")||this.semver.version===y.semver.version&&this.operator.includes("=")&&y.operator.includes("=")||l(this.semver,"<",y.semver,f)&&this.operator.startsWith(">")&&y.operator.startsWith("<")||l(this.semver,">",y.semver,f)&&this.operator.startsWith("<")&&y.operator.startsWith(">")))}}x.exports=r;const n=a(2893),{safeRe:p,t:d}=a(5765),l=a(7539),s=a(4225),u=a(6376),g=a(6902)},6902:(x,v,a)=>{class h{constructor(U,M){if(M=p(M),U instanceof h)return U.loose===!!M.loose&&U.includePrerelease===!!M.includePrerelease?U:new h(U.raw,M);if(U instanceof d)return this.raw=U.value,this.set=[[U]],this.format(),this;if(this.options=M,this.loose=!!M.loose,this.includePrerelease=!!M.includePrerelease,this.raw=U.trim().split(/\s+/).join(" "),this.set=this.raw.split("||").map(K=>this.parseRange(K.trim())).filter(K=>K.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const K=this.set[0];if(this.set=this.set.filter(G=>!m(G[0])),this.set.length===0)this.set=[K];else if(this.set.length>1){for(const G of this.set)if(G.length===1&&A(G[0])){this.set=[G];break}}}this.format()}format(){return this.range=this.set.map(U=>U.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(U){const K=((this.options.includePrerelease&&c)|(this.options.loose&&_))+":"+U,G=n.get(K);if(G)return G;const te=this.options.loose,se=te?u[g.HYPHENRANGELOOSE]:u[g.HYPHENRANGE];U=U.replace(se,$(this.options.includePrerelease)),l("hyphen replace",U),U=U.replace(u[g.COMPARATORTRIM],i),l("comparator trim",U),U=U.replace(u[g.TILDETRIM],y),l("tilde trim",U),U=U.replace(u[g.CARETTRIM],f),l("caret trim",U);let pe=U.split(" ").map(Te=>b(Te,this.options)).join(" ").split(/\s+/).map(Te=>H(Te,this.options));te&&(pe=pe.filter(Te=>(l("loose invalid filter",Te,this.options),!!Te.match(u[g.COMPARATORLOOSE])))),l("range list",pe);const ee=new Map,he=pe.map(Te=>new d(Te,this.options));for(const Te of he){if(m(Te))return[Te];ee.set(Te.value,Te)}ee.size>1&&ee.has("")&&ee.delete("");const be=[...ee.values()];return n.set(K,be),be}intersects(U,M){if(!(U instanceof h))throw new TypeError("a Range is required");return this.set.some(K=>S(K,M)&&U.set.some(G=>S(G,M)&&K.every(te=>G.every(se=>te.intersects(se,M)))))}test(U){if(!U)return!1;if(typeof U=="string")try{U=new s(U,this.options)}catch(M){return!1}for(let M=0;M<this.set.length;M++)if(Y(this.set[M],U,this.options))return!0;return!1}}x.exports=h;const r=a(9593),n=new r({max:1e3}),p=a(2893),d=a(2257),l=a(4225),s=a(6376),{safeRe:u,t:g,comparatorTrimReplace:i,tildeTrimReplace:y,caretTrimReplace:f}=a(5765),{FLAG_INCLUDE_PRERELEASE:c,FLAG_LOOSE:_}=a(3295),m=O=>O.value==="<0.0.0-0",A=O=>O.value==="",S=(O,U)=>{let M=!0;const K=O.slice();let G=K.pop();for(;M&&K.length;)M=K.every(te=>G.intersects(te,U)),G=K.pop();return M},b=(O,U)=>(l("comp",O,U),O=I(O,U),l("caret",O),O=w(O,U),l("tildes",O),O=R(O,U),l("xrange",O),O=L(O,U),l("stars",O),O),C=O=>!O||O.toLowerCase()==="x"||O==="*",w=(O,U)=>O.trim().split(/\s+/).map(M=>P(M,U)).join(" "),P=(O,U)=>{const M=U.loose?u[g.TILDELOOSE]:u[g.TILDE];return O.replace(M,(K,G,te,se,pe)=>{l("tilde",O,K,G,te,se,pe);let ee;return C(G)?ee="":C(te)?ee=`>=${G}.0.0 <${+G+1}.0.0-0`:C(se)?ee=`>=${G}.${te}.0 <${G}.${+te+1}.0-0`:pe?(l("replaceTilde pr",pe),ee=`>=${G}.${te}.${se}-${pe} <${G}.${+te+1}.0-0`):ee=`>=${G}.${te}.${se} <${G}.${+te+1}.0-0`,l("tilde return",ee),ee})},I=(O,U)=>O.trim().split(/\s+/).map(M=>N(M,U)).join(" "),N=(O,U)=>{l("caret",O,U);const M=U.loose?u[g.CARETLOOSE]:u[g.CARET],K=U.includePrerelease?"-0":"";return O.replace(M,(G,te,se,pe,ee)=>{l("caret",O,G,te,se,pe,ee);let he;return C(te)?he="":C(se)?he=`>=${te}.0.0${K} <${+te+1}.0.0-0`:C(pe)?te==="0"?he=`>=${te}.${se}.0${K} <${te}.${+se+1}.0-0`:he=`>=${te}.${se}.0${K} <${+te+1}.0.0-0`:ee?(l("replaceCaret pr",ee),te==="0"?se==="0"?he=`>=${te}.${se}.${pe}-${ee} <${te}.${se}.${+pe+1}-0`:he=`>=${te}.${se}.${pe}-${ee} <${te}.${+se+1}.0-0`:he=`>=${te}.${se}.${pe}-${ee} <${+te+1}.0.0-0`):(l("no pr"),te==="0"?se==="0"?he=`>=${te}.${se}.${pe}${K} <${te}.${se}.${+pe+1}-0`:he=`>=${te}.${se}.${pe}${K} <${te}.${+se+1}.0-0`:he=`>=${te}.${se}.${pe} <${+te+1}.0.0-0`),l("caret return",he),he})},R=(O,U)=>(l("replaceXRanges",O,U),O.split(/\s+/).map(M=>T(M,U)).join(" ")),T=(O,U)=>{O=O.trim();const M=U.loose?u[g.XRANGELOOSE]:u[g.XRANGE];return O.replace(M,(K,G,te,se,pe,ee)=>{l("xRange",O,K,G,te,se,pe,ee);const he=C(te),be=he||C(se),Te=be||C(pe),je=Te;return G==="="&&je&&(G=""),ee=U.includePrerelease?"-0":"",he?G===">"||G==="<"?K="<0.0.0-0":K="*":G&&je?(be&&(se=0),pe=0,G===">"?(G=">=",be?(te=+te+1,se=0,pe=0):(se=+se+1,pe=0)):G==="<="&&(G="<",be?te=+te+1:se=+se+1),G==="<"&&(ee="-0"),K=`${G+te}.${se}.${pe}${ee}`):be?K=`>=${te}.0.0${ee} <${+te+1}.0.0-0`:Te&&(K=`>=${te}.${se}.0${ee} <${te}.${+se+1}.0-0`),l("xRange return",K),K})},L=(O,U)=>(l("replaceStars",O,U),O.trim().replace(u[g.STAR],"")),H=(O,U)=>(l("replaceGTE0",O,U),O.trim().replace(u[U.includePrerelease?g.GTE0PRE:g.GTE0],"")),$=O=>(U,M,K,G,te,se,pe,ee,he,be,Te,je,ht)=>(C(K)?M="":C(G)?M=`>=${K}.0.0${O?"-0":""}`:C(te)?M=`>=${K}.${G}.0${O?"-0":""}`:se?M=`>=${M}`:M=`>=${M}${O?"-0":""}`,C(he)?ee="":C(be)?ee=`<${+he+1}.0.0-0`:C(Te)?ee=`<${he}.${+be+1}.0-0`:je?ee=`<=${he}.${be}.${Te}-${je}`:O?ee=`<${he}.${be}.${+Te+1}-0`:ee=`<=${ee}`,`${M} ${ee}`.trim()),Y=(O,U,M)=>{for(let K=0;K<O.length;K++)if(!O[K].test(U))return!1;if(U.prerelease.length&&!M.includePrerelease){for(let K=0;K<O.length;K++)if(l(O[K].semver),O[K].semver!==d.ANY&&O[K].semver.prerelease.length>0){const G=O[K].semver;if(G.major===U.major&&G.minor===U.minor&&G.patch===U.patch)return!0}return!1}return!0}},6376:(x,v,a)=>{const h=a(4225),{MAX_LENGTH:r,MAX_SAFE_INTEGER:n}=a(3295),{safeRe:p,t:d}=a(5765),l=a(2893),{compareIdentifiers:s}=a(6742);class u{constructor(i,y){if(y=l(y),i instanceof u){if(i.loose===!!y.loose&&i.includePrerelease===!!y.includePrerelease)return i;i=i.version}else if(typeof i!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof i}".`);if(i.length>r)throw new TypeError(`version is longer than ${r} characters`);h("SemVer",i,y),this.options=y,this.loose=!!y.loose,this.includePrerelease=!!y.includePrerelease;const f=i.trim().match(y.loose?p[d.LOOSE]:p[d.FULL]);if(!f)throw new TypeError(`Invalid Version: ${i}`);if(this.raw=i,this.major=+f[1],this.minor=+f[2],this.patch=+f[3],this.major>n||this.major<0)throw new TypeError("Invalid major version");if(this.minor>n||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>n||this.patch<0)throw new TypeError("Invalid patch version");f[4]?this.prerelease=f[4].split(".").map(c=>{if(/^[0-9]+$/.test(c)){const _=+c;if(_>=0&&_<n)return _}return c}):this.prerelease=[],this.build=f[5]?f[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(i){if(h("SemVer.compare",this.version,this.options,i),!(i instanceof u)){if(typeof i=="string"&&i===this.version)return 0;i=new u(i,this.options)}return i.version===this.version?0:this.compareMain(i)||this.comparePre(i)}compareMain(i){return i instanceof u||(i=new u(i,this.options)),s(this.major,i.major)||s(this.minor,i.minor)||s(this.patch,i.patch)}comparePre(i){if(i instanceof u||(i=new u(i,this.options)),this.prerelease.length&&!i.prerelease.length)return-1;if(!this.prerelease.length&&i.prerelease.length)return 1;if(!this.prerelease.length&&!i.prerelease.length)return 0;let y=0;do{const f=this.prerelease[y],c=i.prerelease[y];if(h("prerelease compare",y,f,c),f===void 0&&c===void 0)return 0;if(c===void 0)return 1;if(f===void 0)return-1;if(f===c)continue;return s(f,c)}while(++y)}compareBuild(i){i instanceof u||(i=new u(i,this.options));let y=0;do{const f=this.build[y],c=i.build[y];if(h("prerelease compare",y,f,c),f===void 0&&c===void 0)return 0;if(c===void 0)return 1;if(f===void 0)return-1;if(f===c)continue;return s(f,c)}while(++y)}inc(i,y,f){switch(i){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",y,f);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",y,f);break;case"prepatch":this.prerelease.length=0,this.inc("patch",y,f),this.inc("pre",y,f);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",y,f),this.inc("pre",y,f);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const c=Number(f)?1:0;if(!y&&f===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[c];else{let _=this.prerelease.length;for(;--_>=0;)typeof this.prerelease[_]=="number"&&(this.prerelease[_]++,_=-2);if(_===-1){if(y===this.prerelease.join(".")&&f===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(c)}}if(y){let _=[y,c];f===!1&&(_=[y]),s(this.prerelease[0],y)===0?isNaN(this.prerelease[1])&&(this.prerelease=_):this.prerelease=_}break}default:throw new Error(`invalid increment argument: ${i}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}x.exports=u},3507:(x,v,a)=>{const h=a(3959),r=(n,p)=>{const d=h(n.trim().replace(/^[=v]+/,""),p);return d?d.version:null};x.exports=r},7539:(x,v,a)=>{const h=a(8718),r=a(1194),n=a(1312),p=a(5903),d=a(1544),l=a(2056),s=(u,g,i,y)=>{switch(g){case"===":return typeof u=="object"&&(u=u.version),typeof i=="object"&&(i=i.version),u===i;case"!==":return typeof u=="object"&&(u=u.version),typeof i=="object"&&(i=i.version),u!==i;case"":case"=":case"==":return h(u,i,y);case"!=":return r(u,i,y);case">":return n(u,i,y);case">=":return p(u,i,y);case"<":return d(u,i,y);case"<=":return l(u,i,y);default:throw new TypeError(`Invalid operator: ${g}`)}};x.exports=s},9038:(x,v,a)=>{const h=a(6376),r=a(3959),{safeRe:n,t:p}=a(5765),d=(l,s)=>{if(l instanceof h)return l;if(typeof l=="number"&&(l=String(l)),typeof l!="string")return null;s=s||{};let u=null;if(!s.rtl)u=l.match(n[p.COERCE]);else{let g;for(;(g=n[p.COERCERTL].exec(l))&&(!u||u.index+u[0].length!==l.length);)(!u||g.index+g[0].length!==u.index+u[0].length)&&(u=g),n[p.COERCERTL].lastIndex=g.index+g[1].length+g[2].length;n[p.COERCERTL].lastIndex=-1}return u===null?null:r(`${u[2]}.${u[3]||"0"}.${u[4]||"0"}`,s)};x.exports=d},8880:(x,v,a)=>{const h=a(6376),r=(n,p,d)=>{const l=new h(n,d),s=new h(p,d);return l.compare(s)||l.compareBuild(s)};x.exports=r},7880:(x,v,a)=>{const h=a(6269),r=(n,p)=>h(n,p,!0);x.exports=r},6269:(x,v,a)=>{const h=a(6376),r=(n,p,d)=>new h(n,d).compare(new h(p,d));x.exports=r},2378:(x,v,a)=>{const h=a(3959),r=(n,p)=>{const d=h(n,null,!0),l=h(p,null,!0),s=d.compare(l);if(s===0)return null;const u=s>0,g=u?d:l,i=u?l:d,y=!!g.prerelease.length;if(!!i.prerelease.length&&!y)return!i.patch&&!i.minor?"major":g.patch?"patch":g.minor?"minor":"major";const c=y?"pre":"";return d.major!==l.major?c+"major":d.minor!==l.minor?c+"minor":d.patch!==l.patch?c+"patch":"prerelease"};x.exports=r},8718:(x,v,a)=>{const h=a(6269),r=(n,p,d)=>h(n,p,d)===0;x.exports=r},1312:(x,v,a)=>{const h=a(6269),r=(n,p,d)=>h(n,p,d)>0;x.exports=r},5903:(x,v,a)=>{const h=a(6269),r=(n,p,d)=>h(n,p,d)>=0;x.exports=r},253:(x,v,a)=>{const h=a(6376),r=(n,p,d,l,s)=>{typeof d=="string"&&(s=l,l=d,d=void 0);try{return new h(n instanceof h?n.version:n,d).inc(p,l,s).version}catch(u){return null}};x.exports=r},1544:(x,v,a)=>{const h=a(6269),r=(n,p,d)=>h(n,p,d)<0;x.exports=r},2056:(x,v,a)=>{const h=a(6269),r=(n,p,d)=>h(n,p,d)<=0;x.exports=r},8679:(x,v,a)=>{const h=a(6376),r=(n,p)=>new h(n,p).major;x.exports=r},7789:(x,v,a)=>{const h=a(6376),r=(n,p)=>new h(n,p).minor;x.exports=r},1194:(x,v,a)=>{const h=a(6269),r=(n,p,d)=>h(n,p,d)!==0;x.exports=r},3959:(x,v,a)=>{const h=a(6376),r=(n,p,d=!1)=>{if(n instanceof h)return n;try{return new h(n,p)}catch(l){if(!d)return null;throw l}};x.exports=r},2358:(x,v,a)=>{const h=a(6376),r=(n,p)=>new h(n,p).patch;x.exports=r},7559:(x,v,a)=>{const h=a(3959),r=(n,p)=>{const d=h(n,p);return d&&d.prerelease.length?d.prerelease:null};x.exports=r},9795:(x,v,a)=>{const h=a(6269),r=(n,p,d)=>h(p,n,d);x.exports=r},3657:(x,v,a)=>{const h=a(8880),r=(n,p)=>n.sort((d,l)=>h(l,d,p));x.exports=r},5712:(x,v,a)=>{const h=a(6902),r=(n,p,d)=>{try{p=new h(p,d)}catch(l){return!1}return p.test(n)};x.exports=r},1100:(x,v,a)=>{const h=a(8880),r=(n,p)=>n.sort((d,l)=>h(d,l,p));x.exports=r},6397:(x,v,a)=>{const h=a(3959),r=(n,p)=>{const d=h(n,p);return d?d.version:null};x.exports=r},1249:(x,v,a)=>{const h=a(5765),r=a(3295),n=a(6376),p=a(6742),d=a(3959),l=a(6397),s=a(3507),u=a(253),g=a(2378),i=a(8679),y=a(7789),f=a(2358),c=a(7559),_=a(6269),m=a(9795),A=a(7880),S=a(8880),b=a(1100),C=a(3657),w=a(1312),P=a(1544),I=a(8718),N=a(1194),R=a(5903),T=a(2056),L=a(7539),H=a(9038),$=a(2257),Y=a(6902),O=a(5712),U=a(1042),M=a(5775),K=a(1657),G=a(5316),te=a(9042),se=a(6826),pe=a(7606),ee=a(32),he=a(2937),be=a(7908),Te=a(799);x.exports={parse:d,valid:l,clean:s,inc:u,diff:g,major:i,minor:y,patch:f,prerelease:c,compare:_,rcompare:m,compareLoose:A,compareBuild:S,sort:b,rsort:C,gt:w,lt:P,eq:I,neq:N,gte:R,lte:T,cmp:L,coerce:H,Comparator:$,Range:Y,satisfies:O,toComparators:U,maxSatisfying:M,minSatisfying:K,minVersion:G,validRange:te,outside:se,gtr:pe,ltr:ee,intersects:he,simplifyRange:be,subset:Te,SemVer:n,re:h.re,src:h.src,tokens:h.t,SEMVER_SPEC_VERSION:r.SEMVER_SPEC_VERSION,RELEASE_TYPES:r.RELEASE_TYPES,compareIdentifiers:p.compareIdentifiers,rcompareIdentifiers:p.rcompareIdentifiers}},3295:x=>{const v="2.0.0",h=Number.MAX_SAFE_INTEGER||9007199254740991,r=16,n=256-6,p=["major","premajor","minor","preminor","patch","prepatch","prerelease"];x.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:n,MAX_SAFE_INTEGER:h,RELEASE_TYPES:p,SEMVER_SPEC_VERSION:v,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},4225:x=>{const v=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...a)=>console.error("SEMVER",...a):()=>{};x.exports=v},6742:x=>{const v=/^[0-9]+$/,a=(r,n)=>{const p=v.test(r),d=v.test(n);return p&&d&&(r=+r,n=+n),r===n?0:p&&!d?-1:d&&!p?1:r<n?-1:1},h=(r,n)=>a(n,r);x.exports={compareIdentifiers:a,rcompareIdentifiers:h}},2893:x=>{const v=Object.freeze({loose:!0}),a=Object.freeze({}),h=r=>r?typeof r!="object"?v:r:a;x.exports=h},5765:(x,v,a)=>{const{MAX_SAFE_COMPONENT_LENGTH:h,MAX_SAFE_BUILD_LENGTH:r,MAX_LENGTH:n}=a(3295),p=a(4225);v=x.exports={};const d=v.re=[],l=v.safeRe=[],s=v.src=[],u=v.t={};let g=0;const i="[a-zA-Z0-9-]",y=[["\\s",1],["\\d",n],[i,r]],f=_=>{for(const[m,A]of y)_=_.split(`${m}*`).join(`${m}{0,${A}}`).split(`${m}+`).join(`${m}{1,${A}}`);return _},c=(_,m,A)=>{const S=f(m),b=g++;p(_,b,m),u[_]=b,s[b]=m,d[b]=new RegExp(m,A?"g":void 0),l[b]=new RegExp(S,A?"g":void 0)};c("NUMERICIDENTIFIER","0|[1-9]\\d*"),c("NUMERICIDENTIFIERLOOSE","\\d+"),c("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${i}*`),c("MAINVERSION",`(${s[u.NUMERICIDENTIFIER]})\\.(${s[u.NUMERICIDENTIFIER]})\\.(${s[u.NUMERICIDENTIFIER]})`),c("MAINVERSIONLOOSE",`(${s[u.NUMERICIDENTIFIERLOOSE]})\\.(${s[u.NUMERICIDENTIFIERLOOSE]})\\.(${s[u.NUMERICIDENTIFIERLOOSE]})`),c("PRERELEASEIDENTIFIER",`(?:${s[u.NUMERICIDENTIFIER]}|${s[u.NONNUMERICIDENTIFIER]})`),c("PRERELEASEIDENTIFIERLOOSE",`(?:${s[u.NUMERICIDENTIFIERLOOSE]}|${s[u.NONNUMERICIDENTIFIER]})`),c("PRERELEASE",`(?:-(${s[u.PRERELEASEIDENTIFIER]}(?:\\.${s[u.PRERELEASEIDENTIFIER]})*))`),c("PRERELEASELOOSE",`(?:-?(${s[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[u.PRERELEASEIDENTIFIERLOOSE]})*))`),c("BUILDIDENTIFIER",`${i}+`),c("BUILD",`(?:\\+(${s[u.BUILDIDENTIFIER]}(?:\\.${s[u.BUILDIDENTIFIER]})*))`),c("FULLPLAIN",`v?${s[u.MAINVERSION]}${s[u.PRERELEASE]}?${s[u.BUILD]}?`),c("FULL",`^${s[u.FULLPLAIN]}$`),c("LOOSEPLAIN",`[v=\\s]*${s[u.MAINVERSIONLOOSE]}${s[u.PRERELEASELOOSE]}?${s[u.BUILD]}?`),c("LOOSE",`^${s[u.LOOSEPLAIN]}$`),c("GTLT","((?:<|>)?=?)"),c("XRANGEIDENTIFIERLOOSE",`${s[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),c("XRANGEIDENTIFIER",`${s[u.NUMERICIDENTIFIER]}|x|X|\\*`),c("XRANGEPLAIN",`[v=\\s]*(${s[u.XRANGEIDENTIFIER]})(?:\\.(${s[u.XRANGEIDENTIFIER]})(?:\\.(${s[u.XRANGEIDENTIFIER]})(?:${s[u.PRERELEASE]})?${s[u.BUILD]}?)?)?`),c("XRANGEPLAINLOOSE",`[v=\\s]*(${s[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[u.XRANGEIDENTIFIERLOOSE]})(?:${s[u.PRERELEASELOOSE]})?${s[u.BUILD]}?)?)?`),c("XRANGE",`^${s[u.GTLT]}\\s*${s[u.XRANGEPLAIN]}$`),c("XRANGELOOSE",`^${s[u.GTLT]}\\s*${s[u.XRANGEPLAINLOOSE]}$`),c("COERCE",`(^|[^\\d])(\\d{1,${h}})(?:\\.(\\d{1,${h}}))?(?:\\.(\\d{1,${h}}))?(?:$|[^\\d])`),c("COERCERTL",s[u.COERCE],!0),c("LONETILDE","(?:~>?)"),c("TILDETRIM",`(\\s*)${s[u.LONETILDE]}\\s+`,!0),v.tildeTrimReplace="$1~",c("TILDE",`^${s[u.LONETILDE]}${s[u.XRANGEPLAIN]}$`),c("TILDELOOSE",`^${s[u.LONETILDE]}${s[u.XRANGEPLAINLOOSE]}$`),c("LONECARET","(?:\\^)"),c("CARETTRIM",`(\\s*)${s[u.LONECARET]}\\s+`,!0),v.caretTrimReplace="$1^",c("CARET",`^${s[u.LONECARET]}${s[u.XRANGEPLAIN]}$`),c("CARETLOOSE",`^${s[u.LONECARET]}${s[u.XRANGEPLAINLOOSE]}$`),c("COMPARATORLOOSE",`^${s[u.GTLT]}\\s*(${s[u.LOOSEPLAIN]})$|^$`),c("COMPARATOR",`^${s[u.GTLT]}\\s*(${s[u.FULLPLAIN]})$|^$`),c("COMPARATORTRIM",`(\\s*)${s[u.GTLT]}\\s*(${s[u.LOOSEPLAIN]}|${s[u.XRANGEPLAIN]})`,!0),v.comparatorTrimReplace="$1$2$3",c("HYPHENRANGE",`^\\s*(${s[u.XRANGEPLAIN]})\\s+-\\s+(${s[u.XRANGEPLAIN]})\\s*$`),c("HYPHENRANGELOOSE",`^\\s*(${s[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[u.XRANGEPLAINLOOSE]})\\s*$`),c("STAR","(<|>)?=?\\s*\\*"),c("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),c("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},7606:(x,v,a)=>{const h=a(6826),r=(n,p,d)=>h(n,p,">",d);x.exports=r},2937:(x,v,a)=>{const h=a(6902),r=(n,p,d)=>(n=new h(n,d),p=new h(p,d),n.intersects(p,d));x.exports=r},32:(x,v,a)=>{const h=a(6826),r=(n,p,d)=>h(n,p,"<",d);x.exports=r},5775:(x,v,a)=>{const h=a(6376),r=a(6902),n=(p,d,l)=>{let s=null,u=null,g=null;try{g=new r(d,l)}catch(i){return null}return p.forEach(i=>{g.test(i)&&(!s||u.compare(i)===-1)&&(s=i,u=new h(s,l))}),s};x.exports=n},1657:(x,v,a)=>{const h=a(6376),r=a(6902),n=(p,d,l)=>{let s=null,u=null,g=null;try{g=new r(d,l)}catch(i){return null}return p.forEach(i=>{g.test(i)&&(!s||u.compare(i)===1)&&(s=i,u=new h(s,l))}),s};x.exports=n},5316:(x,v,a)=>{const h=a(6376),r=a(6902),n=a(1312),p=(d,l)=>{d=new r(d,l);let s=new h("0.0.0");if(d.test(s)||(s=new h("0.0.0-0"),d.test(s)))return s;s=null;for(let u=0;u<d.set.length;++u){const g=d.set[u];let i=null;g.forEach(y=>{const f=new h(y.semver.version);switch(y.operator){case">":f.prerelease.length===0?f.patch++:f.prerelease.push(0),f.raw=f.format();case"":case">=":(!i||n(f,i))&&(i=f);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${y.operator}`)}}),i&&(!s||n(s,i))&&(s=i)}return s&&d.test(s)?s:null};x.exports=p},6826:(x,v,a)=>{const h=a(6376),r=a(2257),{ANY:n}=r,p=a(6902),d=a(5712),l=a(1312),s=a(1544),u=a(2056),g=a(5903),i=(y,f,c,_)=>{y=new h(y,_),f=new p(f,_);let m,A,S,b,C;switch(c){case">":m=l,A=u,S=s,b=">",C=">=";break;case"<":m=s,A=g,S=l,b="<",C="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(d(y,f,_))return!1;for(let w=0;w<f.set.length;++w){const P=f.set[w];let I=null,N=null;if(P.forEach(R=>{R.semver===n&&(R=new r(">=0.0.0")),I=I||R,N=N||R,m(R.semver,I.semver,_)?I=R:S(R.semver,N.semver,_)&&(N=R)}),I.operator===b||I.operator===C||(!N.operator||N.operator===b)&&A(y,N.semver))return!1;if(N.operator===C&&S(y,N.semver))return!1}return!0};x.exports=i},7908:(x,v,a)=>{const h=a(5712),r=a(6269);x.exports=(n,p,d)=>{const l=[];let s=null,u=null;const g=n.sort((c,_)=>r(c,_,d));for(const c of g)h(c,p,d)?(u=c,s||(s=c)):(u&&l.push([s,u]),u=null,s=null);s&&l.push([s,null]);const i=[];for(const[c,_]of l)c===_?i.push(c):!_&&c===g[0]?i.push("*"):_?c===g[0]?i.push(`<=${_}`):i.push(`${c} - ${_}`):i.push(`>=${c}`);const y=i.join(" || "),f=typeof p.raw=="string"?p.raw:String(p);return y.length<f.length?y:p}},799:(x,v,a)=>{const h=a(6902),r=a(2257),{ANY:n}=r,p=a(5712),d=a(6269),l=(f,c,_={})=>{if(f===c)return!0;f=new h(f,_),c=new h(c,_);let m=!1;e:for(const A of f.set){for(const S of c.set){const b=g(A,S,_);if(m=m||b!==null,b)continue e}if(m)return!1}return!0},s=[new r(">=0.0.0-0")],u=[new r(">=0.0.0")],g=(f,c,_)=>{if(f===c)return!0;if(f.length===1&&f[0].semver===n){if(c.length===1&&c[0].semver===n)return!0;_.includePrerelease?f=s:f=u}if(c.length===1&&c[0].semver===n){if(_.includePrerelease)return!0;c=u}const m=new Set;let A,S;for(const T of f)T.operator===">"||T.operator===">="?A=i(A,T,_):T.operator==="<"||T.operator==="<="?S=y(S,T,_):m.add(T.semver);if(m.size>1)return null;let b;if(A&&S){if(b=d(A.semver,S.semver,_),b>0)return null;if(b===0&&(A.operator!==">="||S.operator!=="<="))return null}for(const T of m){if(A&&!p(T,String(A),_)||S&&!p(T,String(S),_))return null;for(const L of c)if(!p(T,String(L),_))return!1;return!0}let C,w,P,I,N=S&&!_.includePrerelease&&S.semver.prerelease.length?S.semver:!1,R=A&&!_.includePrerelease&&A.semver.prerelease.length?A.semver:!1;N&&N.prerelease.length===1&&S.operator==="<"&&N.prerelease[0]===0&&(N=!1);for(const T of c){if(I=I||T.operator===">"||T.operator===">=",P=P||T.operator==="<"||T.operator==="<=",A){if(R&&T.semver.prerelease&&T.semver.prerelease.length&&T.semver.major===R.major&&T.semver.minor===R.minor&&T.semver.patch===R.patch&&(R=!1),T.operator===">"||T.operator===">="){if(C=i(A,T,_),C===T&&C!==A)return!1}else if(A.operator===">="&&!p(A.semver,String(T),_))return!1}if(S){if(N&&T.semver.prerelease&&T.semver.prerelease.length&&T.semver.major===N.major&&T.semver.minor===N.minor&&T.semver.patch===N.patch&&(N=!1),T.operator==="<"||T.operator==="<="){if(w=y(S,T,_),w===T&&w!==S)return!1}else if(S.operator==="<="&&!p(S.semver,String(T),_))return!1}if(!T.operator&&(S||A)&&b!==0)return!1}return!(A&&P&&!S&&b!==0||S&&I&&!A&&b!==0||R||N)},i=(f,c,_)=>{if(!f)return c;const m=d(f.semver,c.semver,_);return m>0?f:m<0||c.operator===">"&&f.operator===">="?c:f},y=(f,c,_)=>{if(!f)return c;const m=d(f.semver,c.semver,_);return m<0?f:m>0||c.operator==="<"&&f.operator==="<="?c:f};x.exports=l},1042:(x,v,a)=>{const h=a(6902),r=(n,p)=>new h(n,p).set.map(d=>d.map(l=>l.value).join(" ").trim().split(" "));x.exports=r},9042:(x,v,a)=>{const h=a(6902),r=(n,p)=>{try{return new h(n,p).range||"*"}catch(d){return null}};x.exports=r},9602:x=>{"use strict";x.exports=function(v){v.prototype[Symbol.iterator]=function*(){for(let a=this.head;a;a=a.next)yield a.value}}},4411:(x,v,a)=>{"use strict";x.exports=h,h.Node=d,h.create=h;function h(l){var s=this;if(s instanceof h||(s=new h),s.tail=null,s.head=null,s.length=0,l&&typeof l.forEach=="function")l.forEach(function(i){s.push(i)});else if(arguments.length>0)for(var u=0,g=arguments.length;u<g;u++)s.push(arguments[u]);return s}h.prototype.removeNode=function(l){if(l.list!==this)throw new Error("removing node which does not belong to this list");var s=l.next,u=l.prev;return s&&(s.prev=u),u&&(u.next=s),l===this.head&&(this.head=s),l===this.tail&&(this.tail=u),l.list.length--,l.next=null,l.prev=null,l.list=null,s},h.prototype.unshiftNode=function(l){if(l!==this.head){l.list&&l.list.removeNode(l);var s=this.head;l.list=this,l.next=s,s&&(s.prev=l),this.head=l,this.tail||(this.tail=l),this.length++}},h.prototype.pushNode=function(l){if(l!==this.tail){l.list&&l.list.removeNode(l);var s=this.tail;l.list=this,l.prev=s,s&&(s.next=l),this.tail=l,this.head||(this.head=l),this.length++}},h.prototype.push=function(){for(var l=0,s=arguments.length;l<s;l++)n(this,arguments[l]);return this.length},h.prototype.unshift=function(){for(var l=0,s=arguments.length;l<s;l++)p(this,arguments[l]);return this.length},h.prototype.pop=function(){if(this.tail){var l=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,l}},h.prototype.shift=function(){if(this.head){var l=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,l}},h.prototype.forEach=function(l,s){s=s||this;for(var u=this.head,g=0;u!==null;g++)l.call(s,u.value,g,this),u=u.next},h.prototype.forEachReverse=function(l,s){s=s||this;for(var u=this.tail,g=this.length-1;u!==null;g--)l.call(s,u.value,g,this),u=u.prev},h.prototype.get=function(l){for(var s=0,u=this.head;u!==null&&s<l;s++)u=u.next;if(s===l&&u!==null)return u.value},h.prototype.getReverse=function(l){for(var s=0,u=this.tail;u!==null&&s<l;s++)u=u.prev;if(s===l&&u!==null)return u.value},h.prototype.map=function(l,s){s=s||this;for(var u=new h,g=this.head;g!==null;)u.push(l.call(s,g.value,this)),g=g.next;return u},h.prototype.mapReverse=function(l,s){s=s||this;for(var u=new h,g=this.tail;g!==null;)u.push(l.call(s,g.value,this)),g=g.prev;return u},h.prototype.reduce=function(l,s){var u,g=this.head;if(arguments.length>1)u=s;else if(this.head)g=this.head.next,u=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=0;g!==null;i++)u=l(u,g.value,i),g=g.next;return u},h.prototype.reduceReverse=function(l,s){var u,g=this.tail;if(arguments.length>1)u=s;else if(this.tail)g=this.tail.prev,u=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(var i=this.length-1;g!==null;i--)u=l(u,g.value,i),g=g.prev;return u},h.prototype.toArray=function(){for(var l=new Array(this.length),s=0,u=this.head;u!==null;s++)l[s]=u.value,u=u.next;return l},h.prototype.toArrayReverse=function(){for(var l=new Array(this.length),s=0,u=this.tail;u!==null;s++)l[s]=u.value,u=u.prev;return l},h.prototype.slice=function(l,s){s=s||this.length,s<0&&(s+=this.length),l=l||0,l<0&&(l+=this.length);var u=new h;if(s<l||s<0)return u;l<0&&(l=0),s>this.length&&(s=this.length);for(var g=0,i=this.head;i!==null&&g<l;g++)i=i.next;for(;i!==null&&g<s;g++,i=i.next)u.push(i.value);return u},h.prototype.sliceReverse=function(l,s){s=s||this.length,s<0&&(s+=this.length),l=l||0,l<0&&(l+=this.length);var u=new h;if(s<l||s<0)return u;l<0&&(l=0),s>this.length&&(s=this.length);for(var g=this.length,i=this.tail;i!==null&&g>s;g--)i=i.prev;for(;i!==null&&g>l;g--,i=i.prev)u.push(i.value);return u},h.prototype.splice=function(l,s,...u){l>this.length&&(l=this.length-1),l<0&&(l=this.length+l);for(var g=0,i=this.head;i!==null&&g<l;g++)i=i.next;for(var y=[],g=0;i&&g<s;g++)y.push(i.value),i=this.removeNode(i);i===null&&(i=this.tail),i!==this.head&&i!==this.tail&&(i=i.prev);for(var g=0;g<u.length;g++)i=r(this,i,u[g]);return y},h.prototype.reverse=function(){for(var l=this.head,s=this.tail,u=l;u!==null;u=u.prev){var g=u.prev;u.prev=u.next,u.next=g}return this.head=s,this.tail=l,this};function r(l,s,u){var g=s===l.head?new d(u,null,s,l):new d(u,s,s.next,l);return g.next===null&&(l.tail=g),g.prev===null&&(l.head=g),l.length++,g}function n(l,s){l.tail=new d(s,l.tail,null,l),l.head||(l.head=l.tail),l.length++}function p(l,s){l.head=new d(s,null,l.head,l),l.tail||(l.tail=l.head),l.length++}function d(l,s,u,g){if(!(this instanceof d))return new d(l,s,u,g);this.list=g,this.value=l,s?(s.next=this,this.prev=s):this.prev=null,u?(u.prev=this,this.next=u):this.next=null}try{a(9602)(h)}catch(l){}}},xs={};function et(x){var v=xs[x];if(v!==void 0)return v.exports;var a=xs[x]={id:x,loaded:!1,exports:{}};return qo[x].call(a.exports,a,a.exports,et),a.loaded=!0,a.exports}et.n=x=>{var v=x&&x.__esModule?()=>x.default:()=>x;return et.d(v,{a:v}),v},et.d=(x,v)=>{for(var a in v)et.o(v,a)&&!et.o(x,a)&&Object.defineProperty(x,a,{enumerable:!0,get:v[a]})},et.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(x){if(typeof window=="object")return window}}(),et.o=(x,v)=>Object.prototype.hasOwnProperty.call(x,v),et.nmd=x=>(x.paths=[],x.children||(x.children=[]),x);var ag={};(()=>{var ft;"use strict";var x=et(4002),v=et.n(x),a=et(6486),h=et(1249),r=et.n(h),n=et(177),p=et.n(n),d=et(9737),l=et(6278),s=et(6927),u=et(3497),g=et(7814),i=et(5660),y=et.n(i),f=et(7874),c=et(728),_=et(4277),m=et(57),A=et(366),S=et(5206),b=et(6263),C=et(6866);class w{hydrate(de,Pe){const xe=new URL(de,typeof window=="undefined"?"https://dummy.base":window.location.origin),re={};xe.pathname.split("/").forEach((_e,ye)=>{if(_e.charAt(0)===":"){const ve=_e.slice(1);typeof Pe[ve]!="undefined"&&(xe.pathname=xe.pathname.replace(_e,encodeURIComponent(Pe[ve])),re[ve]=Pe[ve])}});for(const _e in Pe)(typeof re[_e]=="undefined"||xe.searchParams.has(_e))&&xe.searchParams.set(_e,Pe[_e]);return xe.toString()}}function P(){v()(".sample-request-send").off("click"),v()(".sample-request-send").on("click",function(Le){Le.preventDefault();const de=v()(this).parents("article"),Pe=de.data("group"),xe=de.data("name"),re=de.data("version");T(Pe,xe,re,v()(this).data("type"))}),v()(".sample-request-clear").off("click"),v()(".sample-request-clear").on("click",function(Le){Le.preventDefault();const de=v()(this).parents("article"),Pe=de.data("group"),xe=de.data("name"),re=de.data("version");L(Pe,xe,re)})}function I(Le){return Le.replace(/{(.+?)}/g,":$1")}function N(Le,de){const Pe=Le.find(".sample-request-url").val(),xe=new w,re=I(Pe);return xe.hydrate(re,de)}function R(Le){const de={};["header","query","body"].forEach(xe=>{const re={};try{Le.find(v()(`[data-family="${xe}"]:visible`)).each((_e,ye)=>{const ve=ye.dataset.name;let Ne=ye.value;if(ye.type==="checkbox")if(ye.checked)Ne="on";else return!0;if(!Ne&&!ye.dataset.optional&&ye.type!=="checkbox")return v()(ye).addClass("border-danger"),!0;re[ve]=Ne})}catch(_e){return}de[xe]=re});const Pe=Le.find(v()('[data-family="body-json"]'));return Pe.is(":visible")?(de.body=Pe.val(),de.header["Content-Type"]="application/json"):de.header["Content-Type"]="multipart/form-data",de}function T(Le,de,Pe,xe){const re=v()(`article[data-group="${Le}"][data-name="${de}"][data-version="${Pe}"]`),_e=R(re),ye={};if(ye.url=N(re,_e.query),ye.headers=_e.header,ye.headers["Content-Type"]==="application/json")ye.data=_e.body;else if(ye.headers["Content-Type"]==="multipart/form-data"){const we=new FormData;for(const[He,$e]of Object.entries(_e.body))we.append(He,$e);ye.data=we,ye.processData=!1,delete ye.headers["Content-Type"],ye.contentType=!1}ye.type=xe,ye.success=ve,ye.error=Ne,v().ajax(ye),re.find(".sample-request-response").fadeTo(200,1),re.find(".sample-request-response-json").html("Loading...");function ve(we,He,$e){let Ge;try{Ge=JSON.parse($e.responseText),Ge=JSON.stringify(Ge,null,4)}catch(ut){Ge=$e.responseText}re.find(".sample-request-response-json").text(Ge),y().highlightAll()}function Ne(we,He,$e){let Ge="Error "+we.status+": "+$e,ut;try{ut=JSON.parse(we.responseText),ut=JSON.stringify(ut,null,4)}catch(pt){ut=we.responseText}ut&&(Ge+=`
`+ut),re.find(".sample-request-response").is(":visible")&&re.find(".sample-request-response").fadeTo(1,.1),re.find(".sample-request-response").fadeTo(250,1),re.find(".sample-request-response-json").text(Ge),y().highlightAll()}}function L(Le,de,Pe){const xe=v()('article[data-group="'+Le+'"][data-name="'+de+'"][data-version="'+Pe+'"]');xe.find(".sample-request-response-json").html(""),xe.find(".sample-request-response").hide(),xe.find(".sample-request-input").each((_e,ye)=>{ye.value=ye.placeholder!==ye.dataset.name?ye.placeholder:""});const re=xe.find(".sample-request-url");re.val(re.prop("defaultValue"))}const H={"Allowed values:":"Valors permesos:","Compare all with predecessor":"Comparar tot amb versi\xF3 anterior","compare changes to:":"comparar canvis amb:","compared to":"comparat amb","Default value:":"Valor per defecte:",Description:"Descripci\xF3",Field:"Camp",General:"General","Generated with":"Generat amb",Name:"Nom","No response values.":"Sense valors en la resposta.",optional:"opcional",Parameter:"Par\xE0metre","Permission:":"Permisos:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3 d'exemple","show up to version:":"mostrar versi\xF3:","Size range:":"Tamany de rang:","Toggle navigation":"Canvia la navegaci\xF3",Type:"Tipus",url:"url",Copy:"Copiar","Press Ctrl+C to copy":"Premeu Ctrl+C per copiar","copied!":"Copiat!"},$={"Allowed values:":"Povolen\xE9 hodnoty:","Compare all with predecessor":"Porovnat v\u0161e s p\u0159edchoz\xEDmi verzemi","compare changes to:":"porovnat zm\u011Bny s:","compared to":"porovnat s","Default value:":"V\xFDchoz\xED hodnota:",Description:"Popis",Field:"Pole",General:"Obecn\xE9","Generated with":"Vygenerov\xE1no pomoc\xED",Name:"N\xE1zev","No response values.":"Nebyly vr\xE1ceny \u017E\xE1dn\xE9 hodnoty.",optional:"voliteln\xE9",Parameter:"Parametr","Permission:":"Opr\xE1vn\u011Bn\xED:",Response:"Odpov\u011B\u010F",Send:"Odeslat","Send a Sample Request":"Odeslat uk\xE1zkov\xFD po\u017Eadavek","show up to version:":"zobrazit po verzi:","Size range:":"Rozsah velikosti:","Toggle navigation":"P\u0159epnout navigaci",Type:"Typ",url:"url",Copy:"Kop\xEDrovat","Press Ctrl+C to copy":"Stisknut\xEDm kombinace kl\xE1ves Ctrl+C zkop\xEDrujte","copied!":"Zkop\xEDrovan\xFD!"},Y={"Allowed values:":"Erlaubte Werte:","Compare all with predecessor":"Vergleiche alle mit ihren Vorg\xE4ngern","compare changes to:":"vergleiche \xC4nderungen mit:","compared to":"verglichen mit","Default value:":"Standardwert:",Description:"Beschreibung",Field:"Feld",General:"Allgemein","Generated with":"Erstellt mit",Name:"Name","No response values.":"Keine R\xFCckgabewerte.",optional:"optional",Parameter:"Parameter","Permission:":"Berechtigung:",Response:"Antwort",Send:"Senden","Send a Sample Request":"Eine Beispielanfrage senden","show up to version:":"zeige bis zur Version:","Size range:":"Gr\xF6\xDFenbereich:","Toggle navigation":"Navigation ein-/ausblenden",Type:"Typ",url:"url",Copy:"Kopieren","Press Ctrl+C to copy":"Dr\xFCcken Sie Ctrl+C zum kopieren","Copied!":"Kopiert!"},O={"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Comparar todo con versi\xF3n anterior","compare changes to:":"comparar cambios con:","compared to":"comparado con","Default value:":"Valor por defecto:",Description:"Descripci\xF3n",Field:"Campo",General:"General","Generated with":"Generado con",Name:"Nombre","No response values.":"Sin valores en la respuesta.",optional:"opcional",Parameter:"Par\xE1metro","Permission:":"Permisos:",Response:"Respuesta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3n de ejemplo","show up to version:":"mostrar a versi\xF3n:","Size range:":"Tama\xF1o de rango:","Toggle navigation":"Alternar navegaci\xF3n",Type:"Tipo",url:"url",Copy:"Copiar","Press Ctrl+C to copy":"Presione Ctrl+C para copiar","copied!":"\xA1Copiado!"},U={"Allowed values:":"Valeurs autoris\xE9es :",Body:"Corps","Compare all with predecessor":"Tout comparer avec ...","compare changes to:":"comparer les changements \xE0 :","compared to":"comparer \xE0","Default value:":"Valeur par d\xE9faut :",Description:"Description",Field:"Champ",General:"G\xE9n\xE9ral","Generated with":"G\xE9n\xE9r\xE9 avec",Header:"En-t\xEAte",Headers:"En-t\xEAtes",Name:"Nom","No response values.":"Aucune valeur de r\xE9ponse.","No value":"Aucune valeur",optional:"optionnel",Parameter:"Param\xE8tre",Parameters:"Param\xE8tres","Permission:":"Permission :","Query Parameter(s)":"Param\xE8tre(s) de la requ\xEAte","Query Parameters":"Param\xE8tres de la requ\xEAte","Request Body":"Corps de la requ\xEAte",required:"requis",Response:"R\xE9ponse",Send:"Envoyer","Send a Sample Request":"Envoyer une requ\xEAte repr\xE9sentative","show up to version:":"Montrer \xE0 partir de la version :","Size range:":"Ordre de grandeur :","Toggle navigation":"Basculer la navigation",Type:"Type",url:"url",Copy:"Copier","Press Ctrl+C to copy":"Appuyez sur Ctrl+C pour copier","copied!":"Copi\xE9!"},M={"Allowed values:":"Valori permessi:","Compare all with predecessor":"Confronta tutto con versioni precedenti","compare changes to:":"confronta modifiche con:","compared to":"confrontato con","Default value:":"Valore predefinito:",Description:"Descrizione",Field:"Campo",General:"Generale","Generated with":"Creato con",Name:"Nome","No response values.":"Nessun valore di risposta.",optional:"opzionale",Parameter:"Parametro","Permission:":"Permessi:",Response:"Risposta",Send:"Invia","Send a Sample Request":"Invia una richiesta di esempio","show up to version:":"mostra alla versione:","Size range:":"Intervallo dimensione:","Toggle navigation":"Attiva/disattiva la navigazione",Type:"Tipo",url:"url",Copy:"Copiare","Press Ctrl+C to copy":"Premere CTRL+C per copiare","copied!":"Copiato!"},K={"Allowed values:":"Toegestane waarden:","Compare all with predecessor":"Vergelijk alle met voorgaande versie","compare changes to:":"vergelijk veranderingen met:","compared to":"vergelijk met","Default value:":"Standaard waarde:",Description:"Omschrijving",Field:"Veld",General:"Algemeen","Generated with":"Gegenereerd met",Name:"Naam","No response values.":"Geen response waardes.",optional:"optioneel",Parameter:"Parameter","Permission:":"Permissie:",Response:"Antwoorden",Send:"Sturen","Send a Sample Request":"Stuur een sample aanvragen","show up to version:":"toon tot en met versie:","Size range:":"Maatbereik:","Toggle navigation":"Navigatie in-/uitschakelen",Type:"Type",url:"url",Copy:"Kopi\xEBren","Press Ctrl+C to copy":"Druk op Ctrl+C om te kopi\xEBren","copied!":"Gekopieerd!"},G={"Allowed values:":"Dozwolone warto\u015Bci:","Compare all with predecessor":"Por\xF3wnaj z poprzednimi wersjami","compare changes to:":"por\xF3wnaj zmiany do:","compared to":"por\xF3wnaj do:","Default value:":"Warto\u015B\u0107 domy\u015Blna:",Description:"Opis",Field:"Pole",General:"Generalnie","Generated with":"Wygenerowano z",Name:"Nazwa","No response values.":"Brak odpowiedzi.",optional:"opcjonalny",Parameter:"Parametr","Permission:":"Uprawnienia:",Response:"Odpowied\u017A",Send:"Wy\u015Blij","Send a Sample Request":"Wy\u015Blij przyk\u0142adowe \u017C\u0105danie","show up to version:":"poka\u017C do wersji:","Size range:":"Zakres rozmiaru:","Toggle navigation":"Prze\u0142\u0105cz nawigacj\u0119",Type:"Typ",url:"url",Copy:"Kopiowa\u0107","Press Ctrl+C to copy":"Naci\u015Bnij Ctrl+C, aby skopiowa\u0107","copied!":"Kopiowane!"},te={"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Compare todos com antecessores","compare changes to:":"comparar altera\xE7\xF5es com:","compared to":"comparado com","Default value:":"Valor padr\xE3o:",Description:"Descri\xE7\xE3o",Field:"Campo",General:"Geral","Generated with":"Gerado com",Name:"Nome","No response values.":"Sem valores de resposta.",optional:"opcional",Parameter:"Par\xE2metro","Permission:":"Permiss\xE3o:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar um Exemplo de Pedido","show up to version:":"aparecer para a vers\xE3o:","Size range:":"Faixa de tamanho:","Toggle navigation":"Alternar navega\xE7\xE3o",Type:"Tipo",url:"url",Copy:"Copiar","Press Ctrl+C to copy":"Pressione Ctrl+C para copiar","copied!":"Copiado!"},se={"Allowed values:":"Valori permise:","Compare all with predecessor":"Compar\u0103 toate cu versiunea precedent\u0103","compare changes to:":"compar\u0103 cu versiunea:","compared to":"comparat cu","Default value:":"Valoare implicit\u0103:",Description:"Descriere",Field:"C\xE2mp",General:"General","Generated with":"Generat cu",Name:"Nume","No response values.":"Nici o valoare returnat\u0103.",optional:"op\u021Bional",Parameter:"Parametru","Permission:":"Permisiune:",Response:"R\u0103spuns",Send:"Trimite","Send a Sample Request":"Trimite o cerere de prob\u0103","show up to version:":"arat\u0103 p\xE2n\u0103 la versiunea:","Size range:":"Interval permis:","Toggle navigation":"Comutarea navig\u0103rii",Type:"Tip",url:"url",Copy:"Copie","Press Ctrl+C to copy":"Ap\u0103sa\u021Bi Ctrl+C pentru a copia","copied!":"Copiat!"},pe={"Allowed values:":"\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F:","Compare all with predecessor":"\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439","compare changes to:":"\u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441:","compared to":"\u0432 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441","Default value:":"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E:",Description:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",Field:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",General:"\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F","Generated with":"\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E",Name:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435","No response values.":"\u041D\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430.",optional:"\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",Parameter:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440","Permission:":"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E:",Response:"\u041E\u0442\u0432\u0435\u0442",Send:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Send a Sample Request":"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441","show up to version:":"\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0435\u0440\u0441\u0438\u044E:","Size range:":"\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F:","Toggle navigation":"\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438",Type:"\u0422\u0438\u043F",url:"URL",Copy:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C","Press Ctrl+C to copy":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 Ctrl+C, \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C","copied!":"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E!"},ee={"Allowed values:":"\u0130zin verilen de\u011Ferler:","Compare all with predecessor":"T\xFCm\xFCn\xFC \xF6ncekiler ile kar\u015F\u0131la\u015Ft\u0131r","compare changes to:":"de\u011Fi\u015Fiklikleri kar\u015F\u0131la\u015Ft\u0131r:","compared to":"kar\u015F\u0131la\u015Ft\u0131r","Default value:":"Varsay\u0131lan de\u011Fer:",Description:"A\xE7\u0131klama",Field:"Alan",General:"Genel","Generated with":"Olu\u015Fturan",Name:"\u0130sim","No response values.":"D\xF6n\xFC\u015F verisi yok.",optional:"opsiyonel",Parameter:"Parametre","Permission:":"\u0130zin:",Response:"D\xF6n\xFC\u015F",Send:"G\xF6nder","Send a Sample Request":"\xD6rnek istek g\xF6nder","show up to version:":"bu versiyona kadar g\xF6ster:","Size range:":"Boyut aral\u0131\u011F\u0131:","Toggle navigation":"Navigasyonu de\u011Fi\u015Ftir",Type:"Tip",url:"url",Copy:"Kopya etmek","Press Ctrl+C to copy":"Kopyalamak i\xE7in Ctrl+C tu\u015Flar\u0131na bas\u0131n","copied!":"Kopya -lanan!"},he={"Allowed values:":"Gi\xE1 tr\u1ECB ch\u1EA5p nh\u1EADn:","Compare all with predecessor":"So s\xE1nh v\u1EDBi t\u1EA5t c\u1EA3 phi\xEAn b\u1EA3n tr\u01B0\u1EDBc","compare changes to:":"so s\xE1nh s\u1EF1 thay \u0111\u1ED5i v\u1EDBi:","compared to":"so s\xE1nh v\u1EDBi","Default value:":"Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh:",Description:"Ch\xFA th\xEDch",Field:"Tr\u01B0\u1EDDng d\u1EEF li\u1EC7u",General:"T\u1ED5ng quan","Generated with":"\u0110\u01B0\u1EE3c t\u1EA1o b\u1EDFi",Name:"T\xEAn","No response values.":"Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3 tr\u1EA3 v\u1EC1.",optional:"T\xF9y ch\u1ECDn",Parameter:"Tham s\u1ED1","Permission:":"Quy\u1EC1n h\u1EA1n:",Response:"K\u1EBFt qu\u1EA3",Send:"G\u1EEDi","Send a Sample Request":"G\u1EEDi m\u1ED9t y\xEAu c\u1EA7u m\u1EABu","show up to version:":"hi\u1EC3n th\u1ECB phi\xEAn b\u1EA3n:","Size range:":"K\xEDch c\u1EE1:","Toggle navigation":"Chuy\u1EC3n \u0111\u1ED5i \u0111i\u1EC1u h\u01B0\u1EDBng",Type:"Ki\u1EC3u",url:"li\xEAn k\u1EBFt",Copy:"B\u1EA3n sao","Press Ctrl+C to copy":"Nh\u1EA5n Ctrl+C \u0111\u1EC3 sao ch\xE9p","copied!":"Sao ch\xE9p!"},be={"Allowed values:":"\u5141\u8BB8\u503C:",Body:"\u8BF7\u6C42\u4F53","Compare all with predecessor":"\u4E0E\u6240\u6709\u4E4B\u524D\u7684\u7248\u672C\u6BD4\u8F83","compare changes to:":"\u5C06\u5F53\u524D\u7248\u672C\u4E0E\u6307\u5B9A\u7248\u672C\u6BD4\u8F83:","compared to":"\u76F8\u6BD4\u4E8E","Default value:":"\u9ED8\u8BA4\u503C:",DEPRECATED:"\u5F03\u7528",Description:"\u63CF\u8FF0","Error 4xx":"\u8BF7\u6C42\u5931\u8D25\uFF084xx\uFF09",Field:"\u5B57\u6BB5","Filter...":"\u7B5B\u9009\u2026",General:"\u6982\u8981","Generated with":"\u6784\u5EFA\u4E8E",Header:"\u8BF7\u6C42\u5934",Headers:"\u8BF7\u6C42\u5934",Name:"\u540D\u79F0","No response values.":"\u65E0\u8FD4\u56DE\u503C.","No value":"\u7A7A\u503C",optional:"\u53EF\u9009",Parameter:"\u53C2\u6570",Parameters:"\u53C2\u6570","Permission:":"\u6743\u9650:","Query Parameter(s)":"\u67E5\u8BE2\u53C2\u6570","Query Parameters":"\u67E5\u8BE2\u53C2\u6570","Request Body":"\u8BF7\u6C42\u6570\u636E",required:"\u5FC5\u9700",Reset:"\u91CD\u7F6E",Response:"\u8FD4\u56DE",Send:"\u53D1\u9001","Send a Sample Request":"\u53D1\u9001\u793A\u4F8B\u8BF7\u6C42","show up to version:":"\u663E\u793A\u6307\u5B9A\u7248\u672C:","Size range:":"\u53D6\u503C\u8303\u56F4:","Success 200":"\u8BF7\u6C42\u6210\u529F\uFF08200\uFF09","Toggle navigation":"\u5207\u63DB\u5C0E\u822A",Type:"\u7C7B\u578B",url:"\u5730\u5740",Copy:"\u590D\u5236\u6587\u672C","Press Ctrl+C to copy":"\u6309Ctrl+C\u590D\u5236","copied!":"\u6587\u672C\u5DF2\u590D\u5236!"},Te={ca:H,cn:be,cs:$,de:Y,es:O,en:{},fr:U,it:M,nl:K,pl:G,pt:te,pt_br:te,ro:se,ru:pe,tr:ee,vi:he,zh:be,zh_cn:be},je=((ft=window.navigator.language)!=null?ft:"en-GB").toLowerCase().substr(0,2);let ht=Te[je]?Te[je]:Te.en;function gt(Le){const de=ht[Le];return de===void 0?Le:de}function _t(Le){if(!Object.prototype.hasOwnProperty.call(Te,Le))throw new Error(`Invalid value for language setting! Available values are ${Object.keys(Te).join(",")}`);ht=Te[Le]}const Dt=Le=>{let de={};const Pe=(_e,ye)=>ye.split(".").reduce((ve,Ne)=>{if(ve){if(ve[Ne])return ve[Ne];if(Array.isArray(ve)&&ve[0]&&ve[0][Ne])return ve[0][Ne]}return null},_e),xe=(_e,ye,ve)=>{_e?Array.isArray(_e)?_e.length?_e[0][ye]=ve:_e.push({[ye]:ve}):_e[ye]=ve:de[ye]=ve};Le.forEach(_e=>{const{parentNode:ye,field:ve,type:Ne}=_e[0],we=ye?Pe(de,ye.path):void 0,He=we?ve.substring(ye.path.length+1):ve,$e=Ne.indexOf("[]")!==-1;Ne.indexOf("Object")!==-1?xe(we,He,$e?[]:{}):xe(we,He,$e?[]:_e[1])});const re=Object.keys(de);return re.length===1&&Le[0][0].optional&&(de=de[re[0]]),Be(de)};function Be(Le){return JSON.stringify(Le,null,4)}function St(Le){const de=[];return Le.forEach(Pe=>{let xe;switch(Pe.type.toLowerCase()){case"string":xe=Pe.defaultValue||"";break;case"boolean":xe=Boolean(Pe.defaultValue)||!1;break;case"number":xe=parseInt(Pe.defaultValue||0,10);break;case"date":xe=Pe.defaultValue||new Date().toLocaleDateString(window.navigator.language);break}de.push([Pe,xe])}),Dt(de)}var Me=et(2027);class Xe extends Me{constructor(de){super(),this.testMode=de}diffMain(de,Pe,xe,re){return super.diff_main(this._stripHtml(de),this._stripHtml(Pe),xe,re)}diffLineMode(de,Pe){const xe=this.diff_linesToChars_(de,Pe),re=xe.chars1,_e=xe.chars2,ye=xe.lineArray,ve=super.diff_main(re,_e,!1);return this.diff_charsToLines_(ve,ye),ve}diffPrettyHtml(de){const Pe=[],xe=/&/g,re=/</g,_e=/>/g,ye=/\n/g;for(let ve=0;ve<de.length;ve++){const Ne=de[ve][0],He=de[ve][1].replace(xe,"&amp;").replace(re,"&lt;").replace(_e,"&gt;").replace(ye,"&para;<br>");switch(Ne){case Me.DIFF_INSERT:Pe[ve]="<ins>"+He+"</ins>";break;case Me.DIFF_DELETE:Pe[ve]="<del>"+He+"</del>";break;case Me.DIFF_EQUAL:Pe[ve]="<span>"+He+"</span>";break}}return Pe.join("")}diffPrettyCode(de){const Pe=[],xe=/\n/g;for(let re=0;re<de.length;re++){const _e=de[re][0],ye=de[re][1],ve=ye.match(xe)?"":`
`;switch(_e){case Me.DIFF_INSERT:Pe[re]=ye.replace(/^(.)/gm,"+ $1")+ve;break;case Me.DIFF_DELETE:Pe[re]=ye.replace(/^(.)/gm,"- $1")+ve;break;case Me.DIFF_EQUAL:Pe[re]=ye.replace(/^(.)/gm,"  $1");break}}return Pe.join("")}diffCleanupSemantic(de){return this.diff_cleanupSemantic(de)}_stripHtml(de){if(this.testMode)return de;const Pe=document.createElement("div");return Pe.innerHTML=de,Pe.textContent||Pe.innerText||""}}function Xt(){p().registerHelper("markdown",function(re){return re&&(re=re.replace(/((\[(.*?)\])?\(#)((.+?):(.+?))(\))/mg,function(_e,ye,ve,Ne,we,He,$e){const Ge=Ne||He+"/"+$e;return'<a href="#api-'+He+"-"+$e+'">'+Ge+"</a>"}),re)}),p().registerHelper("setInputType",function(re){switch(re){case"File":case"Email":case"Color":case"Number":case"Date":return re[0].toLowerCase()+re.substring(1);case"Boolean":return"checkbox";default:return"text"}});let Le;p().registerHelper("startTimer",function(re){return Le=new Date,""}),p().registerHelper("stopTimer",function(re){return console.log(new Date-Le),""}),p().registerHelper("__",function(re){return gt(re)}),p().registerHelper("cl",function(re){return console.log(re),""}),p().registerHelper("underscoreToSpace",function(re){return re.replace(/(_+)/g," ")}),p().registerHelper("removeDblQuotes",function(re){return re.replace(/"/g,"")}),p().registerHelper("assign",function(re){if(arguments.length>0){const _e=typeof arguments[1];let ye=null;(_e==="string"||_e==="number"||_e==="boolean")&&(ye=arguments[1]),p().registerHelper(re,function(){return ye})}return""}),p().registerHelper("nl2br",function(re){return Pe(re)}),p().registerHelper("ifNotObject",function(re,_e){return re&&re.indexOf("Object")!==0?_e.fn(this):_e.inverse(this)}),p().registerHelper("ifCond",function(re,_e,ye,ve){switch(_e){case"==":return re==ye?ve.fn(this):ve.inverse(this);case"===":return re===ye?ve.fn(this):ve.inverse(this);case"!=":return re!=ye?ve.fn(this):ve.inverse(this);case"!==":return re!==ye?ve.fn(this):ve.inverse(this);case"<":return re<ye?ve.fn(this):ve.inverse(this);case"<=":return re<=ye?ve.fn(this):ve.inverse(this);case">":return re>ye?ve.fn(this):ve.inverse(this);case">=":return re>=ye?ve.fn(this):ve.inverse(this);case"&&":return re&&ye?ve.fn(this):ve.inverse(this);case"||":return re||ye?ve.fn(this):ve.inverse(this);default:return ve.inverse(this)}});const de={};p().registerHelper("subTemplate",function(re,_e){de[re]||(de[re]=p().compile(document.getElementById("template-"+re).innerHTML));const ye=de[re],ve=v().extend({},this,_e.hash);return new(p()).SafeString(ye(ve))}),p().registerHelper("toLowerCase",function(re){return re&&typeof re=="string"?re.toLowerCase():""}),p().registerHelper("dot2bracket",function(re){const{parentNode:_e,field:ye,isArray:ve}=re;let Ne="";if(_e){let we=re;do{const He=we.parentNode;He.isArray&&(Ne=`[]${Ne}`),He.parentNode?Ne=`[${He.field.substring(He.parentNode.path.length+1)}]${Ne}`:Ne=He.field+Ne,we=we.parentNode}while(we.parentNode);Ne+=`[${ye.substring(_e.path.length+1)}]`}else Ne=ye,ve&&(Ne+="[]");return Ne}),p().registerHelper("nestObject",function(re){const{parentNode:_e,field:ye}=re;return _e?"&nbsp;&nbsp;".repeat(_e.path.split(".").length)+ye.substring(_e.path.length+1):ye});function Pe(re){return(""+re).replace(/(?:^|<\/pre>)[^]*?(?:<pre>|$)/g,_e=>_e.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2"))}p().registerHelper("each_compare_list_field",function(re,_e,ye){const ve=ye.hash.field,Ne=[];re&&re.forEach(function(He){const $e=He;$e.key=He[ve],Ne.push($e)});const we=[];return _e&&_e.forEach(function(He){const $e=He;$e.key=He[ve],we.push($e)}),xe("key",Ne,we,ye)}),p().registerHelper("each_compare_keys",function(re,_e,ye){const ve=[];re&&Object.keys(re).forEach(function(He){const $e={};$e.value=re[He],$e.key=He,ve.push($e)});const Ne=[];return _e&&Object.keys(_e).forEach(function(He){const $e={};$e.value=_e[He],$e.key=He,Ne.push($e)}),xe("key",ve,Ne,ye)}),p().registerHelper("body2json",function(re,_e){return St(re)}),p().registerHelper("each_compare_field",function(re,_e,ye){return xe("field",re,_e,ye)}),p().registerHelper("each_compare_title",function(re,_e,ye){return xe("title",re,_e,ye)}),p().registerHelper("reformat",function(re,_e){if(_e==="json")try{return JSON.stringify(JSON.parse(re.trim()),null,"    ")}catch(ye){}return re}),p().registerHelper("showDiff",function(re,_e,ye){let ve="";if(re===_e)ve=re;else{if(!re)return _e;if(!_e)return re;const Ne=new Xe;if(ye==="code"){const we=Ne.diffLineMode(_e,re);ve=Ne.diffPrettyCode(we)}else{const we=Ne.diffMain(_e,re);Ne.diffCleanupSemantic(we),ve=Ne.diffPrettyHtml(we),ve=ve.replace(/&para;/gm,""),ye==="nl2br"&&(ve=Pe(ve))}}return ve});function xe(re,_e,ye,ve){const Ne=[];let we=0;_e&&_e.forEach(function(Ge){let ut=!1;if(ye&&ye.forEach(function(pt){if(Ge[re]===pt[re]){const sn={typeSame:!0,source:Ge,compare:pt,index:we};Ne.push(sn),ut=!0,we++}}),!ut){const pt={typeIns:!0,source:Ge,index:we};Ne.push(pt),we++}}),ye&&ye.forEach(function(Ge){let ut=!1;if(_e&&_e.forEach(function(pt){pt[re]===Ge[re]&&(ut=!0)}),!ut){const pt={typeDel:!0,compare:Ge,index:we};Ne.push(pt),we++}});let He="";const $e=Ne.length;for(const Ge in Ne)parseInt(Ge,10)===$e-1&&(Ne[Ge]._last=!0),He=He+ve.fn(Ne[Ge]);return He}}document.addEventListener("DOMContentLoaded",()=>{On(),P(),y().highlightAll()});function On(){var le;let Le=[{type:"get",url:"/api/account/buy_crypto_elements",title:"buy_crypto_elements",description:"<p>Get a list of eligible accounts to buy crypto.</p>",name:"buy_crypto_elements",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"customer_id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"?customer_id=1",type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 140,
    "success": true,
    "message": "",
    "value": {
        "pay": [
            {
                "id": 15,
                "currency_code": "TRY",
                "balance": 0.0,
                "swap_rate": 0.054490338978999
            },
            {
                "id": 11,
                "currency_code": "USD",
                "balance": 0.0,
                "swap_rate": 0.995
            },
            {
                "id": 12,
                "currency_code": "EUR",
                "balance": 0.0,
                "swap_rate": 0.998104003640923
            },
            {
                "id": 13,
                "currency_code": "GBP",
                "balance": 0.0,
                "swap_rate": 1.15188190355674
            }
        ],
        "receive": [
            {
                "id": 165,
                "currency_code": "BNB",
                "balance": 0.216919920129455,
                "swap_rate": 278.01389862600752
            },
            {
                "id": 147,
                "currency_code": "ETH",
                "balance": 1.7645595778088,
                "swap_rate": 1592.4949099188523
            },
            {
                "id": 140,
                "currency_code": "TRX",
                "balance": 1801.2760172795,
                "swap_rate": 0.060679079999999996
            },
            {
                "id": 137,
                "currency_code": "USDT",
                "balance": 358.4,
                "swap_rate": 0.983422512114
            }
        ]
    }
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"post",url:"/api/account/change",title:"change",description:"<p>Change account status.</p>",name:"change",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:`{
    "id": 1,
    "status": "Closed"
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 74,
    "success": true,
    "message": "Changes have been saved!",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"get",url:"/api/account/create_invoice",title:"create_invoice",description:"<p>Create a Proforma Invoice.</p>",name:"create_invoice",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"customer_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!0,field:"amount",isArray:!1,description:"<p>Number</p>"}]},examples:[{title:"Request-Example:",content:"?customer_id=1&amount=2000&currency_code=EUR",type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 130,
    "success": true,
    "message": "",
    "value": "/files/upload/100001.pdf"
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"post",url:"/api/account/delete",title:"delete",description:"<p>Delete an account.</p>",name:"delete",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:`{
    "id": 126
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 74,
    "success": true,
    "message": "Selected item has been deleted.",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"post",url:"/api/account/deposit",title:"deposit",description:"<p>Add fund to account. Send receipt (file) parameter if deposit was made by an offline transfer. This method is only available for fiat wallets.</p>",name:"deposit",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"to_account_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"number",optional:!1,field:"amount",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"receipt",isArray:!1,description:"<p>Length from 0 to 512</p>"}]},examples:[{title:"Request-Example:",content:`{
    "to_account_id": 1,
    "amount": 300.0,
    "type": "Deposit_Online",
    "receipt": ""
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 79,
    "success": true,
    "message": "Transaction Completed.",
    "value": [
        {
            "id": 22,
            "date_time": "23/05/2022 06:02",
            "transfer_id": 100019,
            "currency_code": "EUR",
            "debit": 0.0,
            "credit": 3.0,
            "balance": 1183.0,
            "transaction_type": "Commission",
            "system_remark": "Commission",
            "customer_remark": "",
            "status": "Completed",
            "details": {
                "bank_transfer": null,
                "bank_transfer_log": []
            },
            "details_text": ""
        },
        {
            "id": 21,
            "date_time": "23/05/2022 06:02",
            "transfer_id": 100019,
            "currency_code": "EUR",
            "debit": 300.0,
            "credit": 0.0,
            "balance": 1186.0,
            "transaction_type": "Deposit Online",
            "system_remark": "Deposit Account.",
            "customer_remark": "",
            "status": "Completed",
            "details": {
                "bank_transfer": null,
                "bank_transfer_log": []
            },
            "details_text": ""
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"get",url:"/api/account/find",title:"find",description:"<p>Get public info of accounts connected to an email address or user id.</p>",name:"find",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"email",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!0,field:"uid",isArray:!1,description:"<p>^\\d{1,9}$</p>"}]},examples:[{title:"Request-Example:",content:"?email=itzed-pay.com&uid=21500136",type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
  "id": 87,
    "success": true,
    "message": "",
    "value": [
        {
            "id": 1,
            "date_time": null,
            "customer": {
                "id": 132,
                "reg_date": null,
                "first_name": null,
                "last_name": null,
                "gender": null,
                "birth_date": null,
                "customer_type": null,
                "email": null,
                "mobile": null,
                "phone": null,
                "country": null,
                "city": null,
                "address": null,
                "avatar": null,
                "remark": null,
                "documents": null,
                "business_info": null,
                "api_key": null,
                "notification": null,
                "otp_enabled": false,
                "status": null
            },
            "currency_id": 1,
            "currency_code": "EUR",
            "currency_type": "Fiat",
            "address": [
                {
                    "blockchain": 0,
                    "address_index": 0,
                    "address": "ZP21500001EUR",
                    "address_balance": 0,
                    "last_update": "2022-07-14T03:17:42.0232614-04:00"
                }
            ],
            "address_comment": "",
            "balance": 0.0,
            "name": null,
            "status": "Active"
        },
        {
            "id": 3,
            "date_time": null,
            "customer": {
                "id": 132,
                "reg_date": null,
                "first_name": null,
                "last_name": null,
                "gender": null,
                "birth_date": null,
                "customer_type": null,
                "email": null,
                "mobile": null,
                "phone": null,
                "country": null,
                "city": null,
                "address": null,
                "avatar": null,
                "remark": null,
                "documents": null,
                "business_info": null,
                "api_key": null,
                "notification": null,
                "otp_enabled": false,
                "status": null
            },
            "currency_id": 3,
            "currency_code": "GBP",
            "currency_type": "Fiat",
            "address": [
                {
                    "blockchain": 0,
                    "address_index": 0,
                    "address": "ZP21500001GBP",
                    "address_balance": 0,
                    "last_update": "2022-07-14T03:17:42.0232614-04:00"
                }
            ],
            "address_comment": "",
            "balance": 0.0,
            "name": null,
            "status": "Active"
        },
        {
            "id": 51,
            "date_time": null,
            "customer": {
                "id": 132,
                "reg_date": null,
                "first_name": null,
                "last_name": null,
                "gender": null,
                "birth_date": null,
                "customer_type": null,
                "email": null,
                "mobile": null,
                "phone": null,
                "country": null,
                "city": null,
                "address": null,
                "avatar": null,
                "remark": null,
                "documents": null,
                "business_info": null,
                "api_key": null,
                "notification": null,
                "otp_enabled": false,
                "status": null
            },
            "currency_id": 20,
            "currency_type": "Crypto",
            "currency_code": "ETH",
            "address": [
                {
                    "blockchain": 1,
                    "address_index": 1,
                    "address": "0x4fd7b9bfb593d70383a37b97da95432da66d3d8a",
                    "address_balance": 0.0,
                    "last_update": "2022-07-14T03:17:42.0391877-04:00"
                }
            ],
            "address_comment": "ERC20",
            "currency_flag": "/files/crypto/ETH.png",
            "balance": 0.0,
            "name": null,
            "status": "Active"
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"get",url:"/api/account/get_swap_elements",title:"get_swap_elements",description:"<p>Get a list of eligible accounts for swap.</p>",name:"get_swap_elements",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"customer_id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"?customer_id=1",type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 137,
    "success": true,
    "message": "",
    "value": {
        "pay": [
            {
                "id": 147,
                "currency_code": "ETH",
                "balance": 1.8645595778088,
                "swap_rate": 1458.7503457923
            },
            {
                "id": 87,
                "currency_code": "EUR",
                "balance": 500.0,
                "swap_rate": 0.98743989223652373
            },
            {
                "id": 140,
                "currency_code": "TRX",
                "balance": 1801.2760172795,
                "swap_rate": 0.062011619999999996
            },
            {
                "id": 113,
                "currency_code": "USD",
                "balance": 202.380888427146,
                "swap_rate": 0.995
            },
            {
                "id": 137,
                "currency_code": "USDT",
                "balance": 562.4,
                "swap_rate": 0.974661868068
            }
        ],
        "receive": [
            {
                "id": 163,
                "currency_code": "AED",
                "balance": 0.0,
                "swap_rate": 0.273655547991831
            },
            {
                "id": 165,
                "currency_code": "BNB",
                "balance": 0.0,
                "swap_rate": 279.4908142233
            },
            {
                "id": 147,
                "currency_code": "ETH",
                "balance": 1.8645595778088,
                "swap_rate": 1488.29409423
            },
            {
                "id": 87,
                "currency_code": "EUR",
                "balance": 500.0,
                "swap_rate": 1.002375790205
            },
            {
                "id": 162,
                "currency_code": "GBP",
                "balance": 0.0,
                "swap_rate": 1.18051481017498
            },
            {
                "id": 140,
                "currency_code": "TRX",
                "balance": 1801.2760172795,
                "swap_rate": 0.062638
            },
            {
                "id": 164,
                "currency_code": "TRY",
                "balance": 0.0,
                "swap_rate": 0.0552409856254958
            },
            {
                "id": 113,
                "currency_code": "USD",
                "balance": 202.380888427146,
                "swap_rate": 1.005
            },
            {
                "id": 137,
                "currency_code": "USDT",
                "balance": 562.4,
                "swap_rate": 1.0045484334
            }
        ]
    }
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"get",url:"/api/account/get_swap_pay",title:"get_swap_pay",description:"<p>Get a list of eligible accounts for swap.</p>",name:"get_swap_pay",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"customer_id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"?customer_id=1",type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
     "id": 207,
    "success": true,
    "message": "",
    "value": [
        {
            "id": 147,
            "currency_code": "ETH",
            "balance": 1.8645595778088,
            "swap_rate": 1
        },
        {
            "id": 87,
            "currency_code": "EUR",
            "balance": 500.0,
            "swap_rate": 1
        },
        {
            "id": 140,
            "currency_code": "TRX",
            "balance": 1801.2760172795,
            "swap_rate": 1
        },
        {
            "id": 113,
            "currency_code": "USD",
            "balance": 202.380888427146,
            "swap_rate": 1
        },
        {
            "id": 137,
            "currency_code": "USDT",
            "balance": 562.4,
            "swap_rate": 1
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"get",url:"/api/account/get_swap_receive",title:"get_swap_receive",description:"<p>Get a list of eligible accounts for swap.</p>",name:"get_swap_receive",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"pay_account_id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"?pay_account_id=1",type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 208,
    "success": true,
    "message": "",
    "value": [
        {
            "id": 163,
            "currency_code": "AED",
            "balance": 0.0,
            "swap_rate": 0.273655547991831
        },
        {
            "id": 165,
            "currency_code": "BNB",
            "balance": 0.0,
            "swap_rate": 279.4908142233
        },
        {
            "id": 147,
            "currency_code": "ETH",
            "balance": 1.8645595778088,
            "swap_rate": 1488.29409423
        },
        {
            "id": 87,
            "currency_code": "EUR",
            "balance": 500.0,
            "swap_rate": 1.002375790205
        },
        {
            "id": 162,
            "currency_code": "GBP",
            "balance": 0.0,
            "swap_rate": 1.18051481017498
        },
        {
            "id": 140,
            "currency_code": "TRX",
            "balance": 1801.2760172795,
            "swap_rate": 0.062638
        },
        {
            "id": 164,
            "currency_code": "TRY",
            "balance": 0.0,
            "swap_rate": 0.0552409856254958
        },
        {
            "id": 113,
            "currency_code": "USD",
            "balance": 202.380888427146,
            "swap_rate": 1.005
        },
        {
            "id": 137,
            "currency_code": "USDT",
            "balance": 562.4,
            "swap_rate": 1.0045484334
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"get",url:"/api/account/list",title:"list",description:"<p>Get a list of accounts. All filters are optional.</p>",name:"list",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"customer_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!0,field:"account_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!0,field:"update_crypto_balances",isArray:!1,description:"<p>^(true|false)$</p>"}]},examples:[{title:"Request-Example:",content:"?customer_id=1&account_id=2&currency=EUR&update_crypto_balances=true&total_currency=USD,BTC",type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
   "total": [
        {
            "Key": "USD",
            "Value": "4,914.934867"
        },
        {
            "Key": "BTC",
            "Value": "0.204167"
        }
    ],
    "id": 77,
    "success": true,
    "message": "Total: 2,937.31 USD, 0.14 BTC",
    "value": [
        {
            "id": 2,
            "date_time": "21/05/2022",
            "customer": {
                "id": 127,
                "reg_date": "20/05/2022",
                "first_name": "Alex",
                "last_name": "Doe",
                "gender": "Unknown",
                "birth_date": "",
                "customer_type": "Individual",
                "email": "it@zed-pay.com",
                "mobile": "",
                "phone": "",
                "country": {
                    "id": 234,
                    "name": "United Kingdom",
                    "phone_prefix": "44",
                    "alpha_2": "GB",
                    "alpha_3": "GBR"
                },
                "city": "",
                "address": "",
                "avatar": "/files/upload/user.png",
                "remark": "",
                "documents": [
                    {
                        "date_submitted": "04/08/2022 12:28",
                        "title": "Passport",
                        "file": "/files/upload/20220520-143027-127-0.png",
                        "status": "Accepted",
                        "comment": "Thank you"
                    },
                    {
                        "date_submitted": "04/08/2022 12:28",
                        "title": "Passport",
                        "file": "/files/upload/20220520-143027-127-1.png",
                        "status": "Rejected",
                        "comment": ""
                    }
                ],
                "business_info": {
                    "entity_name": "",
                    "entity_type": "",
                    "registration_number": "",
                    "date_of_registration": "",
                    "source_of_funds": "",
                    "nature_of_business": "",
                    "application_reason": "",
                    "website": "",
                    "file_certificate_of_incorporation": "",
                    "file_articles_of_association": "",
                    "file_register_of_directors": "",
                    "file_register_of_member": "",
                    "file_sanctions_questionnaire": "",
                    "file_letter_of_authorization": "",
                    "file_current_operating_status": "",
                    "file_Intermediaries": "",
                    "behalf": "",
                    "file_proof_of_address": "",
                    "file_Supplementary": "",
                    "admin_comment": "",
                    "status": 0
                },
                "api_key": {
                    "active": false,
                    "api_key": "",
                    "secret_key": ""
                },
                "notification": {
                    "telegram": false,
                    "telegram_id": "",
                    "whatsapp": false,
                    "app": true,
                    "sms": false,
                    "email": false
                },
                "otp_enabled": true,
                "status": "Verified"
            },
            "currency_id": 8,
            "currency_code": "BTC",
            "currency_type": "Crypto",
            "address": [
                {
                    "blockchain": 6,
                    "address_index": 0,
                    "address": "0xd3a576ad3c608a81c5e5beb715421879ce85d538",
                    "address_balance": 0.0,
                    "last_update": "2022-07-14T03:27:15.8409726-04:00"
                },
                {
                    "blockchain": 11,
                    "address_index": 0,
                    "address": "TZ2i7sVT2HcXnmWyBaVa87zKWVeWWCdnkq",
                    "address_balance": 0.0,
                    "last_update": "2022-07-14T03:27:15.8409726-04:00"
                }
            ],
            "address_comment": "",
            "currency_flag": "/files/crypto/btc.png",
            "balance": 0.0,
            "name": "BTC",
            "status": "Active"
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"get",url:"/api/account/list_cards",title:"list_cards",description:"<p>Get a list of virtual cards.</p>",name:"list_cards",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"customer_id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"?customer_id=1",type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 182,
    "success": true,
    "message": "",
    "value": [
        {
            "id": 7,
            "date_time": "19/11/2022",
            "currency_code": "AED",
            "type": "Visa",
            "card_plan": "Golden",
            "rechargeable": "Yes",
            "name": "John Doe",
            "balance": 1000.0,
            "expires_in": "2 years",
            "details": {},
            "status": "Pending"
        },
        {
            "id": 4,
            "date_time": "19/11/2022",
            "currency_code": "USD",
            "type": "Master",
            "card_plan": "Golden",
            "rechargeable": "Yes",
            "name": "John Doe",
            "balance": 1000.0,
            "expires_in": "2 years",
            "details": {},
            "status": "Pending"
        },
        {
            "id": 2,
            "date_time": "19/11/2022",
            "currency_code": "USD",
            "type": "Visa",
            "card_plan": "Golden",
            "rechargeable": "Yes",
            "name": "John Doe",
            "balance": 1000.0,
            "expires_in": "2 years",
            "details": {},
            "status": "Pending"
        },
        {
            "id": 1,
            "date_time": "19/11/2022",
            "currency_code": "EUR",
            "type": "Visa",
            "card_plan": "Golden",
            "rechargeable": "Yes",
            "name": "John Doe",
            "balance": 1000.0,
            "expires_in": "2 years",
            "details": {},
            "status": "Pending"
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"get",url:"/api/account/list_crypto_pending_transfers",title:"list_crypto_pending_transfers",description:"<p>Get a list of pending transaction to be send to blockchain. id parameter is optional.</p>",name:"list_crypto_pending_transfers",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"?id=1",type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 117,
    "success": true,
    "message": "",
    "value": [
        {
            "date_time_text": "14/07/2022 16:55",
            "account": {
                "id": 90,
                "date_time": "09/07/2022",
                "customer": {
                    "id": 132,
                    "reg_date": "27/05/2022",
                    "first_name": "John",
                    "last_name": "Doe",
                    "gender": "Unknown",
                    "birth_date": "01/01/1984",
                    "customer_type": "Individual",
                    "email": "it@zed-pay.com",
                    "mobile": "15161234567",
                    "phone": "15161234567",
                    "country": {
                        "id": 234,
                        "name": "United Kingdom",
                        "phone_prefix": "44",
                        "alpha_2": "GB",
                        "alpha_3": "GBR"
                    },
                    "city": "London",
                    "address": "London",
                    "avatar": "/files/upload/20220609-145616-132-0.png",
                    "remark": "",
                    "documents": [
                        {
                            "date_submitted": "04/08/2022 12:28",
                            "title": "Passport",
                            "file": "/files/upload/20220527-070124-132-0.png",
                            "status": "Pending",
                            "comment": ""
                        },
                        {
                            "date_submitted": "04/08/2022 12:28",
                            "title": "Passport",
                            "file": "/files/upload/20220527-070124-132-1.png",
                            "status": "Pending",
                            "comment": ""
                        }
                    ],
                    "api_key": {
                        "active": true,
                        "api_key": "0d6e00a19b21bb3e6887e16971b3c655",
                        "secret_key": "409795e0cfe5b99d7bb4860de6ead60b"
                    },
                    "notification": {
                        "telegram": false,
                        "telegram_chat_id": "5369855298",
                        "whatsapp": false,
                        "sms": false,
                        "email": false
                    },
                    "status": "Verified"
                },
                "currency_id": 17,
                "currency_code": "USDT",
                "currency_type": "Crypto",
                "address": [
                    {
                        "blockchain": 6,
                        "address_index": 0,
                        "address": "0x4fd7b9bfb593d70383a37b97da95432da66d3d8a",
                        "address_balance": 0.005,
                        "last_update": "2022-07-14T03:17:42.0421851-04:00"
                    }
                ],
                "address_comment": "",
                "currency_flag": "/files/crypto/USDT.png",
                "balance": 2027.97653261275,
                "name": "My USDT Wallet",
                "status": "Active"
            },
            "id": 7,
            "date_time": "2022-07-14T16:55:57",
            "transfer_id": 101435,
            "customer_id": 132,
            "currency": {
                "id": 17,
                "name": "Tether",
                "code": "USDT",
                "color": "#26a17b",
                "currency_type": 2,
                "country_id": 236,
                "sell": 1.00235836,
                "buy": 1.00235836,
                "withdrawal_commission": 0,
                "swap_commission": 0,
                "details": [
                    {
                        "blockchain": 6,
                        "contract_address": "0xb404c51bbc10dcbe948077f18a4b8e553d160084",
                        "digits": 6,
                        "admin_index": 0,
                        "admin_address": "0xc619d04b074b0516b73bcbba3ddbe12a50140207",
                        "withdrawal_commission": 10.0,
                        "swap_commission": 1.0
                    },
                    {
                        "blockchain": 11,
                        "contract_address": "TW61xaCWRfCPbQ2C2EoyKTa8teruShpSbK",
                        "digits": 6,
                        "admin_index": 0,
                        "admin_address": "TBRaXe8VCgxpkzM92cWFUeG8ZJ5GQYa8Pn",
                        "withdrawal_commission": 10.0,
                        "swap_commission": 1.0
                    }
                ],
                "status": 1
            },
            "blockchain": 11,
            "from_index": 0,
            "from_address": "TBRaXe8VCgxpkzM92cWFUeG8ZJ5GQYa8Pn",
            "to_address": "0x7312d8a0b8751ed87b97436cec2877b3d483bb55f",
            "amount": 995.0,
            "tries": 0,
            "next_try": "2022-07-14T16:55:57",
            "details": {
                "transaction_id": "",
                "url": ""
            },
            "status": 1
        },
        {
            "date_time_text": "14/07/2022 16:55",
            "account": {
                "id": 89,
                "date_time": "08/07/2022",
                "customer": {
                    "id": 132,
                    "reg_date": "27/05/2022",
                    "first_name": "John",
                    "last_name": "Doe",
                    "gender": "Unknown",
                    "birth_date": "01/01/1984",
                    "customer_type": "Individual",
                    "email": "it@zed-pay.com",
                    "mobile": "15161234567",
                    "phone": "15161234567",
                    "country": {
                        "id": 234,
                        "name": "United Kingdom",
                        "phone_prefix": "44",
                        "alpha_2": "GB",
                        "alpha_3": "GBR"
                    },
                    "city": "London",
                    "address": "London",
                    "avatar": "/files/upload/20220609-145616-132-0.png",
                    "remark": "",
                    "documents": [
                        {
                            "date_submitted": "04/08/2022 12:28",
                            "title": "Passport",
                            "file": "/files/upload/20220527-070124-132-0.png",
                            "status": "Pending",
                            "comment": ""
                        },
                        {
                            "date_submitted": "04/08/2022 12:28",
                            "title": "Passport",
                            "file": "/files/upload/20220527-070124-132-1.png",
                            "status": "Pending",
                            "comment": ""
                        }
                    ],
                    "api_key": {
                        "active": true,
                        "api_key": "0d6e00a19b21bb3e6887e16971b3c655",
                        "secret_key": "409795e0cfe5b99d7bb4860de6ead60b"
                    },
                    "notification": {
                        "telegram": false,
                        "telegram_chat_id": "5369855298",
                        "whatsapp": false,
                        "sms": false,
                        "email": false
                    },
                    "status": "Verified"
                },
                "currency_id": 20,
                "currency_code": "ETH",
                "currency_type": "Crypto",
                "address": [
                    {
                        "blockchain": 6,
                        "address_index": 1,
                        "address": "0xc8f4a80310f2d84c2874a4adaed702c7dcef29d5",
                        "address_balance": 0.946072568133207,
                        "last_update": "2022-07-14T03:17:42.0411873-04:00"
                    }
                ],
                "address_comment": "",
                "currency_flag": "/files/crypto/ETH.png",
                "balance": 9.0,
                "name": "My ETH Wallet",
                "status": "Active"
            },
            "id": 6,
            "date_time": "2022-07-14T16:55:03",
            "transfer_id": 101433,
            "customer_id": 132,
            "currency": {
                "id": 20,
                "name": "Ethereum",
                "code": "ETH",
                "color": "#627eea",
                "currency_type": 2,
                "country_id": 9999,
                "sell": 1138.39270545,
                "buy": 1138.39270545,
                "withdrawal_commission": 0,
                "swap_commission": 0,
                "details": [
                    {
                        "blockchain": 6,
                        "contract_address": "",
                        "digits": 18,
                        "admin_index": 0,
                        "admin_address": "0xc619d04b074b0516b73bcbba3ddbe12a50140207",
                        "withdrawal_commission": 10.0,
                        "swap_commission": 1.0
                    }
                ],
                "status": 1
            },
            "blockchain": 6,
            "from_index": 0,
            "from_address": "0xc619d04b074b0516b73bcbba3ddbe12a50140207",
            "to_address": "0xc619d04b074b0516b73bcbba3ddbe12a501402078",
            "amount": 2.9,
            "tries": 0,
            "next_try": "2022-07-14T16:55:03",
            "details": {
                "transaction_id": "",
                "url": ""
            },
            "status": 1
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"get",url:"/api/account/list_crypto_transactions",title:"list_crypto_transactions",description:"<p>Get a list of recent transactions of a crypto wallet.</p>",name:"list_crypto_transactions",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"account_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!0,field:"blockchain",isArray:!1,description:"<p>Length from 0 to 64</p>"}]},examples:[{title:"Request-Example:",content:"?account_id=1&blockchain=ethereum",type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 116,
    "success": true,
    "message": "",
    "value": [
        {
            "date_time": "13/06/2022 11:02",
            "transaction_id": "0x2b5ef1de63b3114dd50a06e170a35258610ebcdfbab786335e16468c38517e30",
            "blockchain": "ETHEREUM",
            "sender_address": "0xcbfb60f6a39e9e5e79f48555de777b9aab19c99a",
            "recipient_address": "0x4fd7b9bfb593d70383a37b97da95432da66d3d8a",
            "amount": "1",
            "fee": "0.0",
            "symbol": "USDT",
            "status": "Confirmed"
        },
        {
            "date_time": "13/06/2022 11:02",
            "transaction_id": "0x75a7894115d0381d2d72b91cd789a91f6aa2a5a1372cadc6f4808855119a5933",
            "blockchain": "ETHEREUM",
            "sender_address": "0x4fd7b9bfb593d70383a37b97da95432da66d3d8a",
            "recipient_address": "0xc8f4a80310f2d84c2874a4adaed702c7dcef29d5",
            "amount": "0.2",
            "fee": "0.0",
            "symbol": "USDT",
            "status": "Confirmed"
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"post",url:"/api/account/new_virtual_card",title:"new_virtual_card",description:"<p>Request a new virtual card.</p>",name:"new_virtual_card",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"customer_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"number",optional:!1,field:"currency_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"boolean",optional:!0,field:"Rechargeable",isArray:!1,description:"<p>starting with capital character may be a typo</p>"},{group:"Parameter",type:"boolean",optional:!0,field:"rechargeable",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"name",isArray:!1,description:"<p>Length from 0 to 64</p>"},{group:"Parameter",type:"number",optional:!1,field:"balance",isArray:!1,description:""},{group:"Parameter",type:"number",optional:!1,field:"expire_in_year",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "customer_id": 2,
    "currency_id": 1,
    "type": "Visa",
    "plan": "Golden",
    "Rechargeable": true,
    "name": "John Doe",
    "balance": 1000.0,
    "expire_in_year": 2
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 180,
    "success": true,
    "message": "Your request has been received. We'll contact you in a day or two!",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"post",url:"/api/account/new_visa_card",title:"new_visa_card",description:"<p>Request a new Visa Card.</p>",name:"new_visa_card",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"customer_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"number",optional:!1,field:"currency_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!1,field:"name",isArray:!1,description:"<p>Length from 0 to 64</p>"},{group:"Parameter",type:"number",optional:!1,field:"balance",isArray:!1,description:""},{group:"Parameter",type:"number",optional:!1,field:"expire_in_year",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "customer_id": 2,
    "currency_id": 1,
    "plan": "Golden",
    "type": "Rechargeable",
    "name": "John Doe",
    "balance": 1000.0,
    "expire_in_year": 2
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 134,
    "success": true,
    "message": "Your request has been received. We'll contact you in a day or two!",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"post",url:"/api/account/open",title:"open",description:"<p>Open a new account for a user.</p>",name:"open",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"customer_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"number",optional:!1,field:"currency_id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:`{
    "customer_id": 107,
    "currency_id": 1
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 74,
    "success": true,
    "message": "New account created.",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"post",url:"/api/account/remit",title:"remit",description:"<p>Request an offline withdrawal. This method is only available for fiat wallets. Start bank_name with &quot;(Local Bank) &quot; if it is a Local Bank transfer.</p>",name:"remit",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"from_account_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"number",optional:!1,field:"amount",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!0,field:"otp_code",isArray:!1,description:"<p>^\\w{0,32}$</p>"},{group:"Parameter",type:"object",optional:!0,field:"bank_transfer",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "from_account_id": 16,
    "amount": 400.0,
    "type": "Withdraw_Requested",
    "otp_code": "123456",
    "bank_transfer": {
        "country": "France",
        "currency": "EUR",
        "payment_type": "Wire Transfer",
        "receiver_type": "Personal",
        "full_name": "John Doe",
        "mobile": "",
        "email": "receiverexample.com",
        "reg_number": "",
        "phone": "",
        "bank_name": "Alfa Bank",
        "branch_name": "",
        "BIC": "ALFAXXXX",
        "IBAN": "FR123456789012345",
        "message": "",
        "proforma": "/files/upload/proforma.jpg"
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
   "id": 80,
    "success": true,
    "message": "Transaction Completed.",
    "value": [
        {
            "id": 261,
            "date_time": "08/06/2022 06:13",
            "transfer_id": 100250,
            "currency_code": "EUR",
            "debit": 0.0,
            "credit": 400.0,
            "balance": 754.0,
            "transaction_type": "Withdraw Requested",
            "system_remark": "Offline Withdrawal requested by client.",
            "customer_remark": "",
            "status": "Pending",
            "details": {
                "bank_transfer": {
                    "country": "France",
                    "currency": "EUR",
                    "payment_type": "Wire Transfer",
                    "receiver_type": "Personal",
                    "full_name": "John Doe",
                    "mobile": "",
                    "email": "receiverexample.com",
                    "reg_number": "",
                    "phone": "",
                    "bank_name": "Alfa Bank",
                    "branch_name": "",
                    "BIC": "ALFAXXXX",
                    "IBAN": "FR123456789012345",
                    "message": "",
                    "proforma": "/files/upload/proforma.jpg"
                },
                "bank_transfer_log": []
            },
            "details_text": " Type: Bank Transfer, Country: France, Currency: EUR, Payment Type: Wire Transfer, Receiver Type: Personal, Registration Nunmber: , Full Name: John Doe, Mobile: , Email: receiver@example.com, Phone: , Bank Name: Alfa Bank, Branch: , BIC: ALFAXXXX, IBAN: FR123456789012345, Message: "
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"post",url:"/api/account/rename",title:"rename",description:"<p>Rename account.</p>",name:"rename",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!1,field:"name",isArray:!1,description:"<p>Length from 0 to 128</p>"}]},examples:[{title:"Request-Example:",content:`{
    "id": 1,
    "name": "My Saving Account"
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 78,
    "success": true,
    "message": "Changes have been saved!",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"get",url:"/api/account/transaction_invoice",title:"transaction_invoice",description:"<p>Get a PDF version of a transaction.</p>",name:"transaction_invoice",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"?id=1",type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 135,
    "success": true,
    "message": "",
    "value": "/files/upload/tranaction-1510.pdf"
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"get",url:"/api/account/transactions",title:"transactions",description:"<p>Get a list of recent transactions of an account. account_id is mandatory.</p>",name:"transactions",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"customer_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!0,field:"account_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!0,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!0,field:"transfer_id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"?customer_id=99&account_id=1&id=2&transfer_id=100003",type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 82,
    "success": true,
    "message": "",
    "value": [
        {
            "id": 3,
            "date_time": "23/05/2022 04:30",
            "transfer_id": 100005,
            "currency_code": "EUR",
            "debit": 100.0,
            "credit": 0.0,
            "balance": 100.0,
            "transaction_type": "Deposit Requested",
            "system_remark": "Offline Deposit Requested by client.",
            "customer_remark": "",
            "status": "Pending",
            "details": {
                "bank_transfer": {
                    "country": "France",
                    "currency": "EUR",
                    "payment_type": "Wire Transfer",
                    "receiver_type": "Personal",
                    "full_name": "John Doe",
                    "mobile": "",
                    "email": "receiverexample.com",
                    "reg_number": "",
                    "phone": "",
                    "bank_name": "Alfa Bank",
                    "branch_name": "",
                    "BIC": "ALFAXXXX",
                    "IBAN": "FR123456789012345",
                    "message": "",
                    "proforma": "/files/upload/proforma.jpg"
                },
                "bank_transfer_log": [
                    {
                        "date_time": "08/06/2022 06:17",
                        "title": "Completed",
                        "message": "Money has been sent to your account.",
                        "file": ""
                    }
                ]
            },
            "details_text": " Type: Bank Transfer, Country: France, Currency: EUR, Payment Type: Wire Transfer, Receiver Type: Personal, Registration Nunmber: , Full Name: John Doe, Mobile: , Email: receiver@example.com, Phone: , Bank Name: Alfa Bank, Branch: , BIC: ALFAXXXX, IBAN: FR123456789012345, Message: <ul><li>08/06/2022 06:17: Completed<div class='gray'>Money has been sent to your account.</div></li></ul>"
        },
        {
            "id": 2,
            "date_time": "23/05/2022 04:29",
            "transfer_id": 100004,
            "currency_code": "EUR",
            "debit": 100.0,
            "credit": 0.0,
            "balance": 200.0,
            "transaction_type": "Deposit Online",
            "system_remark": "Deposit Account.",
           "customer_remark": "",
            "status": "Completed",
            "details": {
                "bank_transfer": null,
                "bank_transfer_log": []
            },
            "details_text": ""
        },
        {
            "id": 1,
            "date_time": "23/05/2022 04:29",
            "transfer_id": 100003,
            "currency_code": "EUR",
            "debit": 100.0,
            "credit": 0.0,
            "balance": 100.0,
            "transaction_type": "Deposit Online",
            "system_remark": "Deposit Account.",
            "customer_remark": "",
            "status": "Completed",
            "details": {
                "bank_transfer": null,
                "bank_transfer_log": []
            },
            "details_text": ""
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"post",url:"/api/account/transfer",title:"transfer",description:"<p>Transer between accounts.</p>",name:"transfer",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"from_account_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"number",optional:!1,field:"to_account_id",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"deposit_address",isArray:!1,description:"<p>Length from 0 to 128</p>"},{group:"Parameter",type:"string",optional:!1,field:"to_blockchain",isArray:!1,description:"<p>Length from 0 to 128</p>"},{group:"Parameter",type:"number",optional:!1,field:"amount",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!0,field:"otp_code",isArray:!1,description:"<p>^\\w{0,32}$</p>"},{group:"Parameter",type:"boolean",optional:!1,field:"check_only",isArray:!1,description:""},{group:"Parameter",type:"boolean",optional:!1,field:"normal_sending",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "from_account_id": 1,
    "to_account_id": 3,
    "deposit_address": "",
    "to_blockchain": "none",
    "amount": 200.0,
    "otp_code": "123456",
    "check_only": false,
    "normal_sending": false
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 81,
    "success": true,
    "message": "Transaction Completed.",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"post",url:"/api/account/update_bank_transfer_log",title:"update_bank_transfer_log",description:"<p>Submit a new update for a withdrawal or deposit request.</p>",name:"update_bank_transfer_log",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"object",optional:!0,field:"details",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "id": 1,
    "details": {
        "bank_transfer_log": [
            {
                "title": "Completed",
                "message": "We have sent money to your bank account.",
                "file": ""
            }
        ]
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 114,
    "success": true,
    "message": "Changes have been saved!",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"post",url:"/api/account/withdraw",title:"withdraw",description:"<p>Withdraw from account balance. This method is only available for fiat wallets.</p>",name:"withdraw",group:"account",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"from_account_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"number",optional:!1,field:"amount",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!0,field:"otp_code",isArray:!1,description:"<p>^\\w{0,32}$</p>"}]},examples:[{title:"Request-Example:",content:`{
    "from_account_id": 1,
    "amount": 400.0,
    "type": "Withdraw_Online",
    "otp_code": "123456"
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
   "id": 80,
    "success": true,
    "message": "Transaction Completed.",
    "value": [
        {
            "id": 30,
            "date_time": "23/05/2022 06:09",
            "transfer_id": 100025,
            "currency_code": "EUR",
            "debit": 0.0,
            "credit": 4.0,
            "balance": 967.0,
            "transaction_type": "Commission",
            "system_remark": "Commission",
            "customer_remark": "",
            "status": "Completed",
            "details": {
                "bank_transfer": null,
                "bank_transfer_log": []
            },
            "details_text": ""
        },
        {
            "id": 29,
            "date_time": "23/05/2022 06:09",
            "transfer_id": 100025,
            "currency_code": "EUR",
            "debit": 0.0,
            "credit": 396.0,
            "balance": 971.0,
            "transaction_type": "Withdraw Online",
            "system_remark": "Withdraw Account.",
            "customer_remark": "",
            "status": "Completed",
            "details": {
                "bank_transfer": null,
                "bank_transfer_log": []
            },
            "details_text": ""
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"account.ts",groupTitle:"account"},{type:"post",url:"/api/ad/create",title:"create",description:"<p>Create new ad by admin.</p>",name:"create",group:"ad",permission:[{name:"isAuth && isAdmin"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"title",isArray:!1,description:"<p>Length from 0 to 64</p>"},{group:"Parameter",type:"string",optional:!0,field:"link",isArray:!1,description:"<p>Length from 0 to 256, https link</p>"},{group:"Parameter",type:"string",optional:!0,field:"video",isArray:!1,description:"<p>Length from 0 to 256, https link on video</p>"},{group:"Parameter",type:"string",optional:!0,field:"image",isArray:!1,description:"<p>Length from 0 to 256, https link on png image</p>"},{group:"Parameter",type:"string",optional:!0,field:"description",isArray:!1,description:"<p>Length from 0 to 512</p>"},{group:"Parameter",type:"boolean",optional:!0,field:"visible",isArray:!1,description:"<p>Default: false</p>"}]}},version:"0.0.0",filename:"ad.ts",groupTitle:"ad",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"ad",isArray:!1,description:"<p>IAd</p>"}]},examples:[{title:"Success-Schema:",content:`{
    ad: {
        id: string,
        apperDate: number,
        title: string,
        category: string|ICategory,
        link?: string,
        video?: string,
        image?: string,
        description?: string,
        visible: boolean
    }
}`,type:"json"}]}},{type:"delete",url:"/api/ad/:adId",title:"deleteById",description:"<p>Delete exist ad by admin.</p>",name:"deleteById",group:"ad",permission:[{name:"isAuth && isAdmin"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"ad.ts",groupTitle:"ad"},{type:"post",url:"/api/address/add",title:"add",description:"<p>Add an address to address list.</p>",name:"add",group:"address",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"user_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!1,field:"name",isArray:!1,description:"<p>Length from 0 to 128</p>"}]},examples:[{title:"Request-Example:",content:`{
    "user_type": "Client",
    "user_id": 132,
    "name": "Mike USDT Wallet",
    "address": "0xfdg54f958d2ee666a2206206994597c13d831652hg",
    "blockchain": "tron"
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 81,
    "success": true,
    "message": "Item added successfully.",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"address.ts",groupTitle:"address"},{type:"post",url:"/api/address/delete",title:"delete",description:"<p>Delete an address from address list.</p>",name:"delete",group:"address",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:`{
    "id": 1
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 126,
    "success": true,
    "message": "Selected item has been deleted.",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"address.ts",groupTitle:"address"},{type:"get",url:"/api/address/list",title:"list",description:"<p>Get a list of customer's address list.</p>",name:"list",group:"address",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"items",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!0,field:"id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"?user_type=Client&user_id=132",type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
   "id": 127,
    "success": true,
    "message": "",
    "value": [
        {
            "id": 5,
            "user_type": 2,
            "user_id": 132,
            "name": "Alex USDT Wallet",
            "address": "0xfdg54f958d2ee666a2206206994597c13d831652h4",
            "blockchain": 6
        },
        {
            "id": 4,
            "user_type": 2,
            "user_id": 132,
            "name": "Mike ETH Wallet",
            "address": "0xfdg54f958d2ee666a2206206994597c13d831652h3",
            "blockchain": 6
        },
        {
            "id": 3,
            "user_type": 2,
            "user_id": 132,
            "name": "Mike USDT Wallet",
            "address": "0xfdg54f958d2ee666a2206206994597c13d831652h2",
            "blockchain": 10
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"address.ts",groupTitle:"address"},{type:"post",url:"/api/ad/edit/:newsId",title:"editById",description:"<p>Edit exist ad by admin.</p>",name:"editById",group:"ad",permission:[{name:"isAuth && isAdmin"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"title",isArray:!1,description:"<p>Length from 0 to 64</p>"},{group:"Parameter",type:"string",optional:!0,field:"link",isArray:!1,description:"<p>Length from 0 to 256, https link</p>"},{group:"Parameter",type:"string",optional:!0,field:"video",isArray:!1,description:"<p>Length from 0 to 256, https link on video</p>"},{group:"Parameter",type:"string",optional:!0,field:"image",isArray:!1,description:"<p>Length from 0 to 256, https link on png image</p>"},{group:"Parameter",type:"string",optional:!0,field:"description",isArray:!1,description:"<p>Length from 0 to 512</p>"},{group:"Parameter",type:"boolean",optional:!0,field:"visible",isArray:!1,description:"<p>Default: false</p>"}]}},version:"0.0.0",filename:"ad.ts",groupTitle:"ad",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"ad",isArray:!1,description:"<p>IAd</p>"}]},examples:[{title:"Success-Schema:",content:`{
    ad: {
        id: string,
        apperDate: number,
        title: string,
        category: string|ICategory,
        link?: string,
        video?: string,
        image?: string,
        description?: string,
        visible: boolean
    }
}`,type:"json"}]}},{type:"get",url:"/api/ad/one/:adId",title:"getById",description:"<p>Get exist ad by id.</p>",name:"getById",group:"ad",permission:[{name:"isAuth"}],version:"0.0.0",filename:"ad.ts",groupTitle:"ad",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"ad",isArray:!1,description:"<p>IAd</p>"}]},examples:[{title:"Success-Schema:",content:`{
    ad: {
        id: string,
        apperDate: number,
        title: string,
        category: string|ICategory,
        link?: string,
        video?: string,
        image?: string,
        description?: string,
        visible: boolean
    }
}`,type:"json"}]}},{type:"get",url:"/api/ad/list/:index",title:"getList",description:"<p>Get ads list, pagination by index.</p>",name:"getList",group:"ad",permission:[{name:"isAuth"}],version:"0.0.0",filename:"ad.ts",groupTitle:"ad",success:{fields:{"Success 200":[{group:"Success 200",type:"object[]",optional:!1,field:"ads",isArray:!0,description:"<p>IAd[]</p>"}]},examples:[{title:"Success-Schema:",content:`{
    ads: [{
        id: string,
        apperDate: number,
        title: string,
        category: string|ICategory,
        link?: string,
        video?: string,
        image?: string,
        description?: string,
        visible: boolean
    }]
}`,type:"json"}]}},{type:"get",url:"/api/blog/list",title:"list",description:"<p>Get a list of recent blogs. Use id filter to get a single specific blog.</p>",name:"list",group:"blog",parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"items",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!0,field:"id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"?items=50&id=2",type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 16,
    "success": true,
    "message": "",
    "value": [
        {
            "id": 15,
            "date_time": "02/04/2022",
            "title": "How to convert credit card outstanding into EMIs?",
            "summary": "There are usually two kinds of loans: secured loans, and unsecured loans.",
            "body": "<div>Sample HTML Content</div>",
            "poster": "blog-post-4.png",
            "author": "Post By Hans Murazik",
            "category": "Credit",
            "url": "/blog/15",
            "status": "Enabled"
        },
        {
            "id": 14,
            "date_time": "11/04/2022",
            "title": "Personal Loans Are Here To Finance Your Dreams.",
            "summary": "The secured personal loans are offered based on a collateral security such as car, house...",
            "body": "<div>Sample HTML Content</div>",
            "poster": "blog-post-3.png",
            "author": "Post By Hans Murazik",
            "category": "Account",
            "url": "/blog/14",
            "status": "Enabled"
        },
        {
            "id": 13,
            "date_time": "19/04/2022",
            "title": "How Do Unsecured Homeowner Loans Work?",
            "summary": "There are usually two kinds of loans: secured loans, and unsecured loans.",
            "body": "<div>Sample HTML Content</div>",
            "poster": "blog-post-1.png",
            "author": "Post By Hans Murazik",
            "category": "Card",
            "url": "/blog/13",
            "status": "Enabled"
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"blog.ts",groupTitle:"blog"},{type:"post",url:"/api/card/activate",title:"activate",description:"<p>Active an assigned physical card.</p>",name:"activate",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!1,field:"otp_code",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "id": 126,
    "otp_code": "123456"
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 209,
    "success": true,
    "message": "Card has been activated successfully.",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"post",url:"/api/card/card_to_card",title:"card_to_card",description:"<p>Send money from a card to another.</p>",name:"card_to_card",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"from_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!1,field:"to_card_number",isArray:!1,description:""},{group:"Parameter",type:"number",optional:!1,field:"amount",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"otp_code",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "from_id": 35,
    "to_card_number": "1234567890123456",
    "amount": 10.0,
    "otp_code": 123456
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
   "id": 197,
    "success": true,
    "message": "Operation was successful. Your new balance: 75.00 USD.",
    "value": {
        "id": 4,
        "date_time": "20/01/2023 16:00",
        "customer_id": 132,
        "account_id": 230,
        "first_name": "John",
        "last_name": "Doe",
        "initial_balance": 50.0,
        "balance": 75.0,
        "balance_update": "20/01/2023 16:10",
        "currency": "USD",
        "address_line_1": "No 25, Wall Street",
        "address_line_2": "",
        "city": "London",
        "state": "LN",
        "country": 840,
        "zip": 10122,
        "phone": "441234567890",
        "email": "it@zedpay.com",
        "card_type": "Physical",
        "network": "Visa",
        "card_number": "4606660590009300",
        "card_exp_mth": "01",
        "card_exp_year": "2025",
        "card_cvv": "745",
        "pin": "",
        "status": "Active"
    }
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"get",url:"/api/card/commissions",title:"commissions",description:"<p>Get a list of commissions on card actions.</p>",name:"commissions",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{examples:[{title:"Success-Example:",content:`{
    "id": 204,
    "success": true,
    "message": "",
    "value": {
        "virtual_issue": 20.0,
        "virtual_load": 10.0,
        "virtual_unload": 11.0,
        "virtual_maintenance": 3.0,
        "physical_issue": 15.0,
        "physical_load": 15.0,
        "physical_unload": 4.0,
        "physical_maintenance": 3.0
    }
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"get",url:"/api/card/features",title:"features",description:"<p>Get a list of card features.</p>",name:"features",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{examples:[{title:"Success-Example:",content:`{
    "id": 198,
    "success": true,
    "message": "",
    "value": {
        "visa_physical": [
            {
                "Key": "Maintenance Fee",
                "Value": "Free"
            },
            {
                "Key": "ATM Withdrawal",
                "Value": "%2.5"
            },
            {
                "Key": "Daily Online Limit",
                "Value": "$10,000"
            }
        ],
        "visa_virtual": [
            {
                "Key": "Maintenance Fee",
                "Value": "Free"
            },
            {
                "Key": "ATM Withdrawal",
                "Value": "$1.5"
            },
            {
                "Key": "Daily Online Limit",
                "Value": "$4000"
            }
        ],
        "master_virtual": [
            {
                "Key": "Maintenance Fee",
                "Value": "Free"
            },
            {
                "Key": "ATM Withdrawal",
                "Value": "%1.2"
            },
            {
                "Key": "Daily Online Limit",
                "Value": "$3000"
            }
        ],
        "visa_physical_card": "/files/images/visa-card.png",
        "visa_virtual_card": "/files/images/visa-card.png",
        "master_virtual_card": "/files/images/master-card.png",
        "new_card": "/files/images/new-card.png"
    }
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"get",url:"/api/card/get_balance",title:"get_balance",description:"<p>Get updated balance of a card.</p>",name:"get_balance",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"?id=1",type:"text"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 188,
    "success": true,
    "message": "",
    "value": {
        "id": 4,
        "date_time": "20/01/2023 16:00",
        "customer_id": 132,
        "account_id": 230,
        "first_name": "John",
        "last_name": "Doe",
        "initial_balance": 50.0,
        "balance": 75.0,
        "balance_update": "20/01/2023 16:13",
        "currency": "USD",
        "address_line_1": "No 25, Wall Street",
        "address_line_2": "",
        "city": "London",
        "state": "LN",
        "country": 840,
        "zip": 10122,
        "phone": "441234567890",
        "email": "it@zedpay.com",
        "card_type": "Virtual",
        "network": "Visa",
        "card_number": "4601666590009558",
        "card_exp_mth": "01",
        "card_exp_year": "2025",
        "card_cvv": "755",
        "pin": "",
        "status": "Active"
    }
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"get",url:"/api/card/get_cvv",title:"get_cvv",description:"<p>Get card's CVV2.</p>",name:"get_cvv",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"?id=1",type:"text"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 206,
    "success": true,
    "message": "",
    "value": "013"
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"get",url:"/api/card/get_pin",title:"get_pin",description:"<p>Get PIN code of a physical card.</p>",name:"get_pin",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"?id=1",type:"text"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 194,
    "success": true,
    "message": "",
    "value": "1234"
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"post",url:"/api/card/issue_virtual_card",title:"issue_virtual_card",description:"<p>Issue a new virtual card.</p>",name:"issue_virtual_card",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"customer_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!1,field:"surname",isArray:!1,description:""},{group:"Parameter",type:"number",optional:!1,field:"amount",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"name",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"address_line1",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"city",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"state",isArray:!1,description:""},{group:"Parameter",type:"number",optional:!1,field:"country",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!1,field:"zip",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"phone",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"email",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"network",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"referral_code",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "customer_id": 132,
    "surname": "Doe",
    "amount": 100,
    "name": "John",
    "address_line1": "No 25, Wall Street",
    "city": "London",
    "state": "LN",
    "country": 840,
    "zip": "10122",
    "phone": "441234567890",
    "email": "it@zedpay.com",
    "network": "Visa",
    "referral_code": ""
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 186,
    "success": true,
    "message": "",
    "value": {
        "id": 4,
        "date_time": "20/01/2023 16:00",
        "customer_id": 132,
        "account_id": 230,
        "first_name": "John",
        "last_name": "Doe",
        "initial_balance": 50.0,
        "balance": 50.0,
        "balance_update": "20/01/2023 16:00",
        "currency": "USD",
        "address_line_1": "No 25, Wall Street",
        "address_line_2": "",
        "city": "London",
        "state": "LN",
        "country": 840,
        "zip": "10122",
        "phone": "441234567890",
        "email": "it@zedpay.com",
        "card_type": "Virtual",
        "network": "Visa",
        "card_number": "4600080590009000",
        "card_exp_mth": "01",
        "card_exp_year": "2024",
        "card_cvv": "715",
        "pin": "",
        "status": "Active",
        "physical": null
    }
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"get",url:"/api/card/list",title:"list",description:"<p>List cards of specific user.</p>",name:"list",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"customer_id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"?customer_id=1",type:"text"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 190,
    "success": true,
    "message": "",
    "value": [
        {
            "id": 4,
            "date_time": "20/01/2023 16:00",
            "customer_id": 132,
            "account_id": 230,
            "first_name": "John",
            "last_name": "Doe",
            "initial_balance": 50.0,
            "balance": 75.0,
            "balance_update": "20/01/2023 16:13",
            "currency": "USD",
            "address_line_1": "No 25, Wall Street",
            "address_line_2": "",
            "city": "London",
            "state": "LN",
            "country": 840,
            "zip": 10122,
            "phone": "441234567890",
            "email": "it@zedpay.com",
            "card_type": "Virtual",
            "network": "Visa",
            "card_number": "4601380555509388",
            "card_exp_mth": "01",
            "card_exp_year": "2024",
            "card_cvv": "658",
            "pin": "",
            "status": "Active",
            "physical": null
        },
        {
            "id": 70,
            "date_time": "31/03/2023",
            "customer_id": 132,
            "account_id": 230,
            "first_name": "Alex",
            "last_name": "Petrov",
            "initial_balance": 50.0,
            "balance": 50.0,
            "balance_update": "19/04/2023 05:22",
            "currency": "USD",
            "address_line_1": "Number 26, Wall Street",
            "address_line_2": "",
            "city": "New York",
            "state": "US",
            "country": 840,
            "zip": "54545",
            "phone": "1234567890",
            "email": "it@zedpay.com",
            "card_type": "Physical",
            "network": "Visa",
            "card_number": "2000002400615001",
            "card_exp_mth": "--",
            "card_exp_year": "--",
            "card_cvv": "***",
            "pin": "Card Details",
            "status": "Active",
            "physical": {
                "info": {
                    "phone": "15162154878",
                    "gender_id": 1,
                    "birth_date": "1985-4-11"
                },
                "address": [
                    {
                        "id": 45,
                        "address_TypeId": 1,
                        "address_IssuedDate": "2022-01-16",
                        "address_LangId": 0,
                        "front_side": "/files/upload/20230405-053234-135-70692657ce5-0.png",
                        "back_side": "/files/upload/20230405-053234-135-fb0c84ec2e677d59ba4d-0.png"
                    }
                ],
                "id": [
                    {
                        "id": 45,
                        "idNumber": "Nyh5HHkc4",
                        "idExpDate": "2024-04-23",
                        "idIssueDate": "2014-04-23",
                        "idType": 0,
                        "idDocLang": 0,
                        "front_side": "/files/upload/20230405-053234-135-70d665e95d3f57-0.jpg",
                        "back_side": "/files/upload/20230405-053234-135-a33bafe9db53d7-0.jpg"
                    }
                ],
                "kyc_status": 3,
                "card_holder_id": 1001,
                "card_kit_number": 2000002400615001,
                "delivery_cost": 15.0,
                "initial_balance_loaded": true,
                "client_activation": true
            }
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"get",url:"/api/card/list_countries",title:"list_countries",description:"<p>Get a list of allowed countries.</p>",name:"list_countries",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{examples:[{title:"Success-Example:",content:`{
    "id": 185,
    "success": true,
    "message": "",
    "value": [
        {
            "name": "Afghanistan",
            "alpha_2": "AF",
            "alpha_3": "AFG",
            "country_code": "004",
            "iso_3166_2": "ISO 3166-2:AF",
            "region": "Asia",
            "sub_region": "Southern Asia",
            "intermediate_region": "",
            "region_code": "142",
            "sub_region_code": "034",
            "intermediate_region_code": ""
        },
        {
            "name": "\xC5land Islands",
            "alpha_2": "AX",
            "alpha_3": "ALA",
            "country_code": "248",
            "iso_3166_2": "ISO 3166-2:AX",
            "region": "Europe",
            "sub_region": "Northern Europe",
            "intermediate_region": "",
            "region_code": "150",
            "sub_region_code": "154",
            "intermediate_region_code": ""
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"post",url:"/api/card/load_physical_card",title:"load_physical_card",description:"<p>Add funds to physical card by USDZ wallet.</p>",name:"load_physical_card",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"number",optional:!1,field:"amount",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"otp_code",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "id": 4,
    "amount": 20.5,
    "otp_code": "123456"
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 195,
    "success": true,
    "message": "Operation was successful. Your new balance: 75.00 USD",
    "value": {
        "id": 4,
        "date_time": "20/01/2023 16:00",
        "customer_id": 132,
        "account_id": 230,
        "first_name": "John",
        "last_name": "Doe",
        "initial_balance": 50.0,
        "balance": 75.0,
        "balance_update": "20/01/2023 16:10",
        "currency": "USD",
        "address_line_1": "No 25, Wall Street",
        "address_line_2": "",
        "city": "London",
        "state": "LN",
        "country": 840,
        "zip": 10122,
        "phone": "441234567890",
        "email": "it@zedpay.com",
        "card_type": "Physical",
        "network": "Visa",
        "card_number": "4606660590009300",
        "card_exp_mth": "01",
        "card_exp_year": "2025",
        "card_cvv": "745",
        "pin": "",
        "status": "Active"
    }
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"post",url:"/api/card/load_virtual_card",title:"load_virtual_card",description:"<p>Add funds to virtual card by USDZ wallet.</p>",name:"load_virtual_card",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"number",optional:!1,field:"amount",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"otp_code",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "id": 4,
    "amount": 100,
    "otp_code": "123456"
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 187,
    "success": true,
    "message": "Operation was successful. Your new balance: 75.00 USD.",
    "value": {
        "id": 4,
        "date_time": "20/01/2023 16:00",
        "customer_id": 132,
        "account_id": 230,
        "first_name": "John",
        "last_name": "Doe",
        "initial_balance": 50.0,
        "balance": 75.0,
        "balance_update": "20/01/2023 16:10",
        "currency": "USD",
        "address_line_1": "No 25, Wall Street",
        "address_line_2": "",
        "city": "London",
        "state": "LN",
        "country": 840,
        "zip": "10122",
        "phone": "441234567890",
        "email": "it@zedpay.com",
        "card_type": "Virtual",
        "network": "Visa",
        "card_number": "4606660590009300",
        "card_exp_mth": "01",
        "card_exp_year": "2025",
        "card_cvv": "745",
        "pin": "",
        "status": "Active",
        "physical": null
    }
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"post",url:"/api/card/new_holder",title:"new_holder",description:"<p>Define a new card holder for bank.</p>",name:"new_holder",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"info",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"gender",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"birth_date",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "info": {
        "customer_id": 132,
        "surname": "Doe",
        "amount": 100,
        "name": "John",
        "address_line1": "No 25, Wall Street",
        "city": "London",
        "state": "LN",
        "country": 840,
        "zip": "10122",
        "phone": "1234567890",
        "email": "it@zedpay.com",
        "network": "Visa",
        "referral_code": ""
    },
    "gender": "Male",
    "birth_date": "2000-12-15"
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 191,
    "success": true,
    "message": "",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"post",url:"/api/card/set_pin",title:"set_pin",description:"<p>Set PIN code of a physical card.</p>",name:"set_pin",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!1,field:"PIN",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"otp_code",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
   "id": 1,
   "PIN": "1234",
   "otp_code": "123456"
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 193,
    "success": true,
    "message": "New PIN saved successfully.",
    "value": "Pin changed"
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"post",url:"/api/card/submit_kyc",title:"submit_kyc",description:"<p>Send holder's document to bank for verification.</p>",name:"submit_kyc",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"object",optional:!1,field:"id",isArray:!1,description:""},{group:"Parameter",type:"object",optional:!1,field:"address",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "id": {
        "id": 1,
        "idNumber": "H10203040",
        "idExpDate": "2025-12-16",
        "idIssueDate": "2018-12-19",
        "idType": "National_ID",
        "idDocLang": "English",
        "front_side": "/files/upload/front.jpg",
        "back_side": "/files/upload/back.jpg"
    },
    "address": {
        "id": 1,
        "address_TypeId": "Bank_Statement",
        "address_IssuedDate": "2021-12-15",
        "address_LangId": "English",
        "front_side": "/files/upload/front.jpg",
        "back_side": "/files/upload/back.jpg"
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 192,
    "success": true,
    "message": "Document has been uploaded successfully. One of our team will review your application in 24 hours.",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"get",url:"/api/card/transactions",title:"transactions",description:"<p>Get card transaction list. month and year are optional and only apply on physical cards.</p>",name:"transactions",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!1,field:"month",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"year",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:"?id=1&month=2&year=2022",type:"text"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 189,
    "success": true,
    "message": "",
    "value": [
        {
            "date_time": "1/22/2023_8:34:59_AM",
            "description": "Add50USD",
            "amount": "50.00",
            "auth_code": "358284"
        },
        {
            "date_time": "1/22/2023_8:34:57_AM",
            "description": "Online_Request",
            "amount": "0.00",
            "auth_code": null
        },
        {
            "date_time": "1/22/2023_8:34:57_AM",
            "description": null,
            "amount": "0.00",
            "auth_code": null
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"post",url:"/api/card/unload_physical_card",title:"unload_physical_card",description:"<p>Withdraw card balance.</p>",name:"unload_physical_card",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"number",optional:!1,field:"amount",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"otp_code",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "id": 4,
    "amount": 20.5,
    "otp_code": "123456"
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
   "id": 197,
    "success": true,
    "message": "Operation was successful. Your new balance: 75.00 USD.",
    "value": {
        "id": 4,
        "date_time": "20/01/2023 16:00",
        "customer_id": 132,
        "account_id": 230,
        "first_name": "John",
        "last_name": "Doe",
        "initial_balance": 50.0,
        "balance": 75.0,
        "balance_update": "20/01/2023 16:10",
        "currency": "USD",
        "address_line_1": "No 25, Wall Street",
        "address_line_2": "",
        "city": "London",
        "state": "LN",
        "country": 840,
        "zip": 10122,
        "phone": "441234567890",
        "email": "it@zedpay.com",
        "card_type": "Physical",
        "network": "Visa",
        "card_number": "4606660590009300",
        "card_exp_mth": "01",
        "card_exp_year": "2025",
        "card_cvv": "745",
        "pin": "",
        "status": "Active"
    }
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"post",url:"/api/card/unload_virtual_card",title:"unload_virtual_card",description:"<p>Withdraw card balance.</p>",name:"unload_virtual_card",group:"card",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"number",optional:!1,field:"amount",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"otp_code",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "id": 4,
    "amount": 100,
    "otp_code": "123456"
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 196,
    "success": true,
    "message": "Operation was successful. Your new balance: 75.00 USD.",
    "value": {
        "id": 4,
        "date_time": "20/01/2023 16:00",
        "customer_id": 132,
        "account_id": 230,
        "first_name": "John",
        "last_name": "Doe",
        "initial_balance": 50.0,
        "balance": 75.0,
        "balance_update": "20/01/2023 16:10",
        "currency": "USD",
        "address_line_1": "No 25, Wall Street",
        "address_line_2": "",
        "city": "London",
        "state": "LN",
        "country": 840,
        "zip": "10122",
        "phone": "441234567890",
        "email": "it@zedpay.com",
        "card_type": "Virtual",
        "network": "Visa",
        "card_number": "4606660590009300",
        "card_exp_mth": "01",
        "card_exp_year": "2025",
        "card_cvv": "745",
        "pin": "",
        "status": "Active",
        "physical": null
    }
}`,type:"json"}]},version:"0.0.0",filename:"card.ts",groupTitle:"card"},{type:"post",url:"/api/category/create",title:"create",description:"<p>Create new category by admin.</p>",name:"create",group:"category",permission:[{name:"isAuth && isAdmin"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"type",isArray:!1,description:"<p>^(storie|ad|news)$</p>"},{group:"Parameter",type:"string",optional:!1,field:"name",isArray:!1,description:"<p>Length from 0 to 64</p>"},{group:"Parameter",type:"string",optional:!0,field:"image",isArray:!1,description:"<p>Length from 0 to 256, https link on png image</p>"},{group:"Parameter",type:"string",optional:!0,field:"description",isArray:!1,description:"<p>Length from 0 to 512</p>"}]}},version:"0.0.0",filename:"category.ts",groupTitle:"category",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"category",isArray:!1,description:"<p>ICategory</p>"}]},examples:[{title:"Success-Schema:",content:`{
    category: {
        id: string,
        apperDate: number,
        type: CategoryType,
        name: string,
        image?: string,
        description?: string
    }
}`,type:"json"}]}},{type:"delete",url:"/api/category/:categoryId",title:"deleteById",description:"<p>Delete exist category by admin.</p>",name:"deleteById",group:"category",permission:[{name:"isAuth && isAdmin"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"category.ts",groupTitle:"category"},{type:"post",url:"/api/category/edit/:categoryId",title:"editById",description:"<p>Edit exist category by admin.</p>",name:"editById",group:"category",permission:[{name:"isAuth && isAdmin"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"name",isArray:!1,description:"<p>Length from 0 to 64</p>"},{group:"Parameter",type:"string",optional:!0,field:"image",isArray:!1,description:"<p>Length from 0 to 256, https link on png image</p>"},{group:"Parameter",type:"string",optional:!0,field:"description",isArray:!1,description:"<p>Length from 0 to 512</p>"}]}},version:"0.0.0",filename:"category.ts",groupTitle:"category",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"category",isArray:!1,description:"<p>ICategory</p>"}]},examples:[{title:"Success-Schema:",content:`{
    category: {
        id: string,
        apperDate: number,
        type: CategoryType,
        name: string,
        image?: string,
        description?: string
    }
}`,type:"json"}]}},{type:"get",url:"/api/category/one/:categoryId",title:"getById",description:"<p>Get category by id.</p>",name:"getById",group:"category",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"category.ts",groupTitle:"category",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"category",isArray:!1,description:"<p>ICategory</p>"}]},examples:[{title:"Success-Schema:",content:`{
    category: {
        id: string,
        apperDate: number,
        type: CategoryType,
        name: string,
        image?: string,
        description?: string
    }
}`,type:"json"}]}},{type:"get",url:"/api/category/list/:index",title:"getList",description:"<p>Get categories list, pagination by index.</p>",name:"getList",group:"category",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:":index",isArray:!1,description:"<p>^\\d{1,9}$</p>"}]}},version:"0.0.0",filename:"category.ts",groupTitle:"category",success:{fields:{"Success 200":[{group:"Success 200",type:"object[]",optional:!1,field:"categories",isArray:!0,description:"<p>ICategory[]</p>"}]},examples:[{title:"Success-Schema:",content:`{
    categories: [
      {
        id: string,
        apperDate: number,
        type: CategoryType,
        name: string,
        image?: string,
        description?: string
      }
    ]
}`,type:"json"}]}},{type:"post",url:"/api/category/search",title:"search",description:"<p>Search and sort categories list using parameters.</p>",name:"search",group:"category",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"type",isArray:!1,description:"<p>^(storie|ad|news)$</p>"},{group:"Parameter",type:"string",optional:!0,field:"name",isArray:!1,description:"<p>Length from 0 to 64,</p>"},{group:"Parameter",type:"string",optional:!0,field:"sortBy",isArray:!1,description:"<p>^(apperDate|type|name)$</p>"},{group:"Parameter",type:"number",optional:!0,field:"sort",isArray:!1,description:"<p>1 or -1</p>"},{group:"Parameter",type:"number",optional:!0,field:"index",isArray:!1,description:"<p>Pagination by index</p>"}]}},version:"0.0.0",filename:"category.ts",groupTitle:"category",success:{fields:{"Success 200":[{group:"Success 200",type:"object[]",optional:!1,field:"categories",isArray:!0,description:"<p>ICategory[]</p>"}]},examples:[{title:"Success-Schema:",content:`{
    categories: [
      {
        id: string,
        apperDate: number,
        type: CategoryType,
        name: string,
        image?: string,
        description?: string
      }
    ]
}`,type:"json"}]}},{type:"post",url:"/api/currency/convert",title:"convert",description:"<p>Convert currency.</p>",name:"convert",group:"currency",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"from_currency_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"number",optional:!1,field:"to_currency_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"number",optional:!1,field:"from_amount",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "from_currency_id": 1,
    "to_currency_id": 3,
    "from_amount": 100.0
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 88,
    "success": true,
    "message": "",
    "value": {
        "from_currency_id": 1,
        "from_currency": "EUR",
        "to_currency_id": 3,
        "to_currency": "GBP",
        "from_amount": 100.0,
        "to_amount": 86.170212765957459,
        "rate": 0.86170212765957455
    }
}`,type:"json"}]},version:"0.0.0",filename:"currency.ts",groupTitle:"currency"},{type:"get",url:"/api/currency/list",title:"list",description:"<p>Get a list of currencies.</p>",name:"list",group:"currency",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"sort_by_price",isArray:!1,description:"<p>^(true|false)$</p>"}]},examples:[{title:"Request-Example:",content:"?sort_by_price=true",type:"text"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 72,
    "success": true,
    "message": "",
    "value": [
        {
            "id": 1,
            "name": "Euro",
            "code": "EUR",
            "currency_type": "Fiat",
            "color": "#000000",
            "country": "Europe",
            "flag": "/files/flags/EU.png",
            "sell": 1.05,
            "buy": 1.03,
            "swift_commission": 10.0,
            "withdrawal_commission": 0.5,
            "swap_commission": 1.0,
            "referral_bonus": 0.0,
            "minimum_input": 0.0,
            "maximum_output": 1000000.0,
            "details": [],
            "status": "Enabled"
        },
        {
            "id": 2,
            "name": "Ruble",
            "code": "RUB",
            "color": "#000000",
            "currency_type": "Fiat",
            "country": "Russian Federation",
            "flag": "/files/flags/RU.png",
            "sell": 95.0,
            "buy": 91.0,
            "swift_commission": 100.0,
            "withdrawal_commission": 0.5,
            "swap_commission": 1.0,
            "referral_bonus": 0.0,
            "minimum_input": 0.0,
            "maximum_output": 1000000.0,
            "details": [],
            "status": "Enabled"
        },
        {
            "id": 6,
            "name": "Tether",
            "code": "USDT",
            "color": "#000000",
            "currency_type": "Crypto",
            "country": "Global",
            "flag": "/files/flags/USDT.png",
            "sell": 1.0,
            "buy": 1.0,
            "swift_commission": 0,
            "withdrawal_commission": 0,
            "swap_commission": 0,
            "referral_bonus": 0.0,
            "minimum_input": 0.0,
            "maximum_output": 1000000.0,
            "details": [
                {
                    "blockchain": "ethereum",
                    "contract_address": "0x12345678901234567891",
                    "digits": 6,
                    "withdrawal_commission": 5.0,
                    "swap_commission": 0.3,
                    "max_auto_send": 10.0
                }
            ],
            "status": "Enabled"
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"currency.ts",groupTitle:"currency"},{type:"get",url:"/api/currency/list_to_open",title:"list_to_open",description:"<p>Get a list of currencies that a customer can open a wallet on.</p>",name:"list_to_open",group:"currency",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"customer_id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"?customer_id=1",type:"text"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 133,
    "success": true,
    "message": "",
    "value": [
        {
            "id": 1,
            "name": "Euro",
            "code": "EUR",
            "currency_type": "Fiat",
            "color": "#000000",
            "country": "Europe",
            "flag": "/files/flags/EU.png",
            "sell": 1.05,
            "buy": 1.03,
            "swift_commission": 10.0,
            "withdrawal_commission": 0.5,
            "swap_commission": 1.0,
            "referral_bonus": 0.0,
            "minimum_input": 0.0,
            "maximum_output": 1000000.0,
            "details": [],
            "status": "Enabled"
        },
        {
            "id": 2,
            "name": "Ruble",
            "code": "RUB",
            "color": "#000000",
            "currency_type": "Fiat",
            "country": "Russian Federation",
            "flag": "/files/flags/RU.png",
            "sell": 95.0,
            "buy": 91.0,
            "swift_commission": 100.0,
            "withdrawal_commission": 0.5,
            "swap_commission": 1.0,
            "referral_bonus": 0.0,
            "minimum_input": 0.0,
            "maximum_output": 1000000.0,
            "details": [],
            "status": "Enabled"
        },
        {
            "id": 6,
            "name": "Tether",
            "code": "USDT",
            "color": "#000000",
            "currency_type": "Crypto",
            "country": "Global",
            "flag": "/files/flags/USDT.png",
            "sell": 1.0,
            "buy": 1.0,
            "swift_commission": 0,
            "withdrawal_commission": 0,
            "swap_commission": 0,
            "referral_bonus": 0.0,
            "minimum_input": 0.0,
            "maximum_output": 1000000.0,
            "details": [
                {
                    "blockchain": "ethereum",
                    "contract_address": "0x12345678901234567891",
                    "digits": 6,
                    "withdrawal_commission": 5.0,
                    "swap_commission": 0.3,
                    "max_auto_send": 10.0
                }
            ],
            "status": "Enabled"
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"currency.ts",groupTitle:"currency"},{type:"get",url:"/api/currency/rates",title:"rates",description:"<p>Get a list of Exchange Rates.</p>",name:"rates",group:"currency",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{examples:[{title:"Success-Example:",content:`{
    "id": 73,
    "success": true,
    "message": "Last Update: 21/05/2022 08:48",
    "value": [
        {
            "Country": "United States",
            "Code": "USD",
            "Value": 1.0
        },
        {
            "Country": "Europe",
            "Code": "EUR",
            "Value": 0.94715279
        },
        {
            "Country": "United Kingdom",
            "Code": "GBP",
            "Value": 0.80190718
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"currency.ts",groupTitle:"currency"},{type:"get",url:"/api/currency/table",title:"table",description:"<p>Get a currencies status table as object.</p>",name:"table",group:"currency",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{examples:[{title:"Success-Example:",content:`{
    "table": {
        "bitcoin": {
            "prices": [
                [
                    1681776000000,
                    29467.459829260344
                ],
                [
                    1681862400000,
                    30365.904167541412
                ]
            ],
            "market_caps": [
                [
                    1681776000000,
                    569958059900.5195
                ],
                [
                    1681862400000,
                    587730212230.9563
                ]
            ],
            "total_volumes": [
                [
                    1681776000000,
                    16771824487.579357
                ],
                [
                    1681862400000,
                    18078539248.52104
                ]
            ]
        },
        "ethereum": {
            "prices": [
                [
                    1681776000000,
                    2077.5356646371833
                ],
                [
                    1681862400000,
                    2103.2788135921514
                ]
            ],
            "market_caps": [
                [
                    1681776000000,
                    247900016291.37604
                ],
                [
                    1681862400000,
                    251100187595.887
				]
			],
            "total_volumes": [
                [
                    1681776000000,
                    10818847581.540735
                ],
                [
                    1681862400000,
                    10121134598.143476
                ]
			]
		}
	}
}`,type:"json"}]},version:"0.0.0",filename:"currency.ts",groupTitle:"currency"},{type:"get",url:"/api/general/about",title:"about",description:"<p>Get contact info of the company.</p>",name:"about",group:"general",success:{examples:[{title:"Success-Example:",content:`{
    "id": 181,
    "success": true,
    "message": "",
    "value": {
        "title": "ZedPay",
        "content": "ZedPay helps over thousands customers achieve their financial goals by helping them save and invest with ease. Put that extra cash to use without putting it at risk with ZedPay.",
        "contact": [
            {
                "title": "Website",
                "link": "https://zed-pay.com",
                "type": 1
            },
            {
                "title": "Phone",
                "link": "+901234567890",
                "type": 2
            },
            {
                "title": "Telegram",
                "link": "https://t.me",
                "type": 1
            },
            {
                "title": "Twitter",
                "link": "https://twitter.com",
                "type": 1
            }
        ]
    }
}`,type:"json"}]},version:"0.0.0",filename:"general.ts",groupTitle:"general"},{type:"get",url:"/api/general/faq",title:"faq",description:"<p>Get a list of FAQs.</p>",name:"faq",group:"general",parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"items",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"?items=50",type:"text"}]},success:{examples:[{title:"Success-Example:",content:`{
   "id": 18,
    "success": true,
    "message": "",
    "value": [
        {
            "question": "How do I locate the nearesty branch or ATM?",
            "answer": "If your card is missing, let us know immediately. We\u2019ll block your card right away send over a new one on the same day.To report a lost or stolen card, call us at (406) 555-0120."
        },
        {
            "question": "What do I do if I lose my card or it gets stolen?",
            "answer": "If your card is missing, let us know immediately. We\u2019ll block your card right away send over a new one on the same day.To report a lost or stolen card, call us at (406) 555-0120."
        },
        {
            "question": "What is your customer service number?",
            "answer": "If your card is missing, let us know immediately. We\u2019ll block your card right away send over a new one on the same day.To report a lost or stolen card, call us at (406) 555-0120."
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"general.ts",groupTitle:"general"},{type:"get",url:"/api/general/generate_qr_code",title:"generate_qr_code",description:"<p>Generate QR code from a string.</p>",name:"generate_qr_code",group:"general",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"text",isArray:!1,description:"<p>^\\w{2,1024}$</p>"}]},examples:[{title:"Request-Example:",content:"?text=0xe98dc4e6e924f7156fdfe125f921e4098fce0e54",type:"text"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 118,
    "success": true,
    "message": "",
    "value": "/files/upload/qr-e35fa7fd-1250-44ee-a277-a8117909d8bb.png"
}`,type:"json"}]},version:"0.0.0",filename:"general.ts",groupTitle:"general"},{type:"get",url:"/api/general/get_bank_accounts",title:"get_bank_accounts",description:"<p>Get a list of Zed-Pay bank accounts.</p>",name:"get_bank_accounts",group:"general",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{examples:[{title:"Success-Example:",content:`{
    "id": 129,
    "success": true,
    "message": "",
    "value": [
        {
            "currency_code": "USD",
            "account_holder_name": "Zed-Pay",
            "account_holder_country": "UK",
            "account_holder_address": "No 21, Sample St, London",
            "account_holder_email": "info@zed-pay.com",
            "swift_code": "SWFT1234",
            "bank_name": "Unibank",
            "bank_code": "BNK",
            "branch_code": "",
            "account_number": "1234567890",
            "bank_country": "UK",
            "bank_city": "London",
            "bank_address": "No 22, Sample St, London",
            "intermediary_bank_swift_code": "",
            "intermediary_bank_country": "",
            "remark": ""
        },
        {
            "currency_code": "EUR",
            "account_holder_name": "Zed-Pay",
            "account_holder_country": "UK",
            "account_holder_address": "No 21, Sample St, London",
            "account_holder_email": "info@zed-pay.com",
            "swift_code": "SWFT1234",
            "bank_name": "Unibank",
            "bank_code": "BNK",
            "branch_code": "",
            "account_number": "1234567891",
            "bank_country": "UK",
            "bank_city": "London",
            "bank_address": "No 22, Sample St, London",
            "intermediary_bank_swift_code": "",
            "intermediary_bank_country": "",
            "remark": ""
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"general.ts",groupTitle:"general"},{type:"get",url:"/api/general/get_commissions",title:"get_commissions",description:"<p>Get a list of service commissions.</p>",name:"get_commissions",group:"general",parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"view",isArray:!1,description:"<p>Boolean</p>"}]},examples:[{title:"Request-Example:",content:"?view=true",type:"text"}]},success:{examples:[{title:"Success-Example:",content:`{
   "id": 18,
    "success": true,
    "message": "",
    "value": [
        {
            "question": "How do I locate the nearesty branch or ATM?",
            "answer": "If your card is missing, let us know immediately. We\u2019ll block your card right away send over a new one on the same day.To report a lost or stolen card, call us at (406) 555-0120."
        },
        {
            "question": "What do I do if I lose my card or it gets stolen?",
            "answer": "If your card is missing, let us know immediately. We\u2019ll block your card right away send over a new one on the same day.To report a lost or stolen card, call us at (406) 555-0120."
        },
        {
            "question": "What is your customer service number?",
            "answer": "If your card is missing, let us know immediately. We\u2019ll block your card right away send over a new one on the same day.To report a lost or stolen card, call us at (406) 555-0120."
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"general.ts",groupTitle:"general"},{type:"get",url:"/api/general/get_escrow_types",title:"get_escrow_types",description:"<p>Get a list of allowed escrow types.</p>",name:"get_escrow_types",group:"general",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{examples:[{title:"Success-Example:",content:`{
    "id": 98,
    "success": true,
    "message": "",
    "value": [
        {
            "order": 1,
            "title": "Domain Name"
        },
        {
            "order": 2,
            "title": "General Merchandise"
        },
        {
            "order": 3,
            "title": "Motor Vehicle"
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"general.ts",groupTitle:"general"},{type:"get",url:"/api/general/get_local_banks",title:"get_local_banks",description:"<p>Get a list if local banks. Filter is optional.</p>",name:"get_local_banks",group:"general",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"country_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!1,field:"currency_code",isArray:!1,description:"<p>^\\w{2,8}$</p>"}]},examples:[{title:"Request-Example:",content:"?country_id=176&currency_code=US",type:"text"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 202,
    "success": true,
    "message": "",
    "value": [
        {
            "id": 2,
            "country_id": 176,
            "country_name": "Poland",
            "currency_code": "EUR",
            "bank_name": "Alfa Bank"
        },
        {
            "id": 3,
            "country_id": 176,
            "country_name": "Poland",
            "currency_code": "EUR",
            "bank_name": "Beta Bank"
        },
        {
            "id": 4,
            "country_id": 176,
            "country_name": "Poland",
            "currency_code": "EUR",
            "bank_name": "New Bank"
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"general.ts",groupTitle:"general"},{type:"get",url:"/api/general/get_shipping_methods",title:"get_shipping_methods",description:"<p>Get a list of available shipping methods.</p>",name:"get_shipping_methods",group:"general",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{examples:[{title:"Success-Example:",content:`{
    "id": 100,
    "success": true,
    "message": "",
    "value": [
        {
            "order": 1,
            "title": "Standard Shipping"
        },
        {
            "order": 2,
            "title": "Cargo Shipping"
        },
        {
            "order": 3,
            "title": "No Shipping"
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"general.ts",groupTitle:"general"},{type:"get",url:"/api/general/get_withdraw_types",title:"get_withdraw_types",description:"<p>Get a list of available withdraw types.</p>",name:"get_withdraw_types",group:"general",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{examples:[{title:"Success-Example:",content:`{
    "id": 90,
    "success": true,
    "message": "",
    "value": [
        {
            "order": 1,
            "title": "Domestic Wires"
        },
        {
            "order": 2,
            "title": "Wire Transfer"
        },
        {
            "order": 3,
            "title": "E-Wallet"
        },
        {
            "order": 4,
            "title": "Cash"
        }
   ]
}`,type:"json"}]},version:"0.0.0",filename:"general.ts",groupTitle:"general"},{type:"get",url:"/api/general/list_countries",title:"list_countries",description:"<p>Get a list of countries.</p>",name:"list_countries",group:"general",success:{examples:[{title:"Success-Example:",content:`{
   "id": 34,
    "success": true,
    "message": "",
    "value": [
        {
            "id": 1,
            "name": "Afghanistan",
            "flag": "/files/flags/AF.png",
            "phone_prefix": "93",
            "alpha_2": "AF",
            "alpha_3": "AFG"
        },
        {
            "id": 249,
            "name": "\xC5land Islands",
            "flag": "/files/flags/AX.png",
            "phone_prefix": "358",
           "alpha_2": "AX",
            "alpha_3": "ALA"
        },
        {
            "id": 2,
            "name": "Albania",
            "flag": "/files/flags/AL.png",
           "phone_prefix": "355",
            "alpha_2": "AL",
            "alpha_3": "ALB"
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"general.ts",groupTitle:"general"},{type:"get",url:"/api/general/list_document_types",title:"list_document_types",description:"<p>Get a list of acceptable document types.</p>",name:"list_document_types",group:"general",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{examples:[{title:"Success-Example:",content:`{
    "id": 36,
    "success": true,
    "message": "",
    "value": [
        {
            "mandatory": true,
            "order": 1,
            "title": "Passport"
        },
        {
            "mandatory": false,
            "order": 2,
            "title": "National ID"
        },
        {
            "mandatory": false,
            "order": 3,
            "title": "Residence Permit"
        }
   ]
}`,type:"json"}]},version:"0.0.0",filename:"general.ts",groupTitle:"general"},{type:"get",url:"/api/general/local_banks_summary",title:"local_banks_summary",description:"<p>Get a list of available countries and cities.</p>",name:"local_banks_summary",group:"general",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{examples:[{title:"Success-Example:",content:`{
    "id": 205,
    "success": true,
    "message": "",
    "value": [
        {
            "country_id": 31,
            "country_name": "Brazil",
            "currency_codes": [
                "BRL"
            ]
        },
        {
            "country_id": 100,
            "country_name": "Hong Kong",
            "currency_codes": [
                "HKD"
            ]
        },
        {
            "country_id": 112,
            "country_name": "Japan",
            "currency_codes": [
                "JPY"
            ]
        },
        {
            "country_id": 200,
            "country_name": "Singapore",
            "currency_codes": [
                "SGD"
            ]
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"general.ts",groupTitle:"general"},{type:"get",url:"/api/general/search_banks",title:"search_banks",description:"<p>Get a list of banks from a specific country.</p>",name:"search_banks",group:"general",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"swift_country_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!1,field:"query",isArray:!1,description:"<p>^\\w{2,32}$</p>"}]},examples:[{title:"Request-Example:",content:"?swift_country_id=420&query=bank",type:"text"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 106,
    "success": true,
    "message": "",
    "value": [
        {
            "id": 20,
            "bank": "AGRICULTURAL BANK OF CHINA(DUBAI BRANCH)",
            "city": "DUBAI",
            "branch": null,
            "swift_code": "ABOCAEAA",
            "TimeZone": 240,
            "TimeZoneName": "(UTC+04:00) Abu Dhabi, Muscat"
        },
        {
            "id": 25,
            "bank": "AL AHLI BANK OF KUWAIT K.S.C.P, DUBAI BRANCH",
            "city": "DUBAI",
            "branch": null,
            "swift_code": "ABKKAEAD",
            "TimeZone": 240,
            "TimeZoneName": "(UTC+04:00) Abu Dhabi, Muscat"
        },
        {
            "id": 46,
            "bank": "APEX FUND SERVICES (DUBAI) LTD",
            "city": "DUBAI",
            "branch": null,
            "swift_code": "APFSAEA1",
            "TimeZone": 240,
            "TimeZoneName": "(UTC+04:00) Abu Dhabi, Muscat"
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"general.ts",groupTitle:"general"},{type:"get",url:"/api/general/static_form_fields",title:"static_form_fields",description:"<p>Get field values of static forms.</p>",name:"static_form_fields",group:"general",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{examples:[{title:"Success-Example:",content:`{
    "id": 163,
    "success": true,
    "message": "",
    "value": {
        "visa_card": {
            "plan": [
                "Simple",
                "Preminum",
                "Golden"
            ],
            "type": [
                "Rechargeable",
                "Non Rechargeable"
            ],
            "initial_balance": [
                100,
                200,
                300,
                500,
                1000,
                2000,
                5000,
                10000
            ],
            "validation_time": [
                {
                    "Key": "1 Year",
                    "Value": "1"
                },
                {
                    "Key": "2 Years",
                    "Value": "2"
                },
                {
                    "Key": "3 Years",
                    "Value": "3"
                },
                {
                    "Key": "5 Years",
                    "Value": "4"
                }
            ]
        },
        "virtual_card": {
            "type": [
                "Visa",
                "Master",
                "American Express"
            ],
            "plan": [
                "Simple",
                "Preminum",
                "Golden"
            ],
            "rechargeable": [
                "Yes",
                "No"
            ],
            "initial_balance": [
                100,
                200,
                300,
                500,
                1000,
                2000,
                5000,
                10000
            ],
            "validation_time": [
               {
                    "Key": "1 Year",
                    "Value": "1"
                },
                {
                    "Key": "2 Years",
                    "Value": "2"
                },
                {
                    "Key": "3 Years",
                    "Value": "3"
                },
                {
                    "Key": "5 Years",
                    "Value": "4"
                }
            ]
       }
   }
}`,type:"json"}]},version:"0.0.0",filename:"general.ts",groupTitle:"general"},{type:"get",url:"/api/general/swift_countries",title:"swift_countries",description:"<p>Get a list of swift countries.</p>",name:"swift_countries",group:"general",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{examples:[{title:"Success-Example:",content:`{
    "id": 105,
    "success": true,
    "message": "",
    "value": [
        {
            "id": 422,
            "Country": "Afghanistan",
            "Country_Code": "AF",
            "Details": null,
            "Status": "Enabled"
        },
        {
           "id": 425,
            "Country": "Albania",
            "Country_Code": "AL",
            "Details": null,
            "Status": "Enabled"
        },
        {
            "id": 475,
            "Country": "Algeria",
            "Country_Code": "DZ",
            "Details": null,
            "Status": "Enabled"
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"general.ts",groupTitle:"general"},{type:"post",url:"/api/general/upload_file",title:"upload_file",description:"<p>Upload file(s) to server. You need to send your request body as form-data. (URLs are temporary)</p>",name:"upload_file",group:"general",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{examples:[{title:"Success-Example:",content:`{
    "id": 11,
    "success": true,
    "message": "File(s) uploaded.",
    "value": [
        {
            "Key": "contract.jpeg",
            "Value": "/files/upload/20220509-100151-1-0.jpeg"
        },
        {
            "Key": "tasks.txt",
            "Value": "/files/upload/20220509-100151-1-1.txt"
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"general.ts",groupTitle:"general"},{type:"get",url:"/api/key/generate",title:"generate",description:"<p>Generate infinite authorization token.</p>",name:"generate",group:"key",permission:[{name:"setDelay(60) && isAuth && isAdmin"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{fields:{"Success 200":[{group:"Success 200",type:"number",optional:!1,field:"user_type",isArray:!1,description:"<p>zedPay user type</p>"},{group:"Success 200",type:"string",optional:!1,field:"role",isArray:!1,description:"<p>Iternal user role</p>"},{group:"Success 200",type:"string",optional:!1,field:"access_token",isArray:!1,description:""},{group:"Success 200",type:"string",optional:!1,field:"token_type",isArray:!1,description:"<p>'Bearer'</p>"}]},examples:[{title:"Success-Example:",content:`{
    "user_type": 1,
    "role": "basic",
    "access_token": "veryverylongstring111///",
    "token_type": "Bearer"
}`,type:"json"}]},version:"0.0.0",filename:"key.ts",groupTitle:"key"},{type:"post",url:"/api/news/create",title:"create",description:"<p>Create new news by admin.</p>",name:"create",group:"news",permission:[{name:"isAuth && isAdmin"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"title",isArray:!1,description:"<p>Length from 0 to 64</p>"},{group:"Parameter",type:"string",optional:!0,field:"link",isArray:!1,description:"<p>Length from 0 to 256, https link</p>"},{group:"Parameter",type:"string",optional:!0,field:"video",isArray:!1,description:"<p>Length from 0 to 256, https link on video</p>"},{group:"Parameter",type:"string",optional:!0,field:"image",isArray:!1,description:"<p>Length from 0 to 256, https link on png image</p>"},{group:"Parameter",type:"string",optional:!0,field:"description",isArray:!1,description:"<p>Length from 0 to 512</p>"},{group:"Parameter",type:"boolean",optional:!0,field:"visible",isArray:!1,description:"<p>Default: false</p>"}]}},version:"0.0.0",filename:"news.ts",groupTitle:"news",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"news",isArray:!1,description:"<p>INews</p>"}]},examples:[{title:"Success-Schema:",content:`{
    news: {
        id: string,
        apperDate: number,
        title: string,
        category: string|ICategory,
        link?: string,
        video?: string,
        image?: string,
        description?: string,
        visible: boolean
    }
}`,type:"json"}]}},{type:"delete",url:"/api/news/:newsId",title:"deleteById",description:"<p>Delete exist news by admin.</p>",name:"deleteById",group:"news",permission:[{name:"isAuth && isAdmin"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"news.ts",groupTitle:"news"},{type:"post",url:"/api/news/edit/:newsId",title:"editById",description:"<p>Edit exist news by admin.</p>",name:"editById",group:"news",permission:[{name:"isAuth && isAdmin"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"title",isArray:!1,description:"<p>Length from 0 to 64</p>"},{group:"Parameter",type:"string",optional:!0,field:"link",isArray:!1,description:"<p>Length from 0 to 256, https link</p>"},{group:"Parameter",type:"string",optional:!0,field:"video",isArray:!1,description:"<p>Length from 0 to 256, https link on video</p>"},{group:"Parameter",type:"string",optional:!0,field:"image",isArray:!1,description:"<p>Length from 0 to 256, https link on png image</p>"},{group:"Parameter",type:"string",optional:!0,field:"description",isArray:!1,description:"<p>Length from 0 to 512</p>"},{group:"Parameter",type:"boolean",optional:!0,field:"visible",isArray:!1,description:"<p>Default: false</p>"}]}},version:"0.0.0",filename:"news.ts",groupTitle:"news",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"news",isArray:!1,description:"<p>INews</p>"}]},examples:[{title:"Success-Schema:",content:`{
    news: {
        id: string,
        apperDate: number,
        title: string,
        category: string|ICategory,
        link?: string,
        video?: string,
        image?: string,
        description?: string,
        visible: boolean
    }
}`,type:"json"}]}},{type:"get",url:"/api/news/one/:newsId",title:"getById",description:"<p>Get exist news by id.</p>",name:"getById",group:"news",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"news.ts",groupTitle:"news",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"news",isArray:!1,description:"<p>INews</p>"}]},examples:[{title:"Success-Schema:",content:`{
    news: {
        id: string,
        apperDate: number,
        title: string,
        category: string|ICategory,
        link?: string,
        video?: string,
        image?: string,
        description?: string,
        visible: boolean
    }
}`,type:"json"}]}},{type:"get",url:"/api/news/list/:index",title:"getList",description:"<p>Get news list, pagination by index.</p>",name:"getList",group:"news",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:":index",isArray:!1,description:"<p>^\\d{1,9}$</p>"}]}},version:"0.0.0",filename:"news.ts",groupTitle:"news",success:{fields:{"Success 200":[{group:"Success 200",type:"object[]",optional:!1,field:"news",isArray:!0,description:"<p>INews[]</p>"}]},examples:[{title:"Success-Schema:",content:`{
    news: [{
        id: string,
        apperDate: number,
        title: string,
        category: string|ICategory,
        link?: string,
        video?: string,
        image?: string,
        description?: string,
        visible: boolean
    }]
}`,type:"json"}]}},{type:"post",url:"/api/nft/bid",title:"bid",description:"<p>Offer to buy an NFT in auction. This method can also be used to edit the offer. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"bid",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/cancel_bid",title:"cancel_bid",description:"<p>Cancel an active bid. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"cancel_bid",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/change_contract_status",title:"change_contract_status",description:"<p>Change status of an NFT contract. Admin usage only. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"change_contract_status",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/change_follow_status",title:"change_follow_status",description:"<p>Follow or unfollow an NFT user. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"change_follow_status",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/change_like_status",title:"change_like_status",description:"<p>Like or dislike an NFT. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"change_like_status",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/change_plan",title:"change_plan",description:"<p>Subscribe to a new NFT plan. id is the NFT User ID parameter. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"change_plan",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/create",title:"create",description:"<p>Create a new NFT. new_contract_name and new_contract_symbol is mandatory if contract_id is 0. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"create",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/create_collection",title:"create_collection",description:"<p>Create a new collection. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"create_collection",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/create_contract",title:"create_contract",description:"<p>Create a new smart contract. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"create_contract",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/delete",title:"delete",description:"<p>Delete an NFT. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"delete",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/delete_collection",title:"delete_collection",description:"<p>Delete a collection. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"delete_collection",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/delete_contract",title:"delete_contract",description:"<p>Delete an NFT smart contract. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"delete_contract",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/delete_profile",title:"delete_profile",description:"<p>Delete NFT user profile. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"delete_profile",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/edit",title:"edit",description:"<p>Edit NFT parameters. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"edit",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/edit_collection",title:"edit_collection",description:"<p>Edit collection parameters. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"edit_collection",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/edit_user",title:"edit_user",description:"<p>Edit NFT profile of a user. Trend and badge parameters are for Admin usage only, logo and banner are optional. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"edit_user",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"get",url:"/api/nft/financial_report",title:"financial_report",description:"<p>Get NFT financial report for a specific period. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"financial_report",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/get_contract_cost",title:"get_contract_cost",description:"<p>Get the cost of deploying Smart Contracts. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"get_contract_cost",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"get",url:"/api/nft/get_plans",title:"get_plans",description:"<p>Get a list of subscription plans. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"get_plans",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"get",url:"/api/nft/list",title:"list",description:"<p>Get a list of NFTs. Filters are optional. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"list",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"get",url:"/api/nft/list_categories",title:"list_categories",description:"<p>Get a list of NFT categories to be registered with NFT Collections. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"list_categories",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"get",url:"/api/nft/list_collections",title:"list_collections",description:"<p>Get a list of NFT collections. Filters are optional. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"list_collections",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"get",url:"/api/nft/list_contracts",title:"list_contracts",description:"<p>Get a list of NFT contracts. Filter is optional. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"list_contracts",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"get",url:"/api/nft/list_users",title:"list_users",description:"<p>Get a list of NFT users. Filter is optional. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"list_users",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/login",title:"login",description:"<p>Login with MetaMask or WalletConnect Address. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"login",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/quick_transfer",title:"quick_transfer",description:"<p>Transfer NFT by default price. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"quick_transfer",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/register",title:"register",description:"<p>Create an NFT user. email, verification_code and password is not necessary when you are a customer and have a token. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"register",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/register_web3_transaction",title:"register_web3_transaction",description:"<p>Register a client side transaction created by MetaMask or WalletConnect. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"register_web3_transaction",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/renew_plan",title:"renew_plan",description:"<p>Renew NFT subscription plan. id is the NFT User ID parameter. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"renew_plan",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/review_bid",title:"review_bid",description:"<p>Accept or reject bid offers. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"review_bid",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/save_categories",title:"save_categories",description:"<p>Set a list of NFT categories. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"save_categories",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/save_plans",title:"save_plans",description:"<p>Define NFT Plans for subscribers. Admin usage only See https://zed-pay.com/api/v1/documentation for details.</p>",name:"save_plans",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/transfer",title:"transfer",description:"<p>Transfer an NFT to a new owner. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"transfer",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/transfer_out",title:"transfer_out",description:"<p>Transfer NFT to another address. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"transfer_out",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"get",url:"/api/nft/transfers",title:"transfers",description:"<p>Get a list of recent transfers. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"transfers",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/nft/update_contract_cost",title:"update_contract_cost",description:"<p>Update the cost of deploying Smart Contracts. See https://zed-pay.com/api/v1/documentation for details.</p>",name:"update_contract_cost",group:"nft",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"nft.ts",groupTitle:"nft"},{type:"post",url:"/api/storie/create",title:"create",description:"<p>Create new storie by admin.</p>",name:"create",group:"storie",permission:[{name:"isAuth && isAdmin"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"title",isArray:!1,description:"<p>Length from 0 to 64</p>"},{group:"Parameter",type:"string",optional:!1,field:"category",isArray:!1,description:"<p>Exist category id</p>"},{group:"Parameter",type:"string",optional:!0,field:"description",isArray:!1,description:"<p>Length from 0 to 512</p>"},{group:"Parameter",type:"boolean",optional:!0,field:"visible",isArray:!1,description:"<p>Default: false</p>"}]}},version:"0.0.0",filename:"storie.ts",groupTitle:"storie",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"storie",isArray:!1,description:"<p>IStorie</p>"}]},examples:[{title:"Success-Schema:",content:`{
    storie: {
         id: string,
         apperDate: number,
         title: string,
         category: string|ICategory,
         description?: string,
         visible: boolean,
         items: [
             {
                 video?: string,
                 image?: string,
                 duration: number,
                 position: number
             }
         ]
    }
}`,type:"json"}]}},{type:"delete",url:"/api/storie/edit/:storieId",title:"deleteById",description:"<p>Delete exist storie by admin.</p>",name:"deleteById",group:"storie",permission:[{name:"isAuth && isAdmin"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"storie.ts",groupTitle:"storie"},{type:"delete",url:"/api/storie/:storieId/items/:item_index",title:"deleteItemById",description:"<p>Delete item from exist storie by admin.</p>",name:"deleteItemById",group:"storie",permission:[{name:"isAuth && isAdmin"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:":item_index",isArray:!1,description:"<p>^\\d{1,3}$</p>"}]}},version:"0.0.0",filename:"storie.ts",groupTitle:"storie"},{type:"post",url:"/api/storie/edit/:storieId",title:"editById",description:"<p>Edit exist storie by admin.</p>",name:"editById",group:"storie",permission:[{name:"isAuth && isAdmin"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!0,field:"title",isArray:!1,description:"<p>Length from 0 to 64</p>"},{group:"Parameter",type:"string",optional:!0,field:"category",isArray:!1,description:"<p>Exist category id</p>"},{group:"Parameter",type:"string",optional:!0,field:"description",isArray:!1,description:"<p>Length from 0 to 512</p>"},{group:"Parameter",type:"boolean",optional:!0,field:"visible",isArray:!1,description:"<p>Default: false</p>"}]}},version:"0.0.0",filename:"storie.ts",groupTitle:"storie",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"storie",isArray:!1,description:"<p>IStorie</p>"}]},examples:[{title:"Success-Schema:",content:`{
    storie: {
         id: string,
         apperDate: number,
         title: string,
         category: string|ICategory,
         description?: string,
         visible: boolean,
         items: [
             {
                 video?: string,
                 image?: string,
                 duration: number,
                 position: number
             }
         ]
    }
}`,type:"json"}]}},{type:"get",url:"/api/storie/one/:storieId",title:"getById",description:"<p>Get storie by id.</p>",name:"getById",group:"storie",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"storie.ts",groupTitle:"storie",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"storie",isArray:!1,description:"<p>IStorie</p>"}]},examples:[{title:"Success-Schema:",content:`{
    storie: {
         id: string,
         apperDate: number,
         title: string,
         category: string|ICategory,
         description?: string,
         visible: boolean,
         items: [
             {
                 video?: string,
                 image?: string,
                 duration: number,
                 position: number
             }
         ]
    }
}`,type:"json"}]}},{type:"get",url:"/api/storie/list/:index",title:"getList",description:"<p>Get stories list, pagination by index.</p>",name:"getList",group:"storie",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:":index",isArray:!1,description:"<p>^\\d{1,9}$</p>"}]}},version:"0.0.0",filename:"storie.ts",groupTitle:"storie",success:{fields:{"Success 200":[{group:"Success 200",type:"object[]",optional:!1,field:"stories",isArray:!0,description:"<p>IStorie[]</p>"}]},examples:[{title:"Success-Schema:",content:`{
    stories: [{
         id: string,
         apperDate: number,
         title: string,
         category: string|ICategory,
         description?: string,
         visible: boolean,
         items: [
             {
                 video?: string,
                 image?: string,
                 duration: number,
                 position: number
             }
         ]
    }]
}`,type:"json"}]}},{type:"post",url:"/api/storie/set_item/:storieId/items/:item_index",title:"setItemById",description:"<p>Change or remove item from exist storie by admin.</p>",name:"setItemById",group:"storie",permission:[{name:"isAuth && isAdmin"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:":item_index",isArray:!1,description:"<p>^\\d{1,3}$</p>"},{group:"Parameter",type:"string",optional:!0,field:"video",isArray:!1,description:"<p>Length from 0 to 256, https link</p>"},{group:"Parameter",type:"string",optional:!0,field:"image",isArray:!1,description:"<p>Length from 0 to 256, https link on png image</p>"},{group:"Parameter",type:"number",optional:!1,field:"duration",isArray:!1,description:"<p>Milliseconds, integer number</p>"}]}},version:"0.0.0",filename:"storie.ts",groupTitle:"storie",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"storie",isArray:!1,description:"<p>IStorie</p>"}]},examples:[{title:"Success-Schema:",content:`{
    storie: {
         id: string,
         apperDate: number,
         title: string,
         category: string|ICategory,
         description?: string,
         visible: boolean,
         items: [
             {
                 video?: string,
                 image?: string,
                 duration: number,
                 position: number
             }
         ]
    }
}`,type:"json"}]}},{type:"post",url:"/api/storie/set_positions/:storieId/items",title:"setPositionsById",description:"<p>Bulk change items positions in exist storie by admin.</p>",name:"setPositionsById",group:"storie",permission:[{name:"isAuth && isAdmin"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number[]",optional:!1,field:"positions",isArray:!0,description:"<p>Array of unique integer numbers</p>"}]}},version:"0.0.0",filename:"storie.ts",groupTitle:"storie",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"storie",isArray:!1,description:"<p>IStorie</p>"}]},examples:[{title:"Success-Schema:",content:`{
    storie: {
         id: string,
         apperDate: number,
         title: string,
         category: string|ICategory,
         description?: string,
         visible: boolean,
         items: [
             {
                 video?: string,
                 image?: string,
                 duration: number,
                 position: number
             }
         ]
    }
}`,type:"json"}]}},{type:"post",url:"/api/ticket/change",title:"change",description:"<p>Change status or delete a ticket.</p>",name:"change",group:"ticket",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!1,field:"status",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "id": 3,
    "status": "Closed"
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 55,
    "success": true,
    "message": "Ticket updated!",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"ticket.ts",groupTitle:"ticket"},{type:"get",url:"/api/ticket/list",title:"list",description:"<p>Get a list of tickets.</p>",name:"list",group:"ticket",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"items",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!1,field:"user_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"?items=20&user_id=1&id=2",type:"text"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 56,
    "success": true,
    "message": "",
    "value": [
        {
            "id": 5,
            "date_time": "17/05/2022 13:17",
            "direction": "ClientToCompany",
            "customer_id": 2,
            "customer_email": "someoneexample.com",
            "customer_name": "John Doe",
            "department": "Billing",
            "subject": "Invoice #133",
            "messages": [
                {
                    "date_time": "17/05/2022 13:17",
                    "direction": "ClientToCompany",
                    "name": "John Doe",
                    "message": "My bank account has been charged twice!",
                    "files": [
                        "/files/upload/account.jpg"
                    ]
                },
                {
                    "date_time": "17/05/2022 13:17",
                    "direction": "CompanyToClient",
                    "name": "Makan M.",
                    "message": "Please send a sceenshot frm your account. Thank you.",
                    "files": []
                }
            ],
            "last_update": "17/05/2022 13:17",
            "status": "Completed",
            "response_status": "Waiting For Client"
        },
        {
            "id": 4,
            "date_time": "17/05/2022 13:14",
            "direction": "CompanyToClient",
            "customer_id": 2,
            "customer_email": "someoneexample.com",
            "customer_name": "John Doe",
            "department": "IT",
            "subject": "Withdrawal",
            "messages": [
                {
                    "date_time": "17/05/2022 13:14",
                    "direction": "CompanyToClient",
                    "name": "Makan M.",
                    "message": "Your lastest deposit has been rejected. Could you please check that?",
                    "files": [
                        "/files/upload/ticket.jpg"
                    ]
                },
                {
                    "date_time": "17/05/2022 13:14",
                    "direction": "ClientToCompany",
                    "name": "Jogn Doe",
                    "message": "Our billing department is checking the account.",
                    "files": []
                }
            ],
            "last_update": "17/05/2022 13:14",
            "status": "In Progress",
            "response_status": "Waiting For Support"
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"ticket.ts",groupTitle:"ticket"},{type:"get",url:"/api/ticket/list_departments",title:"list_departments",description:"<p>Get a list of departments for Ticket support.</p>",name:"list_departments",group:"ticket",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{examples:[{title:"Success-Example:",content:`{
    "id": 58,
    "success": true,
    "message": "",
    "value": [
        {
            "order": 1,
            "title": "Billing"
        },
        {
            "order": 2,
            "title": "Support"
        },
        {
            "order": 3,
            "title": "Other"
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"ticket.ts",groupTitle:"ticket"},{type:"post",url:"/api/ticket/open",title:"open",description:"<p>Open a new ticket.</p>",name:"open",group:"ticket",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"customer_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!1,field:"department",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"subject",isArray:!1,description:""},{group:"Parameter",type:"object[]",optional:!1,field:"messages",isArray:!0,description:""}]},examples:[{title:"Request-Example:",content:`{
    "customer_id": 1,
    "department": "IT",
    "subject": "Withdrawal",
    "messages": [
        {
            "message": "My lastest withdrawal request has been rejected. Could you please check that?",
            "files": [
                "/files/upload/ticket.jpg"
            ]
        }
    ]
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 53,
    "success": true,
    "message": "New ticket created.",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"ticket.ts",groupTitle:"ticket"},{type:"post",url:"/api/ticket/reply",title:"reply",description:"<p>Add a new message to ticket.</p>",name:"reply",group:"ticket",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"messages",isArray:!0,description:""}]},examples:[{title:"Request-Example:",content:`{
    "id": 3,
    "messages": [
        {
            "message": "New update: I was able to complete my transaction.",
            "files": []
        }
    ]
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 54,
    "success": true,
    "message": "Ticket updated!",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"ticket.ts",groupTitle:"ticket"},{type:"get",url:"/api/user/active_sessions",title:"active_sessions",description:"<p>Get a list of active sessions (tokens). Filter is availble for Admin usage only.</p>",name:"active_sessions",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"user_type",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"user_id",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:"?user_type=Admin&user_id=2",type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 15,
    "success": true,
    "message": "",
    "value": [
        {
            "id": 1,
            "date_created": "08/05/2022 16:21",
            "user_type": "Admin",
            "user_id": 1,
            "session_id": "j30qm2l0m5cjj1ttpfx52wdc",
            "token": "bc8f3fb26fa07b8ddb326fa80651f6714b6f676b90c57d8c664498a701f8ad4e",
            "ip_address": "::1",
            "platform": "Web",
            "expiry": "2022-06-08T16:21:31",
            "firebase_id": ""
        },
        {
            "id": 2,
            "date_created": "08/05/2022 16:33",
            "user_type": "Client",
            "user_id": 2,
            "session_id": "j30qm2l0m5cjj1ttpfx52wd",
            "token": "bc8f3fb26fa07b8ddb326fa80651f6714b6f676b90c57d8c664498a701f8ad4f",
            "ip_address": "127.0.0.1",
            "platform": "iOS",
            "expiry": "2022-07-08T16:21:31",
            "firebase_id": ""
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"post",url:"/api/user/change_avatar",title:"change_avatar",description:"<p>Change user avatar.</p>",name:"change_avatar",group:"user",permission:[{name:"isAuth && setDelay(3)"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!0,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!1,field:"avatar",isArray:!1,description:"<p>Length from 4 to 128</p>"}]},examples:[{title:"Request-Example:",content:`{
    "id": 2,
    "avatar": "/files/upload/avatar.png"
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"user",isArray:!1,description:"<p>IUser</p>"}]},examples:[{title:"Success-Schema:",content:`{
    user: {
         //iternal part
         id: string,
         role: string,
         apperDate: number,
         // External required part
         user_id: number,
         first_name: string,
         last_name: string,
         gender: string,
         email: string,
         mobile: string,
         avatar: string,    
         otp_enabled: boolean,
         status: string,
         notification: {
             telegram: boolean,
             telegram_id: string,
             whatsapp: boolean,
             app: boolean,
             sms: boolean,
             email: boolean
         }
         // External additional part
         agent_id?: number,
         firebase_id?: string | null,
         user_type?: number,
         access?: number[],
         reg_date?: string,
         birth_date?: string,
         customer_type?: string,
         phone?: string,
         country?: {
             id: number,
             name: string,
             phone_prefix: string,
             alpha_2: string,
             alpha_3: string
         },
         city?: string,
         address?: string,
         remark?: string,
         documents?: any[],
         business_info?: {
             entity_name: string,
             entity_type: string,
             registration_number: string,
             date_of_registration: string,
             source_of_funds: string,
             nature_of_business: string,
             application_reason: string,
             website: string,
             file_certificate_of_incorporation: string,
             file_articles_of_association: string,
             file_register_of_directors: string,
             file_register_of_member: string,
             file_sanctions_questionnaire: string,
             file_letter_of_authorization: string,
             file_current_operating_status: string,
             file_Intermediaries: string,
             behalf: string,
             file_proof_of_address: string,
             file_Supplementary: string,
             admin_comment: string,
             status: number
         },
         api_key?: {
             active: boolean,
             api_key: string
         }
}`,type:"json"}]}},{type:"post",url:"/api/user/change_notifications_status",title:"change_notifications_status",description:"<p>Change status of a list of notifications to Read or Deleted.Change status of a list of notifications to Read or Deleted.</p>",name:"change_notifications_status",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{examples:[{title:"Request-Example:",content:`[
    {
        "id": 2,
        "status": "Read"
    },
    {
        "id": 1,
        "status": "Deleted"
    }
]`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 132,
    "success": true,
    "message": "Changes have been saved!",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"post",url:"/api/user/change_password",title:"change_password",description:"<p>Password change by user.</p>",name:"change_password",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"boolean",optional:!1,field:"delete_tokens",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!0,field:"otp_code",isArray:!1,description:"<p>^\\w{0,32}$</p>"}]},examples:[{title:"Request-Example:",content:`{
    "current_password": "Passwd111",
    "new_password": "Passwd222",
    "delete_tokens": true,
    "otp_code": "102030"
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 41,
    "success": true,
    "message": "Password changed.",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"get",url:"/api/user/close_session",title:"close_session",description:"<p>User logout.</p>",name:"close_session",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"post",url:"/api/user/confirm_email",title:"confirm_email",description:"<p>Confirm email by received code.</p>",name:"confirm_email",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!0,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"object",optional:!1,field:"otp",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"otp.email_code",isArray:!1,description:"<p>\\w{2,32}$</p>"}]},examples:[{title:"Request-Example:",content:`{
    "id": 126,
    "email": "turboemail.com"
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
   "id": 59,
   "success": true,
   "message": "Verification code sent!",
   "value": "562822"
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"post",url:"/api/user/confirm_mobile",title:"confirm_mobile",description:"<p>Confirm mobile by received code.</p>",name:"confirm_mobile",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!0,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"object",optional:!1,field:"otp",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"otp.mobile_code",isArray:!1,description:"<p>^\\w{2,32}$</p>"}]},examples:[{title:"Request-Example:",content:`{
    "id": 133,
    "otp": {
        "mobile_code": "123456"
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 102,
    "success": true,
    "message": "Thank you!",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"post",url:"/api/user/confirm_new_email",title:"confirm_new_email",description:"<p>Confirm an email before registration.</p>",name:"confirm_new_email",group:"user",parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"email",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"code",isArray:!1,description:"<p>^\\w{2,32}$</p>"}]},examples:[{title:"Request-Example:",content:`{
    "email": "someoneexample.com",
    "code": "123456"
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 142,
    "success": true,
    "message": "Thank you!",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"post",url:"/api/user/delete",title:"delete",description:"<p>Delete self user account</p>",name:"delete",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{fields:{"Success 200":[{group:"Success 200",type:"string",optional:!1,field:"id",isArray:!1,description:"<p>Your user id</p>"},{group:"Success 200",type:"string",optional:!1,field:"password",isArray:!1,description:"<p>Your password</p>"}]},examples:[{title:"Success-Example:",content:`{
    "message": "Your account has been deleted successfully."
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"post",url:"/api/user/disable_authenticator_code",title:"disable_authenticator_code",description:"<p>Disable two-step verification.</p>",name:"disable_authenticator_code",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"otp",isArray:!1,description:"<p>^\\w{2,32}$</p>"}]},examples:[{title:"Request-Example:",content:`{
    "otp": "567861"
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"user",isArray:!1,description:"<p>IUser</p>"}]},examples:[{title:"Success-Schema:",content:`{
    user: {
         //iternal part
         id: string,
         role: string,
         apperDate: number,
         // External required part
         user_id: number,
         first_name: string,
         last_name: string,
         gender: string,
         email: string,
         mobile: string,
         avatar: string,    
         otp_enabled: boolean,
         status: string,
         notification: {
             telegram: boolean,
             telegram_id: string,
             whatsapp: boolean,
             app: boolean,
             sms: boolean,
             email: boolean
         }
         // External additional part
         agent_id?: number,
         firebase_id?: string | null,
         user_type?: number,
         access?: number[],
         reg_date?: string,
         birth_date?: string,
         customer_type?: string,
         phone?: string,
         country?: {
             id: number,
             name: string,
             phone_prefix: string,
             alpha_2: string,
             alpha_3: string
         },
         city?: string,
         address?: string,
         remark?: string,
         documents?: any[],
         business_info?: {
             entity_name: string,
             entity_type: string,
             registration_number: string,
             date_of_registration: string,
             source_of_funds: string,
             nature_of_business: string,
             application_reason: string,
             website: string,
             file_certificate_of_incorporation: string,
             file_articles_of_association: string,
             file_register_of_directors: string,
             file_register_of_member: string,
             file_sanctions_questionnaire: string,
             file_letter_of_authorization: string,
             file_current_operating_status: string,
             file_Intermediaries: string,
             behalf: string,
             file_proof_of_address: string,
             file_Supplementary: string,
             admin_comment: string,
             status: number
         },
         api_key?: {
             active: boolean,
             api_key: string
         }
}`,type:"json"}]}},{type:"post",url:"/api/user/edit_profile",title:"edit_profile",description:"<p>Edit user profile.</p>",name:"edit_profile",group:"user",permission:[{name:"isAuth"}],parameter:{examples:[{title:"Request-Example:",content:`{
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "gender": "Male",
    "birth_date": "1997-05-12",
    "customer_type": "Individual",
    "email": "someoneexample.com",
    "mobile": "15169271234",
    "phone": "15161234567",
    "country_id": 236,
    "city": "New York",
    "address": "Times Square",
    "remark": "Comment by Admin",
    "status": "Disabled"
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"user",isArray:!1,description:"<p>IUser</p>"}]},examples:[{title:"Success-Schema:",content:`{
    user: {
         //iternal part
         id: string,
         role: string,
         apperDate: number,
         // External required part
         user_id: number,
         first_name: string,
         last_name: string,
         gender: string,
         email: string,
         mobile: string,
         avatar: string,    
         otp_enabled: boolean,
         status: string,
         notification: {
             telegram: boolean,
             telegram_id: string,
             whatsapp: boolean,
             app: boolean,
             sms: boolean,
             email: boolean
         }
         // External additional part
         agent_id?: number,
         firebase_id?: string | null,
         user_type?: number,
         access?: number[],
         reg_date?: string,
         birth_date?: string,
         customer_type?: string,
         phone?: string,
         country?: {
             id: number,
             name: string,
             phone_prefix: string,
             alpha_2: string,
             alpha_3: string
         },
         city?: string,
         address?: string,
         remark?: string,
         documents?: any[],
         business_info?: {
             entity_name: string,
             entity_type: string,
             registration_number: string,
             date_of_registration: string,
             source_of_funds: string,
             nature_of_business: string,
             application_reason: string,
             website: string,
             file_certificate_of_incorporation: string,
             file_articles_of_association: string,
             file_register_of_directors: string,
             file_register_of_member: string,
             file_sanctions_questionnaire: string,
             file_letter_of_authorization: string,
             file_current_operating_status: string,
             file_Intermediaries: string,
             behalf: string,
             file_proof_of_address: string,
             file_Supplementary: string,
             admin_comment: string,
             status: number
         },
         api_key?: {
             active: boolean,
             api_key: string
         }
}`,type:"json"}]}},{type:"get",url:"/api/user/get_authenticator_code",title:"get_authenticator_code",description:"<p>Enable two-step verification with Google Authenticator.</p>",name:"get_authenticator_code",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{examples:[{title:"Success-Example:",content:`{
    "id": 61,
    "success": true,
    "message": "",
    "value": {
        "AuthenticationCode": "b8e6365590",
        "AuthenticationBarCodeImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAUUcpN...8f0cY3vx/Rxje/H9HGJ37//B0uttPdBOYxsAAAAAElFTkSuQmCC",
        "AuthenticationManualCode": "MI4GKNRTGY2TKOJQ",
        "success": true
    }
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"get",url:"/api/user/get_intercom_user_hash/:platform",title:"get_intercom_user_hash",description:"<p>Generate user id hash for requested user.</p>",name:"get_intercom_user_hash",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"platform",isArray:!1,description:"<p>^(ios|android|web)$</p>"}]}},success:{fields:{"Success 200":[{group:"Success 200",type:"string",optional:!1,field:"userHash",isArray:!1,description:""}]}},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"get",url:"/api/user/get_my_zedauth_token",title:"get_my_zedauth_token",description:"<p>Get zedpay authorizaion token.</p>",name:"get_my_zedauth_token",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},success:{fields:{"Success 200":[{group:"Success 200",type:"string",optional:!1,field:"access_token",isArray:!1,description:""},{group:"Success 200",type:"string",optional:!1,field:"token_type",isArray:!1,description:""}]},examples:[{title:"Success-Example:",content:`{
    "access_token": "veryverylongstring111///",
    "token_type": ""
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"get",url:"/api/user/get_notifications",title:"get_notifications",description:"<p>Get a list of recent notifications.</p>",name:"get_notifications",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!1,field:"customer_id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"number",optional:!1,field:"items",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:"customer_id=132&items=10",type:"text"}]},success:{examples:[{title:"Success-Example:",content:` "id": 131,
 "success": true,
 "message": "",
 "value": [
     {
         "id": 2,
         "date_time": "12/08/2022 18:39",
         "customer_id": 132,
         "notification_type": "Info",
         "title": "Swap 101970",
         "message": "You have sent 200 EUR to your USD wallet.",
         "status": "New"
     },
     {
         "id": 1,
         "date_time": "12/08/2022 18:39",
         "customer_id": 132,
         "notification_type": "Info",
         "title": "Swap 101971",
         "message": "You have sent 400 EUR to your USD wallet.",
         "status": "New"
     }
]`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"post",url:"/api/user/login",title:"login",description:"<p>Login as user.</p>",name:"login",group:"user",permission:[{name:"setDelay(3)"}],parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"email",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!0,field:"otp",isArray:!1,description:"<p>^\\w{4,32}$</p>"},{group:"Parameter",type:"string",optional:!1,field:"platform",isArray:!1,description:"<p>^(iOS|android|web)$</p>"}]},examples:[{title:"Request-Example:",content:`{
    "email": "someoneexample.com",
    "password": "Psswrd1",
    "otp": "556670",
    "platform": "iOS"
}`,type:"json"}]},success:{fields:{"Success 200":[{group:"Success 200",type:"number",optional:!1,field:"user_type",isArray:!1,description:"<p>zedPay user type</p>"},{group:"Success 200",type:"string",optional:!1,field:"role",isArray:!1,description:"<p>Iternal user role</p>"},{group:"Success 200",type:"string",optional:!1,field:"access_token",isArray:!1,description:""},{group:"Success 200",type:"string",optional:!1,field:"token_type",isArray:!1,description:"<p>'Bearer'</p>"}]},examples:[{title:"Success-Example:",content:`{
    "user_type": 1,
    "role": "basic",
    "access_token": "veryverylongstring111///",
    "token_type": "Bearer"
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"post",url:"/api/user/register",title:"register",description:"<p>Register as a new user.</p>",name:"register",group:"user",parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"first_name",isArray:!1,description:"<p>Length from 0 to 32</p>"},{group:"Parameter",type:"string",optional:!1,field:"last_name",isArray:!1,description:"<p>Length from 0 to 32</p>"},{group:"Parameter",type:"number",optional:!1,field:"customer_type",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!1,field:"email",isArray:!1,description:""},{group:"Parameter",type:"number",optional:!1,field:"country_id",isArray:!1,description:"<p>Integer number. See general/list_countries</p>"},{group:"Parameter",type:"string",optional:!1,field:"referral_code",isArray:!1,description:"<p>^\\w{4,32}$</p>"}]},examples:[{title:"Request-Example:",content:`{
    "first_name": "John",
    "last_name": "Doe",
    "customer_type": 1,
    "email": "someoneexample.com",
    "password": "Pssw0rd111",
    "country_id": 236,
    "referral_code":""
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 37,
    "success": true,
    "message": "User has been created.",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"post",url:"/api/user/register_email",title:"register_email",description:"<p>Request a verification code on email.</p>",name:"register_email",group:"user",parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"email",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"platform",isArray:!1,description:"<p>^(iOS|android|web)$</p>"}]},examples:[{title:"Request-Example:",content:`{
    "email": "someoneexample.com",
    "platform": "web"
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 141,
    "success": true,
    "message": "Verification code sent!",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"post",url:"/api/user/remove_documents",title:"remove_documents",description:"<p>Remove a pending document from the list.</p>",name:"remove_documents",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!0,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"documents",isArray:!0,description:""},{group:"Parameter",type:"string",optional:!1,field:"documents.title",isArray:!1,description:"<p>File title 'Passport'</p>"},{group:"Parameter",type:"string",optional:!1,field:"documents.file",isArray:!1,description:"<p>File path like a '/files/upload/passport.jpg'</p>"}]},examples:[{title:"Request-Example:",content:`{
    "id": 2,
    "documents": [
        {
            "title": "Passport",
            "file": "/files/upload/passport.jpg"
        },
        {
            "title": "National ID",
            "file": "/files/upload/id.jpg"
        }
   ]
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 47,
    "success": true,
    "message": "Changes have been saved!",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"post",url:"/api/user/request_reset_password",title:"request_reset_password",description:"<p>Request password reset.</p>",name:"request_reset_password",group:"user",parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"email",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "email": "someoneexample.com"
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 50,
    "success": true,
    "message": "Verification code sent!",
    "value": {
        "code": "4bs40huzxq11c1lqk35zcsvq",
        "reset_url": "/reset?id=4bs40huzxq11c1lqk35zcsvq"
    }
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"post",url:"/api/user/reset_password",title:"reset_password",description:"<p>Password reset by user.</p>",name:"reset_password",group:"user",parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"email",isArray:!1,description:""},{group:"Parameter",type:"string",optional:!1,field:"code",isArray:!1,description:"<p>^\\w{2,32}$</p>"},{group:"Parameter",type:"boolean",optional:!1,field:"delete_tokens",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "email": "someoneexample.com",
    "code": "vvi1ivdrgenxbxippnzvwqdn",
    "new_password": "Pssword111",
    "delete_tokens": true
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 41,
    "success": true,
    "message": "Password changed.",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"post",url:"/api/user/set_firebase_id",title:"set_firebase_id",description:"<p>Set Firebase ID to receive app notifications.</p>",name:"set_firebase_id",group:"user",permission:[{name:"isAuth && setDelay(3)"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{examples:[{title:"Request-Example:",content:`{
    "firebase_id": "a92dcac91e00b41b5198-:"
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"user",isArray:!1,description:"<p>IUser</p>"}]},examples:[{title:"Success-Schema:",content:`{
    user: {
         //iternal part
         id: string,
         role: string,
         apperDate: number,
         // External required part
         user_id: number,
         first_name: string,
         last_name: string,
         gender: string,
         email: string,
         mobile: string,
         avatar: string,    
         otp_enabled: boolean,
         status: string,
         notification: {
             telegram: boolean,
             telegram_id: string,
             whatsapp: boolean,
             app: boolean,
             sms: boolean,
             email: boolean
         }
         // External additional part
         agent_id?: number,
         firebase_id?: string | null,
         user_type?: number,
         access?: number[],
         reg_date?: string,
         birth_date?: string,
         customer_type?: string,
         phone?: string,
         country?: {
             id: number,
             name: string,
             phone_prefix: string,
             alpha_2: string,
             alpha_3: string
         },
         city?: string,
         address?: string,
         remark?: string,
         documents?: any[],
         business_info?: {
             entity_name: string,
             entity_type: string,
             registration_number: string,
             date_of_registration: string,
             source_of_funds: string,
             nature_of_business: string,
             application_reason: string,
             website: string,
             file_certificate_of_incorporation: string,
             file_articles_of_association: string,
             file_register_of_directors: string,
             file_register_of_member: string,
             file_sanctions_questionnaire: string,
             file_letter_of_authorization: string,
             file_current_operating_status: string,
             file_Intermediaries: string,
             behalf: string,
             file_proof_of_address: string,
             file_Supplementary: string,
             admin_comment: string,
             status: number
         },
         api_key?: {
             active: boolean,
             api_key: string
         }
}`,type:"json"}]}},{type:"post",url:"/api/user/set_notifications",title:"set_notifications",description:"<p>Set notification types for a user.</p>",name:"set_notifications",group:"user",permission:[{name:"isAuth && setDelay(3)"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!0,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"object",optional:!1,field:"notification",isArray:!1,description:""},{group:"Parameter",type:"boolean",optional:!1,field:"notification.telegram",isArray:!1,description:""},{group:"Parameter",type:"boolean",optional:!1,field:"notification.whatsapp",isArray:!1,description:""},{group:"Parameter",type:"boolean",optional:!1,field:"notification.app",isArray:!1,description:""},{group:"Parameter",type:"boolean",optional:!1,field:"notification.sms",isArray:!1,description:""},{group:"Parameter",type:"boolean",optional:!1,field:"notification.email",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "id": 136,
    "notification": {
        "telegram": false,
        "whatsapp": false,
        "app": true,
        "sms": false,
        "email": true
    }
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"user",isArray:!1,description:"<p>IUser</p>"}]},examples:[{title:"Success-Schema:",content:`{
    user: {
         //iternal part
         id: string,
         role: string,
         apperDate: number,
         // External required part
         user_id: number,
         first_name: string,
         last_name: string,
         gender: string,
         email: string,
         mobile: string,
         avatar: string,    
         otp_enabled: boolean,
         status: string,
         notification: {
             telegram: boolean,
             telegram_id: string,
             whatsapp: boolean,
             app: boolean,
             sms: boolean,
             email: boolean
         }
         // External additional part
         agent_id?: number,
         firebase_id?: string | null,
         user_type?: number,
         access?: number[],
         reg_date?: string,
         birth_date?: string,
         customer_type?: string,
         phone?: string,
         country?: {
             id: number,
             name: string,
             phone_prefix: string,
             alpha_2: string,
             alpha_3: string
         },
         city?: string,
         address?: string,
         remark?: string,
         documents?: any[],
         business_info?: {
             entity_name: string,
             entity_type: string,
             registration_number: string,
             date_of_registration: string,
             source_of_funds: string,
             nature_of_business: string,
             application_reason: string,
             website: string,
             file_certificate_of_incorporation: string,
             file_articles_of_association: string,
             file_register_of_directors: string,
             file_register_of_member: string,
             file_sanctions_questionnaire: string,
             file_letter_of_authorization: string,
             file_current_operating_status: string,
             file_Intermediaries: string,
             behalf: string,
             file_proof_of_address: string,
             file_Supplementary: string,
             admin_comment: string,
             status: number
         },
         api_key?: {
             active: boolean,
             api_key: string
         }
}`,type:"json"}]}},{type:"post",url:"/api/user/submit_documents",title:"submit_documents",description:"<p>Submit a list of ID documents to get verified.</p>",name:"submit_documents",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!0,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"object[]",optional:!1,field:"documents",isArray:!0,description:""},{group:"Parameter",type:"string",optional:!1,field:"documents.title",isArray:!1,description:"<p>File title 'Passport'</p>"},{group:"Parameter",type:"string",optional:!1,field:"documents.file",isArray:!1,description:"<p>File path like a '/files/upload/passport.jpg'</p>"}]},examples:[{title:"Request-Example:",content:`{
    "id": 2,
    "documents": [
        {
            "title": "Passport",
            "file": "/files/upload/passport.jpg"
        },
        {
            "title": "National ID",
            "file": "/files/upload/id.jpg"
        }
   ]
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 47,
    "success": true,
    "message": "Document(s) has been submitted.",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"post",url:"/api/user/verify_authenticator_code",title:"verify_authenticator_code",description:"<p>Confirm two-step verification setup.</p>",name:"verify_authenticator_code",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"string",optional:!1,field:"otp",isArray:!1,description:"<p>^\\w{2,32}$</p>"}]},examples:[{title:"Request-Example:",content:`{
    "otp": "567861"
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"user",isArray:!1,description:"<p>IUser</p>"}]},examples:[{title:"Success-Schema:",content:`{
    user: {
         //iternal part
         id: string,
         role: string,
         apperDate: number,
         // External required part
         user_id: number,
         first_name: string,
         last_name: string,
         gender: string,
         email: string,
         mobile: string,
         avatar: string,    
         otp_enabled: boolean,
         status: string,
         notification: {
             telegram: boolean,
             telegram_id: string,
             whatsapp: boolean,
             app: boolean,
             sms: boolean,
             email: boolean
         }
         // External additional part
         agent_id?: number,
         firebase_id?: string | null,
         user_type?: number,
         access?: number[],
         reg_date?: string,
         birth_date?: string,
         customer_type?: string,
         phone?: string,
         country?: {
             id: number,
             name: string,
             phone_prefix: string,
             alpha_2: string,
             alpha_3: string
         },
         city?: string,
         address?: string,
         remark?: string,
         documents?: any[],
         business_info?: {
             entity_name: string,
             entity_type: string,
             registration_number: string,
             date_of_registration: string,
             source_of_funds: string,
             nature_of_business: string,
             application_reason: string,
             website: string,
             file_certificate_of_incorporation: string,
             file_articles_of_association: string,
             file_register_of_directors: string,
             file_register_of_member: string,
             file_sanctions_questionnaire: string,
             file_letter_of_authorization: string,
             file_current_operating_status: string,
             file_Intermediaries: string,
             behalf: string,
             file_proof_of_address: string,
             file_Supplementary: string,
             admin_comment: string,
             status: number
         },
         api_key?: {
             active: boolean,
             api_key: string
         }
}`,type:"json"}]}},{type:"post",url:"/api/user/verify_email",title:"verify_email",description:"<p>Request a verification code on email. Email is optional.</p>",name:"verify_email",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!0,field:"id",isArray:!1,description:"<p>Integer number</p>"},{group:"Parameter",type:"string",optional:!0,field:"email",isArray:!1,description:""}]},examples:[{title:"Request-Example:",content:`{
    "id": 126,
    "email": turboemail.com
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
   "id": 59,
   "success": true,
   "message": "Verification code sent!",
   "value": "562822"
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"post",url:"/api/user/verify_mobile",title:"verify_mobile",description:"<p>Request a verification code on mobile.</p>",name:"verify_mobile",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},parameter:{fields:{Parameter:[{group:"Parameter",type:"number",optional:!0,field:"id",isArray:!1,description:"<p>Integer number</p>"}]},examples:[{title:"Request-Example:",content:`{
    "id": 126
}`,type:"json"}]},success:{examples:[{title:"Success-Example:",content:`{
    "id": 101,
    "success": true,
    "message": "Verification code sent!",
    "value": null
}`,type:"json"}]},version:"0.0.0",filename:"user.ts",groupTitle:"user"},{type:"get",url:"/api/user/who_am_i",title:"who_am_i",description:"<p>Get current logged in user information.</p>",name:"who_am_i",group:"user",permission:[{name:"isAuth"}],header:{fields:{Header:[{group:"Header",type:"string",optional:!1,field:"Authorization",isArray:!1,description:"<p>Bearer <token></p>"}]}},version:"0.0.0",filename:"user.ts",groupTitle:"user",success:{fields:{"Success 200":[{group:"Success 200",type:"object",optional:!1,field:"user",isArray:!1,description:"<p>IUser</p>"}]},examples:[{title:"Success-Schema:",content:`{
    user: {
         //iternal part
         id: string,
         role: string,
         apperDate: number,
         // External required part
         user_id: number,
         first_name: string,
         last_name: string,
         gender: string,
         email: string,
         mobile: string,
         avatar: string,    
         otp_enabled: boolean,
         status: string,
         notification: {
             telegram: boolean,
             telegram_id: string,
             whatsapp: boolean,
             app: boolean,
             sms: boolean,
             email: boolean
         }
         // External additional part
         agent_id?: number,
         firebase_id?: string | null,
         user_type?: number,
         access?: number[],
         reg_date?: string,
         birth_date?: string,
         customer_type?: string,
         phone?: string,
         country?: {
             id: number,
             name: string,
             phone_prefix: string,
             alpha_2: string,
             alpha_3: string
         },
         city?: string,
         address?: string,
         remark?: string,
         documents?: any[],
         business_info?: {
             entity_name: string,
             entity_type: string,
             registration_number: string,
             date_of_registration: string,
             source_of_funds: string,
             nature_of_business: string,
             application_reason: string,
             website: string,
             file_certificate_of_incorporation: string,
             file_articles_of_association: string,
             file_register_of_directors: string,
             file_register_of_member: string,
             file_sanctions_questionnaire: string,
             file_letter_of_authorization: string,
             file_current_operating_status: string,
             file_Intermediaries: string,
             behalf: string,
             file_proof_of_address: string,
             file_Supplementary: string,
             admin_comment: string,
             status: number
         },
         api_key?: {
             active: boolean,
             api_key: string
         }
}`,type:"json"}]}}];const de={name:"Zedxion Mobile",version:"1.0.0",description:"API documentation",title:"Zedxion Mobile API",url:"https://test.batbank.online",sampleUrl:!1,defaultVersion:"0.0.0",apidoc:"0.3.0",generator:{name:"apidoc",time:"Wed Jul 31 2024 13:03:25 GMT+0300 (Eastern European Summer Time)",url:"https://apidocjs.com",version:"1.2.0"}};Xt();const Pe=p().compile(v()("#template-header").html()),xe=p().compile(v()("#template-footer").html()),re=p().compile(v()("#template-article").html()),_e=p().compile(v()("#template-compare-article").html()),ye=p().compile(v()("#template-generator").html()),ve=p().compile(v()("#template-project").html()),Ne=p().compile(v()("#template-sections").html()),we=p().compile(v()("#template-sidenav").html()),He={aloneDisplay:!1,showRequiredLabels:!1,withGenerator:!0,withCompare:!0};de.template=Object.assign(He,(le=de.template)!=null?le:{}),de.template.forceLanguage&&_t(de.template.forceLanguage);const $e=(0,a.groupBy)(Le,J=>J.group),Ge={};v().each($e,(J,j)=>{Ge[J]=(0,a.groupBy)(j,ne=>ne.name)});const ut=[];v().each(Ge,(J,j)=>{let ne=[];v().each(j,(ue,me)=>{const Ee=me[0].title;Ee&&ne.push(Ee.toLowerCase()+"#~#"+ue)}),ne.sort(),de.order&&(ne=ae(ne,de.order,"#~#")),ne.forEach(ue=>{const Ee=ue.split("#~#")[1];j[Ee].forEach(Ae=>{ut.push(Ae)})})}),Le=ut;let pt={};const sn={};let Ut={};Ut[de.version]=1,v().each(Le,(J,j)=>{pt[j.group]=1,sn[j.group]=j.groupTitle||j.group,Ut[j.version]=1}),pt=Object.keys(pt),pt.sort(),de.order&&(pt=q(sn,de.order)),Ut=Object.keys(Ut),Ut.sort(r().compare),Ut.reverse();const Tt=[];pt.forEach(J=>{Tt.push({group:J,isHeader:!0,title:sn[J]});let j="";Le.forEach(ne=>{ne.group===J&&(j!==ne.name?Tt.push({title:ne.title,group:J,name:ne.name,type:ne.type,version:ne.version,url:ne.url}):Tt.push({title:ne.title,group:J,hidden:!0,name:ne.name,type:ne.type,version:ne.version,url:ne.url}),j=ne.name)})});function Ft(J,j,ne){let ue=!1;if(!j)return ue;const me=j.match(/<h(1|2).*?>(.+?)<\/h(1|2)>/gi);return me&&me.forEach(function(Ee){const Ae=Ee.substring(2,3),Ue=Ee.replace(/<.+?>/g,""),De=Ee.match(/id="api-([^-]+)(?:-(.+))?"/),nt=De?De[1]:null,ot=De?De[2]:null;Ae==="1"&&Ue&&nt&&(J.splice(ne,0,{group:nt,isHeader:!0,title:Ue,isFixed:!0}),ne++,ue=!0),Ae==="2"&&Ue&&nt&&ot&&(J.splice(ne,0,{group:nt,name:ot,isHeader:!1,title:Ue,isFixed:!1,version:"1.0"}),ne++)}),ue}let Jt;if(de.header&&(Jt=Ft(Tt,de.header.content,0),Jt||Tt.unshift({group:"_header",isHeader:!0,title:de.header.title==null?gt("General"):de.header.title,isFixed:!0})),de.footer){const J=Tt.length;Jt=Ft(Tt,de.footer.content,Tt.length),!Jt&&de.footer.title!=null&&Tt.splice(J,0,{group:"_footer",isHeader:!0,title:de.footer.title,isFixed:!0})}const Xn=de.title?de.title:"apiDoc: "+de.name+" - "+de.version;v()(document).attr("title",Xn),v()("#loader").remove();const wn={nav:Tt};v()("#sidenav").append(we(wn)),v()("#generator").append(ye(de)),(0,a.extend)(de,{versions:Ut}),v()("#project").append(ve(de)),de.header&&v()("#header").append(Pe(de.header)),de.footer&&(v()("#footer").append(xe(de.footer)),de.template.aloneDisplay&&document.getElementById("api-_footer").classList.add("hide"));const It={};let dn="";pt.forEach(function(J){const j=[];let ne="",ue={},me=J,Ee="";It[J]={},Le.forEach(function(Ae){J===Ae.group&&(ne!==Ae.name?(Le.forEach(function(Ue){J===Ue.group&&Ae.name===Ue.name&&(Object.prototype.hasOwnProperty.call(It[Ae.group],Ae.name)||(It[Ae.group][Ae.name]=[]),It[Ae.group][Ae.name].push(Ue.version))}),ue={article:Ae,versions:It[Ae.group][Ae.name]}):ue={article:Ae,hidden:!0,versions:It[Ae.group][Ae.name]},de.sampleUrl&&de.sampleUrl===!0&&(de.sampleUrl=window.location.origin),de.url&&ue.article.url.substr(0,4).toLowerCase()!=="http"&&(ue.article.url=de.url+ue.article.url),B(ue,Ae),Ae.groupTitle&&(me=Ae.groupTitle),Ae.groupDescription&&(Ee=Ae.groupDescription),j.push({article:re(ue),group:Ae.group,name:Ae.name,aloneDisplay:de.template.aloneDisplay}),ne=Ae.name)}),ue={group:J,title:me,description:Ee,articles:j,aloneDisplay:de.template.aloneDisplay},dn+=Ne(ue)}),v()("#sections").append(dn),de.template.aloneDisplay||(document.body.dataset.spy="scroll",v()("body").scrollspy({target:"#scrollingNav"})),v()(".form-control").on("focus change",function(){v()(this).removeClass("border-danger")}),v()(".sidenav").find("a").on("click",function(J){J.preventDefault();const j=this.getAttribute("href");if(de.template.aloneDisplay){const ne=document.querySelector(".sidenav > li.active");ne&&ne.classList.remove("active"),this.parentNode.classList.add("active")}else{const ne=document.querySelector(j);ne&&v()("html,body").animate({scrollTop:ne.offsetTop},400)}window.location.hash=j});function At(J){let j=!1;return v().each(J,ne=>{j=j||(0,a.some)(J[ne],ue=>ue.type)}),j}function hn(){v()('button[data-toggle="popover"]').popover().click(function(j){j.preventDefault()});const J=v()("#version strong").html();if(v()("#sidenav li").removeClass("is-new"),de.template.withCompare&&v()("#sidenav li[data-version='"+J+"']").each(function(){const j=v()(this).data("group"),ne=v()(this).data("name"),ue=v()("#sidenav li[data-group='"+j+"'][data-name='"+ne+"']").length,me=v()("#sidenav li[data-group='"+j+"'][data-name='"+ne+"']").index(v()(this));(ue===1||me===ue-1)&&v()(this).addClass("is-new")}),v()(".nav-tabs-examples a").click(function(j){j.preventDefault(),v()(this).tab("show")}),v()(".nav-tabs-examples").find("a:first").tab("show"),v()(".sample-request-content-type-switch").change(function(){v()(this).val()==="body-form-data"?(v()("#sample-request-body-json-input-"+v()(this).data("id")).hide(),v()("#sample-request-body-form-input-"+v()(this).data("id")).show()):(v()("#sample-request-body-form-input-"+v()(this).data("id")).hide(),v()("#sample-request-body-json-input-"+v()(this).data("id")).show())}),de.template.aloneDisplay&&(v()(".show-group").click(function(){const j="."+v()(this).attr("data-group")+"-group",ne="."+v()(this).attr("data-group")+"-article";v()(".show-api-group").addClass("hide"),v()(j).removeClass("hide"),v()(".show-api-article").addClass("hide"),v()(ne).removeClass("hide")}),v()(".show-api").click(function(){const j=this.getAttribute("href").substring(1),ne=document.getElementById("version").textContent.trim(),ue=`.${this.dataset.name}-article`,me=`[id="${j}-${ne}"]`,Ee=`.${this.dataset.group}-group`;v()(".show-api-group").addClass("hide"),v()(Ee).removeClass("hide"),v()(".show-api-article").addClass("hide");let Ae=v()(ue);v()(me).length&&(Ae=v()(me).parent()),Ae.removeClass("hide"),j.match(/_(header|footer)/)&&document.getElementById(j).classList.remove("hide")})),de.template.aloneDisplay||v()("body").scrollspy("refresh"),de.template.aloneDisplay){const j=decodeURI(window.location.hash);if(j!=null&&j.length!==0){const ne=document.getElementById("version").textContent.trim(),ue=document.querySelector(`li .${j.slice(1)}-init`),me=document.querySelector(`li[data-version="${ne}"] .show-api.${j.slice(1)}-init`);let Ee=ue;me&&(Ee=me),Ee.click()}}}function Tn(J){typeof J=="undefined"?J=v()("#version strong").html():v()("#version strong").html(J),v()("article").addClass("hide"),v()("#sidenav li:not(.nav-fixed)").addClass("hide");const j={};document.querySelectorAll("article[data-version]").forEach(ne=>{const ue=ne.dataset.group,me=ne.dataset.name,Ee=ne.dataset.version,Ae=ue+me;!j[Ae]&&r().lte(Ee,J)&&(j[Ae]=!0,document.querySelector(`article[data-group="${ue}"][data-name="${me}"][data-version="${Ee}"]`).classList.remove("hide"),document.querySelector(`#sidenav li[data-group="${ue}"][data-name="${me}"][data-version="${Ee}"]`).classList.remove("hide"),document.querySelector(`#sidenav li.nav-header[data-group="${ue}"]`).classList.remove("hide"))}),v()("article[data-version]").each(function(ne){const ue=v()(this).data("group");v()("section#api-"+ue).removeClass("hide"),v()("section#api-"+ue+" article:visible").length===0?v()("section#api-"+ue).addClass("hide"):v()("section#api-"+ue).removeClass("hide")})}if(Tn(),v()("#versions li.version a").on("click",function(J){J.preventDefault(),Tn(v()(this).html())}),v()("#compareAllWithPredecessor").on("click",Jn),v()("article .versions li.version a").on("click",Mn),v().urlParam=function(J){const j=new RegExp("[\\?&amp;]"+J+"=([^&amp;#]*)").exec(window.location.href);return j&&j[1]?j[1]:null},v().urlParam("compare")&&v()("#compareAllWithPredecessor").trigger("click"),window.location.hash){const J=decodeURI(window.location.hash);v()(J).length>0&&v()("html,body").animate({scrollTop:parseInt(v()(J).offset().top)},0)}document.querySelector('[data-toggle="offcanvas"]').addEventListener("click",function(){const J=document.querySelector(".row-offcanvas");J&&J.classList.toggle("active")}),v()("#scrollingNav .sidenav-search input.search").focus(),v()('[data-action="filter-search"]').on("keyup",Hn(J=>{const j=J.currentTarget.value.toLowerCase();v()(".sidenav a.nav-list-item").filter((ne,ue)=>v()(ue).toggle(v()(ue).text().toLowerCase().indexOf(j)>-1))},200)),v()("span.search-reset").on("click",function(){v()("#scrollingNav .sidenav-search input.search").val("").focus(),v()(".sidenav").find("a.nav-list-item").show()});function Hn(J,j){let ne=null;return(...ue)=>{clearTimeout(ne),ne=setTimeout(J.bind(this,...ue),j||0)}}function Mn(J){J.preventDefault();const j=v()(this).parents("article"),ne=v()(this).html(),ue=j.find(".version"),me=ue.find("strong").html();ue.find("strong").html(ne);const Ee=j.data("group"),Ae=j.data("name"),Ue=j.data("version"),De=j.data("compare-version");if(De!==ne&&!(!De&&Ue===ne)){if(De&&It[Ee][Ae][0]===ne||Ue===ne)X(Ee,Ae,Ue);else{let nt={},ot={};v().each(Ge[Ee][Ae],function(Et,Zn){Zn.version===Ue&&(nt=Zn),Zn.version===ne&&(ot=Zn)});const We={article:nt,compare:ot,versions:It[Ee][Ae]};We.article.id=We.article.group+"-"+We.article.name+"-"+We.article.version,We.article.id=We.article.id.replace(/\./g,"_"),We.compare.id=We.compare.group+"-"+We.compare.name+"-"+We.compare.version,We.compare.id=We.compare.id.replace(/\./g,"_");let Re=nt;Re.header&&Re.header.fields&&(We._hasTypeInHeaderFields=At(Re.header.fields)),Re.parameter&&Re.parameter.fields&&(We._hasTypeInParameterFields=At(Re.parameter.fields)),Re.error&&Re.error.fields&&(We._hasTypeInErrorFields=At(Re.error.fields)),Re.success&&Re.success.fields&&(We._hasTypeInSuccessFields=At(Re.success.fields)),Re.info&&Re.info.fields&&(We._hasTypeInInfoFields=At(Re.info.fields)),Re=ot,We._hasTypeInHeaderFields!==!0&&Re.header&&Re.header.fields&&(We._hasTypeInHeaderFields=At(Re.header.fields)),We._hasTypeInParameterFields!==!0&&Re.parameter&&Re.parameter.fields&&(We._hasTypeInParameterFields=At(Re.parameter.fields)),We._hasTypeInErrorFields!==!0&&Re.error&&Re.error.fields&&(We._hasTypeInErrorFields=At(Re.error.fields)),We._hasTypeInSuccessFields!==!0&&Re.success&&Re.success.fields&&(We._hasTypeInSuccessFields=At(Re.success.fields)),We._hasTypeInInfoFields!==!0&&Re.info&&Re.info.fields&&(We._hasTypeInInfoFields=At(Re.info.fields));const gn=_e(We);j.after(gn),j.next().find(".versions li.version a").on("click",Mn),v()("#sidenav li[data-group='"+Ee+"'][data-name='"+Ae+"'][data-version='"+me+"']").addClass("has-modifications"),j.remove()}hn(),y().highlightAll()}}function Jn(J){J.preventDefault(),v()("article:visible .versions").each(function(){const ne=v()(this).parents("article").data("version");let ue=null;v()(this).find("li.version a").each(function(){v()(this).html()<ne&&!ue&&(ue=v()(this))}),ue&&ue.trigger("click")})}function B(J,j){J.id=J.article.group+"-"+J.article.name+"-"+J.article.version,J.id=J.id.replace(/\./g,"_"),j.header&&j.header.fields&&(J._hasTypeInHeaderFields=At(j.header.fields)),j.parameter&&j.parameter.fields&&(J._hasTypeInParameterFields=At(j.parameter.fields)),j.error&&j.error.fields&&(J._hasTypeInErrorFields=At(j.error.fields)),j.success&&j.success.fields&&(J._hasTypeInSuccessFields=At(j.success.fields)),j.info&&j.info.fields&&(J._hasTypeInInfoFields=At(j.info.fields)),J.template=de.template}function z(J,j,ne){let ue={};v().each(Ge[J][j],function(Ee,Ae){Ae.version===ne&&(ue=Ae)});const me={article:ue,versions:It[J][j]};return B(me,ue),re(me)}function X(J,j,ne){const ue=v()("article[data-group='"+J+"'][data-name='"+j+"']:visible"),me=z(J,j,ne);ue.after(me),ue.next().find(".versions li.version a").on("click",Mn),v()("#sidenav li[data-group='"+J+"'][data-name='"+j+"'][data-version='"+ne+"']").removeClass("has-modifications"),ue.remove()}function ae(J,j,ne){const ue=[];return j.forEach(function(me){ne?J.forEach(function(Ee){const Ae=Ee.split(ne);(Ae[0]===me||Ae[1]===me)&&ue.push(Ee)}):J.forEach(function(Ee){Ee===me&&ue.push(me)})}),J.forEach(function(me){ue.indexOf(me)===-1&&ue.push(me)}),ue}function q(J,j){const ne=[];return j.forEach(ue=>{Object.keys(J).forEach(me=>{J[me].replace(/_/g," ")===ue&&ne.push(me)})}),Object.keys(J).forEach(ue=>{ne.indexOf(ue)===-1&&ne.push(ue)}),ne}hn()}})()})();
