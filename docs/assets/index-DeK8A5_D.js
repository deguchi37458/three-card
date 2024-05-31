var Xp=Object.defineProperty;var Yp=(r,t,e)=>t in r?Xp(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var di=(r,t,e)=>(Yp(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="164",Gr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$p=0,Eu=1,qp=2,Bd=1,jp=2,vi=3,Zi=0,_n=1,Mi=2,Yi=0,vs=1,Tu=2,bu=3,Au=4,Kp=5,vr=100,Zp=101,Jp=102,Qp=103,tm=104,em=200,nm=201,im=202,rm=203,ic=204,rc=205,sm=206,om=207,am=208,lm=209,cm=210,um=211,hm=212,dm=213,fm=214,pm=0,mm=1,_m=2,La=3,gm=4,vm=5,xm=6,Sm=7,zd=0,Mm=1,ym=2,$i=0,Em=1,Tm=2,bm=3,Am=4,wm=5,Cm=6,Rm=7,kd=300,ws=301,Cs=302,sc=303,oc=304,qa=306,ac=1e3,Sr=1001,lc=1002,zn=1003,Pm=1004,Bo=1005,jn=1006,al=1007,Mr=1008,Ji=1009,Lm=1010,Dm=1011,Hd=1012,Vd=1013,Rs=1014,ki=1015,ja=1016,Gd=1017,Wd=1018,Uo=1020,Im=35902,Um=1021,Nm=1022,ii=1023,Om=1024,Fm=1025,xs=1026,xo=1027,Bm=1028,Xd=1029,zm=1030,Yd=1031,$d=1033,ll=33776,cl=33777,ul=33778,hl=33779,wu=35840,Cu=35841,Ru=35842,Pu=35843,Lu=36196,Du=37492,Iu=37496,Uu=37808,Nu=37809,Ou=37810,Fu=37811,Bu=37812,zu=37813,ku=37814,Hu=37815,Vu=37816,Gu=37817,Wu=37818,Xu=37819,Yu=37820,$u=37821,dl=36492,qu=36494,ju=36495,km=36283,Ku=36284,Zu=36285,Ju=36286,Hm=3200,Vm=3201,Gm=0,Wm=1,zi="",Zn="srgb",ir="srgb-linear",kc="display-p3",Ka="display-p3-linear",Da="linear",_e="srgb",Ia="rec709",Ua="p3",Xr=7680,Qu=519,Xm=512,Ym=513,$m=514,qd=515,qm=516,jm=517,Km=518,Zm=519,th=35044,eh="300 es",Ei=2e3,Na=2001;class kr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nh=1234567;const ro=Math.PI/180,So=180/Math.PI;function zs(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[r&255]+$e[r>>8&255]+$e[r>>16&255]+$e[r>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function Ze(r,t,e){return Math.max(t,Math.min(e,r))}function Hc(r,t){return(r%t+t)%t}function Jm(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Qm(r,t,e){return r!==t?(e-r)/(t-r):0}function so(r,t,e){return(1-e)*r+e*t}function t_(r,t,e,n){return so(r,t,1-Math.exp(-e*n))}function e_(r,t=1){return t-Math.abs(Hc(r,t*2)-t)}function n_(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function i_(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function r_(r,t){return r+Math.floor(Math.random()*(t-r+1))}function s_(r,t){return r+Math.random()*(t-r)}function o_(r){return r*(.5-Math.random())}function a_(r){r!==void 0&&(nh=r);let t=nh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function l_(r){return r*ro}function c_(r){return r*So}function u_(r){return(r&r-1)===0&&r!==0}function h_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function d_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function f_(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function sn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const p_={DEG2RAD:ro,RAD2DEG:So,generateUUID:zs,clamp:Ze,euclideanModulo:Hc,mapLinear:Jm,inverseLerp:Qm,lerp:so,damp:t_,pingpong:e_,smoothstep:n_,smootherstep:i_,randInt:r_,randFloat:s_,randFloatSpread:o_,seededRandom:a_,degToRad:l_,radToDeg:c_,isPowerOfTwo:u_,ceilPowerOfTwo:h_,floorPowerOfTwo:d_,setQuaternionFromProperEuler:f_,normalize:sn,denormalize:hs};class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,i,s,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],S=i[4],E=i[7],R=i[2],w=i[5],b=i[8];return s[0]=o*_+a*M+l*R,s[3]=o*m+a*S+l*w,s[6]=o*p+a*E+l*b,s[1]=c*_+u*M+h*R,s[4]=c*m+u*S+h*w,s[7]=c*p+u*E+h*b,s[2]=d*_+f*M+g*R,s[5]=d*m+f*S+g*w,s[8]=d*p+f*E+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,g=e*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fl.makeScale(t,e)),this}rotate(t){return this.premultiply(fl.makeRotation(-t)),this}translate(t,e){return this.premultiply(fl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fl=new Jt;function jd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Mo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function m_(){const r=Mo("canvas");return r.style.display="block",r}const ih={};function __(r){r in ih||(ih[r]=!0,console.warn(r))}const rh=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sh=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zo={[ir]:{transfer:Da,primaries:Ia,toReference:r=>r,fromReference:r=>r},[Zn]:{transfer:_e,primaries:Ia,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ka]:{transfer:Da,primaries:Ua,toReference:r=>r.applyMatrix3(sh),fromReference:r=>r.applyMatrix3(rh)},[kc]:{transfer:_e,primaries:Ua,toReference:r=>r.convertSRGBToLinear().applyMatrix3(sh),fromReference:r=>r.applyMatrix3(rh).convertLinearToSRGB()}},g_=new Set([ir,Ka]),de={enabled:!0,_workingColorSpace:ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!g_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=zo[t].toReference,i=zo[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return zo[r].primaries},getTransfer:function(r){return r===zi?Da:zo[r].transfer}};function Ss(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function pl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Yr;class v_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yr===void 0&&(Yr=Mo("canvas")),Yr.width=t.width,Yr.height=t.height;const n=Yr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ss(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ss(e[n]/255)*255):e[n]=Ss(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let x_=0;class Kd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=zs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ml(i[o].image)):s.push(ml(i[o]))}else s=ml(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ml(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?v_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let S_=0;class pn extends kr{constructor(t=pn.DEFAULT_IMAGE,e=pn.DEFAULT_MAPPING,n=Sr,i=Sr,s=jn,o=Mr,a=ii,l=Ji,c=pn.DEFAULT_ANISOTROPY,u=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=zs(),this.name="",this.source=new Kd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ac:t.x=t.x-Math.floor(t.x);break;case Sr:t.x=t.x<0?0:1;break;case lc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ac:t.y=t.y-Math.floor(t.y);break;case Sr:t.y=t.y<0?0:1;break;case lc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=kd;pn.DEFAULT_ANISOTROPY=1;class Ve{constructor(t=0,e=0,n=0,i=1){Ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,E=(f+1)/2,R=(p+1)/2,w=(u+d)/4,b=(h+_)/4,L=(g+m)/4;return S>E&&S>R?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=w/n,s=b/n):E>R?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=w/i,s=L/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=b/s,i=L/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class M_ extends kr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new pn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Kd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends M_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zd extends pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=zn,this.minFilter=zn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class y_ extends pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=zn,this.minFilter=zn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const R=Math.sqrt(S),w=Math.atan2(R,p*M);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const E=a*M;if(l=l*m+d*E,c=c*m+f*E,u=u*m+g*E,h=h*m+_*E,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-a*f,t[e+2]=c*g+u*f+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,n=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _l.copy(this).projectOnVector(t),this.sub(_l)}reflect(t){return this.sub(_l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _l=new X,oh=new Ir;class No{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Wn):Wn.fromBufferAttribute(s,o),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ko.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ko.copy(n.boundingBox)),ko.applyMatrix4(t.matrixWorld),this.union(ko)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Ho.subVectors(this.max,Gs),$r.subVectors(t.a,Gs),qr.subVectors(t.b,Gs),jr.subVectors(t.c,Gs),Pi.subVectors(qr,$r),Li.subVectors(jr,qr),or.subVectors($r,jr);let e=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-or.z,or.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,or.z,0,-or.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-or.y,or.x,0];return!gl(e,$r,qr,jr,Ho)||(e=[1,0,0,0,1,0,0,0,1],!gl(e,$r,qr,jr,Ho))?!1:(Vo.crossVectors(Pi,Li),e=[Vo.x,Vo.y,Vo.z],gl(e,$r,qr,jr,Ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fi=[new X,new X,new X,new X,new X,new X,new X,new X],Wn=new X,ko=new No,$r=new X,qr=new X,jr=new X,Pi=new X,Li=new X,or=new X,Gs=new X,Ho=new X,Vo=new X,ar=new X;function gl(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ar.fromArray(r,s);const a=i.x*Math.abs(ar.x)+i.y*Math.abs(ar.y)+i.z*Math.abs(ar.z),l=t.dot(ar),c=e.dot(ar),u=n.dot(ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const E_=new No,Ws=new X,vl=new X;class Vc{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):E_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const e=Ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ws,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(vl)),this.expandByPoint(Ws.copy(t.center).sub(vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new X,xl=new X,Go=new X,Di=new X,Sl=new X,Wo=new X,Ml=new X;class Gc{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){xl.copy(t).add(e).multiplyScalar(.5),Go.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(xl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Go),a=Di.dot(this.direction),l=-Di.dot(Go),c=Di.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(xl).addScaledVector(Go,d),f}intersectSphere(t,e){pi.subVectors(t.center,this.origin);const n=pi.dot(this.direction),i=pi.dot(pi)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,i,s){Sl.subVectors(e,t),Wo.subVectors(n,t),Ml.crossVectors(Sl,Wo);let o=this.direction.dot(Ml),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,t);const l=a*this.direction.dot(Wo.crossVectors(Di,Wo));if(l<0)return null;const c=a*this.direction.dot(Sl.cross(Di));if(c<0||l+c>o)return null;const u=-a*Di.dot(Ml);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,i,s,o,a,l,c,u,h,d,f,g,_,m){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,h,d,f,g,_,m)}set(t,e,n,i,s,o,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Kr.setFromMatrixColumn(t,0).length(),s=1/Kr.setFromMatrixColumn(t,1).length(),o=1/Kr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(T_,t,b_)}lookAt(t,e,n){const i=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ii.crossVectors(n,yn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ii.crossVectors(n,yn)),Ii.normalize(),Xo.crossVectors(yn,Ii),i[0]=Ii.x,i[4]=Xo.x,i[8]=yn.x,i[1]=Ii.y,i[5]=Xo.y,i[9]=yn.y,i[2]=Ii.z,i[6]=Xo.z,i[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],S=n[7],E=n[11],R=n[15],w=i[0],b=i[4],L=i[8],y=i[12],v=i[1],U=i[5],N=i[9],D=i[13],$=i[2],q=i[6],K=i[10],j=i[14],z=i[3],J=i[7],C=i[11],ht=i[15];return s[0]=o*w+a*v+l*$+c*z,s[4]=o*b+a*U+l*q+c*J,s[8]=o*L+a*N+l*K+c*C,s[12]=o*y+a*D+l*j+c*ht,s[1]=u*w+h*v+d*$+f*z,s[5]=u*b+h*U+d*q+f*J,s[9]=u*L+h*N+d*K+f*C,s[13]=u*y+h*D+d*j+f*ht,s[2]=g*w+_*v+m*$+p*z,s[6]=g*b+_*U+m*q+p*J,s[10]=g*L+_*N+m*K+p*C,s[14]=g*y+_*D+m*j+p*ht,s[3]=M*w+S*v+E*$+R*z,s[7]=M*b+S*U+E*q+R*J,s[11]=M*L+S*N+E*K+R*C,s[15]=M*y+S*D+E*j+R*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+m*(+e*c*h-e*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-i*a*u-e*l*h+e*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,S=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,E=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,R=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,w=e*M+n*S+i*E+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=M*b,t[1]=(_*d*s-h*m*s-_*i*f+n*m*f+h*i*p-n*d*p)*b,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*b,t[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*b,t[4]=S*b,t[5]=(u*m*s-g*d*s+g*i*f-e*m*f-u*i*p+e*d*p)*b,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*b,t[7]=(o*d*s-u*l*s+u*i*c-e*d*c-o*i*f+e*l*f)*b,t[8]=E*b,t[9]=(g*h*s-u*_*s-g*n*f+e*_*f+u*n*p-e*h*p)*b,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*b,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*f-e*a*f)*b,t[12]=R*b,t[13]=(u*_*i-g*h*i+g*n*d-e*_*d-u*n*m+e*h*m)*b,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*b,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*d+e*a*d)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,g=s*h,_=o*u,m=o*h,p=a*h,M=l*c,S=l*u,E=l*h,R=n.x,w=n.y,b=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+E)*R,i[2]=(g-S)*R,i[3]=0,i[4]=(f-E)*w,i[5]=(1-(d+p))*w,i[6]=(m+M)*w,i[7]=0,i[8]=(g+S)*b,i[9]=(m-M)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Kr.set(i[0],i[1],i[2]).length();const o=Kr.set(i[4],i[5],i[6]).length(),a=Kr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Xn.copy(this);const c=1/s,u=1/o,h=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,e.setFromRotationMatrix(Xn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Ei){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===Ei)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Na)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Ei){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-s),d=(e+t)*c,f=(n+i)*u;let g,_;if(a===Ei)g=(o+s)*h,_=-2*h;else if(a===Na)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Kr=new X,Xn=new Ae,T_=new X(0,0,0),b_=new X(1,1,1),Ii=new X,Xo=new X,yn=new X,ah=new Ae,lh=new Ir;class Ai{constructor(t=0,e=0,n=0,i=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ah,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lh.setFromEuler(this),this.setFromQuaternion(lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class Wc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let A_=0;const ch=new X,Zr=new Ir,mi=new Ae,Yo=new X,Xs=new X,w_=new X,C_=new Ir,uh=new X(1,0,0),hh=new X(0,1,0),dh=new X(0,0,1),fh={type:"added"},R_={type:"removed"},Jr={type:"childadded",child:null},yl={type:"childremoved",child:null};class Qe extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const t=new X,e=new Ai,n=new Ir,i=new X(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Jt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zr.setFromAxisAngle(t,e),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(t,e){return Zr.setFromAxisAngle(t,e),this.quaternion.premultiply(Zr),this}rotateX(t){return this.rotateOnAxis(uh,t)}rotateY(t){return this.rotateOnAxis(hh,t)}rotateZ(t){return this.rotateOnAxis(dh,t)}translateOnAxis(t,e){return ch.copy(t).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uh,t)}translateY(t){return this.translateOnAxis(hh,t)}translateZ(t){return this.translateOnAxis(dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yo.copy(t):Yo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Xs,Yo,this.up):mi.lookAt(Yo,Xs,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),Zr.setFromRotationMatrix(mi),this.quaternion.premultiply(Zr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fh),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(R_),yl.child=t,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fh),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,w_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,C_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Qe.DEFAULT_UP=new X(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new X,_i=new X,El=new X,gi=new X,Qr=new X,ts=new X,ph=new X,Tl=new X,bl=new X,Al=new X;class ei{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Yn.subVectors(t,e),i.cross(Yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Yn.subVectors(i,e),_i.subVectors(n,e),El.subVectors(t,e);const o=Yn.dot(Yn),a=Yn.dot(_i),l=Yn.dot(El),c=_i.dot(_i),u=_i.dot(El),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static isFrontFacing(t,e,n,i){return Yn.subVectors(n,e),_i.subVectors(t,e),Yn.cross(_i).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Yn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ei.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Qr.subVectors(i,n),ts.subVectors(s,n),Tl.subVectors(t,n);const l=Qr.dot(Tl),c=ts.dot(Tl);if(l<=0&&c<=0)return e.copy(n);bl.subVectors(t,i);const u=Qr.dot(bl),h=ts.dot(bl);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Qr,o);Al.subVectors(t,s);const f=Qr.dot(Al),g=ts.dot(Al);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ts,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return ph.subVectors(s,i),a=(h-u)/(h-u+(f-g)),e.copy(i).addScaledVector(ph,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Qr,o).addScaledVector(ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},$o={h:0,s:0,l:0};function wl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class ue{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=Hc(t,1),e=Ze(e,0,1),n=Ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=wl(o,s,t+1/3),this.g=wl(o,s,t),this.b=wl(o,s,t-1/3)}return de.toWorkingColorSpace(this,i),this}setStyle(t,e=Zn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Zn){const n=Jd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}copyLinearToSRGB(t){return this.r=pl(t.r),this.g=pl(t.g),this.b=pl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zn){return de.fromWorkingColorSpace(qe.copy(this),t),Math.round(Ze(qe.r*255,0,255))*65536+Math.round(Ze(qe.g*255,0,255))*256+Math.round(Ze(qe.b*255,0,255))}getHexString(t=Zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,i=qe.g,s=qe.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Zn){de.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,i=qe.b;return t!==Zn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL($o);const n=so(Ui.h,$o.h,e),i=so(Ui.s,$o.s,e),s=so(Ui.l,$o.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new ue;ue.NAMES=Jd;let P_=0;class Za extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=vs,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=rc,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ic&&(n.blendSrc=this.blendSrc),this.blendDst!==rc&&(n.blendDst=this.blendDst),this.blendEquation!==vr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==La&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Fi extends Za{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new X,qo=new Yt;class ai{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=th,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return __("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qo.fromBufferAttribute(this,e),qo.applyMatrix3(t),this.setXY(e,qo.x,qo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),i=sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==th&&(t.usage=this.usage),t}}class Qd extends ai{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tf extends ai{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Tr extends ai{constructor(t,e,n){super(new Float32Array(t),e,n)}}let L_=0;const Un=new Ae,Cl=new Qe,es=new X,En=new No,Ys=new No,Be=new X;class Hr extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jd(t)?tf:Qd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return Cl.lookAt(t),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Tr(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(En.min,Ys.min),En.expandByPoint(Be),Be.addVectors(En.max,Ys.max),En.expandByPoint(Be)):(En.expandByPoint(Ys.min),En.expandByPoint(Ys.max))}En.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Be.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Be.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(t,c),Be.add(es)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new X,l[L]=new X;const c=new X,u=new X,h=new X,d=new Yt,f=new Yt,g=new Yt,_=new X,m=new X;function p(L,y,v){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,v),d.fromBufferAttribute(s,L),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,v),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(U),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(U),a[L].add(_),a[y].add(_),a[v].add(_),l[L].add(m),l[y].add(m),l[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,y=M.length;L<y;++L){const v=M[L],U=v.start,N=v.count;for(let D=U,$=U+N;D<$;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const S=new X,E=new X,R=new X,w=new X;function b(L){R.fromBufferAttribute(i,L),w.copy(R);const y=a[L];S.copy(y),S.sub(R.multiplyScalar(R.dot(y))).normalize(),E.crossVectors(w,y);const U=E.dot(l[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,U)}for(let L=0,y=M.length;L<y;++L){const v=M[L],U=v.start,N=v.count;for(let D=U,$=U+N;D<$;D+=3)b(t.getX(D+0)),b(t.getX(D+1)),b(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ai(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,h=new X;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new ai(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Hr,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mh=new Ae,lr=new Gc,jo=new Vc,_h=new X,ns=new X,is=new X,rs=new X,Rl=new X,Ko=new X,Zo=new Yt,Jo=new Yt,Qo=new Yt,gh=new X,vh=new X,xh=new X,ta=new X,ea=new X;class ri extends Qe{constructor(t=new Hr,e=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ko.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Rl.fromBufferAttribute(h,t),o?Ko.addScaledVector(Rl,u):Ko.addScaledVector(Rl.sub(e),u))}e.add(Ko)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),lr.copy(t.ray).recast(t.near),!(jo.containsPoint(lr.origin)===!1&&(lr.intersectSphere(jo,_h)===null||lr.origin.distanceToSquared(_h)>(t.far-t.near)**2))&&(mh.copy(s).invert(),lr.copy(t.ray).applyMatrix4(mh),!(n.boundingBox!==null&&lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,lr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=M,R=S;E<R;E+=3){const w=a.getX(E),b=a.getX(E+1),L=a.getX(E+2);i=na(this,p,t,n,c,u,h,w,b,L),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),S=a.getX(m+1),E=a.getX(m+2);i=na(this,o,t,n,c,u,h,M,S,E),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=M,R=S;E<R;E+=3){const w=E,b=E+1,L=E+2;i=na(this,p,t,n,c,u,h,w,b,L),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,S=m+1,E=m+2;i=na(this,o,t,n,c,u,h,M,S,E),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function D_(r,t,e,n,i,s,o,a){let l;if(t.side===_n?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Zi,a),l===null)return null;ea.copy(a),ea.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ea);return c<e.near||c>e.far?null:{distance:c,point:ea.clone(),object:r}}function na(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,ns),r.getVertexPosition(l,is),r.getVertexPosition(c,rs);const u=D_(r,t,e,n,ns,is,rs,ta);if(u){i&&(Zo.fromBufferAttribute(i,a),Jo.fromBufferAttribute(i,l),Qo.fromBufferAttribute(i,c),u.uv=ei.getInterpolation(ta,ns,is,rs,Zo,Jo,Qo,new Yt)),s&&(Zo.fromBufferAttribute(s,a),Jo.fromBufferAttribute(s,l),Qo.fromBufferAttribute(s,c),u.uv1=ei.getInterpolation(ta,ns,is,rs,Zo,Jo,Qo,new Yt)),o&&(gh.fromBufferAttribute(o,a),vh.fromBufferAttribute(o,l),xh.fromBufferAttribute(o,c),u.normal=ei.getInterpolation(ta,ns,is,rs,gh,vh,xh,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new X,materialIndex:0};ei.getNormal(ns,is,rs,h.normal),u.face=h}return u}class ks extends Hr{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Tr(c,3)),this.setAttribute("normal",new Tr(u,3)),this.setAttribute("uv",new Tr(h,2));function g(_,m,p,M,S,E,R,w,b,L,y){const v=E/b,U=R/L,N=E/2,D=R/2,$=w/2,q=b+1,K=L+1;let j=0,z=0;const J=new X;for(let C=0;C<K;C++){const ht=C*U-D;for(let at=0;at<q;at++){const Bt=at*v-N;J[_]=Bt*M,J[m]=ht*S,J[p]=$,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=w>0?1:-1,u.push(J.x,J.y,J.z),h.push(at/b),h.push(1-C/L),j+=1}}for(let C=0;C<L;C++)for(let ht=0;ht<b;ht++){const at=d+ht+q*C,Bt=d+ht+q*(C+1),Y=d+(ht+1)+q*(C+1),tt=d+(ht+1)+q*C;l.push(at,Bt,tt),l.push(Bt,Y,tt),z+=6}a.addGroup(f,z,y),f+=z,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ps(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function an(r){const t={};for(let e=0;e<r.length;e++){const n=Ps(r[e]);for(const i in n)t[i]=n[i]}return t}function I_(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ef(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const U_={clone:Ps,merge:an};var N_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Za{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N_,this.fragmentShader=O_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=I_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nf extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new X,Sh=new Yt,Mh=new Yt;class On extends nf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=So*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return So*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,Sh,Mh),e.subVectors(Mh,Sh)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ro*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ss=-90,os=1;class F_ extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new On(ss,os,t,e);i.layers=this.layers,this.add(i);const s=new On(ss,os,t,e);s.layers=this.layers,this.add(s);const o=new On(ss,os,t,e);o.layers=this.layers,this.add(o);const a=new On(ss,os,t,e);a.layers=this.layers,this.add(a);const l=new On(ss,os,t,e);l.layers=this.layers,this.add(l);const c=new On(ss,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Na)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class rf extends pn{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ws,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class B_ extends Dr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new rf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ks(5,5,5),s=new Qi({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Yi});s.uniforms.tEquirect.value=e;const o=new ri(i,s),a=e.minFilter;return e.minFilter===Mr&&(e.minFilter=jn),new F_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Pl=new X,z_=new X,k_=new Jt;class Bi{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Pl.subVectors(n,e).cross(z_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Pl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||k_.getNormalMatrix(t),i=this.coplanarPoint(Pl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new Vc,ia=new X;class Xc{constructor(t=new Bi,e=new Bi,n=new Bi,i=new Bi,s=new Bi,o=new Bi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ei){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],S=i[14],E=i[15];if(n[0].setComponents(l-s,d-c,m-f,E-p).normalize(),n[1].setComponents(l+s,d+c,m+f,E+p).normalize(),n[2].setComponents(l+o,d+u,m+g,E+M).normalize(),n[3].setComponents(l-o,d-u,m-g,E-M).normalize(),n[4].setComponents(l-a,d-h,m-_,E-S).normalize(),e===Ei)n[5].setComponents(l+a,d+h,m+_,E+S).normalize();else if(e===Na)n[5].setComponents(a,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ia.x=i.normal.x>0?t.max.x:t.min.x,ia.y=i.normal.y>0?t.max.y:t.min.y,ia.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sf(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function H_(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(r.bindBuffer(c,a),h.count===-1&&d.length===0&&r.bufferSubData(c,0,u),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Ja extends Hr{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let S=0;S<c;S++){const E=S*h-s;g.push(E,-M,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const S=M+c*p,E=M+c*(p+1),R=M+1+c*(p+1),w=M+1+c*p;f.push(S,E,w),f.push(E,R,w)}this.setIndex(f),this.setAttribute("position",new Tr(g,3)),this.setAttribute("normal",new Tr(_,3)),this.setAttribute("uv",new Tr(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.width,t.height,t.widthSegments,t.heightSegments)}}var V_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,W_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,j_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Z_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,J_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ng=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",xg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ig=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ug=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Og=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,i0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,r0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,h0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,g0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,b0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,A0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,L0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,O0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,k0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,q0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,j0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,K0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ev=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ov=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_v=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:V_,alphahash_pars_fragment:G_,alphamap_fragment:W_,alphamap_pars_fragment:X_,alphatest_fragment:Y_,alphatest_pars_fragment:$_,aomap_fragment:q_,aomap_pars_fragment:j_,batching_pars_vertex:K_,batching_vertex:Z_,begin_vertex:J_,beginnormal_vertex:Q_,bsdfs:tg,iridescence_fragment:eg,bumpmap_pars_fragment:ng,clipping_planes_fragment:ig,clipping_planes_pars_fragment:rg,clipping_planes_pars_vertex:sg,clipping_planes_vertex:og,color_fragment:ag,color_pars_fragment:lg,color_pars_vertex:cg,color_vertex:ug,common:hg,cube_uv_reflection_fragment:dg,defaultnormal_vertex:fg,displacementmap_pars_vertex:pg,displacementmap_vertex:mg,emissivemap_fragment:_g,emissivemap_pars_fragment:gg,colorspace_fragment:vg,colorspace_pars_fragment:xg,envmap_fragment:Sg,envmap_common_pars_fragment:Mg,envmap_pars_fragment:yg,envmap_pars_vertex:Eg,envmap_physical_pars_fragment:Ug,envmap_vertex:Tg,fog_vertex:bg,fog_pars_vertex:Ag,fog_fragment:wg,fog_pars_fragment:Cg,gradientmap_pars_fragment:Rg,lightmap_pars_fragment:Pg,lights_lambert_fragment:Lg,lights_lambert_pars_fragment:Dg,lights_pars_begin:Ig,lights_toon_fragment:Ng,lights_toon_pars_fragment:Og,lights_phong_fragment:Fg,lights_phong_pars_fragment:Bg,lights_physical_fragment:zg,lights_physical_pars_fragment:kg,lights_fragment_begin:Hg,lights_fragment_maps:Vg,lights_fragment_end:Gg,logdepthbuf_fragment:Wg,logdepthbuf_pars_fragment:Xg,logdepthbuf_pars_vertex:Yg,logdepthbuf_vertex:$g,map_fragment:qg,map_pars_fragment:jg,map_particle_fragment:Kg,map_particle_pars_fragment:Zg,metalnessmap_fragment:Jg,metalnessmap_pars_fragment:Qg,morphinstance_vertex:t0,morphcolor_vertex:e0,morphnormal_vertex:n0,morphtarget_pars_vertex:i0,morphtarget_vertex:r0,normal_fragment_begin:s0,normal_fragment_maps:o0,normal_pars_fragment:a0,normal_pars_vertex:l0,normal_vertex:c0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:h0,clearcoat_normal_fragment_maps:d0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:p0,opaque_fragment:m0,packing:_0,premultiplied_alpha_fragment:g0,project_vertex:v0,dithering_fragment:x0,dithering_pars_fragment:S0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:y0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:T0,shadowmap_vertex:b0,shadowmask_pars_fragment:A0,skinbase_vertex:w0,skinning_pars_vertex:C0,skinning_vertex:R0,skinnormal_vertex:P0,specularmap_fragment:L0,specularmap_pars_fragment:D0,tonemapping_fragment:I0,tonemapping_pars_fragment:U0,transmission_fragment:N0,transmission_pars_fragment:O0,uv_pars_fragment:F0,uv_pars_vertex:B0,uv_vertex:z0,worldpos_vertex:k0,background_vert:H0,background_frag:V0,backgroundCube_vert:G0,backgroundCube_frag:W0,cube_vert:X0,cube_frag:Y0,depth_vert:$0,depth_frag:q0,distanceRGBA_vert:j0,distanceRGBA_frag:K0,equirect_vert:Z0,equirect_frag:J0,linedashed_vert:Q0,linedashed_frag:tv,meshbasic_vert:ev,meshbasic_frag:nv,meshlambert_vert:iv,meshlambert_frag:rv,meshmatcap_vert:sv,meshmatcap_frag:ov,meshnormal_vert:av,meshnormal_frag:lv,meshphong_vert:cv,meshphong_frag:uv,meshphysical_vert:hv,meshphysical_frag:dv,meshtoon_vert:fv,meshtoon_frag:pv,points_vert:mv,points_frag:_v,shadow_vert:gv,shadow_frag:vv,sprite_vert:xv,sprite_frag:Sv},mt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ti={basic:{uniforms:an([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:an([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ue(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:an([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:an([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:an([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new ue(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:an([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:an([mt.points,mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:an([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:an([mt.common,mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:an([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:an([mt.sprite,mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:an([mt.common,mt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:an([mt.lights,mt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};ti.physical={uniforms:an([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const ra={r:0,b:0,g:0},ur=new Ai,Mv=new Ae;function yv(r,t,e,n,i,s,o){const a=new ue(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function _(M){let S=!1;const E=g(M);E===null?p(a,l):E&&E.isColor&&(p(E,1),S=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil)}function m(M,S){const E=g(S);E&&(E.isCubeTexture||E.mapping===qa)?(u===void 0&&(u=new ri(new ks(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Ps(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ur.copy(S.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mv.makeRotationFromEuler(ur)),u.material.toneMapped=de.getTransfer(E.colorSpace)!==_e,(h!==E||d!==E.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,f=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ri(new Ja(2,2),new Qi({name:"BackgroundMaterial",uniforms:Ps(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=de.getTransfer(E.colorSpace)!==_e,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,f=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,S){M.getRGB(ra,ef(r)),n.buffers.color.setClear(ra.r,ra.g,ra.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m}}function Ev(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(v,U,N,D,$){let q=!1;const K=h(D,N,U);s!==K&&(s=K,c(s.object)),q=f(v,D,N,$),q&&g(v,D,N,$),$!==null&&t.update($,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,E(v,U,N,D),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function h(v,U,N){const D=N.wireframe===!0;let $=n[v.id];$===void 0&&($={},n[v.id]=$);let q=$[U.id];q===void 0&&(q={},$[U.id]=q);let K=q[D];return K===void 0&&(K=d(l()),q[D]=K),K}function d(v){const U=[],N=[],D=[];for(let $=0;$<e;$++)U[$]=0,N[$]=0,D[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:N,attributeDivisors:D,object:v,attributes:{},index:null}}function f(v,U,N,D){const $=s.attributes,q=U.attributes;let K=0;const j=N.getAttributes();for(const z in j)if(j[z].location>=0){const C=$[z];let ht=q[z];if(ht===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor)),C===void 0||C.attribute!==ht||ht&&C.data!==ht.data)return!0;K++}return s.attributesNum!==K||s.index!==D}function g(v,U,N,D){const $={},q=U.attributes;let K=0;const j=N.getAttributes();for(const z in j)if(j[z].location>=0){let C=q[z];C===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(C=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(C=v.instanceColor));const ht={};ht.attribute=C,C&&C.data&&(ht.data=C.data),$[z]=ht,K++}s.attributes=$,s.attributesNum=K,s.index=D}function _(){const v=s.newAttributes;for(let U=0,N=v.length;U<N;U++)v[U]=0}function m(v){p(v,0)}function p(v,U){const N=s.newAttributes,D=s.enabledAttributes,$=s.attributeDivisors;N[v]=1,D[v]===0&&(r.enableVertexAttribArray(v),D[v]=1),$[v]!==U&&(r.vertexAttribDivisor(v,U),$[v]=U)}function M(){const v=s.newAttributes,U=s.enabledAttributes;for(let N=0,D=U.length;N<D;N++)U[N]!==v[N]&&(r.disableVertexAttribArray(N),U[N]=0)}function S(v,U,N,D,$,q,K){K===!0?r.vertexAttribIPointer(v,U,N,$,q):r.vertexAttribPointer(v,U,N,D,$,q)}function E(v,U,N,D){_();const $=D.attributes,q=N.getAttributes(),K=U.defaultAttributeValues;for(const j in q){const z=q[j];if(z.location>=0){let J=$[j];if(J===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){const C=J.normalized,ht=J.itemSize,at=t.get(J);if(at===void 0)continue;const Bt=at.buffer,Y=at.type,tt=at.bytesPerElement,ct=Y===r.INT||Y===r.UNSIGNED_INT||J.gpuType===Vd;if(J.isInterleavedBufferAttribute){const nt=J.data,Dt=nt.stride,Pt=J.offset;if(nt.isInstancedInterleavedBuffer){for(let F=0;F<z.locationSize;F++)p(z.location+F,nt.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let F=0;F<z.locationSize;F++)m(z.location+F);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let F=0;F<z.locationSize;F++)S(z.location+F,ht/z.locationSize,Y,C,Dt*tt,(Pt+ht/z.locationSize*F)*tt,ct)}else{if(J.isInstancedBufferAttribute){for(let nt=0;nt<z.locationSize;nt++)p(z.location+nt,J.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let nt=0;nt<z.locationSize;nt++)m(z.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let nt=0;nt<z.locationSize;nt++)S(z.location+nt,ht/z.locationSize,Y,C,ht*tt,ht/z.locationSize*nt*tt,ct)}}else if(K!==void 0){const C=K[j];if(C!==void 0)switch(C.length){case 2:r.vertexAttrib2fv(z.location,C);break;case 3:r.vertexAttrib3fv(z.location,C);break;case 4:r.vertexAttrib4fv(z.location,C);break;default:r.vertexAttrib1fv(z.location,C)}}}}M()}function R(){L();for(const v in n){const U=n[v];for(const N in U){const D=U[N];for(const $ in D)u(D[$].object),delete D[$];delete U[N]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const U=n[v.id];for(const N in U){const D=U[N];for(const $ in D)u(D[$].object),delete D[$];delete U[N]}delete n[v.id]}function b(v){for(const U in n){const N=n[U];if(N[v.id]===void 0)continue;const D=N[v.id];for(const $ in D)u(D[$].object),delete D[$];delete N[v.id]}}function L(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Tv(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(c[f],u[f]);else{d.multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==ii&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const b=w===ja&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ji&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ki&&!b)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:E,maxSamples:R}}function Av(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Bi,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,S=M*4;let E=p.clippingState||null;l.value=E,E=u(g,d,S,f);for(let R=0;R!==S;++R)E[R]=e[R];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,E=f;S!==_;++S,E+=4)o.copy(h[S]).applyMatrix4(M,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function wv(r){let t=new WeakMap;function e(o,a){return a===sc?o.mapping=ws:a===oc&&(o.mapping=Cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===sc||a===oc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new B_(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class of extends nf{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ps=4,yh=[.125,.215,.35,.446,.526,.582],xr=20,Ll=new of,Eh=new ue;let Dl=null,Il=0,Ul=0,Nl=!1;const pr=(1+Math.sqrt(5))/2,as=1/pr,Th=[new X(-pr,as,0),new X(pr,as,0),new X(-as,0,pr),new X(as,0,pr),new X(0,pr,-as),new X(0,pr,as),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class bh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Dl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dl,Il,Ul),this._renderer.xr.enabled=Nl,t.scissorTest=!1,sa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:ja,format:ii,colorSpace:ir,depthBuffer:!1},i=Ah(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cv(s)),this._blurMaterial=Rv(s,t,e)}return i}_compileMaterial(t){const e=new ri(this._lodPlanes[0],t);this._renderer.compile(e,Ll)}_sceneToCubeUV(t,e,n,i){const a=new On(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Eh),u.toneMapping=$i,u.autoClear=!1;const f=new Fi({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new ri(new ks,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Eh),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;sa(i,M*S,p>2?S:0,S,S),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ws||t.mapping===Cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ri(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;sa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ll)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Th[(i-s-1)%Th.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ri(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*xr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):xr;m>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xr}`);const p=[];let M=0;for(let b=0;b<xr;++b){const L=b/_,y=Math.exp(-L*L/2);p.push(y),b===0?M+=y:b<m&&(M+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const E=this._sizeLods[i],R=3*E*(i>S-ps?i-S+ps:0),w=4*(this._cubeSize-E);sa(e,R,w,3*E,2*E),l.setRenderTarget(e),l.render(h,Ll)}}function Cv(r){const t=[],e=[],n=[];let i=r;const s=r-ps+1+yh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-ps?l=yh[o-r+ps-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),S=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let w=0;w<f;w++){const b=w%3*2/3-1,L=w>2?0:-1,y=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];M.set(y,_*g*w),S.set(d,m*g*w);const v=[w,w,w,w,w,w];E.set(v,p*g*w)}const R=new Hr;R.setAttribute("position",new ai(M,_)),R.setAttribute("uv",new ai(S,m)),R.setAttribute("faceIndex",new ai(E,p)),t.push(R),i>ps&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ah(r,t,e){const n=new Dr(r,t,e);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sa(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Rv(r,t,e){const n=new Float32Array(xr),i=new X(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function wh(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Ch(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Yc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pv(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===sc||l===oc,u=l===ws||l===Cs;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new bh(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new bh(r)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Lv(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Dv(r,t,e,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let S=0,E=M.length;S<E;S+=3){const R=M[S+0],w=M[S+1],b=M[S+2];d.push(R,w,w,b,b,R)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,E=M.length/3-1;S<E;S+=3){const R=S+0,w=S+1,b=S+2;d.push(R,w,w,b,b,R)}}else return;const m=new(jd(d)?tf:Qd)(d,1);m.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Iv(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/o,f[m]);else{_.multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M];for(let M=0;M<_.length;M++)e.update(p,n,_[M])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Uv(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Nv(r,t,e){const n=new WeakMap,i=new Ve;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let v=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),m===!0&&(E=3);let R=a.attributes.position.count*E,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const b=new Float32Array(R*w*4*h),L=new Zd(b,R,w,h);L.type=ki,L.needsUpdate=!0;const y=E*4;for(let U=0;U<h;U++){const N=p[U],D=M[U],$=S[U],q=R*w*4*U;for(let K=0;K<N.count;K++){const j=K*y;g===!0&&(i.fromBufferAttribute(N,K),b[q+j+0]=i.x,b[q+j+1]=i.y,b[q+j+2]=i.z,b[q+j+3]=0),_===!0&&(i.fromBufferAttribute(D,K),b[q+j+4]=i.x,b[q+j+5]=i.y,b[q+j+6]=i.z,b[q+j+7]=0),m===!0&&(i.fromBufferAttribute($,K),b[q+j+8]=i.x,b[q+j+9]=i.y,b[q+j+10]=i.z,b[q+j+11]=$.itemSize===4?i.w:1)}}d={count:h,texture:L,size:new Yt(R,w)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Ov(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class af extends pn{constructor(t,e,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:xs,u!==xs&&u!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===xs&&(n=Rs),n===void 0&&u===xo&&(n=Uo),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const lf=new pn,cf=new af(1,1);cf.compareFunction=qd;const uf=new Zd,hf=new y_,df=new rf,Rh=[],Ph=[],Lh=new Float32Array(16),Dh=new Float32Array(9),Ih=new Float32Array(4);function Hs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Rh[i];if(s===void 0&&(s=new Float32Array(i),Rh[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ne(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Oe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Qa(r,t){let e=Ph[t];e===void 0&&(e=new Int32Array(t),Ph[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Fv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Bv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2fv(this.addr,t),Oe(e,t)}}function zv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;r.uniform3fv(this.addr,t),Oe(e,t)}}function kv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4fv(this.addr,t),Oe(e,t)}}function Hv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;Ih.set(n),r.uniformMatrix2fv(this.addr,!1,Ih),Oe(e,n)}}function Vv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;Dh.set(n),r.uniformMatrix3fv(this.addr,!1,Dh),Oe(e,n)}}function Gv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,n))return;Lh.set(n),r.uniformMatrix4fv(this.addr,!1,Lh),Oe(e,n)}}function Wv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Xv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2iv(this.addr,t),Oe(e,t)}}function Yv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3iv(this.addr,t),Oe(e,t)}}function $v(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4iv(this.addr,t),Oe(e,t)}}function qv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function jv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2uiv(this.addr,t),Oe(e,t)}}function Kv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3uiv(this.addr,t),Oe(e,t)}}function Zv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4uiv(this.addr,t),Oe(e,t)}}function Jv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?cf:lf;e.setTexture2D(t||s,i)}function Qv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||hf,i)}function tx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||df,i)}function ex(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||uf,i)}function nx(r){switch(r){case 5126:return Fv;case 35664:return Bv;case 35665:return zv;case 35666:return kv;case 35674:return Hv;case 35675:return Vv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return Yv;case 35669:case 35673:return $v;case 5125:return qv;case 36294:return jv;case 36295:return Kv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return ex}}function ix(r,t){r.uniform1fv(this.addr,t)}function rx(r,t){const e=Hs(t,this.size,2);r.uniform2fv(this.addr,e)}function sx(r,t){const e=Hs(t,this.size,3);r.uniform3fv(this.addr,e)}function ox(r,t){const e=Hs(t,this.size,4);r.uniform4fv(this.addr,e)}function ax(r,t){const e=Hs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function lx(r,t){const e=Hs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function cx(r,t){const e=Hs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function ux(r,t){r.uniform1iv(this.addr,t)}function hx(r,t){r.uniform2iv(this.addr,t)}function dx(r,t){r.uniform3iv(this.addr,t)}function fx(r,t){r.uniform4iv(this.addr,t)}function px(r,t){r.uniform1uiv(this.addr,t)}function mx(r,t){r.uniform2uiv(this.addr,t)}function _x(r,t){r.uniform3uiv(this.addr,t)}function gx(r,t){r.uniform4uiv(this.addr,t)}function vx(r,t,e){const n=this.cache,i=t.length,s=Qa(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Oe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||lf,s[o])}function xx(r,t,e){const n=this.cache,i=t.length,s=Qa(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Oe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||hf,s[o])}function Sx(r,t,e){const n=this.cache,i=t.length,s=Qa(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Oe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||df,s[o])}function Mx(r,t,e){const n=this.cache,i=t.length,s=Qa(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Oe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||uf,s[o])}function yx(r){switch(r){case 5126:return ix;case 35664:return rx;case 35665:return sx;case 35666:return ox;case 35674:return ax;case 35675:return lx;case 35676:return cx;case 5124:case 35670:return ux;case 35667:case 35671:return hx;case 35668:case 35672:return dx;case 35669:case 35673:return fx;case 5125:return px;case 36294:return mx;case 36295:return _x;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return Mx}}class Ex{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nx(e.type)}}class Tx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yx(e.type)}}class bx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Ol=/(\w+)(\])?(\[|\.)?/g;function Uh(r,t){r.seq.push(t),r.map[t.id]=t}function Ax(r,t,e){const n=r.name,i=n.length;for(Ol.lastIndex=0;;){const s=Ol.exec(n),o=Ol.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Uh(e,c===void 0?new Ex(a,r,t):new Tx(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new bx(a),Uh(e,h)),e=h}}}class Ma{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Ax(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Nh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const wx=37297;let Cx=0;function Rx(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Px(r){const t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(r);let n;switch(t===e?n="":t===Ua&&e===Ia?n="LinearDisplayP3ToLinearSRGB":t===Ia&&e===Ua&&(n="LinearSRGBToLinearDisplayP3"),r){case ir:case Ka:return[n,"LinearTransferOETF"];case Zn:case kc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Oh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Rx(r.getShaderSource(t),o)}else return i}function Lx(r,t){const e=Px(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Dx(r,t){let e;switch(t){case Em:e="Linear";break;case Tm:e="Reinhard";break;case bm:e="OptimizedCineon";break;case Am:e="ACESFilmic";break;case Cm:e="AgX";break;case Rm:e="Neutral";break;case wm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ix(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function Ux(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Nx(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ks(r){return r!==""}function Fh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(r){return r.replace(Ox,Bx)}const Fx=new Map;function Bx(r,t){let e=Zt[t];if(e===void 0){const n=Fx.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return cc(e)}const zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(r){return r.replace(zx,kx)}function kx(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function kh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hx(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Bd?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===jp?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function Vx(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ws:case Cs:t="ENVMAP_TYPE_CUBE";break;case qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function Wx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zd:t="ENVMAP_BLENDING_MULTIPLY";break;case Mm:t="ENVMAP_BLENDING_MIX";break;case ym:t="ENVMAP_BLENDING_ADD";break}return t}function Xx(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Yx(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Hx(e),c=Vx(e),u=Gx(e),h=Wx(e),d=Xx(e),f=Ix(e),g=Ux(s),_=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ks).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(m=[kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?Zt.tonemapping_pars_fragment:"",e.toneMapping!==$i?Dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Lx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ks).join(`
`)),o=cc(o),o=Fh(o,e),o=Bh(o,e),a=cc(a),a=Fh(a,e),a=Bh(a,e),o=zh(o),a=zh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+o,E=M+p+a,R=Nh(i,i.VERTEX_SHADER,S),w=Nh(i,i.FRAGMENT_SHADER,E);i.attachShader(_,R),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(U){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),D=i.getShaderInfoLog(R).trim(),$=i.getShaderInfoLog(w).trim();let q=!0,K=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,R,w);else{const j=Oh(i,R,"vertex"),z=Oh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+N+`
`+j+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||$==="")&&(K=!1);K&&(U.diagnostics={runnable:q,programLog:N,vertexShader:{log:D,prefix:m},fragmentShader:{log:$,prefix:p}})}i.deleteShader(R),i.deleteShader(w),L=new Ma(i,_),y=Nx(i,_)}let L;this.getUniforms=function(){return L===void 0&&b(this),L};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,wx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let $x=0;class qx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jx(t),e.set(t,n)),n}}class jx{constructor(t){this.id=$x++,this.code=t,this.usedTimes=0}}function Kx(r,t,e,n,i,s,o){const a=new Wc,l=new qx,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,U,N,D){const $=N.fog,q=D.geometry,K=y.isMeshStandardMaterial?N.environment:null,j=(y.isMeshStandardMaterial?e:t).get(y.envMap||K),z=j&&j.mapping===qa?j.image.height:null,J=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const C=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ht=C!==void 0?C.length:0;let at=0;q.morphAttributes.position!==void 0&&(at=1),q.morphAttributes.normal!==void 0&&(at=2),q.morphAttributes.color!==void 0&&(at=3);let Bt,Y,tt,ct;if(J){const Qt=ti[J];Bt=Qt.vertexShader,Y=Qt.fragmentShader}else Bt=y.vertexShader,Y=y.fragmentShader,l.update(y),tt=l.getVertexShaderID(y),ct=l.getFragmentShaderID(y);const nt=r.getRenderTarget(),Dt=D.isInstancedMesh===!0,Pt=D.isBatchedMesh===!0,F=!!y.map,Ht=!!y.matcap,Mt=!!j,Tt=!!y.aoMap,_t=!!y.lightMap,At=!!y.bumpMap,Ct=!!y.normalMap,B=!!y.displacementMap,$t=!!y.emissiveMap,P=!!y.metalnessMap,T=!!y.roughnessMap,G=y.anisotropy>0,Z=y.clearcoat>0,et=y.dispersion>0,it=y.iridescence>0,vt=y.sheen>0,dt=y.transmission>0,rt=G&&!!y.anisotropyMap,Ut=Z&&!!y.clearcoatMap,st=Z&&!!y.clearcoatNormalMap,Et=Z&&!!y.clearcoatRoughnessMap,qt=it&&!!y.iridescenceMap,xt=it&&!!y.iridescenceThicknessMap,St=vt&&!!y.sheenColorMap,Ft=vt&&!!y.sheenRoughnessMap,Xt=!!y.specularMap,re=!!y.specularColorMap,zt=!!y.specularIntensityMap,x=dt&&!!y.transmissionMap,I=dt&&!!y.thicknessMap,V=!!y.gradientMap,Q=!!y.alphaMap,ot=y.alphaTest>0,Nt=!!y.alphaHash,Wt=!!y.extensions;let le=$i;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(le=r.toneMapping);const he={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Bt,fragmentShader:Y,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:ct,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Pt,instancing:Dt,instancingColor:Dt&&D.instanceColor!==null,instancingMorph:Dt&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ir,alphaToCoverage:!!y.alphaToCoverage,map:F,matcap:Ht,envMap:Mt,envMapMode:Mt&&j.mapping,envMapCubeUVHeight:z,aoMap:Tt,lightMap:_t,bumpMap:At,normalMap:Ct,displacementMap:d&&B,emissiveMap:$t,normalMapObjectSpace:Ct&&y.normalMapType===Wm,normalMapTangentSpace:Ct&&y.normalMapType===Gm,metalnessMap:P,roughnessMap:T,anisotropy:G,anisotropyMap:rt,clearcoat:Z,clearcoatMap:Ut,clearcoatNormalMap:st,clearcoatRoughnessMap:Et,dispersion:et,iridescence:it,iridescenceMap:qt,iridescenceThicknessMap:xt,sheen:vt,sheenColorMap:St,sheenRoughnessMap:Ft,specularMap:Xt,specularColorMap:re,specularIntensityMap:zt,transmission:dt,transmissionMap:x,thicknessMap:I,gradientMap:V,opaque:y.transparent===!1&&y.blending===vs&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:ot,alphaHash:Nt,combine:y.combine,mapUv:F&&_(y.map.channel),aoMapUv:Tt&&_(y.aoMap.channel),lightMapUv:_t&&_(y.lightMap.channel),bumpMapUv:At&&_(y.bumpMap.channel),normalMapUv:Ct&&_(y.normalMap.channel),displacementMapUv:B&&_(y.displacementMap.channel),emissiveMapUv:$t&&_(y.emissiveMap.channel),metalnessMapUv:P&&_(y.metalnessMap.channel),roughnessMapUv:T&&_(y.roughnessMap.channel),anisotropyMapUv:rt&&_(y.anisotropyMap.channel),clearcoatMapUv:Ut&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:St&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&_(y.sheenRoughnessMap.channel),specularMapUv:Xt&&_(y.specularMap.channel),specularColorMapUv:re&&_(y.specularColorMap.channel),specularIntensityMapUv:zt&&_(y.specularIntensityMap.channel),transmissionMapUv:x&&_(y.transmissionMap.channel),thicknessMapUv:I&&_(y.thicknessMap.channel),alphaMapUv:Q&&_(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ct||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!q.attributes.uv&&(F||Q),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:at,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,useLegacyLights:r._useLegacyLights,decodeVideoTexture:F&&y.map.isVideoTexture===!0&&de.getTransfer(y.map.colorSpace)===_e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mi,flipSided:y.side===_n,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Wt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Wt&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function p(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)v.push(U),v.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(M(v,y),S(v,y),v.push(r.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function M(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function S(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.useLegacyLights&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),y.push(a.mask)}function E(y){const v=g[y.type];let U;if(v){const N=ti[v];U=U_.clone(N.uniforms)}else U=y.uniforms;return U}function R(y,v){let U;for(let N=0,D=u.length;N<D;N++){const $=u[N];if($.cacheKey===v){U=$,++U.usedTimes;break}}return U===void 0&&(U=new Yx(r,v,y,s),u.push(U)),U}function w(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:R,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:L}}function Zx(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Jx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Hh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Vh(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,m){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||Jx),n.length>1&&n.sort(d||Hh),i.length>1&&i.sort(d||Hh)}function u(){for(let h=t,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Qx(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Vh,r.set(n,[o])):i>=s.length?(o=new Vh,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function tS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new ue};break;case"SpotLight":e={position:new X,direction:new X,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new X,halfWidth:new X,halfHeight:new X};break}return r[t.id]=e,e}}}function eS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let nS=0;function iS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function rS(r){const t=new tS,e=eS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const i=new X,s=new Ae,o=new Ae;function a(c,u){let h=0,d=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let g=0,_=0,m=0,p=0,M=0,S=0,E=0,R=0,w=0,b=0,L=0;c.sort(iS);const y=u===!0?Math.PI:1;for(let U=0,N=c.length;U<N;U++){const D=c[U],$=D.color,q=D.intensity,K=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=$.r*q*y,d+=$.g*q*y,f+=$.b*q*y;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],q);L++}else if(D.isDirectionalLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*y),D.castShadow){const J=D.shadow,C=e.get(D);C.shadowBias=J.bias,C.shadowNormalBias=J.normalBias,C.shadowRadius=J.radius,C.shadowMapSize=J.mapSize,n.directionalShadow[g]=C,n.directionalShadowMap[g]=j,n.directionalShadowMatrix[g]=D.shadow.matrix,S++}n.directional[g]=z,g++}else if(D.isSpotLight){const z=t.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy($).multiplyScalar(q*y),z.distance=K,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[m]=z;const J=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,J.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[m]=J.matrix,D.castShadow){const C=e.get(D);C.shadowBias=J.bias,C.shadowNormalBias=J.normalBias,C.shadowRadius=J.radius,C.shadowMapSize=J.mapSize,n.spotShadow[m]=C,n.spotShadowMap[m]=j,R++}m++}else if(D.isRectAreaLight){const z=t.get(D);z.color.copy($).multiplyScalar(q),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=z,p++}else if(D.isPointLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*y),z.distance=D.distance,z.decay=D.decay,D.castShadow){const J=D.shadow,C=e.get(D);C.shadowBias=J.bias,C.shadowNormalBias=J.normalBias,C.shadowRadius=J.radius,C.shadowMapSize=J.mapSize,C.shadowCameraNear=J.camera.near,C.shadowCameraFar=J.camera.far,n.pointShadow[_]=C,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=D.shadow.matrix,E++}n.point[_]=z,_++}else if(D.isHemisphereLight){const z=t.get(D);z.skyColor.copy(D.color).multiplyScalar(q*y),z.groundColor.copy(D.groundColor).multiplyScalar(q*y),n.hemi[M]=z,M++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==g||v.pointLength!==_||v.spotLength!==m||v.rectAreaLength!==p||v.hemiLength!==M||v.numDirectionalShadows!==S||v.numPointShadows!==E||v.numSpotShadows!==R||v.numSpotMaps!==w||v.numLightProbes!==L)&&(n.directional.length=g,n.spot.length=m,n.rectArea.length=p,n.point.length=_,n.hemi.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=R+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=L,v.directionalLength=g,v.pointLength=_,v.spotLength=m,v.rectAreaLength=p,v.hemiLength=M,v.numDirectionalShadows=S,v.numPointShadows=E,v.numSpotShadows=R,v.numSpotMaps=w,v.numLightProbes=L,n.version=nS++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),h++}else if(S.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Gh(r){const t=new rS(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(u){t.setup(e,u)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function sS(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Gh(r),t.set(i,[a])):s>=o.length?(a=new Gh(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class oS extends Za{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class aS extends Za{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const lS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uS(r,t,e){let n=new Xc;const i=new Yt,s=new Yt,o=new Ve,a=new oS({depthPacking:Vm}),l=new aS,c={},u=e.maxTextureSize,h={[Zi]:_n,[_n]:Zi,[Mi]:Mi},d=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:lS,fragmentShader:cS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Hr;g.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ri(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bd;let p=this.type;this.render=function(w,b,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=r.getRenderTarget(),v=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Yi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const D=p!==vi&&this.type===vi,$=p===vi&&this.type!==vi;for(let q=0,K=w.length;q<K;q++){const j=w[q],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const J=z.getFrameExtents();if(i.multiply(J),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,z.mapSize.y=s.y)),z.map===null||D===!0||$===!0){const ht=this.type!==vi?{minFilter:zn,magFilter:zn}:{};z.map!==null&&z.map.dispose(),z.map=new Dr(i.x,i.y,ht),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const C=z.getViewportCount();for(let ht=0;ht<C;ht++){const at=z.getViewport(ht);o.set(s.x*at.x,s.y*at.y,s.x*at.z,s.y*at.w),N.viewport(o),z.updateMatrices(j,ht),n=z.getFrustum(),E(b,L,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===vi&&M(z,L),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,v,U)};function M(w,b){const L=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Dr(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,L,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,L,f,_,null)}function S(w,b,L,y){let v=null;const U=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)v=U;else if(v=L.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=v.uuid,D=b.uuid;let $=c[N];$===void 0&&($={},c[N]=$);let q=$[D];q===void 0&&(q=v.clone(),$[D]=q,b.addEventListener("dispose",R)),v=q}if(v.visible=b.visible,v.wireframe=b.wireframe,y===vi?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=r.properties.get(v);N.light=L}return v}function E(w,b,L,y,v){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===vi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const D=t.update(w),$=w.material;if(Array.isArray($)){const q=D.groups;for(let K=0,j=q.length;K<j;K++){const z=q[K],J=$[z.materialIndex];if(J&&J.visible){const C=S(w,J,y,v);w.onBeforeShadow(r,w,b,L,D,C,z),r.renderBufferDirect(L,null,D,C,w,z),w.onAfterShadow(r,w,b,L,D,C,z)}}}else if($.visible){const q=S(w,$,y,v);w.onBeforeShadow(r,w,b,L,D,q,null),r.renderBufferDirect(L,null,D,q,w,null),w.onAfterShadow(r,w,b,L,D,q,null)}}const N=w.children;for(let D=0,$=N.length;D<$;D++)E(N[D],b,L,y,v)}function R(w){w.target.removeEventListener("dispose",R);for(const L in c){const y=c[L],v=w.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}function hS(r){function t(){let x=!1;const I=new Ve;let V=null;const Q=new Ve(0,0,0,0);return{setMask:function(ot){V!==ot&&!x&&(r.colorMask(ot,ot,ot,ot),V=ot)},setLocked:function(ot){x=ot},setClear:function(ot,Nt,Wt,le,he){he===!0&&(ot*=le,Nt*=le,Wt*=le),I.set(ot,Nt,Wt,le),Q.equals(I)===!1&&(r.clearColor(ot,Nt,Wt,le),Q.copy(I))},reset:function(){x=!1,V=null,Q.set(-1,0,0,0)}}}function e(){let x=!1,I=null,V=null,Q=null;return{setTest:function(ot){ot?ct(r.DEPTH_TEST):nt(r.DEPTH_TEST)},setMask:function(ot){I!==ot&&!x&&(r.depthMask(ot),I=ot)},setFunc:function(ot){if(V!==ot){switch(ot){case pm:r.depthFunc(r.NEVER);break;case mm:r.depthFunc(r.ALWAYS);break;case _m:r.depthFunc(r.LESS);break;case La:r.depthFunc(r.LEQUAL);break;case gm:r.depthFunc(r.EQUAL);break;case vm:r.depthFunc(r.GEQUAL);break;case xm:r.depthFunc(r.GREATER);break;case Sm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}V=ot}},setLocked:function(ot){x=ot},setClear:function(ot){Q!==ot&&(r.clearDepth(ot),Q=ot)},reset:function(){x=!1,I=null,V=null,Q=null}}}function n(){let x=!1,I=null,V=null,Q=null,ot=null,Nt=null,Wt=null,le=null,he=null;return{setTest:function(Qt){x||(Qt?ct(r.STENCIL_TEST):nt(r.STENCIL_TEST))},setMask:function(Qt){I!==Qt&&!x&&(r.stencilMask(Qt),I=Qt)},setFunc:function(Qt,bt,pt){(V!==Qt||Q!==bt||ot!==pt)&&(r.stencilFunc(Qt,bt,pt),V=Qt,Q=bt,ot=pt)},setOp:function(Qt,bt,pt){(Nt!==Qt||Wt!==bt||le!==pt)&&(r.stencilOp(Qt,bt,pt),Nt=Qt,Wt=bt,le=pt)},setLocked:function(Qt){x=Qt},setClear:function(Qt){he!==Qt&&(r.clearStencil(Qt),he=Qt)},reset:function(){x=!1,I=null,V=null,Q=null,ot=null,Nt=null,Wt=null,le=null,he=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,M=null,S=null,E=null,R=null,w=new ue(0,0,0),b=0,L=!1,y=null,v=null,U=null,N=null,D=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=K>=2);let z=null,J={};const C=r.getParameter(r.SCISSOR_BOX),ht=r.getParameter(r.VIEWPORT),at=new Ve().fromArray(C),Bt=new Ve().fromArray(ht);function Y(x,I,V,Q){const ot=new Uint8Array(4),Nt=r.createTexture();r.bindTexture(x,Nt),r.texParameteri(x,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(x,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Wt=0;Wt<V;Wt++)x===r.TEXTURE_3D||x===r.TEXTURE_2D_ARRAY?r.texImage3D(I,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,ot):r.texImage2D(I+Wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ot);return Nt}const tt={};tt[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ct(r.DEPTH_TEST),s.setFunc(La),At(!1),Ct(Eu),ct(r.CULL_FACE),Tt(Yi);function ct(x){c[x]!==!0&&(r.enable(x),c[x]=!0)}function nt(x){c[x]!==!1&&(r.disable(x),c[x]=!1)}function Dt(x,I){return u[x]!==I?(r.bindFramebuffer(x,I),u[x]=I,x===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=I),x===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=I),!0):!1}function Pt(x,I){let V=d,Q=!1;if(x){V=h.get(I),V===void 0&&(V=[],h.set(I,V));const ot=x.textures;if(V.length!==ot.length||V[0]!==r.COLOR_ATTACHMENT0){for(let Nt=0,Wt=ot.length;Nt<Wt;Nt++)V[Nt]=r.COLOR_ATTACHMENT0+Nt;V.length=ot.length,Q=!0}}else V[0]!==r.BACK&&(V[0]=r.BACK,Q=!0);Q&&r.drawBuffers(V)}function F(x){return f!==x?(r.useProgram(x),f=x,!0):!1}const Ht={[vr]:r.FUNC_ADD,[Zp]:r.FUNC_SUBTRACT,[Jp]:r.FUNC_REVERSE_SUBTRACT};Ht[Qp]=r.MIN,Ht[tm]=r.MAX;const Mt={[em]:r.ZERO,[nm]:r.ONE,[im]:r.SRC_COLOR,[ic]:r.SRC_ALPHA,[cm]:r.SRC_ALPHA_SATURATE,[am]:r.DST_COLOR,[sm]:r.DST_ALPHA,[rm]:r.ONE_MINUS_SRC_COLOR,[rc]:r.ONE_MINUS_SRC_ALPHA,[lm]:r.ONE_MINUS_DST_COLOR,[om]:r.ONE_MINUS_DST_ALPHA,[um]:r.CONSTANT_COLOR,[hm]:r.ONE_MINUS_CONSTANT_COLOR,[dm]:r.CONSTANT_ALPHA,[fm]:r.ONE_MINUS_CONSTANT_ALPHA};function Tt(x,I,V,Q,ot,Nt,Wt,le,he,Qt){if(x===Yi){g===!0&&(nt(r.BLEND),g=!1);return}if(g===!1&&(ct(r.BLEND),g=!0),x!==Kp){if(x!==_||Qt!==L){if((m!==vr||S!==vr)&&(r.blendEquation(r.FUNC_ADD),m=vr,S=vr),Qt)switch(x){case vs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Tu:r.blendFunc(r.ONE,r.ONE);break;case bu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Au:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case vs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Tu:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case bu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Au:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}p=null,M=null,E=null,R=null,w.set(0,0,0),b=0,_=x,L=Qt}return}ot=ot||I,Nt=Nt||V,Wt=Wt||Q,(I!==m||ot!==S)&&(r.blendEquationSeparate(Ht[I],Ht[ot]),m=I,S=ot),(V!==p||Q!==M||Nt!==E||Wt!==R)&&(r.blendFuncSeparate(Mt[V],Mt[Q],Mt[Nt],Mt[Wt]),p=V,M=Q,E=Nt,R=Wt),(le.equals(w)===!1||he!==b)&&(r.blendColor(le.r,le.g,le.b,he),w.copy(le),b=he),_=x,L=!1}function _t(x,I){x.side===Mi?nt(r.CULL_FACE):ct(r.CULL_FACE);let V=x.side===_n;I&&(V=!V),At(V),x.blending===vs&&x.transparent===!1?Tt(Yi):Tt(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),s.setFunc(x.depthFunc),s.setTest(x.depthTest),s.setMask(x.depthWrite),i.setMask(x.colorWrite);const Q=x.stencilWrite;o.setTest(Q),Q&&(o.setMask(x.stencilWriteMask),o.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),o.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),$t(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?ct(r.SAMPLE_ALPHA_TO_COVERAGE):nt(r.SAMPLE_ALPHA_TO_COVERAGE)}function At(x){y!==x&&(x?r.frontFace(r.CW):r.frontFace(r.CCW),y=x)}function Ct(x){x!==$p?(ct(r.CULL_FACE),x!==v&&(x===Eu?r.cullFace(r.BACK):x===qp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):nt(r.CULL_FACE),v=x}function B(x){x!==U&&(q&&r.lineWidth(x),U=x)}function $t(x,I,V){x?(ct(r.POLYGON_OFFSET_FILL),(N!==I||D!==V)&&(r.polygonOffset(I,V),N=I,D=V)):nt(r.POLYGON_OFFSET_FILL)}function P(x){x?ct(r.SCISSOR_TEST):nt(r.SCISSOR_TEST)}function T(x){x===void 0&&(x=r.TEXTURE0+$-1),z!==x&&(r.activeTexture(x),z=x)}function G(x,I,V){V===void 0&&(z===null?V=r.TEXTURE0+$-1:V=z);let Q=J[V];Q===void 0&&(Q={type:void 0,texture:void 0},J[V]=Q),(Q.type!==x||Q.texture!==I)&&(z!==V&&(r.activeTexture(V),z=V),r.bindTexture(x,I||tt[x]),Q.type=x,Q.texture=I)}function Z(){const x=J[z];x!==void 0&&x.type!==void 0&&(r.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function et(){try{r.compressedTexImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function it(){try{r.compressedTexImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function vt(){try{r.texSubImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function dt(){try{r.texSubImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function rt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ut(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function st(){try{r.texStorage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Et(){try{r.texStorage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function qt(){try{r.texImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function xt(){try{r.texImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function St(x){at.equals(x)===!1&&(r.scissor(x.x,x.y,x.z,x.w),at.copy(x))}function Ft(x){Bt.equals(x)===!1&&(r.viewport(x.x,x.y,x.z,x.w),Bt.copy(x))}function Xt(x,I){let V=l.get(I);V===void 0&&(V=new WeakMap,l.set(I,V));let Q=V.get(x);Q===void 0&&(Q=r.getUniformBlockIndex(I,x.name),V.set(x,Q))}function re(x,I){const Q=l.get(I).get(x);a.get(I)!==Q&&(r.uniformBlockBinding(I,Q,x.__bindingPointIndex),a.set(I,Q))}function zt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},z=null,J={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,M=null,S=null,E=null,R=null,w=new ue(0,0,0),b=0,L=!1,y=null,v=null,U=null,N=null,D=null,at.set(0,0,r.canvas.width,r.canvas.height),Bt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ct,disable:nt,bindFramebuffer:Dt,drawBuffers:Pt,useProgram:F,setBlending:Tt,setMaterial:_t,setFlipSided:At,setCullFace:Ct,setLineWidth:B,setPolygonOffset:$t,setScissorTest:P,activeTexture:T,bindTexture:G,unbindTexture:Z,compressedTexImage2D:et,compressedTexImage3D:it,texImage2D:qt,texImage3D:xt,updateUBOMapping:Xt,uniformBlockBinding:re,texStorage2D:st,texStorage3D:Et,texSubImage2D:vt,texSubImage3D:dt,compressedTexSubImage2D:rt,compressedTexSubImage3D:Ut,scissor:St,viewport:Ft,reset:zt}}function dS(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Yt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return f?new OffscreenCanvas(P,T):Mo("canvas")}function _(P,T,G){let Z=1;const et=$t(P);if((et.width>G||et.height>G)&&(Z=G/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const it=Math.floor(Z*et.width),vt=Math.floor(Z*et.height);h===void 0&&(h=g(it,vt));const dt=T?g(it,vt):h;return dt.width=it,dt.height=vt,dt.getContext("2d").drawImage(P,0,0,it,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+it+"x"+vt+")."),dt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==zn&&P.minFilter!==jn}function p(P){r.generateMipmap(P)}function M(P,T,G,Z,et=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let it=T;if(T===r.RED&&(G===r.FLOAT&&(it=r.R32F),G===r.HALF_FLOAT&&(it=r.R16F),G===r.UNSIGNED_BYTE&&(it=r.R8)),T===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(it=r.R8UI),G===r.UNSIGNED_SHORT&&(it=r.R16UI),G===r.UNSIGNED_INT&&(it=r.R32UI),G===r.BYTE&&(it=r.R8I),G===r.SHORT&&(it=r.R16I),G===r.INT&&(it=r.R32I)),T===r.RG&&(G===r.FLOAT&&(it=r.RG32F),G===r.HALF_FLOAT&&(it=r.RG16F),G===r.UNSIGNED_BYTE&&(it=r.RG8)),T===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(it=r.RG8UI),G===r.UNSIGNED_SHORT&&(it=r.RG16UI),G===r.UNSIGNED_INT&&(it=r.RG32UI),G===r.BYTE&&(it=r.RG8I),G===r.SHORT&&(it=r.RG16I),G===r.INT&&(it=r.RG32I)),T===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(it=r.RGB9_E5),T===r.RGBA){const vt=et?Da:de.getTransfer(Z);G===r.FLOAT&&(it=r.RGBA32F),G===r.HALF_FLOAT&&(it=r.RGBA16F),G===r.UNSIGNED_BYTE&&(it=vt===_e?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(it=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(it=r.RGB5_A1)}return(it===r.R16F||it===r.R32F||it===r.RG16F||it===r.RG32F||it===r.RGBA16F||it===r.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function S(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==zn&&P.minFilter!==jn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function E(P){const T=P.target;T.removeEventListener("dispose",E),w(T),T.isVideoTexture&&u.delete(T)}function R(P){const T=P.target;T.removeEventListener("dispose",R),L(T)}function w(P){const T=n.get(P);if(T.__webglInit===void 0)return;const G=P.source,Z=d.get(G);if(Z){const et=Z[T.__cacheKey];et.usedTimes--,et.usedTimes===0&&b(P),Object.keys(Z).length===0&&d.delete(G)}n.remove(P)}function b(P){const T=n.get(P);r.deleteTexture(T.__webglTexture);const G=P.source,Z=d.get(G);delete Z[T.__cacheKey],o.memory.textures--}function L(P){const T=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let et=0;et<T.__webglFramebuffer[Z].length;et++)r.deleteFramebuffer(T.__webglFramebuffer[Z][et]);else r.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)r.deleteFramebuffer(T.__webglFramebuffer[Z]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=P.textures;for(let Z=0,et=G.length;Z<et;Z++){const it=n.get(G[Z]);it.__webglTexture&&(r.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(G[Z])}n.remove(P)}let y=0;function v(){y=0}function U(){const P=y;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),y+=1,P}function N(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function D(P,T){const G=n.get(P);if(P.isVideoTexture&&Ct(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(G,P,T);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+T)}function $(P,T){const G=n.get(P);if(P.version>0&&G.__version!==P.version){at(G,P,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+T)}function q(P,T){const G=n.get(P);if(P.version>0&&G.__version!==P.version){at(G,P,T);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+T)}function K(P,T){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Bt(G,P,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+T)}const j={[ac]:r.REPEAT,[Sr]:r.CLAMP_TO_EDGE,[lc]:r.MIRRORED_REPEAT},z={[zn]:r.NEAREST,[Pm]:r.NEAREST_MIPMAP_NEAREST,[Bo]:r.NEAREST_MIPMAP_LINEAR,[jn]:r.LINEAR,[al]:r.LINEAR_MIPMAP_NEAREST,[Mr]:r.LINEAR_MIPMAP_LINEAR},J={[Xm]:r.NEVER,[Zm]:r.ALWAYS,[Ym]:r.LESS,[qd]:r.LEQUAL,[$m]:r.EQUAL,[Km]:r.GEQUAL,[qm]:r.GREATER,[jm]:r.NOTEQUAL};function C(P,T){if(T.type===ki&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===jn||T.magFilter===al||T.magFilter===Bo||T.magFilter===Mr||T.minFilter===jn||T.minFilter===al||T.minFilter===Bo||T.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,j[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,j[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,j[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,z[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,z[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===zn||T.minFilter!==Bo&&T.minFilter!==Mr||T.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ht(P,T){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",E));const Z=T.source;let et=d.get(Z);et===void 0&&(et={},d.set(Z,et));const it=N(T);if(it!==P.__cacheKey){et[it]===void 0&&(et[it]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),et[it].usedTimes++;const vt=et[P.__cacheKey];vt!==void 0&&(et[P.__cacheKey].usedTimes--,vt.usedTimes===0&&b(T)),P.__cacheKey=it,P.__webglTexture=et[it].texture}return G}function at(P,T,G){let Z=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=r.TEXTURE_3D);const et=ht(P,T),it=T.source;e.bindTexture(Z,P.__webglTexture,r.TEXTURE0+G);const vt=n.get(it);if(it.version!==vt.__version||et===!0){e.activeTexture(r.TEXTURE0+G);const dt=de.getPrimaries(de.workingColorSpace),rt=T.colorSpace===zi?null:de.getPrimaries(T.colorSpace),Ut=T.colorSpace===zi||dt===rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let st=_(T.image,!1,i.maxTextureSize);st=B(T,st);const Et=s.convert(T.format,T.colorSpace),qt=s.convert(T.type);let xt=M(T.internalFormat,Et,qt,T.colorSpace,T.isVideoTexture);C(Z,T);let St;const Ft=T.mipmaps,Xt=T.isVideoTexture!==!0,re=vt.__version===void 0||et===!0,zt=it.dataReady,x=S(T,st);if(T.isDepthTexture)xt=r.DEPTH_COMPONENT16,T.type===ki?xt=r.DEPTH_COMPONENT32F:T.type===Rs?xt=r.DEPTH_COMPONENT24:T.type===Uo&&(xt=r.DEPTH24_STENCIL8),re&&(Xt?e.texStorage2D(r.TEXTURE_2D,1,xt,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,xt,st.width,st.height,0,Et,qt,null));else if(T.isDataTexture)if(Ft.length>0){Xt&&re&&e.texStorage2D(r.TEXTURE_2D,x,xt,Ft[0].width,Ft[0].height);for(let I=0,V=Ft.length;I<V;I++)St=Ft[I],Xt?zt&&e.texSubImage2D(r.TEXTURE_2D,I,0,0,St.width,St.height,Et,qt,St.data):e.texImage2D(r.TEXTURE_2D,I,xt,St.width,St.height,0,Et,qt,St.data);T.generateMipmaps=!1}else Xt?(re&&e.texStorage2D(r.TEXTURE_2D,x,xt,st.width,st.height),zt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,st.width,st.height,Et,qt,st.data)):e.texImage2D(r.TEXTURE_2D,0,xt,st.width,st.height,0,Et,qt,st.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Xt&&re&&e.texStorage3D(r.TEXTURE_2D_ARRAY,x,xt,Ft[0].width,Ft[0].height,st.depth);for(let I=0,V=Ft.length;I<V;I++)St=Ft[I],T.format!==ii?Et!==null?Xt?zt&&e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,I,0,0,0,St.width,St.height,st.depth,Et,St.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,I,xt,St.width,St.height,st.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?zt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,I,0,0,0,St.width,St.height,st.depth,Et,qt,St.data):e.texImage3D(r.TEXTURE_2D_ARRAY,I,xt,St.width,St.height,st.depth,0,Et,qt,St.data)}else{Xt&&re&&e.texStorage2D(r.TEXTURE_2D,x,xt,Ft[0].width,Ft[0].height);for(let I=0,V=Ft.length;I<V;I++)St=Ft[I],T.format!==ii?Et!==null?Xt?zt&&e.compressedTexSubImage2D(r.TEXTURE_2D,I,0,0,St.width,St.height,Et,St.data):e.compressedTexImage2D(r.TEXTURE_2D,I,xt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?zt&&e.texSubImage2D(r.TEXTURE_2D,I,0,0,St.width,St.height,Et,qt,St.data):e.texImage2D(r.TEXTURE_2D,I,xt,St.width,St.height,0,Et,qt,St.data)}else if(T.isDataArrayTexture)Xt?(re&&e.texStorage3D(r.TEXTURE_2D_ARRAY,x,xt,st.width,st.height,st.depth),zt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Et,qt,st.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,xt,st.width,st.height,st.depth,0,Et,qt,st.data);else if(T.isData3DTexture)Xt?(re&&e.texStorage3D(r.TEXTURE_3D,x,xt,st.width,st.height,st.depth),zt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Et,qt,st.data)):e.texImage3D(r.TEXTURE_3D,0,xt,st.width,st.height,st.depth,0,Et,qt,st.data);else if(T.isFramebufferTexture){if(re)if(Xt)e.texStorage2D(r.TEXTURE_2D,x,xt,st.width,st.height);else{let I=st.width,V=st.height;for(let Q=0;Q<x;Q++)e.texImage2D(r.TEXTURE_2D,Q,xt,I,V,0,Et,qt,null),I>>=1,V>>=1}}else if(Ft.length>0){if(Xt&&re){const I=$t(Ft[0]);e.texStorage2D(r.TEXTURE_2D,x,xt,I.width,I.height)}for(let I=0,V=Ft.length;I<V;I++)St=Ft[I],Xt?zt&&e.texSubImage2D(r.TEXTURE_2D,I,0,0,Et,qt,St):e.texImage2D(r.TEXTURE_2D,I,xt,Et,qt,St);T.generateMipmaps=!1}else if(Xt){if(re){const I=$t(st);e.texStorage2D(r.TEXTURE_2D,x,xt,I.width,I.height)}zt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Et,qt,st)}else e.texImage2D(r.TEXTURE_2D,0,xt,Et,qt,st);m(T)&&p(Z),vt.__version=it.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Bt(P,T,G){if(T.image.length!==6)return;const Z=ht(P,T),et=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+G);const it=n.get(et);if(et.version!==it.__version||Z===!0){e.activeTexture(r.TEXTURE0+G);const vt=de.getPrimaries(de.workingColorSpace),dt=T.colorSpace===zi?null:de.getPrimaries(T.colorSpace),rt=T.colorSpace===zi||vt===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const Ut=T.isCompressedTexture||T.image[0].isCompressedTexture,st=T.image[0]&&T.image[0].isDataTexture,Et=[];for(let V=0;V<6;V++)!Ut&&!st?Et[V]=_(T.image[V],!0,i.maxCubemapSize):Et[V]=st?T.image[V].image:T.image[V],Et[V]=B(T,Et[V]);const qt=Et[0],xt=s.convert(T.format,T.colorSpace),St=s.convert(T.type),Ft=M(T.internalFormat,xt,St,T.colorSpace),Xt=T.isVideoTexture!==!0,re=it.__version===void 0||Z===!0,zt=et.dataReady;let x=S(T,qt);C(r.TEXTURE_CUBE_MAP,T);let I;if(Ut){Xt&&re&&e.texStorage2D(r.TEXTURE_CUBE_MAP,x,Ft,qt.width,qt.height);for(let V=0;V<6;V++){I=Et[V].mipmaps;for(let Q=0;Q<I.length;Q++){const ot=I[Q];T.format!==ii?xt!==null?Xt?zt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,Q,0,0,ot.width,ot.height,xt,ot.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,Q,Ft,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?zt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,Q,0,0,ot.width,ot.height,xt,St,ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,Q,Ft,ot.width,ot.height,0,xt,St,ot.data)}}}else{if(I=T.mipmaps,Xt&&re){I.length>0&&x++;const V=$t(Et[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,x,Ft,V.width,V.height)}for(let V=0;V<6;V++)if(st){Xt?zt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Et[V].width,Et[V].height,xt,St,Et[V].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Ft,Et[V].width,Et[V].height,0,xt,St,Et[V].data);for(let Q=0;Q<I.length;Q++){const Nt=I[Q].image[V].image;Xt?zt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,Q+1,0,0,Nt.width,Nt.height,xt,St,Nt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,Q+1,Ft,Nt.width,Nt.height,0,xt,St,Nt.data)}}else{Xt?zt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,xt,St,Et[V]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Ft,xt,St,Et[V]);for(let Q=0;Q<I.length;Q++){const ot=I[Q];Xt?zt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,Q+1,0,0,xt,St,ot.image[V]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,Q+1,Ft,xt,St,ot.image[V])}}}m(T)&&p(r.TEXTURE_CUBE_MAP),it.__version=et.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Y(P,T,G,Z,et,it){const vt=s.convert(G.format,G.colorSpace),dt=s.convert(G.type),rt=M(G.internalFormat,vt,dt,G.colorSpace);if(!n.get(T).__hasExternalTextures){const st=Math.max(1,T.width>>it),Et=Math.max(1,T.height>>it);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,it,rt,st,Et,T.depth,0,vt,dt,null):e.texImage2D(et,it,rt,st,Et,0,vt,dt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),At(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,et,n.get(G).__webglTexture,0,_t(T)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,et,n.get(G).__webglTexture,it),e.bindFramebuffer(r.FRAMEBUFFER,null)}function tt(P,T,G){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let Z=r.DEPTH_COMPONENT24;if(G||At(T)){const et=T.depthTexture;et&&et.isDepthTexture&&(et.type===ki?Z=r.DEPTH_COMPONENT32F:et.type===Rs&&(Z=r.DEPTH_COMPONENT24));const it=_t(T);At(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,Z,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,it,Z,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,Z,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const Z=_t(T);G&&At(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,T.width,T.height):At(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{const Z=T.textures;for(let et=0;et<Z.length;et++){const it=Z[et],vt=s.convert(it.format,it.colorSpace),dt=s.convert(it.type),rt=M(it.internalFormat,vt,dt,it.colorSpace),Ut=_t(T);G&&At(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,rt,T.width,T.height):At(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut,rt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,rt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ct(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),D(T.depthTexture,0);const Z=n.get(T.depthTexture).__webglTexture,et=_t(T);if(T.depthTexture.format===xs)At(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(T.depthTexture.format===xo)At(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function nt(P){const T=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ct(T.__webglFramebuffer,P)}else if(G){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]=r.createRenderbuffer(),tt(T.__webglDepthbuffer[Z],P,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),tt(T.__webglDepthbuffer,P,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(P,T,G){const Z=n.get(P);T!==void 0&&Y(Z.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&nt(P)}function Pt(P){const T=P.texture,G=n.get(P),Z=n.get(T);P.addEventListener("dispose",R);const et=P.textures,it=P.isWebGLCubeRenderTarget===!0,vt=et.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=T.version,o.memory.textures++),it){G.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[dt]=[];for(let rt=0;rt<T.mipmaps.length;rt++)G.__webglFramebuffer[dt][rt]=r.createFramebuffer()}else G.__webglFramebuffer[dt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let dt=0;dt<T.mipmaps.length;dt++)G.__webglFramebuffer[dt]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(vt)for(let dt=0,rt=et.length;dt<rt;dt++){const Ut=n.get(et[dt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&At(P)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){const rt=et[dt];G.__webglColorRenderbuffer[dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[dt]);const Ut=s.convert(rt.format,rt.colorSpace),st=s.convert(rt.type),Et=M(rt.internalFormat,Ut,st,rt.colorSpace,P.isXRRenderTarget===!0),qt=_t(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,Et,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,G.__webglColorRenderbuffer[dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),tt(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(it){e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),C(r.TEXTURE_CUBE_MAP,T);for(let dt=0;dt<6;dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let rt=0;rt<T.mipmaps.length;rt++)Y(G.__webglFramebuffer[dt][rt],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,rt);else Y(G.__webglFramebuffer[dt],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(T)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let dt=0,rt=et.length;dt<rt;dt++){const Ut=et[dt],st=n.get(Ut);e.bindTexture(r.TEXTURE_2D,st.__webglTexture),C(r.TEXTURE_2D,Ut),Y(G.__webglFramebuffer,P,Ut,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,0),m(Ut)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let dt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(dt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(dt,Z.__webglTexture),C(dt,T),T.mipmaps&&T.mipmaps.length>0)for(let rt=0;rt<T.mipmaps.length;rt++)Y(G.__webglFramebuffer[rt],P,T,r.COLOR_ATTACHMENT0,dt,rt);else Y(G.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,dt,0);m(T)&&p(dt),e.unbindTexture()}P.depthBuffer&&nt(P)}function F(P){const T=P.textures;for(let G=0,Z=T.length;G<Z;G++){const et=T[G];if(m(et)){const it=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,vt=n.get(et).__webglTexture;e.bindTexture(it,vt),p(it),e.unbindTexture()}}}const Ht=[],Mt=[];function Tt(P){if(P.samples>0){if(At(P)===!1){const T=P.textures,G=P.width,Z=P.height;let et=r.COLOR_BUFFER_BIT;const it=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=n.get(P),dt=T.length>1;if(dt)for(let rt=0;rt<T.length;rt++)e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let rt=0;rt<T.length;rt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,vt.__webglColorRenderbuffer[rt]);const Ut=n.get(T[rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ut,0)}r.blitFramebuffer(0,0,G,Z,0,0,G,Z,et,r.NEAREST),l===!0&&(Ht.length=0,Mt.length=0,Ht.push(r.COLOR_ATTACHMENT0+rt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ht.push(it),Mt.push(it),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Mt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),dt)for(let rt=0;rt<T.length;rt++){e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,vt.__webglColorRenderbuffer[rt]);const Ut=n.get(T[rt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,Ut,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function _t(P){return Math.min(i.maxSamples,P.samples)}function At(P){const T=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ct(P){const T=o.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function B(P,T){const G=P.colorSpace,Z=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==ir&&G!==zi&&(de.getTransfer(G)===_e?(Z!==ii||et!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function $t(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=v,this.setTexture2D=D,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=K,this.rebindTextures=Dt,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=At}function fS(r,t){function e(n,i=zi){let s;const o=de.getTransfer(i);if(n===Ji)return r.UNSIGNED_BYTE;if(n===Gd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Wd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Im)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Lm)return r.BYTE;if(n===Dm)return r.SHORT;if(n===Hd)return r.UNSIGNED_SHORT;if(n===Vd)return r.INT;if(n===Rs)return r.UNSIGNED_INT;if(n===ki)return r.FLOAT;if(n===ja)return r.HALF_FLOAT;if(n===Um)return r.ALPHA;if(n===Nm)return r.RGB;if(n===ii)return r.RGBA;if(n===Om)return r.LUMINANCE;if(n===Fm)return r.LUMINANCE_ALPHA;if(n===xs)return r.DEPTH_COMPONENT;if(n===xo)return r.DEPTH_STENCIL;if(n===Bm)return r.RED;if(n===Xd)return r.RED_INTEGER;if(n===zm)return r.RG;if(n===Yd)return r.RG_INTEGER;if(n===$d)return r.RGBA_INTEGER;if(n===ll||n===cl||n===ul||n===hl)if(o===_e)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ll)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ll)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wu||n===Cu||n===Ru||n===Pu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ru)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lu||n===Du||n===Iu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Lu||n===Du)return o===_e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Iu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uu||n===Nu||n===Ou||n===Fu||n===Bu||n===zu||n===ku||n===Hu||n===Vu||n===Gu||n===Wu||n===Xu||n===Yu||n===$u)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Uu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ou)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ku)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yu)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$u)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dl||n===qu||n===ju)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===dl)return o===_e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ju)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===km||n===Ku||n===Zu||n===Ju)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===dl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ku)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ju)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Uo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class pS extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class oa extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mS={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new oa;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const _S=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new pn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new Qi({vertexShader:_S,fragmentShader:gS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ri(new Ja(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class xS extends kr{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new vS,m=e.getContextAttributes();let p=null,M=null;const S=[],E=[],R=new Yt;let w=null;const b=new On;b.layers.enable(1),b.viewport=new Ve;const L=new On;L.layers.enable(2),L.viewport=new Ve;const y=[b,L],v=new pS;v.layers.enable(1),v.layers.enable(2);let U=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=S[Y];return tt===void 0&&(tt=new Fl,S[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=S[Y];return tt===void 0&&(tt=new Fl,S[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=S[Y];return tt===void 0&&(tt=new Fl,S[Y]=tt),tt.getHandSpace()};function D(Y){const tt=E.indexOf(Y.inputSource);if(tt===-1)return;const ct=S[tt];ct!==void 0&&(ct.update(Y.inputSource,Y.frame,c||o),ct.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",q);for(let Y=0;Y<S.length;Y++){const tt=E[Y];tt!==null&&(E[Y]=null,S[Y].disconnect(tt))}U=null,N=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,i=null,M=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",$),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Dr(f.framebufferWidth,f.framebufferHeight,{format:ii,type:Ji,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,ct=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?xo:xs,ct=m.stencil?Uo:Rs);const Dt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(Dt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Dr(d.textureWidth,d.textureHeight,{format:ii,type:Ji,depthTexture:new af(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Bt.setContext(i),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(Y){for(let tt=0;tt<Y.removed.length;tt++){const ct=Y.removed[tt],nt=E.indexOf(ct);nt>=0&&(E[nt]=null,S[nt].disconnect(ct))}for(let tt=0;tt<Y.added.length;tt++){const ct=Y.added[tt];let nt=E.indexOf(ct);if(nt===-1){for(let Pt=0;Pt<S.length;Pt++)if(Pt>=E.length){E.push(ct),nt=Pt;break}else if(E[Pt]===null){E[Pt]=ct,nt=Pt;break}if(nt===-1)break}const Dt=S[nt];Dt&&Dt.connect(ct)}}const K=new X,j=new X;function z(Y,tt,ct){K.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(ct.matrixWorld);const nt=K.distanceTo(j),Dt=tt.projectionMatrix.elements,Pt=ct.projectionMatrix.elements,F=Dt[14]/(Dt[10]-1),Ht=Dt[14]/(Dt[10]+1),Mt=(Dt[9]+1)/Dt[5],Tt=(Dt[9]-1)/Dt[5],_t=(Dt[8]-1)/Dt[0],At=(Pt[8]+1)/Pt[0],Ct=F*_t,B=F*At,$t=nt/(-_t+At),P=$t*-_t;tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(P),Y.translateZ($t),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const T=F+$t,G=Ht+$t,Z=Ct-P,et=B+(nt-P),it=Mt*Ht/G*T,vt=Tt*Ht/G*T;Y.projectionMatrix.makePerspective(Z,et,it,vt,T,G),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function J(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;_.texture!==null&&(Y.near=_.depthNear,Y.far=_.depthFar),v.near=L.near=b.near=Y.near,v.far=L.far=b.far=Y.far,(U!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),U=v.near,N=v.far,b.near=U,b.far=N,L.near=U,L.far=N,b.updateProjectionMatrix(),L.updateProjectionMatrix(),Y.updateProjectionMatrix());const tt=Y.parent,ct=v.cameras;J(v,tt);for(let nt=0;nt<ct.length;nt++)J(ct[nt],tt);ct.length===2?z(v,b,L):v.projectionMatrix.copy(b.projectionMatrix),C(Y,v,tt)};function C(Y,tt,ct){ct===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(ct.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=So*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null};let ht=null;function at(Y,tt){if(u=tt.getViewerPose(c||o),g=tt,u!==null){const ct=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let nt=!1;ct.length!==v.cameras.length&&(v.cameras.length=0,nt=!0);for(let Pt=0;Pt<ct.length;Pt++){const F=ct[Pt];let Ht=null;if(f!==null)Ht=f.getViewport(F);else{const Tt=h.getViewSubImage(d,F);Ht=Tt.viewport,Pt===0&&(t.setRenderTargetTextures(M,Tt.colorTexture,d.ignoreDepthValues?void 0:Tt.depthStencilTexture),t.setRenderTarget(M))}let Mt=y[Pt];Mt===void 0&&(Mt=new On,Mt.layers.enable(Pt),Mt.viewport=new Ve,y[Pt]=Mt),Mt.matrix.fromArray(F.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(F.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),Pt===0&&(v.matrix.copy(Mt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),nt===!0&&v.cameras.push(Mt)}const Dt=i.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Pt=h.getDepthInformation(ct[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,i.renderState)}}for(let ct=0;ct<S.length;ct++){const nt=E[ct],Dt=S[ct];nt!==null&&Dt!==void 0&&Dt.update(nt,tt,c||o)}_.render(t,v),ht&&ht(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Bt=new sf;Bt.setAnimationLoop(at),this.setAnimationLoop=function(Y){ht=Y},this.dispose=function(){}}}const hr=new Ai,SS=new Ae;function MS(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ef(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===_n&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===_n&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),S=M.envMap,E=M.envMapRotation;if(S&&(m.envMap.value=S,hr.copy(E),hr.x*=-1,hr.y*=-1,hr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),m.envMapRotation.value.setFromMatrix4(SS.makeRotationFromEuler(hr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const R=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*R,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yS(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const E=S.program;n.uniformBlockBinding(M,E)}function c(M,S){let E=i[M.id];E===void 0&&(g(M),E=u(M),i[M.id]=E,M.addEventListener("dispose",m));const R=S.program;n.updateUBOMapping(M,R);const w=t.render.frame;s[M.id]!==w&&(d(M),s[M.id]=w)}function u(M){const S=h();M.__bindingPointIndex=S;const E=r.createBuffer(),R=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,R,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,E),E}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const S=i[M.id],E=M.uniforms,R=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let w=0,b=E.length;w<b;w++){const L=Array.isArray(E[w])?E[w]:[E[w]];for(let y=0,v=L.length;y<v;y++){const U=L[y];if(f(U,w,y,R)===!0){const N=U.__offset,D=Array.isArray(U.value)?U.value:[U.value];let $=0;for(let q=0;q<D.length;q++){const K=D[q],j=_(K);typeof K=="number"||typeof K=="boolean"?(U.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,N+$,U.__data)):K.isMatrix3?(U.__data[0]=K.elements[0],U.__data[1]=K.elements[1],U.__data[2]=K.elements[2],U.__data[3]=0,U.__data[4]=K.elements[3],U.__data[5]=K.elements[4],U.__data[6]=K.elements[5],U.__data[7]=0,U.__data[8]=K.elements[6],U.__data[9]=K.elements[7],U.__data[10]=K.elements[8],U.__data[11]=0):(K.toArray(U.__data,$),$+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,S,E,R){const w=M.value,b=S+"_"+E;if(R[b]===void 0)return typeof w=="number"||typeof w=="boolean"?R[b]=w:R[b]=w.clone(),!0;{const L=R[b];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return R[b]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(M){const S=M.uniforms;let E=0;const R=16;for(let b=0,L=S.length;b<L;b++){const y=Array.isArray(S[b])?S[b]:[S[b]];for(let v=0,U=y.length;v<U;v++){const N=y[v],D=Array.isArray(N.value)?N.value:[N.value];for(let $=0,q=D.length;$<q;$++){const K=D[$],j=_(K),z=E%R;z!==0&&R-z<j.boundary&&(E+=R-z),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=j.storage}}}const w=E%R;return w>0&&(E+=R-w),M.__size=E,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class ES{constructor(t={}){const{canvas:e=m_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this._useLegacyLights=!1,this.toneMapping=$i,this.toneMappingExposure=1;const S=this;let E=!1,R=0,w=0,b=null,L=-1,y=null;const v=new Ve,U=new Ve;let N=null;const D=new ue(0);let $=0,q=e.width,K=e.height,j=1,z=null,J=null;const C=new Ve(0,0,q,K),ht=new Ve(0,0,q,K);let at=!1;const Bt=new Xc;let Y=!1,tt=!1;const ct=new Ae,nt=new X,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pt(){return b===null?j:1}let F=n;function Ht(A,O){return e.getContext(A,O)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zc}`),e.addEventListener("webglcontextlost",x,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",V,!1),F===null){const O="webgl2";if(F=Ht(O,A),F===null)throw Ht(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Mt,Tt,_t,At,Ct,B,$t,P,T,G,Z,et,it,vt,dt,rt,Ut,st,Et,qt,xt,St,Ft,Xt;function re(){Mt=new Lv(F),Mt.init(),St=new fS(F,Mt),Tt=new bv(F,Mt,t,St),_t=new hS(F),At=new Uv(F),Ct=new Zx,B=new dS(F,Mt,_t,Ct,Tt,St,At),$t=new wv(S),P=new Pv(S),T=new H_(F),Ft=new Ev(F,T),G=new Dv(F,T,At,Ft),Z=new Ov(F,G,T,At),Et=new Nv(F,Tt,B),rt=new Av(Ct),et=new Kx(S,$t,P,Mt,Tt,Ft,rt),it=new MS(S,Ct),vt=new Qx,dt=new sS(Mt),st=new yv(S,$t,P,_t,Z,d,l),Ut=new uS(S,Z,Tt),Xt=new yS(F,At,Tt,_t),qt=new Tv(F,Mt,At),xt=new Iv(F,Mt,At),At.programs=et.programs,S.capabilities=Tt,S.extensions=Mt,S.properties=Ct,S.renderLists=vt,S.shadowMap=Ut,S.state=_t,S.info=At}re();const zt=new xS(S,F);this.xr=zt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(q,K,!1))},this.getSize=function(A){return A.set(q,K)},this.setSize=function(A,O,k=!0){if(zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,K=O,e.width=Math.floor(A*j),e.height=Math.floor(O*j),k===!0&&(e.style.width=A+"px",e.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(q*j,K*j).floor()},this.setDrawingBufferSize=function(A,O,k){q=A,K=O,j=k,e.width=Math.floor(A*k),e.height=Math.floor(O*k),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(C)},this.setViewport=function(A,O,k,H){A.isVector4?C.set(A.x,A.y,A.z,A.w):C.set(A,O,k,H),_t.viewport(v.copy(C).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(ht)},this.setScissor=function(A,O,k,H){A.isVector4?ht.set(A.x,A.y,A.z,A.w):ht.set(A,O,k,H),_t.scissor(U.copy(ht).multiplyScalar(j).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(A){_t.setScissorTest(at=A)},this.setOpaqueSort=function(A){z=A},this.setTransparentSort=function(A){J=A},this.getClearColor=function(A){return A.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(A=!0,O=!0,k=!0){let H=0;if(A){let W=!1;if(b!==null){const lt=b.texture.format;W=lt===$d||lt===Yd||lt===Xd}if(W){const lt=b.texture.type,ft=lt===Ji||lt===Rs||lt===Hd||lt===Uo||lt===Gd||lt===Wd,gt=st.getClearColor(),It=st.getClearAlpha(),Gt=gt.r,Lt=gt.g,Rt=gt.b;ft?(f[0]=Gt,f[1]=Lt,f[2]=Rt,f[3]=It,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=Gt,g[1]=Lt,g[2]=Rt,g[3]=It,F.clearBufferiv(F.COLOR,0,g))}else H|=F.COLOR_BUFFER_BIT}O&&(H|=F.DEPTH_BUFFER_BIT),k&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",x,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",V,!1),vt.dispose(),dt.dispose(),Ct.dispose(),$t.dispose(),P.dispose(),Z.dispose(),Ft.dispose(),Xt.dispose(),et.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",Qt),zt.removeEventListener("sessionend",bt),pt.stop()};function x(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=At.autoReset,O=Ut.enabled,k=Ut.autoUpdate,H=Ut.needsUpdate,W=Ut.type;re(),At.autoReset=A,Ut.enabled=O,Ut.autoUpdate=k,Ut.needsUpdate=H,Ut.type=W}function V(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Q(A){const O=A.target;O.removeEventListener("dispose",Q),ot(O)}function ot(A){Nt(A),Ct.remove(A)}function Nt(A){const O=Ct.get(A).programs;O!==void 0&&(O.forEach(function(k){et.releaseProgram(k)}),A.isShaderMaterial&&et.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,k,H,W,lt){O===null&&(O=Dt);const ft=W.isMesh&&W.matrixWorld.determinant()<0,gt=Fe(A,O,k,H,W);_t.setMaterial(H,ft);let It=k.index,Gt=1;if(H.wireframe===!0){if(It=G.getWireframeAttribute(k),It===void 0)return;Gt=2}const Lt=k.drawRange,Rt=k.attributes.position;let ae=Lt.start*Gt,Re=(Lt.start+Lt.count)*Gt;lt!==null&&(ae=Math.max(ae,lt.start*Gt),Re=Math.min(Re,(lt.start+lt.count)*Gt)),It!==null?(ae=Math.max(ae,0),Re=Math.min(Re,It.count)):Rt!=null&&(ae=Math.max(ae,0),Re=Math.min(Re,Rt.count));const Xe=Re-ae;if(Xe<0||Xe===1/0)return;Ft.setup(W,H,gt,k,It);let nn,jt=qt;if(It!==null&&(nn=T.get(It),jt=xt,jt.setIndex(nn)),W.isMesh)H.wireframe===!0?(_t.setLineWidth(H.wireframeLinewidth*Pt()),jt.setMode(F.LINES)):jt.setMode(F.TRIANGLES);else if(W.isLine){let Vt=H.linewidth;Vt===void 0&&(Vt=1),_t.setLineWidth(Vt*Pt()),W.isLineSegments?jt.setMode(F.LINES):W.isLineLoop?jt.setMode(F.LINE_LOOP):jt.setMode(F.LINE_STRIP)}else W.isPoints?jt.setMode(F.POINTS):W.isSprite&&jt.setMode(F.TRIANGLES);if(W.isBatchedMesh)W._multiDrawInstances!==null?jt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances):jt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)jt.renderInstances(ae,Xe,W.count);else if(k.isInstancedBufferGeometry){const Vt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Kn=Math.min(k.instanceCount,Vt);jt.renderInstances(ae,Xe,Kn)}else jt.render(ae,Xe)};function Wt(A,O,k){A.transparent===!0&&A.side===Mi&&A.forceSinglePass===!1?(A.side=_n,A.needsUpdate=!0,Me(A,O,k),A.side=Zi,A.needsUpdate=!0,Me(A,O,k),A.side=Mi):Me(A,O,k)}this.compile=function(A,O,k=null){k===null&&(k=A),m=dt.get(k),m.init(O),M.push(m),k.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),A!==k&&A.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(S._useLegacyLights);const H=new Set;return A.traverse(function(W){const lt=W.material;if(lt)if(Array.isArray(lt))for(let ft=0;ft<lt.length;ft++){const gt=lt[ft];Wt(gt,k,W),H.add(gt)}else Wt(lt,k,W),H.add(lt)}),M.pop(),m=null,H},this.compileAsync=function(A,O,k=null){const H=this.compile(A,O,k);return new Promise(W=>{function lt(){if(H.forEach(function(ft){Ct.get(ft).currentProgram.isReady()&&H.delete(ft)}),H.size===0){W(A);return}setTimeout(lt,10)}Mt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let le=null;function he(A){le&&le(A)}function Qt(){pt.stop()}function bt(){pt.start()}const pt=new sf;pt.setAnimationLoop(he),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(A){le=A,zt.setAnimationLoop(A),A===null?pt.stop():pt.start()},zt.addEventListener("sessionstart",Qt),zt.addEventListener("sessionend",bt),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(O),O=zt.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,O,b),m=dt.get(A,M.length),m.init(O),M.push(m),ct.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Bt.setFromProjectionMatrix(ct),tt=this.localClippingEnabled,Y=rt.init(this.clippingPlanes,tt),_=vt.get(A,p.length),_.init(),p.push(_),Kt(A,O,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(z,J);const k=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1;k&&st.addToRenderList(_,A),this.info.render.frame++,Y===!0&&rt.beginShadows();const H=m.state.shadowsArray;Ut.render(H,A,O),Y===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,lt=_.transmissive;if(m.setupLights(S._useLegacyLights),O.isArrayCamera){const ft=O.cameras;if(lt.length>0)for(let gt=0,It=ft.length;gt<It;gt++){const Gt=ft[gt];Ot(W,lt,A,Gt)}k&&st.render(A);for(let gt=0,It=ft.length;gt<It;gt++){const Gt=ft[gt];ut(_,A,Gt,Gt.viewport)}}else lt.length>0&&Ot(W,lt,A,O),k&&st.render(A),ut(_,A,O);b!==null&&(B.updateMultisampleRenderTarget(b),B.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(S,A,O),Ft.resetDefaultState(),L=-1,y=null,M.pop(),M.length>0?(m=M[M.length-1],Y===!0&&rt.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Kt(A,O,k,H){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)k=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Bt.intersectsSprite(A)){H&&nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ct);const ft=Z.update(A),gt=A.material;gt.visible&&_.push(A,ft,gt,k,nt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Bt.intersectsObject(A))){const ft=Z.update(A),gt=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),nt.copy(A.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),nt.copy(ft.boundingSphere.center)),nt.applyMatrix4(A.matrixWorld).applyMatrix4(ct)),Array.isArray(gt)){const It=ft.groups;for(let Gt=0,Lt=It.length;Gt<Lt;Gt++){const Rt=It[Gt],ae=gt[Rt.materialIndex];ae&&ae.visible&&_.push(A,ft,ae,k,nt.z,Rt)}}else gt.visible&&_.push(A,ft,gt,k,nt.z,null)}}const lt=A.children;for(let ft=0,gt=lt.length;ft<gt;ft++)Kt(lt[ft],O,k,H)}function ut(A,O,k,H){const W=A.opaque,lt=A.transmissive,ft=A.transparent;m.setupLightsView(k),Y===!0&&rt.setGlobalState(S.clippingPlanes,k),H&&_t.viewport(v.copy(H)),W.length>0&&wt(W,O,k),lt.length>0&&wt(lt,O,k),ft.length>0&&wt(ft,O,k),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Ot(A,O,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Dr(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?ja:Ji,minFilter:Mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const lt=m.state.transmissionRenderTarget[H.id],ft=H.viewport||v;lt.setSize(ft.z,ft.w);const gt=S.getRenderTarget();S.setRenderTarget(lt),S.getClearColor(D),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear();const It=S.toneMapping;S.toneMapping=$i;const Gt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),Y===!0&&rt.setGlobalState(S.clippingPlanes,H),wt(A,k,H),B.updateMultisampleRenderTarget(lt),B.updateRenderTargetMipmap(lt),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let Rt=0,ae=O.length;Rt<ae;Rt++){const Re=O[Rt],Xe=Re.object,nn=Re.geometry,jt=Re.material,Vt=Re.group;if(jt.side===Mi&&Xe.layers.test(H.layers)){const Kn=jt.side;jt.side=_n,jt.needsUpdate=!0,kt(Xe,k,H,nn,jt,Vt),jt.side=Kn,jt.needsUpdate=!0,Lt=!0}}Lt===!0&&(B.updateMultisampleRenderTarget(lt),B.updateRenderTargetMipmap(lt))}S.setRenderTarget(gt),S.setClearColor(D,$),Gt!==void 0&&(H.viewport=Gt),S.toneMapping=It}function wt(A,O,k){const H=O.isScene===!0?O.overrideMaterial:null;for(let W=0,lt=A.length;W<lt;W++){const ft=A[W],gt=ft.object,It=ft.geometry,Gt=H===null?ft.material:H,Lt=ft.group;gt.layers.test(k.layers)&&kt(gt,O,k,It,Gt,Lt)}}function kt(A,O,k,H,W,lt){A.onBeforeRender(S,O,k,H,W,lt),A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(S,O,k,H,A,lt),W.transparent===!0&&W.side===Mi&&W.forceSinglePass===!1?(W.side=_n,W.needsUpdate=!0,S.renderBufferDirect(k,O,H,W,A,lt),W.side=Zi,W.needsUpdate=!0,S.renderBufferDirect(k,O,H,W,A,lt),W.side=Mi):S.renderBufferDirect(k,O,H,W,A,lt),A.onAfterRender(S,O,k,H,W,lt)}function Me(A,O,k){O.isScene!==!0&&(O=Dt);const H=Ct.get(A),W=m.state.lights,lt=m.state.shadowsArray,ft=W.state.version,gt=et.getParameters(A,W.state,lt,O,k),It=et.getProgramCacheKey(gt);let Gt=H.programs;H.environment=A.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(A.isMeshStandardMaterial?P:$t).get(A.envMap||H.environment),H.envMapRotation=H.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Gt===void 0&&(A.addEventListener("dispose",Q),Gt=new Map,H.programs=Gt);let Lt=Gt.get(It);if(Lt!==void 0){if(H.currentProgram===Lt&&H.lightsStateVersion===ft)return ve(A,gt),Lt}else gt.uniforms=et.getUniforms(A),A.onBuild(k,gt,S),A.onBeforeCompile(gt,S),Lt=et.acquireProgram(gt,It),Gt.set(It,Lt),H.uniforms=gt.uniforms;const Rt=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Rt.clippingPlanes=rt.uniform),ve(A,gt),H.needsLights=pe(A),H.lightsStateVersion=ft,H.needsLights&&(Rt.ambientLightColor.value=W.state.ambient,Rt.lightProbe.value=W.state.probe,Rt.directionalLights.value=W.state.directional,Rt.directionalLightShadows.value=W.state.directionalShadow,Rt.spotLights.value=W.state.spot,Rt.spotLightShadows.value=W.state.spotShadow,Rt.rectAreaLights.value=W.state.rectArea,Rt.ltc_1.value=W.state.rectAreaLTC1,Rt.ltc_2.value=W.state.rectAreaLTC2,Rt.pointLights.value=W.state.point,Rt.pointLightShadows.value=W.state.pointShadow,Rt.hemisphereLights.value=W.state.hemi,Rt.directionalShadowMap.value=W.state.directionalShadowMap,Rt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Rt.spotShadowMap.value=W.state.spotShadowMap,Rt.spotLightMatrix.value=W.state.spotLightMatrix,Rt.spotLightMap.value=W.state.spotLightMap,Rt.pointShadowMap.value=W.state.pointShadowMap,Rt.pointShadowMatrix.value=W.state.pointShadowMatrix),H.currentProgram=Lt,H.uniformsList=null,Lt}function te(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=Ma.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function ve(A,O){const k=Ct.get(A);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.instancingMorph=O.instancingMorph,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function Fe(A,O,k,H,W){O.isScene!==!0&&(O=Dt),B.resetTextureUnits();const lt=O.fog,ft=H.isMeshStandardMaterial?O.environment:null,gt=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ir,It=(H.isMeshStandardMaterial?P:$t).get(H.envMap||ft),Gt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Lt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Rt=!!k.morphAttributes.position,ae=!!k.morphAttributes.normal,Re=!!k.morphAttributes.color;let Xe=$i;H.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Xe=S.toneMapping);const nn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,jt=nn!==void 0?nn.length:0,Vt=Ct.get(H),Kn=m.state.lights;if(Y===!0&&(tt===!0||A!==y)){const In=A===y&&H.id===L;rt.setState(H,A,In)}let ce=!1;H.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Kn.state.version||Vt.outputColorSpace!==gt||W.isBatchedMesh&&Vt.batching===!1||!W.isBatchedMesh&&Vt.batching===!0||W.isInstancedMesh&&Vt.instancing===!1||!W.isInstancedMesh&&Vt.instancing===!0||W.isSkinnedMesh&&Vt.skinning===!1||!W.isSkinnedMesh&&Vt.skinning===!0||W.isInstancedMesh&&Vt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Vt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Vt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Vt.instancingMorph===!1&&W.morphTexture!==null||Vt.envMap!==It||H.fog===!0&&Vt.fog!==lt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==rt.numPlanes||Vt.numIntersection!==rt.numIntersection)||Vt.vertexAlphas!==Gt||Vt.vertexTangents!==Lt||Vt.morphTargets!==Rt||Vt.morphNormals!==ae||Vt.morphColors!==Re||Vt.toneMapping!==Xe||Vt.morphTargetsCount!==jt)&&(ce=!0):(ce=!0,Vt.__version=H.version);let sr=Vt.currentProgram;ce===!0&&(sr=Me(H,O,W));let Mu=!1,Vs=!1,rl=!1;const Ye=sr.getUniforms(),Ri=Vt.uniforms;if(_t.useProgram(sr.program)&&(Mu=!0,Vs=!0,rl=!0),H.id!==L&&(L=H.id,Vs=!0),Mu||y!==A){Ye.setValue(F,"projectionMatrix",A.projectionMatrix),Ye.setValue(F,"viewMatrix",A.matrixWorldInverse);const In=Ye.map.cameraPosition;In!==void 0&&In.setValue(F,nt.setFromMatrixPosition(A.matrixWorld)),Tt.logarithmicDepthBuffer&&Ye.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ye.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,Vs=!0,rl=!0)}if(W.isSkinnedMesh){Ye.setOptional(F,W,"bindMatrix"),Ye.setOptional(F,W,"bindMatrixInverse");const In=W.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Ye.setValue(F,"boneTexture",In.boneTexture,B))}W.isBatchedMesh&&(Ye.setOptional(F,W,"batchingTexture"),Ye.setValue(F,"batchingTexture",W._matricesTexture,B));const sl=k.morphAttributes;if((sl.position!==void 0||sl.normal!==void 0||sl.color!==void 0)&&Et.update(W,k,sr),(Vs||Vt.receiveShadow!==W.receiveShadow)&&(Vt.receiveShadow=W.receiveShadow,Ye.setValue(F,"receiveShadow",W.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ri.envMap.value=It,Ri.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(Ri.envMapIntensity.value=O.environmentIntensity),Vs&&(Ye.setValue(F,"toneMappingExposure",S.toneMappingExposure),Vt.needsLights&&xe(Ri,rl),lt&&H.fog===!0&&it.refreshFogUniforms(Ri,lt),it.refreshMaterialUniforms(Ri,H,j,K,m.state.transmissionRenderTarget[A.id]),Ma.upload(F,te(Vt),Ri,B)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ma.upload(F,te(Vt),Ri,B),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ye.setValue(F,"center",W.center),Ye.setValue(F,"modelViewMatrix",W.modelViewMatrix),Ye.setValue(F,"normalMatrix",W.normalMatrix),Ye.setValue(F,"modelMatrix",W.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const In=H.uniformsGroups;for(let ol=0,Wp=In.length;ol<Wp;ol++){const yu=In[ol];Xt.update(yu,sr),Xt.bind(yu,sr)}}return sr}function xe(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function pe(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,O,k){Ct.get(A.texture).__webglTexture=O,Ct.get(A.depthTexture).__webglTexture=k;const H=Ct.get(A);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const k=Ct.get(A);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,k=0){b=A,R=O,w=k;let H=!0,W=null,lt=!1,ft=!1;if(A){const It=Ct.get(A);It.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(F.FRAMEBUFFER,null),H=!1):It.__webglFramebuffer===void 0?B.setupRenderTarget(A):It.__hasExternalTextures&&B.rebindTextures(A,Ct.get(A.texture).__webglTexture,Ct.get(A.depthTexture).__webglTexture);const Gt=A.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(ft=!0);const Lt=Ct.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Lt[O])?W=Lt[O][k]:W=Lt[O],lt=!0):A.samples>0&&B.useMultisampledRTT(A)===!1?W=Ct.get(A).__webglMultisampledFramebuffer:Array.isArray(Lt)?W=Lt[k]:W=Lt,v.copy(A.viewport),U.copy(A.scissor),N=A.scissorTest}else v.copy(C).multiplyScalar(j).floor(),U.copy(ht).multiplyScalar(j).floor(),N=at;if(_t.bindFramebuffer(F.FRAMEBUFFER,W)&&H&&_t.drawBuffers(A,W),_t.viewport(v),_t.scissor(U),_t.setScissorTest(N),lt){const It=Ct.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,It.__webglTexture,k)}else if(ft){const It=Ct.get(A.texture),Gt=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.__webglTexture,k||0,Gt)}L=-1},this.readRenderTargetPixels=function(A,O,k,H,W,lt,ft){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ft!==void 0&&(gt=gt[ft]),gt){_t.bindFramebuffer(F.FRAMEBUFFER,gt);try{const It=A.texture,Gt=It.format,Lt=It.type;if(!Tt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-H&&k>=0&&k<=A.height-W&&F.readPixels(O,k,H,W,St.convert(Gt),St.convert(Lt),lt)}finally{const It=b!==null?Ct.get(b).__webglFramebuffer:null;_t.bindFramebuffer(F.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(A,O,k=0){const H=Math.pow(2,-k),W=Math.floor(O.image.width*H),lt=Math.floor(O.image.height*H);B.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,A.x,A.y,W,lt),_t.unbindTexture()},this.copyTextureToTexture=function(A,O,k,H=0){const W=O.image.width,lt=O.image.height,ft=St.convert(k.format),gt=St.convert(k.type);B.setTexture2D(k,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment),O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,H,A.x,A.y,W,lt,ft,gt,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,H,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,ft,O.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,H,A.x,A.y,ft,gt,O.image),H===0&&k.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(A,O,k,H,W=0){const lt=A.max.x-A.min.x,ft=A.max.y-A.min.y,gt=A.max.z-A.min.z,It=St.convert(H.format),Gt=St.convert(H.type);let Lt;if(H.isData3DTexture)B.setTexture3D(H,0),Lt=F.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)B.setTexture2DArray(H,0),Lt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const Rt=F.getParameter(F.UNPACK_ROW_LENGTH),ae=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Re=F.getParameter(F.UNPACK_SKIP_PIXELS),Xe=F.getParameter(F.UNPACK_SKIP_ROWS),nn=F.getParameter(F.UNPACK_SKIP_IMAGES),jt=k.isCompressedTexture?k.mipmaps[W]:k.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,jt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,jt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,A.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,A.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,A.min.z),k.isDataTexture||k.isData3DTexture?F.texSubImage3D(Lt,W,O.x,O.y,O.z,lt,ft,gt,It,Gt,jt.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(Lt,W,O.x,O.y,O.z,lt,ft,gt,It,jt.data):F.texSubImage3D(Lt,W,O.x,O.y,O.z,lt,ft,gt,It,Gt,jt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Rt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Re),F.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,nn),W===0&&H.generateMipmaps&&F.generateMipmap(Lt),_t.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?B.setTextureCube(A,0):A.isData3DTexture?B.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?B.setTexture2DArray(A,0):B.setTexture2D(A,0),_t.unbindTexture()},this.resetState=function(){R=0,w=0,b=null,_t.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===kc?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===Ka?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class TS extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Wh={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class bS{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const AS=new bS;class $c{constructor(t){this.manager=t!==void 0?t:AS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}$c.DEFAULT_MATERIAL_NAME="__DEFAULT";class wS extends $c{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Wh.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Mo("img");function l(){u(),Wh.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class CS extends $c{constructor(t){super(t)}load(t,e,n,i){const s=new pn,o=new wS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class ff extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Bl=new Ae,Xh=new X,Yh=new X;class RS{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xc,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xh),Yh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yh),e.updateMatrixWorld(),Bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class PS extends RS{constructor(){super(new of(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class LS extends ff{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new PS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class DS extends ff{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const $h=new Ae;class IS{constructor(t,e,n=0,i=1/0){this.ray=new Gc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Wc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $h.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($h),this}intersectObject(t,e=!0,n=[]){return uc(t,this,n,e),n.sort(qh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)uc(t[i],this,n,e);return n.sort(qh),n}}function qh(r,t){return r.distance-t.distance}function uc(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)uc(i[s],t,e,!0)}}class jh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ze(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);const Kh={type:"change"},zl={type:"start"},Zh={type:"end"},aa=new Gc,Jh=new Bi,US=Math.cos(70*p_.DEG2RAD);class NS extends kr{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gr.ROTATE,MIDDLE:Gr.DOLLY,RIGHT:Gr.PAN},this.touches={ONE:Wr.ROTATE,TWO:Wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",Ut),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ut),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Kh),n.update(),s=i.NONE},this.update=function(){const x=new X,I=new Ir().setFromUnitVectors(t.up,new X(0,1,0)),V=I.clone().invert(),Q=new X,ot=new Ir,Nt=new X,Wt=2*Math.PI;return function(he=null){const Qt=n.object.position;x.copy(Qt).sub(n.target),x.applyQuaternion(I),a.setFromVector3(x),n.autoRotate&&s===i.NONE&&N(v(he)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let bt=n.minAzimuthAngle,pt=n.maxAzimuthAngle;isFinite(bt)&&isFinite(pt)&&(bt<-Math.PI?bt+=Wt:bt>Math.PI&&(bt-=Wt),pt<-Math.PI?pt+=Wt:pt>Math.PI&&(pt-=Wt),bt<=pt?a.theta=Math.max(bt,Math.min(pt,a.theta)):a.theta=a.theta>(bt+pt)/2?Math.max(bt,a.theta):Math.min(pt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Kt=!1;if(n.zoomToCursor&&w||n.object.isOrthographicCamera)a.radius=C(a.radius);else{const ut=a.radius;a.radius=C(a.radius*c),Kt=ut!=a.radius}if(x.setFromSpherical(a),x.applyQuaternion(V),Qt.copy(n.target).add(x),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&w){let ut=null;if(n.object.isPerspectiveCamera){const Ot=x.length();ut=C(Ot*c);const wt=Ot-ut;n.object.position.addScaledVector(E,wt),n.object.updateMatrixWorld(),Kt=!!wt}else if(n.object.isOrthographicCamera){const Ot=new X(R.x,R.y,0);Ot.unproject(n.object);const wt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Kt=wt!==n.object.zoom;const kt=new X(R.x,R.y,0);kt.unproject(n.object),n.object.position.sub(kt).add(Ot),n.object.updateMatrixWorld(),ut=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ut!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ut).add(n.object.position):(aa.origin.copy(n.object.position),aa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(aa.direction))<US?t.lookAt(n.target):(Jh.setFromNormalAndCoplanarPoint(n.object.up,n.target),aa.intersectPlane(Jh,n.target))))}else if(n.object.isOrthographicCamera){const ut=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),ut!==n.object.zoom&&(n.object.updateProjectionMatrix(),Kt=!0)}return c=1,w=!1,Kt||Q.distanceToSquared(n.object.position)>o||8*(1-ot.dot(n.object.quaternion))>o||Nt.distanceToSquared(n.target)>o?(n.dispatchEvent(Kh),Q.copy(n.object.position),ot.copy(n.object.quaternion),Nt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",qt),n.domElement.removeEventListener("pointerdown",P),n.domElement.removeEventListener("pointercancel",G),n.domElement.removeEventListener("wheel",it),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",G),n.domElement.getRootNode().removeEventListener("keydown",dt,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ut),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new jh,l=new jh;let c=1;const u=new X,h=new Yt,d=new Yt,f=new Yt,g=new Yt,_=new Yt,m=new Yt,p=new Yt,M=new Yt,S=new Yt,E=new X,R=new Yt;let w=!1;const b=[],L={};let y=!1;function v(x){return x!==null?2*Math.PI/60*n.autoRotateSpeed*x:2*Math.PI/60/60*n.autoRotateSpeed}function U(x){const I=Math.abs(x*.01);return Math.pow(.95,n.zoomSpeed*I)}function N(x){l.theta-=x}function D(x){l.phi-=x}const $=function(){const x=new X;return function(V,Q){x.setFromMatrixColumn(Q,0),x.multiplyScalar(-V),u.add(x)}}(),q=function(){const x=new X;return function(V,Q){n.screenSpacePanning===!0?x.setFromMatrixColumn(Q,1):(x.setFromMatrixColumn(Q,0),x.crossVectors(n.object.up,x)),x.multiplyScalar(V),u.add(x)}}(),K=function(){const x=new X;return function(V,Q){const ot=n.domElement;if(n.object.isPerspectiveCamera){const Nt=n.object.position;x.copy(Nt).sub(n.target);let Wt=x.length();Wt*=Math.tan(n.object.fov/2*Math.PI/180),$(2*V*Wt/ot.clientHeight,n.object.matrix),q(2*Q*Wt/ot.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?($(V*(n.object.right-n.object.left)/n.object.zoom/ot.clientWidth,n.object.matrix),q(Q*(n.object.top-n.object.bottom)/n.object.zoom/ot.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(x){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(x){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(x,I){if(!n.zoomToCursor)return;w=!0;const V=n.domElement.getBoundingClientRect(),Q=x-V.left,ot=I-V.top,Nt=V.width,Wt=V.height;R.x=Q/Nt*2-1,R.y=-(ot/Wt)*2+1,E.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function C(x){return Math.max(n.minDistance,Math.min(n.maxDistance,x))}function ht(x){h.set(x.clientX,x.clientY)}function at(x){J(x.clientX,x.clientX),p.set(x.clientX,x.clientY)}function Bt(x){g.set(x.clientX,x.clientY)}function Y(x){d.set(x.clientX,x.clientY),f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const I=n.domElement;N(2*Math.PI*f.x/I.clientHeight),D(2*Math.PI*f.y/I.clientHeight),h.copy(d),n.update()}function tt(x){M.set(x.clientX,x.clientY),S.subVectors(M,p),S.y>0?j(U(S.y)):S.y<0&&z(U(S.y)),p.copy(M),n.update()}function ct(x){_.set(x.clientX,x.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),K(m.x,m.y),g.copy(_),n.update()}function nt(x){J(x.clientX,x.clientY),x.deltaY<0?z(U(x.deltaY)):x.deltaY>0&&j(U(x.deltaY)),n.update()}function Dt(x){let I=!1;switch(x.code){case n.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,n.keyPanSpeed),I=!0;break;case n.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,-n.keyPanSpeed),I=!0;break;case n.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(n.keyPanSpeed,0),I=!0;break;case n.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(-n.keyPanSpeed,0),I=!0;break}I&&(x.preventDefault(),n.update())}function Pt(x){if(b.length===1)h.set(x.pageX,x.pageY);else{const I=re(x),V=.5*(x.pageX+I.x),Q=.5*(x.pageY+I.y);h.set(V,Q)}}function F(x){if(b.length===1)g.set(x.pageX,x.pageY);else{const I=re(x),V=.5*(x.pageX+I.x),Q=.5*(x.pageY+I.y);g.set(V,Q)}}function Ht(x){const I=re(x),V=x.pageX-I.x,Q=x.pageY-I.y,ot=Math.sqrt(V*V+Q*Q);p.set(0,ot)}function Mt(x){n.enableZoom&&Ht(x),n.enablePan&&F(x)}function Tt(x){n.enableZoom&&Ht(x),n.enableRotate&&Pt(x)}function _t(x){if(b.length==1)d.set(x.pageX,x.pageY);else{const V=re(x),Q=.5*(x.pageX+V.x),ot=.5*(x.pageY+V.y);d.set(Q,ot)}f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const I=n.domElement;N(2*Math.PI*f.x/I.clientHeight),D(2*Math.PI*f.y/I.clientHeight),h.copy(d)}function At(x){if(b.length===1)_.set(x.pageX,x.pageY);else{const I=re(x),V=.5*(x.pageX+I.x),Q=.5*(x.pageY+I.y);_.set(V,Q)}m.subVectors(_,g).multiplyScalar(n.panSpeed),K(m.x,m.y),g.copy(_)}function Ct(x){const I=re(x),V=x.pageX-I.x,Q=x.pageY-I.y,ot=Math.sqrt(V*V+Q*Q);M.set(0,ot),S.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),j(S.y),p.copy(M);const Nt=(x.pageX+I.x)*.5,Wt=(x.pageY+I.y)*.5;J(Nt,Wt)}function B(x){n.enableZoom&&Ct(x),n.enablePan&&At(x)}function $t(x){n.enableZoom&&Ct(x),n.enableRotate&&_t(x)}function P(x){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(x.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",G)),!Ft(x)&&(xt(x),x.pointerType==="touch"?st(x):Z(x)))}function T(x){n.enabled!==!1&&(x.pointerType==="touch"?Et(x):et(x))}function G(x){switch(St(x),b.length){case 0:n.domElement.releasePointerCapture(x.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",G),n.dispatchEvent(Zh),s=i.NONE;break;case 1:const I=b[0],V=L[I];st({pointerId:I,pageX:V.x,pageY:V.y});break}}function Z(x){let I;switch(x.button){case 0:I=n.mouseButtons.LEFT;break;case 1:I=n.mouseButtons.MIDDLE;break;case 2:I=n.mouseButtons.RIGHT;break;default:I=-1}switch(I){case Gr.DOLLY:if(n.enableZoom===!1)return;at(x),s=i.DOLLY;break;case Gr.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(n.enablePan===!1)return;Bt(x),s=i.PAN}else{if(n.enableRotate===!1)return;ht(x),s=i.ROTATE}break;case Gr.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(n.enableRotate===!1)return;ht(x),s=i.ROTATE}else{if(n.enablePan===!1)return;Bt(x),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(zl)}function et(x){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Y(x);break;case i.DOLLY:if(n.enableZoom===!1)return;tt(x);break;case i.PAN:if(n.enablePan===!1)return;ct(x);break}}function it(x){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(x.preventDefault(),n.dispatchEvent(zl),nt(vt(x)),n.dispatchEvent(Zh))}function vt(x){const I=x.deltaMode,V={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch(I){case 1:V.deltaY*=16;break;case 2:V.deltaY*=100;break}return x.ctrlKey&&!y&&(V.deltaY*=10),V}function dt(x){x.key==="Control"&&(y=!0,n.domElement.getRootNode().addEventListener("keyup",rt,{passive:!0,capture:!0}))}function rt(x){x.key==="Control"&&(y=!1,n.domElement.getRootNode().removeEventListener("keyup",rt,{passive:!0,capture:!0}))}function Ut(x){n.enabled===!1||n.enablePan===!1||Dt(x)}function st(x){switch(Xt(x),b.length){case 1:switch(n.touches.ONE){case Wr.ROTATE:if(n.enableRotate===!1)return;Pt(x),s=i.TOUCH_ROTATE;break;case Wr.PAN:if(n.enablePan===!1)return;F(x),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Wr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Mt(x),s=i.TOUCH_DOLLY_PAN;break;case Wr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Tt(x),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(zl)}function Et(x){switch(Xt(x),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_t(x),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;At(x),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(x),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;$t(x),n.update();break;default:s=i.NONE}}function qt(x){n.enabled!==!1&&x.preventDefault()}function xt(x){b.push(x.pointerId)}function St(x){delete L[x.pointerId];for(let I=0;I<b.length;I++)if(b[I]==x.pointerId){b.splice(I,1);return}}function Ft(x){for(let I=0;I<b.length;I++)if(b[I]==x.pointerId)return!0;return!1}function Xt(x){let I=L[x.pointerId];I===void 0&&(I=new Yt,L[x.pointerId]=I),I.set(x.pageX,x.pageY)}function re(x){const I=x.pointerId===b[0]?b[1]:b[0];return L[I]}n.domElement.addEventListener("contextmenu",qt),n.domElement.addEventListener("pointerdown",P),n.domElement.addEventListener("pointercancel",G),n.domElement.addEventListener("wheel",it,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",dt,{passive:!0,capture:!0}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class li{constructor(t,e,n,i,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),li.nextNameID=li.nextNameID||0,this.$name.id=`lil-gui-name-${++li.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class OS extends li{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function hc(r){let t,e;return(t=r.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const FS={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:hc,toHexString:hc},yo={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},BS={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,t,e=1){const n=yo.fromHexString(r);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([r,t,e],n=1){n=255/n;const i=r*n<<16^t*n<<8^e*n<<0;return yo.toHexString(i)}},zS={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,t,e=1){const n=yo.fromHexString(r);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r,g:t,b:e},n=1){n=255/n;const i=r*n<<16^t*n<<8^e*n<<0;return yo.toHexString(i)}},kS=[FS,yo,BS,zS];function HS(r){return kS.find(t=>t.match(r))}class VS extends li{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=HS(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=hc(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class kl extends li{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class GS extends li{constructor(t,e,n,i,s,o){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let M=parseFloat(this.$input.value);isNaN(M)||(this._stepExplicit&&(M=this._snap(M)),this.setValue(this._clamp(M)))},n=M=>{const S=parseFloat(this.$input.value);isNaN(S)||(this._snapClampSetValue(S+M),this.$input.value=this.getValue())},i=M=>{M.key==="Enter"&&this.$input.blur(),M.code==="ArrowUp"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M))),M.code==="ArrowDown"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M)*-1))},s=M=>{this._inputFocused&&(M.preventDefault(),n(this._step*this._normalizeMouseWheel(M)))};let o=!1,a,l,c,u,h;const d=5,f=M=>{a=M.clientX,l=c=M.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=M=>{if(o){const S=M.clientX-a,E=M.clientY-l;Math.abs(E)>d?(M.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(S)>d&&_()}if(!o){const S=M.clientY-c;h-=S*this._step*this._arrowKeyMultiplier(M),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=M.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(p,M,S,E,R)=>(p-M)/(S-M)*(R-E)+E,e=p=>{const M=this.$slider.getBoundingClientRect();let S=t(p,M.left,M.right,this._min,this._max);this._snapClampSetValue(S)},n=p=>{this._setDraggingStyle(!0),e(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{e(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),e(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=p=>{if(o){const M=p.touches[0].clientX-a,S=p.touches[0].clientY-l;Math.abs(M)>Math.abs(S)?c(p):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else p.preventDefault(),e(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const S=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+S),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class WS extends li{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class XS extends li{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const YS=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function $S(r){const t=document.createElement("style");t.innerHTML=r;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Qh=!1;class qc{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Qh&&a&&($S(YS),Qh=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(t,e,n,i,s){if(Object(n)===n)return new WS(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new GS(this,t,e,n,i,s);case"boolean":return new OS(this,t,e);case"string":return new XS(this,t,e);case"function":return new kl(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new VS(this,t,e,n)}addFolder(t){const e=new qc({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof kl||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof kl)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}function xi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function pf(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ls={duration:.5,overwrite:!1,delay:0},jc,tn,Se,kn=1e8,me=1/kn,dc=Math.PI*2,qS=dc/4,jS=0,mf=Math.sqrt,KS=Math.cos,ZS=Math.sin,Ge=function(t){return typeof t=="string"},be=function(t){return typeof t=="function"},wi=function(t){return typeof t=="number"},Kc=function(t){return typeof t>"u"},hi=function(t){return typeof t=="object"},gn=function(t){return t!==!1},Zc=function(){return typeof window<"u"},la=function(t){return be(t)||Ge(t)},_f=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},en=Array.isArray,fc=/(?:-?\.?\d|\.)+/gi,gf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Hl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,vf=/[+-]=-?[.\d]+/,xf=/[^,'"\[\]\s]+/gi,JS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ee,Jn,pc,Jc,Dn={},Oa={},Sf,Mf=function(t){return(Oa=Ur(t,Dn))&&Mn},Qc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Eo=function(t,e){return!e&&console.warn(t)},yf=function(t,e){return t&&(Dn[t]=e)&&Oa&&(Oa[t]=e)||Dn},To=function(){return 0},QS={suppressEvents:!0,isStart:!0,kill:!1},ya={suppressEvents:!0,kill:!1},tM={suppressEvents:!0},tu={},qi=[],mc={},Ef,An={},Vl={},td=30,Ea=[],eu="",nu=function(t){var e=t[0],n,i;if(hi(e)||be(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ea.length;i--&&!Ea[i].targetTest(e););n=Ea[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new $f(t[i],n)))||t.splice(i,1);return t},br=function(t){return t._gsap||nu(Hn(t))[0]._gsap},Tf=function(t,e,n){return(n=t[e])&&be(n)?t[e]():Kc(n)&&t.getAttribute&&t.getAttribute(e)||n},vn=function(t,e){return(t=t.split(",")).forEach(e)||t},we=function(t){return Math.round(t*1e5)/1e5||0},He=function(t){return Math.round(t*1e7)/1e7||0},Ms=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},eM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Fa=function(){var t=qi.length,e=qi.slice(0),n,i;for(mc={},qi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},bf=function(t,e,n,i){qi.length&&!tn&&Fa(),t.render(e,n,i||tn&&e<0&&(t._initted||t._startAt)),qi.length&&!tn&&Fa()},Af=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(xf).length<2?e:Ge(t)?t.trim():t},wf=function(t){return t},Gn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},nM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ur=function(t,e){for(var n in e)t[n]=e[n];return t},ed=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=hi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Ba=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},oo=function(t){var e=t.parent||Ee,n=t.keyframes?nM(en(t.keyframes)):Gn;if(gn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},iM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Cf=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},tl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},tr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ar=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},rM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},_c=function(t,e,n,i){return t._startAt&&(tn?t._startAt.revert(ya):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},sM=function r(t){return!t||t._ts&&r(t.parent)},nd=function(t){return t._repeat?Ds(t._tTime,t=t.duration()+t._rDelay)*t:0},Ds=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},za=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},el=function(t){return t._end=He(t._start+(t._tDur/Math.abs(t._ts||t._rts||me)||0))},nl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=He(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),el(t),n._dirty||Ar(n,t)),t},Rf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=za(t.rawTime(),e),(!e._dur||Oo(0,e.totalDuration(),n)-e._tTime>me)&&e.render(n,!0)),Ar(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-me}},ni=function(t,e,n,i){return e.parent&&tr(e),e._start=He((wi(n)?n:n||t!==Ee?Nn(t,n,e):t._time)+e._delay),e._end=He(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Cf(t,e,"_first","_last",t._sort?"_start":0),gc(e)||(t._recent=e),i||Rf(t,e),t._ts<0&&nl(t,t._tTime),t},Pf=function(t,e){return(Dn.ScrollTrigger||Qc("scrollTrigger",e))&&Dn.ScrollTrigger.create(e,t)},Lf=function(t,e,n,i,s){if(ru(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!tn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ef!==Cn.frame)return qi.push(t),t._lazy=[s,i],1},oM=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},gc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},aM=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&oM(t)&&!(!t._initted&&gc(t))||(t._ts<0||t._dp._ts<0)&&!gc(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=Oo(0,t._tDur,e),u=Ds(l,a),t._yoyo&&u&1&&(o=1-o),u!==Ds(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||tn||i||t._zTime===me||!e&&t._zTime){if(!t._initted&&Lf(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?me:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&_c(t,e,n,!0),t._onUpdate&&!n&&Pn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Pn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&tr(t,1),!n&&!tn&&(Pn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},lM=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Is=function(t,e,n,i){var s=t._repeat,o=He(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:He(o*(s+1)+t._rDelay*s):o,a>0&&!i&&nl(t,t._tTime=t._tDur*a),t.parent&&el(t),n||Ar(t.parent,t),t},id=function(t){return t instanceof hn?Ar(t):Is(t,t._dur)},cM={_start:0,endTime:To,totalDuration:To},Nn=function r(t,e,n){var i=t.labels,s=t._recent||cM,o=t.duration()>=kn?s.endTime(!1):t._dur,a,l,c;return Ge(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(en(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ao=function(t,e,n){var i=wi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=gn(l.vars.inherit)&&l.parent;o.immediateRender=gn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new De(e[0],o,e[s+1])},rr=function(t,e){return t||t===0?e(t):e},Oo=function(t,e,n){return n<t?t:n>e?e:n},Je=function(t,e){return!Ge(t)||!(e=JS.exec(t))?"":e[1]},uM=function(t,e,n){return rr(n,function(i){return Oo(t,e,i)})},vc=[].slice,Df=function(t,e){return t&&hi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&hi(t[0]))&&!t.nodeType&&t!==Jn},hM=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ge(i)&&!e||Df(i,1)?(s=n).push.apply(s,Hn(i)):n.push(i)})||n},Hn=function(t,e,n){return Se&&!e&&Se.selector?Se.selector(t):Ge(t)&&!n&&(pc||!Us())?vc.call((e||Jc).querySelectorAll(t),0):en(t)?hM(t,n):Df(t)?vc.call(t,0):t?[t]:[]},xc=function(t){return t=Hn(t)[0]||Eo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Hn(e,n.querySelectorAll?n:n===t?Eo("Invalid scope")||Jc.createElement("div"):t)}},If=function(t){return t.sort(function(){return .5-Math.random()})},Uf=function(t){if(be(t))return t;var e=hi(t)?t:{each:t},n=wr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return Ge(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,g){var _=(g||e).length,m=o[_],p,M,S,E,R,w,b,L,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,kn])[1],!y){for(b=-kn;b<(b=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],p=l?Math.min(y,_)*u-.5:i%y,M=y===kn?0:l?_*h/y-.5:i/y|0,b=0,L=kn,w=0;w<_;w++)S=w%y-p,E=M-(w/y|0),m[w]=R=c?Math.abs(c==="y"?E:S):mf(S*S+E*E),R>b&&(b=R),R<L&&(L=R);i==="random"&&If(m),m.max=b-L,m.min=L,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Je(e.amount||e.each)||0,n=n&&_<0?Wf(n):n}return _=(m[d]-m.min)/m.max||0,He(m.b+(n?n(_):_)*m.v)+m.u}},Sc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=He(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(wi(n)?0:Je(n))}},Nf=function(t,e){var n=en(t),i,s;return!n&&hi(t)&&(i=n=t.radius||kn,t.values?(t=Hn(t.values),(s=!wi(t[0]))&&(i*=i)):t=Sc(t.increment)),rr(e,n?be(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=kn,u=0,h=t.length,d,f;h--;)s?(d=t[h].x-a,f=t[h].y-l,d=d*d+f*f):d=Math.abs(t[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?t[u]:o,s||u===o||wi(o)?u:u+Je(o)}:Sc(t))},Of=function(t,e,n,i){return rr(en(t)?!e:n===!0?!!(n=0):!i,function(){return en(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},dM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},fM=function(t,e){return function(n){return t(parseFloat(n))+(e||Je(n))}},pM=function(t,e,n){return Bf(t,e,0,1,n)},Ff=function(t,e,n){return rr(n,function(i){return t[~~e(i)]})},mM=function r(t,e,n){var i=e-t;return en(t)?Ff(t,r(0,t.length),e):rr(n,function(s){return(i+(s-t)%i)%i+t})},_M=function r(t,e,n){var i=e-t,s=i*2;return en(t)?Ff(t,r(0,t.length-1),e):rr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},bo=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?xf:fc),n+=t.substr(e,i-e)+Of(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Bf=function(t,e,n,i,s){var o=e-t,a=i-n;return rr(s,function(l){return n+((l-t)/o*a||0)})},gM=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=Ge(t),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(en(t)&&!en(e)){for(u=[],h=t.length,d=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=e}else i||(t=Ur(en(t)?[]:{},t));if(!u){for(l in e)iu.call(a,t,l,"get",e[l]);s=function(g){return au(g,a)||(o?t.p:t)}}}return rr(n,s)},rd=function(t,e,n){var i=t.labels,s=kn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Pn=function(t,e,n){var i=t.vars,s=i[e],o=Se,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&qi.length&&Fa(),a&&(Se=a),u=l?s.apply(c,l):s.call(c),Se=o,u},Zs=function(t){return tr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!tn),t.progress()<1&&Pn(t,"onInterrupt"),t},_s,zf=[],kf=function(t){if(t)if(t=!t.name&&t.default||t,Zc()||t.headless){var e=t.name,n=be(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:To,render:au,add:iu,kill:IM,modifier:DM,rawVars:0},o={targetTest:0,get:0,getSetter:ou,aliases:{},register:0};if(Us(),t!==i){if(An[e])return;Gn(i,Gn(Ba(t,s),o)),Ur(i.prototype,Ur(s,Ba(t,o))),An[i.prop=e]=i,t.targetTest&&(Ea.push(i),tu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}yf(e,i),t.register&&t.register(Mn,i,xn)}else zf.push(t)},fe=255,Js={aqua:[0,fe,fe],lime:[0,fe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,fe],navy:[0,0,128],white:[fe,fe,fe],olive:[128,128,0],yellow:[fe,fe,0],orange:[fe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[fe,0,0],pink:[fe,192,203],cyan:[0,fe,fe],transparent:[fe,fe,fe,0]},Gl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*fe+.5|0},Hf=function(t,e,n){var i=t?wi(t)?[t>>16,t>>8&fe,t&fe]:0:Js.black,s,o,a,l,c,u,h,d,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Js[t])i=Js[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&fe,i&fe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&fe,t&fe]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(fc),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Gl(l+1/3,s,o),i[1]=Gl(l,s,o),i[2]=Gl(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(gf),n&&i.length<4&&(i[3]=1),i}else i=t.match(fc)||Js.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/fe,o=i[1]/fe,a=i[2]/fe,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Vf=function(t){var e=[],n=[],i=-1;return t.split(ji).forEach(function(s){var o=s.match(ms)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},sd=function(t,e,n){var i="",s=(t+i).match(ji),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(d){return(d=Hf(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Vf(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(ji,"1").split(ms),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(ji),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},ji=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Js)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),vM=/hsl[a]?\(/,Gf=function(t){var e=t.join(" "),n;if(ji.lastIndex=0,ji.test(e))return n=vM.test(e),t[1]=sd(t[1],n),t[0]=sd(t[0],n,Vf(t[1])),!0},Ao,Cn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,g=function _(m){var p=r()-i,M=m===!0,S,E,R,w;if((p>t||p<0)&&(n+=p-e),i+=p,R=i-n,S=R-o,(S>0||M)&&(w=++h.frame,d=R-h.time*1e3,h.time=R=R/1e3,o+=S+(S>=s?4:s-S),E=1),M||(l=c(_)),E)for(f=0;f<a.length;f++)a[f](R,d,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Sf&&(!pc&&Zc()&&(Jn=pc=window,Jc=Jn.document||{},Dn.gsap=Mn,(Jn.gsapVersions||(Jn.gsapVersions=[])).push(Mn.version),Mf(Oa||Jn.GreenSockGlobals||!Jn.gsap&&Jn||{}),zf.forEach(kf)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Ao=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ao=0,c=To},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,M){var S=p?function(E,R,w,b){m(E,R,w,b),h.remove(S)}:m;return h.remove(m),a[M?"unshift":"push"](S),Us(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h}(),Us=function(){return!Ao&&Cn.wake()},oe={},xM=/^[\d.\-M][\d.\-,\s]/,SM=/["']/g,MM=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(SM,"").trim():+c,i=l.substr(a+1).trim();return e},yM=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},EM=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[MM(e[1])]:yM(t).split(",").map(Af)):oe._CE&&xM.test(t)?oe._CE("",t):n},Wf=function(t){return function(e){return 1-t(1-e)}},Xf=function r(t,e){for(var n=t._first,i;n;)n instanceof hn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},wr=function(t,e){return t&&(be(t)?t:oe[t]||EM(t))||e},Vr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return vn(t,function(a){oe[a]=Dn[a]=s,oe[o=a.toLowerCase()]=n;for(var l in s)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=s[l]}),s},Yf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Wl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/dc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*ZS((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Yf(a);return s=dc/s,l.config=function(c,u){return r(t,c,u)},l},Xl=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Yf(n);return i.config=function(s){return r(t,s)},i};vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Vr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Vr("Elastic",Wl("in"),Wl("out"),Wl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Vr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Vr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Vr("Circ",function(r){return-(mf(1-r*r)-1)});Vr("Sine",function(r){return r===1?1:-KS(r*qS)+1});Vr("Back",Xl("in"),Xl("out"),Xl());oe.SteppedEase=oe.steps=Dn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-me;return function(a){return((i*Oo(0,o,a)|0)+s)*n}}};Ls.ease=oe["quad.out"];vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return eu+=r+","+r+"Params,"});var $f=function(t,e){this.id=jS++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Tf,this.set=e?e.getSetter:ou},wo=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Is(this,+e.duration,1,1),this.data=e.data,Se&&(this._ctx=Se,Se.data.push(this)),Ao||Cn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Is(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Us(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(nl(this,n),!s._dp||s.parent||Rf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ni(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===me||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),bf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+nd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+nd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ds(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-me?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?za(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-me?0:this._rts,this.totalTime(Oo(-Math.abs(this._delay),this._tDur,s),i!==!1),el(this),rM(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Us(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==me&&(this._tTime-=me)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ni(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(gn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?za(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=tM);var i=tn;return tn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),tn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,id(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,id(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Nn(this,n),gn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,gn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-me:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-me,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-me)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=be(n)?n:wf,a=function(){var c=i.then;i.then=null,be(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Zs(this)},r}();Gn(wo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-me,_prom:0,_ps:!1,_rts:1});var hn=function(r){pf(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=gn(n.sortChildren),Ee&&ni(n.parent||Ee,xi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Pf(xi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return ao(0,arguments,this),this},e.from=function(i,s,o){return ao(1,arguments,this),this},e.fromTo=function(i,s,o,a){return ao(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,oo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new De(i,s,Nn(this,o),1),this},e.call=function(i,s,o){return ni(this,De.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new De(i,o,Nn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,oo(o).immediateRender=gn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,oo(a).immediateRender=gn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:He(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,M,S,E,R,w,b;if(this!==Ee&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,E=this._start,S=this._ts,p=!S,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=He(u%m),u===l?(_=this._repeat,d=c):(_=~~(u/m),_&&_===u/m&&(d=c,_--),d>c&&(d=c)),R=Ds(this._tTime,m),!a&&this._tTime&&R!==_&&this._tTime-R*m-this._dur<=0&&(R=_),w&&_&1&&(d=c-d,b=1),_!==R&&!this._lock){var L=w&&R&1,y=L===(w&&_&1);if(_<R&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(b?0:He(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Pn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Xf(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=lM(this,He(a),He(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!_&&(Pn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-me);break}}f=g}else{f=this._last;for(var v=i<0?i:d;f;){if(g=f._prev,(f._act||v<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,s,o||tn&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=v?-me:me);break}}f=g}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-me)._zTime=d>=a?1:-1,this._ts))return this._start=E,el(this),this.render(i,s,o);this._onUpdate&&!s&&Pn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(E===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&tr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Pn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(wi(s)||(s=Nn(this,s,i)),!(i instanceof wo)){if(en(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ge(i))return this.addLabel(i,s);if(be(i))i=De.delayedCall(0,i);else return this}return this!==i?ni(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-kn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof De?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ge(i)?this.removeLabel(i):be(i)?this.killTweensOf(i):(tl(this,i),i===this._recent&&(this._recent=this._last),Ar(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=He(Cn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Nn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=De.delayedCall(0,s||To,o);return a.data="isPause",this._hasPause=1,ni(this,a,Nn(this,i))},e.removePause=function(i){var s=this._first;for(i=Nn(this,i);s;)s._start===i&&s.data==="isPause"&&tr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Hi!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Hn(i),l=this._first,c=wi(s),u;l;)l instanceof De?eM(l._targets,a)&&(c?(!Hi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Nn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=De.to(o,Gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||me,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Is(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Gn({startAt:{time:Nn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),rd(this,Nn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),rd(this,Nn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+me)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ar(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ar(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=kn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ni(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Is(o,o===Ee&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ee._ts&&(bf(Ee,za(i,Ee)),Ef=Cn.frame),Cn.frame>=td){td+=Ln.autoSleep||120;var s=Ee._first;if((!s||!s._ts)&&Ln.autoSleep&&Cn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Cn.sleep()}}},t}(wo);Gn(hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var TM=function(t,e,n,i,s,o,a){var l=new xn(this._pt,t,e,0,1,Qf,null,s),c=0,u=0,h,d,f,g,_,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=bo(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),d=n.match(Hl)||[];h=Hl.exec(i);)g=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ms(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=Hl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(vf.test(i)||p)&&(l.e=0),this._pt=l,l},iu=function(t,e,n,i,s,o,a,l,c,u){be(i)&&(i=i(s||0,t,o));var h=t[e],d=n!=="get"?n:be(h)?c?t[e.indexOf("set")||!be(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,f=be(h)?c?RM:Zf:su,g;if(Ge(i)&&(~i.indexOf("random(")&&(i=bo(i)),i.charAt(1)==="="&&(g=Ms(d,i)+(Je(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Mc)return!isNaN(d*i)&&i!==""?(g=new xn(this._pt,t,e,+d||0,i-(d||0),typeof h=="boolean"?LM:Jf,0,f),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&Qc(e,i),TM.call(this,t,e,d,i,f,l||Ln.stringFilter,c))},bM=function(t,e,n,i,s){if(be(t)&&(t=lo(t,s,e,n,i)),!hi(t)||t.style&&t.nodeType||en(t)||_f(t))return Ge(t)?lo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=lo(t[a],s,e,n,i);return o},qf=function(t,e,n,i,s,o){var a,l,c,u;if(An[t]&&(a=new An[t]).init(s,a.rawVars?e[t]:bM(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new xn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==_s))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Hi,Mc,ru=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,S=t._overwrite==="auto"&&!jc,E=t.timeline,R,w,b,L,y,v,U,N,D,$,q,K,j;if(E&&(!d||!s)&&(s="none"),t._ease=wr(s,Ls.ease),t._yEase=h?Wf(wr(h===!0?s:h,Ls.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!E&&!!i.runBackwards,!E||d&&!i.stagger){if(N=m[0]?br(m[0]).harness:0,K=N&&i[N.prop],R=Ba(i,tu),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&g?ya:QS),_._lazy=0),o){if(tr(t._startAt=De.set(m,Gn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&gn(l),startAt:null,delay:0,onUpdate:c&&function(){return Pn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(tn||!a&&!f)&&t._startAt.revert(ya),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),b=Gn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&gn(l),immediateRender:a,stagger:0,parent:p},R),K&&(b[N.prop]=K),tr(t._startAt=De.set(m,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(tn?t._startAt.revert(ya):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,me,me);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&gn(l)||l&&!g,w=0;w<m.length;w++){if(y=m[w],U=y._gsap||nu(m)[w]._gsap,t._ptLookup[w]=$={},mc[U.id]&&qi.length&&Fa(),q=M===m?w:M.indexOf(y),N&&(D=new N).init(y,K||R,t,q,M)!==!1&&(t._pt=L=new xn(t._pt,y,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(z){$[z]=L}),D.priority&&(v=1)),!N||K)for(b in R)An[b]&&(D=qf(b,R,t,q,y,M))?D.priority&&(v=1):$[b]=L=iu.call(t,y,b,"get",R[b],q,M,0,i.stringFilter);t._op&&t._op[w]&&t.kill(y,t._op[w]),S&&t._pt&&(Hi=t,Ee.killTweensOf(y,$,t.globalTime(e)),j=!t.parent,Hi=0),t._pt&&l&&(mc[U.id]=1)}v&&tp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!j,d&&e<=0&&E.render(kn,!0,!0)},AM=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(u=d[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Mc=1,t.vars[e]="+=0",ru(t,a),Mc=0,l?Eo(e+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=we(n)+Je(h.e)),h.b&&(h.b=u.s+Je(h.b))},wM=function(t,e){var n=t[0]?br(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Ur({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},CM=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(en(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},lo=function(t,e,n,i,s){return be(t)?t.call(e,n,i,s):Ge(t)&&~t.indexOf("random(")?bo(t):t},jf=eu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Kf={};vn(jf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Kf[r]=1});var De=function(r){pf(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:oo(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=i.parent||Ee,S=(en(n)||_f(n)?wi(n[0]):"length"in i)?[n]:Hn(n),E,R,w,b,L,y,v,U;if(a._targets=S.length?nu(S):Eo("GSAP target "+n+" not found. https://gsap.com",!Ln.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||la(c)||la(u)){if(i=a.vars,E=a.timeline=new hn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:S}),E.kill(),E.parent=E._dp=xi(a),E._start=0,d||la(c)||la(u)){if(b=S.length,v=d&&Uf(d),hi(d))for(L in d)~jf.indexOf(L)&&(U||(U={}),U[L]=d[L]);for(R=0;R<b;R++)w=Ba(i,Kf),w.stagger=0,p&&(w.yoyoEase=p),U&&Ur(w,U),y=S[R],w.duration=+lo(c,xi(a),R,y,S),w.delay=(+lo(u,xi(a),R,y,S)||0)-a._delay,!d&&b===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),E.to(y,w,v?v(R,y,S):0),E._ease=oe.none;E.duration()?c=u=0:a.timeline=0}else if(g){oo(Gn(E.vars.defaults,{ease:"none"})),E._ease=wr(g.ease||i.ease||"none");var N=0,D,$,q;if(en(g))g.forEach(function(K){return E.to(S,K,">")}),E.duration();else{w={};for(L in g)L==="ease"||L==="easeEach"||CM(L,g[L],w,g.easeEach);for(L in w)for(D=w[L].sort(function(K,j){return K.t-j.t}),N=0,R=0;R<D.length;R++)$=D[R],q={ease:$.e,duration:($.t-(R?D[R-1].t:0))/100*c},q[L]=$.v,E.to(S,q,N),N+=q.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return f===!0&&!jc&&(Hi=xi(a),Ee.killTweensOf(S),Hi=0),ni(M,xi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===He(M._time)&&gn(h)&&sM(xi(a))&&M.data!=="nested")&&(a._tTime=-me,a.render(Math.max(0,-u)||0)),m&&Pf(xi(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-me&&!u?l:i<me?0:i,d,f,g,_,m,p,M,S,E;if(!c)aM(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(d=He(h%_),h===l?(g=this._repeat,d=c):(g=~~(h/_),g&&g===He(h/_)&&(d=c,g--),d>c&&(d=c)),p=this._yoyo&&g&1,p&&(E=this._yEase,d=c-d),m=Ds(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(S&&this._yEase&&Xf(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(He(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Lf(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(E||this._ease)(d/c),this._from&&(this.ratio=M=1-M),d&&!a&&!s&&!g&&(Pn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&_c(this,i,s,o),Pn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Pn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&_c(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&tr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Pn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Ao||Cn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ru(this,c),u=this._ease(c/this._dur),AM(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(nl(this,0),this.parent||Cf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Zs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Hi&&Hi.vars.overwrite!==!0)._first||Zs(this),this.parent&&o!==this.timeline.totalDuration()&&Is(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Hn(i):a,c=this._ptLookup,u=this._pt,h,d,f,g,_,m,p;if((!s||s==="all")&&iM(a,l))return s==="all"&&(this._pt=0),Zs(this);for(h=this._op=this._op||[],s!=="all"&&(Ge(s)&&(_={},vn(s,function(M){return _[M]=1}),s=_),s=wM(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(h[p]=s,g=d,f={}):(f=h[p]=h[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&tl(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&Zs(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ao(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return ao(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ee.killTweensOf(i,s,o)},t}(wo);Gn(De.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});vn("staggerTo,staggerFrom,staggerFromTo",function(r){De[r]=function(){var t=new hn,e=vc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var su=function(t,e,n){return t[e]=n},Zf=function(t,e,n){return t[e](n)},RM=function(t,e,n,i){return t[e](i.fp,n)},PM=function(t,e,n){return t.setAttribute(e,n)},ou=function(t,e){return be(t[e])?Zf:Kc(t[e])&&t.setAttribute?PM:su},Jf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},LM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Qf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},au=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},DM=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},IM=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?tl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},UM=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},tp=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},xn=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Jf,this.d=l||this,this.set=c||su,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=UM,this.m=n,this.mt=s,this.tween=i},r}();vn(eu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return tu[r]=1});Dn.TweenMax=Dn.TweenLite=De;Dn.TimelineLite=Dn.TimelineMax=hn;Ee=new hn({sortChildren:!1,defaults:Ls,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ln.stringFilter=Gf;var Cr=[],Ta={},NM=[],od=0,OM=0,Yl=function(t){return(Ta[t]||NM).map(function(e){return e()})},yc=function(){var t=Date.now(),e=[];t-od>2&&(Yl("matchMediaInit"),Cr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Jn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Yl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),od=t,Yl("matchMedia"))},ep=function(){function r(e,n){this.selector=n&&xc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=OM++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){be(n)&&(s=i,i=n,n=be);var o=this,a=function(){var c=Se,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=xc(s)),Se=o,h=i.apply(o,arguments),be(h)&&o._r.push(h),Se=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===be?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Se;Se=null,n(this),Se=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof De&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof hn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof De)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Cr.length;o--;)Cr[o].id===this.id&&Cr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),FM=function(){function r(e){this.contexts=[],this.scope=e,Se&&Se.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){hi(n)||(n={matches:n});var o=new ep(0,s||this.scope),a=o.conditions={},l,c,u;Se&&!o.selector&&(o.selector=Se.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Jn.matchMedia(n[c]),l&&(Cr.indexOf(o)<0&&Cr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(yc):l.addEventListener("change",yc)));return u&&i(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ka={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return kf(i)})},timeline:function(t){return new hn(t)},getTweensOf:function(t,e){return Ee.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ge(t)&&(t=Hn(t)[0]);var s=br(t||{}).get,o=n?wf:Af;return n==="native"&&(n=""),t&&(e?o((An[e]&&An[e].get||s)(t,e,n,i)):function(a,l,c){return o((An[a]&&An[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Hn(t),t.length>1){var i=t.map(function(u){return Mn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var o=An[e],a=br(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;_s._pt=0,h.init(t,n?u+n:u,_s,0,[t]),h.render(1,h),_s._pt&&au(1,_s)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Mn.to(t,Ur((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Ee.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=wr(t.ease,Ls.ease)),ed(Ls,t||{})},config:function(t){return ed(Ln,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!An[a]&&!Dn[a]&&Eo(e+" effect requires "+a+" plugin.")}),Vl[e]=function(a,l,c){return n(Hn(a),Gn(l||{},s),c)},o&&(hn.prototype[e]=function(a,l,c){return this.add(Vl[e](a,hi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=wr(e)},parseEase:function(t,e){return arguments.length?wr(t,e):oe},getById:function(t){return Ee.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new hn(t),i,s;for(n.smoothChildTiming=gn(t.smoothChildTiming),Ee.remove(n),n._dp=0,n._time=n._tTime=Ee._time,i=Ee._first;i;)s=i._next,(e||!(!i._dur&&i instanceof De&&i.vars.onComplete===i._targets[0]))&&ni(n,i,i._start-i._delay),i=s;return ni(Ee,n,0),n},context:function(t,e){return t?new ep(t,e):Se},matchMedia:function(t){return new FM(t)},matchMediaRefresh:function(){return Cr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||yc()},addEventListener:function(t,e){var n=Ta[t]||(Ta[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ta[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:mM,wrapYoyo:_M,distribute:Uf,random:Of,snap:Nf,normalize:pM,getUnit:Je,clamp:uM,splitColor:Hf,toArray:Hn,selector:xc,mapRange:Bf,pipe:dM,unitize:fM,interpolate:gM,shuffle:If},install:Mf,effects:Vl,ticker:Cn,updateRoot:hn.updateRoot,plugins:An,globalTimeline:Ee,core:{PropTween:xn,globals:yf,Tween:De,Timeline:hn,Animation:wo,getCache:br,_removeLinkedListItem:tl,reverting:function(){return tn},context:function(t){return t&&Se&&(Se.data.push(t),t._ctx=Se),Se},suppressOverwrites:function(t){return jc=t}}};vn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ka[r]=De[r]});Cn.add(hn.updateRoot);_s=ka.to({},{duration:0});var BM=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},zM=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=BM(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},$l=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ge(s)&&(l={},vn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}zM(a,s)}}}},Mn=ka.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)tn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},$l("roundProps",Sc),$l("modifiers"),$l("snap",Nf))||ka;De.version=hn.version=Mn.version="3.12.5";Sf=1;Zc()&&Us();oe.Power0;oe.Power1;oe.Power2;oe.Power3;oe.Power4;oe.Linear;oe.Quad;oe.Cubic;oe.Quart;oe.Quint;oe.Strong;oe.Elastic;oe.Back;oe.SteppedEase;oe.Bounce;oe.Sine;oe.Expo;oe.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ad,Vi,ys,lu,yr,ld,cu,kM=function(){return typeof window<"u"},Ci={},mr=180/Math.PI,Es=Math.PI/180,ls=Math.atan2,cd=1e8,uu=/([A-Z])/g,HM=/(left|right|width|margin|padding|x)/i,VM=/[\s,\(]\S/,si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ec=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},GM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},WM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},XM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},np=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},ip=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},YM=function(t,e,n){return t.style[e]=n},$M=function(t,e,n){return t.style.setProperty(e,n)},qM=function(t,e,n){return t._gsap[e]=n},jM=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},KM=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},ZM=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Te="transform",Sn=Te+"Origin",JM=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Ci&&s){if(this.tfm=this.tfm||{},t!=="transform")t=si[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Si(i,a)}):this.tfm[t]=o.x?o[t]:Si(i,t),t===Sn&&(this.tfm.zOrigin=o.zOrigin);else return si.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Te)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Sn,e,"")),t=Te}(s||e)&&this.props.push(t,e,s[t])},rp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},QM=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(uu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=cu(),(!s||!s.isStart)&&!n[Te]&&(rp(n),i.zOrigin&&n[Sn]&&(n[Sn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},sp=function(t,e){var n={target:t,props:[],revert:QM,save:JM};return t._gsap||Mn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},op,Tc=function(t,e){var n=Vi.createElementNS?Vi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Vi.createElement(t);return n&&n.style?n:Vi.createElement(t)},ci=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(uu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Ns(e)||e,1)||""},ud="O,Moz,ms,Ms,Webkit".split(","),Ns=function(t,e,n){var i=e||yr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(ud[o]+t in s););return o<0?null:(o===3?"ms":o>=0?ud[o]:"")+t},bc=function(){kM()&&window.document&&(ad=window,Vi=ad.document,ys=Vi.documentElement,yr=Tc("div")||{style:{}},Tc("div"),Te=Ns(Te),Sn=Te+"Origin",yr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",op=!!Ns("perspective"),cu=Mn.core.reverting,lu=1)},ql=function r(t){var e=Tc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(ys.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ys.removeChild(e),this.style.cssText=s,o},hd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},ap=function(t){var e;try{e=t.getBBox()}catch{e=ql.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===ql||(e=ql.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+hd(t,["x","cx","x1"])||0,y:+hd(t,["y","cy","y1"])||0,width:0,height:0}:e},lp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ap(t))},Nr=function(t,e){if(e){var n=t.style,i;e in Ci&&e!==Sn&&(e=Te),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(uu,"-$1").toLowerCase())):n.removeAttribute(e)}},Gi=function(t,e,n,i,s,o){var a=new xn(t._pt,e,n,0,1,o?ip:np);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},dd={deg:1,rad:1,turn:1},ty={grid:1,flex:1},er=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=yr.style,l=HM.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,_,m,p;if(i===o||!s||dd[i]||dd[o])return s;if(o!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&lp(t),(f||o==="%")&&(Ci[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[u],we(f?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(d?o:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Vi||!_.appendChild)&&(_=Vi.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Cn.time&&!m.uncache)return we(s/m.width*h);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=h+i,g=t[u],M?t.style[e]=M:Nr(t,e)}else(f||o==="%")&&!ty[ci(_,"display")]&&(a.position=ci(t,"position")),_===t&&(a.position="static"),_.appendChild(yr),g=yr[u],_.removeChild(yr),a.position="absolute";return l&&f&&(m=br(_),m.time=Cn.time,m.width=_[u]),we(d?g*s/h:g&&s?h/g*s:0)},Si=function(t,e,n,i){var s;return lu||bc(),e in si&&e!=="transform"&&(e=si[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ci[e]&&e!=="transform"?(s=Ro(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Va(ci(t,Sn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ha[e]&&Ha[e](t,e,n)||ci(t,e)||Tf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?er(t,e,s,n)+n:s},ey=function(t,e,n,i){if(!n||n==="none"){var s=Ns(e,t,1),o=s&&ci(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=ci(t,"borderTopColor"))}var a=new xn(this._pt,t.style,e,0,1,Qf),l=0,c=0,u,h,d,f,g,_,m,p,M,S,E,R;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=ci(t,e)||i,_?t.style[e]=_:Nr(t,e)),u=[n,i],Gf(u),n=u[0],i=u[1],d=n.match(ms)||[],R=i.match(ms)||[],R.length){for(;h=ms.exec(i);)m=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,E=_.substr((f+"").length),m.charAt(1)==="="&&(m=Ms(f,m)+E),p=parseFloat(m),S=m.substr((p+"").length),l=ms.lastIndex-S.length,S||(S=S||Ln.units[e]||E,l===i.length&&(i+=S,a.e+=S)),E!==S&&(f=er(t,e,_,S)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?ip:np;return vf.test(i)&&(a.e=0),this._pt=a,a},fd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ny=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=fd[n]||n,e[1]=fd[i]||i,e.join(" ")},iy=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ci[a]&&(l=1,a=a==="transformOrigin"?Sn:Te),Nr(n,a);l&&(Nr(n,Te),o&&(o.svg&&n.removeAttribute("transform"),Ro(n,1),o.uncache=1,rp(i)))}},Ha={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new xn(t._pt,e,n,0,0,iy);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Co=[1,0,0,1,0,0],cp={},up=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},pd=function(t){var e=ci(t,Te);return up(e)?Co:e.substr(7).match(gf).map(we)},hu=function(t,e){var n=t._gsap||br(t),i=t.style,s=pd(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Co:s):(s===Co&&!t.offsetParent&&t!==ys&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,ys.appendChild(t)),s=pd(t),l?i.display=l:Nr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ys.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ac=function(t,e,n,i,s,o){var a=t._gsap,l=s||hu(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],S=e.split(" "),E=parseFloat(S[0])||0,R=parseFloat(S[1])||0,w,b,L,y;n?l!==Co&&(b=f*m-g*_)&&(L=E*(m/b)+R*(-_/b)+(_*M-m*p)/b,y=E*(-g/b)+R*(f/b)-(f*M-g*p)/b,E=L,R=y):(w=ap(t),E=w.x+(~S[0].indexOf("%")?E/100*w.width:E),R=w.y+(~(S[1]||S[0]).indexOf("%")?R/100*w.height:R)),i||i!==!1&&a.smooth?(p=E-c,M=R-u,a.xOffset=h+(p*f+M*_)-p,a.yOffset=d+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=E,a.yOrigin=R,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Sn]="0px 0px",o&&(Gi(o,a,"xOrigin",c,E),Gi(o,a,"yOrigin",u,R),Gi(o,a,"xOffset",h,a.xOffset),Gi(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",E+" "+R)},Ro=function(t,e){var n=t._gsap||new $f(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ci(t,Sn)||"0",u,h,d,f,g,_,m,p,M,S,E,R,w,b,L,y,v,U,N,D,$,q,K,j,z,J,C,ht,at,Bt,Y,tt;return u=h=d=_=m=p=M=S=E=0,f=g=1,n.svg=!!(t.getCTM&&lp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Te]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Te]!=="none"?l[Te]:"")),i.scale=i.rotate=i.translate="none"),b=hu(t,n.svg),n.svg&&(n.uncache?(z=t.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",j=""):j=!e&&t.getAttribute("data-svg-origin"),Ac(t,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,b)),R=n.xOrigin||0,w=n.yOrigin||0,b!==Co&&(U=b[0],N=b[1],D=b[2],$=b[3],u=q=b[4],h=K=b[5],b.length===6?(f=Math.sqrt(U*U+N*N),g=Math.sqrt($*$+D*D),_=U||N?ls(N,U)*mr:0,M=D||$?ls(D,$)*mr+_:0,M&&(g*=Math.abs(Math.cos(M*Es))),n.svg&&(u-=R-(R*U+w*D),h-=w-(R*N+w*$))):(tt=b[6],Bt=b[7],C=b[8],ht=b[9],at=b[10],Y=b[11],u=b[12],h=b[13],d=b[14],L=ls(tt,at),m=L*mr,L&&(y=Math.cos(-L),v=Math.sin(-L),j=q*y+C*v,z=K*y+ht*v,J=tt*y+at*v,C=q*-v+C*y,ht=K*-v+ht*y,at=tt*-v+at*y,Y=Bt*-v+Y*y,q=j,K=z,tt=J),L=ls(-D,at),p=L*mr,L&&(y=Math.cos(-L),v=Math.sin(-L),j=U*y-C*v,z=N*y-ht*v,J=D*y-at*v,Y=$*v+Y*y,U=j,N=z,D=J),L=ls(N,U),_=L*mr,L&&(y=Math.cos(L),v=Math.sin(L),j=U*y+N*v,z=q*y+K*v,N=N*y-U*v,K=K*y-q*v,U=j,q=z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=we(Math.sqrt(U*U+N*N+D*D)),g=we(Math.sqrt(K*K+tt*tt)),L=ls(q,K),M=Math.abs(L)>2e-4?L*mr:0,E=Y?1/(Y<0?-Y:Y):0),n.svg&&(j=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!up(ci(t,Te)),j&&t.setAttribute("transform",j))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=we(f),n.scaleY=we(g),n.rotation=we(_)+a,n.rotationX=we(m)+a,n.rotationY=we(p)+a,n.skewX=M+a,n.skewY=S+a,n.transformPerspective=E+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Sn]=Va(c)),n.xOffset=n.yOffset=0,n.force3D=Ln.force3D,n.renderTransform=n.svg?sy:op?hp:ry,n.uncache=0,n},Va=function(t){return(t=t.split(" "))[0]+" "+t[1]},jl=function(t,e,n){var i=Je(e);return we(parseFloat(e)+parseFloat(er(t,"x",n+"px",i)))+i},ry=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,hp(t,e)},dr="0deg",$s="0px",fr=") ",hp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,S=n.zOrigin,E="",R=p==="auto"&&t&&t!==1||p===!0;if(S&&(h!==dr||u!==dr)){var w=parseFloat(u)*Es,b=Math.sin(w),L=Math.cos(w),y;w=parseFloat(h)*Es,y=Math.cos(w),o=jl(M,o,b*y*-S),a=jl(M,a,-Math.sin(w)*-S),l=jl(M,l,L*y*-S+S)}m!==$s&&(E+="perspective("+m+fr),(i||s)&&(E+="translate("+i+"%, "+s+"%) "),(R||o!==$s||a!==$s||l!==$s)&&(E+=l!==$s||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+fr),c!==dr&&(E+="rotate("+c+fr),u!==dr&&(E+="rotateY("+u+fr),h!==dr&&(E+="rotateX("+h+fr),(d!==dr||f!==dr)&&(E+="skew("+d+", "+f+fr),(g!==1||_!==1)&&(E+="scale("+g+", "+_+fr),M.style[Te]=E||"translate(0, 0)"},sy=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,S=parseFloat(o),E=parseFloat(a),R,w,b,L,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Es,c*=Es,R=Math.cos(l)*h,w=Math.sin(l)*h,b=Math.sin(l-c)*-d,L=Math.cos(l-c)*d,c&&(u*=Es,y=Math.tan(c-u),y=Math.sqrt(1+y*y),b*=y,L*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),R*=y,w*=y)),R=we(R),w=we(w),b=we(b),L=we(L)):(R=h,L=d,w=b=0),(S&&!~(o+"").indexOf("px")||E&&!~(a+"").indexOf("px"))&&(S=er(f,"x",o,"px"),E=er(f,"y",a,"px")),(g||_||m||p)&&(S=we(S+g-(g*R+_*b)+m),E=we(E+_-(g*w+_*L)+p)),(i||s)&&(y=f.getBBox(),S=we(S+i/100*y.width),E=we(E+s/100*y.height)),y="matrix("+R+","+w+","+b+","+L+","+S+","+E+")",f.setAttribute("transform",y),M&&(f.style[Te]=y)},oy=function(t,e,n,i,s){var o=360,a=Ge(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?mr:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*cd)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*cd)%o-~~(c/o)*o)),t._pt=d=new xn(t._pt,e,n,i,c,GM),d.e=u,d.u="deg",t._props.push(n),d},md=function(t,e){for(var n in e)t[n]=e[n];return t},ay=function(t,e,n){var i=md({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Te]=e,a=Ro(n,1),Nr(n,Te),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Te],o[Te]=e,a=Ro(n,1),o[Te]=c);for(l in Ci)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=Je(c),g=Je(u),h=f!==g?er(n,l,c,g):parseFloat(c),d=parseFloat(u),t._pt=new xn(t._pt,a,l,h,d-h,Ec),t._pt.u=g||0,t._props.push(l));md(a,i)};vn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Ha[t>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(g){return Si(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,h)}});var dp={name:"css",register:bc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,d,f,g,_,m,p,M,S,E,R,w,b,L;lu||bc(),this.styles=this.styles||sp(t),L=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(An[_]&&qf(_,e,n,i,t,s)))){if(f=typeof u,g=Ha[_],f==="function"&&(u=u.call(n,i,t,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=bo(u)),g)g(this,t,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",ji.lastIndex=0,ji.test(c)||(m=Je(c),p=Je(u)),p?m!==p&&(c=er(t,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),L.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Ge(c)&&~c.indexOf("random(")&&(c=bo(c)),Je(c+"")||c==="auto"||(c+=Ln.units[_]||Je(Si(t,_))||""),(c+"").charAt(1)==="="&&(c=Si(t,_))):c=Si(t,_),d=parseFloat(c),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in si&&(_==="autoAlpha"&&(d===1&&Si(t,"visibility")==="hidden"&&h&&(d=0),L.push("visibility",0,a.visibility),Gi(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=si[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in Ci,S){if(this.styles.save(_),E||(R=t._gsap,R.renderTransform&&!e.parseTransform||Ro(t,e.parseTransform),w=e.smoothOrigin!==!1&&R.smooth,E=this._pt=new xn(this._pt,a,Te,0,1,R.renderTransform,R,0,-1),E.dep=1),_==="scale")this._pt=new xn(this._pt,R,"scaleY",R.scaleY,(M?Ms(R.scaleY,M+h):h)-R.scaleY||0,Ec),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Sn,0,a[Sn]),u=ny(u),R.svg?Ac(t,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==R.zOrigin&&Gi(this,R,"zOrigin",R.zOrigin,p),Gi(this,a,_,Va(c),Va(u)));continue}else if(_==="svgOrigin"){Ac(t,u,1,w,0,this);continue}else if(_ in cp){oy(this,R,_,d,M?Ms(d,M+u):u);continue}else if(_==="smoothOrigin"){Gi(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){ay(this,u,t);continue}}else _ in a||(_=Ns(_)||_);if(S||(h||h===0)&&(d||d===0)&&!VM.test(u)&&_ in a)m=(c+"").substr((d+"").length),h||(h=0),p=Je(u)||(_ in Ln.units?Ln.units[_]:m),m!==p&&(d=er(t,_,c,p)),this._pt=new xn(this._pt,S?R:a,_,d,(M?Ms(d,M+h):h)-d,!S&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?XM:Ec),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=WM);else if(_ in a)ey.call(this,t,_,c,M?M+u:u);else if(_ in t)this.add(t,_,c||t[_],M?M+u:u,i,s);else if(_!=="parseTransform"){Qc(_,u);continue}S||(_ in a?L.push(_,0,a[_]):L.push(_,1,c||t[_])),o.push(_)}}b&&tp(this)},render:function(t,e){if(e.tween._time||!cu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Si,aliases:si,getSetter:function(t,e,n){var i=si[e];return i&&i.indexOf(",")<0&&(e=i),e in Ci&&e!==Sn&&(t._gsap.x||Si(t,"x"))?n&&ld===n?e==="scale"?jM:qM:(ld=n||{})&&(e==="scale"?KM:ZM):t.style&&!Kc(t.style[e])?YM:~e.indexOf("-")?$M:ou(t,e)},core:{_removeProperty:Nr,_getMatrix:hu}};Mn.utils.checkPrefix=Ns;Mn.core.getStyleSaver=sp;(function(r,t,e,n){var i=vn(r+","+t+","+e,function(s){Ci[s]=1});vn(t,function(s){Ln.units[s]="deg",cp[s]=1}),si[i[13]]=r+","+t,vn(n,function(s){var o=s.split(":");si[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ln.units[r]="px"});Mn.registerPlugin(dp);var du=Mn.registerPlugin(dp)||Mn;du.core.Tween;function _d(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function ly(r,t,e){return t&&_d(r.prototype,t),e&&_d(r,e),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var We,ba,Rn,Wi,Xi,Ts,fp,_r,co,pp,Ti,$n,mp,_p=function(){return We||typeof window<"u"&&(We=window.gsap)&&We.registerPlugin&&We},gp=1,gs=[],ne=[],ui=[],uo=Date.now,wc=function(t,e){return e},cy=function(){var t=co.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ne),i.push.apply(i,ui),ne=n,ui=i,wc=function(o,a){return e[o](a)}},Ki=function(t,e){return~ui.indexOf(t)&&ui[ui.indexOf(t)+1][e]},ho=function(t){return!!~pp.indexOf(t)},on=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},rn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ca="scrollLeft",ua="scrollTop",Cc=function(){return Ti&&Ti.isPressed||ne.cache++},Ga=function(t,e){var n=function i(s){if(s||s===0){gp&&(Rn.history.scrollRestoration="manual");var o=Ti&&Ti.isPressed;s=i.v=Math.round(s)||(Ti&&Ti.iOS?1:0),t(s),i.cacheID=ne.cache,o&&wc("ss",s)}else(e||ne.cache!==i.cacheID||wc("ref"))&&(i.cacheID=ne.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},dn={s:ca,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ga(function(r){return arguments.length?Rn.scrollTo(r,Ue.sc()):Rn.pageXOffset||Wi[ca]||Xi[ca]||Ts[ca]||0})},Ue={s:ua,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:dn,sc:Ga(function(r){return arguments.length?Rn.scrollTo(dn.sc(),r):Rn.pageYOffset||Wi[ua]||Xi[ua]||Ts[ua]||0})},mn=function(t,e){return(e&&e._ctx&&e._ctx.selector||We.utils.toArray)(t)[0]||(typeof t=="string"&&We.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},nr=function(t,e){var n=e.s,i=e.sc;ho(t)&&(t=Wi.scrollingElement||Xi);var s=ne.indexOf(t),o=i===Ue.sc?1:2;!~s&&(s=ne.push(t)-1),ne[s+o]||on(t,"scroll",Cc);var a=ne[s+o],l=a||(ne[s+o]=Ga(Ki(t,n),!0)||(ho(t)?i:Ga(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=We.getProperty(t,"scrollBehavior")==="smooth"),l},Rc=function(t,e,n){var i=t,s=t,o=uo(),a=o,l=e||50,c=Math.max(500,l*3),u=function(g,_){var m=uo();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,m=s,p=uo();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:d}},qs=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},gd=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},vp=function(){co=We.core.globals().ScrollTrigger,co&&co.core&&cy()},xp=function(t){return We=t||_p(),!ba&&We&&typeof document<"u"&&document.body&&(Rn=window,Wi=document,Xi=Wi.documentElement,Ts=Wi.body,pp=[Rn,Wi,Xi,Ts],We.utils.clamp,mp=We.core.context||function(){},_r="onpointerenter"in Ts?"pointer":"mouse",fp=Ce.isTouch=Rn.matchMedia&&Rn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Rn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,$n=Ce.eventTypes=("ontouchstart"in Xi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Xi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return gp=0},500),vp(),ba=1),ba};dn.op=Ue;ne.cache=0;var Ce=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){ba||xp(We)||console.warn("Please gsap.registerPlugin(Observer)"),co||vp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,S=n.onPress,E=n.onRelease,R=n.onRight,w=n.onLeft,b=n.onUp,L=n.onDown,y=n.onChangeX,v=n.onChangeY,U=n.onChange,N=n.onToggleX,D=n.onToggleY,$=n.onHover,q=n.onHoverEnd,K=n.onMove,j=n.ignoreCheck,z=n.isNormalizer,J=n.onGestureStart,C=n.onGestureEnd,ht=n.onWheel,at=n.onEnable,Bt=n.onDisable,Y=n.onClick,tt=n.scrollSpeed,ct=n.capture,nt=n.allowClicks,Dt=n.lockAxis,Pt=n.onLockAxis;this.target=a=mn(a)||Xi,this.vars=n,f&&(f=We.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,tt=tt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Rn.getComputedStyle(Ts).lineHeight)||22);var F,Ht,Mt,Tt,_t,At,Ct,B=this,$t=0,P=0,T=n.passive||!u,G=nr(a,dn),Z=nr(a,Ue),et=G(),it=Z(),vt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&$n[0]==="pointerdown",dt=ho(a),rt=a.ownerDocument||Wi,Ut=[0,0,0],st=[0,0,0],Et=0,qt=function(){return Et=uo()},xt=function(pt,Kt){return(B.event=pt)&&f&&~f.indexOf(pt.target)||Kt&&vt&&pt.pointerType!=="touch"||j&&j(pt,Kt)},St=function(){B._vx.reset(),B._vy.reset(),Ht.pause(),h&&h(B)},Ft=function(){var pt=B.deltaX=gd(Ut),Kt=B.deltaY=gd(st),ut=Math.abs(pt)>=i,Ot=Math.abs(Kt)>=i;U&&(ut||Ot)&&U(B,pt,Kt,Ut,st),ut&&(R&&B.deltaX>0&&R(B),w&&B.deltaX<0&&w(B),y&&y(B),N&&B.deltaX<0!=$t<0&&N(B),$t=B.deltaX,Ut[0]=Ut[1]=Ut[2]=0),Ot&&(L&&B.deltaY>0&&L(B),b&&B.deltaY<0&&b(B),v&&v(B),D&&B.deltaY<0!=P<0&&D(B),P=B.deltaY,st[0]=st[1]=st[2]=0),(Tt||Mt)&&(K&&K(B),Mt&&(M(B),Mt=!1),Tt=!1),At&&!(At=!1)&&Pt&&Pt(B),_t&&(ht(B),_t=!1),F=0},Xt=function(pt,Kt,ut){Ut[ut]+=pt,st[ut]+=Kt,B._vx.update(pt),B._vy.update(Kt),c?F||(F=requestAnimationFrame(Ft)):Ft()},re=function(pt,Kt){Dt&&!Ct&&(B.axis=Ct=Math.abs(pt)>Math.abs(Kt)?"x":"y",At=!0),Ct!=="y"&&(Ut[2]+=pt,B._vx.update(pt,!0)),Ct!=="x"&&(st[2]+=Kt,B._vy.update(Kt,!0)),c?F||(F=requestAnimationFrame(Ft)):Ft()},zt=function(pt){if(!xt(pt,1)){pt=qs(pt,u);var Kt=pt.clientX,ut=pt.clientY,Ot=Kt-B.x,wt=ut-B.y,kt=B.isDragging;B.x=Kt,B.y=ut,(kt||Math.abs(B.startX-Kt)>=s||Math.abs(B.startY-ut)>=s)&&(M&&(Mt=!0),kt||(B.isDragging=!0),re(Ot,wt),kt||m&&m(B))}},x=B.onPress=function(bt){xt(bt,1)||bt&&bt.button||(B.axis=Ct=null,Ht.pause(),B.isPressed=!0,bt=qs(bt),$t=P=0,B.startX=B.x=bt.clientX,B.startY=B.y=bt.clientY,B._vx.reset(),B._vy.reset(),on(z?a:rt,$n[1],zt,T,!0),B.deltaX=B.deltaY=0,S&&S(B))},I=B.onRelease=function(bt){if(!xt(bt,1)){rn(z?a:rt,$n[1],zt,!0);var pt=!isNaN(B.y-B.startY),Kt=B.isDragging,ut=Kt&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),Ot=qs(bt);!ut&&pt&&(B._vx.reset(),B._vy.reset(),u&&nt&&We.delayedCall(.08,function(){if(uo()-Et>300&&!bt.defaultPrevented){if(bt.target.click)bt.target.click();else if(rt.createEvent){var wt=rt.createEvent("MouseEvents");wt.initMouseEvent("click",!0,!0,Rn,1,Ot.screenX,Ot.screenY,Ot.clientX,Ot.clientY,!1,!1,!1,!1,0,null),bt.target.dispatchEvent(wt)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,h&&Kt&&!z&&Ht.restart(!0),p&&Kt&&p(B),E&&E(B,ut)}},V=function(pt){return pt.touches&&pt.touches.length>1&&(B.isGesturing=!0)&&J(pt,B.isDragging)},Q=function(){return(B.isGesturing=!1)||C(B)},ot=function(pt){if(!xt(pt)){var Kt=G(),ut=Z();Xt((Kt-et)*tt,(ut-it)*tt,1),et=Kt,it=ut,h&&Ht.restart(!0)}},Nt=function(pt){if(!xt(pt)){pt=qs(pt,u),ht&&(_t=!0);var Kt=(pt.deltaMode===1?l:pt.deltaMode===2?Rn.innerHeight:1)*g;Xt(pt.deltaX*Kt,pt.deltaY*Kt,0),h&&!z&&Ht.restart(!0)}},Wt=function(pt){if(!xt(pt)){var Kt=pt.clientX,ut=pt.clientY,Ot=Kt-B.x,wt=ut-B.y;B.x=Kt,B.y=ut,Tt=!0,h&&Ht.restart(!0),(Ot||wt)&&re(Ot,wt)}},le=function(pt){B.event=pt,$(B)},he=function(pt){B.event=pt,q(B)},Qt=function(pt){return xt(pt)||qs(pt,u)&&Y(B)};Ht=B._dc=We.delayedCall(d||.25,St).pause(),B.deltaX=B.deltaY=0,B._vx=Rc(0,50,!0),B._vy=Rc(0,50,!0),B.scrollX=G,B.scrollY=Z,B.isDragging=B.isGesturing=B.isPressed=!1,mp(this),B.enable=function(bt){return B.isEnabled||(on(dt?rt:a,"scroll",Cc),o.indexOf("scroll")>=0&&on(dt?rt:a,"scroll",ot,T,ct),o.indexOf("wheel")>=0&&on(a,"wheel",Nt,T,ct),(o.indexOf("touch")>=0&&fp||o.indexOf("pointer")>=0)&&(on(a,$n[0],x,T,ct),on(rt,$n[2],I),on(rt,$n[3],I),nt&&on(a,"click",qt,!0,!0),Y&&on(a,"click",Qt),J&&on(rt,"gesturestart",V),C&&on(rt,"gestureend",Q),$&&on(a,_r+"enter",le),q&&on(a,_r+"leave",he),K&&on(a,_r+"move",Wt)),B.isEnabled=!0,bt&&bt.type&&x(bt),at&&at(B)),B},B.disable=function(){B.isEnabled&&(gs.filter(function(bt){return bt!==B&&ho(bt.target)}).length||rn(dt?rt:a,"scroll",Cc),B.isPressed&&(B._vx.reset(),B._vy.reset(),rn(z?a:rt,$n[1],zt,!0)),rn(dt?rt:a,"scroll",ot,ct),rn(a,"wheel",Nt,ct),rn(a,$n[0],x,ct),rn(rt,$n[2],I),rn(rt,$n[3],I),rn(a,"click",qt,!0),rn(a,"click",Qt),rn(rt,"gesturestart",V),rn(rt,"gestureend",Q),rn(a,_r+"enter",le),rn(a,_r+"leave",he),rn(a,_r+"move",Wt),B.isEnabled=B.isPressed=B.isDragging=!1,Bt&&Bt(B))},B.kill=B.revert=function(){B.disable();var bt=gs.indexOf(B);bt>=0&&gs.splice(bt,1),Ti===B&&(Ti=0)},gs.push(B),z&&ho(a)&&(Ti=B),B.enable(_)},ly(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ce.version="3.12.5";Ce.create=function(r){return new Ce(r)};Ce.register=xp;Ce.getAll=function(){return gs.slice()};Ce.getById=function(r){return gs.filter(function(t){return t.vars.id===r})[0]};_p()&&We.registerPlugin(Ce);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var yt,ds,se,ye,qn,ge,Sp,Wa,Po,fo,Qs,ha,je,il,Pc,cn,vd,xd,fs,Mp,Kl,yp,ln,Lc,Ep,Tp,Oi,Dc,fu,bs,pu,Xa,Ic,Zl,da=1,Ke=Date.now,Jl=Ke(),Vn=0,to=0,Sd=function(t,e,n){var i=bn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Md=function(t,e){return e&&(!bn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},uy=function r(){return to&&requestAnimationFrame(r)},yd=function(){return il=1},Ed=function(){return il=0},Qn=function(t){return t},eo=function(t){return Math.round(t*1e5)/1e5||0},bp=function(){return typeof window<"u"},Ap=function(){return yt||bp()&&(yt=window.gsap)&&yt.registerPlugin&&yt},Or=function(t){return!!~Sp.indexOf(t)},wp=function(t){return(t==="Height"?pu:se["inner"+t])||qn["client"+t]||ge["client"+t]},Cp=function(t){return Ki(t,"getBoundingClientRect")||(Or(t)?function(){return Pa.width=se.innerWidth,Pa.height=pu,Pa}:function(){return yi(t)})},hy=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=Ki(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?wp(s):t["client"+s])||0}},dy=function(t,e){return!e||~ui.indexOf(t)?Cp(t):function(){return Pa}},oi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Ki(t,n))?o()-Cp(t)()[s]:Or(t)?(qn[n]||ge[n])-wp(i):t[n]-t["offset"+i])},fa=function(t,e){for(var n=0;n<fs.length;n+=3)(!e||~e.indexOf(fs[n+1]))&&t(fs[n],fs[n+1],fs[n+2])},bn=function(t){return typeof t=="string"},fn=function(t){return typeof t=="function"},no=function(t){return typeof t=="number"},gr=function(t){return typeof t=="object"},js=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Ql=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},cs=Math.abs,Rp="left",Pp="top",mu="right",_u="bottom",Rr="width",Pr="height",po="Right",mo="Left",_o="Top",go="Bottom",Le="padding",Fn="margin",Os="Width",gu="Height",Ie="px",Bn=function(t){return se.getComputedStyle(t)},fy=function(t){var e=Bn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Td=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},yi=function(t,e){var n=e&&Bn(t)[Pc]!=="matrix(1, 0, 0, 1, 0, 0)"&&yt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ya=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Lp=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},py=function(t){return function(e){return yt.utils.snap(Lp(t),e)}},vu=function(t){var e=yt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},my=function(t){return function(e,n){return vu(Lp(t))(e,n.direction)}},pa=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},ke=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},ze=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ma=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},bd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},_a={toggleActions:"play",anticipatePin:0},$a={top:0,left:0,center:.5,bottom:1,right:1},Aa=function(t,e){if(bn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in $a?$a[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ga=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,g=ye.createElement("div"),_=Or(n)||Ki(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?ge:n,M=t.indexOf("start")!==-1,S=M?c:u,E="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return E+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(E+=(i===Ue?mu:_u)+":"+(o+parseFloat(d))+"px;"),a&&(E+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=E,g.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],wa(g,0,i,M),g},wa=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Os]=1,s["border"+a+Os]=0,s[n.p]=e+"px",yt.set(t,s)},ee=[],Uc={},Lo,Ad=function(){return Ke()-Vn>34&&(Lo||(Lo=requestAnimationFrame(bi)))},us=function(){(!ln||!ln.isPressed||ln.startX>ge.clientWidth)&&(ne.cache++,ln?Lo||(Lo=requestAnimationFrame(bi)):bi(),Vn||Br("scrollStart"),Vn=Ke())},tc=function(){Tp=se.innerWidth,Ep=se.innerHeight},io=function(){ne.cache++,!je&&!yp&&!ye.fullscreenElement&&!ye.webkitFullscreenElement&&(!Lc||Tp!==se.innerWidth||Math.abs(se.innerHeight-Ep)>se.innerHeight*.25)&&Wa.restart(!0)},Fr={},_y=[],Dp=function r(){return ze(ie,"scrollEnd",r)||Er(!0)},Br=function(t){return Fr[t]&&Fr[t].map(function(e){return e()})||_y},Tn=[],Ip=function(t){for(var e=0;e<Tn.length;e+=5)(!t||Tn[e+4]&&Tn[e+4].query===t)&&(Tn[e].style.cssText=Tn[e+1],Tn[e].getBBox&&Tn[e].setAttribute("transform",Tn[e+2]||""),Tn[e+3].uncache=1)},xu=function(t,e){var n;for(cn=0;cn<ee.length;cn++)n=ee[cn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Xa=!0,e&&Ip(e),e||Br("revert")},Up=function(t,e){ne.cache++,(e||!un)&&ne.forEach(function(n){return fn(n)&&n.cacheID++&&(n.rec=0)}),bn(t)&&(se.history.scrollRestoration=fu=t)},un,Lr=0,wd,gy=function(){if(wd!==Lr){var t=wd=Lr;requestAnimationFrame(function(){return t===Lr&&Er(!0)})}},Np=function(){ge.appendChild(bs),pu=!ln&&bs.offsetHeight||se.innerHeight,ge.removeChild(bs)},Cd=function(t){return Po(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Er=function(t,e){if(Vn&&!t&&!Xa){ke(ie,"scrollEnd",Dp);return}Np(),un=ie.isRefreshing=!0,ne.forEach(function(i){return fn(i)&&++i.cacheID&&(i.rec=i())});var n=Br("refreshInit");Mp&&ie.sort(),e||xu(),ne.forEach(function(i){fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ee.slice(0).forEach(function(i){return i.refresh()}),Xa=!1,ee.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Ic=1,Cd(!0),ee.forEach(function(i){var s=oi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Cd(!1),Ic=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ne.forEach(function(i){fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Up(fu,1),Wa.pause(),Lr++,un=2,bi(2),ee.forEach(function(i){return fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),un=ie.isRefreshing=!1,Br("refresh")},Nc=0,Ca=1,vo,bi=function(t){if(t===2||!un&&!Xa){ie.isUpdating=!0,vo&&vo.update(0);var e=ee.length,n=Ke(),i=n-Jl>=50,s=e&&ee[0].scroll();if(Ca=Nc>s?-1:1,un||(Nc=s),i&&(Vn&&!il&&n-Vn>200&&(Vn=0,Br("scrollEnd")),Qs=Jl,Jl=n),Ca<0){for(cn=e;cn-- >0;)ee[cn]&&ee[cn].update(0,i);Ca=1}else for(cn=0;cn<e;cn++)ee[cn]&&ee[cn].update(0,i);ie.isUpdating=!1}Lo=0},Oc=[Rp,Pp,_u,mu,Fn+go,Fn+po,Fn+_o,Fn+mo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ra=Oc.concat([Rr,Pr,"boxSizing","max"+Os,"max"+gu,"position",Fn,Le,Le+_o,Le+po,Le+go,Le+mo]),vy=function(t,e,n){As(n);var i=t._gsap;if(i.spacerIsNative)As(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},ec=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Oc.length,o=e.style,a=t.style,l;s--;)l=Oc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[_u]=a[mu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Rr]=Ya(t,dn)+Ie,o[Pr]=Ya(t,Ue)+Ie,o[Le]=a[Fn]=a[Pp]=a[Rp]="0",As(i),a[Rr]=a["max"+Os]=n[Rr],a[Pr]=a["max"+gu]=n[Pr],a[Le]=n[Le],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},xy=/([A-Z])/g,As=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||yt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(xy,"-$1").toLowerCase())}},va=function(t){for(var e=Ra.length,n=t.style,i=[],s=0;s<e;s++)i.push(Ra[s],n[Ra[s]]);return i.t=t,i},Sy=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Pa={left:0,top:0},Rd=function(t,e,n,i,s,o,a,l,c,u,h,d,f,g){fn(t)&&(t=t(l)),bn(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?Aa("0"+t.substr(3),n):0));var _=f?f.time():0,m,p,M;if(f&&f.seek(0),isNaN(t)||(t=+t),no(t))f&&(t=yt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,t)),a&&wa(a,n,i,!0);else{fn(e)&&(e=e(l));var S=(t||"0").split(" "),E,R,w,b;M=mn(e,l)||ge,E=yi(M)||{},(!E||!E.left&&!E.top)&&Bn(M).display==="none"&&(b=M.style.display,M.style.display="block",E=yi(M),b?M.style.display=b:M.style.removeProperty("display")),R=Aa(S[0],E[i.d]),w=Aa(S[1]||"0",n),t=E[i.p]-c[i.p]-u+R+s-w,a&&wa(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var L=t+n,y=o._isStart;m="scroll"+i.d2,wa(o,L,i,y&&L>20||!y&&(h?Math.max(ge[m],qn[m]):o.parentNode[m])<=L+1),h&&(c=yi(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ie))}return f&&M&&(m=yi(M),f.seek(d),p=yi(M),f._caScrollDist=m[i.p]-p[i.p],t=t/f._caScrollDist*d),f&&f.seek(_),f?t:Math.round(t)},My=/(webkit|moz|length|cssText|inset)/i,Pd=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===ge){t._stOrig=s.cssText,a=Bn(t);for(o in a)!+o&&!My.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;yt.core.getCache(t).uncache=1,e.appendChild(t)}},Op=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},xa=function(t,e,n){var i={};i[e.p]="+="+n,yt.set(t,i)},Ld=function(t,e){var n=nr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,g={};c=c||n();var _=Op(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){ne.cache++,o.tween&&bi()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=yt.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ke(t,"wheel",n.wheelHandler),ie.isTouch&&ke(t,"touchmove",n.wheelHandler),s},ie=function(){function r(e,n){ds||r.register(yt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Dc(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!to){this.update=this.refresh=this.kill=Qn;return}n=Td(bn(n)||no(n)||n.nodeType?{trigger:n}:n,_a);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,S=s.once,E=s.snap,R=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,L=s.fastScrollEnd,y=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?dn:Ue,U=!h&&h!==0,N=mn(n.scroller||se),D=yt.core.getCache(N),$=Or(N),q=("pinType"in n?n.pinType:Ki(N,"pinType")||$&&"fixed")==="fixed",K=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],j=U&&n.toggleActions.split(" "),z="markers"in n?n.markers:_a.markers,J=$?0:parseFloat(Bn(N)["border"+v.p2+Os])||0,C=this,ht=n.onRefreshInit&&function(){return n.onRefreshInit(C)},at=hy(N,$,v),Bt=dy(N,$),Y=0,tt=0,ct=0,nt=nr(N,v),Dt,Pt,F,Ht,Mt,Tt,_t,At,Ct,B,$t,P,T,G,Z,et,it,vt,dt,rt,Ut,st,Et,qt,xt,St,Ft,Xt,re,zt,x,I,V,Q,ot,Nt,Wt,le,he;if(C._startClamp=C._endClamp=!1,C._dir=v,m*=45,C.scroller=N,C.scroll=b?b.time.bind(b):nt,Ht=nt(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(Mp=1,n.refreshPriority===-9999&&(vo=C)),D.tweenScroll=D.tweenScroll||{top:Ld(N,Ue),left:Ld(N,dn)},C.tweenTo=Dt=D.tweenScroll[v.p],C.scrubDuration=function(ut){V=no(ut)&&ut,V?I?I.duration(ut):I=yt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:V,paused:!0,onComplete:function(){return p&&p(C)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),zt=0,l||(l=i.vars.id)),E&&((!gr(E)||E.push)&&(E={snapTo:E}),"scrollBehavior"in ge.style&&yt.set($?[ge,qn]:N,{scrollBehavior:"auto"}),ne.forEach(function(ut){return fn(ut)&&ut.target===($?ye.scrollingElement||qn:N)&&(ut.smooth=!1)}),F=fn(E.snapTo)?E.snapTo:E.snapTo==="labels"?py(i):E.snapTo==="labelsDirectional"?my(i):E.directional!==!1?function(ut,Ot){return vu(E.snapTo)(ut,Ke()-tt<500?0:Ot.direction)}:yt.utils.snap(E.snapTo),Q=E.duration||{min:.1,max:2},Q=gr(Q)?fo(Q.min,Q.max):fo(Q,Q),ot=yt.delayedCall(E.delay||V/2||.1,function(){var ut=nt(),Ot=Ke()-tt<500,wt=Dt.tween;if((Ot||Math.abs(C.getVelocity())<10)&&!wt&&!il&&Y!==ut){var kt=(ut-Tt)/G,Me=i&&!U?i.totalProgress():kt,te=Ot?0:(Me-x)/(Ke()-Qs)*1e3||0,ve=yt.utils.clamp(-kt,1-kt,cs(te/2)*te/.185),Fe=kt+(E.inertia===!1?0:ve),xe,pe,A=E,O=A.onStart,k=A.onInterrupt,H=A.onComplete;if(xe=F(Fe,C),no(xe)||(xe=Fe),pe=Math.round(Tt+xe*G),ut<=_t&&ut>=Tt&&pe!==ut){if(wt&&!wt._initted&&wt.data<=cs(pe-ut))return;E.inertia===!1&&(ve=xe-kt),Dt(pe,{duration:Q(cs(Math.max(cs(Fe-Me),cs(xe-Me))*.185/te/.05||0)),ease:E.ease||"power3",data:cs(pe-ut),onInterrupt:function(){return ot.restart(!0)&&k&&k(C)},onComplete:function(){C.update(),Y=nt(),i&&(I?I.resetTo("totalProgress",xe,i._tTime/i._tDur):i.progress(xe)),zt=x=i&&!U?i.totalProgress():C.progress,M&&M(C),H&&H(C)}},ut,ve*G,pe-ut-ve*G),O&&O(C,Dt.tween)}}else C.isActive&&Y!==ut&&ot.restart(!0)}).pause()),l&&(Uc[l]=C),d=C.trigger=mn(d||f!==!0&&f),he=d&&d._gsap&&d._gsap.stRevert,he&&(he=he(C)),f=f===!0?d:mn(f),bn(a)&&(a={targets:d,className:a}),f&&(g===!1||g===Fn||(g=!g&&f.parentNode&&f.parentNode.style&&Bn(f.parentNode).display==="flex"?!1:Le),C.pin=f,Pt=yt.core.getCache(f),Pt.spacer?Z=Pt.pinState:(w&&(w=mn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Pt.spacerIsNative=!!w,w&&(Pt.spacerState=va(w))),Pt.spacer=vt=w||ye.createElement("div"),vt.classList.add("pin-spacer"),l&&vt.classList.add("pin-spacer-"+l),Pt.pinState=Z=va(f)),n.force3D!==!1&&yt.set(f,{force3D:!0}),C.spacer=vt=Pt.spacer,re=Bn(f),qt=re[g+v.os2],rt=yt.getProperty(f),Ut=yt.quickSetter(f,v.a,Ie),ec(f,vt,re),it=va(f)),z){P=gr(z)?Td(z,bd):bd,B=ga("scroller-start",l,N,v,P,0),$t=ga("scroller-end",l,N,v,P,0,B),dt=B["offset"+v.op.d2];var Qt=mn(Ki(N,"content")||N);At=this.markerStart=ga("start",l,Qt,v,P,dt,0,b),Ct=this.markerEnd=ga("end",l,Qt,v,P,dt,0,b),b&&(le=yt.quickSetter([At,Ct],v.a,Ie)),!q&&!(ui.length&&Ki(N,"fixedMarkers")===!0)&&(fy($?ge:N),yt.set([B,$t],{force3D:!0}),St=yt.quickSetter(B,v.a,Ie),Xt=yt.quickSetter($t,v.a,Ie))}if(b){var bt=b.vars.onUpdate,pt=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){C.update(0,0,1),bt&&bt.apply(b,pt||[])})}if(C.previous=function(){return ee[ee.indexOf(C)-1]},C.next=function(){return ee[ee.indexOf(C)+1]},C.revert=function(ut,Ot){if(!Ot)return C.kill(!0);var wt=ut!==!1||!C.enabled,kt=je;wt!==C.isReverted&&(wt&&(Nt=Math.max(nt(),C.scroll.rec||0),ct=C.progress,Wt=i&&i.progress()),At&&[At,Ct,B,$t].forEach(function(Me){return Me.style.display=wt?"none":"block"}),wt&&(je=C,C.update(wt)),f&&(!R||!C.isActive)&&(wt?vy(f,vt,Z):ec(f,vt,Bn(f),xt)),wt||C.update(wt),je=kt,C.isReverted=wt)},C.refresh=function(ut,Ot,wt,kt){if(!((je||!C.enabled)&&!Ot)){if(f&&ut&&Vn){ke(r,"scrollEnd",Dp);return}!un&&ht&&ht(C),je=C,Dt.tween&&!wt&&(Dt.tween.kill(),Dt.tween=0),I&&I.pause(),_&&i&&i.revert({kill:!1}).invalidate(),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Me=at(),te=Bt(),ve=b?b.duration():oi(N,v),Fe=G<=.01,xe=0,pe=kt||0,A=gr(wt)?wt.end:n.end,O=n.endTrigger||d,k=gr(wt)?wt.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),H=C.pinnedContainer=n.pinnedContainer&&mn(n.pinnedContainer,C),W=d&&Math.max(0,ee.indexOf(C))||0,lt=W,ft,gt,It,Gt,Lt,Rt,ae,Re,Xe,nn,jt,Vt,Kn;for(z&&gr(wt)&&(Vt=yt.getProperty(B,v.p),Kn=yt.getProperty($t,v.p));lt--;)Rt=ee[lt],Rt.end||Rt.refresh(0,1)||(je=C),ae=Rt.pin,ae&&(ae===d||ae===f||ae===H)&&!Rt.isReverted&&(nn||(nn=[]),nn.unshift(Rt),Rt.revert(!0,!0)),Rt!==ee[lt]&&(W--,lt--);for(fn(k)&&(k=k(C)),k=Sd(k,"start",C),Tt=Rd(k,d,Me,v,nt(),At,B,C,te,J,q,ve,b,C._startClamp&&"_startClamp")||(f?-.001:0),fn(A)&&(A=A(C)),bn(A)&&!A.indexOf("+=")&&(~A.indexOf(" ")?A=(bn(k)?k.split(" ")[0]:"")+A:(xe=Aa(A.substr(2),Me),A=bn(k)?k:(b?yt.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Tt):Tt)+xe,O=d)),A=Sd(A,"end",C),_t=Math.max(Tt,Rd(A||(O?"100% 0":ve),O,Me,v,nt()+xe,Ct,$t,C,te,J,q,ve,b,C._endClamp&&"_endClamp"))||-.001,xe=0,lt=W;lt--;)Rt=ee[lt],ae=Rt.pin,ae&&Rt.start-Rt._pinPush<=Tt&&!b&&Rt.end>0&&(ft=Rt.end-(C._startClamp?Math.max(0,Rt.start):Rt.start),(ae===d&&Rt.start-Rt._pinPush<Tt||ae===H)&&isNaN(k)&&(xe+=ft*(1-Rt.progress)),ae===f&&(pe+=ft));if(Tt+=xe,_t+=xe,C._startClamp&&(C._startClamp+=xe),C._endClamp&&!un&&(C._endClamp=_t||-.001,_t=Math.min(_t,oi(N,v))),G=_t-Tt||(Tt-=.01)&&.001,Fe&&(ct=yt.utils.clamp(0,1,yt.utils.normalize(Tt,_t,Nt))),C._pinPush=pe,At&&xe&&(ft={},ft[v.a]="+="+xe,H&&(ft[v.p]="-="+nt()),yt.set([At,Ct],ft)),f&&!(Ic&&C.end>=oi(N,v)))ft=Bn(f),Gt=v===Ue,It=nt(),st=parseFloat(rt(v.a))+pe,!ve&&_t>1&&(jt=($?ye.scrollingElement||qn:N).style,jt={style:jt,value:jt["overflow"+v.a.toUpperCase()]},$&&Bn(ge)["overflow"+v.a.toUpperCase()]!=="scroll"&&(jt.style["overflow"+v.a.toUpperCase()]="scroll")),ec(f,vt,ft),it=va(f),gt=yi(f,!0),Re=q&&nr(N,Gt?dn:Ue)(),g?(xt=[g+v.os2,G+pe+Ie],xt.t=vt,lt=g===Le?Ya(f,v)+G+pe:0,lt&&(xt.push(v.d,lt+Ie),vt.style.flexBasis!=="auto"&&(vt.style.flexBasis=lt+Ie)),As(xt),H&&ee.forEach(function(ce){ce.pin===H&&ce.vars.pinSpacing!==!1&&(ce._subPinOffset=!0)}),q&&nt(Nt)):(lt=Ya(f,v),lt&&vt.style.flexBasis!=="auto"&&(vt.style.flexBasis=lt+Ie)),q&&(Lt={top:gt.top+(Gt?It-Tt:Re)+Ie,left:gt.left+(Gt?Re:It-Tt)+Ie,boxSizing:"border-box",position:"fixed"},Lt[Rr]=Lt["max"+Os]=Math.ceil(gt.width)+Ie,Lt[Pr]=Lt["max"+gu]=Math.ceil(gt.height)+Ie,Lt[Fn]=Lt[Fn+_o]=Lt[Fn+po]=Lt[Fn+go]=Lt[Fn+mo]="0",Lt[Le]=ft[Le],Lt[Le+_o]=ft[Le+_o],Lt[Le+po]=ft[Le+po],Lt[Le+go]=ft[Le+go],Lt[Le+mo]=ft[Le+mo],et=Sy(Z,Lt,R),un&&nt(0)),i?(Xe=i._initted,Kl(1),i.render(i.duration(),!0,!0),Et=rt(v.a)-st+G+pe,Ft=Math.abs(G-Et)>1,q&&Ft&&et.splice(et.length-2,2),i.render(0,!0,!0),Xe||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Kl(0)):Et=G,jt&&(jt.value?jt.style["overflow"+v.a.toUpperCase()]=jt.value:jt.style.removeProperty("overflow-"+v.a));else if(d&&nt()&&!b)for(gt=d.parentNode;gt&&gt!==ge;)gt._pinOffset&&(Tt-=gt._pinOffset,_t-=gt._pinOffset),gt=gt.parentNode;nn&&nn.forEach(function(ce){return ce.revert(!1,!0)}),C.start=Tt,C.end=_t,Ht=Mt=un?Nt:nt(),!b&&!un&&(Ht<Nt&&nt(Nt),C.scroll.rec=0),C.revert(!1,!0),tt=Ke(),ot&&(Y=-1,ot.restart(!0)),je=0,i&&U&&(i._initted||Wt)&&i.progress()!==Wt&&i.progress(Wt||0,!0).render(i.time(),!0,!0),(Fe||ct!==C.progress||b||_)&&(i&&!U&&i.totalProgress(b&&Tt<-.001&&!ct?yt.utils.normalize(Tt,_t,0):ct,!0),C.progress=Fe||(Ht-Tt)/G===ct?0:ct),f&&g&&(vt._pinOffset=Math.round(C.progress*Et)),I&&I.invalidate(),isNaN(Vt)||(Vt-=yt.getProperty(B,v.p),Kn-=yt.getProperty($t,v.p),xa(B,v,Vt),xa(At,v,Vt-(kt||0)),xa($t,v,Kn),xa(Ct,v,Kn-(kt||0))),Fe&&!un&&C.update(),u&&!un&&!T&&(T=!0,u(C),T=!1)}},C.getVelocity=function(){return(nt()-Mt)/(Ke()-Qs)*1e3||0},C.endAnimation=function(){js(C.callbackAnimation),i&&(I?I.progress(1):i.paused()?U||js(i,C.direction<0,1):js(i,i.reversed()))},C.labelToScroll=function(ut){return i&&i.labels&&(Tt||C.refresh()||Tt)+i.labels[ut]/i.duration()*G||0},C.getTrailing=function(ut){var Ot=ee.indexOf(C),wt=C.direction>0?ee.slice(0,Ot).reverse():ee.slice(Ot+1);return(bn(ut)?wt.filter(function(kt){return kt.vars.preventOverlaps===ut}):wt).filter(function(kt){return C.direction>0?kt.end<=Tt:kt.start>=_t})},C.update=function(ut,Ot,wt){if(!(b&&!wt&&!ut)){var kt=un===!0?Nt:C.scroll(),Me=ut?0:(kt-Tt)/G,te=Me<0?0:Me>1?1:Me||0,ve=C.progress,Fe,xe,pe,A,O,k,H,W;if(Ot&&(Mt=Ht,Ht=b?nt():kt,E&&(x=zt,zt=i&&!U?i.totalProgress():te)),m&&f&&!je&&!da&&Vn&&(!te&&Tt<kt+(kt-Mt)/(Ke()-Qs)*m?te=1e-4:te===1&&_t>kt+(kt-Mt)/(Ke()-Qs)*m&&(te=.9999)),te!==ve&&C.enabled){if(Fe=C.isActive=!!te&&te<1,xe=!!ve&&ve<1,k=Fe!==xe,O=k||!!te!=!!ve,C.direction=te>ve?1:-1,C.progress=te,O&&!je&&(pe=te&&!ve?0:te===1?1:ve===1?2:3,U&&(A=!k&&j[pe+1]!=="none"&&j[pe+1]||j[pe],W=i&&(A==="complete"||A==="reset"||A in i))),y&&(k||W)&&(W||h||!i)&&(fn(y)?y(C):C.getTrailing(y).forEach(function(It){return It.endAnimation()})),U||(I&&!je&&!da?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",te,i._tTime/i._tDur):(I.vars.totalProgress=te,I.invalidate().restart())):i&&i.totalProgress(te,!!(je&&(tt||ut)))),f){if(ut&&g&&(vt.style[g+v.os2]=qt),!q)Ut(eo(st+Et*te));else if(O){if(H=!ut&&te>ve&&_t+1>kt&&kt+1>=oi(N,v),R)if(!ut&&(Fe||H)){var lt=yi(f,!0),ft=kt-Tt;Pd(f,ge,lt.top+(v===Ue?ft:0)+Ie,lt.left+(v===Ue?0:ft)+Ie)}else Pd(f,vt);As(Fe||H?et:it),Ft&&te<1&&Fe||Ut(st+(te===1&&!H?Et:0))}}E&&!Dt.tween&&!je&&!da&&ot.restart(!0),a&&(k||S&&te&&(te<1||!Zl))&&Po(a.targets).forEach(function(It){return It.classList[Fe||S?"add":"remove"](a.className)}),o&&!U&&!ut&&o(C),O&&!je?(U&&(W&&(A==="complete"?i.pause().totalProgress(1):A==="reset"?i.restart(!0).pause():A==="restart"?i.restart(!0):i[A]()),o&&o(C)),(k||!Zl)&&(c&&k&&Ql(C,c),K[pe]&&Ql(C,K[pe]),S&&(te===1?C.kill(!1,1):K[pe]=0),k||(pe=te===1?1:3,K[pe]&&Ql(C,K[pe]))),L&&!Fe&&Math.abs(C.getVelocity())>(no(L)?L:2500)&&(js(C.callbackAnimation),I?I.progress(1):js(i,A==="reverse"?1:!te,1))):U&&o&&!je&&o(C)}if(Xt){var gt=b?kt/b.duration()*(b._caScrollDist||0):kt;St(gt+(B._isFlipped?1:0)),Xt(gt)}le&&le(-kt/b.duration()*(b._caScrollDist||0))}},C.enable=function(ut,Ot){C.enabled||(C.enabled=!0,ke(N,"resize",io),$||ke(N,"scroll",us),ht&&ke(r,"refreshInit",ht),ut!==!1&&(C.progress=ct=0,Ht=Mt=Y=nt()),Ot!==!1&&C.refresh())},C.getTween=function(ut){return ut&&Dt?Dt.tween:I},C.setPositions=function(ut,Ot,wt,kt){if(b){var Me=b.scrollTrigger,te=b.duration(),ve=Me.end-Me.start;ut=Me.start+ve*ut/te,Ot=Me.start+ve*Ot/te}C.refresh(!1,!1,{start:Md(ut,wt&&!!C._startClamp),end:Md(Ot,wt&&!!C._endClamp)},kt),C.update()},C.adjustPinSpacing=function(ut){if(xt&&ut){var Ot=xt.indexOf(v.d)+1;xt[Ot]=parseFloat(xt[Ot])+ut+Ie,xt[1]=parseFloat(xt[1])+ut+Ie,As(xt)}},C.disable=function(ut,Ot){if(C.enabled&&(ut!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,Ot||I&&I.pause(),Nt=0,Pt&&(Pt.uncache=1),ht&&ze(r,"refreshInit",ht),ot&&(ot.pause(),Dt.tween&&Dt.tween.kill()&&(Dt.tween=0)),!$)){for(var wt=ee.length;wt--;)if(ee[wt].scroller===N&&ee[wt]!==C)return;ze(N,"resize",io),$||ze(N,"scroll",us)}},C.kill=function(ut,Ot){C.disable(ut,Ot),I&&!Ot&&I.kill(),l&&delete Uc[l];var wt=ee.indexOf(C);wt>=0&&ee.splice(wt,1),wt===cn&&Ca>0&&cn--,wt=0,ee.forEach(function(kt){return kt.scroller===C.scroller&&(wt=1)}),wt||un||(C.scroll.rec=0),i&&(i.scrollTrigger=null,ut&&i.revert({kill:!1}),Ot||i.kill()),At&&[At,Ct,B,$t].forEach(function(kt){return kt.parentNode&&kt.parentNode.removeChild(kt)}),vo===C&&(vo=0),f&&(Pt&&(Pt.uncache=1),wt=0,ee.forEach(function(kt){return kt.pin===f&&wt++}),wt||(Pt.spacer=0)),n.onKill&&n.onKill(C)},ee.push(C),C.enable(!1,!1),he&&he(C),i&&i.add&&!G){var Kt=C.update;C.update=function(){C.update=Kt,Tt||_t||C.refresh()},yt.delayedCall(.01,C.update),G=.01,Tt=_t=0}else C.refresh();f&&gy()},r.register=function(n){return ds||(yt=n||Ap(),bp()&&window.document&&r.enable(),ds=to),ds},r.defaults=function(n){if(n)for(var i in n)_a[i]=n[i];return _a},r.disable=function(n,i){to=0,ee.forEach(function(o){return o[i?"kill":"disable"](n)}),ze(se,"wheel",us),ze(ye,"scroll",us),clearInterval(ha),ze(ye,"touchcancel",Qn),ze(ge,"touchstart",Qn),pa(ze,ye,"pointerdown,touchstart,mousedown",yd),pa(ze,ye,"pointerup,touchend,mouseup",Ed),Wa.kill(),fa(ze);for(var s=0;s<ne.length;s+=3)ma(ze,ne[s],ne[s+1]),ma(ze,ne[s],ne[s+2])},r.enable=function(){if(se=window,ye=document,qn=ye.documentElement,ge=ye.body,yt&&(Po=yt.utils.toArray,fo=yt.utils.clamp,Dc=yt.core.context||Qn,Kl=yt.core.suppressOverwrites||Qn,fu=se.history.scrollRestoration||"auto",Nc=se.pageYOffset,yt.core.globals("ScrollTrigger",r),ge)){to=1,bs=document.createElement("div"),bs.style.height="100vh",bs.style.position="absolute",Np(),uy(),Ce.register(yt),r.isTouch=Ce.isTouch,Oi=Ce.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Lc=Ce.isTouch===1,ke(se,"wheel",us),Sp=[se,ye,qn,ge],yt.matchMedia?(r.matchMedia=function(l){var c=yt.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},yt.addEventListener("matchMediaInit",function(){return xu()}),yt.addEventListener("matchMediaRevert",function(){return Ip()}),yt.addEventListener("matchMedia",function(){Er(0,1),Br("matchMedia")}),yt.matchMedia("(orientation: portrait)",function(){return tc(),tc})):console.warn("Requires GSAP 3.11.0 or later"),tc(),ke(ye,"scroll",us);var n=ge.style,i=n.borderTopStyle,s=yt.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=yi(ge),Ue.m=Math.round(o.top+Ue.sc())||0,dn.m=Math.round(o.left+dn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),ha=setInterval(Ad,250),yt.delayedCall(.5,function(){return da=0}),ke(ye,"touchcancel",Qn),ke(ge,"touchstart",Qn),pa(ke,ye,"pointerdown,touchstart,mousedown",yd),pa(ke,ye,"pointerup,touchend,mouseup",Ed),Pc=yt.utils.checkPrefix("transform"),Ra.push(Pc),ds=Ke(),Wa=yt.delayedCall(.2,Er).pause(),fs=[ye,"visibilitychange",function(){var l=se.innerWidth,c=se.innerHeight;ye.hidden?(vd=l,xd=c):(vd!==l||xd!==c)&&io()},ye,"DOMContentLoaded",Er,se,"load",Er,se,"resize",io],fa(ke),ee.forEach(function(l){return l.enable(0,1)}),a=0;a<ne.length;a+=3)ma(ze,ne[a],ne[a+1]),ma(ze,ne[a],ne[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Zl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ha)||(ha=i)&&setInterval(Ad,i),"ignoreMobileResize"in n&&(Lc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(fa(ze)||fa(ke,n.autoRefreshEvents||"none"),yp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=mn(n),o=ne.indexOf(s),a=Or(s);~o&&ne.splice(o,a?6:2),i&&(a?ui.unshift(se,i,ge,i,qn,i):ui.unshift(s,i))},r.clearMatchMedia=function(n){ee.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(bn(n)?mn(n):n).getBoundingClientRect(),a=o[s?Rr:Pr]*i||0;return s?o.right-a>0&&o.left+a<se.innerWidth:o.bottom-a>0&&o.top+a<se.innerHeight},r.positionInViewport=function(n,i,s){bn(n)&&(n=mn(n));var o=n.getBoundingClientRect(),a=o[s?Rr:Pr],l=i==null?a/2:i in $a?$a[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/se.innerWidth:(o.top+l)/se.innerHeight},r.killAll=function(n){if(ee.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Fr.killAll||[];Fr={},i.forEach(function(s){return s()})}},r}();ie.version="3.12.5";ie.saveStyles=function(r){return r?Po(r).forEach(function(t){if(t&&t.style){var e=Tn.indexOf(t);e>=0&&Tn.splice(e,5),Tn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),yt.core.getCache(t),Dc())}}):Tn};ie.revert=function(r,t){return xu(!r,t)};ie.create=function(r,t){return new ie(r,t)};ie.refresh=function(r){return r?io():(ds||ie.register())&&Er(!0)};ie.update=function(r){return++ne.cache&&bi(r===!0?2:0)};ie.clearScrollMemory=Up;ie.maxScroll=function(r,t){return oi(r,t?dn:Ue)};ie.getScrollFunc=function(r,t){return nr(mn(r),t?dn:Ue)};ie.getById=function(r){return Uc[r]};ie.getAll=function(){return ee.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ie.isScrolling=function(){return!!Vn};ie.snapDirectional=vu;ie.addEventListener=function(r,t){var e=Fr[r]||(Fr[r]=[]);~e.indexOf(t)||e.push(t)};ie.removeEventListener=function(r,t){var e=Fr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ie.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],d=[],f=yt.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||f.restart(!0),h.push(g.trigger),d.push(g),s<=h.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&fn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return fn(s)&&(s=s(),ke(ie,"refresh",function(){return s=t.batchMax()})),Po(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(ie.create(c))}),e};var Dd=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},nc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ce.isTouch?" pinch-zoom":""):"none",t===qn&&r(ge,e)},Sa={auto:1,scroll:1},yy=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||yt.core.getCache(s),a=Ke(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ge&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Sa[(l=Bn(s)).overflowY]||Sa[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Or(s)&&(Sa[(l=Bn(s)).overflowY]||Sa[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Fp=function(t,e,n,i){return Ce.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&yy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ke(ye,Ce.eventTypes[0],Ud,!1,!0)},onDisable:function(){return ze(ye,Ce.eventTypes[0],Ud,!0)}})},Ey=/(input|label|select|textarea)/i,Id,Ud=function(t){var e=Ey.test(t.target.tagName);(e||Id)&&(t._gsapAllow=!0,Id=e)},Ty=function(t){gr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=mn(t.target)||qn,u=yt.core.globals().ScrollSmoother,h=u&&u.get(),d=Oi&&(t.content&&mn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),f=nr(c,Ue),g=nr(c,dn),_=1,m=(Ce.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,p=0,M=fn(i)?function(){return i(a)}:function(){return i||2.8},S,E,R=Fp(c,t.type,!0,s),w=function(){return E=!1},b=Qn,L=Qn,y=function(){l=oi(c,Ue),L=fo(Oi?1:0,l),n&&(b=fo(0,oi(c,dn))),S=Lr},v=function(){d._gsap.y=eo(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},U=function(){if(E){requestAnimationFrame(w);var z=eo(a.deltaY/2),J=L(f.v-z);if(d&&J!==f.v+f.offset){f.offset=J-f.v;var C=eo((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",d._gsap.y=C+"px",f.cacheID=ne.cache,bi()}return!0}f.offset&&v(),E=!0},N,D,$,q,K=function(){y(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return d&&yt.set(d,{y:"+=0"}),t.ignoreCheck=function(j){return Oi&&j.type==="touchmove"&&U()||_>1.05&&j.type!=="touchstart"||a.isGesturing||j.touches&&j.touches.length>1},t.onPress=function(){E=!1;var j=_;_=eo((se.visualViewport&&se.visualViewport.scale||1)/m),N.pause(),j!==_&&nc(c,_>1.01?!0:n?!1:"x"),D=g(),$=f(),y(),S=Lr},t.onRelease=t.onGestureStart=function(j,z){if(f.offset&&v(),!z)q.restart(!0);else{ne.cache++;var J=M(),C,ht;n&&(C=g(),ht=C+J*.05*-j.velocityX/.227,J*=Dd(g,C,ht,oi(c,dn)),N.vars.scrollX=b(ht)),C=f(),ht=C+J*.05*-j.velocityY/.227,J*=Dd(f,C,ht,oi(c,Ue)),N.vars.scrollY=L(ht),N.invalidate().duration(J).play(.01),(Oi&&N.vars.scrollY>=l||C>=l-1)&&yt.to({},{onUpdate:K,duration:J})}o&&o(j)},t.onWheel=function(){N._ts&&N.pause(),Ke()-p>1e3&&(S=0,p=Ke())},t.onChange=function(j,z,J,C,ht){if(Lr!==S&&y(),z&&n&&g(b(C[2]===z?D+(j.startX-j.x):g()+z-C[1])),J){f.offset&&v();var at=ht[2]===J,Bt=at?$+j.startY-j.y:f()+J-ht[1],Y=L(Bt);at&&Bt!==Y&&($+=Y-Bt),f(Y)}(J||z)&&bi()},t.onEnable=function(){nc(c,n?!1:"x"),ie.addEventListener("refresh",K),ke(se,"resize",K),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),R.enable()},t.onDisable=function(){nc(c,!0),ze(se,"resize",K),ie.removeEventListener("refresh",K),R.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ce(t),a.iOS=Oi,Oi&&!f()&&f(1),Oi&&yt.ticker.add(Qn),q=a._dc,N=yt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Op(f,f(),function(){return N.pause()})},onUpdate:bi,onComplete:q.vars.onComplete}),a};ie.sort=function(r){return ee.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};ie.observe=function(r){return new Ce(r)};ie.normalizeScroll=function(r){if(typeof r>"u")return ln;if(r===!0&&ln)return ln.enable();if(r===!1){ln&&ln.kill(),ln=r;return}var t=r instanceof Ce?r:Ty(r);return ln&&ln.target===t.target&&ln.kill(),Or(t.target)&&(ln=t),t};ie.core={_getVelocityProp:Rc,_inputObserver:Fp,_scrollers:ne,_proxies:ui,bridge:{ss:function(){Vn||Br("scrollStart"),Vn=Ke()},ref:function(){return je}}};Ap()&&yt.registerPlugin(ie);var Fc=function(){return Fc=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},Fc.apply(this,arguments)};function Bp(r,t,e){return Math.max(r,Math.min(t,e))}class by{advance(t){var n;if(!this.isRunning)return;let e=!1;if(this.lerp)this.value=function(s,o,a,l){return function(u,h,d){return(1-d)*u+d*h}(s,o,1-Math.exp(-a*l))}(this.value,this.to,60*this.lerp,t),Math.round(this.value)===this.to&&(this.value=this.to,e=!0);else{this.currentTime+=t;const i=Bp(0,this.currentTime/this.duration,1);e=i>=1;const s=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}e&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n=.1,duration:i=1,easing:s=l=>l,onStart:o,onUpdate:a}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}}class Ay{constructor({wrapper:t,content:e,autoResize:n=!0,debounce:i=250}={}){di(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});di(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});di(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,n&&(this.debouncedResize=function(o,a){let l;return function(){let c=arguments,u=this;clearTimeout(l),l=setTimeout(function(){o.apply(u,c)},a)}}(this.resize,i),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class zp{constructor(){this.events={}}emit(t,...e){let n=this.events[t]||[];for(let i=0,s=n.length;i<s;i++)n[i](...e)}on(t,e){var n;return(n=this.events[t])!=null&&n.push(e)||(this.events[t]=[e]),()=>{var i;this.events[t]=(i=this.events[t])==null?void 0:i.filter(s=>e!==s)}}off(t,e){var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}destroy(){this.events={}}}const Nd=100/6;class wy{constructor(t,{wheelMultiplier:e=1,touchMultiplier:n=1}){di(this,"onTouchStart",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});di(this,"onTouchMove",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t,i=-(e-this.touchStart.x)*this.touchMultiplier,s=-(n-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:i,y:s},this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:t})});di(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});di(this,"onWheel",t=>{let{deltaX:e,deltaY:n,deltaMode:i}=t;e*=i===1?Nd:i===2?this.windowWidth:1,n*=i===1?Nd:i===2?this.windowHeight:1,e*=this.wheelMultiplier,n*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:t})});di(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=t,this.wheelMultiplier=e,this.touchMultiplier=n,this.touchStart={x:null,y:null},this.emitter=new zp,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}var Cy=function(){function r(t){var e=t===void 0?{}:t,n=e.wrapper,i=n===void 0?window:n,s=e.content,o=s===void 0?document.documentElement:s,a=e.wheelEventsTarget,l=a===void 0?i:a,c=e.eventsTarget,u=c===void 0?l:c,h=e.smoothWheel,d=h===void 0||h,f=e.syncTouch,g=f!==void 0&&f,_=e.syncTouchLerp,m=_===void 0?.075:_,p=e.touchInertiaMultiplier,M=p===void 0?35:p,S=e.duration,E=e.easing,R=E===void 0?function(Bt){return Math.min(1,1.001-Math.pow(2,-10*Bt))}:E,w=e.lerp,b=w===void 0?!S&&.1:w,L=e.infinite,y=L!==void 0&&L,v=e.orientation,U=v===void 0?"vertical":v,N=e.gestureOrientation,D=N===void 0?"vertical":N,$=e.touchMultiplier,q=$===void 0?1:$,K=e.wheelMultiplier,j=K===void 0?1:K,z=e.autoResize,J=z===void 0||z,C=e.__experimental__naiveDimensions,ht=C!==void 0&&C,at=this;this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=function(Bt){var Y=Bt.deltaX,tt=Bt.deltaY,ct=Bt.event;if(!ct.ctrlKey){var nt=ct.type.includes("touch"),Dt=ct.type.includes("wheel");if(at.options.syncTouch&&nt&&ct.type==="touchstart"&&!at.isStopped&&!at.isLocked)at.reset();else{var Pt=Y===0&&tt===0,F=at.options.gestureOrientation==="vertical"&&tt===0||at.options.gestureOrientation==="horizontal"&&Y===0;if(!Pt&&!F){var Ht=ct.composedPath();if(!(Ht=Ht.slice(0,Ht.indexOf(at.rootElement))).find(function(At){var Ct,B,$t,P,T;return((Ct=At.hasAttribute)===null||Ct===void 0?void 0:Ct.call(At,"data-lenis-prevent"))||nt&&((B=At.hasAttribute)===null||B===void 0?void 0:B.call(At,"data-lenis-prevent-touch"))||Dt&&(($t=At.hasAttribute)===null||$t===void 0?void 0:$t.call(At,"data-lenis-prevent-wheel"))||((P=At.classList)===null||P===void 0?void 0:P.contains("lenis"))&&!(!((T=At.classList)===null||T===void 0)&&T.contains("lenis-stopped"))}))if(at.isStopped||at.isLocked)ct.preventDefault();else{if(at.isSmooth=at.options.syncTouch&&nt||at.options.smoothWheel&&Dt,!at.isSmooth)return at.isScrolling=!1,void at.animate.stop();ct.preventDefault();var Mt=tt;at.options.gestureOrientation==="both"?Mt=Math.abs(tt)>Math.abs(Y)?tt:Y:at.options.gestureOrientation==="horizontal"&&(Mt=Y);var Tt=nt&&at.options.syncTouch,_t=nt&&ct.type==="touchend"&&Math.abs(Mt)>5;_t&&(Mt=at.velocity*at.options.touchInertiaMultiplier),at.scrollTo(at.targetScroll+Mt,Fc({programmatic:!1},Tt?{lerp:_t?at.options.syncTouchLerp:1}:{lerp:at.options.lerp,duration:at.options.duration,easing:at.options.easing}))}}}}},this.onNativeScroll=function(){if(!at.__preventNextScrollEvent&&!at.isScrolling){var Bt=at.animatedScroll;at.animatedScroll=at.targetScroll=at.actualScroll,at.velocity=0,at.direction=Math.sign(at.animatedScroll-Bt),at.emit()}},window.lenisVersion="1.0.45",i!==document.documentElement&&i!==document.body||(i=window),this.options={wrapper:i,content:o,wheelEventsTarget:l,eventsTarget:u,smoothWheel:d,syncTouch:g,syncTouchLerp:m,touchInertiaMultiplier:M,duration:S,easing:R,lerp:b,infinite:y,gestureOrientation:D,orientation:U,touchMultiplier:q,wheelMultiplier:j,autoResize:J,__experimental__naiveDimensions:ht},this.animate=new by,this.emitter=new zp,this.dimensions=new Ay({wrapper:i,content:o,autoResize:J}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=g||d,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new wy(u,{touchMultiplier:q,wheelMultiplier:j}),this.virtualScroll.on("scroll",this.onVirtualScroll)}return r.prototype.destroy=function(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)},r.prototype.on=function(t,e){return this.emitter.on(t,e)},r.prototype.off=function(t,e){return this.emitter.off(t,e)},r.prototype.setScroll=function(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t},r.prototype.resize=function(){this.dimensions.resize()},r.prototype.emit=function(){this.emitter.emit("scroll",this)},r.prototype.reset=function(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()},r.prototype.start=function(){this.isStopped&&(this.isStopped=!1,this.reset())},r.prototype.stop=function(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())},r.prototype.raf=function(t){var e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)},r.prototype.scrollTo=function(t,e){var n=this,i=e===void 0?{}:e,s=i.offset,o=s===void 0?0:s,a=i.immediate,l=a!==void 0&&a,c=i.lock,u=c!==void 0&&c,h=i.duration,d=h===void 0?this.options.duration:h,f=i.easing,g=f===void 0?this.options.easing:f,_=i.lerp,m=_===void 0?!d&&this.options.lerp:_,p=i.onComplete,M=i.force,S=M!==void 0&&M,E=i.programmatic,R=E===void 0||E;if(!this.isStopped&&!this.isLocked||S){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var w=void 0;if(typeof t=="string"?w=document.querySelector(t):t!=null&&t.nodeType&&(w=t),w){if(this.options.wrapper!==window){var b=this.options.wrapper.getBoundingClientRect();o-=this.isHorizontal?b.left:b.top}var L=w.getBoundingClientRect();t=(this.isHorizontal?L.left:L.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=o,t=Math.round(t),this.options.infinite?R&&(this.targetScroll=this.animatedScroll=this.scroll):t=Bp(0,t,this.limit),l)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),void(p==null||p(this));if(!R){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:d,easing:g,lerp:m,onStart:function(){u&&(n.isLocked=!0),n.isScrolling=!0},onUpdate:function(y,v){n.isScrolling=!0,n.velocity=y-n.animatedScroll,n.direction=Math.sign(n.velocity),n.animatedScroll=y,n.setScroll(n.scroll),R&&(n.targetScroll=y),v||n.emit(),v&&(n.reset(),n.emit(),p==null||p(n),n.__preventNextScrollEvent=!0,requestAnimationFrame(function(){delete n.__preventNextScrollEvent}))}})}}},Object.defineProperty(r.prototype,"rootElement",{get:function(){return this.options.wrapper===window?document.documentElement:this.options.wrapper},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"limit",{get:function(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isHorizontal",{get:function(){return this.options.orientation==="horizontal"},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"actualScroll",{get:function(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"scroll",{get:function(){return this.options.infinite?function(e,n){return(e%n+n)%n}(this.animatedScroll,this.limit):this.animatedScroll},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"progress",{get:function(){return this.limit===0?1:this.scroll/this.limit},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isSmooth",{get:function(){return this.__isSmooth},set:function(t){this.__isSmooth!==t&&(this.__isSmooth=t,this.toggleClassName("lenis-smooth",t))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isScrolling",{get:function(){return this.__isScrolling},set:function(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.toggleClassName("lenis-scrolling",t))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isStopped",{get:function(){return this.__isStopped},set:function(t){this.__isStopped!==t&&(this.__isStopped=t,this.toggleClassName("lenis-stopped",t))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isLocked",{get:function(){return this.__isLocked},set:function(t){this.__isLocked!==t&&(this.__isLocked=t,this.toggleClassName("lenis-locked",t))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){var t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isSmooth&&(t+=" lenis-smooth"),t},enumerable:!1,configurable:!0}),r.prototype.toggleClassName=function(t,e){this.rootElement.classList.toggle(t,e),this.emitter.emit("className change",this)},r}();du.registerPlugin(ie);const Ry=new Cy;function kp(r){Ry.raf(r),requestAnimationFrame(kp)}requestAnimationFrame(kp);const Fs=document.createElement("div");Fs.id="cursor";document.body.appendChild(Fs);document.addEventListener("mousemove",r=>{Fs.style.left=`${r.pageX}px`,Fs.style.top=`${r.pageY}px`});new qc;const wn={width:window.innerWidth,height:window.innerHeight},Do=document.querySelector("#canvas"),Bs=new TS,Od=new CS,Hp=60,Py=Hp/2*(Math.PI/180);let Ly=window.innerHeight/2/Math.tan(Py);const zr=new On(Hp,window.innerWidth/window.innerHeight,.1,2e3);zr.position.z=Ly;Bs.add(zr);const Fo=new NS(zr,Do);Fo.enableDamping=!0;Fo.enableZoom=!1;Fo.enablePan=!1;Fo.enableRotate=!1;const Io=new ES({canvas:Do,alpha:!0});Io.setSize(wn.width,wn.height);Io.setPixelRatio(Math.min(window.devicePixelRatio,2));const Dy=new DS(16777215,1);Bs.add(Dy);const Vp=new LS(16777215,1);Vp.position.set(0,1,1).normalize();Bs.add(Vp);let Su=[];for(let r=1;r<=7;r++){const t=new ks(200,300,5),e=[new Fi({color:"gray"}),new Fi({color:"gray"}),new Fi({color:"gray"}),new Fi({color:"gray"}),new Fi({map:Od.load(`img0${r}.jpg`)}),new Fi({map:Od.load(`img0${r}.jpg`)})],n=new ri(t,e);n.position.x=-wn.width/2+wn.width*r/7,n.position.y=wn.height*.75,n.position.z=Math.random()*500-250,n.scale.setScalar(Math.random()*.2+.7),n.rotation.x=Math.random()*Math.PI,n.rotation.y=Math.random()*Math.PI,n.rotation.z=Math.random()*Math.PI,Su.push(n),Bs.add(n)}const Bc=new Yt;Do.addEventListener("mousemove",Iy);function Iy(r){const t=r.currentTarget,e=r.clientX-t.offsetLeft,n=r.clientY-t.offsetTop,i=t.offsetWidth,s=t.offsetHeight;Bc.x=e/i*2-1,Bc.y=-(n/s)*2+1}const Fd=new IS,Gp=()=>{Fo.update(),Su.forEach(t=>{t.rotation.y+=.01,t.rotation.x+=.01,t.rotation.z+=.01,t.position.y+=1.8,t.position.y>wn.height*.8&&(t.position.y=-(wn.height+Math.random()*1e3),t.position.z=Math.random()*500-250)}),Fd.setFromCamera(Bc,zr),Fd.intersectObjects(Bs.children).length>0?(Do.style.cursor="pointer",Fs.classList.add("is-on")):(Do.style.cursor="initial",Fs.classList.remove("is-on")),Io.render(Bs,zr),window.requestAnimationFrame(Gp)};window.addEventListener("load",()=>{Su.forEach(r=>{du.to(r.position,{y:Math.random()*500-250,duration:1.5})})});Gp();window.addEventListener("resize",()=>{wn.width=window.innerWidth,wn.height=window.innerHeight,zr.aspect=wn.width/wn.height,zr.updateProjectionMatrix(),Io.setSize(wn.width,wn.height),Io.setPixelRatio(Math.min(window.devicePixelRatio,2))});
