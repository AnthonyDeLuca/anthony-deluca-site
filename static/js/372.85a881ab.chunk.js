"use strict";(self.webpackChunkanthony_deluca_react=self.webpackChunkanthony_deluca_react||[]).push([[372],{5372:(t,e,n)=>{var i=n(1478),o=n(1881),s=n(1960);class r{constructor(t){this.bubbles=!0,this.cancelBubble=!0,this.cancelable=!1,this.composed=!1,this.defaultPrevented=!1,this.eventPhase=r.prototype.NONE,this.propagationStopped=!1,this.propagationImmediatelyStopped=!1,this.layer=new s.b,this.page=new s.b,this.NONE=0,this.CAPTURING_PHASE=1,this.AT_TARGET=2,this.BUBBLING_PHASE=3,this.manager=t}get layerX(){return this.layer.x}get layerY(){return this.layer.y}get pageX(){return this.page.x}get pageY(){return this.page.y}get data(){return this}composedPath(){return!this.manager||this.path&&this.path[this.path.length-1]===this.target||(this.path=this.target?this.manager.propagationPath(this.target):[]),this.path}initEvent(t,e,n){throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}initUIEvent(t,e,n,i,o){throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}preventDefault(){this.nativeEvent instanceof Event&&this.nativeEvent.cancelable&&this.nativeEvent.preventDefault(),this.defaultPrevented=!0}stopImmediatePropagation(){this.propagationImmediatelyStopped=!0}stopPropagation(){this.propagationStopped=!0}}var a,h=/iPhone/i,l=/iPod/i,c=/iPad/i,d=/\biOS-universal(?:.+)Mac\b/i,p=/\bAndroid(?:.+)Mobile\b/i,u=/Android/i,v=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,m=/Silk/i,g=/Windows Phone/i,y=/\bWindows(?:.+)ARM\b/i,f=/BlackBerry/i,E=/BB10/i,b=/Opera Mini/i,_=/\b(CriOS|Chrome)(?:.+)Mobile/i,T=/Mobile(?:.+)Firefox\b/i,P=function(t){return"undefined"!==typeof t&&"MacIntel"===t.platform&&"number"===typeof t.maxTouchPoints&&t.maxTouchPoints>1&&"undefined"===typeof MSStream};function w(t){var e={userAgent:"",platform:"",maxTouchPoints:0};t||"undefined"===typeof navigator?"string"===typeof t?e.userAgent=t:t&&t.userAgent&&(e={userAgent:t.userAgent,platform:t.platform,maxTouchPoints:t.maxTouchPoints||0}):e={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var n=e.userAgent,i=n.split("[FBAN");"undefined"!==typeof i[1]&&(n=i[0]),"undefined"!==typeof(i=n.split("Twitter"))[1]&&(n=i[0]);var o=function(t){return function(e){return e.test(t)}}(n),s={apple:{phone:o(h)&&!o(g),ipod:o(l),tablet:!o(h)&&(o(c)||P(e))&&!o(g),universal:o(d),device:(o(h)||o(l)||o(c)||o(d)||P(e))&&!o(g)},amazon:{phone:o(v),tablet:!o(v)&&o(m),device:o(v)||o(m)},android:{phone:!o(g)&&o(v)||!o(g)&&o(p),tablet:!o(g)&&!o(v)&&!o(p)&&(o(m)||o(u)),device:!o(g)&&(o(v)||o(m)||o(p)||o(u))||o(/\bokhttp\b/i)},windows:{phone:o(g),tablet:o(y),device:o(g)||o(y)},other:{blackberry:o(f),blackberry10:o(E),opera:o(b),firefox:o(T),chrome:o(_),device:o(f)||o(E)||o(b)||o(T)||o(_)},any:!1,phone:!1,tablet:!1};return s.any=s.apple.device||s.android.device||s.windows.device||s.other.device,s.phone=s.apple.phone||s.android.phone||s.windows.phone,s.tablet=s.apple.tablet||s.android.tablet||s.windows.tablet,s}const M=(null!==(a=w.default)&&void 0!==a?a:w)(globalThis.navigator);var A=n(3772);const D=100;class I{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M;this._mobileInfo=e,this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this._pool=[],this._renderId=0,this._children=[],this._androidUpdateCount=0,this._androidUpdateFrequency=500,this._hookDiv=null,(e.tablet||e.phone)&&this._createTouchHook();const n=document.createElement("div");n.style.width="".concat(D,"px"),n.style.height="".concat(D,"px"),n.style.position="absolute",n.style.top="".concat(0,"px"),n.style.left="".concat(0,"px"),n.style.zIndex=2..toString(),this._div=n,this._renderer=t,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),globalThis.addEventListener("keydown",this._onKeyDown,!1)}get isActive(){return this._isActive}get isMobileAccessibility(){return this._isMobileAccessibility}get hookDiv(){return this._hookDiv}_createTouchHook(){const t=document.createElement("button");t.style.width="".concat(1,"px"),t.style.height="".concat(1,"px"),t.style.position="absolute",t.style.top="".concat(-1e3,"px"),t.style.left="".concat(-1e3,"px"),t.style.zIndex=2..toString(),t.style.backgroundColor="#FF0000",t.title="select to enable accessibility for this content",t.addEventListener("focus",(()=>{this._isMobileAccessibility=!0,this._activate(),this._destroyTouchHook()})),document.body.appendChild(t),this._hookDiv=t}_destroyTouchHook(){this._hookDiv&&(document.body.removeChild(this._hookDiv),this._hookDiv=null)}_activate(){var t;this._isActive||(this._isActive=!0,globalThis.document.addEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown,!1),this._renderer.runners.postrender.add(this),null===(t=this._renderer.view.canvas.parentNode)||void 0===t||t.appendChild(this._div))}_deactivate(){var t;this._isActive&&!this._isMobileAccessibility&&(this._isActive=!1,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.addEventListener("keydown",this._onKeyDown,!1),this._renderer.runners.postrender.remove(this),null===(t=this._div.parentNode)||void 0===t||t.removeChild(this._div))}_updateAccessibleObjects(t){if(!t.visible||!t.accessibleChildren)return;t.accessible&&t.isInteractive()&&(t._accessibleActive||this._addChild(t),t._renderId=this._renderId);const e=t.children;if(e)for(let n=0;n<e.length;n++)this._updateAccessibleObjects(e[n])}init(t){var e;this.debug=null!==(e=null===t||void 0===t?void 0:t.debug)&&void 0!==e?e:this.debug,this._renderer.runners.postrender.remove(this)}postrender(){const t=performance.now();if(this._mobileInfo.android.device&&t<this._androidUpdateCount)return;if(this._androidUpdateCount=t+this._androidUpdateFrequency,!this._renderer.renderingToScreen||!this._renderer.view.canvas)return;this._renderer.lastObjectRendered&&this._updateAccessibleObjects(this._renderer.lastObjectRendered);const{x:e,y:n,width:i,height:o}=this._renderer.view.canvas.getBoundingClientRect(),{width:s,height:r,resolution:a}=this._renderer,h=i/s*a,l=o/r*a;let c=this._div;c.style.left="".concat(e,"px"),c.style.top="".concat(n,"px"),c.style.width="".concat(s,"px"),c.style.height="".concat(r,"px");for(let d=0;d<this._children.length;d++){const t=this._children[d];if(t._renderId!==this._renderId)t._accessibleActive=!1,(0,A.d)(this._children,d,1),this._div.removeChild(t._accessibleDiv),this._pool.push(t._accessibleDiv),t._accessibleDiv=null,d--;else{c=t._accessibleDiv;let e=t.hitArea;const n=t.worldTransform;t.hitArea?(c.style.left="".concat((n.tx+e.x*n.a)*h,"px"),c.style.top="".concat((n.ty+e.y*n.d)*l,"px"),c.style.width="".concat(e.width*n.a*h,"px"),c.style.height="".concat(e.height*n.d*l,"px")):(e=t.getBounds().rectangle,this._capHitArea(e),c.style.left="".concat(e.x*h,"px"),c.style.top="".concat(e.y*l,"px"),c.style.width="".concat(e.width*h,"px"),c.style.height="".concat(e.height*l,"px"),c.title!==t.accessibleTitle&&null!==t.accessibleTitle&&(c.title=t.accessibleTitle||""),c.getAttribute("aria-label")!==t.accessibleHint&&null!==t.accessibleHint&&c.setAttribute("aria-label",t.accessibleHint||"")),t.accessibleTitle===c.title&&t.tabIndex===c.tabIndex||(c.title=t.accessibleTitle||"",c.tabIndex=t.tabIndex,this.debug&&this._updateDebugHTML(c))}}this._renderId++}_updateDebugHTML(t){t.innerHTML="type: ".concat(t.type,"</br> title : ").concat(t.title,"</br> tabIndex: ").concat(t.tabIndex)}_capHitArea(t){t.x<0&&(t.width+=t.x,t.x=0),t.y<0&&(t.height+=t.y,t.y=0);const{width:e,height:n}=this._renderer;t.x+t.width>e&&(t.width=e-t.x),t.y+t.height>n&&(t.height=n-t.y)}_addChild(t){let e=this._pool.pop();e||(e=document.createElement("button"),e.style.width="".concat(D,"px"),e.style.height="".concat(D,"px"),e.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",e.style.position="absolute",e.style.zIndex=2..toString(),e.style.borderStyle="none",navigator.userAgent.toLowerCase().includes("chrome")?e.setAttribute("aria-live","off"):e.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?e.setAttribute("aria-relevant","additions"):e.setAttribute("aria-relevant","text"),e.addEventListener("click",this._onClick.bind(this)),e.addEventListener("focus",this._onFocus.bind(this)),e.addEventListener("focusout",this._onFocusOut.bind(this))),e.style.pointerEvents=t.accessiblePointerEvents,e.type=t.accessibleType,t.accessibleTitle&&null!==t.accessibleTitle?e.title=t.accessibleTitle:t.accessibleHint&&null!==t.accessibleHint||(e.title="container ".concat(t.tabIndex)),t.accessibleHint&&null!==t.accessibleHint&&e.setAttribute("aria-label",t.accessibleHint),this.debug&&this._updateDebugHTML(e),t._accessibleActive=!0,t._accessibleDiv=e,e.container=t,this._children.push(t),this._div.appendChild(t._accessibleDiv),t._accessibleDiv.tabIndex=t.tabIndex}_dispatchEvent(t,e){const{container:n}=t.target,i=this._renderer.events.rootBoundary,o=Object.assign(new r(i),{target:n});i.rootTarget=this._renderer.lastObjectRendered,e.forEach((t=>i.dispatchEvent(o,t)))}_onClick(t){this._dispatchEvent(t,["click","pointertap","tap"])}_onFocus(t){t.target.getAttribute("aria-live")||t.target.setAttribute("aria-live","assertive"),this._dispatchEvent(t,["mouseover"])}_onFocusOut(t){t.target.getAttribute("aria-live")||t.target.setAttribute("aria-live","polite"),this._dispatchEvent(t,["mouseout"])}_onKeyDown(t){9===t.keyCode&&this._activate()}_onMouseMove(t){0===t.movementX&&0===t.movementY||this._deactivate()}destroy(){this._destroyTouchHook(),this._div=null,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown),this._pool=null,this._children=null,this._renderer=null}}I.extension={type:[i.Ag.WebGLSystem,i.Ag.WebGPUSystem],name:"accessibility"};i.XO.add(I),o.mc.mixin({accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,_renderId:-1});n(1049);var x=n(9379),k=n(8379),O=n(279),L=n(6493),B=n(1456);const C=new class{constructor(){this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this._tickerAdded=!1,this._pauseUpdate=!0}init(t){this.removeTickerListener(),this.events=t,this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this._tickerAdded=!1,this._pauseUpdate=!0}get pauseUpdate(){return this._pauseUpdate}set pauseUpdate(t){this._pauseUpdate=t}addTickerListener(){!this._tickerAdded&&this.domElement&&(B.R.system.add(this._tickerUpdate,this,L.d.INTERACTION),this._tickerAdded=!0)}removeTickerListener(){this._tickerAdded&&(B.R.system.remove(this._tickerUpdate,this),this._tickerAdded=!1)}pointerMoved(){this._didMove=!0}_update(){if(!this.domElement||this._pauseUpdate)return;if(this._didMove)return void(this._didMove=!1);const t=this.events._rootPointerEvent;this.events.supportsTouchEvents&&"touch"===t.pointerType||globalThis.document.dispatchEvent(new PointerEvent("pointermove",{clientX:t.clientX,clientY:t.clientY,pointerType:t.pointerType,pointerId:t.pointerId}))}_tickerUpdate(t){this._deltaTime+=t.deltaTime,this._deltaTime<this.interactionFrequency||(this._deltaTime=0,this._update())}};class S extends r{constructor(){super(...arguments),this.client=new s.b,this.movement=new s.b,this.offset=new s.b,this.global=new s.b,this.screen=new s.b}get clientX(){return this.client.x}get clientY(){return this.client.y}get x(){return this.clientX}get y(){return this.clientY}get movementX(){return this.movement.x}get movementY(){return this.movement.y}get offsetX(){return this.offset.x}get offsetY(){return this.offset.y}get globalX(){return this.global.x}get globalY(){return this.global.y}get screenX(){return this.screen.x}get screenY(){return this.screen.y}getLocalPosition(t,e,n){return t.worldTransform.applyInverse(n||this.global,e)}getModifierState(t){return"getModifierState"in this.nativeEvent&&this.nativeEvent.getModifierState(t)}initMouseEvent(t,e,n,i,o,s,r,a,h,l,c,d,p,u,v){throw new Error("Method not implemented.")}}class U extends S{constructor(){super(...arguments),this.width=0,this.height=0,this.isPrimary=!1}getCoalescedEvents(){return"pointermove"===this.type||"mousemove"===this.type||"touchmove"===this.type?[this]:[]}getPredictedEvents(){throw new Error("getPredictedEvents is not supported!")}}class R extends S{constructor(){super(...arguments),this.DOM_DELTA_PIXEL=0,this.DOM_DELTA_LINE=1,this.DOM_DELTA_PAGE=2}}R.DOM_DELTA_PIXEL=0,R.DOM_DELTA_LINE=1,R.DOM_DELTA_PAGE=2;const F=new s.b,X=new s.b;class Y{constructor(t){this.dispatch=new k.A,this.moveOnAll=!1,this.enableGlobalMoveEvents=!0,this.mappingState={trackingData:{}},this.eventPool=new Map,this._allInteractiveElements=[],this._hitElements=[],this._isPointerMoveEvent=!1,this.rootTarget=t,this.hitPruneFn=this.hitPruneFn.bind(this),this.hitTestFn=this.hitTestFn.bind(this),this.mapPointerDown=this.mapPointerDown.bind(this),this.mapPointerMove=this.mapPointerMove.bind(this),this.mapPointerOut=this.mapPointerOut.bind(this),this.mapPointerOver=this.mapPointerOver.bind(this),this.mapPointerUp=this.mapPointerUp.bind(this),this.mapPointerUpOutside=this.mapPointerUpOutside.bind(this),this.mapWheel=this.mapWheel.bind(this),this.mappingTable={},this.addEventMapping("pointerdown",this.mapPointerDown),this.addEventMapping("pointermove",this.mapPointerMove),this.addEventMapping("pointerout",this.mapPointerOut),this.addEventMapping("pointerleave",this.mapPointerOut),this.addEventMapping("pointerover",this.mapPointerOver),this.addEventMapping("pointerup",this.mapPointerUp),this.addEventMapping("pointerupoutside",this.mapPointerUpOutside),this.addEventMapping("wheel",this.mapWheel)}addEventMapping(t,e){this.mappingTable[t]||(this.mappingTable[t]=[]),this.mappingTable[t].push({fn:e,priority:0}),this.mappingTable[t].sort(((t,e)=>t.priority-e.priority))}dispatchEvent(t,e){t.propagationStopped=!1,t.propagationImmediatelyStopped=!1,this.propagate(t,e),this.dispatch.emit(e||t.type,t)}mapEvent(t){if(!this.rootTarget)return;const e=this.mappingTable[t.type];if(e)for(let n=0,i=e.length;n<i;n++)e[n].fn(t);else(0,O.R)("[EventBoundary]: Event mapping not defined for ".concat(t.type))}hitTest(t,e){C.pauseUpdate=!0;const n=this[this._isPointerMoveEvent&&this.enableGlobalMoveEvents?"hitTestMoveRecursive":"hitTestRecursive"](this.rootTarget,this.rootTarget.eventMode,F.set(t,e),this.hitTestFn,this.hitPruneFn);return n&&n[0]}propagate(t,e){if(!t.target)return;const n=t.composedPath();t.eventPhase=t.CAPTURING_PHASE;for(let i=0,o=n.length-1;i<o;i++)if(t.currentTarget=n[i],this.notifyTarget(t,e),t.propagationStopped||t.propagationImmediatelyStopped)return;if(t.eventPhase=t.AT_TARGET,t.currentTarget=t.target,this.notifyTarget(t,e),!t.propagationStopped&&!t.propagationImmediatelyStopped){t.eventPhase=t.BUBBLING_PHASE;for(let i=n.length-2;i>=0;i--)if(t.currentTarget=n[i],this.notifyTarget(t,e),t.propagationStopped||t.propagationImmediatelyStopped)return}}all(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._allInteractiveElements;if(0===n.length)return;t.eventPhase=t.BUBBLING_PHASE;const i=Array.isArray(e)?e:[e];for(let o=n.length-1;o>=0;o--)i.forEach((e=>{t.currentTarget=n[o],this.notifyTarget(t,e)}))}propagationPath(t){const e=[t];for(let n=0;n<2048&&t!==this.rootTarget&&t.parent;n++){if(!t.parent)throw new Error("Cannot find propagation path to disconnected target");e.push(t.parent),t=t.parent}return e.reverse(),e}hitTestMoveRecursive(t,e,n,i,o){let s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],r=!1;if(this._interactivePrune(t))return null;if("dynamic"!==t.eventMode&&"dynamic"!==e||(C.pauseUpdate=!1),t.interactiveChildren&&t.children){const a=t.children;for(let h=a.length-1;h>=0;h--){const l=a[h],c=this.hitTestMoveRecursive(l,this._isInteractive(e)?e:l.eventMode,n,i,o,s||o(t,n));if(c){if(c.length>0&&!c[c.length-1].parent)continue;const e=t.isInteractive();(c.length>0||e)&&(e&&this._allInteractiveElements.push(t),c.push(t)),0===this._hitElements.length&&(this._hitElements=c),r=!0}}}const a=this._isInteractive(e),h=t.isInteractive();return h&&h&&this._allInteractiveElements.push(t),s||this._hitElements.length>0?null:r?this._hitElements:a&&!o(t,n)&&i(t,n)?h?[t]:[]:null}hitTestRecursive(t,e,n,i,o){if(this._interactivePrune(t)||o(t,n))return null;if("dynamic"!==t.eventMode&&"dynamic"!==e||(C.pauseUpdate=!1),t.interactiveChildren&&t.children){const s=t.children,r=n;for(let n=s.length-1;n>=0;n--){const a=s[n],h=this.hitTestRecursive(a,this._isInteractive(e)?e:a.eventMode,r,i,o);if(h){if(h.length>0&&!h[h.length-1].parent)continue;const e=t.isInteractive();return(h.length>0||e)&&h.push(t),h}}}const s=this._isInteractive(e),r=t.isInteractive();return s&&i(t,n)?r?[t]:[]:null}_isInteractive(t){return"static"===t||"dynamic"===t}_interactivePrune(t){return!(t&&t.visible&&t.renderable&&t.measurable)||("none"===t.eventMode||"passive"===t.eventMode&&!t.interactiveChildren)}hitPruneFn(t,e){if(t.hitArea&&(t.worldTransform.applyInverse(e,X),!t.hitArea.contains(X.x,X.y)))return!0;if(t.effects&&t.effects.length)for(let n=0;n<t.effects.length;n++){const i=t.effects[n];if(i.containsPoint){if(!i.containsPoint(e,this.hitTestFn))return!0}}return!1}hitTestFn(t,e){return!!t.hitArea||!(null===t||void 0===t||!t.containsPoint)&&(t.worldTransform.applyInverse(e,X),t.containsPoint(X))}notifyTarget(t,e){var n,i,o;if(!t.currentTarget.isInteractive())return;null!==(n=e)&&void 0!==n||(e=t.type);const s="on".concat(e);null===(i=(o=t.currentTarget)[s])||void 0===i||i.call(o,t);const r=t.eventPhase===t.CAPTURING_PHASE||t.eventPhase===t.AT_TARGET?"".concat(e,"capture"):e;this._notifyListeners(t,r),t.eventPhase===t.AT_TARGET&&this._notifyListeners(t,e)}mapPointerDown(t){if(!(t instanceof U))return void(0,O.R)("EventBoundary cannot map a non-pointer event as a pointer event");const e=this.createPointerEvent(t);if(this.dispatchEvent(e,"pointerdown"),"touch"===e.pointerType)this.dispatchEvent(e,"touchstart");else if("mouse"===e.pointerType||"pen"===e.pointerType){const t=2===e.button;this.dispatchEvent(e,t?"rightdown":"mousedown")}this.trackingData(t.pointerId).pressTargetsByButton[t.button]=e.composedPath(),this.freeEvent(e)}mapPointerMove(t){var e,n;if(!(t instanceof U))return void(0,O.R)("EventBoundary cannot map a non-pointer event as a pointer event");this._allInteractiveElements.length=0,this._hitElements.length=0,this._isPointerMoveEvent=!0;const i=this.createPointerEvent(t);this._isPointerMoveEvent=!1;const o="mouse"===i.pointerType||"pen"===i.pointerType,s=this.trackingData(t.pointerId),r=this.findMountedTarget(s.overTargets);if((null===(e=s.overTargets)||void 0===e?void 0:e.length)>0&&r!==i.target){const e="mousemove"===t.type?"mouseout":"pointerout",n=this.createPointerEvent(t,e,r);if(this.dispatchEvent(n,"pointerout"),o&&this.dispatchEvent(n,"mouseout"),!i.composedPath().includes(r)){const e=this.createPointerEvent(t,"pointerleave",r);for(e.eventPhase=e.AT_TARGET;e.target&&!i.composedPath().includes(e.target);)e.currentTarget=e.target,this.notifyTarget(e),o&&this.notifyTarget(e,"mouseleave"),e.target=e.target.parent;this.freeEvent(e)}this.freeEvent(n)}if(r!==i.target){const e="mousemove"===t.type?"mouseover":"pointerover",n=this.clonePointerEvent(i,e);this.dispatchEvent(n,"pointerover"),o&&this.dispatchEvent(n,"mouseover");let s=null===r||void 0===r?void 0:r.parent;for(;s&&s!==this.rootTarget.parent&&s!==i.target;)s=s.parent;if(!s||s===this.rootTarget.parent){const t=this.clonePointerEvent(i,"pointerenter");for(t.eventPhase=t.AT_TARGET;t.target&&t.target!==r&&t.target!==this.rootTarget.parent;)t.currentTarget=t.target,this.notifyTarget(t),o&&this.notifyTarget(t,"mouseenter"),t.target=t.target.parent;this.freeEvent(t)}this.freeEvent(n)}const a=[],h=null===(n=this.enableGlobalMoveEvents)||void 0===n||n;var l;(this.moveOnAll?a.push("pointermove"):this.dispatchEvent(i,"pointermove"),h&&a.push("globalpointermove"),"touch"===i.pointerType&&(this.moveOnAll?a.splice(1,0,"touchmove"):this.dispatchEvent(i,"touchmove"),h&&a.push("globaltouchmove")),o)&&(this.moveOnAll?a.splice(1,0,"mousemove"):this.dispatchEvent(i,"mousemove"),h&&a.push("globalmousemove"),this.cursor=null===(l=i.target)||void 0===l?void 0:l.cursor);a.length>0&&this.all(i,a),this._allInteractiveElements.length=0,this._hitElements.length=0,s.overTargets=i.composedPath(),this.freeEvent(i)}mapPointerOver(t){var e;if(!(t instanceof U))return void(0,O.R)("EventBoundary cannot map a non-pointer event as a pointer event");const n=this.trackingData(t.pointerId),i=this.createPointerEvent(t),o="mouse"===i.pointerType||"pen"===i.pointerType;this.dispatchEvent(i,"pointerover"),o&&this.dispatchEvent(i,"mouseover"),"mouse"===i.pointerType&&(this.cursor=null===(e=i.target)||void 0===e?void 0:e.cursor);const s=this.clonePointerEvent(i,"pointerenter");for(s.eventPhase=s.AT_TARGET;s.target&&s.target!==this.rootTarget.parent;)s.currentTarget=s.target,this.notifyTarget(s),o&&this.notifyTarget(s,"mouseenter"),s.target=s.target.parent;n.overTargets=i.composedPath(),this.freeEvent(i),this.freeEvent(s)}mapPointerOut(t){if(!(t instanceof U))return void(0,O.R)("EventBoundary cannot map a non-pointer event as a pointer event");const e=this.trackingData(t.pointerId);if(e.overTargets){const n="mouse"===t.pointerType||"pen"===t.pointerType,i=this.findMountedTarget(e.overTargets),o=this.createPointerEvent(t,"pointerout",i);this.dispatchEvent(o),n&&this.dispatchEvent(o,"mouseout");const s=this.createPointerEvent(t,"pointerleave",i);for(s.eventPhase=s.AT_TARGET;s.target&&s.target!==this.rootTarget.parent;)s.currentTarget=s.target,this.notifyTarget(s),n&&this.notifyTarget(s,"mouseleave"),s.target=s.target.parent;e.overTargets=null,this.freeEvent(o),this.freeEvent(s)}this.cursor=null}mapPointerUp(t){if(!(t instanceof U))return void(0,O.R)("EventBoundary cannot map a non-pointer event as a pointer event");const e=performance.now(),n=this.createPointerEvent(t);if(this.dispatchEvent(n,"pointerup"),"touch"===n.pointerType)this.dispatchEvent(n,"touchend");else if("mouse"===n.pointerType||"pen"===n.pointerType){const t=2===n.button;this.dispatchEvent(n,t?"rightup":"mouseup")}const i=this.trackingData(t.pointerId),o=this.findMountedTarget(i.pressTargetsByButton[t.button]);let s=o;if(o&&!n.composedPath().includes(o)){let e=o;for(;e&&!n.composedPath().includes(e);){if(n.currentTarget=e,this.notifyTarget(n,"pointerupoutside"),"touch"===n.pointerType)this.notifyTarget(n,"touchendoutside");else if("mouse"===n.pointerType||"pen"===n.pointerType){const t=2===n.button;this.notifyTarget(n,t?"rightupoutside":"mouseupoutside")}e=e.parent}delete i.pressTargetsByButton[t.button],s=e}if(s){const o=this.clonePointerEvent(n,"click");o.target=s,o.path=null,i.clicksByButton[t.button]||(i.clicksByButton[t.button]={clickCount:0,target:o.target,timeStamp:e});const r=i.clicksByButton[t.button];if(r.target===o.target&&e-r.timeStamp<200?++r.clickCount:r.clickCount=1,r.target=o.target,r.timeStamp=e,o.detail=r.clickCount,"mouse"===o.pointerType){const t=2===o.button;this.dispatchEvent(o,t?"rightclick":"click")}else"touch"===o.pointerType&&this.dispatchEvent(o,"tap");this.dispatchEvent(o,"pointertap"),this.freeEvent(o)}this.freeEvent(n)}mapPointerUpOutside(t){if(!(t instanceof U))return void(0,O.R)("EventBoundary cannot map a non-pointer event as a pointer event");const e=this.trackingData(t.pointerId),n=this.findMountedTarget(e.pressTargetsByButton[t.button]),i=this.createPointerEvent(t);if(n){let o=n;for(;o;)i.currentTarget=o,this.notifyTarget(i,"pointerupoutside"),"touch"===i.pointerType?this.notifyTarget(i,"touchendoutside"):"mouse"!==i.pointerType&&"pen"!==i.pointerType||this.notifyTarget(i,2===i.button?"rightupoutside":"mouseupoutside"),o=o.parent;delete e.pressTargetsByButton[t.button]}this.freeEvent(i)}mapWheel(t){if(!(t instanceof R))return void(0,O.R)("EventBoundary cannot map a non-wheel event as a wheel event");const e=this.createWheelEvent(t);this.dispatchEvent(e),this.freeEvent(e)}findMountedTarget(t){if(!t)return null;let e=t[0];for(let n=1;n<t.length&&t[n].parent===e;n++)e=t[n];return e}createPointerEvent(t,e,n){var i;const o=this.allocateEvent(U);return this.copyPointerData(t,o),this.copyMouseData(t,o),this.copyData(t,o),o.nativeEvent=t.nativeEvent,o.originalEvent=t,o.target=null!==(i=null!==n&&void 0!==n?n:this.hitTest(o.global.x,o.global.y))&&void 0!==i?i:this._hitElements[0],"string"===typeof e&&(o.type=e),o}createWheelEvent(t){const e=this.allocateEvent(R);return this.copyWheelData(t,e),this.copyMouseData(t,e),this.copyData(t,e),e.nativeEvent=t.nativeEvent,e.originalEvent=t,e.target=this.hitTest(e.global.x,e.global.y),e}clonePointerEvent(t,e){const n=this.allocateEvent(U);return n.nativeEvent=t.nativeEvent,n.originalEvent=t.originalEvent,this.copyPointerData(t,n),this.copyMouseData(t,n),this.copyData(t,n),n.target=t.target,n.path=t.composedPath().slice(),n.type=null!==e&&void 0!==e?e:n.type,n}copyWheelData(t,e){e.deltaMode=t.deltaMode,e.deltaX=t.deltaX,e.deltaY=t.deltaY,e.deltaZ=t.deltaZ}copyPointerData(t,e){t instanceof U&&e instanceof U&&(e.pointerId=t.pointerId,e.width=t.width,e.height=t.height,e.isPrimary=t.isPrimary,e.pointerType=t.pointerType,e.pressure=t.pressure,e.tangentialPressure=t.tangentialPressure,e.tiltX=t.tiltX,e.tiltY=t.tiltY,e.twist=t.twist)}copyMouseData(t,e){t instanceof S&&e instanceof S&&(e.altKey=t.altKey,e.button=t.button,e.buttons=t.buttons,e.client.copyFrom(t.client),e.ctrlKey=t.ctrlKey,e.metaKey=t.metaKey,e.movement.copyFrom(t.movement),e.screen.copyFrom(t.screen),e.shiftKey=t.shiftKey,e.global.copyFrom(t.global))}copyData(t,e){e.isTrusted=t.isTrusted,e.srcElement=t.srcElement,e.timeStamp=performance.now(),e.type=t.type,e.detail=t.detail,e.view=t.view,e.which=t.which,e.layer.copyFrom(t.layer),e.page.copyFrom(t.page)}trackingData(t){return this.mappingState.trackingData[t]||(this.mappingState.trackingData[t]={pressTargetsByButton:{},clicksByButton:{},overTarget:null}),this.mappingState.trackingData[t]}allocateEvent(t){this.eventPool.has(t)||this.eventPool.set(t,[]);const e=this.eventPool.get(t).pop()||new t(this);return e.eventPhase=e.NONE,e.currentTarget=null,e.defaultPrevented=!1,e.path=null,e.target=null,e}freeEvent(t){if(t.manager!==this)throw new Error("It is illegal to free an event not managed by this EventBoundary!");const e=t.constructor;this.eventPool.has(e)||this.eventPool.set(e,[]),this.eventPool.get(e).push(t)}_notifyListeners(t,e){const n=t.currentTarget._events[e];if(n)if("fn"in n)n.once&&t.currentTarget.removeListener(e,n.fn,void 0,!0),n.fn.call(n.context,t);else for(let i=0,o=n.length;i<o&&!t.propagationImmediatelyStopped;i++)n[i].once&&t.currentTarget.removeListener(e,n[i].fn,void 0,!0),n[i].fn.call(n[i].context,t)}}const G={touchstart:"pointerdown",touchend:"pointerup",touchendoutside:"pointerupoutside",touchmove:"pointermove",touchcancel:"pointercancel"},H=class t{constructor(e){this.supportsTouchEvents="ontouchstart"in globalThis,this.supportsPointerEvents=!!globalThis.PointerEvent,this.domElement=null,this.resolution=1,this.renderer=e,this.rootBoundary=new Y(null),C.init(this),this.autoPreventDefault=!0,this._eventsAdded=!1,this._rootPointerEvent=new U(null),this._rootWheelEvent=new R(null),this.cursorStyles={default:"inherit",pointer:"pointer"},this.features=new Proxy((0,x.A)({},t.defaultEventFeatures),{set:(t,e,n)=>("globalMove"===e&&(this.rootBoundary.enableGlobalMoveEvents=n),t[e]=n,!0)}),this._onPointerDown=this._onPointerDown.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this._onPointerUp=this._onPointerUp.bind(this),this._onPointerOverOut=this._onPointerOverOut.bind(this),this.onWheel=this.onWheel.bind(this)}static get defaultEventMode(){return this._defaultEventMode}init(e){var n,i;const{canvas:o,resolution:s}=this.renderer;this.setTargetElement(o),this.resolution=s,t._defaultEventMode=null!==(n=e.eventMode)&&void 0!==n?n:"passive",Object.assign(this.features,null!==(i=e.eventFeatures)&&void 0!==i?i:{}),this.rootBoundary.enableGlobalMoveEvents=this.features.globalMove}resolutionChange(t){this.resolution=t}destroy(){this.setTargetElement(null),this.renderer=null,this._currentCursor=null}setCursor(t){t||(t="default");let e=!0;if(globalThis.OffscreenCanvas&&this.domElement instanceof OffscreenCanvas&&(e=!1),this._currentCursor===t)return;this._currentCursor=t;const n=this.cursorStyles[t];if(n)switch(typeof n){case"string":e&&(this.domElement.style.cursor=n);break;case"function":n(t);break;case"object":e&&Object.assign(this.domElement.style,n)}else e&&"string"===typeof t&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,t)&&(this.domElement.style.cursor=t)}get pointer(){return this._rootPointerEvent}_onPointerDown(t){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;const e=this._normalizeToPointerData(t);if(this.autoPreventDefault&&e[0].isNormalized){(t.cancelable||!("cancelable"in t))&&t.preventDefault()}for(let n=0,i=e.length;n<i;n++){const t=e[n],i=this._bootstrapEvent(this._rootPointerEvent,t);this.rootBoundary.mapEvent(i)}this.setCursor(this.rootBoundary.cursor)}_onPointerMove(t){if(!this.features.move)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,C.pointerMoved();const e=this._normalizeToPointerData(t);for(let n=0,i=e.length;n<i;n++){const t=this._bootstrapEvent(this._rootPointerEvent,e[n]);this.rootBoundary.mapEvent(t)}this.setCursor(this.rootBoundary.cursor)}_onPointerUp(t){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;let e=t.target;t.composedPath&&t.composedPath().length>0&&(e=t.composedPath()[0]);const n=e!==this.domElement?"outside":"",i=this._normalizeToPointerData(t);for(let o=0,s=i.length;o<s;o++){const t=this._bootstrapEvent(this._rootPointerEvent,i[o]);t.type+=n,this.rootBoundary.mapEvent(t)}this.setCursor(this.rootBoundary.cursor)}_onPointerOverOut(t){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;const e=this._normalizeToPointerData(t);for(let n=0,i=e.length;n<i;n++){const t=this._bootstrapEvent(this._rootPointerEvent,e[n]);this.rootBoundary.mapEvent(t)}this.setCursor(this.rootBoundary.cursor)}onWheel(t){if(!this.features.wheel)return;const e=this.normalizeWheelEvent(t);this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.rootBoundary.mapEvent(e)}setTargetElement(t){this._removeEvents(),this.domElement=t,C.domElement=t,this._addEvents()}_addEvents(){if(this._eventsAdded||!this.domElement)return;C.addTickerListener();const t=this.domElement.style;t&&(globalThis.navigator.msPointerEnabled?(t.msContentZooming="none",t.msTouchAction="none"):this.supportsPointerEvents&&(t.touchAction="none")),this.supportsPointerEvents?(globalThis.document.addEventListener("pointermove",this._onPointerMove,!0),this.domElement.addEventListener("pointerdown",this._onPointerDown,!0),this.domElement.addEventListener("pointerleave",this._onPointerOverOut,!0),this.domElement.addEventListener("pointerover",this._onPointerOverOut,!0),globalThis.addEventListener("pointerup",this._onPointerUp,!0)):(globalThis.document.addEventListener("mousemove",this._onPointerMove,!0),this.domElement.addEventListener("mousedown",this._onPointerDown,!0),this.domElement.addEventListener("mouseout",this._onPointerOverOut,!0),this.domElement.addEventListener("mouseover",this._onPointerOverOut,!0),globalThis.addEventListener("mouseup",this._onPointerUp,!0),this.supportsTouchEvents&&(this.domElement.addEventListener("touchstart",this._onPointerDown,!0),this.domElement.addEventListener("touchend",this._onPointerUp,!0),this.domElement.addEventListener("touchmove",this._onPointerMove,!0))),this.domElement.addEventListener("wheel",this.onWheel,{passive:!0,capture:!0}),this._eventsAdded=!0}_removeEvents(){if(!this._eventsAdded||!this.domElement)return;C.removeTickerListener();const t=this.domElement.style;t&&(globalThis.navigator.msPointerEnabled?(t.msContentZooming="",t.msTouchAction=""):this.supportsPointerEvents&&(t.touchAction="")),this.supportsPointerEvents?(globalThis.document.removeEventListener("pointermove",this._onPointerMove,!0),this.domElement.removeEventListener("pointerdown",this._onPointerDown,!0),this.domElement.removeEventListener("pointerleave",this._onPointerOverOut,!0),this.domElement.removeEventListener("pointerover",this._onPointerOverOut,!0),globalThis.removeEventListener("pointerup",this._onPointerUp,!0)):(globalThis.document.removeEventListener("mousemove",this._onPointerMove,!0),this.domElement.removeEventListener("mousedown",this._onPointerDown,!0),this.domElement.removeEventListener("mouseout",this._onPointerOverOut,!0),this.domElement.removeEventListener("mouseover",this._onPointerOverOut,!0),globalThis.removeEventListener("mouseup",this._onPointerUp,!0),this.supportsTouchEvents&&(this.domElement.removeEventListener("touchstart",this._onPointerDown,!0),this.domElement.removeEventListener("touchend",this._onPointerUp,!0),this.domElement.removeEventListener("touchmove",this._onPointerMove,!0))),this.domElement.removeEventListener("wheel",this.onWheel,!0),this.domElement=null,this._eventsAdded=!1}mapPositionToPoint(t,e,n){const i=this.domElement.isConnected?this.domElement.getBoundingClientRect():{x:0,y:0,width:this.domElement.width,height:this.domElement.height,left:0,top:0},o=1/this.resolution;t.x=(e-i.left)*(this.domElement.width/i.width)*o,t.y=(n-i.top)*(this.domElement.height/i.height)*o}_normalizeToPointerData(t){const e=[];if(this.supportsTouchEvents&&t instanceof TouchEvent)for(let n=0,i=t.changedTouches.length;n<i;n++){const i=t.changedTouches[n];"undefined"===typeof i.button&&(i.button=0),"undefined"===typeof i.buttons&&(i.buttons=1),"undefined"===typeof i.isPrimary&&(i.isPrimary=1===t.touches.length&&"touchstart"===t.type),"undefined"===typeof i.width&&(i.width=i.radiusX||1),"undefined"===typeof i.height&&(i.height=i.radiusY||1),"undefined"===typeof i.tiltX&&(i.tiltX=0),"undefined"===typeof i.tiltY&&(i.tiltY=0),"undefined"===typeof i.pointerType&&(i.pointerType="touch"),"undefined"===typeof i.pointerId&&(i.pointerId=i.identifier||0),"undefined"===typeof i.pressure&&(i.pressure=i.force||.5),"undefined"===typeof i.twist&&(i.twist=0),"undefined"===typeof i.tangentialPressure&&(i.tangentialPressure=0),"undefined"===typeof i.layerX&&(i.layerX=i.offsetX=i.clientX),"undefined"===typeof i.layerY&&(i.layerY=i.offsetY=i.clientY),i.isNormalized=!0,i.type=t.type,e.push(i)}else if(globalThis.MouseEvent&&(!(t instanceof MouseEvent)||this.supportsPointerEvents&&t instanceof globalThis.PointerEvent))e.push(t);else{const n=t;"undefined"===typeof n.isPrimary&&(n.isPrimary=!0),"undefined"===typeof n.width&&(n.width=1),"undefined"===typeof n.height&&(n.height=1),"undefined"===typeof n.tiltX&&(n.tiltX=0),"undefined"===typeof n.tiltY&&(n.tiltY=0),"undefined"===typeof n.pointerType&&(n.pointerType="mouse"),"undefined"===typeof n.pointerId&&(n.pointerId=1),"undefined"===typeof n.pressure&&(n.pressure=.5),"undefined"===typeof n.twist&&(n.twist=0),"undefined"===typeof n.tangentialPressure&&(n.tangentialPressure=0),n.isNormalized=!0,e.push(n)}return e}normalizeWheelEvent(t){const e=this._rootWheelEvent;return this._transferMouseData(e,t),e.deltaX=t.deltaX,e.deltaY=t.deltaY,e.deltaZ=t.deltaZ,e.deltaMode=t.deltaMode,this.mapPositionToPoint(e.screen,t.clientX,t.clientY),e.global.copyFrom(e.screen),e.offset.copyFrom(e.screen),e.nativeEvent=t,e.type=t.type,e}_bootstrapEvent(t,e){return t.originalEvent=null,t.nativeEvent=e,t.pointerId=e.pointerId,t.width=e.width,t.height=e.height,t.isPrimary=e.isPrimary,t.pointerType=e.pointerType,t.pressure=e.pressure,t.tangentialPressure=e.tangentialPressure,t.tiltX=e.tiltX,t.tiltY=e.tiltY,t.twist=e.twist,this._transferMouseData(t,e),this.mapPositionToPoint(t.screen,e.clientX,e.clientY),t.global.copyFrom(t.screen),t.offset.copyFrom(t.screen),t.isTrusted=e.isTrusted,"pointerleave"===t.type&&(t.type="pointerout"),t.type.startsWith("mouse")&&(t.type=t.type.replace("mouse","pointer")),t.type.startsWith("touch")&&(t.type=G[t.type]||t.type),t}_transferMouseData(t,e){t.isTrusted=e.isTrusted,t.srcElement=e.srcElement,t.timeStamp=performance.now(),t.type=e.type,t.altKey=e.altKey,t.button=e.button,t.buttons=e.buttons,t.client.x=e.clientX,t.client.y=e.clientY,t.ctrlKey=e.ctrlKey,t.metaKey=e.metaKey,t.movement.x=e.movementX,t.movement.y=e.movementY,t.page.x=e.pageX,t.page.y=e.pageY,t.relatedTarget=null,t.shiftKey=e.shiftKey}};H.extension={name:"events",type:[i.Ag.WebGLSystem,i.Ag.CanvasSystem,i.Ag.WebGPUSystem],priority:-1},H.defaultEventFeatures={move:!0,globalMove:!0,click:!0,wheel:!0};let W=H;const K={onclick:null,onmousedown:null,onmouseenter:null,onmouseleave:null,onmousemove:null,onglobalmousemove:null,onmouseout:null,onmouseover:null,onmouseup:null,onmouseupoutside:null,onpointercancel:null,onpointerdown:null,onpointerenter:null,onpointerleave:null,onpointermove:null,onglobalpointermove:null,onpointerout:null,onpointerover:null,onpointertap:null,onpointerup:null,onpointerupoutside:null,onrightclick:null,onrightdown:null,onrightup:null,onrightupoutside:null,ontap:null,ontouchcancel:null,ontouchend:null,ontouchendoutside:null,ontouchmove:null,onglobaltouchmove:null,ontouchstart:null,onwheel:null,get interactive(){return"dynamic"===this.eventMode||"static"===this.eventMode},set interactive(t){this.eventMode=t?"static":"passive"},_internalEventMode:void 0,get eventMode(){var t;return null!==(t=this._internalEventMode)&&void 0!==t?t:W.defaultEventMode},set eventMode(t){this._internalEventMode=t},isInteractive(){return"static"===this.eventMode||"dynamic"===this.eventMode},interactiveChildren:!0,hitArea:null,addEventListener(t,e,n){const i="boolean"===typeof n&&n||"object"===typeof n&&n.capture,o="object"===typeof n?n.signal:void 0,s="object"===typeof n&&!0===n.once,r="function"===typeof e?void 0:e;t=i?"".concat(t,"capture"):t;const a="function"===typeof e?e:e.handleEvent,h=this;o&&o.addEventListener("abort",(()=>{h.off(t,a,r)})),s?h.once(t,a,r):h.on(t,a,r)},removeEventListener(t,e,n){const i="function"===typeof e?void 0:e;t="boolean"===typeof n&&n||"object"===typeof n&&n.capture?"".concat(t,"capture"):t,e="function"===typeof e?e:e.handleEvent,this.off(t,e,i)},dispatchEvent(t){if(!(t instanceof r))throw new Error("Container cannot propagate events outside of the Federated Events API");return t.defaultPrevented=!1,t.path=null,t.target=this,t.manager.dispatchEvent(t),!t.defaultPrevented}};i.XO.add(W),o.mc.mixin(K);n(2833),n(1418),n(1878),n(4207),n(5231),n(2394),n(3646),n(8480),n(464),n(4821),n(769)}}]);
//# sourceMappingURL=372.85a881ab.chunk.js.map