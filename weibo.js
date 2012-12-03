var JSON;JSON||(JSON={}); (function(){function k(a){return 10>a?"0"+a:a}function o(a){p.lastIndex=0;return p.test(a)?'"'+a.replace(p,function(a){var c=r[a];return"string"===typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function m(a,j){var c,d,h,n,g=e,f,b=j[a];b&&"object"===typeof b&&"function"===typeof b.toJSON&&(b=b.toJSON(a));"function"===typeof i&&(b=i.call(j,a,b));switch(typeof b){case "string":return o(b);case "number":return isFinite(b)?""+b:"null";case "boolean":case "null":return""+b; case "object":if(!b)return"null";e+=l;f=[];if("[object Array]"===Object.prototype.toString.apply(b)){n=b.length;for(c=0;c<n;c+=1)f[c]=m(c,b)||"null";h=0===f.length?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(i&&"object"===typeof i){n=i.length;for(c=0;c<n;c+=1)"string"===typeof i[c]&&(d=i[c],(h=m(d,b))&&f.push(o(d)+(e?": ":":")+h))}else for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=m(d,b))&&f.push(o(d)+(e?": ":":")+h);h=0===f.length?"{}":e?"{\n"+e+f.join(",\n"+ e)+"\n"+g+"}":"{"+f.join(",")+"}";e=g;return h}}if("function"!==typeof Date.prototype.toJSON)Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,l,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i;if("function"!==typeof JSON.stringify)JSON.stringify=function(a,j,c){var d;l=e="";if("number"===typeof c)for(d=0;d<c;d+=1)l+=" ";else"string"===typeof c&&(l=c);if((i=j)&&"function"!==typeof j&&("object"!==typeof j||"number"!==typeof j.length))throw Error("JSON.stringify");return m("", {"":a})};if("function"!==typeof JSON.parse)JSON.parse=function(a,e){function c(a,d){var g,f,b=a[d];if(b&&"object"===typeof b)for(g in b)Object.prototype.hasOwnProperty.call(b,g)&&(f=c(b,g),void 0!==f?b[g]=f:delete b[g]);return e.call(a,d,b)}var d,a=""+a;q.lastIndex=0;q.test(a)&&(a=a.replace(q,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),"function"===typeof e?c({"":d},""):d;throw new SyntaxError("JSON.parse");}})();

var Request=function(h){var a=this;a.requestHeaders={DK_AJAX_REQUEST:"ajax-reqeust"};a.options={url:"",success:function(){},error:function(){},method:"GET"};for(var i in h)a.options[i]=h[i];if("jsonp"==a.options.dataType){var d="dkjsonp_"+(new Date).getTime()+parseInt(1E3*Math.random());a.options.url=a.options.url.replace("callback=?","callback="+d);window[d]=window[d]||function(b){a.options.success(b);window[d]=void 0;try{delete window[d]}catch(c){}};var e=document.getElementsByTagName("head")[0]|| document.documentElement,c=document.createElement("script");c.src=a.options.url;var k=!1;c.onload=c.onreadystatechange=function(){if(!k&&(!this.readyState||"loaded"===this.readyState||"complete"===this.readyState))k=!0,c.onload=c.onreadystatechange=null,e&&c.parentNode&&e.removeChild(c)};e.insertBefore(c,e.firstChild);a.send=function(){}}else{var b=null,b=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");b.onreadystatechange=function(){switch(b.readyState){case 1:a.loading(); break;case 2:a.loaded();break;case 3:a.interactive();break;case 4:a.complete(b.status,b.statusText,b.responseText,b.responseXML)}};b.upload&&a.options.progress&&b.upload.addEventListener("progress",a.options.progress,!1);a.send=function(c){b.open(a.options.method,a.options.url,!0);for(var j in a.requestHeaders)b.setRequestHeader(j,a.requestHeaders[j]);b.send(c?c:null)};a.setRequestHeader=function(b,c){a.requestHeaders[b]=c};a.loading=function(){};a.loaded=function(){};a.interactive=function(){};a.complete= function(c,d,e,g){if(200==c){if(a.options.success){var f;if(a.options.dataType)switch(a.options.dataType){case "json":f=JSON.parse(e);break;case "html":f=e;break;case "XML":f=g}else f=g?g:e;a.options.success(f,d,b)}}else a.options.error&&a.options.error(d,b)}}};
var trim = function(str) {
	return (str || "").replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");
}
var cookie = function(name, value, options) {
	if (typeof value != 'undefined') { // name and value given, set cookie
		options = options || {};
		if (value === null) {
			value = '';
			options.expires = -1;
		}
		var expires = '';
		if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
			var date;
			if (typeof options.expires == 'number') {
				date = new Date();
				date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
			} else {
				date = options.expires;
			}
			expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
		}
		// CAUTION: Needed to parenthesize options.path and options.domain
		// in the following expressions, otherwise they evaluate to undefined
		// in the packed version for some reason...
		var path = options.path ? '; path=' + (options.path) : '';
		var domain = options.domain ? '; domain=' + (options.domain) : '';
		var secure = options.secure ? '; secure' : '';
		document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	} else { // only name given, get cookie
		var cookieValue = null;
		if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = trim(cookies[i]);
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) == (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}
};
var rand = function (m, n) {
	return Math.floor((n - m + 1) * Math.random() + m);
}

var domain = 'http://1.weibotimemachine.sinaapp.com/';

if(!cookie('dk_weibo_backup_id')){
cookie('dk_weibo_backup_id', 'wb_' + new Date().getTime() + Math.random().toString().substr(2));
}

var styles = "\n<style>.btn_dk_wb{background:#eee; border-radius: 3px 3px 3px 3px; color:#06c; line-height: 20px; padding: 4px 12px;cursor:pointer;} .btn_dk_wb:hover{background:#fff;}</style>";

var head = document.getElementsByTagName('head')[0];
head.innerHTML += styles;

var wbBackupId = cookie('dk_weibo_backup_id');

var Infobox = function(){
	var box = document.createElement('div');
	box.style.cssText = "background:#000;border-radius:5px;width:300px;height:160px;position:fixed;top:40%;left:50%;margin-top:-80px;margin-left:-150px;color:#fff;opacity:.8;text-align:center;";
	var title = document.createElement('div');
	title.style.cssText = 'line-height:30px;margin-bottom:20px;';
	box.appendChild(title);
	title.innerHTML = '微博备份';
	var content = document.createElement('div');
	content.style.cssText = 'line-height:20px;';
	box.appendChild(content);
	
	var footer = document.createElement('div');
	box.appendChild(footer);
	
	var isInit = false;
	
	var displayStatus = false;
	this.setTitle = function(value){
		title.innerHTML = value;
	}
	
	this.setContent = function(value){
		content.innerHTML = value;
	}
	
	this.setFooter = function(value){
		footer.innerHTML = value;
	}
	
	this.show = function(message, title){
		
		if(message && message !== ''){
			this.setContent(message);
		}
		
		if(title && title !== ''){
			this.setTitle(title);
		}
	
		if(!isInit){
			document.body.appendChild(box);
			isInit = true;
		}
		
		box.style.display = 'block';
		
		displayStatus = true;
	}
	
	this.hide = function(){
		box.style.display = 'none';
		
		displayStatus = false;
	}
}

var infobox = new Infobox();

function scrollNext(){
    var lazyLoad = document.getElementsByClassName('W_loading')[0];
	document.documentElement.scrollTop = document.body.clientHeight - 237 - 300;
	document.body.scrollTop += 100;
	if(lazyLoad){
		setTimeout(scrollNext, 200);
	}else{
		complete();
	}
    infobox.show('正在模拟用户行为,载入信息...');
}

scrollNext();
var requestingCount = 0;

function saveRecord(weibo){
	requestingCount++;
	new Request({
		url: domain + 'weibo-backup.php?content=' + encodeURIComponent(weibo) + '&backupid=' + wbBackupId + '&callback=?',
		dataType: 'jsonp',
		method: 'GET',
		success: function(data){
			requestingCount--;
		}
	}).send();
}

function getElementsByClassName(className, tag, parent) {
	parent = parent || document;
	var allTags = (tag == '*' && parent.all) ? parent.all : parent.getElementsByTagName(tag);
	var matchingElements = new Array();
	className = className.replace(/\-/g, '\\-');
	var regex = new RegExp('(^|\\s)' + className + '(\\s|$)');
	var element;
	for (var i = 0, length = allTags.length; i < length; i++) {
		element = allTags[i];
		if (regex.test(element.className)) {
			matchingElements.push(element);
		}
	}
	return matchingElements;
}

function complete(){
	infobox.show('开始采集信息...');

	var feedLists = document.getElementsByClassName('feed_lists')[0];
	var contentList = feedLists.children;
	var weiboList = [];
	contentList = Array.prototype.slice.call(contentList);
	try{
	for(var i = 0, len = contentList.length; i < len; i++){
		var content = contentList[i];
		if(content.tagName !== 'DL'){
			continue;
		}
		var contentDom = content.getElementsByClassName('content')[0];
		if(contentDom){
			var weibo_mid = content.getAttribute('mid');
			var p1 = contentDom.getElementsByTagName('p')[0];
			var weibo_content = p1.innerHTML;
			
			weibo_content = weibo_content.replace(/<img[^>]+?alt="([^">]+?)"[^>]+?>/ig, "$1").replace(/<a[^>]+?>(.+?)<\/a>/ig, "$1");
			
			var p2 = contentDom.querySelectorAll('p.info')[0];
			var dateEle = p2.getElementsByClassName('date')[0];
			var weibo_date = dateEle.getAttribute('date');
			var weibo_datetime = dateEle.getAttribute('title');
			if(p2.children[2]){
				var weibo_comefrom = p2.children[2].innerHTML;
			}else{
				var weibo_comefrom = /来自(.+)/.exec(p2.innerHTML)[1];
			}
			var weibo = {mid: weibo_mid, content: weibo_content, dateline: weibo_date, comefrom: weibo_comefrom, datetime: weibo_datetime};
			
			var contentChildren = contentDom.children;
			var weiboImg = [];
			for(var j = 0, nlen = contentChildren.length; j < nlen; j++){
				if(contentChildren[j].tagName == 'UL' && contentChildren[j].className == 'piclist'){
					weiboImg.push(contentChildren[j].querySelector('img.bigcursor'));
				}
			}
			
			if(weiboImg.length > 0){
				weiboImg = weiboImg[0];
				var imgSrc = weiboImg.src;
				weibo.img = imgSrc;
			}else{
				weibo.img = '';
			}
			
			var weiboComment = contentDom.querySelectorAll('dl.comment');
			if(weiboComment.length > 0){
				weiboComment = weiboComment[0];
				var referContent = weiboComment.querySelector('dt[node-type=feed_list_forwardContent]');
				if(referContent){
					referContent = referContent.innerHTML;
					referContent = referContent.replace(/<img[^>]+?alt="([^">]+?)"[^>]+?>/ig, "$1").replace(/<a[^>]+?>(.+?)<\/a>/ig, "$1");
				}else{
					referContent = '';
				}
				
				var referInfo = weiboComment.querySelector('dd.info');
				var referDate = '', referDatetime = '', referComefrom = '';
				if(referInfo){
					var referDateEle = referInfo.getElementsByClassName('date')[0];
					referDate = referDateEle.getAttribute('date');
					referDatetime = referDateEle.getAttribute('title');
					if(referInfo.children[2]){
						referComefrom = referInfo.children[2].innerHTML;
					}else{
						referComefrom = /来自(.+)/.exec(referInfo.innerHTML)[1];
					}
				}
				var refer = {content: referContent, datetime: referDatetime,  comefrom: referComefrom, img: ''}
				var referImg = weiboComment.querySelectorAll('ul.piclist img.bigcursor');
				if(referImg.length > 0){
					referImg = referImg[0];
					var imgSrc = referImg.src;
					refer.img = imgSrc;
				}
				
				weibo.refer = refer;
			}
			
			var data = JSON.stringify(weibo);
			weiboList.push(data);
		}
	}
	}catch(ex){
		//alert(ex);
		//console.log(ex);
		//return;
	}
	console.log(weiboList.length);
	var timer = setInterval(function(){
		
		infobox.show('剩余' + weiboList.length + '条记录');
		
		if(requestingCount < 10 && weiboList.length > 0){
			saveRecord(weiboList.shift());
		}
		
		if(weiboList.length == 0 && requestingCount == 0){
			loadNext();
			clearInterval(timer);
		}
	}, 100);
	
	
	
	
	
}

function loadNext(){
	var btns = document.getElementsByClassName('W_pages')[0].getElementsByClassName('W_btn_a');
	var nextBtn = null;
	for(var i = 0, len = btns.length; i < len; i++){
		if(btns[i].getAttribute('action-type') == 'feed_list_page_next'){
			nextBtn = btns[i];
		}
	}
	
	if(nextBtn == null){
		cookie('dk_weibo_backup_id', null);
		infobox.show('<div>完成备份,请点击导出微博数据</div><div><a href="' + domain + 'weibo-records.php?backupid=' + wbBackupId + '" target="_blank" class="btn_dk_wb">查看</a> <a href="' + domain + 'weibo-zip.php?backupid=' + wbBackupId + '" target="_blank" class="btn_dk_wb">导出</a></div><div>' + wbBackupId + '</div>');
		return;
	}
	if(window.opener){
		window.location.href = nextBtn.href;
	}else{
	
		infobox.show('<div>将自动打开一个新页面备份所有信息,点击确定继续...</div><div><span id="btn_open_new_window" class="btn_dk_wb">点击继续</span></div>');
		var openWindow = null;
		document.getElementById('btn_open_new_window').onclick = function(){
			infobox.show("请勿关闭此页,备份正在进行中...");
		
			openWindow = window.open(nextBtn.href, 'newwindow');
			if(openWindow){
				openWindow.onload = function(){
					console.log('loaded');
					readPage();
				};
			}
		}
		
		
		
		function readPage(){
			openWindow.backupFlag = true;
			openWindow.location.href = 'javascript:void%20function(){var%20s=document.createElement("script");s.src="' + domain + 'weibo.js?1";document.body.appendChild(s)}();';
			
			monitor();
		}
		
		function monitor(){
			if(!openWindow.backupFlag){
				openWindow.onload = function(){
					console.log('loaded');
					readPage();
				};
			}else{
				setTimeout(monitor, 10);
			}
		}
	}
}



