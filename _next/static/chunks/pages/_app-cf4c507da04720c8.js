(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{98099:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(97117);function i(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>8,t[r+1]=e>>>0,t}function o(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t}function a(e,t){return void 0===t&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function s(e,t){return void 0===t&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function l(e,t){return void 0===t&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}function c(e,t){return void 0===t&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}function u(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>24,t[r+1]=e>>>16,t[r+2]=e>>>8,t[r+3]=e>>>0,t}function d(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24,t}function h(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),u(e/4294967296>>>0,t,r),u(e>>>0,t,r+4),t}function f(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),d(e>>>0,t,r),d(e/4294967296>>>0,t,r+4),t}t.readInt16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16},t.readUint16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])>>>0},t.readInt16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])<<16>>16},t.readUint16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])>>>0},t.writeUint16BE=i,t.writeInt16BE=i,t.writeUint16LE=o,t.writeInt16LE=o,t.readInt32BE=a,t.readUint32BE=s,t.readInt32LE=l,t.readUint32LE=c,t.writeUint32BE=u,t.writeInt32BE=u,t.writeUint32LE=d,t.writeInt32LE=d,t.readInt64BE=function(e,t){void 0===t&&(t=0);var r=a(e,t),n=a(e,t+4);return 4294967296*r+n-(n>>31)*4294967296},t.readUint64BE=function(e,t){return void 0===t&&(t=0),4294967296*s(e,t)+s(e,t+4)},t.readInt64LE=function(e,t){void 0===t&&(t=0);var r=l(e,t);return 4294967296*l(e,t+4)+r-(r>>31)*4294967296},t.readUint64LE=function(e,t){void 0===t&&(t=0);var r=c(e,t);return 4294967296*c(e,t+4)+r},t.writeUint64BE=h,t.writeInt64BE=h,t.writeUint64LE=f,t.writeInt64LE=f,t.readUintBE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw Error("readUintBE: array is too short for the given bitLength");for(var n=0,i=1,o=e/8+r-1;o>=r;o--)n+=t[o]*i,i*=256;return n},t.readUintLE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw Error("readUintLE: array is too short for the given bitLength");for(var n=0,i=1,o=r;o<r+e/8;o++)n+=t[o]*i,i*=256;return n},t.writeUintBE=function(e,t,r,i){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===i&&(i=0),e%8!=0)throw Error("writeUintBE supports only bitLengths divisible by 8");if(!n.isSafeInteger(t))throw Error("writeUintBE value must be an integer");for(var o=1,a=e/8+i-1;a>=i;a--)r[a]=t/o&255,o*=256;return r},t.writeUintLE=function(e,t,r,i){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===i&&(i=0),e%8!=0)throw Error("writeUintLE supports only bitLengths divisible by 8");if(!n.isSafeInteger(t))throw Error("writeUintLE value must be an integer");for(var o=1,a=i;a<i+e/8;a++)r[a]=t/o&255,o*=256;return r},t.readFloat32BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t)},t.readFloat32LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t,!0)},t.readFloat64BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t)},t.readFloat64LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t,!0)},t.writeFloat32BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e),t},t.writeFloat32LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e,!0),t},t.writeFloat64BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e),t},t.writeFloat64LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e,!0),t}},25439:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(98099),i=r(17309);function o(e,t,r,o,a){if(void 0===a&&(a=0),32!==e.length)throw Error("ChaCha: key size must be 32 bytes");if(o.length<r.length)throw Error("ChaCha: destination is shorter than source");if(0===a){if(8!==t.length&&12!==t.length)throw Error("ChaCha nonce must be 8 or 12 bytes");l=(s=new Uint8Array(16)).length-t.length,s.set(t,l)}else{if(16!==t.length)throw Error("ChaCha nonce with counter must be 16 bytes");s=t,l=a}for(var s,l,c=new Uint8Array(64),u=0;u<r.length;u+=64){!function(e,t,r){for(var i=r[3]<<24|r[2]<<16|r[1]<<8|r[0],o=r[7]<<24|r[6]<<16|r[5]<<8|r[4],a=r[11]<<24|r[10]<<16|r[9]<<8|r[8],s=r[15]<<24|r[14]<<16|r[13]<<8|r[12],l=r[19]<<24|r[18]<<16|r[17]<<8|r[16],c=r[23]<<24|r[22]<<16|r[21]<<8|r[20],u=r[27]<<24|r[26]<<16|r[25]<<8|r[24],d=r[31]<<24|r[30]<<16|r[29]<<8|r[28],h=t[3]<<24|t[2]<<16|t[1]<<8|t[0],f=t[7]<<24|t[6]<<16|t[5]<<8|t[4],p=t[11]<<24|t[10]<<16|t[9]<<8|t[8],g=t[15]<<24|t[14]<<16|t[13]<<8|t[12],b=1634760805,w=857760878,m=2036477234,y=1797285236,v=i,x=o,C=a,E=s,k=l,S=c,A=u,$=d,P=h,_=f,D=p,O=g,I=0;I<20;I+=2)P^=b=b+v|0,v^=k=k+(P=P>>>16|P<<16)|0,v=v>>>20|v<<12,_^=w=w+x|0,x^=S=S+(_=_>>>16|_<<16)|0,x=x>>>20|x<<12,D^=m=m+C|0,C^=A=A+(D=D>>>16|D<<16)|0,C=C>>>20|C<<12,O^=y=y+E|0,E^=$=$+(O=O>>>16|O<<16)|0,E=E>>>20|E<<12,D^=m=m+C|0,C^=A=A+(D=D>>>24|D<<8)|0,C=C>>>25|C<<7,O^=y=y+E|0,E^=$=$+(O=O>>>24|O<<8)|0,E=E>>>25|E<<7,_^=w=w+x|0,x^=S=S+(_=_>>>24|_<<8)|0,x=x>>>25|x<<7,P^=b=b+v|0,v^=k=k+(P=P>>>24|P<<8)|0,v=v>>>25|v<<7,O^=b=b+x|0,x^=A=A+(O=O>>>16|O<<16)|0,x=x>>>20|x<<12,P^=w=w+C|0,C^=$=$+(P=P>>>16|P<<16)|0,C=C>>>20|C<<12,_^=m=m+E|0,E^=k=k+(_=_>>>16|_<<16)|0,E=E>>>20|E<<12,D^=y=y+v|0,v^=S=S+(D=D>>>16|D<<16)|0,v=v>>>20|v<<12,_^=m=m+E|0,E^=k=k+(_=_>>>24|_<<8)|0,E=E>>>25|E<<7,D^=y=y+v|0,v^=S=S+(D=D>>>24|D<<8)|0,v=v>>>25|v<<7,P^=w=w+C|0,C^=$=$+(P=P>>>24|P<<8)|0,C=C>>>25|C<<7,O^=b=b+x|0,x^=A=A+(O=O>>>24|O<<8)|0,x=x>>>25|x<<7;n.writeUint32LE(b+1634760805|0,e,0),n.writeUint32LE(w+857760878|0,e,4),n.writeUint32LE(m+2036477234|0,e,8),n.writeUint32LE(y+1797285236|0,e,12),n.writeUint32LE(v+i|0,e,16),n.writeUint32LE(x+o|0,e,20),n.writeUint32LE(C+a|0,e,24),n.writeUint32LE(E+s|0,e,28),n.writeUint32LE(k+l|0,e,32),n.writeUint32LE(S+c|0,e,36),n.writeUint32LE(A+u|0,e,40),n.writeUint32LE($+d|0,e,44),n.writeUint32LE(P+h|0,e,48),n.writeUint32LE(_+f|0,e,52),n.writeUint32LE(D+p|0,e,56),n.writeUint32LE(O+g|0,e,60)}(c,s,e);for(var d=u;d<u+64&&d<r.length;d++)o[d]=r[d]^c[d-u];!function(e,t,r){for(var n=1;r--;)n=n+(255&e[t])|0,e[t]=255&n,n>>>=8,t++;if(n>0)throw Error("ChaCha: counter overflow")}(s,0,l)}return i.wipe(c),0===a&&i.wipe(s),o}t.streamXOR=o,t.stream=function(e,t,r,n){return void 0===n&&(n=0),i.wipe(r),o(e,t,r,r,n)}},15501:function(e,t,r){"use strict";var n=r(25439),i=r(63027),o=r(17309),a=r(98099),s=r(4153);t.Cv=32,t.WH=12,t.pg=16;var l=new Uint8Array(16),c=function(){function e(e){if(this.nonceLength=t.WH,this.tagLength=t.pg,e.length!==t.Cv)throw Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(e)}return e.prototype.seal=function(e,t,r,i){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");var a,s=new Uint8Array(16);s.set(e,s.length-e.length);var l=new Uint8Array(32);n.stream(this._key,s,l,4);var c=t.length+this.tagLength;if(i){if(i.length!==c)throw Error("ChaCha20Poly1305: incorrect destination length");a=i}else a=new Uint8Array(c);return n.streamXOR(this._key,s,t,a,4),this._authenticate(a.subarray(a.length-this.tagLength,a.length),l,a.subarray(0,a.length-this.tagLength),r),o.wipe(s),a},e.prototype.open=function(e,t,r,i){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");if(t.length<this.tagLength)return null;var a,l=new Uint8Array(16);l.set(e,l.length-e.length);var c=new Uint8Array(32);n.stream(this._key,l,c,4);var u=new Uint8Array(this.tagLength);if(this._authenticate(u,c,t.subarray(0,t.length-this.tagLength),r),!s.equal(u,t.subarray(t.length-this.tagLength,t.length)))return null;var d=t.length-this.tagLength;if(i){if(i.length!==d)throw Error("ChaCha20Poly1305: incorrect destination length");a=i}else a=new Uint8Array(d);return n.streamXOR(this._key,l,t.subarray(0,t.length-this.tagLength),a,4),o.wipe(l),a},e.prototype.clean=function(){return o.wipe(this._key),this},e.prototype._authenticate=function(e,t,r,n){var s=new i.Poly1305(t);n&&(s.update(n),n.length%16>0&&s.update(l.subarray(n.length%16))),s.update(r),r.length%16>0&&s.update(l.subarray(r.length%16));var c=new Uint8Array(8);n&&a.writeUint64LE(n.length,c),s.update(c),a.writeUint64LE(r.length,c),s.update(c);for(var u=s.digest(),d=0;d<u.length;d++)e[d]=u[d];s.clean(),o.wipe(u),o.wipe(c)},e}();t.OK=c},4153:function(e,t){"use strict";function r(e,t){if(e.length!==t.length)return 0;for(var r=0,n=0;n<e.length;n++)r|=e[n]^t[n];return 1&r-1>>>8}Object.defineProperty(t,"__esModule",{value:!0}),t.select=function(e,t,r){return~(e-1)&t|e-1&r},t.lessOrEqual=function(e,t){return(0|e)-(0|t)-1>>>31&1},t.compare=r,t.equal=function(e,t){return 0!==e.length&&0!==t.length&&0!==r(e,t)}},79984:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSerializableHash=function(e){return void 0!==e.saveState&&void 0!==e.restoreState&&void 0!==e.cleanSavedState}},512:function(e,t,r){"use strict";var n=r(25629),i=r(17309),o=function(){function e(e,t,r,i){void 0===r&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=i;var o=n.hmac(this._hash,r,t);this._hmac=new n.HMAC(e,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(0===e)throw Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(e){for(var t=new Uint8Array(e),r=0;r<t.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),t[r]=this._buffer[this._bufpos++];return t},e.prototype.clean=function(){this._hmac.clean(),i.wipe(this._buffer),i.wipe(this._counter),this._bufpos=0},e}();t.t=o},25629:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(79984),i=r(4153),o=r(17309),a=function(){function e(e,t){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);t.length>this.blockSize?this._inner.update(t).finish(r).clean():r.set(t);for(var i=0;i<r.length;i++)r[i]^=54;this._inner.update(r);for(var i=0;i<r.length;i++)r[i]^=106;this._outer.update(r),n.isSerializableHash(this._inner)&&n.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),o.wipe(r)}return e.prototype.reset=function(){if(!n.isSerializableHash(this._inner)||!n.isSerializableHash(this._outer))throw Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){n.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),n.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(e){return this._inner.update(e),this},e.prototype.finish=function(e){return this._finished?(this._outer.finish(e),this):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0,this)},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(!n.isSerializableHash(this._inner))throw Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(e){if(!n.isSerializableHash(this._inner)||!n.isSerializableHash(this._outer))throw Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(e){if(!n.isSerializableHash(this._inner))throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},e}();t.HMAC=a,t.hmac=function(e,t,r){var n=new a(e,t);n.update(r);var i=n.digest();return n.clean(),i},t.equal=i.equal},97117:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mul=Math.imul||function(e,t){var r=65535&e,n=65535&t;return r*n+((e>>>16&65535)*n+r*(t>>>16&65535)<<16>>>0)|0},t.add=function(e,t){return e+t|0},t.sub=function(e,t){return e-t|0},t.rotl=function(e,t){return e<<t|e>>>32-t},t.rotr=function(e,t){return e<<32-t|e>>>t},t.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(e){return t.isInteger(e)&&e>=-t.MAX_SAFE_INTEGER&&e<=t.MAX_SAFE_INTEGER}},63027:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4153),i=r(17309);t.DIGEST_LENGTH=16;var o=function(){function e(e){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var r=e[0]|e[1]<<8;this._r[0]=8191&r;var n=e[2]|e[3]<<8;this._r[1]=(r>>>13|n<<3)&8191;var i=e[4]|e[5]<<8;this._r[2]=(n>>>10|i<<6)&7939;var o=e[6]|e[7]<<8;this._r[3]=(i>>>7|o<<9)&8191;var a=e[8]|e[9]<<8;this._r[4]=(o>>>4|a<<12)&255,this._r[5]=a>>>1&8190;var s=e[10]|e[11]<<8;this._r[6]=(a>>>14|s<<2)&8191;var l=e[12]|e[13]<<8;this._r[7]=(s>>>11|l<<5)&8065;var c=e[14]|e[15]<<8;this._r[8]=(l>>>8|c<<8)&8191,this._r[9]=c>>>5&127,this._pad[0]=e[16]|e[17]<<8,this._pad[1]=e[18]|e[19]<<8,this._pad[2]=e[20]|e[21]<<8,this._pad[3]=e[22]|e[23]<<8,this._pad[4]=e[24]|e[25]<<8,this._pad[5]=e[26]|e[27]<<8,this._pad[6]=e[28]|e[29]<<8,this._pad[7]=e[30]|e[31]<<8}return e.prototype._blocks=function(e,t,r){for(var n=this._fin?0:2048,i=this._h[0],o=this._h[1],a=this._h[2],s=this._h[3],l=this._h[4],c=this._h[5],u=this._h[6],d=this._h[7],h=this._h[8],f=this._h[9],p=this._r[0],g=this._r[1],b=this._r[2],w=this._r[3],m=this._r[4],y=this._r[5],v=this._r[6],x=this._r[7],C=this._r[8],E=this._r[9];r>=16;){var k,S=e[t+0]|e[t+1]<<8;i+=8191&S;var A=e[t+2]|e[t+3]<<8;o+=(S>>>13|A<<3)&8191;var $=e[t+4]|e[t+5]<<8;a+=(A>>>10|$<<6)&8191;var P=e[t+6]|e[t+7]<<8;s+=($>>>7|P<<9)&8191;var _=e[t+8]|e[t+9]<<8;l+=(P>>>4|_<<12)&8191,c+=_>>>1&8191;var D=e[t+10]|e[t+11]<<8;u+=(_>>>14|D<<2)&8191;var O=e[t+12]|e[t+13]<<8;d+=(D>>>11|O<<5)&8191;var I=e[t+14]|e[t+15]<<8;h+=(O>>>8|I<<8)&8191,f+=I>>>5|n;var T=0;T=(k=0+i*p+o*(5*E)+a*(5*C)+s*(5*x)+l*(5*v))>>>13,k&=8191,k+=c*(5*y)+u*(5*m)+d*(5*w)+h*(5*b)+f*(5*g),T+=k>>>13,k&=8191;var R=T;R+=i*g+o*p+a*(5*E)+s*(5*C)+l*(5*x),T=R>>>13,R&=8191,R+=c*(5*v)+u*(5*y)+d*(5*m)+h*(5*w)+f*(5*b),T+=R>>>13,R&=8191;var N=T;N+=i*b+o*g+a*p+s*(5*E)+l*(5*C),T=N>>>13,N&=8191,N+=c*(5*x)+u*(5*v)+d*(5*y)+h*(5*m)+f*(5*w),T+=N>>>13,N&=8191;var j=T;j+=i*w+o*b+a*g+s*p+l*(5*E),T=j>>>13,j&=8191,j+=c*(5*C)+u*(5*x)+d*(5*v)+h*(5*y)+f*(5*m),T+=j>>>13,j&=8191;var M=T;M+=i*m+o*w+a*b+s*g+l*p,T=M>>>13,M&=8191,M+=c*(5*E)+u*(5*C)+d*(5*x)+h*(5*v)+f*(5*y),T+=M>>>13,M&=8191;var B=T;B+=i*y+o*m+a*w+s*b+l*g,T=B>>>13,B&=8191,B+=c*p+u*(5*E)+d*(5*C)+h*(5*x)+f*(5*v),T+=B>>>13,B&=8191;var U=T;U+=i*v+o*y+a*m+s*w+l*b,T=U>>>13,U&=8191,U+=c*g+u*p+d*(5*E)+h*(5*C)+f*(5*x),T+=U>>>13,U&=8191;var L=T;L+=i*x+o*v+a*y+s*m+l*w,T=L>>>13,L&=8191,L+=c*b+u*g+d*p+h*(5*E)+f*(5*C),T+=L>>>13,L&=8191;var z=T;z+=i*C+o*x+a*v+s*y+l*m,T=z>>>13,z&=8191,z+=c*w+u*b+d*g+h*p+f*(5*E),T+=z>>>13,z&=8191;var F=T;F+=i*E+o*C+a*x+s*v+l*y,T=F>>>13,F&=8191,F+=c*m+u*w+d*b+h*g+f*p,T+=F>>>13,F&=8191,k=8191&(T=(T=(T<<2)+T|0)+k|0),T>>>=13,R+=T,i=k,o=R,a=N,s=j,l=M,c=B,u=U,d=L,h=z,f=F,t+=16,r-=16}this._h[0]=i,this._h[1]=o,this._h[2]=a,this._h[3]=s,this._h[4]=l,this._h[5]=c,this._h[6]=u,this._h[7]=d,this._h[8]=h,this._h[9]=f},e.prototype.finish=function(e,t){void 0===t&&(t=0);var r,n,i,o,a=new Uint16Array(10);if(this._leftover){for(o=this._leftover,this._buffer[o++]=1;o<16;o++)this._buffer[o]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(r=this._h[1]>>>13,this._h[1]&=8191,o=2;o<10;o++)this._h[o]+=r,r=this._h[o]>>>13,this._h[o]&=8191;for(this._h[0]+=5*r,r=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=r,r=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=r,a[0]=this._h[0]+5,r=a[0]>>>13,a[0]&=8191,o=1;o<10;o++)a[o]=this._h[o]+r,r=a[o]>>>13,a[o]&=8191;for(a[9]-=8192,n=(1^r)-1,o=0;o<10;o++)a[o]&=n;for(o=0,n=~n;o<10;o++)this._h[o]=this._h[o]&n|a[o];for(o=1,this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,i=this._h[0]+this._pad[0],this._h[0]=65535&i;o<8;o++)i=(this._h[o]+this._pad[o]|0)+(i>>>16)|0,this._h[o]=65535&i;return e[t+0]=this._h[0]>>>0,e[t+1]=this._h[0]>>>8,e[t+2]=this._h[1]>>>0,e[t+3]=this._h[1]>>>8,e[t+4]=this._h[2]>>>0,e[t+5]=this._h[2]>>>8,e[t+6]=this._h[3]>>>0,e[t+7]=this._h[3]>>>8,e[t+8]=this._h[4]>>>0,e[t+9]=this._h[4]>>>8,e[t+10]=this._h[5]>>>0,e[t+11]=this._h[5]>>>8,e[t+12]=this._h[6]>>>0,e[t+13]=this._h[6]>>>8,e[t+14]=this._h[7]>>>0,e[t+15]=this._h[7]>>>8,this._finished=!0,this},e.prototype.update=function(e){var t,r=0,n=e.length;if(this._leftover){(t=16-this._leftover)>n&&(t=n);for(var i=0;i<t;i++)this._buffer[this._leftover+i]=e[r+i];if(n-=t,r+=t,this._leftover+=t,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(n>=16&&(t=n-n%16,this._blocks(e,r,t),r+=t,n-=t),n){for(var i=0;i<n;i++)this._buffer[this._leftover+i]=e[r+i];this._leftover+=n}return this},e.prototype.digest=function(){if(this._finished)throw Error("Poly1305 was finished");var e=new Uint8Array(16);return this.finish(e),e},e.prototype.clean=function(){return i.wipe(this._buffer),i.wipe(this._r),i.wipe(this._h),i.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},e}();t.Poly1305=o,t.oneTimeAuth=function(e,t){var r=new o(e);r.update(t);var n=r.digest();return r.clean(),n},t.equal=function(e,r){return e.length===t.DIGEST_LENGTH&&r.length===t.DIGEST_LENGTH&&n.equal(e,r)}},31416:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;let n=r(46008),i=r(98099),o=r(17309);function a(e,r=t.defaultRandomSource){return r.randomBytes(e)}t.defaultRandomSource=new n.SystemRandomSource,t.randomBytes=a,t.randomUint32=function(e=t.defaultRandomSource){let r=a(4,e),n=(0,i.readUint32LE)(r);return(0,o.wipe)(r),n};let s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function l(e,r=s,n=t.defaultRandomSource){if(r.length<2)throw Error("randomString charset is too short");if(r.length>256)throw Error("randomString charset is too long");let i="",l=r.length,c=256-256%l;for(;e>0;){let t=a(Math.ceil(256*e/c),n);for(let n=0;n<t.length&&e>0;n++){let o=t[n];o<c&&(i+=r.charAt(o%l),e--)}(0,o.wipe)(t)}return i}t.randomString=l,t.randomStringForEntropy=function(e,r=s,n=t.defaultRandomSource){let i=Math.ceil(e/(Math.log(r.length)/Math.LN2));return l(i,r,n)}},75455:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BrowserRandomSource=void 0,t.BrowserRandomSource=class{constructor(){this.isAvailable=!1,this.isInstantiated=!1;let e="undefined"!=typeof self?self.crypto||self.msCrypto:null;e&&void 0!==e.getRandomValues&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Browser random byte generator is not available.");let t=new Uint8Array(e);for(let e=0;e<t.length;e+=65536)this._crypto.getRandomValues(t.subarray(e,e+Math.min(t.length-e,65536)));return t}}},58871:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NodeRandomSource=void 0;let n=r(17309);t.NodeRandomSource=class{constructor(){this.isAvailable=!1,this.isInstantiated=!1;{let e=r(35883);e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Node.js random byte generator is not available.");let t=this._crypto.randomBytes(e);if(t.length!==e)throw Error("NodeRandomSource: got fewer bytes than requested");let r=new Uint8Array(e);for(let e=0;e<r.length;e++)r[e]=t[e];return(0,n.wipe)(t),r}}},46008:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SystemRandomSource=void 0;let n=r(75455),i=r(58871);t.SystemRandomSource=class{constructor(){if(this.isAvailable=!1,this.name="",this._source=new n.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new i.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw Error("System random byte generator is not available.");return this._source.randomBytes(e)}}},73294:function(e,t,r){"use strict";var n=r(98099),i=r(17309);t.k=32,t.cn=64;var o=function(){function e(){this.digestLength=t.k,this.blockSize=t.cn,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return e.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},e.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},e.prototype.clean=function(){i.wipe(this._buffer),i.wipe(this._temp),this.reset()},e.prototype.update=function(e,t){if(void 0===t&&(t=e.length),this._finished)throw Error("SHA256: can't update because hash was finished.");var r=0;if(this._bytesHashed+=t,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&t>0;)this._buffer[this._bufferLength++]=e[r++],t--;this._bufferLength===this.blockSize&&(s(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(t>=this.blockSize&&(r=s(this._temp,this._state,e,r,t),t%=this.blockSize);t>0;)this._buffer[this._bufferLength++]=e[r++],t--;return this},e.prototype.finish=function(e){if(!this._finished){var t=this._bytesHashed,r=this._bufferLength,i=t%64<56?64:128;this._buffer[r]=128;for(var o=r+1;o<i-8;o++)this._buffer[o]=0;n.writeUint32BE(t/536870912|0,this._buffer,i-8),n.writeUint32BE(t<<3,this._buffer,i-4),s(this._temp,this._state,this._buffer,0,i),this._finished=!0}for(var o=0;o<this.digestLength/4;o++)n.writeUint32BE(this._state[o],e,4*o);return this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(this._finished)throw Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},e.prototype.restoreState=function(e){return this._state.set(e.state),this._bufferLength=e.bufferLength,e.buffer&&this._buffer.set(e.buffer),this._bytesHashed=e.bytesHashed,this._finished=!1,this},e.prototype.cleanSavedState=function(e){i.wipe(e.state),e.buffer&&i.wipe(e.buffer),e.bufferLength=0,e.bytesHashed=0},e}();t.mE=o;var a=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function s(e,t,r,i,o){for(;o>=64;){for(var s=t[0],l=t[1],c=t[2],u=t[3],d=t[4],h=t[5],f=t[6],p=t[7],g=0;g<16;g++){var b=i+4*g;e[g]=n.readUint32BE(r,b)}for(var g=16;g<64;g++){var w=e[g-2],m=(w>>>17|w<<15)^(w>>>19|w<<13)^w>>>10,y=((w=e[g-15])>>>7|w<<25)^(w>>>18|w<<14)^w>>>3;e[g]=(m+e[g-7]|0)+(y+e[g-16]|0)}for(var g=0;g<64;g++){var m=(((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+(d&h^~d&f)|0)+(p+(a[g]+e[g]|0)|0)|0,y=((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+(s&l^s&c^l&c)|0;p=f,f=h,h=d,d=u+m|0,u=c,c=l,l=s,s=m+y|0}t[0]+=s,t[1]+=l,t[2]+=c,t[3]+=u,t[4]+=d,t[5]+=h,t[6]+=f,t[7]+=p,i+=64,o-=64}return i}t.vp=function(e){var t=new o;t.update(e);var r=t.digest();return t.clean(),r}},17309:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wipe=function(e){for(var t=0;t<e.length;t++)e[t]=0;return e}},57664:function(e,t,r){"use strict";t.gi=t.Au=t.KS=t.kz=void 0;let n=r(31416),i=r(17309);function o(e){let t=new Float64Array(16);if(e)for(let r=0;r<e.length;r++)t[r]=e[r];return t}t.kz=32,t.KS=32;let a=new Uint8Array(32);a[0]=9;let s=o([56129,1]);function l(e){let t=1;for(let r=0;r<16;r++){let n=e[r]+t+65535;t=Math.floor(n/65536),e[r]=n-65536*t}e[0]+=t-1+37*(t-1)}function c(e,t,r){let n=~(r-1);for(let r=0;r<16;r++){let i=n&(e[r]^t[r]);e[r]^=i,t[r]^=i}}function u(e,t,r){for(let n=0;n<16;n++)e[n]=t[n]+r[n]}function d(e,t,r){for(let n=0;n<16;n++)e[n]=t[n]-r[n]}function h(e,t,r){let n,i,o=0,a=0,s=0,l=0,c=0,u=0,d=0,h=0,f=0,p=0,g=0,b=0,w=0,m=0,y=0,v=0,x=0,C=0,E=0,k=0,S=0,A=0,$=0,P=0,_=0,D=0,O=0,I=0,T=0,R=0,N=0,j=r[0],M=r[1],B=r[2],U=r[3],L=r[4],z=r[5],F=r[6],W=r[7],H=r[8],q=r[9],G=r[10],Z=r[11],V=r[12],K=r[13],Q=r[14],Y=r[15];o+=(n=t[0])*j,a+=n*M,s+=n*B,l+=n*U,c+=n*L,u+=n*z,d+=n*F,h+=n*W,f+=n*H,p+=n*q,g+=n*G,b+=n*Z,w+=n*V,m+=n*K,y+=n*Q,v+=n*Y,a+=(n=t[1])*j,s+=n*M,l+=n*B,c+=n*U,u+=n*L,d+=n*z,h+=n*F,f+=n*W,p+=n*H,g+=n*q,b+=n*G,w+=n*Z,m+=n*V,y+=n*K,v+=n*Q,x+=n*Y,s+=(n=t[2])*j,l+=n*M,c+=n*B,u+=n*U,d+=n*L,h+=n*z,f+=n*F,p+=n*W,g+=n*H,b+=n*q,w+=n*G,m+=n*Z,y+=n*V,v+=n*K,x+=n*Q,C+=n*Y,l+=(n=t[3])*j,c+=n*M,u+=n*B,d+=n*U,h+=n*L,f+=n*z,p+=n*F,g+=n*W,b+=n*H,w+=n*q,m+=n*G,y+=n*Z,v+=n*V,x+=n*K,C+=n*Q,E+=n*Y,c+=(n=t[4])*j,u+=n*M,d+=n*B,h+=n*U,f+=n*L,p+=n*z,g+=n*F,b+=n*W,w+=n*H,m+=n*q,y+=n*G,v+=n*Z,x+=n*V,C+=n*K,E+=n*Q,k+=n*Y,u+=(n=t[5])*j,d+=n*M,h+=n*B,f+=n*U,p+=n*L,g+=n*z,b+=n*F,w+=n*W,m+=n*H,y+=n*q,v+=n*G,x+=n*Z,C+=n*V,E+=n*K,k+=n*Q,S+=n*Y,d+=(n=t[6])*j,h+=n*M,f+=n*B,p+=n*U,g+=n*L,b+=n*z,w+=n*F,m+=n*W,y+=n*H,v+=n*q,x+=n*G,C+=n*Z,E+=n*V,k+=n*K,S+=n*Q,A+=n*Y,h+=(n=t[7])*j,f+=n*M,p+=n*B,g+=n*U,b+=n*L,w+=n*z,m+=n*F,y+=n*W,v+=n*H,x+=n*q,C+=n*G,E+=n*Z,k+=n*V,S+=n*K,A+=n*Q,$+=n*Y,f+=(n=t[8])*j,p+=n*M,g+=n*B,b+=n*U,w+=n*L,m+=n*z,y+=n*F,v+=n*W,x+=n*H,C+=n*q,E+=n*G,k+=n*Z,S+=n*V,A+=n*K,$+=n*Q,P+=n*Y,p+=(n=t[9])*j,g+=n*M,b+=n*B,w+=n*U,m+=n*L,y+=n*z,v+=n*F,x+=n*W,C+=n*H,E+=n*q,k+=n*G,S+=n*Z,A+=n*V,$+=n*K,P+=n*Q,_+=n*Y,g+=(n=t[10])*j,b+=n*M,w+=n*B,m+=n*U,y+=n*L,v+=n*z,x+=n*F,C+=n*W,E+=n*H,k+=n*q,S+=n*G,A+=n*Z,$+=n*V,P+=n*K,_+=n*Q,D+=n*Y,b+=(n=t[11])*j,w+=n*M,m+=n*B,y+=n*U,v+=n*L,x+=n*z,C+=n*F,E+=n*W,k+=n*H,S+=n*q,A+=n*G,$+=n*Z,P+=n*V,_+=n*K,D+=n*Q,O+=n*Y,w+=(n=t[12])*j,m+=n*M,y+=n*B,v+=n*U,x+=n*L,C+=n*z,E+=n*F,k+=n*W,S+=n*H,A+=n*q,$+=n*G,P+=n*Z,_+=n*V,D+=n*K,O+=n*Q,I+=n*Y,m+=(n=t[13])*j,y+=n*M,v+=n*B,x+=n*U,C+=n*L,E+=n*z,k+=n*F,S+=n*W,A+=n*H,$+=n*q,P+=n*G,_+=n*Z,D+=n*V,O+=n*K,I+=n*Q,T+=n*Y,y+=(n=t[14])*j,v+=n*M,x+=n*B,C+=n*U,E+=n*L,k+=n*z,S+=n*F,A+=n*W,$+=n*H,P+=n*q,_+=n*G,D+=n*Z,O+=n*V,I+=n*K,T+=n*Q,R+=n*Y,v+=(n=t[15])*j,x+=n*M,C+=n*B,E+=n*U,k+=n*L,S+=n*z,A+=n*F,$+=n*W,P+=n*H,_+=n*q,D+=n*G,O+=n*Z,I+=n*V,T+=n*K,R+=n*Q,N+=n*Y,o+=38*x,a+=38*C,s+=38*E,l+=38*k,c+=38*S,u+=38*A,d+=38*$,h+=38*P,f+=38*_,p+=38*D,g+=38*O,b+=38*I,w+=38*T,m+=38*R,y+=38*N,i=Math.floor((n=o+(i=1)+65535)/65536),o=n-65536*i,i=Math.floor((n=a+i+65535)/65536),a=n-65536*i,i=Math.floor((n=s+i+65535)/65536),s=n-65536*i,i=Math.floor((n=l+i+65535)/65536),l=n-65536*i,i=Math.floor((n=c+i+65535)/65536),c=n-65536*i,i=Math.floor((n=u+i+65535)/65536),u=n-65536*i,i=Math.floor((n=d+i+65535)/65536),d=n-65536*i,i=Math.floor((n=h+i+65535)/65536),h=n-65536*i,i=Math.floor((n=f+i+65535)/65536),f=n-65536*i,i=Math.floor((n=p+i+65535)/65536),p=n-65536*i,i=Math.floor((n=g+i+65535)/65536),g=n-65536*i,i=Math.floor((n=b+i+65535)/65536),b=n-65536*i,i=Math.floor((n=w+i+65535)/65536),w=n-65536*i,i=Math.floor((n=m+i+65535)/65536),m=n-65536*i,i=Math.floor((n=y+i+65535)/65536),y=n-65536*i,i=Math.floor((n=v+i+65535)/65536),v=n-65536*i,o+=i-1+37*(i-1),i=Math.floor((n=o+(i=1)+65535)/65536),o=n-65536*i,i=Math.floor((n=a+i+65535)/65536),a=n-65536*i,i=Math.floor((n=s+i+65535)/65536),s=n-65536*i,i=Math.floor((n=l+i+65535)/65536),l=n-65536*i,i=Math.floor((n=c+i+65535)/65536),c=n-65536*i,i=Math.floor((n=u+i+65535)/65536),u=n-65536*i,i=Math.floor((n=d+i+65535)/65536),d=n-65536*i,i=Math.floor((n=h+i+65535)/65536),h=n-65536*i,i=Math.floor((n=f+i+65535)/65536),f=n-65536*i,i=Math.floor((n=p+i+65535)/65536),p=n-65536*i,i=Math.floor((n=g+i+65535)/65536),g=n-65536*i,i=Math.floor((n=b+i+65535)/65536),b=n-65536*i,i=Math.floor((n=w+i+65535)/65536),w=n-65536*i,i=Math.floor((n=m+i+65535)/65536),m=n-65536*i,i=Math.floor((n=y+i+65535)/65536),y=n-65536*i,i=Math.floor((n=v+i+65535)/65536),v=n-65536*i,o+=i-1+37*(i-1),e[0]=o,e[1]=a,e[2]=s,e[3]=l,e[4]=c,e[5]=u,e[6]=d,e[7]=h,e[8]=f,e[9]=p,e[10]=g,e[11]=b,e[12]=w,e[13]=m,e[14]=y,e[15]=v}function f(e,t){let r=new Uint8Array(32),n=new Float64Array(80),i=o(),a=o(),f=o(),p=o(),g=o(),b=o();for(let t=0;t<31;t++)r[t]=e[t];r[31]=127&e[31]|64,r[0]&=248,function(e,t){for(let r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}(n,t);for(let e=0;e<16;e++)a[e]=n[e];i[0]=p[0]=1;for(let e=254;e>=0;--e){let t=r[e>>>3]>>>(7&e)&1;c(i,a,t),c(f,p,t),u(g,i,f),d(i,i,f),u(f,a,p),d(a,a,p),h(p,g,g),h(b,i,i),h(i,f,i),h(f,a,g),u(g,i,f),d(i,i,f),h(a,i,i),d(f,p,b),h(i,f,s),u(i,i,p),h(f,f,i),h(i,p,b),h(p,a,n),h(a,g,g),c(i,a,t),c(f,p,t)}for(let e=0;e<16;e++)n[e+16]=i[e],n[e+32]=f[e],n[e+48]=a[e],n[e+64]=p[e];let w=n.subarray(32),m=n.subarray(16);!function(e,t){let r=o();for(let e=0;e<16;e++)r[e]=t[e];for(let e=253;e>=0;e--)h(r,r,r),2!==e&&4!==e&&h(r,r,t);for(let t=0;t<16;t++)e[t]=r[t]}(w,w),h(m,m,w);let y=new Uint8Array(32);return!function(e,t){let r=o(),n=o();for(let e=0;e<16;e++)n[e]=t[e];l(n),l(n),l(n);for(let e=0;e<2;e++){r[0]=n[0]-65517;for(let e=1;e<15;e++)r[e]=n[e]-65535-(r[e-1]>>16&1),r[e-1]&=65535;r[15]=n[15]-32767-(r[14]>>16&1);let e=r[15]>>16&1;r[14]&=65535,c(n,r,1-e)}for(let t=0;t<16;t++)e[2*t]=255&n[t],e[2*t+1]=n[t]>>8}(y,m),y}t.Au=function(e){let r=(0,n.randomBytes)(32,e),o=function(e){if(e.length!==t.KS)throw Error(`x25519: seed must be ${t.KS} bytes`);let r=new Uint8Array(e),n=f(r,a);return{publicKey:n,secretKey:r}}(r);return(0,i.wipe)(r),o},t.gi=function(e,r,n=!1){if(e.length!==t.kz)throw Error("X25519: incorrect secret key length");if(r.length!==t.kz)throw Error("X25519: incorrect public key length");let i=f(e,r);if(n){let e=0;for(let t=0;t<i.length;t++)e|=i[t];if(0===e)throw Error("X25519: invalid shared key")}return i}},61882:function(){},36900:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(70655);n.__exportStar(r(46869),t),n.__exportStar(r(88033),t)},46869:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_THOUSAND=t.ONE_HUNDRED=void 0,t.ONE_HUNDRED=100,t.ONE_THOUSAND=1e3},88033:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=5*t.ONE_MINUTE,t.TEN_MINUTES=10*t.ONE_MINUTE,t.THIRTY_MINUTES=30*t.ONE_MINUTE,t.SIXTY_MINUTES=60*t.ONE_MINUTE,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=3*t.ONE_HOUR,t.SIX_HOURS=6*t.ONE_HOUR,t.TWELVE_HOURS=12*t.ONE_HOUR,t.TWENTY_FOUR_HOURS=24*t.ONE_HOUR,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=3*t.ONE_DAY,t.FIVE_DAYS=5*t.ONE_DAY,t.SEVEN_DAYS=7*t.ONE_DAY,t.THIRTY_DAYS=30*t.ONE_DAY,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=2*t.ONE_WEEK,t.THREE_WEEKS=3*t.ONE_WEEK,t.FOUR_WEEKS=4*t.ONE_WEEK,t.ONE_YEAR=365*t.ONE_DAY},66736:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(70655);n.__exportStar(r(44273),t),n.__exportStar(r(47001),t),n.__exportStar(r(52939),t),n.__exportStar(r(36900),t)},52939:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(70655);n.__exportStar(r(88766),t)},88766:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IWatch=void 0,t.IWatch=class{}},83207:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fromMiliseconds=t.toMiliseconds=void 0;let n=r(36900);t.toMiliseconds=function(e){return e*n.ONE_THOUSAND},t.fromMiliseconds=function(e){return Math.floor(e/n.ONE_THOUSAND)}},83873:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise(t=>{setTimeout(()=>{t(!0)},e)})}},44273:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(70655);n.__exportStar(r(83873),t),n.__exportStar(r(83207),t)},47001:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Watch=void 0;class r{constructor(){this.timestamps=new Map}start(e){if(this.timestamps.has(e))throw Error(`Watch already started for label: ${e}`);this.timestamps.set(e,{started:Date.now()})}stop(e){let t=this.get(e);if(void 0!==t.elapsed)throw Error(`Watch already stopped for label: ${e}`);let r=Date.now()-t.started;this.timestamps.set(e,{started:t.started,elapsed:r})}get(e){let t=this.timestamps.get(e);if(void 0===t)throw Error(`No timestamp found for label: ${e}`);return t}elapsed(e){let t=this.get(e),r=t.elapsed||Date.now()-t.started;return r}}t.Watch=r,t.default=r},5015:function(e,t,r){"use strict";r.d(t,{AW:function(){return D},O6:function(){return tb},rV:function(){return T},gn:function(){return ep},H1:function(){return el},hF:function(){return ec},WG:function(){return U},pe:function(){return z},m$:function(){return j},vB:function(){return F},HI:function(){return L},E0:function(){return eb},Gq:function(){return eh},$0:function(){return ei},Z4:function(){return ed},Bv:function(){return eP},Au:function(){return R},jd:function(){return N},gu:function(){return $},D:function(){return en},Z7:function(){return eq},cO:function(){return ev},_H:function(){return ey},fc:function(){return eU},D6:function(){return eG},Hh:function(){return em},Ym:function(){return M},rj:function(){return B},jU:function(){return et},gp:function(){return eL},rF:function(){return tc},Bw:function(){return eg},UG:function(){return J},Gg:function(){return th},xW:function(){return e1},b$:function(){return ee},Ih:function(){return eX},h1:function(){return e2},Q8:function(){return q},o8:function(){return eK},qt:function(){return eZ},Dd:function(){return e5},$t:function(){return tr},nf:function(){return to},Q0:function(){return te},in:function(){return e8},p8:function(){return ta},sI:function(){return tl},al:function(){return ts},L5:function(){return eV},EJ:function(){return tt},Z2:function(){return e7},PM:function(){return e9},hH:function(){return tn},ON:function(){return td},n:function(){return e4},JT:function(){return ti},M_:function(){return eQ},jv:function(){return e0},KC:function(){return ea},eG:function(){return ew},fK:function(){return eF},IP:function(){return es},DQ:function(){return A},iP:function(){return ef},M:function(){return ez},he:function(){return e$},uw:function(){return tp},Ll:function(){return W},EN:function(){return H}});var n=r(15501),i=r(512),o=r(31416),a=r(73294),s=r(57664),l=r(37466),c=r(34155),u=function(e,t,r){if(r||2==arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))},d=function(e,t,r){this.name=e,this.version=t,this.os=r,this.type="browser"},h=function(e){this.version=e,this.type="node",this.name="node",this.os=c.platform},f=function(e,t,r,n){this.name=e,this.version=t,this.os=r,this.bot=n,this.type="bot-device"},p=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},g=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},b=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,w=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],m=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function y(e){var t=""!==e&&w.reduce(function(t,r){var n=r[0],i=r[1];if(t)return t;var o=i.exec(e);return!!o&&[n,o]},!1);if(!t)return null;var r=t[0],n=t[1];if("searchbot"===r)return new p;var i=n[1]&&n[1].split(".").join("_").split("_").slice(0,3);i?i.length<3&&(i=u(u([],i,!0),function(e){for(var t=[],r=0;r<e;r++)t.push("0");return t}(3-i.length),!0)):i=[];var o=i.join("."),a=function(e){for(var t=0,r=m.length;t<r;t++){var n=m[t],i=n[0];if(n[1].exec(e))return i}return null}(e),s=b.exec(e);return s&&s[1]?new f(r,o,a,s[1]):new d(r,o,a)}var v=r(66736),x=r(62873),C=r(65755),E=r(66151);r(61882);let k={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}};var S=r(34155);function A(e){let[t,r]=e.split(":");return{namespace:t,reference:r}}function $(e,t=[]){let r=[];return Object.keys(e).forEach(n=>{if(t.length&&!t.includes(n))return;let i=e[n];r.push(...i.accounts)}),r}function P(e,t){return e.includes(":")?[e]:t.chains||[]}let _="base10",D="base16",O="base64pad",I="utf8",T=1;function R(){let e=s.Au();return{privateKey:(0,l.BB)(e.secretKey,D),publicKey:(0,l.BB)(e.publicKey,D)}}function N(){let e=(0,o.randomBytes)(32);return(0,l.BB)(e,D)}function j(e,t){let r=s.gi((0,l.mL)(e,D),(0,l.mL)(t,D),!0),n=new i.t(a.mE,r).expand(32);return(0,l.BB)(n,D)}function M(e){let t=(0,a.vp)((0,l.mL)(e,D));return(0,l.BB)(t,D)}function B(e){let t=(0,a.vp)((0,l.mL)(e,I));return(0,l.BB)(t,D)}function U(e){return Number((0,l.BB)(e,_))}function L(e){var t;let r=(t="u">typeof e.type?e.type:0,(0,l.mL)(`${t}`,_));if(U(r)===T&&typeof e.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");let i="u">typeof e.senderPublicKey?(0,l.mL)(e.senderPublicKey,D):void 0,a="u">typeof e.iv?(0,l.mL)(e.iv,D):(0,o.randomBytes)(12),s=new n.OK((0,l.mL)(e.symKey,D)).seal(a,(0,l.mL)(e.message,I));return function(e){if(U(e.type)===T){if(typeof e.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");return(0,l.BB)((0,l.zo)([e.type,e.senderPublicKey,e.iv,e.sealed]),O)}return(0,l.BB)((0,l.zo)([e.type,e.iv,e.sealed]),O)}({type:r,sealed:s,iv:a,senderPublicKey:i})}function z(e){let t=new n.OK((0,l.mL)(e.symKey,D)),{sealed:r,iv:i}=F(e.encoded),o=t.open(i,r);if(null===o)throw Error("Failed to decrypt");return(0,l.BB)(o,I)}function F(e){let t=(0,l.mL)(e,O),r=t.slice(0,1);if(U(r)===T){let e=t.slice(1,33),n=t.slice(33,45),i=t.slice(45);return{type:r,sealed:i,iv:n,senderPublicKey:e}}let n=t.slice(1,13),i=t.slice(13);return{type:r,sealed:i,iv:n}}function W(e,t){let r=F(e);return H({type:U(r.type),senderPublicKey:"u">typeof r.senderPublicKey?(0,l.BB)(r.senderPublicKey,D):void 0,receiverPublicKey:t?.receiverPublicKey})}function H(e){let t=e?.type||0;if(t===T){if(typeof e?.senderPublicKey>"u")throw Error("missing sender public key");if(typeof e?.receiverPublicKey>"u")throw Error("missing receiver public key")}return{type:t,senderPublicKey:e?.senderPublicKey,receiverPublicKey:e?.receiverPublicKey}}function q(e){return e.type===T&&"string"==typeof e.senderPublicKey&&"string"==typeof e.receiverPublicKey}var G=Object.defineProperty,Z=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,Q=(e,t,r)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Y=(e,t)=>{for(var r in t||(t={}))V.call(t,r)&&Q(e,r,t[r]);if(Z)for(var r of Z(t))K.call(t,r)&&Q(e,r,t[r]);return e};let X={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"};function J(){return"u">typeof S&&"u">typeof S.versions&&"u">typeof S.versions.node}function ee(){return!(0,x.getDocument)()&&!!(0,x.getNavigator)()&&"ReactNative"===navigator.product}function et(){return!J()&&!!(0,x.getNavigator)()}function er(){return ee()?X.reactNative:J()?X.node:et()?X.browser:X.unknown}function en(){return(0,C.D)()||{name:"",description:"",url:"",icons:[""]}}function ei({protocol:e,version:t,relayUrl:n,sdkVersion:i,auth:o,projectId:a,useOnCloseEvent:s}){var l;let u;let d=n.split("?"),f=function(e,t,n){let i=function(){var e;if(er()===X.reactNative&&"u">typeof r.g&&"u">typeof(null==r.g?void 0:r.g.Platform)){let{OS:e,Version:t}=r.g.Platform;return[e,t].join("-")}let t=e?y(e):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new g:"undefined"!=typeof navigator?y(navigator.userAgent):void 0!==c&&c.version?new h(c.version.slice(1)):null;if(null===t)return"unknown";let n=t.os?t.os.replace(" ","").toLowerCase():"unknown";return"browser"===t.type?[n,t.name,t.version].join("-"):[n,t.version].join("-")}(),o=function(){var e;let t=er();return t===X.browser?[t,(null==(e=(0,x.getLocation)())?void 0:e.host)||"unknown"].join(":"):t}();return[[e,t].join("-"),["js",n].join("-"),i,o].join("/")}(e,t,i),p=(l=d[1]||"",u=Y(Y({},u=E.parse(l)),{auth:o,ua:f,projectId:a,useOnCloseEvent:s||void 0}),l=E.stringify(u));return d[0]+"?"+p}function eo(e,t){return e.filter(e=>t.includes(e)).length===e.length}function ea(e){return Object.fromEntries(e.entries())}function es(e){return new Map(Object.entries(e))}function el(e=v.FIVE_MINUTES,t){let r,n,i;let o=(0,v.toMiliseconds)(e||v.FIVE_MINUTES);return{resolve:e=>{i&&r&&(clearTimeout(i),r(e))},reject:e=>{i&&n&&(clearTimeout(i),n(e))},done:()=>new Promise((e,a)=>{i=setTimeout(()=>{a(Error(t))},o),r=e,n=a})}}function ec(e,t,r){return new Promise(async(n,i)=>{let o=setTimeout(()=>i(Error(r)),t);try{let t=await e;n(t)}catch(e){i(e)}clearTimeout(o)})}function eu(e,t){if("string"==typeof t&&t.startsWith(`${e}:`))return t;if("topic"===e.toLowerCase()){if("string"!=typeof t)throw Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}if("id"===e.toLowerCase()){if("number"!=typeof t)throw Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw Error(`Unknown expirer target type: ${e}`)}function ed(e){return eu("topic",e)}function eh(e){return eu("id",e)}function ef(e){let[t,r]=e.split(":"),n={id:void 0,topic:void 0};if("topic"===t&&"string"==typeof r)n.topic=r;else if("id"===t&&Number.isInteger(Number(r)))n.id=Number(r);else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);return n}function ep(e,t){return(0,v.fromMiliseconds)((t||Date.now())+(0,v.toMiliseconds)(e))}function eg(e){return Date.now()>=(0,v.toMiliseconds)(e)}function eb(e,t){return`${e}${t?`:${t}`:""}`}function ew(e=[],t=[]){return[...new Set([...e,...t])]}async function em({id:e,topic:t,wcDeepLink:n}){try{if(!n)return;let i="string"==typeof n?JSON.parse(n):n,o=i?.href;if("string"!=typeof o)return;o.endsWith("/")&&(o=o.slice(0,-1));let a=`${o}/wc?requestId=${e}&sessionTopic=${t}`,s=er();s===X.browser?a.startsWith("https://")?window.open(a,"_blank","noreferrer noopener"):window.open(a,"_self","noreferrer noopener"):s===X.reactNative&&"u">typeof(null==r.g?void 0:r.g.Linking)&&await r.g.Linking.openURL(a)}catch(e){console.error(e)}}function ey(e){return e?.relay||{protocol:"irn"}}function ev(e){let t=k[e];if(typeof t>"u")throw Error(`Relay Protocol not supported: ${e}`);return t}var ex=Object.defineProperty,eC=Object.getOwnPropertySymbols,eE=Object.prototype.hasOwnProperty,ek=Object.prototype.propertyIsEnumerable,eS=(e,t,r)=>t in e?ex(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eA=(e,t)=>{for(var r in t||(t={}))eE.call(t,r)&&eS(e,r,t[r]);if(eC)for(var r of eC(t))ek.call(t,r)&&eS(e,r,t[r]);return e};function e$(e){var t;let r=e.indexOf(":"),n=-1!==e.indexOf("?")?e.indexOf("?"):void 0,i=e.substring(0,r),o=e.substring(r+1,n).split("@"),a="u">typeof n?e.substring(n):"",s=E.parse(a);return{protocol:i,topic:(t=o[0]).startsWith("//")?t.substring(2):t,version:parseInt(o[1],10),symKey:s.symKey,relay:function(e,t="-"){let r={},n="relay"+t;return Object.keys(e).forEach(t=>{if(t.startsWith(n)){let i=t.replace(n,""),o=e[t];r[i]=o}}),r}(s)}}function eP(e){return`${e.protocol}:${e.topic}@${e.version}?`+E.stringify(eA({symKey:e.symKey},function(e,t="-"){let r={};return Object.keys(e).forEach(n=>{e[n]&&(r["relay"+t+n]=e[n])}),r}(e.relay)))}var e_=Object.defineProperty,eD=Object.defineProperties,eO=Object.getOwnPropertyDescriptors,eI=Object.getOwnPropertySymbols,eT=Object.prototype.hasOwnProperty,eR=Object.prototype.propertyIsEnumerable,eN=(e,t,r)=>t in e?e_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ej=(e,t)=>{for(var r in t||(t={}))eT.call(t,r)&&eN(e,r,t[r]);if(eI)for(var r of eI(t))eR.call(t,r)&&eN(e,r,t[r]);return e},eM=(e,t)=>eD(e,eO(t));function eB(e){let t=[];return e.forEach(e=>{let[r,n]=e.split(":");t.push(`${r}:${n}`)}),t}function eU(e,t){let r=e8(e,t);if(r)throw Error(r.message);let n={};for(let[t,r]of Object.entries(e))n[t]={methods:r.methods,events:r.events,chains:r.accounts.map(e=>`${e.split(":")[0]}:${e.split(":")[1]}`)};return n}function eL(e){return e.includes(":")}function ez(e){return eL(e)?e.split(":")[0]:e}function eF(e){var t,r,n;let i={};if(!eV(e))return i;for(let[o,a]of Object.entries(e)){let e=eL(o)?[o]:a.chains,s=a.methods||[],l=a.events||[],c=ez(o);i[c]=eM(ej({},i[c]),{chains:ew(e,null==(t=i[c])?void 0:t.chains),methods:ew(s,null==(r=i[c])?void 0:r.methods),events:ew(l,null==(n=i[c])?void 0:n.events)})}return i}let eW={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},eH={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function eq(e,t){let{message:r,code:n}=eH[e];return{message:t?`${r} ${t}`:r,code:n}}function eG(e,t){let{message:r,code:n}=eW[e];return{message:t?`${r} ${t}`:r,code:n}}function eZ(e,t){return!!Array.isArray(e)&&(!("u">typeof t)||!e.length||e.every(t))}function eV(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function eK(e){return typeof e>"u"}function eQ(e,t){return!!(t&&eK(e))||"string"==typeof e&&!!e.trim().length}function eY(e,t){return!!(t&&eK(e))||"number"==typeof e&&!isNaN(e)}function eX(e,t){let{requiredNamespaces:r}=t,n=Object.keys(e.namespaces),i=Object.keys(r),o=!0;return!!eo(i,n)&&(n.forEach(t=>{let{accounts:n,methods:i,events:a}=e.namespaces[t],s=eB(n),l=r[t];eo(P(t,l),s)&&eo(l.methods,i)&&eo(l.events,a)||(o=!1)}),o)}function eJ(e){return!!(eQ(e,!1)&&e.includes(":"))&&2===e.split(":").length}function e0(e){if(eQ(e,!1))try{return"u">typeof new URL(e)}catch{}return!1}function e1(e){var t;return null==(t=e?.proposer)?void 0:t.publicKey}function e2(e){return e?.topic}function e5(e,t){let r=null;return eQ(e?.publicKey,!1)||(r=eq("MISSING_OR_INVALID",`${t} controller public key should be a string`)),r}function e3(e){let t=!0;return eZ(e)?e.length&&(t=e.every(e=>eQ(e,!1))):t=!1,t}function e6(e,t){let r=null;return Object.values(e).forEach(e=>{var n;let i;if(r)return;let o=(n=`${t}, namespace`,i=null,e3(e?.methods)?e3(e?.events)||(i=eG("UNSUPPORTED_EVENTS",`${n}, events should be an array of strings or empty array for no events`)):i=eG("UNSUPPORTED_METHODS",`${n}, methods should be an array of strings or empty array for no methods`),i);o&&(r=o)}),r}function e4(e,t,r){let n=null;if(e&&eV(e)){let i;let o=e6(e,t);o&&(n=o);let a=(i=null,Object.entries(e).forEach(([e,n])=>{var o,a;let s;if(i)return;let l=(o=P(e,n),a=`${t} ${r}`,s=null,eZ(o)&&o.length?o.forEach(e=>{s||eJ(e)||(s=eG("UNSUPPORTED_CHAINS",`${a}, chain ${e} should be a string and conform to "namespace:chainId" format`))}):eJ(e)||(s=eG("UNSUPPORTED_CHAINS",`${a}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),s);l&&(i=l)}),i);a&&(n=a)}else n=eq("MISSING_OR_INVALID",`${t}, ${r} should be an object with data`);return n}function e8(e,t){let r=null;if(e&&eV(e)){let n;let i=e6(e,t);i&&(r=i);let o=(n=null,Object.values(e).forEach(e=>{var r,i;let o;if(n)return;let a=(r=e?.accounts,i=`${t} namespace`,o=null,eZ(r)?r.forEach(e=>{o||function(e){if(eQ(e,!1)&&e.includes(":")){let t=e.split(":");if(3===t.length){let e=t[0]+":"+t[1];return!!t[2]&&eJ(e)}}return!1}(e)||(o=eG("UNSUPPORTED_ACCOUNTS",`${i}, account ${e} should be a string and conform to "namespace:chainId:address" format`))}):o=eG("UNSUPPORTED_ACCOUNTS",`${i}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),o);a&&(n=a)}),n);o&&(r=o)}else r=eq("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return r}function e7(e){return eQ(e.protocol,!0)}function e9(e,t){let r=!1;return t&&!e?r=!0:e&&eZ(e)&&e.length&&e.forEach(e=>{r=e7(e)}),r}function te(e){return"number"==typeof e}function tt(e){return"u">typeof e}function tr(e){return!(!e||"object"!=typeof e||!e.code||!eY(e.code,!1)||!e.message||!eQ(e.message,!1))}function tn(e){return!(eK(e)||!eQ(e.method,!1))}function ti(e){return!(eK(e)||eK(e.result)&&eK(e.error)||!eY(e.id,!1)||!eQ(e.jsonrpc,!1))}function to(e){return!(eK(e)||!eQ(e.name,!1))}function ta(e,t){return!(!eJ(t)||!(function(e){let t=[];return Object.values(e).forEach(e=>{t.push(...eB(e.accounts))}),t})(e).includes(t))}function ts(e,t,r){return!!eQ(r,!1)&&(function(e,t){let r=[];return Object.values(e).forEach(e=>{eB(e.accounts).includes(t)&&r.push(...e.methods)}),r})(e,t).includes(r)}function tl(e,t,r){return!!eQ(r,!1)&&(function(e,t){let r=[];return Object.values(e).forEach(e=>{eB(e.accounts).includes(t)&&r.push(...e.events)}),r})(e,t).includes(r)}function tc(e,t,r){let n=null,i=function(e){let t={};return Object.keys(e).forEach(r=>{var n;r.includes(":")?t[r]=e[r]:null==(n=e[r].chains)||n.forEach(n=>{t[n]={methods:e[r].methods,events:e[r].events}})}),t}(e),o=function(e){let t={};return Object.keys(e).forEach(r=>{if(r.includes(":"))t[r]=e[r];else{let n=eB(e[r].accounts);n?.forEach(n=>{t[n]={accounts:e[r].accounts.filter(e=>e.includes(`${n}:`)),methods:e[r].methods,events:e[r].events}})}}),t}(t),a=Object.keys(i),s=Object.keys(o),l=tu(Object.keys(e)),c=tu(Object.keys(t)),u=l.filter(e=>!c.includes(e));return u.length&&(n=eq("NON_CONFORMING_NAMESPACES",`${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(t).toString()}`)),eo(a,s)||(n=eq("NON_CONFORMING_NAMESPACES",`${r} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${s.toString()}`)),Object.keys(t).forEach(e=>{if(!e.includes(":")||n)return;let i=eB(t[e].accounts);i.includes(e)||(n=eq("NON_CONFORMING_NAMESPACES",`${r} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${i.toString()}`))}),a.forEach(e=>{n||(eo(i[e].methods,o[e].methods)?eo(i[e].events,o[e].events)||(n=eq("NON_CONFORMING_NAMESPACES",`${r} namespaces events don't satisfy namespace events for ${e}`)):n=eq("NON_CONFORMING_NAMESPACES",`${r} namespaces methods don't satisfy namespace methods for ${e}`))}),n}function tu(e){return[...new Set(e.map(e=>e.includes(":")?e.split(":")[0]:e))]}function td(e,t){return eY(e,!1)&&e<=t.max&&e>=t.min}function th(){let e=er();return new Promise(t=>{switch(e){case X.browser:t(et()&&navigator?.onLine);break;case X.reactNative:t(tf());break;case X.node:default:t(!0)}})}async function tf(){if(ee()&&"u">typeof r.g&&null!=r.g&&r.g.NetInfo){let e=await (null==r.g?void 0:r.g.NetInfo.fetch());return e?.isConnected}return!0}function tp(e){switch(er()){case X.browser:!ee()&&et()&&(window.addEventListener("online",()=>e(!0)),window.addEventListener("offline",()=>e(!1)));break;case X.reactNative:ee()&&"u">typeof r.g&&null!=r.g&&r.g.NetInfo&&r.g?.NetInfo.addEventListener(t=>e(t?.isConnected));case X.node:}}let tg={};class tb{static get(e){return tg[e]}static set(e,t){tg[e]=t}static delete(e){delete tg[e]}}},66151:function(e,t,r){"use strict";let n=r(70610),i=r(44020),o=r(80500),a=r(92806),s=e=>null==e,l=Symbol("encodeFragmentIdentifier");function c(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function u(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function d(e,t){return t.decode?i(e):e}function h(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function f(e){e=h(e);let t=e.indexOf("?");return -1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function g(e,t){c((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);let r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t){n[e]=r;return}void 0===n[e]&&(n[e]={}),n[e][t[1]]=r};case"bracket":return(e,r,n)=>{if(t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),!t){n[e]=r;return}if(void 0===n[e]){n[e]=[r];return}n[e]=[].concat(n[e],r)};case"colon-list-separator":return(e,r,n)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){n[e]=r;return}if(void 0===n[e]){n[e]=[r];return}n[e]=[].concat(n[e],r)};case"comma":case"separator":return(t,r,n)=>{let i="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!i&&d(r,e).includes(e.arrayFormatSeparator);r=o?d(r,e):r;let a=i||o?r.split(e.arrayFormatSeparator).map(t=>d(t,e)):null===r?r:d(r,e);n[t]=a};case"bracket-separator":return(t,r,n)=>{let i=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!i){n[t]=r?d(r,e):r;return}let o=null===r?[]:r.split(e.arrayFormatSeparator).map(t=>d(t,e));if(void 0===n[t]){n[t]=o;return}n[t]=[].concat(n[t],o)};default:return(e,t,r)=>{if(void 0===r[e]){r[e]=t;return}r[e]=[].concat(r[e],t)}}}(t),n=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return n;for(let i of e.split("&")){if(""===i)continue;let[e,a]=o(t.decode?i.replace(/\+/g," "):i,"=");a=void 0===a?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:d(a,t),r(d(e,t),a,n)}for(let e of Object.keys(n)){let r=n[e];if("object"==typeof r&&null!==r)for(let e of Object.keys(r))r[e]=p(r[e],t);else n[e]=p(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{let r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=f,t.parse=g,t.stringify=(e,t)=>{if(!e)return"";c((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);let r=r=>t.skipNull&&s(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{let i=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[u(t,e),"[",i,"]"].join("")]:[...r,[u(t,e),"[",u(i,e),"]=",u(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[u(t,e),"[]"].join("")]:[...r,[u(t,e),"[]=",u(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[u(t,e),":list="].join("")]:[...r,[u(t,e),":list=",u(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?n:(i=null===i?"":i,0===n.length)?[[u(r,e),t,u(i,e)].join("")]:[[n,u(i,e)].join(e.arrayFormatSeparator)]}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,u(t,e)]:[...r,[u(t,e),"=",u(n,e)].join("")]}}(t),i={};for(let t of Object.keys(e))r(t)||(i[t]=e[t]);let o=Object.keys(i);return!1!==t.sort&&o.sort(t.sort),o.map(r=>{let i=e[r];return void 0===i?"":null===i?u(r,t):Array.isArray(i)?0===i.length&&"bracket-separator"===t.arrayFormat?u(r,t)+"[]":i.reduce(n(r),[]).join("&"):u(r,t)+"="+u(i,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);let[r,n]=o(e,"#");return Object.assign({url:r.split("?")[0]||"",query:g(f(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:d(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[l]:!0},r);let n=h(e.url).split("?")[0]||"",i=t.extract(e.url),o=t.parse(i,{sort:!1}),a=Object.assign(o,e.query),s=t.stringify(a,r);s&&(s=`?${s}`);let c=function(e){let t="",r=e.indexOf("#");return -1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(c=`#${r[l]?u(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${s}${c}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[l]:!1},n);let{url:i,query:o,fragmentIdentifier:s}=t.parseUrl(e,n);return t.stringifyUrl({url:i,query:a(o,r),fragmentIdentifier:s},n)},t.exclude=(e,r,n)=>{let i=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,i,n)}},62873:function(e,t){"use strict";function r(e){let t;return"undefined"!=typeof window&&void 0!==window[e]&&(t=window[e]),t}function n(e){let t=r(e);if(!t)throw Error(`${e} is not defined in Window`);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getLocalStorage=t.getLocalStorageOrThrow=t.getCrypto=t.getCryptoOrThrow=t.getLocation=t.getLocationOrThrow=t.getNavigator=t.getNavigatorOrThrow=t.getDocument=t.getDocumentOrThrow=t.getFromWindowOrThrow=t.getFromWindow=void 0,t.getFromWindow=r,t.getFromWindowOrThrow=n,t.getDocumentOrThrow=function(){return n("document")},t.getDocument=function(){return r("document")},t.getNavigatorOrThrow=function(){return n("navigator")},t.getNavigator=function(){return r("navigator")},t.getLocationOrThrow=function(){return n("location")},t.getLocation=function(){return r("location")},t.getCryptoOrThrow=function(){return n("crypto")},t.getCrypto=function(){return r("crypto")},t.getLocalStorageOrThrow=function(){return n("localStorage")},t.getLocalStorage=function(){return r("localStorage")}},65755:function(e,t,r){"use strict";t.D=void 0;let n=r(62873);t.D=function(){let e,t,r;try{e=n.getDocumentOrThrow(),t=n.getLocationOrThrow()}catch(e){return null}function i(...t){let r=e.getElementsByTagName("meta");for(let e=0;e<r.length;e++){let n=r[e],i=["itemprop","property","name"].map(e=>n.getAttribute(e)).filter(e=>!!e&&t.includes(e));if(i.length&&i){let e=n.getAttribute("content");if(e)return e}}return""}let o=((r=i("name","og:site_name","og:title","twitter:title"))||(r=e.title),r),a=function(){let e=i("description","og:description","twitter:description","keywords");return e}(),s=t.origin,l=function(){let r=e.getElementsByTagName("link"),n=[];for(let e=0;e<r.length;e++){let i=r[e],o=i.getAttribute("rel");if(o&&o.toLowerCase().indexOf("icon")>-1){let e=i.getAttribute("href");if(e){if(-1===e.toLowerCase().indexOf("https:")&&-1===e.toLowerCase().indexOf("http:")&&0!==e.indexOf("//")){let r=t.protocol+"//"+t.host;if(0===e.indexOf("/"))r+=e;else{let n=t.pathname.split("/");n.pop();let i=n.join("/");r+=i+"/"+e}n.push(r)}else if(0===e.indexOf("//")){let r=t.protocol+e;n.push(r)}else n.push(e)}}}return n}();return{description:a,url:s,icons:l,name:o}}},38722:function(e,t,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */let n=r(79742),i=r(80645),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function a(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,s.prototype),t}function s(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return u(e)}return l(e,t,r)}function l(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!s.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|p(e,t),n=a(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(M(e,Uint8Array)){let t=new Uint8Array(e);return h(t.buffer,t.byteOffset,t.byteLength)}return d(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(M(e,ArrayBuffer)||e&&M(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(M(e,SharedArrayBuffer)||e&&M(e.buffer,SharedArrayBuffer)))return h(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return s.from(n,t,r);let i=function(e){var t;if(s.isBuffer(e)){let t=0|f(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?a(0):d(e):"Buffer"===e.type&&Array.isArray(e.data)?d(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return s.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function c(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return c(e),a(e<0?0:0|f(e))}function d(e){let t=e.length<0?0:0|f(e.length),r=a(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function h(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),s.prototype),n}function f(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function p(e,t){if(s.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||M(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return R(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return N(e).length;default:if(i)return n?-1:R(e).length;t=(""+t).toLowerCase(),i=!0}}function g(e,t,r){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=B[e[n]];return i}(this,t,r);case"utf8":case"utf-8":return y(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":var o,a;return o=t,a=r,0===o&&a===this.length?n.fromByteArray(this):n.fromByteArray(this.slice(o,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}(this,t,r);default:if(i)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function b(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function w(e,t,r,n,i){var o;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r)!=o&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=s.from(t,n)),s.isBuffer(t))return 0===t.length?-1:m(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):m(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function m(e,t,r,n,i){let o,a=1,s=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;a=2,s/=2,l/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){let n=-1;for(o=r;o<s;o++)if(c(e,o)===c(t,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===l)return n*a}else -1!==n&&(o-=o-n),n=-1}else for(r+l>s&&(r=s-l),o=r;o>=0;o--){let r=!0;for(let n=0;n<l;n++)if(c(e,o+n)!==c(t,n)){r=!1;break}if(r)return o}return -1}function y(e,t,r){r=Math.min(e.length,r);let n=[],i=t;for(;i<r;){let t=e[i],o=null,a=t>239?4:t>223?3:t>191?2:1;if(i+a<=r){let r,n,s,l;switch(a){case 1:t<128&&(o=t);break;case 2:(192&(r=e[i+1]))==128&&(l=(31&t)<<6|63&r)>127&&(o=l);break;case 3:r=e[i+1],n=e[i+2],(192&r)==128&&(192&n)==128&&(l=(15&t)<<12|(63&r)<<6|63&n)>2047&&(l<55296||l>57343)&&(o=l);break;case 4:r=e[i+1],n=e[i+2],s=e[i+3],(192&r)==128&&(192&n)==128&&(192&s)==128&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&s)>65535&&l<1114112&&(o=l)}}null===o?(o=65533,a=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=a}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function v(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function x(e,t,r,n,i,o){if(!s.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function C(e,t,r,n,i){D(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,r}function E(e,t,r,n,i){D(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=a,a>>=8,e[r+2]=a,a>>=8,e[r+1]=a,a>>=8,e[r]=a,r+8}function k(e,t,r,n,i,o){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function S(e,t,r,n,o){return t=+t,r>>>=0,o||k(e,t,r,4,34028234663852886e22,-34028234663852886e22),i.write(e,t,r,n,23,4),r+4}function A(e,t,r,n,o){return t=+t,r>>>=0,o||k(e,t,r,8,17976931348623157e292,-17976931348623157e292),i.write(e,t,r,n,52,8),r+8}t.lW=s,t.h2=50,s.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),s.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(e,t,r){return l(e,t,r)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(e,t,r){return(c(e),e<=0)?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)},s.allocUnsafe=function(e){return u(e)},s.allocUnsafeSlow=function(e){return u(e)},s.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==s.prototype},s.compare=function(e,t){if(M(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),M(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},s.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return s.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=s.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){let t=e[r];if(M(t,Uint8Array))i+t.length>n.length?(s.isBuffer(t)||(t=s.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else if(s.isBuffer(t))t.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return n},s.byteLength=p,s.prototype._isBuffer=!0,s.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)b(this,t,t+1);return this},s.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},s.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},s.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?y(this,0,e):g.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===s.compare(this,e)},s.prototype.inspect=function(){let e="",r=t.h2;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},o&&(s.prototype[o]=s.prototype.inspect),s.prototype.compare=function(e,t,r,n,i){if(M(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;let o=i-n,a=r-t,l=Math.min(o,a),c=this.slice(n,i),u=e.slice(t,r);for(let e=0;e<l;++e)if(c[e]!==u[e]){o=c[e],a=u[e];break}return o<a?-1:a<o?1:0},s.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},s.prototype.indexOf=function(e,t,r){return w(this,e,t,r,!0)},s.prototype.lastIndexOf=function(e,t,r){return w(this,e,t,r,!1)},s.prototype.write=function(e,t,r,n){var i,o,a,s,l,c,u,d;if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let h=this.length-t;if((void 0===r||r>h)&&(r=h),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let f=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let i;r=Number(r)||0;let o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;let a=t.length;for(n>a/2&&(n=a/2),i=0;i<n;++i){let n=parseInt(t.substr(2*i,2),16);if(n!=n)break;e[r+i]=n}return i}(this,e,t,r);case"utf8":case"utf-8":return i=t,o=r,j(R(e,this.length-i),this,i,o);case"ascii":case"latin1":case"binary":return a=t,s=r,j(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,a,s);case"base64":return l=t,c=r,j(N(e),this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,d=r,j(function(e,t){let r,n;let i=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=(r=e.charCodeAt(o))>>8,i.push(r%256),i.push(n);return i}(e,this.length-u),this,u,d);default:if(f)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),f=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},s.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,s.prototype),n},s.prototype.readUintLE=s.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return n},s.prototype.readUintBE=s.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},s.prototype.readUint8=s.prototype.readUInt8=function(e,t){return e>>>=0,t||v(e,1,this.length),this[e]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(e,t){return e>>>=0,t||v(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(e,t){return e>>>=0,t||v(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(e,t){return e>>>=0,t||v(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(e,t){return e>>>=0,t||v(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readBigUInt64LE=U(function(e){O(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&I(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+16777216*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),s.prototype.readBigUInt64BE=U(function(e){O(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&I(e,this.length-8);let n=16777216*t+65536*this[++e]+256*this[++e]+this[++e],i=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),s.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},s.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);let n=t,i=1,o=this[e+--n];for(;n>0&&(i*=256);)o+=this[e+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},s.prototype.readInt8=function(e,t){return(e>>>=0,t||v(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},s.prototype.readInt16LE=function(e,t){e>>>=0,t||v(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(e,t){e>>>=0,t||v(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(e,t){return e>>>=0,t||v(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e>>>=0,t||v(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readBigInt64LE=U(function(e){O(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&I(e,this.length-8);let n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),s.prototype.readBigInt64BE=U(function(e){O(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&I(e,this.length-8);let n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),s.prototype.readFloatLE=function(e,t){return e>>>=0,t||v(e,4,this.length),i.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e>>>=0,t||v(e,4,this.length),i.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e>>>=0,t||v(e,8,this.length),i.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e>>>=0,t||v(e,8,this.length),i.read(this,e,!1,52,8)},s.prototype.writeUintLE=s.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;x(this,e,t,r,n,0)}let i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;x(this,e,t,r,n,0)}let i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},s.prototype.writeUint8=s.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,1,255,0),this[t]=255&e,t+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigUInt64LE=U(function(e,t=0){return C(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=U(function(e,t=0){return E(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);x(this,e,t,r,n-1,-n)}let i=0,o=1,a=0;for(this[t]=255&e;++i<r&&(o*=256);)e<0&&0===a&&0!==this[t+i-1]&&(a=1),this[t+i]=(e/o>>0)-a&255;return t+r},s.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);x(this,e,t,r,n-1,-n)}let i=r-1,o=1,a=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===a&&0!==this[t+i+1]&&(a=1),this[t+i]=(e/o>>0)-a&255;return t+r},s.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},s.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigInt64LE=U(function(e,t=0){return C(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=U(function(e,t=0){return E(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeFloatLE=function(e,t,r){return S(this,e,t,!0,r)},s.prototype.writeFloatBE=function(e,t,r){return S(this,e,t,!1,r)},s.prototype.writeDoubleLE=function(e,t,r){return A(this,e,t,!0,r)},s.prototype.writeDoubleBE=function(e,t,r){return A(this,e,t,!1,r)},s.prototype.copy=function(e,t,r,n){if(!s.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},s.prototype.fill=function(e,t,r,n){let i;if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!s.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{let o=s.isBuffer(e)?e:s.from(e,n),a=o.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=o[i%a]}return this};let $={};function P(e,t,r){$[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function _(e){let t="",r=e.length,n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function D(e,t,r,n,i,o){if(e>r||e<t){let n;let i="bigint"==typeof t?"n":"";throw n=o>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(o+1)*8}${i}`:`>= -(2${i} ** ${(o+1)*8-1}${i}) and < 2 ** ${(o+1)*8-1}${i}`:`>= ${t}${i} and <= ${r}${i}`,new $.ERR_OUT_OF_RANGE("value",n,e)}O(i,"offset"),(void 0===n[i]||void 0===n[i+o])&&I(i,n.length-(o+1))}function O(e,t){if("number"!=typeof e)throw new $.ERR_INVALID_ARG_TYPE(t,"number",e)}function I(e,t,r){if(Math.floor(e)!==e)throw O(e,r),new $.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new $.ERR_BUFFER_OUT_OF_BOUNDS;throw new $.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}P("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),P("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),P("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=_(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=_(i)),i+="n"),n+=` It must be ${t}. Received ${i}`},RangeError);let T=/[^+/0-9A-Za-z-_]/g;function R(e,t){let r;t=t||1/0;let n=e.length,i=null,o=[];for(let a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319||a+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function N(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(T,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function j(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function M(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let B=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function U(e){return"undefined"==typeof BigInt?L:e}function L(){throw Error("BigInt not supported")}},79742:function(e,t){"use strict";t.byteLength=function(e){var t=l(e),r=t[0],n=t[1];return(r+n)*3/4-n},t.toByteArray=function(e){var t,r,o=l(e),a=o[0],s=o[1],c=new i((a+s)*3/4-s),u=0,d=s>0?a-4:a;for(r=0;r<d;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=255&t;return 2===s&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,c[u++]=255&t),1===s&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,c[u++]=t>>8&255,c[u++]=255&t),c},t.fromByteArray=function(e){for(var t,n=e.length,i=n%3,o=[],a=0,s=n-i;a<s;a+=16383)o.push(function(e,t,n){for(var i,o=[],a=t;a<n;a+=3)o.push(r[(i=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]))>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return o.join("")}(e,a,a+16383>s?s:a+16383));return 1===i?o.push(r[(t=e[n-1])>>2]+r[t<<4&63]+"=="):2===i&&o.push(r[(t=(e[n-2]<<8)+e[n-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),o.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=o.length;a<s;++a)r[a]=o[a],n[o.charCodeAt(a)]=a;function l(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},44020:function(e){"use strict";var t="%[a-f0-9]{2}",r=RegExp("("+t+")|([^%]+?)","gi"),n=RegExp("("+t+")+","gi");e.exports=function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},i=n.exec(e);i;){try{t[i[0]]=decodeURIComponent(i[0])}catch(e){var o=function(e){try{return decodeURIComponent(e)}catch(i){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=(function e(t,r){try{return[decodeURIComponent(t.join(""))]}catch(e){}if(1===t.length)return t;r=r||1;var n=t.slice(0,r),i=t.slice(r);return Array.prototype.concat.call([],e(n),e(i))})(t,n).join("")).match(r)||[];return e}}(i[0]);o!==i[0]&&(t[i[0]]=o)}i=n.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),s=0;s<a.length;s++){var l=a[s];e=e.replace(RegExp(l,"g"),t[l])}return e}(e)}}},65987:function(e){"use strict";var t={single_source_shortest_paths:function(e,r,n){var i,o,a,s,l,c,u,d={},h={};h[r]=0;var f=t.PriorityQueue.make();for(f.push(r,0);!f.empty();)for(a in o=(i=f.pop()).value,s=i.cost,l=e[o]||{})l.hasOwnProperty(a)&&(c=s+l[a],u=h[a],(void 0===h[a]||u>c)&&(h[a]=c,f.push(a,c),d[a]=o));if(void 0!==n&&void 0===h[n])throw Error(["Could not find a path from ",r," to ",n,"."].join(""));return d},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],n=t;n;)r.push(n),e[n],n=e[n];return r.reverse(),r},find_path:function(e,r,n){var i=t.single_source_shortest_paths(e,r,n);return t.extract_shortest_path_from_predecessor_list(i,n)},PriorityQueue:{make:function(e){var r,n=t.PriorityQueue,i={};for(r in e=e||{},n)n.hasOwnProperty(r)&&(i[r]=n[r]);return i.queue=[],i.sorter=e.sorter||n.default_sorter,i},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},62378:function(e){"use strict";e.exports=function(e){for(var t=[],r=e.length,n=0;n<r;n++){var i=e.charCodeAt(n);if(i>=55296&&i<=56319&&r>n+1){var o=e.charCodeAt(n+1);o>=56320&&o<=57343&&(i=(i-55296)*1024+o-56320+65536,n+=1)}if(i<128){t.push(i);continue}if(i<2048){t.push(i>>6|192),t.push(63&i|128);continue}if(i<55296||i>=57344&&i<65536){t.push(i>>12|224),t.push(i>>6&63|128),t.push(63&i|128);continue}if(i>=65536&&i<=1114111){t.push(i>>18|240),t.push(i>>12&63|128),t.push(i>>6&63|128),t.push(63&i|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},26729:function(e){"use strict";var t=Object.prototype.hasOwnProperty,r="~";function n(){}function i(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function o(e,t,n,o,a){if("function"!=typeof n)throw TypeError("The listener must be a function");var s=new i(n,o||e,a),l=r?r+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],s]:e._events[l].push(s):(e._events[l]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function s(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1)),s.prototype.eventNames=function(){var e,n,i=[];if(0===this._eventsCount)return i;for(n in e=this._events)t.call(e,n)&&i.push(r?n.slice(1):n);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i},s.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,o=n.length,a=Array(o);i<o;i++)a[i]=n[i].fn;return a},s.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},s.prototype.emit=function(e,t,n,i,o,a){var s=r?r+e:e;if(!this._events[s])return!1;var l,c,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,n),!0;case 4:return u.fn.call(u.context,t,n,i),!0;case 5:return u.fn.call(u.context,t,n,i,o),!0;case 6:return u.fn.call(u.context,t,n,i,o,a),!0}for(c=1,l=Array(d-1);c<d;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var h,f=u.length;for(c=0;c<f;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),d){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,n);break;case 4:u[c].fn.call(u[c].context,t,n,i);break;default:if(!l)for(h=1,l=Array(d-1);h<d;h++)l[h-1]=arguments[h];u[c].fn.apply(u[c].context,l)}}return!0},s.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,n,i){var o=r?r+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||i&&!s.once||n&&s.context!==n||a(this,o);else{for(var l=0,c=[],u=s.length;l<u;l++)(s[l].fn!==t||i&&!s[l].once||n&&s[l].context!==n)&&c.push(s[l]);c.length?this._events[o]=1===c.length?c[0]:c:a(this,o)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&a(this,t)):(this._events=new n,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,e.exports=s},92806:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),i=Array.isArray(t),o=0;o<n.length;o++){var a=n[o],s=e[a];(i?-1!==t.indexOf(a):t(a,s,e))&&(r[a]=s)}return r}},8679:function(e,t,r){"use strict";var n=r(21296),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return n.isMemo(e)?a:s[e.$$typeof]||i}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=a;var c=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var i=f(r);i&&i!==p&&e(t,i,n)}var a=u(r);d&&(a=a.concat(d(r)));for(var s=l(t),g=l(r),b=0;b<a.length;++b){var w=a[b];if(!o[w]&&!(n&&n[w])&&!(g&&g[w])&&!(s&&s[w])){var m=h(r,w);try{c(t,w,m)}catch(e){}}}}return t}},96103:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,g=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,w=r?Symbol.for("react.block"):60121,m=r?Symbol.for("react.fundamental"):60117,y=r?Symbol.for("react.responder"):60118,v=r?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case d:case o:case s:case a:case f:return e;default:switch(e=e&&e.$$typeof){case c:case h:case b:case g:case l:return e;default:return t}}case i:return t}}}function C(e){return x(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=c,t.ContextProvider=l,t.Element=n,t.ForwardRef=h,t.Fragment=o,t.Lazy=b,t.Memo=g,t.Portal=i,t.Profiler=s,t.StrictMode=a,t.Suspense=f,t.isAsyncMode=function(e){return C(e)||x(e)===u},t.isConcurrentMode=C,t.isContextConsumer=function(e){return x(e)===c},t.isContextProvider=function(e){return x(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===h},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===b},t.isMemo=function(e){return x(e)===g},t.isPortal=function(e){return x(e)===i},t.isProfiler=function(e){return x(e)===s},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===s||e===a||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===g||e.$$typeof===l||e.$$typeof===c||e.$$typeof===h||e.$$typeof===m||e.$$typeof===y||e.$$typeof===v||e.$$typeof===w)},t.typeOf=x},21296:function(e,t,r){"use strict";e.exports=r(96103)},80645:function(e,t){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */t.read=function(e,t,r,n,i){var o,a,s=8*i-n-1,l=(1<<s)-1,c=l>>1,u=-7,d=r?i-1:0,h=r?-1:1,f=e[t+d];for(d+=h,o=f&(1<<-u)-1,f>>=-u,u+=s;u>0;o=256*o+e[t+d],d+=h,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=n;u>0;a=256*a+e[t+d],d+=h,u-=8);if(0===o)o=1-c;else{if(o===l)return a?NaN:(f?-1:1)*(1/0);a+=Math.pow(2,n),o-=c}return(f?-1:1)*a*Math.pow(2,o-n)},t.write=function(e,t,r,n,i,o){var a,s,l,c=8*o-i-1,u=(1<<c)-1,d=u>>1,h=23===i?5960464477539062e-23:0,f=n?0:o-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(s=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+d>=1?t+=h/l:t+=h*Math.pow(2,1-d),t*l>=2&&(a++,l/=2),a+d>=u?(s=0,a=u):a+d>=1?(s=(t*l-1)*Math.pow(2,i),a+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,i),a=0));i>=8;e[r+f]=255&s,f+=p,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;e[r+f]=255&a,f+=p,a/=256,c-=8);e[r+f-p]|=128*g}},91118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(23290)}])},23290:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(85893),i=r(67294),o=r(76374);let a=e=>{let{children:t}=e,[r,a]=(0,i.useState)(!1),[s,l]=(0,i.useState)(!1),[c,u]=(0,i.useState)(!1),[d,h]=(0,i.useState)(null),f=e=>{h(e)},p=()=>{a(!r)},g=e=>{e.preventDefault(),l(!s)},b=()=>{a(!r),u(!c)};return(0,n.jsx)(o.t.Provider,{value:{walletModalHandle:p,walletModalvisibility:r,shareModalVisibility:s,shareModalHandle:g,metamaskModal:c,handleMetamaskModal:b,handleAccountConnect:f,accounts:d},children:t})};var s=r(7297),l=r(19521);function c(){let e=(0,s.Z)([" \n\n::-moz-selection {\n    background: #2D65F8;\n    text-shadow: none;\n    color: #ffffff;\n}\n\n::selection {\n    background: #2D65F8;\n    text-shadow: none;\n    color: #ffffff;\n}\n\n/* -----------------------------------/\n    01. nodeai General CSS\n-------------------------------------*/\nhtml,\nbody {\n    font-size: 16px;\n    color: rgba(255, 255, 255, 0.7);\n    font-family: 'Inter', sans-serif;\n    line-height: 1.6;\n    font-weight: 500; \n    background-color: #151625;\n}\n\nimg {\n    max-width: 100%;\n    height: auto;\n}\n\np {\n    margin: 0 0 26px;\n    line-height: 1.8;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-family: \"Inter-Bold\", sans-serif;\n    color: #ffffff;\n    line-height: 1.35;\n    font-weight: bold;\n    margin: 0 0 26px;\n}\n\nh1 {\n    font-size: 50px; \n}\n\nh2 {\n    font-size: 36px; \n}\n\nh3 {\n    font-size: 30px; \n}\n\nh4 {\n    font-size: 22px;\n}\n\nh5 {\n    font-size: 16px;\n}\n\nh6 {\n    font-size: 14px;\n}\n\na {\n    color: #fff;\n    transition: all 0.3s ease;\n    text-decoration: none;\n    outline: none;\n}\n\na:active,\na:hover {\n    text-decoration: none;\n    outline: 0 none;\n    color: #a3ff12;\n}\n\n\n\nul {\n    list-style: outside none none;\n    margin: 0;\n    padding: 0;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n    text-decoration: none;\n    box-shadow: none;\n}\n\nbutton {\n    border: none;\n}\n\nwui-text{\n    color: #000000 !important;\n}\n\n/* css grid */\n\n.grid{\n    display: grid;\n}\n.grid-cols-7{\n    grid-template-columns: repeat(7, minmax(0, 1fr));\n}\n\n.col-start-2{\n    grid-column-start: 2;\n}\n.col-start-3{\n    grid-column-start: 3;\n}\n.col-start-4{\n    grid-column-start: 4;\n}\n.col-start-5{\n    grid-column-start: 5;\n}\n.col-start-6{\n    grid-column-start: 6;\n}\n.col-start-7{\n    grid-column-start: 7;\n}\n\n@media only screen and (min-width: 1200px) {\n  .container {\n    max-width: 1200px;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n    body {\n    font-size: 15px;\n}\n\n .mobile-ca{\n    font-size: 14px;\n }\n}\n\n@media only screen and (max-width: 280px) {\n\n .mobile-ca{\n    font-size: 11px;\n }\n}\n\n\n"]);return c=function(){return e},e}let u=(0,l.vJ)(c());var d=r(6802),h=r(57421),f=r(66403);let p="b587c2ab99cb258ae0e78cc4b50d3d6d",g={name:"Node AI",description:"Node AI Wallet Connect",url:"https://nodeai.com",icons:["https://avatars.githubusercontent.com/u/37784886"],featuredWalletIds:["c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96"],defaultChain:f.R},b=[f.R],w=(0,d.o1)({chains:b,projectId:p,metadata:g});(0,d.OY)({wagmiConfig:w,projectId:p,chains:b});let m=e=>{let{Component:t,pageProps:r}=e,{themeMode:o,themeVariables:s,setThemeMode:l,setThemeVariables:c}=(0,d.y7)(),[f,p]=(0,i.useState)(!1);return(l("dark"),c({"--w3m-accent":"#a3ff12","--w3m-border-radius-master":"0","--w3m-font-size-master":"11px"}),(0,i.useEffect)(()=>{p(!0)},[]),f)?(0,n.jsx)(a,{children:(0,n.jsxs)(h.eM,{config:w,children:[(0,n.jsx)(u,{}),(0,n.jsx)(t,{...r})]})}):null};var y=m},76374:function(e,t,r){"use strict";r.d(t,{d:function(){return o},t:function(){return i}});var n=r(67294);let i=(0,n.createContext)(),o=()=>(0,n.useContext)(i)},34155:function(e){var t,r,n,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l=[],c=!1,u=-1;function d(){c&&n&&(c=!1,n.length?l=n.concat(l):u=-1,l.length&&h())}function h(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||c||s(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}},92592:function(e,t,r){let n=r(47138),i=r(95115),o=r(6907),a=r(93776);function s(e,t,r,o,a){let s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!n())throw Error("Callback required as last argument");if(c){if(l<2)throw Error("Too few arguments provided");2===l?(a=r,r=t,t=o=void 0):3===l&&(t.getContext&&void 0===a?(a=o,o=void 0):(a=o,o=r,r=t,t=void 0))}else{if(l<1)throw Error("Too few arguments provided");return 1===l?(r=t,t=o=void 0):2!==l||t.getContext||(o=r,r=t,t=void 0),new Promise(function(n,a){try{let a=i.create(r,o);n(e(a,t,o))}catch(e){a(e)}})}try{let n=i.create(r,o);a(null,e(n,t,o))}catch(e){a(e)}}t.create=i.create,t.toCanvas=s.bind(null,o.render),t.toDataURL=s.bind(null,o.renderToDataURL),t.toString=s.bind(null,function(e,t,r){return a.render(e,r)})},47138:function(e){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},21845:function(e,t,r){let n=r(10242).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,r=n(e),i=145===r?26:2*Math.ceil((r-13)/(2*t-2)),o=[r-7];for(let e=1;e<t-1;e++)o[e]=o[e-1]-i;return o.push(6),o.reverse()},t.getPositions=function(e){let r=[],n=t.getRowColCoords(e),i=n.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)(0!==e||0!==t)&&(0!==e||t!==i-1)&&(e!==i-1||0!==t)&&r.push([n[e],n[t]]);return r}},8260:function(e,t,r){let n=r(76910),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=n.ALPHANUMERIC,this.data=e}o.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*i.indexOf(this.data[t]);r+=i.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(i.indexOf(this.data[t]),6)},e.exports=o},97245:function(e){function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},73280:function(e){function t(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,n){let i=e*this.size+t;this.data[i]=r,n&&(this.reservedBit[i]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},43424:function(e,t,r){let n=r(62378),i=r(76910);function o(e){this.mode=i.BYTE,"string"==typeof e&&(e=n(e)),this.data=new Uint8Array(e)}o.getBitsLength=function(e){return 8*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=o},35393:function(e,t,r){let n=r(64908),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case n.L:return i[(e-1)*4+0];case n.M:return i[(e-1)*4+1];case n.Q:return i[(e-1)*4+2];case n.H:return i[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case n.L:return o[(e-1)*4+0];case n.M:return o[(e-1)*4+1];case n.Q:return o[(e-1)*4+2];case n.H:return o[(e-1)*4+3];default:return}}},64908:function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let r=e.toLowerCase();switch(r){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return r}}},76526:function(e,t,r){let n=r(10242).getSymbolSize;t.getPositions=function(e){let t=n(e);return[[0,0],[t-7,0],[0,t-7]]}},61642:function(e,t,r){let n=r(10242),i=n.getBCHDigit(1335);t.getEncodedBits=function(e,t){let r=e.bit<<3|t,o=r<<10;for(;n.getBCHDigit(o)-i>=0;)o^=1335<<n.getBCHDigit(o)-i;return(r<<10|o)^21522}},69729:function(e,t){let r=new Uint8Array(512),n=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)r[t]=e,n[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)r[e]=r[e-255]}(),t.log=function(e){if(e<1)throw Error("log("+e+")");return n[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[n[e]+n[t]]}},35442:function(e,t,r){let n=r(76910),i=r(10242);function o(e){this.mode=n.KANJI,this.data=e}o.getBitsLength=function(e){return 13*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=i.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),e.put(r,13)}},e.exports=o},27126:function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let r={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,n=0,i=0,o=0,a=null,s=null;for(let l=0;l<t;l++){i=o=0,a=s=null;for(let c=0;c<t;c++){let t=e.get(l,c);t===a?i++:(i>=5&&(n+=r.N1+(i-5)),a=t,i=1),(t=e.get(c,l))===s?o++:(o>=5&&(n+=r.N1+(o-5)),s=t,o=1)}i>=5&&(n+=r.N1+(i-5)),o>=5&&(n+=r.N1+(o-5))}return n},t.getPenaltyN2=function(e){let t=e.size,n=0;for(let r=0;r<t-1;r++)for(let i=0;i<t-1;i++){let t=e.get(r,i)+e.get(r,i+1)+e.get(r+1,i)+e.get(r+1,i+1);(4===t||0===t)&&n++}return n*r.N2},t.getPenaltyN3=function(e){let t=e.size,n=0,i=0,o=0;for(let r=0;r<t;r++){i=o=0;for(let a=0;a<t;a++)i=i<<1&2047|e.get(r,a),a>=10&&(1488===i||93===i)&&n++,o=o<<1&2047|e.get(a,r),a>=10&&(1488===o||93===o)&&n++}return n*r.N3},t.getPenaltyN4=function(e){let t=0,n=e.data.length;for(let r=0;r<n;r++)t+=e.data[r];let i=Math.abs(Math.ceil(100*t/n/5)-10);return i*r.N4},t.applyMask=function(e,r){let n=r.size;for(let i=0;i<n;i++)for(let o=0;o<n;o++)r.isReserved(o,i)||r.xor(o,i,function(e,r,n){switch(e){case t.Patterns.PATTERN000:return(r+n)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(r+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return r*n%2+r*n%3==0;case t.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case t.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,o,i))},t.getBestMask=function(e,r){let n=Object.keys(t.Patterns).length,i=0,o=1/0;for(let a=0;a<n;a++){r(a),t.applyMask(a,e);let n=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),n<o&&(o=n,i=a)}return i}},76910:function(e,t,r){let n=r(43114),i=r(7007);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!n.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return i.testNumeric(e)?t.NUMERIC:i.testAlphanumeric(e)?t.ALPHANUMERIC:i.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let r=e.toLowerCase();switch(r){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return r}}},41085:function(e,t,r){let n=r(76910);function i(e){this.mode=n.NUMERIC,this.data=e.toString()}i.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t,r;for(t=0;t+3<=this.data.length;t+=3)r=parseInt(this.data.substr(t,3),10),e.put(r,10);let n=this.data.length-t;n>0&&(r=parseInt(this.data.substr(t),10),e.put(r,3*n+1))},e.exports=i},26143:function(e,t,r){let n=r(69729);t.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let i=0;i<e.length;i++)for(let o=0;o<t.length;o++)r[i+o]^=n.mul(e[i],t[o]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let e=r[0];for(let i=0;i<t.length;i++)r[i]^=n.mul(t[i],e);let i=0;for(;i<r.length&&0===r[i];)i++;r=r.slice(i)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let i=0;i<e;i++)r=t.mul(r,new Uint8Array([1,n.exp(i)]));return r}},95115:function(e,t,r){let n=r(10242),i=r(64908),o=r(97245),a=r(73280),s=r(21845),l=r(76526),c=r(27126),u=r(35393),d=r(52882),h=r(23103),f=r(61642),p=r(76910),g=r(16130);function b(e,t,r){let n,i;let o=e.size,a=f.getEncodedBits(t,r);for(n=0;n<15;n++)i=(a>>n&1)==1,n<6?e.set(n,8,i,!0):n<8?e.set(n+1,8,i,!0):e.set(o-15+n,8,i,!0),n<8?e.set(8,o-n-1,i,!0):n<9?e.set(8,15-n-1+1,i,!0):e.set(8,15-n-1,i,!0);e.set(o-8,8,1,!0)}t.create=function(e,t){let r,f;if(void 0===e||""===e)throw Error("No input text");let w=i.M;return void 0!==t&&(w=i.from(t.errorCorrectionLevel,i.M),r=h.from(t.version),f=c.from(t.maskPattern),t.toSJISFunc&&n.setToSJISFunction(t.toSJISFunc)),function(e,t,r,i){let f;if(Array.isArray(e))f=g.fromArray(e);else if("string"==typeof e){let n=t;if(!n){let t=g.rawSplit(e);n=h.getBestVersionForData(t,r)}f=g.fromString(e,n||40)}else throw Error("Invalid data");let w=h.getBestVersionForData(f,r);if(!w)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<w)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+w+".\n")}else t=w;let m=function(e,t,r){let i=new o;r.forEach(function(t){i.put(t.mode.bit,4),i.put(t.getLength(),p.getCharCountIndicator(t.mode,e)),t.write(i)});let a=n.getSymbolTotalCodewords(e),s=u.getTotalCodewordsCount(e,t),l=(a-s)*8;for(i.getLengthInBits()+4<=l&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);let c=(l-i.getLengthInBits())/8;for(let e=0;e<c;e++)i.put(e%2?17:236,8);return function(e,t,r){let i,o;let a=n.getSymbolTotalCodewords(t),s=u.getTotalCodewordsCount(t,r),l=u.getBlocksCount(t,r),c=l-a%l,h=Math.floor((a-s)/l),f=h+1,p=Math.floor(a/l)-h,g=new d(p),b=0,w=Array(l),m=Array(l),y=0,v=new Uint8Array(e.buffer);for(let e=0;e<l;e++){let t=e<c?h:f;w[e]=v.slice(b,b+t),m[e]=g.encode(w[e]),b+=t,y=Math.max(y,t)}let x=new Uint8Array(a),C=0;for(i=0;i<y;i++)for(o=0;o<l;o++)i<w[o].length&&(x[C++]=w[o][i]);for(i=0;i<p;i++)for(o=0;o<l;o++)x[C++]=m[o][i];return x}(i,e,t)}(t,r,f),y=n.getSymbolSize(t),v=new a(y);return function(e,t){let r=e.size,n=l.getPositions(t);for(let t=0;t<n.length;t++){let i=n[t][0],o=n[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1)&&!(r<=i+t))for(let n=-1;n<=7;n++)o+n<=-1||r<=o+n||(t>=0&&t<=6&&(0===n||6===n)||n>=0&&n<=6&&(0===t||6===t)||t>=2&&t<=4&&n>=2&&n<=4?e.set(i+t,o+n,!0,!0):e.set(i+t,o+n,!1,!0))}}(v,t),function(e){let t=e.size;for(let r=8;r<t-8;r++){let t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(v),function(e,t){let r=s.getPositions(t);for(let t=0;t<r.length;t++){let n=r[t][0],i=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(n+t,i+r,!0,!0):e.set(n+t,i+r,!1,!0)}}(v,t),b(v,r,0),t>=7&&function(e,t){let r,n,i;let o=e.size,a=h.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),n=t%3+o-8-3,i=(a>>t&1)==1,e.set(r,n,i,!0),e.set(n,r,i,!0)}(v,t),function(e,t){let r=e.size,n=-1,i=r-1,o=7,a=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!e.isReserved(i,s-r)){let n=!1;a<t.length&&(n=(t[a]>>>o&1)==1),e.set(i,s-r,n),-1==--o&&(a++,o=7)}if((i+=n)<0||r<=i){i-=n,n=-n;break}}}(v,m),isNaN(i)&&(i=c.getBestMask(v,b.bind(null,v,r))),c.applyMask(i,v),b(v,r,i),{modules:v,version:t,errorCorrectionLevel:r,maskPattern:i,segments:f}}(e,r,w,f)}},52882:function(e,t,r){let n=r(26143);function i(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},i.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(r,i),e}return r},e.exports=i},7007:function(e,t){let r="[0-9]+",n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";n=n.replace(/u/g,"\\u");let i="(?:(?![A-Z0-9 $%*+\\-./:]|"+n+")(?:.|[\r\n]))+";t.KANJI=RegExp(n,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(i,"g"),t.NUMERIC=RegExp(r,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let o=RegExp("^"+n+"$"),a=RegExp("^"+r+"$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return o.test(e)},t.testNumeric=function(e){return a.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},16130:function(e,t,r){let n=r(76910),i=r(41085),o=r(8260),a=r(43424),s=r(35442),l=r(7007),c=r(10242),u=r(65987);function d(e){return unescape(encodeURIComponent(e)).length}function h(e,t,r){let n;let i=[];for(;null!==(n=e.exec(r));)i.push({data:n[0],index:n.index,mode:t,length:n[0].length});return i}function f(e){let t,r;let i=h(l.NUMERIC,n.NUMERIC,e),o=h(l.ALPHANUMERIC,n.ALPHANUMERIC,e);c.isKanjiModeEnabled()?(t=h(l.BYTE,n.BYTE,e),r=h(l.KANJI,n.KANJI,e)):(t=h(l.BYTE_KANJI,n.BYTE,e),r=[]);let a=i.concat(o,t,r);return a.sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function p(e,t){switch(t){case n.NUMERIC:return i.getBitsLength(e);case n.ALPHANUMERIC:return o.getBitsLength(e);case n.KANJI:return s.getBitsLength(e);case n.BYTE:return a.getBitsLength(e)}}function g(e,t){let r;let l=n.getBestModeForData(e);if((r=n.from(t,l))!==n.BYTE&&r.bit<l.bit)throw Error('"'+e+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(l));switch(r!==n.KANJI||c.isKanjiModeEnabled()||(r=n.BYTE),r){case n.NUMERIC:return new i(e);case n.ALPHANUMERIC:return new o(e);case n.KANJI:return new s(e);case n.BYTE:return new a(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},t.fromString=function(e,r){let i=f(e,c.isKanjiModeEnabled()),o=function(e){let t=[];for(let r=0;r<e.length;r++){let i=e[r];switch(i.mode){case n.NUMERIC:t.push([i,{data:i.data,mode:n.ALPHANUMERIC,length:i.length},{data:i.data,mode:n.BYTE,length:i.length}]);break;case n.ALPHANUMERIC:t.push([i,{data:i.data,mode:n.BYTE,length:i.length}]);break;case n.KANJI:t.push([i,{data:i.data,mode:n.BYTE,length:d(i.data)}]);break;case n.BYTE:t.push([{data:i.data,mode:n.BYTE,length:d(i.data)}])}}return t}(i),a=function(e,t){let r={},i={start:{}},o=["start"];for(let a=0;a<e.length;a++){let s=e[a],l=[];for(let e=0;e<s.length;e++){let c=s[e],u=""+a+e;l.push(u),r[u]={node:c,lastCount:0},i[u]={};for(let e=0;e<o.length;e++){let a=o[e];r[a]&&r[a].node.mode===c.mode?(i[a][u]=p(r[a].lastCount+c.length,c.mode)-p(r[a].lastCount,c.mode),r[a].lastCount+=c.length):(r[a]&&(r[a].lastCount=c.length),i[a][u]=p(c.length,c.mode)+4+n.getCharCountIndicator(c.mode,t))}}o=l}for(let e=0;e<o.length;e++)i[o[e]].end=0;return{map:i,table:r}}(o,r),s=u.find_path(a.map,"start","end"),l=[];for(let e=1;e<s.length-1;e++)l.push(a.table[s[e]].node);return t.fromArray(l.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[]))},t.rawSplit=function(e){return t.fromArray(f(e,c.isKanjiModeEnabled()))}},10242:function(e,t){let r;let n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return n[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},43114:function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},23103:function(e,t,r){let n=r(10242),i=r(35393),o=r(64908),a=r(76910),s=r(43114),l=n.getBCHDigit(7973);function c(e,t){return a.getCharCountIndicator(e,t)+4}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);let o=n.getSymbolTotalCodewords(e),l=i.getTotalCodewordsCount(e,t),u=(o-l)*8;if(r===a.MIXED)return u;let d=u-c(r,e);switch(r){case a.NUMERIC:return Math.floor(d/10*3);case a.ALPHANUMERIC:return Math.floor(d/11*2);case a.KANJI:return Math.floor(d/13);case a.BYTE:default:return Math.floor(d/8)}},t.getBestVersionForData=function(e,r){let n;let i=o.from(r,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let n=1;n<=40;n++){let i=function(e,t){let r=0;return e.forEach(function(e){let n=c(e.mode,t);r+=n+e.getBitsLength()}),r}(e,n);if(i<=t.getCapacity(n,r,a.MIXED))return n}}(e,i);if(0===e.length)return 1;n=e[0]}else n=e;return function(e,r,n){for(let i=1;i<=40;i++)if(r<=t.getCapacity(i,n,e))return i}(n.mode,n.getLength(),i)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;n.getBCHDigit(t)-l>=0;)t^=7973<<n.getBCHDigit(t)-l;return e<<12|t}},6907:function(e,t,r){let n=r(89653);t.render=function(e,t,r){var i;let o=r,a=t;void 0!==o||t&&t.getContext||(o=t,t=void 0),t||(a=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),o=n.getOptions(o);let s=n.getImageWidth(e.modules.size,o),l=a.getContext("2d"),c=l.createImageData(s,s);return n.qrToImageData(c.data,e,o),i=a,l.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px",l.putImageData(c,0,0),a},t.renderToDataURL=function(e,r,n){let i=n;void 0!==i||r&&r.getContext||(i=r,r=void 0),i||(i={});let o=t.render(e,r,i),a=i.type||"image/png",s=i.rendererOpts||{};return o.toDataURL(a,s.quality)}},93776:function(e,t,r){let n=r(89653);function i(e,t){let r=e.a/255,n=t+'="'+e.hex+'"';return r<1?n+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function o(e,t,r){let n=e+t;return void 0!==r&&(n+=" "+r),n}t.render=function(e,t,r){let a=n.getOptions(t),s=e.modules.size,l=e.modules.data,c=s+2*a.margin,u=a.color.light.a?"<path "+i(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",d="<path "+i(a.color.dark,"stroke")+' d="'+function(e,t,r){let n="",i=0,a=!1,s=0;for(let l=0;l<e.length;l++){let c=Math.floor(l%t),u=Math.floor(l/t);c||a||(a=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(n+=a?o("M",c+r,.5+u+r):o("m",i,0),i=0,a=!1),c+1<t&&e[l+1]||(n+=o("h",s),s=0)):i++}return n}(l,s,a.margin)+'"/>',h=a.width?'width="'+a.width+'" height="'+a.width+'" ':"",f='<svg xmlns="http://www.w3.org/2000/svg" '+h+('viewBox="0 0 '+c)+" "+c+'" shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"==typeof r&&r(null,f),f}},89653:function(e,t){function r(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:n,scale:n?4:i,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){let n=t.getScale(e,r);return Math.floor((e+2*r.margin)*n)},t.qrToImageData=function(e,r,n){let i=r.modules.size,o=r.modules.data,a=t.getScale(i,n),s=Math.floor((i+2*n.margin)*a),l=n.margin*a,c=[n.color.light,n.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let u=(t*s+r)*4,d=n.color.light;if(t>=l&&r>=l&&t<s-l&&r<s-l){let e=Math.floor((t-l)/a),n=Math.floor((r-l)/a);d=c[o[e*i+n]?1:0]}e[u++]=d.r,e[u++]=d.g,e[u++]=d.b,e[u]=d.a}}},69921:function(e,t){"use strict";/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r,n=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen");r=Symbol.for("react.module.reference"),t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===a||e===h||e===f||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===l||e.$$typeof===c||e.$$typeof===d||e.$$typeof===r||void 0!==e.getModuleId)},t.typeOf=function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case s:case a:case h:case f:return e;default:switch(e=e&&e.$$typeof){case u:case c:case d:case g:case p:case l:return e;default:return t}}case i:return t}}}},59864:function(e,t,r){"use strict";e.exports=r(69921)},96774:function(e){e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=r?r.call(n,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},80500:function(e){"use strict";e.exports=(e,t)=>{if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];let r=e.indexOf(t);return -1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},70610:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},19521:function(e,t,r){"use strict";r.d(t,{vJ:function(){return eI},iv:function(){return ev},ZP:function(){return eR},F4:function(){return eT}});var n,i,o=r(59864),a=r(67294),s=r(96774),l=r.n(s),c=function(e){function t(e,t,n){var i=t.trim().split(p);t=i;var o=i.length,a=e.length;switch(a){case 0:case 1:var s=0;for(e=0===a?"":e[0]+" ";s<o;++s)t[s]=r(e,t[s],n).trim();break;default:var l=s=0;for(t=[];s<o;++s)for(var c=0;c<a;++c)t[l++]=r(e[c]+" ",i[s],n).trim()}return t}function r(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function n(e,t,r,o){var a=e+";",s=2*t+3*r+4*o;if(944===s){e=a.indexOf(":",9)+1;var l=a.substring(e,a.length-1).trim();return l=a.substring(0,e).trim()+l+";",1===_||2===_&&i(l,1)?"-webkit-"+l+l:l}if(0===_||2===_&&!i(a,1))return a;switch(s){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(S,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(l=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+l+a;case 1005:return h.test(a)?a.replace(d,":-webkit-")+a.replace(d,":-moz-")+a:a;case 1e3:switch(t=(l=a.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(t)){case 226:l=a.replace(y,"tb");break;case 232:l=a.replace(y,"tb-rl");break;case 220:l=a.replace(y,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+l+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(t=(a=e).length-10,s=(l=(33===a.charCodeAt(t)?a.substring(0,t):a).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:a=a.replace(l,"-webkit-"+l)+";"+a;break;case 207:case 102:a=a.replace(l,"-webkit-"+(102<s?"inline-":"")+"box")+";"+a.replace(l,"-webkit-"+l)+";"+a.replace(l,"-ms-"+l+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return l=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+l+"-ms-flex-"+l+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(C,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(C,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===k.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?n(e.replace("stretch","fill-available"),t,r,o).replace(":fill-available",":stretch"):a.replace(l,"-webkit-"+l)+a.replace(l,"-moz-"+l.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,211===r+o&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(f,"$1-webkit-$2")+a}return a}function i(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),T(2!==t?n:n.replace(E,"$1"),r,t)}function o(e,t){var r=n(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(x," or ($1)").substring(4):"("+t+")"}function a(e,t,r,n,i,o,a,s,c,u){for(var d,h=0,f=t;h<I;++h)switch(d=O[h].call(l,e,f,r,n,i,o,a,s,c,u)){case void 0:case!1:case!0:case null:break;default:f=d}if(f!==t)return f}function s(e){return void 0!==(e=e.prefix)&&(T=null,e?"function"!=typeof e?_=1:(_=2,T=e):_=0),s}function l(e,r){var s=e;if(33>s.charCodeAt(0)&&(s=s.trim()),s=[s],0<I){var l=a(-1,r,s,s,$,A,0,0,0,0);void 0!==l&&"string"==typeof l&&(r=l)}var d=function e(r,s,l,d,h){for(var f,p,g,y,x,C=0,E=0,k=0,S=0,O=0,T=0,N=g=f=0,j=0,M=0,B=0,U=0,L=l.length,z=L-1,F="",W="",H="",q="";j<L;){if(p=l.charCodeAt(j),j===z&&0!==E+S+k+C&&(0!==E&&(p=47===E?10:47),S=k=C=0,L++,z++),0===E+S+k+C){if(j===z&&(0<M&&(F=F.replace(u,"")),0<F.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:F+=l.charAt(j)}p=59}switch(p){case 123:for(f=(F=F.trim()).charCodeAt(0),g=1,U=++j;j<L;){switch(p=l.charCodeAt(j)){case 123:g++;break;case 125:g--;break;case 47:switch(p=l.charCodeAt(j+1)){case 42:case 47:e:{for(N=j+1;N<z;++N)switch(l.charCodeAt(N)){case 47:if(42===p&&42===l.charCodeAt(N-1)&&j+2!==N){j=N+1;break e}break;case 10:if(47===p){j=N+1;break e}}j=N}}break;case 91:p++;case 40:p++;case 34:case 39:for(;j++<z&&l.charCodeAt(j)!==p;);}if(0===g)break;j++}if(g=l.substring(U,j),0===f&&(f=(F=F.replace(c,"").trim()).charCodeAt(0)),64===f){switch(0<M&&(F=F.replace(u,"")),p=F.charCodeAt(1)){case 100:case 109:case 115:case 45:M=s;break;default:M=D}if(U=(g=e(s,M,g,p,h+1)).length,0<I&&(M=t(D,F,B),x=a(3,g,M,s,$,A,U,p,h,d),F=M.join(""),void 0!==x&&0===(U=(g=x.trim()).length)&&(p=0,g="")),0<U)switch(p){case 115:F=F.replace(v,o);case 100:case 109:case 45:g=F+"{"+g+"}";break;case 107:g=(F=F.replace(b,"$1 $2"))+"{"+g+"}",g=1===_||2===_&&i("@"+g,3)?"@-webkit-"+g+"@"+g:"@"+g;break;default:g=F+g,112===d&&(W+=g,g="")}else g=""}else g=e(s,t(s,F,B),g,d,h+1);H+=g,g=B=M=N=f=0,F="",p=l.charCodeAt(++j);break;case 125:case 59:if(1<(U=(F=(0<M?F.replace(u,""):F).trim()).length))switch(0===N&&(45===(f=F.charCodeAt(0))||96<f&&123>f)&&(U=(F=F.replace(" ",":")).length),0<I&&void 0!==(x=a(1,F,s,r,$,A,W.length,d,h,d))&&0===(U=(F=x.trim()).length)&&(F="\x00\x00"),f=F.charCodeAt(0),p=F.charCodeAt(1),f){case 0:break;case 64:if(105===p||99===p){q+=F+l.charAt(j);break}default:58!==F.charCodeAt(U-1)&&(W+=n(F,f,p,F.charCodeAt(2)))}B=M=N=f=0,F="",p=l.charCodeAt(++j)}}switch(p){case 13:case 10:47===E?E=0:0===1+f&&107!==d&&0<F.length&&(M=1,F+="\x00"),0<I*R&&a(0,F,s,r,$,A,W.length,d,h,d),A=1,$++;break;case 59:case 125:if(0===E+S+k+C){A++;break}default:switch(A++,y=l.charAt(j),p){case 9:case 32:if(0===S+C+E)switch(O){case 44:case 58:case 9:case 32:y="";break;default:32!==p&&(y=" ")}break;case 0:y="\\0";break;case 12:y="\\f";break;case 11:y="\\v";break;case 38:0===S+E+C&&(M=B=1,y="\f"+y);break;case 108:if(0===S+E+C+P&&0<N)switch(j-N){case 2:112===O&&58===l.charCodeAt(j-3)&&(P=O);case 8:111===T&&(P=T)}break;case 58:0===S+E+C&&(N=j);break;case 44:0===E+k+S+C&&(M=1,y+="\r");break;case 34:case 39:0===E&&(S=S===p?0:0===S?p:S);break;case 91:0===S+E+k&&C++;break;case 93:0===S+E+k&&C--;break;case 41:0===S+E+C&&k--;break;case 40:0===S+E+C&&(0===f&&(2*O+3*T==533||(f=1)),k++);break;case 64:0===E+k+S+C+N+g&&(g=1);break;case 42:case 47:if(!(0<S+C+k))switch(E){case 0:switch(2*p+3*l.charCodeAt(j+1)){case 235:E=47;break;case 220:U=j,E=42}break;case 42:47===p&&42===O&&U+2!==j&&(33===l.charCodeAt(U+2)&&(W+=l.substring(U,j+1)),y="",E=0)}}0===E&&(F+=y)}T=O,O=p,j++}if(0<(U=W.length)){if(M=s,0<I&&void 0!==(x=a(2,W,M,r,$,A,U,d,h,d))&&0===(W=x).length)return q+W+H;if(W=M.join(",")+"{"+W+"}",0!=_*P){switch(2!==_||i(W,2)||(P=0),P){case 111:W=W.replace(m,":-moz-$1")+W;break;case 112:W=W.replace(w,"::-webkit-input-$1")+W.replace(w,"::-moz-$1")+W.replace(w,":-ms-input-$1")+W}P=0}}return q+W+H}(D,s,r,0,0);return 0<I&&void 0!==(l=a(-2,d,s,s,$,A,d.length,0,0,0))&&(d=l),P=0,A=$=1,d}var c=/^\0+/g,u=/[\0\r\f]/g,d=/: */g,h=/zoo|gra/,f=/([,: ])(transform)/g,p=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,w=/::(place)/g,m=/:(read-only)/g,y=/[svh]\w+-[tblr]{2}/,v=/\(\s*(.*)\s*\)/g,x=/([\s\S]*?);/g,C=/-self|flex-/g,E=/[^]*?(:[rp][el]a[\w-]+)[^]*/,k=/stretch|:\s*\w+\-(?:conte|avail)/,S=/([^-])(image-set\()/,A=1,$=1,P=0,_=1,D=[],O=[],I=0,T=null,R=0;return l.use=function e(t){switch(t){case void 0:case null:I=O.length=0;break;default:if("function"==typeof t)O[I++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else R=0|!!t}return e},l.set=s,void 0!==e&&s(e),l},u={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},d=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,h=(n=Object.create(null),function(e){return void 0===n[e]&&(n[e]=d.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&91>e.charCodeAt(2)),n[e]}),f=r(8679),p=r.n(f),g=r(34155);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var w=function(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r},m=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,o.typeOf)(e)},y=Object.freeze([]),v=Object.freeze({});function x(e){return"function"==typeof e}function C(e){return e.displayName||e.name||"Component"}function E(e){return e&&"string"==typeof e.styledComponentId}var k=void 0!==g&&(g.env.REACT_APP_SC_ATTR||g.env.SC_ATTR)||"data-styled",S="undefined"!=typeof window&&"HTMLElement"in window,A=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==g&&void 0!==g.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==g.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==g.env.REACT_APP_SC_DISABLE_SPEEDY&&g.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==g&&void 0!==g.env.SC_DISABLE_SPEEDY&&""!==g.env.SC_DISABLE_SPEEDY&&"false"!==g.env.SC_DISABLE_SPEEDY&&g.env.SC_DISABLE_SPEEDY),$={};function P(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var _=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)(i<<=1)<0&&P(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=n;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=0,l=t.length;s<l;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,o=n;o<i;o++)t+=this.tag.getRule(o)+"/*!sc*/\n";return t},e}(),D=new Map,O=new Map,I=1,T=function(e){if(D.has(e))return D.get(e);for(;O.has(I);)I++;var t=I++;return D.set(e,t),O.set(t,e),t},R=function(e,t){t>=I&&(I=t+1),D.set(e,t),O.set(t,e)},N="style["+k+'][data-styled-version="5.3.6"]',j=RegExp("^"+k+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),M=function(e,t,r){for(var n,i=r.split(","),o=0,a=i.length;o<a;o++)(n=i[o])&&e.registerName(t,n)},B=function(e,t){for(var r=(t.textContent||"").split("/*!sc*/\n"),n=[],i=0,o=r.length;i<o;i++){var a=r[i].trim();if(a){var s=a.match(j);if(s){var l=0|parseInt(s[1],10),c=s[2];0!==l&&(R(c,l),M(e,c,s[3]),e.getTag().insertRules(l,n)),n.length=0}else n.push(a)}}},U=function(){return r.nc},L=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(k))return n}}(r),o=void 0!==i?i.nextSibling:null;n.setAttribute(k,"active"),n.setAttribute("data-styled-version","5.3.6");var a=U();return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},z=function(){function e(e){var t=this.element=L(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}P(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),F=function(){function e(e){var t=this.element=L(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t),n=this.nodes[e];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),H=S,q={isServer:!S,useCSSOMInjection:!A},G=function(){function e(e,t,r){void 0===e&&(e=v),void 0===t&&(t={}),this.options=b({},q,{},e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&S&&H&&(H=!1,function(e){for(var t=document.querySelectorAll(N),r=0,n=t.length;r<n;r++){var i=t[r];i&&"active"!==i.getAttribute(k)&&(B(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return T(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(b({},this.options,{},t),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){var e,t,r,n,i;return this.tag||(this.tag=(r=(t=this.options).isServer,n=t.useCSSOMInjection,i=t.target,e=r?new W(i):n?new z(i):new F(i),new _(e)))},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(T(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},t.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(T(e),r)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(T(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",i=0;i<r;i++){var o,a=(o=i,O.get(o));if(void 0!==a){var s=e.names.get(a),l=t.getGroup(i);if(s&&l&&s.size){var c=k+".g"+i+'[id="'+a+'"]',u="";void 0!==s&&s.forEach(function(e){e.length>0&&(u+=e+",")}),n+=""+l+c+'{content:"'+u+'"}/*!sc*/\n'}}}return n}(this)},e}(),Z=/(a)(d)/gi,V=function(e){return String.fromCharCode(e+(e>25?39:97))};function K(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=V(t%52)+r;return(V(t%52)+r).replace(Z,"$1-$2")}var Q=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Y=function(e){return Q(5381,e)};function X(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(x(r)&&!E(r))return!1}return!0}var J=Y("5.3.6"),ee=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&X(e),this.componentId=t,this.baseHash=Q(J,t),this.baseStyle=r,G.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,r)),this.isStatic&&!r.hash){if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))i.push(this.staticRulesId);else{var o=em(this.rules,e,t,r).join(""),a=K(Q(this.baseHash,o)>>>0);if(!t.hasNameForId(n,a)){var s=r(o,"."+a,void 0,n);t.insertRules(n,a,s)}i.push(a),this.staticRulesId=a}}else{for(var l=this.rules.length,c=Q(this.baseHash,r.hash),u="",d=0;d<l;d++){var h=this.rules[d];if("string"==typeof h)u+=h;else if(h){var f=em(h,e,t,r),p=Array.isArray(f)?f.join(""):f;c=Q(c,p+d),u+=p}}if(u){var g=K(c>>>0);if(!t.hasNameForId(n,g)){var b=r(u,"."+g,void 0,n);t.insertRules(n,g,b)}i.push(g)}}return i.join(" ")},e}(),et=/^\s*\/\/.*$/gm,er=[":","[",".","#"];function en(e){var t,r,n,i,o=void 0===e?v:e,a=o.options,s=o.plugins,l=void 0===s?y:s,u=new c(void 0===a?v:a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(r,n,i,o,a,s,l,c,u,d){switch(r){case 1:if(0===u&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===c)return n+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(i[0]+n),"";default:return n+(0===d?"/*|*/":"")}case -2:n.split("/*|*/}").forEach(t)}}}(function(e){d.push(e)}),f=function(e,n,o){return 0===n&&-1!==er.indexOf(o[r.length])||o.match(i)?e:"."+t};function p(e,o,a,s){void 0===s&&(s="&");var l=e.replace(et,"");return t=s,n=RegExp("\\"+(r=o)+"\\b","g"),i=RegExp("(\\"+r+"\\b){2,}"),u(a||!o?"":o,o&&a?a+" "+o+" { "+l+" }":l)}return u.use([].concat(l,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(r)>0&&(i[0]=i[0].replace(n,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),p.hash=l.length?l.reduce(function(e,t){return t.name||P(15),Q(e,t.name)},5381).toString():"",p}var ei=a.createContext(),eo=(ei.Consumer,a.createContext()),ea=(eo.Consumer,new G),es=en();function el(){return(0,a.useContext)(ei)||ea}function ec(){return(0,a.useContext)(eo)||es}function eu(e){var t=(0,a.useState)(e.stylisPlugins),r=t[0],n=t[1],i=el(),o=(0,a.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target]),s=(0,a.useMemo)(function(){return en({options:{prefix:!e.disableVendorPrefixes},plugins:r})},[e.disableVendorPrefixes,r]);return(0,a.useEffect)(function(){l()(r,e.stylisPlugins)||n(e.stylisPlugins)},[e.stylisPlugins]),a.createElement(ei.Provider,{value:o},a.createElement(eo.Provider,{value:s},e.children))}var ed=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=es);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.toString=function(){return P(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=es),this.name+e.hash},e}(),eh=/([A-Z])/,ef=/([A-Z])/g,ep=/^ms-/,eg=function(e){return"-"+e.toLowerCase()};function eb(e){return eh.test(e)?e.replace(ef,eg).replace(ep,"-ms-"):e}var ew=function(e){return null==e||!1===e||""===e};function em(e,t,r,n){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)""!==(i=em(e[a],t,r,n))&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}return ew(e)?"":E(e)?"."+e.styledComponentId:x(e)?"function"!=typeof e||e.prototype&&e.prototype.isReactComponent||!t?e:em(e(t),t,r,n):e instanceof ed?r?(e.inject(r,n),e.getName(n)):e:m(e)?function e(t,r){var n,i,o=[];for(var a in t)t.hasOwnProperty(a)&&!ew(t[a])&&(Array.isArray(t[a])&&t[a].isCss||x(t[a])?o.push(eb(a)+":",t[a],";"):m(t[a])?o.push.apply(o,e(t[a],a)):o.push(eb(a)+": "+(n=a,null==(i=t[a])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||n in u?String(i).trim():i+"px")+";"));return r?[r+" {"].concat(o,["}"]):o}(e):e.toString()}var ey=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ev(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return x(e)||m(e)?ey(em(w(y,[e].concat(r)))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:ey(em(w(e,r)))}var ex=function(e,t,r){return void 0===r&&(r=v),e.theme!==r.theme&&e.theme||t||r.theme},eC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,eE=/(^-|-$)/g;function ek(e){return e.replace(eC,"-").replace(eE,"")}var eS=function(e){return K(Y(e)>>>0)};function eA(e){return"string"==typeof e}var e$=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},eP=a.createContext();eP.Consumer;var e_={},eD=function(e){return function e(t,r,n){if(void 0===n&&(n=v),!(0,o.isValidElementType)(r))return P(1,String(r));var i=function(){return t(r,n,ev.apply(void 0,arguments))};return i.withConfig=function(i){return e(t,r,b({},n,{},i))},i.attrs=function(i){return e(t,r,b({},n,{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i}(function e(t,r,n){var i=E(t),o=!eA(t),s=r.attrs,l=void 0===s?y:s,c=r.componentId,u=void 0===c?(k=r.displayName,S=r.parentComponentId,e_[A="string"!=typeof k?"sc":ek(k)]=(e_[A]||0)+1,$=A+"-"+eS("5.3.6"+A+e_[A]),S?S+"-"+$:$):c,d=r.displayName,f=void 0===d?eA(t)?"styled."+t:"Styled("+C(t)+")":d,g=r.displayName&&r.componentId?ek(r.displayName)+"-"+r.componentId:r.componentId||u,w=i&&t.attrs?Array.prototype.concat(t.attrs,l).filter(Boolean):l,m=r.shouldForwardProp;i&&t.shouldForwardProp&&(m=r.shouldForwardProp?function(e,n,i){return t.shouldForwardProp(e,n,i)&&r.shouldForwardProp(e,n,i)}:t.shouldForwardProp);var k,S,A,$,P,_=new ee(n,g,i?t.componentStyle:void 0),D=_.isStatic&&0===l.length,O=function(e,t){return function(e,t,r,n){var i,o,s,l,c,u=e.attrs,d=e.componentStyle,f=e.defaultProps,p=e.foldedComponentIds,g=e.shouldForwardProp,w=e.styledComponentId,m=e.target,y=(void 0===(i=ex(t,(0,a.useContext)(eP),f)||v)&&(i=v),o=b({},t,{theme:i}),s={},u.forEach(function(e){var t,r,n,i=e;for(t in x(i)&&(i=i(o)),i)o[t]=s[t]="className"===t?(r=s[t],n=i[t],r&&n?r+" "+n:r||n):i[t]}),[o,s]),C=y[0],E=y[1],k=(l=el(),c=ec(),n?d.generateAndInjectStyles(v,l,c):d.generateAndInjectStyles(C,l,c)),S=E.$as||t.$as||E.as||t.as||m,A=eA(S),$=E!==t?b({},t,{},E):t,P={};for(var _ in $)"$"!==_[0]&&"as"!==_&&("forwardedAs"===_?P.as=$[_]:(g?g(_,h,S):!A||h(_))&&(P[_]=$[_]));return t.style&&E.style!==t.style&&(P.style=b({},t.style,{},E.style)),P.className=Array.prototype.concat(p,w,k!==w?k:null,t.className,E.className).filter(Boolean).join(" "),P.ref=r,(0,a.createElement)(S,P)}(P,e,t,D)};return O.displayName=f,(P=a.forwardRef(O)).attrs=w,P.componentStyle=_,P.displayName=f,P.shouldForwardProp=m,P.foldedComponentIds=i?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):y,P.styledComponentId=g,P.target=i?t.target:t,P.withComponent=function(t){var i=r.componentId,o=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}(r,["componentId"]),a=i&&i+"-"+(eA(t)?t:ek(C(t)));return e(t,b({},o,{attrs:w,componentId:a}),n)},Object.defineProperty(P,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function e(t){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];for(var o=0;o<n.length;o++){var a,s=n[o];if(e$(s))for(var l in s)"__proto__"!==(a=l)&&"constructor"!==a&&"prototype"!==a&&function(t,r,n){var i=t[n];e$(r)&&e$(i)?e(i,r):t[n]=r}(t,s[l],l)}return t}({},t.defaultProps,e):e}}),P.toString=function(){return"."+P.styledComponentId},o&&p()(P,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),P},e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){eD[e]=eD(e)});var eO=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=X(e),G.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,r,n){var i=n(em(this.rules,t,r,n).join(""),""),o=this.componentId+e;r.insertRules(o,o,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,r,n){e>2&&G.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();function eI(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=ev.apply(void 0,[e].concat(r)),o="sc-global-"+eS(JSON.stringify(i)),s=new eO(i,o);function l(e){var t=el(),r=ec(),n=(0,a.useContext)(eP),i=(0,a.useRef)(t.allocateGSInstance(o)).current;return t.server&&c(i,e,t,n,r),(0,a.useLayoutEffect)(function(){if(!t.server)return c(i,e,t,n,r),function(){return s.removeStyles(i,t)}},[i,e,t,n,r]),null}function c(e,t,r,n,i){if(s.isStatic)s.renderStyles(e,$,r,i);else{var o=b({},t,{theme:ex(t,n,l.defaultProps)});s.renderStyles(e,o,r,i)}}return a.memo(l)}function eT(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=ev.apply(void 0,[e].concat(r)).join(""),o=eS(i);return new ed(o,i)}(i=(function(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=U();return"<style "+[r&&'nonce="'+r+'"',k+'="true"','data-styled-version="5.3.6"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?P(2):e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)return P(2);var t,r=((t={})[k]="",t["data-styled-version"]="5.3.6",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),n=U();return n&&(r.nonce=n),[a.createElement("style",b({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new G({isServer:!0}),this.sealed=!1}).prototype).collectStyles=function(e){return this.sealed?P(2):a.createElement(eu,{sheet:this.instance},e)},i.interleaveWithNodeStream=function(e){return P(3)};var eR=eD},70655:function(e,t,r){"use strict";r.r(t),r.d(t,{__assign:function(){return o},__asyncDelegator:function(){return v},__asyncGenerator:function(){return y},__asyncValues:function(){return x},__await:function(){return m},__awaiter:function(){return u},__classPrivateFieldGet:function(){return S},__classPrivateFieldSet:function(){return A},__createBinding:function(){return h},__decorate:function(){return s},__exportStar:function(){return f},__extends:function(){return i},__generator:function(){return d},__importDefault:function(){return k},__importStar:function(){return E},__makeTemplateObject:function(){return C},__metadata:function(){return c},__param:function(){return l},__read:function(){return g},__rest:function(){return a},__spread:function(){return b},__spreadArrays:function(){return w},__values:function(){return p}});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function s(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}function l(e,t){return function(r,n){t(r,n,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}l((n=n.apply(e,t||[])).next())})}function d(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function h(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}function f(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function w(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),i=0,t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)n[i]=o[a];return n}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function y(e,t,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var n,i=r.apply(e,t||[]),o=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){i[e]&&(n[e]=function(t){return new Promise(function(r,n){o.push([e,t,r,n])>1||s(e,t)})})}function s(e,t){try{var r;(r=i[e](t)).value instanceof m?Promise.resolve(r.value.v).then(l,c):u(o[0][2],r)}catch(e){u(o[0][3],e)}}function l(e){s("next",e)}function c(e){s("throw",e)}function u(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}}function v(e){var t,r;return t={},n("next"),n("throw",function(e){throw e}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,i){t[n]=e[n]?function(t){return(r=!r)?{value:m(e[n](t)),done:"return"===n}:i?i(t):t}:i}}function x(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=p(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise(function(n,i){!function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)}(n,i,(t=e[r](t)).done,t.value)})}}}function C(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function k(e){return e&&e.__esModule?e:{default:e}}function S(e,t){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return t.get(e)}function A(e,t,r){if(!t.has(e))throw TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},53250:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(67294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,a=n.useEffect,s=n.useLayoutEffect,l=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),i=n[0].inst,u=n[1];return s(function(){i.value=r,i.getSnapshot=t,c(i)&&u({inst:i})},[e,r,t]),a(function(){return c(i)&&u({inst:i}),e(function(){c(i)&&u({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:u},50139:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(67294),i=r(61688),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useSyncExternalStore,s=n.useRef,l=n.useEffect,c=n.useMemo,u=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var d=s(null);if(null===d.current){var h={hasValue:!1,value:null};d.current=h}else h=d.current;d=c(function(){function e(e){if(!l){if(l=!0,a=e,e=n(e),void 0!==i&&h.hasValue){var t=h.value;if(i(t,e))return s=t}return s=e}if(t=s,o(a,e))return t;var r=n(e);return void 0!==i&&i(t,r)?t:(a=e,s=r)}var a,s,l=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,n,i]);var f=a(e,d[0],d[1]);return l(function(){h.hasValue=!0,h.value=f},[f]),u(f),f}},61688:function(e,t,r){"use strict";e.exports=r(53250)},52798:function(e,t,r){"use strict";e.exports=r(50139)},35883:function(){},7297:function(e,t,r){"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,{Z:function(){return n}})},74278:function(e,t,r){"use strict";r.d(t,{_:function(){return h}});var n,i=r(57858),o=r(53516),a=r(75276),s=r(45775),l=r(39028),c=r(21032),u=r(3980),d=r(92106),h=class extends a.wR{constructor({chains:e,options:t}={}){let r={shimDisconnect:!0,getProvider(){if("undefined"==typeof window)return;let e=window.ethereum;return e?.providers?e.providers[0]:e},...t};super({chains:e,options:r}),this.id="injected",(0,a.Ko)(this,n,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,s.K)(e[0])})},this.onChainChanged=e=>{let t=(0,o.J)(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=async e=>{if(1013===e.code){let e=await this.getProvider();if(e){let e=await this.getAccount();if(e)return}}this.emit("disconnect"),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey)};let i=r.getProvider();if("string"==typeof r.name)this.name=r.name;else if(i){let e=function(e){if(!e)return"Injected";let t=e=>e.isApexWallet?"Apex Wallet":e.isAvalanche?"Core Wallet":e.isBackpack?"Backpack":e.isBifrost?"Bifrost Wallet":e.isBitKeep?"BitKeep":e.isBitski?"Bitski":e.isBlockWallet?"BlockWallet":e.isBraveWallet?"Brave Wallet":e.isCoin98?"Coin98 Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isDawn?"Dawn Wallet":e.isDefiant?"Defiant":e.isDesig?"Desig Wallet":e.isEnkrypt?"Enkrypt":e.isExodus?"Exodus":e.isFordefi?"Fordefi":e.isFrame?"Frame":e.isFrontier?"Frontier Wallet":e.isGamestop?"GameStop Wallet":e.isHaqqWallet?"HAQQ Wallet":e.isHyperPay?"HyperPay Wallet":e.isImToken?"ImToken":e.isHaloWallet?"Halo Wallet":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isNovaWallet?"Nova Wallet":e.isOkxWallet||e.isOKExWallet?"OKX Wallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOpera?"Opera":e.isPhantom?"Phantom":e.isPortal?"Ripio Portal":e.isRabby?"Rabby Wallet":e.isRainbow?"Rainbow":e.isStatus?"Status":e.isSubWallet?"SubWallet":e.isTalisman?"Talisman":e.isTally?"Taho":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isTTWallet?"TTWallet":e.isXDEFI?"XDEFI Wallet":e.isZeal?"Zeal":e.isZerion?"Zerion":e.isMetaMask?"MetaMask":void 0;if(e.providers?.length){let r=new Set,n=1;for(let i of e.providers){let e=t(i);e||(e=`Unknown Wallet #${n}`,n+=1),r.add(e)}let i=[...r];return i.length?i:i[0]??"Injected"}return t(e)??"Injected"}(i);r.name?this.name=r.name(e):"string"==typeof e?this.name=e:this.name=e[0]}else this.name="Injected";this.ready=!!i}async connect({chainId:e}={}){try{let t=await this.getProvider();if(!t)throw new i.N;t.on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});let r=await t.request({method:"eth_requestAccounts"}),n=(0,s.K)(r[0]),o=await this.getChainId(),a=this.isChainUnsupported(o);if(e&&o!==e){let t=await this.switchChain(e);o=t.id,a=this.isChainUnsupported(o)}return this.options.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:n,chain:{id:o,unsupported:a}}}catch(e){if(this.isUserRejectedRequestError(e))throw new l.ab(e);if(-32002===e.code)throw new l.pT(e);throw e}}async disconnect(){let e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))}async getAccount(){let e=await this.getProvider();if(!e)throw new i.N;let t=await e.request({method:"eth_accounts"});return(0,s.K)(t[0])}async getChainId(){let e=await this.getProvider();if(!e)throw new i.N;return e.request({method:"eth_chainId"}).then(o.J)}async getProvider(){let e=this.options.getProvider();return e&&(0,a.qx)(this,n,e),(0,a.ac)(this,n)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,c.K)({account:r,chain:n,transport:(0,u.P)(t)})}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey))return!1;let e=await this.getProvider();if(!e)throw new i.N;let t=await this.getAccount();return!!t}catch{return!1}}async switchChain(e){let t=await this.getProvider();if(!t)throw new i.N;let r=(0,d.eC)(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),new Promise(t=>this.on("change",({chain:r})=>{r?.id===e&&t()}))]),this.chains.find(t=>t.id===e)??{id:e,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(o){let n=this.chains.find(t=>t.id===e);if(!n)throw new i.B({chainId:e,connectorId:this.id});if(4902===o.code||o?.data?.originalError?.code===4902)try{await t.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:n.name,nativeCurrency:n.nativeCurrency,rpcUrls:[n.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(n)}]});let i=await this.getChainId();if(i!==e)throw new l.ab(Error("User rejected switch after adding network."));return n}catch(e){throw new l.ab(e)}if(this.isUserRejectedRequestError(o))throw new l.ab(o);throw new l.x3(o)}}async watchAsset({address:e,decimals:t=18,image:r,symbol:n}){let o=await this.getProvider();if(!o)throw new i.N;return o.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:r,symbol:n}}})}isUserRejectedRequestError(e){return 4001===e.code}};n=new WeakMap},53516:function(e,t,r){"use strict";function n(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}r.d(t,{J:function(){return n}})},57858:function(e,t,r){"use strict";r.d(t,{B:function(){return n},N:function(){return i}});var n=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured for connector "${t}".`),this.name="ChainNotConfiguredForConnectorError"}},i=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}}},75276:function(e,t,r){"use strict";r.d(t,{wR:function(){return h},Ko:function(){return c},ac:function(){return l},U9:function(){return d},qx:function(){return u}});var n=r(26729),i=r(66403),o=r(22676);let a=(0,o.ax)({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0});var s=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},l=(e,t,r)=>(s(e,t,"read from private field"),r?r.call(e):t.get(e)),c=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},u=(e,t,r,n)=>(s(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),d=(e,t,r)=>(s(e,t,"access private method"),r),h=class extends n{constructor({chains:e=[i.R,a],options:t}){super(),this.chains=e,this.options=t}getBlockExplorerUrls(e){let{default:t,...r}=e.blockExplorers??{};if(t)return[t.url,...Object.values(r).map(e=>e.url)]}isChainUnsupported(e){return!this.chains.some(t=>t.id===e)}setStorage(e){this.storage=e}}},57974:function(e,t,r){"use strict";r.d(t,{QB:function(){return tw},$j:function(){return tR},_g:function(){return tI},o6:function(){return t_},vZ:function(){return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){let n,i;if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)&&Array.isArray(r)){if((n=t.length)!=r.length)return!1;for(i=n;0!=i--;)if(!e(t[i],r[i]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();let o=Object.keys(t);if((n=o.length)!==Object.keys(r).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(r,o[i]))return!1;for(i=n;0!=i--;){let n=o[i];if(n&&!e(t[n],r[n]))return!1}return!0}return t!=t&&r!=r}},zP:function(){return tN},EG:function(){return tF},w6:function(){return tV},Lk:function(){return tK},D0:function(){return tW},Hy:function(){return tH},wp:function(){return tP},If:function(){return tq},uH:function(){return tG},QC:function(){return tZ}});var n,i,o,a,s,l=r(74278),c=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},u=(e,t,r)=>(c(e,t,"read from private field"),r?r.call(e):t.get(e)),d=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},h=(e,t,r,n)=>(c(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),f=(e,t,r)=>(c(e,t,"access private method"),r),p=r(16189),g=r(18011),b=r(95270),w=r(95602),m=r(15215),y=r(16171),v=r(61376);function x(e,{method:t}){let r={};return"fallback"===e.transport.type&&e.transport.onResponse?.(({method:e,response:n,status:i,transport:o})=>{"success"===i&&t===e&&(r[n]=o.request)}),t=>r[t]||e.request}async function C(e){let t=x(e,{method:"eth_newBlockFilter"}),r=await e.request({method:"eth_newBlockFilter"});return{id:r,request:t(r),type:"block"}}var E=r(57412),k=r(62027);class S extends k.G{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}var A=r(11187),$=r(74059),P=r(56254),_=r(45444),D=r(80522),O=r(40840);function I({abi:e,eventName:t,args:r}){let n=e[0];if(t&&!(n=(0,O.m)({abi:e,args:r,name:t})))throw new E.mv(t,{docsPath:"/docs/contract/encodeEventTopics"});if("event"!==n.type)throw new E.mv(void 0,{docsPath:"/docs/contract/encodeEventTopics"});let i=(0,D.t)(n),o=(0,$.e)(i),a=[];if(r&&"inputs"in n){let e=n.inputs?.filter(e=>"indexed"in e&&e.indexed),t=Array.isArray(r)?r:Object.values(r).length>0?e?.map(e=>r[e.name])??[]:[];t.length>0&&(a=e?.map((e,r)=>Array.isArray(t[r])?t[r].map((n,i)=>T({param:e,value:t[r][i]})):t[r]?T({param:e,value:t[r]}):null)??[])}return[o,...a]}function T({param:e,value:t}){if("string"===e.type||"bytes"===e.type)return(0,P.w)((0,A.O0)(t));if("tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))throw new S(e.type);return(0,_.E)([e],[t])}var R=r(92106);async function N(e,{address:t,abi:r,args:n,eventName:i,fromBlock:o,strict:a,toBlock:s}){let l=x(e,{method:"eth_newFilter"}),c=i?I({abi:r,args:n,eventName:i}):void 0,u=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof o?(0,R.eC)(o):o,toBlock:"bigint"==typeof s?(0,R.eC)(s):s,topics:c}]});return{abi:r,args:n,eventName:i,id:u,request:l(u),strict:a,type:"event"}}async function j(e,{address:t,args:r,event:n,events:i,fromBlock:o,strict:a,toBlock:s}={}){let l=i??(n?[n]:void 0),c=x(e,{method:"eth_newFilter"}),u=[];l&&(u=[l.flatMap(e=>I({abi:[e],eventName:e.name,args:r}))],n&&(u=u[0]));let d=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof o?(0,R.eC)(o):o,toBlock:"bigint"==typeof s?(0,R.eC)(s):s,...u.length?{topics:u}:{}}]});return{abi:l,args:r,eventName:n?n.name:void 0,fromBlock:o,id:d,request:c(d),strict:a,toBlock:s,type:"event"}}async function M(e){let t=x(e,{method:"eth_newPendingTransactionFilter"}),r=await e.request({method:"eth_newPendingTransactionFilter"});return{id:r,request:t(r),type:"transaction"}}var B=r(14503),U=r(77799),L=r(72365),z=r(81841);async function F(e,{abi:t,address:r,args:n,functionName:i,...o}){let a=(0,U.R)({abi:t,args:n,functionName:i});try{let t=await (0,z.Q)(e,{data:a,to:r,...o});return t}catch(a){let e=o.account?(0,B.T)(o.account):void 0;throw(0,L.S)(a,{abi:t,address:r,args:n,docsPath:"/docs/contract/estimateContractGas",functionName:i,sender:e?.address})}}var W=r(43861),H=r(79379);async function q(e,{address:t,blockNumber:r,blockTag:n="latest"}){let i=r?(0,R.eC)(r):void 0,o=await e.request({method:"eth_getBalance",params:[t,i||n]});return BigInt(o)}var G=r(36765);let Z=new Map,V=new Map;async function K(e,{cacheKey:t,cacheTime:r=1/0}){let n=function(e){let t=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:r=>t.set(e,r)}),r=t(e,Z),n=t(e,V);return{clear:()=>{r.clear(),n.clear()},promise:r,response:n}}(t),i=n.response.get();if(i&&r>0){let e=new Date().getTime()-i.created.getTime();if(e<r)return i.data}let o=n.promise.get();o||(o=e(),n.promise.set(o));try{let e=await o;return n.response.set({created:new Date,data:e}),e}finally{n.promise.clear()}}let Q=e=>`blockNumber.${e}`;async function Y(e,{cacheTime:t=e.cacheTime,maxAge:r}={}){let n=await K(()=>e.request({method:"eth_blockNumber"}),{cacheKey:Q(e.uid),cacheTime:r??t});return BigInt(n)}var X=r(95946);async function J(e,{blockHash:t,blockNumber:r,blockTag:n="latest"}={}){let i;let o=void 0!==r?(0,R.eC)(r):void 0;return i=t?await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):await e.request({method:"eth_getBlockTransactionCountByNumber",params:[o||n]}),(0,X.ly)(i)}async function ee(e,{address:t,blockNumber:r,blockTag:n="latest"}){let i=void 0!==r?(0,R.eC)(r):void 0,o=await e.request({method:"eth_getCode",params:[t,i||n]});if("0x"!==o)return o}var et=r(79524),er=r(34450);let en="/docs/contract/decodeEventLog";function ei({abi:e,data:t,strict:r,topics:n}){let i=r??!0,[o,...a]=n;if(!o)throw new E.FM({docsPath:en});let s=e.find(e=>"event"===e.type&&o===(0,$.e)((0,D.t)(e)));if(!(s&&"name"in s)||"event"!==s.type)throw new E.lC(o,{docsPath:en});let{name:l,inputs:c}=s,u=c?.some(e=>!("name"in e&&e.name)),d=u?[]:{},h=c.filter(e=>"indexed"in e&&e.indexed);for(let e=0;e<h.length;e++){let t=h[e],r=a[e];if(!r)throw new E.Gy({abiItem:s,param:t});d[t.name||e]=function({param:e,value:t}){if("string"===e.type||"bytes"===e.type||"tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))return t;let r=(0,er.r)([e],t)||[];return r[0]}({param:t,value:r})}let f=c.filter(e=>!("indexed"in e&&e.indexed));if(f.length>0){if(t&&"0x"!==t)try{let e=(0,er.r)(f,t);if(e){if(u)d=[...d,...e];else for(let t=0;t<f.length;t++)d[f[t].name]=e[t]}}catch(e){if(i){if(e instanceof E.xB)throw new E.SM({abiItem:s,data:e.data,params:e.params,size:e.size});throw e}}else if(i)throw new E.SM({abiItem:s,data:"0x",params:f,size:0})}return{eventName:l,args:Object.values(d).length>0?d:void 0}}function eo(e,{args:t,eventName:r}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...r?{args:t,eventName:r}:{}}}async function ea(e,{address:t,blockHash:r,fromBlock:n,toBlock:i,event:o,events:a,args:s,strict:l}={}){let c=l??!1,u=a??(o?[o]:void 0),d=[];return u&&(d=[u.flatMap(e=>I({abi:[e],eventName:e.name,args:s}))],o&&(d=d[0])),(r?await e.request({method:"eth_getLogs",params:[{address:t,topics:d,blockHash:r}]}):await e.request({method:"eth_getLogs",params:[{address:t,topics:d,fromBlock:"bigint"==typeof n?(0,R.eC)(n):n,toBlock:"bigint"==typeof i?(0,R.eC)(i):i}]})).map(e=>{try{let{eventName:t,args:r}=u?ei({abi:u,data:e.data,topics:e.topics,strict:c}):{eventName:void 0,args:void 0};return eo(e,{args:r,eventName:t})}catch(n){let t,r;if(n instanceof E.SM||n instanceof E.Gy){if(c)return;t=n.abiItem.name,r=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return eo(e,{args:r?[]:{},eventName:t})}}).filter(Boolean)}async function es(e,{abi:t,address:r,args:n,blockHash:i,eventName:o,fromBlock:a,toBlock:s,strict:l}){let c=o?(0,O.m)({abi:t,name:o}):void 0,u=c?void 0:t.filter(e=>"event"===e.type);return ea(e,{address:r,args:n,blockHash:i,event:c,events:u,fromBlock:a,toBlock:s,strict:l})}async function el(e,{blockCount:t,blockNumber:r,blockTag:n="latest",rewardPercentiles:i}){let o=r?(0,R.eC)(r):void 0,a=await e.request({method:"eth_feeHistory",params:[(0,R.eC)(t),o||n,i]});return{baseFeePerGas:a.baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:a.gasUsedRatio,oldestBlock:BigInt(a.oldestBlock),reward:a.reward?.map(e=>e.map(e=>BigInt(e)))}}async function ec(e,{filter:t}){let r="strict"in t&&t.strict,n=await t.request({method:"eth_getFilterChanges",params:[t.id]});return n.map(e=>{if("string"==typeof e)return e;try{let{eventName:n,args:i}="abi"in t&&t.abi?ei({abi:t.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return eo(e,{args:i,eventName:n})}catch(i){let r,n;if(i instanceof E.SM||i instanceof E.Gy){if("strict"in t&&t.strict)return;r=i.abiItem.name,n=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return eo(e,{args:n?[]:{},eventName:r})}}).filter(Boolean)}async function eu(e,{filter:t}){let r=t.strict??!1,n=await t.request({method:"eth_getFilterLogs",params:[t.id]});return n.map(e=>{try{let{eventName:n,args:i}="abi"in t&&t.abi?ei({abi:t.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return eo(e,{args:i,eventName:n})}catch(i){let r,n;if(i instanceof E.SM||i instanceof E.Gy){if("strict"in t&&t.strict)return;r=i.abiItem.name,n=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return eo(e,{args:n?[]:{},eventName:r})}}).filter(Boolean)}var ed=r(24453);async function eh(e,{address:t,blockNumber:r,blockTag:n,storageKeys:i}){let o=void 0!==r?(0,R.eC)(r):void 0,a=await e.request({method:"eth_getProof",params:[t,i,o||(n??"latest")]});return{...a,balance:a.balance?BigInt(a.balance):void 0,nonce:a.nonce?(0,X.ly)(a.nonce):void 0,storageProof:a.storageProof?a.storageProof.map(e=>({...e,value:BigInt(e.value)})):void 0}}async function ef(e,{address:t,blockNumber:r,blockTag:n="latest",slot:i}){let o=void 0!==r?(0,R.eC)(r):void 0,a=await e.request({method:"eth_getStorageAt",params:[t,i,o||n]});return a}var ep=r(33639),eg=r(6073);async function eb(e,{blockHash:t,blockNumber:r,blockTag:n,hash:i,index:o}){let a=n||"latest",s=void 0!==r?(0,R.eC)(r):void 0,l=null;if(i?l=await e.request({method:"eth_getTransactionByHash",params:[i]}):t?l=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,(0,R.eC)(o)]}):(s||a)&&(l=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[s||a,(0,R.eC)(o)]})),!l)throw new ep.Bh({blockHash:t,blockNumber:r,blockTag:a,hash:i,index:o});let c=e.chain?.formatters?.transaction?.format||eg.Tr;return c(l)}async function ew(e,{hash:t,transactionReceipt:r}){let[n,i]=await Promise.all([Y(e),t?eb(e,{hash:t}):void 0]),o=r?.blockNumber||i?.blockNumber;return o?n-o+1n:0n}var em=r(86162);let ey={"0x0":"reverted","0x1":"success"};function ev(e){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(e=>eo(e)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,X.ly)(e.transactionIndex):null,status:e.status?ey[e.status]:null,type:e.type?eg.c8[e.type]||e.type:null}}async function ex(e,{hash:t}){let r=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!r)throw new ep.Yb({hash:t});let n=e.chain?.formatters?.transactionReceipt?.format||ev;return n(r)}var eC=r(16693),eE=r(97405),ek=r(7210),eS=r(22676),eA=r(88819);async function e$(e,t){let{allowFailure:r=!0,batchSize:n,blockNumber:i,blockTag:o,contracts:a,multicallAddress:s}=t,l=n??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024),c=s;if(!c){if(!e.chain)throw Error("client chain not configured. multicallAddress is required.");c=(0,eS.LI)({blockNumber:i,chain:e.chain,contract:"multicall3"})}let u=[[]],d=0,h=0;for(let e=0;e<a.length;e++){let{abi:t,address:n,args:i,functionName:o}=a[e];try{let e=(0,U.R)({abi:t,args:i,functionName:o});h+=(e.length-2)/2,l>0&&h>l&&u[d].length>0&&(d++,h=(e.length-2)/2,u[d]=[]),u[d]=[...u[d],{allowFailure:!0,callData:e,target:n}]}catch(a){let e=(0,L.S)(a,{abi:t,address:n,args:i,docsPath:"/docs/contract/multicall",functionName:o});if(!r)throw e;u[d]=[...u[d],{allowFailure:!0,callData:"0x",target:n}]}}let f=await Promise.allSettled(u.map(t=>(0,eA.L)(e,{abi:eC.F8,address:c,args:[t],blockNumber:i,blockTag:o,functionName:"aggregate3"}))),p=[];for(let e=0;e<f.length;e++){let t=f[e];if("rejected"===t.status){if(!r)throw t.reason;for(let r=0;r<u[e].length;r++)p.push({status:"failure",error:t.reason,result:void 0});continue}let n=t.value;for(let t=0;t<n.length;t++){let{returnData:i,success:o}=n[t],{callData:s}=u[e][t],{abi:l,address:c,functionName:d,args:h}=a[p.length];try{if("0x"===s)throw new E.wb;if(!o)throw new eE.VQ({data:i});let e=(0,ek.k)({abi:l,args:h,data:i,functionName:d});p.push(r?{result:e,status:"success"}:e)}catch(t){let e=(0,L.S)(t,{abi:l,address:c,args:h,docsPath:"/docs/contract/multicall",functionName:d});if(!r)throw e;p.push({error:e,result:void 0,status:"failure"})}}}if(p.length!==a.length)throw new k.G("multicall results mismatch");return p}async function eP(e,{abi:t,address:r,args:n,dataSuffix:i,functionName:o,...a}){let s=a.account?(0,B.T)(a.account):void 0,l=(0,U.R)({abi:t,args:n,functionName:o});try{let{data:s}=await (0,v.R)(e,{batch:!1,data:`${l}${i?i.replace("0x",""):""}`,to:r,...a}),c=(0,ek.k)({abi:t,args:n,functionName:o,data:s||"0x"});return{result:c,request:{abi:t,address:r,args:n,dataSuffix:i,functionName:o,...a}}}catch(e){throw(0,L.S)(e,{abi:t,address:r,args:n,docsPath:"/docs/contract/simulateContract",functionName:o,sender:s?.address})}}async function e_(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}var eD=r(57040);BigInt(0),BigInt(1),BigInt(2),Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));var eO=r(15102),eI=r(30286);async function eT(e,{address:t,hash:r,signature:n,...i}){let o=(0,eO.v)(n)?n:(0,R.NC)(n);try{let{data:n}=await (0,v.R)(e,{data:(0,eI.w)({abi:eC.$o,args:[t,r,o],bytecode:"0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"}),...i});return function(e,t){let r=(0,eO.v)(e)?(0,A.O0)(e):e,n=(0,eO.v)(t)?(0,A.O0)(t):t;return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(r,n)}(n??"0x0","0x1")}catch(e){if(e instanceof eE.cg)return!1;throw e}}async function eR(e,{address:t,message:r,signature:n,...i}){let o=function(e,t){let r="string"==typeof e?(0,A.qX)(e):e.raw instanceof Uint8Array?e.raw:(0,A.O0)(e.raw),n=(0,A.qX)(`\x19Ethereum Signed Message:
${r.length}`);return(0,P.w)((0,eD.zo)([n,r]),void 0)}(r);return eT(e,{address:t,hash:o,signature:n,...i})}var eN=r(71352);function ej({data:e,primaryType:t,types:r}){let n=function e({data:t,primaryType:r,types:n}){let i=[{type:"bytes32"}],o=[function({primaryType:e,types:t}){let r=(0,R.NC)(function({primaryType:e,types:t}){let r="",n=function e({primaryType:t,types:r},n=new Set){let i=t.match(/^\w*/u),o=i?.[0];if(n.has(o)||void 0===r[o])return n;for(let t of(n.add(o),r[o]))e({primaryType:t.type,types:r},n);return n}({primaryType:e,types:t});n.delete(e);let i=[e,...Array.from(n).sort()];for(let e of i)r+=`${e}(${t[e].map(({name:e,type:t})=>`${t} ${e}`).join(",")})`;return r}({primaryType:e,types:t}));return(0,P.w)(r)}({primaryType:r,types:n})];for(let a of n[r]){let[r,s]=function t({types:r,name:n,type:i,value:o}){if(void 0!==r[i])return[{type:"bytes32"},(0,P.w)(e({data:o,primaryType:i,types:r}))];if("bytes"===i){let e=o.length%2?"0":"";return o=`0x${e+o.slice(2)}`,[{type:"bytes32"},(0,P.w)(o)]}if("string"===i)return[{type:"bytes32"},(0,P.w)((0,R.NC)(o))];if(i.lastIndexOf("]")===i.length-1){let e=i.slice(0,i.lastIndexOf("[")),a=o.map(i=>t({name:n,type:e,types:r,value:i}));return[{type:"bytes32"},(0,P.w)((0,_.E)(a.map(([e])=>e),a.map(([,e])=>e)))]}return[{type:i},o]}({types:n,name:a.name,type:a.type,value:t[a.name]});i.push(r),o.push(s)}return(0,_.E)(i,o)}({data:e,primaryType:t,types:r});return(0,P.w)(n)}async function eM(e,{address:t,signature:r,message:n,primaryType:i,types:o,domain:a,...s}){let l=function({domain:e,message:t,primaryType:r,types:n}){let i=void 0===e?{}:e,o={EIP712Domain:(0,eN.cj)({domain:i}),...n};(0,eN.iC)({domain:i,message:t,primaryType:r,types:o});let a=["0x1901"];return i&&a.push(function({domain:e,types:t}){return ej({data:e,primaryType:"EIP712Domain",types:t})}({domain:i,types:o})),"EIP712Domain"!==r&&a.push(ej({data:t,primaryType:r,types:o})),(0,P.w)((0,eD.zo)(a))}({message:n,primaryType:i,types:o,domain:a});return eT(e,{address:t,hash:l,signature:r,...s})}let eB=new Map,eU=new Map,eL=0;function ez(e,t,r){let n=++eL,i=()=>eB.get(e)||[],o=()=>{let t=i();eB.set(e,t.filter(e=>e.id!==n))},a=()=>{let t=eU.get(e);1===i().length&&t&&t(),o()},s=i();if(eB.set(e,[...s,{id:n,fns:t}]),s&&s.length>0)return a;let l={};for(let e in t)l[e]=(...t)=>{let r=i();0!==r.length&&r.forEach(r=>r.fns[e]?.(...t))};let c=r(l);return"function"==typeof c&&eU.set(e,c),a}var eF=r(7760),eW=r(96070),eH=r(62914);function eq(e,{emitOnBegin:t,initialWaitTime:r,interval:n}){let i=!0,o=()=>i=!1,a=async()=>{let a;t&&(a=await e({unpoll:o}));let s=await r?.(a)??n;await (0,eH.D)(s);let l=async()=>{i&&(await e({unpoll:o}),await (0,eH.D)(n),l())};l()};return a(),o}function eG(e,{emitOnBegin:t=!1,emitMissed:r=!1,onBlockNumber:n,onError:i,poll:o,pollingInterval:a=e.pollingInterval}){let s,l,c;let u=void 0!==o?o:"webSocket"!==e.transport.type;return u?(()=>{let o=(0,eW.P)(["watchBlockNumber",e.uid,t,r,a]);return ez(o,{onBlockNumber:n,onError:i},n=>eq(async()=>{try{let t=await Y(e,{cacheTime:0});if(s){if(t===s)return;if(t-s>1&&r)for(let e=s+1n;e<t;e++)n.onBlockNumber(e,s),s=e}(!s||t>s)&&(n.onBlockNumber(t,s),s=t)}catch(e){n.onError?.(e)}},{emitOnBegin:t,interval:a}))})():(l=!0,c=()=>l=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newHeads"],onData(e){if(!l)return;let t=(0,X.y_)(e.result?.number);n(t,s),s=t},onError(e){i?.(e)}});c=t,l||c()}catch(e){i?.(e)}})(),c)}async function eZ(e,{confirmations:t=1,hash:r,onReplaced:n,pollingInterval:i=e.pollingInterval,timeout:o}){let a,s,l;let c=(0,eW.P)(["waitForTransactionReceipt",e.uid,r]),u=!1;return new Promise((d,h)=>{o&&setTimeout(()=>h(new ep.mc({hash:r})),o);let f=ez(c,{onReplaced:n,resolve:d,reject:h},n=>{let o=eG(e,{emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(i){if(u)return;let c=i,d=e=>{o(),e(),f()};try{if(l){if(t>1&&(!l.blockNumber||c-l.blockNumber+1n<t))return;d(()=>n.resolve(l));return}if(a||(u=!0,await (0,eF.J)(async()=>{(a=await eb(e,{hash:r})).blockNumber&&(c=a.blockNumber)},{delay:({count:e})=>200*~~(1<<e),retryCount:6}),u=!1),l=await ex(e,{hash:r}),t>1&&(!l.blockNumber||c-l.blockNumber+1n<t))return;d(()=>n.resolve(l))}catch(r){if(a&&(r instanceof ep.Bh||r instanceof ep.Yb))try{s=a;let r=await (0,G.Q)(e,{blockNumber:c,includeTransactions:!0}),i=r.transactions.find(({from:e,nonce:t})=>e===s.from&&t===s.nonce);if(!i||(l=await ex(e,{hash:i.hash}),t>1&&(!l.blockNumber||c-l.blockNumber+1n<t)))return;let o="replaced";i.to===s.to&&i.value===s.value?o="repriced":i.from===i.to&&0n===i.value&&(o="cancelled"),d(()=>{n.onReplaced?.({reason:o,replacedTransaction:s,transaction:i,transactionReceipt:l}),n.resolve(l)})}catch(e){d(()=>n.reject(e))}else d(()=>n.reject(r))}}})})})}var eV=r(43310),eK=r(39028),eQ=r(57331),eY=r(99238);function eX(e){return{call:t=>(0,v.R)(e,t),createBlockFilter:()=>C(e),createContractEventFilter:t=>N(e,t),createEventFilter:t=>j(e,t),createPendingTransactionFilter:()=>M(e),estimateContractGas:t=>F(e,t),estimateGas:t=>(0,z.Q)(e,t),getBalance:t=>q(e,t),getBlock:t=>(0,G.Q)(e,t),getBlockNumber:t=>Y(e,t),getBlockTransactionCount:t=>J(e,t),getBytecode:t=>ee(e,t),getChainId:()=>(0,et.L)(e),getContractEvents:t=>es(e,t),getEnsAddress:t=>(0,g.O)(e,t),getEnsAvatar:t=>(0,b.r)(e,t),getEnsName:t=>(0,w.w)(e,t),getEnsResolver:t=>(0,m.S)(e,t),getEnsText:t=>(0,y.g)(e,t),getFeeHistory:t=>el(e,t),estimateFeesPerGas:t=>(0,W.X)(e,t),getFilterChanges:t=>ec(e,t),getFilterLogs:t=>eu(e,t),getGasPrice:()=>(0,ed.o)(e),getLogs:t=>ea(e,t),getProof:t=>eh(e,t),estimateMaxPriorityFeePerGas:t=>(0,H._)(e,t),getStorageAt:t=>ef(e,t),getTransaction:t=>eb(e,t),getTransactionConfirmations:t=>ew(e,t),getTransactionCount:t=>(0,em.K)(e,t),getTransactionReceipt:t=>ex(e,t),multicall:t=>e$(e,t),prepareTransactionRequest:t=>(0,eQ.Z)(e,t),readContract:t=>(0,eA.L)(e,t),sendRawTransaction:t=>(0,eY.p)(e,t),simulateContract:t=>eP(e,t),verifyMessage:t=>eR(e,t),verifyTypedData:t=>eM(e,t),uninstallFilter:t=>e_(e,t),waitForTransactionReceipt:t=>eZ(e,t),watchBlocks:t=>(function(e,{blockTag:t="latest",emitMissed:r=!1,emitOnBegin:n=!1,onBlock:i,onError:o,includeTransactions:a,poll:s,pollingInterval:l=e.pollingInterval}){let c,u,d;let h=void 0!==s?s:"webSocket"!==e.transport.type,f=a??!1;return h?(()=>{let a=(0,eW.P)(["watchBlocks",e.uid,r,n,f,l]);return ez(a,{onBlock:i,onError:o},i=>eq(async()=>{try{let n=await (0,G.Q)(e,{blockTag:t,includeTransactions:f});if(n.number&&c?.number){if(n.number===c.number)return;if(n.number-c.number>1&&r)for(let t=c?.number+1n;t<n.number;t++){let r=await (0,G.Q)(e,{blockNumber:t,includeTransactions:f});i.onBlock(r,c),c=r}}(!c?.number||"pending"===t&&!n?.number||n.number&&n.number>c.number)&&(i.onBlock(n,c),c=n)}catch(e){i.onError?.(e)}},{emitOnBegin:n,interval:l}))})():(u=!0,d=()=>u=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newHeads"],onData(t){if(!u)return;let r=e.chain?.formatters?.block?.format||eV.Z,n=r(t.result);i(n,c),c=n},onError(e){o?.(e)}});d=t,u||d()}catch(e){o?.(e)}})(),d)})(e,t),watchBlockNumber:t=>eG(e,t),watchContractEvent:t=>(function(e,{abi:t,address:r,args:n,batch:i=!0,eventName:o,onError:a,onLogs:s,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){let d,h;let f=void 0!==l?l:"webSocket"!==e.transport.type;return f?(()=>{let l=(0,eW.P)(["watchContractEvent",r,n,i,e.uid,o,c]),d=u??!1;return ez(l,{onLogs:s,onError:a},a=>{let s,l;let u=!1,h=eq(async()=>{if(!u){try{l=await N(e,{abi:t,address:r,args:n,eventName:o,strict:d})}catch{}u=!0;return}try{let o;if(l)o=await ec(e,{filter:l});else{let i=await Y(e);o=s&&s!==i?await es(e,{abi:t,address:r,args:n,fromBlock:s+1n,toBlock:i,strict:d}):[],s=i}if(0===o.length)return;i?a.onLogs(o):o.forEach(e=>a.onLogs([e]))}catch(e){l&&e instanceof eK.yR&&(u=!1),a.onError?.(e)}},{emitOnBegin:!0,interval:c});return async()=>{l&&await e_(e,{filter:l}),h()}})})():(d=!0,h=()=>d=!1,(async()=>{try{let i=o?I({abi:t,eventName:o,args:n}):[],{unsubscribe:l}=await e.transport.subscribe({params:["logs",{address:r,topics:i}],onData(e){if(!d)return;let r=e.result;try{let{eventName:e,args:n}=ei({abi:t,data:r.data,topics:r.topics,strict:u}),i=eo(r,{args:n,eventName:e});s([i])}catch(i){let e,t;if(i instanceof E.SM||i instanceof E.Gy){if(u)return;e=i.abiItem.name,t=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let n=eo(r,{args:t?[]:{},eventName:e});s([n])}},onError(e){a?.(e)}});h=l,d||h()}catch(e){a?.(e)}})(),h)})(e,t),watchEvent:t=>(function(e,{address:t,args:r,batch:n=!0,event:i,events:o,onError:a,onLogs:s,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){let d,h;let f=void 0!==l?l:"webSocket"!==e.transport.type,p=u??!1;return f?(()=>{let l=(0,eW.P)(["watchEvent",t,r,n,e.uid,i,c]);return ez(l,{onLogs:s,onError:a},a=>{let s,l;let u=!1,d=eq(async()=>{if(!u){try{l=await j(e,{address:t,args:r,event:i,events:o,strict:p})}catch{}u=!0;return}try{let c;if(l)c=await ec(e,{filter:l});else{let n=await Y(e);c=s&&s!==n?await ea(e,{address:t,args:r,event:i,events:o,fromBlock:s+1n,toBlock:n}):[],s=n}if(0===c.length)return;n?a.onLogs(c):c.forEach(e=>a.onLogs([e]))}catch(e){l&&e instanceof eK.yR&&(u=!1),a.onError?.(e)}},{emitOnBegin:!0,interval:c});return async()=>{l&&await e_(e,{filter:l}),d()}})})():(d=!0,h=()=>d=!1,(async()=>{try{let n=o??(i?[i]:void 0),l=[];n&&(l=[n.flatMap(e=>I({abi:[e],eventName:e.name,args:r}))],i&&(l=l[0]));let{unsubscribe:c}=await e.transport.subscribe({params:["logs",{address:t,topics:l}],onData(e){if(!d)return;let t=e.result;try{let{eventName:e,args:r}=ei({abi:n,data:t.data,topics:t.topics,strict:p}),i=eo(t,{args:r,eventName:e});s([i])}catch(i){let e,r;if(i instanceof E.SM||i instanceof E.Gy){if(u)return;e=i.abiItem.name,r=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let n=eo(t,{args:r?[]:{},eventName:e});s([n])}},onError(e){a?.(e)}});h=c,d||h()}catch(e){a?.(e)}})(),h)})(e,t),watchPendingTransactions:t=>(function(e,{batch:t=!0,onError:r,onTransactions:n,poll:i,pollingInterval:o=e.pollingInterval}){let a,s;let l=void 0!==i?i:"webSocket"!==e.transport.type;return l?(()=>{let i=(0,eW.P)(["watchPendingTransactions",e.uid,t,o]);return ez(i,{onTransactions:n,onError:r},r=>{let n;let i=eq(async()=>{try{if(!n)try{n=await M(e);return}catch(e){throw i(),e}let o=await ec(e,{filter:n});if(0===o.length)return;t?r.onTransactions(o):o.forEach(e=>r.onTransactions([e]))}catch(e){r.onError?.(e)}},{emitOnBegin:!0,interval:o});return async()=>{n&&await e_(e,{filter:n}),i()}})})():(a=!0,s=()=>a=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newPendingTransactions"],onData(e){if(!a)return;let t=e.result;n([t])},onError(e){r?.(e)}});s=t,a||s()}catch(e){r?.(e)}})(),s)})(e,t)}}function eJ(e){let{key:t="public",name:r="Public Client"}=e,n=(0,p.e)({...e,key:t,name:r,type:"publicClient"});return n.extend(eX)}var e0=r(37029),e1=r(31031);function e2(e,t={}){let{key:r="fallback",name:n="Fallback",rank:i=!1,retryCount:o,retryDelay:a}=t;return({chain:t,pollingInterval:s=4e3,timeout:l})=>{let c=e,u=()=>{},d=(0,e1.q)({key:r,name:n,async request({method:e,params:r}){let n=async(i=0)=>{let o=c[i]({chain:t,retryCount:0,timeout:l});try{let t=await o.request({method:e,params:r});return u({method:e,params:r,response:t,transport:o,status:"success"}),t}catch(t){if(u({error:t,method:e,params:r,transport:o,status:"error"}),(0,e0.y)(t)||i===c.length-1)throw t;return n(i+1)}};return n()},retryCount:o,retryDelay:a,type:"fallback"},{onResponse:e=>u=e,transports:c.map(e=>e({chain:t,retryCount:0}))});if(i){let e="object"==typeof i?i:{};!function({chain:e,interval:t=4e3,onTransports:r,sampleCount:n=10,timeout:i=1e3,transports:o,weights:a={}}){let{stability:s=.7,latency:l=.3}=a,c=[],u=async()=>{let a=await Promise.all(o.map(async t=>{let r,n;let o=t({chain:e,retryCount:0,timeout:i}),a=Date.now();try{await o.request({method:"net_listening"}),n=1}catch{n=0}finally{r=Date.now()}let s=r-a;return{latency:s,success:n}}));c.push(a),c.length>n&&c.shift();let d=Math.max(...c.map(e=>Math.max(...e.map(({latency:e})=>e)))),h=o.map((e,t)=>{let r=c.map(e=>e[t].latency),n=r.reduce((e,t)=>e+t,0)/r.length,i=c.map(e=>e[t].success),o=i.reduce((e,t)=>e+t,0)/i.length;return 0===o?[0,t]:[l*(1-n/d)+s*o,t]}).sort((e,t)=>t[0]-e[0]);r(h.map(([,e])=>o[e])),await (0,eH.D)(t),u()};u()}({chain:t,interval:e.interval??s,onTransports:e=>c=e,sampleCount:e.sampleCount,timeout:e.timeout,transports:c,weights:e.weights})}return d}}var e5=r(78863);class e3 extends k.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var e6=r(32357);let e4=function(){if("undefined"!=typeof WebSocket)return WebSocket;if(void 0!==global.WebSocket)return global.WebSocket;if(void 0!==window.WebSocket)return window.WebSocket;if(void 0!==self.WebSocket)return self.WebSocket;throw Error("`WebSocket` is not supported in this environment")}();function e8(e,{errorInstance:t=Error("timed out"),timeout:r,signal:n}){return new Promise((i,o)=>{(async()=>{let a;try{let s=new AbortController;r>0&&(a=setTimeout(()=>{n?s.abort():o(t)},r)),i(await e({signal:s?.signal}))}catch(e){"AbortError"===e.name&&o(t),o(e)}finally{clearTimeout(a)}})()})}let e7=0;async function e9(e,{body:t,fetchOptions:r={},timeout:n=1e4}){let{headers:i,method:o,signal:a}=r;try{let s;let l=await e8(async({signal:s})=>{let l=await fetch(e,{...r,body:Array.isArray(t)?(0,eW.P)(t.map(e=>({jsonrpc:"2.0",id:e.id??e7++,...e}))):(0,eW.P)({jsonrpc:"2.0",id:t.id??e7++,...t}),headers:{...i,"Content-Type":"application/json"},method:o||"POST",signal:a||(n>0?s:void 0)});return l},{errorInstance:new e5.W5({body:t,url:e}),timeout:n,signal:!0});if(s=l.headers.get("Content-Type")?.startsWith("application/json")?await l.json():await l.text(),!l.ok)throw new e5.Gg({body:t,details:(0,eW.P)(s.error)||l.statusText,headers:l.headers,status:l.status,url:e});return s}catch(r){if(r instanceof e5.Gg||r instanceof e5.W5)throw r;throw new e5.Gg({body:t,details:r.message,url:e})}}let te=new Map;async function tt(e){let t=te.get(e);if(t)return t;let{schedule:r}=(0,e6.S)({id:e,fn:async()=>{let r=new e4(e),n=new Map,i=new Map,o=({data:e})=>{let t=JSON.parse(e),r="eth_subscription"===t.method,o=r?t.params.subscription:t.id,a=r?i:n,s=a.get(o);s&&s({data:e}),r||a.delete(o)},a=()=>{te.delete(e),r.removeEventListener("close",a),r.removeEventListener("message",o)};return r.addEventListener("close",a),r.addEventListener("message",o),r.readyState===e4.CONNECTING&&await new Promise((e,t)=>{r&&(r.onopen=e,r.onerror=t)}),t=Object.assign(r,{requests:n,subscriptions:i}),te.set(e,t),[t]}}),[n,[i]]=await r();return i}async function tr(e,{body:t,timeout:r=1e4}){return e8(()=>new Promise(r=>tn.webSocket(e,{body:t,onResponse:r})),{errorInstance:new e5.W5({body:t,url:e.url}),timeout:r})}let tn={http:e9,webSocket:function(e,{body:t,onResponse:r}){if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new e5.c9({body:t,url:e.url,details:"Socket is closed."});let n=e7++,i=({data:o})=>{let a=JSON.parse(o);("number"!=typeof a.id||n===a.id)&&(r?.(a),"eth_subscribe"===t.method&&"string"==typeof a.result&&e.subscriptions.set(a.result,i),"eth_unsubscribe"===t.method&&e.subscriptions.delete(t.params?.[0]))};return e.requests.set(n,i),e.send(JSON.stringify({jsonrpc:"2.0",...t,id:n})),e},webSocketAsync:tr};var ti=r(57858),to=r(84192);let ta=e=>(t,r,n)=>{let i=n.subscribe;n.subscribe=(e,t,r)=>{let o=e;if(t){let i=(null==r?void 0:r.equalityFn)||Object.is,a=e(n.getState());o=r=>{let n=e(r);if(!i(a,n)){let e=a;t(a=n,e)}},(null==r?void 0:r.fireImmediately)&&t(a,a)}return i(o)};let o=e(t,r,n);return o},ts=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>ts(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>ts(t)(e)}}},tl=(e,t)=>(r,n,i)=>{let o,a,s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,c=new Set,u=new Set;try{o=s.getStorage()}catch(e){}if(!o)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),r(...e)},n,i);let d=ts(s.serialize),h=()=>{let e;let t=s.partialize({...n()}),r=d({state:t,version:s.version}).then(e=>o.setItem(s.name,e)).catch(t=>{e=t});if(e)throw e;return r},f=i.setState;i.setState=(e,t)=>{f(e,t),h()};let p=e((...e)=>{r(...e),h()},n,i),g=()=>{var e;if(!o)return;l=!1,c.forEach(e=>e(n()));let t=(null==(e=s.onRehydrateStorage)?void 0:e.call(s,n()))||void 0;return ts(o.getItem.bind(o))(s.name).then(e=>{if(e)return s.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===s.version)return e.state;if(s.migrate)return s.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(a=s.merge(e,null!=(t=n())?t:p),!0),h()}).then(()=>{null==t||t(a,void 0),l=!0,u.forEach(e=>e(a))}).catch(e=>{null==t||t(void 0,e)})};return i.persist={setOptions:e=>{s={...s,...e},e.getStorage&&(o=e.getStorage())},clearStorage:()=>{null==o||o.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>g(),hasHydrated:()=>l,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},g(),a||p},tc=(e,t)=>(r,n,i)=>{let o,a={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var n;let i=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),o=null!=(n=r.getItem(e))?n:null;return o instanceof Promise?o.then(i):i(o)},setItem:(e,n)=>r.setItem(e,JSON.stringify(n,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1,l=new Set,c=new Set,u=a.storage;if(!u)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),r(...e)},n,i);let d=()=>{let e=a.partialize({...n()});return u.setItem(a.name,{state:e,version:a.version})},h=i.setState;i.setState=(e,t)=>{h(e,t),d()};let f=e((...e)=>{r(...e),d()},n,i),p=()=>{var e,t;if(!u)return;s=!1,l.forEach(e=>{var t;return e(null!=(t=n())?t:f)});let i=(null==(t=a.onRehydrateStorage)?void 0:t.call(a,null!=(e=n())?e:f))||void 0;return ts(u.getItem.bind(u))(a.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===a.version)return e.state;if(a.migrate)return a.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(o=a.merge(e,null!=(t=n())?t:f),!0),d()}).then(()=>{null==i||i(o,void 0),o=n(),s=!0,c.forEach(e=>e(o))}).catch(e=>{null==i||i(void 0,e)})};return i.persist={setOptions:e=>{a={...a,...e},e.storage&&(u=e.storage)},clearStorage:()=>{null==u||u.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>p(),hasHydrated:()=>s,onHydrate:e=>(l.add(e),()=>{l.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},a.skipHydration||p(),o||f},tu=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),tl(e,t)):tc(e,t),td=e=>{let t;let r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=n?n:"object"!=typeof i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,o=e=>(r.add(e),()=>r.delete(e)),a=()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()},s={setState:n,getState:i,subscribe:o,destroy:a};return t=e(n,i,s),s},th=e=>e?td(e):td;var tf=r(15229),tp=r(61836);function tg(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[r,n]of e)if(!Object.is(n,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;return!0}let r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(let n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(t,r[n])||!Object.is(e[r[n]],t[r[n]]))return!1;return!0}var tb=r(45775);function tw(e,t,{batch:r={multicall:{wait:32}},pollingInterval:n=4e3,rank:i,retryCount:o,retryDelay:a,stallTimeout:s}={}){if(!e.length)throw Error("must have at least one chain");let l=[],c={},u={};for(let r of e){let e=!1;for(let n of t){let t=n(r);t&&(e=!0,l.some(({id:e})=>e===r.id)||(l=[...l,t.chain]),c[r.id]=[...c[r.id]||[],...t.rpcUrls.http],t.rpcUrls.webSocket&&(u[r.id]=[...u[r.id]||[],...t.rpcUrls.webSocket]))}if(!e)throw Error(`Could not find valid provider configuration for chain "${r.name}".

You may need to add \`jsonRpcProvider\` to \`configureChains\` with the chain's RPC URLs.
Read more: https://wagmi.sh/core/providers/jsonRpc`)}return{chains:l,publicClient:({chainId:t})=>{let u=l.find(e=>e.id===t)??e[0],d=c[u.id];if(!d||!d[0])throw Error(`No providers configured for chain "${u.id}"`);let h=eJ({batch:r,chain:u,transport:e2(d.map(e=>(function(e,t={}){let{batch:r,fetchOptions:n,key:i="http",name:o="HTTP JSON-RPC",retryDelay:a}=t;return({chain:s,retryCount:l,timeout:c})=>{let{batchSize:u=1e3,wait:d=0}="object"==typeof r?r:{},h=t.retryCount??l,f=c??t.timeout??1e4,p=e||s?.rpcUrls.default.http[0];if(!p)throw new e3;return(0,e1.q)({key:i,name:o,async request({method:t,params:i}){let o={method:t,params:i},{schedule:a}=(0,e6.S)({id:`${e}`,wait:d,shouldSplitBatch:e=>e.length>u,fn:e=>tn.http(p,{body:e,fetchOptions:n,timeout:f})}),s=async e=>r?a(e):[await tn.http(p,{body:e,fetchOptions:n,timeout:f})],[{error:l,result:c}]=await s(o);if(l)throw new e5.bs({body:o,error:l,url:p});return c},retryCount:h,retryDelay:a,timeout:f,type:"http"},{fetchOptions:n,url:e})}})(e,{timeout:s})),{rank:i,retryCount:o,retryDelay:a}),pollingInterval:n});return Object.assign(h,{chains:l})},webSocketPublicClient:({chainId:t})=>{let c=l.find(e=>e.id===t)??e[0],d=u[c.id];if(!d||!d[0])return;let h=eJ({batch:r,chain:c,transport:e2(d.map(e=>(function(e,t={}){let{key:r="webSocket",name:n="WebSocket JSON-RPC",retryDelay:i}=t;return({chain:o,retryCount:a,timeout:s})=>{let l=t.retryCount??a,c=s??t.timeout??1e4,u=e||o?.rpcUrls.default.webSocket?.[0];if(!u)throw new e3;return(0,e1.q)({key:r,name:n,async request({method:e,params:t}){let r={method:e,params:t},n=await tt(u),{error:i,result:o}=await tn.webSocketAsync(n,{body:r,timeout:c});if(i)throw new e5.bs({body:r,error:i,url:u});return o},retryCount:l,retryDelay:i,timeout:c,type:"webSocket"},{getSocket:()=>tt(u),async subscribe({params:e,onData:t,onError:r}){let n=await tt(u),{result:i}=await new Promise((i,o)=>tn.webSocket(n,{body:{method:"eth_subscribe",params:e},onResponse(e){if(e.error){o(e.error),r?.(e.error);return}if("number"==typeof e.id){i(e);return}"eth_subscription"===e.method&&t(e.params)}}));return{subscriptionId:i,unsubscribe:async()=>new Promise(e=>tn.webSocket(n,{body:{method:"eth_unsubscribe",params:[i]},onResponse:e}))}}})}})(e,{timeout:s})),{rank:i,retryCount:o,retryDelay:a}),pollingInterval:n});return Object.assign(h,{chains:l})}}}var tm=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`),this.name="ChainNotConfigured"}},ty=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},tv=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},tx=class extends Error{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},tC=(e,{find:t,replace:r})=>e&&t(e)?r(e):"object"!=typeof e?e:Array.isArray(e)?e.map(e=>tC(e,{find:t,replace:r})):e instanceof Object?Object.entries(e).reduce((e,[n,i])=>({...e,[n]:tC(i,{find:t,replace:r})}),{}):e;function tE(e){let t=JSON.parse(e),r=tC(t,{find:e=>"string"==typeof e&&e.startsWith("#bigint."),replace:e=>BigInt(e.replace("#bigint.",""))});return r}function tk(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(to.Bd[e])}function tS(e,t){return e.slice(0,t).join(".")||"."}function tA(e,t){let{length:r}=e;for(let n=0;n<r;++n)if(e[n]===t)return n+1;return 0}function t$(e,t,r,n){return JSON.stringify(e,function(e,t){let r="function"==typeof e,n="function"==typeof t,i=[],o=[];return function(a,s){if("object"==typeof s){if(i.length){let e=tA(i,this);0===e?i[i.length]=this:(i.splice(e),o.splice(e)),o[o.length]=a;let r=tA(i,s);if(0!==r)return n?t.call(this,a,s,tS(o,r)):`[ref=${tS(o,r)}]`}else i[0]=s,o[0]=a}return r?e.call(this,a,s):s}}((e,r)=>{let n="bigint"==typeof r?`#bigint.${r.toString()}`:r;return t?.(e,n)||n},n),r??void 0)}var tP={getItem:e=>"",setItem:(e,t)=>null,removeItem:e=>null};function t_({deserialize:e=tE,key:t="wagmi",serialize:r=t$,storage:n}){return{...n,getItem:(r,i=null)=>{let o=n.getItem(`${t}.${r}`);try{return o?e(o):i}catch(e){return console.warn(e),i}},setItem:(e,i)=>{if(null===i)n.removeItem(`${t}.${e}`);else try{n.setItem(`${t}.${e}`,r(i))}catch(e){console.error(e)}},removeItem:e=>n.removeItem(`${t}.${e}`)}}var tD="store",tO=class{constructor({autoConnect:e=!1,connectors:t=[new l._],publicClient:r,storage:s=t_({storage:"undefined"!=typeof window?window.localStorage:tP}),logger:c={warn:console.warn},webSocketPublicClient:u}){let p;d(this,o),this.publicClients=new Map,this.webSocketPublicClients=new Map,d(this,n,void 0),d(this,i,void 0),this.args={autoConnect:e,connectors:t,logger:c,publicClient:r,storage:s,webSocketPublicClient:u};let g="disconnected";if(e)try{let e=s.getItem(tD),t=e?.state?.data;g=t?.account?"reconnecting":"connecting",p=t?.chain?.id}catch(e){}let b="function"==typeof t?t():t;b.forEach(e=>e.setStorage(s)),this.store=th(ta(tu(()=>({connectors:b,publicClient:this.getPublicClient({chainId:p}),status:g,webSocketPublicClient:this.getWebSocketPublicClient({chainId:p})}),{name:tD,storage:s,partialize:t=>({...e&&{data:{account:t?.data?.account,chain:t?.data?.chain}},chains:t?.chains}),version:2}))),this.storage=s,h(this,i,s?.getItem("wallet")),f(this,o,a).call(this),e&&"undefined"!=typeof window&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){return this.data?.chain?.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(e){let t="function"==typeof e?e(this.store.getState()):e;this.store.setState(t,!0)}clearState(){this.setState(e=>({...e,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){this.connector&&await this.connector.disconnect?.(),h(this,n,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(u(this,n))return;h(this,n,!0),this.setState(e=>({...e,status:e.data?.account?"reconnecting":"connecting"}));let e=u(this,i)?[...this.connectors].sort(e=>e.id===u(this,i)?-1:1):this.connectors,t=!1;for(let r of e){if(!r.ready||!r.isAuthorized)continue;let e=await r.isAuthorized();if(!e)continue;let n=await r.connect();this.setState(e=>({...e,connector:r,chains:r?.chains,data:n,status:"connected"})),t=!0;break}return t||this.setState(e=>({...e,data:void 0,status:"disconnected"})),h(this,n,!1),this.data}setConnectors(e){this.args={...this.args,connectors:e};let t="function"==typeof e?e():e;t.forEach(e=>e.setStorage(this.args.storage)),this.setState(e=>({...e,connectors:t}))}getPublicClient({chainId:e}={}){let t=this.publicClients.get(-1);if(t&&t?.chain.id===e||(t=this.publicClients.get(e??-1)))return t;let{publicClient:r}=this.args;return t="function"==typeof r?r({chainId:e}):r,this.publicClients.set(e??-1,t),t}setPublicClient(e){let t=this.data?.chain?.id;this.args={...this.args,publicClient:e},this.publicClients.clear(),this.setState(e=>({...e,publicClient:this.getPublicClient({chainId:t})}))}getWebSocketPublicClient({chainId:e}={}){let t=this.webSocketPublicClients.get(-1);if(t&&t?.chain.id===e||(t=this.webSocketPublicClients.get(e??-1)))return t;let{webSocketPublicClient:r}=this.args;return(t="function"==typeof r?r({chainId:e}):r)&&this.webSocketPublicClients.set(e??-1,t),t}setWebSocketPublicClient(e){let t=this.data?.chain?.id;this.args={...this.args,webSocketPublicClient:e},this.webSocketPublicClients.clear(),this.setState(e=>({...e,webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})}))}setLastUsedConnector(e=null){this.storage?.setItem("wallet",e)}};function tI(e){let t=new tO(e);return s=t,t}function tT(){if(!s)throw Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return s}async function tR({chainId:e,connector:t}){let r=tT(),n=r.connector;if(n&&t.id===n.id)throw new ty;try{r.setState(e=>({...e,status:"connecting"}));let n=await t.connect({chainId:e});return r.setLastUsedConnector(t.id),r.setState(e=>({...e,connector:t,chains:t?.chains,data:n,status:"connected"})),r.storage.setItem("connected",!0),{...n,connector:t}}catch(e){throw r.setState(e=>({...e,status:e.connector?"connected":"disconnected"})),e}}async function tN(){let e=tT();e.connector&&await e.connector.disconnect(),e.clearState(),e.storage.removeItem("connected")}n=new WeakMap,i=new WeakMap,o=new WeakSet,a=function(){let e=e=>{this.setState(t=>({...t,data:{...t.data,...e}}))},t=()=>{this.clearState()},r=e=>{this.setState(t=>({...t,error:e}))};this.store.subscribe(({connector:e})=>e,(n,i)=>{i?.off?.("change",e),i?.off?.("disconnect",t),i?.off?.("error",r),n&&(n.on?.("change",e),n.on?.("disconnect",t),n.on?.("error",r))});let{publicClient:n,webSocketPublicClient:i}=this.args;("function"==typeof n||"function"==typeof i)&&this.store.subscribe(({data:e})=>e?.chain?.id,e=>{this.setState(t=>({...t,publicClient:this.getPublicClient({chainId:e}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))})};var tj=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],tM=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function tB({chainId:e}={}){let t=tT();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function tU({chainId:e,contracts:t,blockNumber:r,blockTag:n,...i}){let o=tB({chainId:e});if(!o.chains)throw new tv;if(e&&o.chain.id!==e)throw new tm({chainId:e});return o.multicall({allowFailure:i.allowFailure??!0,blockNumber:r,blockTag:n,contracts:t})}async function tL({address:e,account:t,chainId:r,abi:n,args:i,functionName:o,blockNumber:a,blockTag:s}){let l=tB({chainId:r});return l.readContract({abi:n,address:e,account:t,functionName:o,args:i,blockNumber:a,blockTag:s})}async function tz({contracts:e,blockNumber:t,blockTag:r,...n}){let{allowFailure:i=!0}=n;try{let n=tB(),o=e.reduce((e,t,r)=>{let i=t.chainId??n.chain.id;return{...e,[i]:[...e[i]||[],{contract:t,index:r}]}},{}),a=(await Promise.all(Object.entries(o).map(([e,n])=>tU({allowFailure:i,chainId:parseInt(e),contracts:n.map(({contract:e})=>e),blockNumber:t,blockTag:r})))).flat(),s=Object.values(o).flatMap(e=>e.map(({index:e})=>e));return a.reduce((e,t,r)=>(e&&(e[s[r]]=t),e),[])}catch(o){if(o instanceof eE.uq)throw o;let n=()=>e.map(e=>tL({...e,blockNumber:t,blockTag:r}));if(i)return(await Promise.allSettled(n())).map(e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"});return await Promise.all(n())}}async function tF({address:e,chainId:t,formatUnits:r,token:n}){let i=tT(),o=tB({chainId:t});if(n){let i=async({abi:i})=>{let o={abi:i,address:n,chainId:t},[a,s,l]=await tz({allowFailure:!1,contracts:[{...o,functionName:"balanceOf",args:[e]},{...o,functionName:"decimals"},{...o,functionName:"symbol"}]});return{decimals:s,formatted:(0,tf.b)(a??"0",tk(r??s)),symbol:l,value:a}};try{return await i({abi:tj})}catch(e){if(e instanceof eE.uq){let{symbol:e,...t}=await i({abi:tM});return{symbol:(0,X.rR)((0,tp.f)(e,{dir:"right"})),...t}}throw e}}let a=[...i.publicClient.chains||[],...i.chains??[]],s=await o.getBalance({address:e}),l=a.find(e=>e.id===o.chain.id);return{decimals:l?.nativeCurrency.decimals??18,formatted:(0,tf.b)(s??"0",tk(r??18)),symbol:l?.nativeCurrency.symbol??"ETH",value:s}}function tW(){let{data:e,connector:t,status:r}=tT();switch(r){case"connected":return{address:e?.account,connector:t,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:r};case"reconnecting":return{address:e?.account,connector:t,isConnected:!!e?.account,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:r};case"connecting":return{address:e?.account,connector:t,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:r};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:r}}}function tH(){let e=tT(),t=e.data?.chain?.id,r=e.chains??[],n=[...e.publicClient?.chains||[],...r].find(e=>e.id===t)??{id:t,name:`Chain ${t}`,network:`${t}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:t?{...n,...e.data?.chain,id:t}:void 0,chains:r}}async function tq({chainId:e}){let{connector:t}=tT();if(!t)throw new ti.N;if(!t.switchChain)throw new tx({connector:t});return t.switchChain(e)}function tG(e,{selector:t=e=>e}={}){let r=tT(),n=()=>e(tW()),i=r.subscribe(({data:e,connector:r,status:n})=>t({address:e?.account,connector:r,status:n}),n,{equalityFn:tg});return i}function tZ(e,{selector:t=e=>e}={}){let r=tT(),n=()=>e(tH()),i=r.subscribe(({data:e,chains:r})=>t({chainId:e?.chain?.id,chains:r}),n,{equalityFn:tg});return i}async function tV({name:e,chainId:t}){let{normalize:n}=await r.e(512).then(r.bind(r,46512)),i=tB({chainId:t}),o=await i.getEnsAvatar({name:n(e)});return o}async function tK({address:e,chainId:t}){let r=tB({chainId:t});return r.getEnsName({address:(0,tb.K)(e)})}},36635:function(e,t,r){"use strict";let n;r.d(t,{Ni:function(){return p},QT:function(){return I},WM:function(){return v},fz:function(){return Y},Lr:function(){return Q},lZ:function(){return W},AA:function(){return C},bq:function(){return d},j1:function(){return h},Xs:function(){return M},IN:function(){return z},fB:function(){return A},hD:function(){return P},Ie:function(){return k},Pc:function(){return U},KC:function(){return q},MO:function(){return m},u0:function(){return Z}});var i=r(17832);function o(e,t,r,n){let o=e[t];return(0,i.Ld)(e,()=>{let n=e[t];Object.is(o,n)||r(o=n)},n)}Symbol();let a=new WeakMap;new WeakMap;let s=(e,t)=>{let r=a.get(e);r&&(r[0].forEach(t=>{let{d:r}=t;e!==r&&s(r)}),++r[2],t&&r[3].add(t))},l=e=>{let t=a.get(e);t&&(--t[2],t[2]||(t[3].forEach(e=>e()),t[3].clear()),t[0].forEach(t=>{let{d:r}=t;e!==r&&l(r)}))},c=e=>"object"==typeof e&&null!==e,u=e=>{if(n||(n=unstable_buildProxyFunction()[2]),!c(e)||n.has(e))return e;let t=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return Reflect.ownKeys(e).forEach(r=>{t[r]=u(e[r])}),t},d={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},h={isMobile:()=>"undefined"!=typeof window&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){let e=navigator.userAgent.toLowerCase();return h.isMobile()&&e.includes("android")},isIos(){let e=navigator.userAgent.toLowerCase();return h.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=d.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=d.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+d.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let r;return(...n)=>{r&&clearTimeout(r),r=setTimeout(function(){e(...n)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(h.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;r.includes("://")||(r=`${r=e.replaceAll("/","").replaceAll(":","")}://`),r.endsWith("/")||(r=`${r}/`);let n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}},formatUniversalUrl(e,t){if(!h.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){let t=new Promise((t,r)=>{let n=new Image;n.onload=t,n.onerror=r,n.crossOrigin="anonymous",n.src=e});return Promise.race([t,h.wait(2e3)])},formatBalance(e,t){let r;if("0"===e)r="0.000";else if("string"==typeof e){let t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return r?`${r} ${t}`:"0.000"},isRestrictedRegion(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return d.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>h.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>h.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>h.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},f=(0,i.sj)({isConnected:!1}),p={state:f,subscribe:e=>(0,i.Ld)(f,()=>e(f)),subscribeKey:(e,t)=>o(f,e,t),setIsConnected(e){f.isConnected=e},setCaipAddress(e){f.caipAddress=e,f.address=e?h.getPlainAddress(e):void 0},setBalance(e,t){f.balance=e,f.balanceSymbol=t},setProfileName(e){f.profileName=e},setProfileImage(e){f.profileImage=e},setAddressExplorerUrl(e){f.addressExplorerUrl=e},resetAccount(){f.isConnected=!1,f.caipAddress=void 0,f.address=void 0,f.balance=void 0,f.balanceSymbol=void 0,f.profileName=void 0,f.profileImage=void 0,f.addressExplorerUrl=void 0}};class g{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...t}){let r=this.createUrl(t),n=await fetch(r,{method:"GET",headers:e});return n.json()}async getBlob({headers:e,...t}){let r=this.createUrl(t),n=await fetch(r,{method:"GET",headers:e});return n.blob()}async post({body:e,headers:t,...r}){let n=this.createUrl(r),i=await fetch(n,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0});return i.json()}async put({body:e,headers:t,...r}){let n=this.createUrl(r),i=await fetch(n,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0});return i.json()}async delete({body:e,headers:t,...r}){let n=this.createUrl(r),i=await fetch(n,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0});return i.json()}createUrl({path:e,params:t}){let r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&r.searchParams.append(e,t)}),r}}let b="WALLETCONNECT_DEEPLINK_CHOICE",w="@w3m/recent",m={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(b,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(b);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(b)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{let t=m.getRecentWallets(),r=t.find(t=>t.id===e.id);r||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(w,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let e=localStorage.getItem(w);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]}},y=(0,i.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),v={state:y,subscribeNetworkImages:e=>(0,i.Ld)(y.networkImages,()=>e(y.networkImages)),subscribeKey:(e,t)=>o(y,e,t),setWalletImage(e,t){y.walletImages[e]=t},setNetworkImage(e,t){y.networkImages[e]=t},setConnectorImage(e,t){y.connectorImages[e]=t},setTokenImage(e,t){y.tokenImages[e]=t}},x=(0,i.sj)({connectors:[]}),C={state:x,subscribeKey:(e,t)=>o(x,e,t),setConnectors(e){x.connectors=e.map(e=>(0,i.iH)(e))},addConnector(e){x.connectors.push((0,i.iH)(e))},getConnectors:()=>x.connectors},E=(0,i.sj)({open:!1,selectedNetworkId:void 0}),k={state:E,subscribe:e=>(0,i.Ld)(E,()=>e(E)),set(e){Object.assign(E,{...E,...e})}},S=(0,i.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),A={state:S,subscribeKey:(e,t)=>o(S,e,t),_getClient(){if(!S._client)throw Error("NetworkController client not set");return S._client},setClient(e){S._client=(0,i.iH)(e)},setCaipNetwork(e){S.caipNetwork=e,k.set({selectedNetworkId:e?.id})},setDefaultCaipNetwork(e){S.caipNetwork=e,k.set({selectedNetworkId:e?.id}),S.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){S.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){let e=await this._getClient().getApprovedCaipNetworksData();S.supportsAllNetworks=e.supportsAllNetworks,S.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),S.caipNetwork=e},resetNetwork(){S.isDefaultCaipNetwork||(S.caipNetwork=void 0),S.approvedCaipNetworkIds=void 0,S.supportsAllNetworks=!0}},$=(0,i.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),P={state:$,subscribeKey:(e,t)=>o($,e,t),setProjectId(e){$.projectId=e},setIncludeWalletIds(e){$.includeWalletIds=e},setExcludeWalletIds(e){$.excludeWalletIds=e},setFeaturedWalletIds(e){$.featuredWalletIds=e},setTokens(e){$.tokens=e},setTermsConditionsUrl(e){$.termsConditionsUrl=e},setPrivacyPolicyUrl(e){$.privacyPolicyUrl=e},setCustomWallets(e){$.customWallets=e},setEnableAnalytics(e){$.enableAnalytics=e},setSdkVersion(e){$.sdkVersion=e}},_=h.getApiUrl(),D=new g({baseUrl:_}),O=(0,i.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),I={state:O,subscribeKey:(e,t)=>o(O,e,t),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=P.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _fetchWalletImage(e){let t=`${D.baseUrl}/getWalletImage/${e}`,r=await D.getBlob({path:t,headers:I._getApiHeaders()});v.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){let t=`${D.baseUrl}/public/getAssetImage/${e}`,r=await D.getBlob({path:t,headers:I._getApiHeaders()});v.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){let t=`${D.baseUrl}/public/getAssetImage/${e}`,r=await D.getBlob({path:t,headers:I._getApiHeaders()});v.setConnectorImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){let{requestedCaipNetworks:e}=A.state,t=e?.map(({imageId:e})=>e).filter(Boolean);t&&await Promise.allSettled(t.map(e=>I._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=C.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>I._fetchConnectorImage(e)))},async fetchFeaturedWallets(){let{featuredWalletIds:e}=P.state;if(e?.length){let{data:t}=await D.get({path:"/getWallets",headers:I._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id));let r=t.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(r.map(e=>I._fetchWalletImage(e))),O.featured=t}},async fetchRecommendedWallets(){let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=P.state,n=[...t??[],...r??[]].filter(Boolean),{data:i,count:o}=await D.get({path:"/getWallets",headers:I._getApiHeaders(),params:{page:"1",entries:"4",include:e?.join(","),exclude:n?.join(",")}}),a=m.getRecentWallets(),s=i.map(e=>e.image_id).filter(Boolean),l=a.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s,...l].map(e=>I._fetchWalletImage(e))),O.recommended=i,O.count=o??0},async fetchWallets({page:e}){let{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:n}=P.state,i=[...O.recommended.map(({id:e})=>e),...r??[],...n??[]].filter(Boolean),{data:o,count:a}=await D.get({path:"/getWallets",headers:I._getApiHeaders(),params:{page:String(e),entries:"40",include:t?.join(","),exclude:i.join(",")}}),s=o.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s.map(e=>I._fetchWalletImage(e)),h.wait(300)]),O.wallets=[...O.wallets,...o],O.count=a>O.count?a:O.count,O.page=e},async searchWallet({search:e}){let{includeWalletIds:t,excludeWalletIds:r}=P.state;O.search=[];let{data:n}=await D.get({path:"/getWallets",headers:I._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t?.join(","),exclude:r?.join(",")}}),i=n.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...i.map(e=>I._fetchWalletImage(e)),h.wait(300)]),O.search=n},prefetch(){O.prefetchPromise=Promise.race([Promise.allSettled([I.fetchFeaturedWallets(),I.fetchRecommendedWallets(),I.fetchNetworkImages(),I.fetchConnectorImages()]),h.wait(3e3)])}},T=h.getAnalyticsUrl(),R=new g({baseUrl:T}),N=["MODAL_CREATED"],j=(0,i.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),M={state:j,subscribe:e=>(0,i.Ld)(j,()=>e(j)),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=P.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _sendAnalyticsEvent(e){try{if(N.includes(e.data.event)||"undefined"==typeof window)return;await R.post({path:"/e",headers:M._getApiHeaders(),body:{eventId:h.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){j.timestamp=Date.now(),j.data=e,P.state.enableAnalytics&&M._sendAnalyticsEvent(j)}},B=(0,i.sj)({view:"Connect",history:["Connect"]}),U={state:B,subscribeKey:(e,t)=>o(B,e,t),push(e,t){e!==B.view&&(B.view=e,B.history.push(e),B.data=t)},reset(e){B.view=e,B.history=[e]},replace(e){B.history.length>1&&B.history.at(-1)!==e&&(B.view=e,B.history[B.history.length-1]=e)},goBack(){if(B.history.length>1){B.history.pop();let[e]=B.history.slice(-1);e&&(B.view=e)}}},L=(0,i.sj)({open:!1}),z={state:L,subscribeKey:(e,t)=>o(L,e,t),async open(e){await I.state.prefetchPromise,e?.view?U.reset(e.view):p.state.isConnected?U.reset("Account"):U.reset("Connect"),L.open=!0,k.set({open:!0}),M.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){L.open=!1,k.set({open:!1}),M.sendEvent({type:"track",event:"MODAL_CLOSE"})}},F=(0,i.sj)({wcError:!1,buffering:!1}),W={state:F,subscribeKey:(e,t)=>o(F,e,t),_getClient(){if(!F._client)throw Error("ConnectionController client not set");return F._client},setClient(e){F._client=(0,i.iH)(e)},connectWalletConnect(){F.wcPromise=this._getClient().connectWalletConnect(e=>{F.wcUri=e,F.wcPairingExpiry=h.getPairingExpiry()})},async connectExternal(e){await this._getClient().connectExternal?.(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){F.wcUri=void 0,F.wcPairingExpiry=void 0,F.wcPromise=void 0,F.wcLinking=void 0,F.recentWallet=void 0,m.deleteWalletConnectDeepLink()},setWcLinking(e){F.wcLinking=e},setWcError(e){F.wcError=e,F.buffering=!1},setRecentWallet(e){F.recentWallet=e},setBuffering(e){F.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},H=(0,i.sj)({message:"",variant:"success",open:!1}),q={state:H,subscribeKey:(e,t)=>o(H,e,t),showSuccess(e){H.message=e,H.variant="success",H.open=!0},showError(e){H.message=e,H.variant="error",H.open=!0},hide(){H.open=!1}},G=(0,i.sj)({themeMode:"dark",themeVariables:{}}),Z={state:G,subscribe:e=>(0,i.Ld)(G,()=>e(G)),setThemeMode(e){G.themeMode=e},setThemeVariables(e){G.themeVariables={...G.themeVariables,...e}}},V=h.getBlockchainApiUrl(),K=new g({baseUrl:V}),Q={fetchIdentity:({caipChainId:e,address:t})=>K.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:P.state.projectId}})},Y={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?v.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?v.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?v.state.connectorImages[e.imageId]:void 0}},90078:function(e,t,r){"use strict";r.r(t),r.d(t,{W3mModal:function(){return u}});var n=r(36635),i=r(6894),o=r(92233),a=r(18569),s=o.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,l=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let c="scroll-lock",u=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=n.IN.state.open,this.initializeTheming(),n.QT.prefetch(),this.unsubscribe.push(n.IN.subscribeKey("open",e=>e?this.onOpen():this.onClose())),n.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?o.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(e){e.target===e.currentTarget&&n.IN.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=n.u0.state,r=i.UiHelperUtil.getColorTheme(t);(0,i.initializeTheming)(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,n.KC.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=c,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${c}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)n.IN.close();else if("Tab"===t.key){let{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}};u.styles=s,l([(0,a.SB)()],u.prototype,"open",void 0),u=l([(0,i.customElement)("w3m-modal")],u)},3274:function(e,t,r){"use strict";r.d(t,{fl:function(){return A},iv:function(){return c},Ts:function(){return E},Qu:function(){return k}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=globalThis,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(t,e))}return e}toString(){return this.cssText}}let l=e=>new s("string"==typeof e?e:e+"",void 0,o),c=(e,...t)=>{let r=1===e.length?e[0]:t.reduce((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1],e[0]);return new s(r,e,o)},u=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return l(t)})(e):e,{is:h,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:g,getOwnPropertySymbols:b,getPrototypeOf:w}=Object,m=globalThis,y=m.trustedTypes,v=y?y.emptyScript:"",x=m.reactiveElementPolyfillSupport,C=(e,t)=>e,E={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},k=(e,t)=>!h(e,t),S={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&f(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){let{get:n,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){let o=n?.call(this);i.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let e=w(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let e=this.properties,t=[...g(e),...b(e)];for(let r of t)this.createProperty(r,e[r])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let e of r)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){let r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){let i=(void 0!==r.converter?.toAttribute?r.converter:E).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){let e=r.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:E;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r,n=!1,i){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??k)(n?i:this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$ES?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[C("elementProperties")]=new Map,A[C("finalized")]=new Map,x?.({ReactiveElement:A}),(m.reactiveElementVersions??=[]).push("2.0.0")},88382:function(e,t,r){"use strict";r.d(t,{Jb:function(){return S},Ld:function(){return A},dy:function(){return k},sY:function(){return z}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=globalThis,i=n.trustedTypes,o=i?i.createPolicy("lit-html",{createHTML:e=>e}):void 0,a="$lit$",s=`lit$${(Math.random()+"").slice(9)}$`,l="?"+s,c=`<${l}>`,u=document,d=()=>u.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,f=Array.isArray,p=e=>f(e)||"function"==typeof e?.[Symbol.iterator],g="[ 	\n\f\r]",b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,w=/-->/g,m=/>/g,y=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),v=/'/g,x=/"/g,C=/^(?:script|style|textarea|title)$/i,E=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),k=E(1),S=(E(2),Symbol.for("lit-noChange")),A=Symbol.for("lit-nothing"),$=new WeakMap,P=u.createTreeWalker(u,129);function _(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(t):t}let D=(e,t)=>{let r=e.length-1,n=[],i,o=2===t?"<svg>":"",l=b;for(let t=0;t<r;t++){let r=e[t],u,d,h=-1,f=0;for(;f<r.length&&(l.lastIndex=f,null!==(d=l.exec(r)));)f=l.lastIndex,l===b?"!--"===d[1]?l=w:void 0!==d[1]?l=m:void 0!==d[2]?(C.test(d[2])&&(i=RegExp("</"+d[2],"g")),l=y):void 0!==d[3]&&(l=y):l===y?">"===d[0]?(l=i??b,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,u=d[1],l=void 0===d[3]?y:'"'===d[3]?x:v):l===x||l===v?l=y:l===w||l===m?l=b:(l=y,i=void 0);let p=l===y&&e[t+1].startsWith("/>")?" ":"";o+=l===b?r+c:h>=0?(n.push(u),r.slice(0,h)+a+r.slice(h)+s+p):r+s+(-2===h?t:p)}return[_(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),n]};class O{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let o=0,c=0,u=e.length-1,h=this.parts,[f,p]=D(e,t);if(this.el=O.createElement(f,r),P.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=P.nextNode())&&h.length<u;){if(1===n.nodeType){if(n.hasAttributes())for(let e of n.getAttributeNames())if(e.endsWith(a)){let t=p[c++],r=n.getAttribute(e).split(s),i=/([.?@])?(.*)/.exec(t);h.push({type:1,index:o,name:i[2],strings:r,ctor:"."===i[1]?j:"?"===i[1]?M:"@"===i[1]?B:N}),n.removeAttribute(e)}else e.startsWith(s)&&(h.push({type:6,index:o}),n.removeAttribute(e));if(C.test(n.tagName)){let e=n.textContent.split(s),t=e.length-1;if(t>0){n.textContent=i?i.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],d()),P.nextNode(),h.push({type:2,index:++o});n.append(e[t],d())}}}else if(8===n.nodeType){if(n.data===l)h.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(s,e+1));)h.push({type:7,index:o}),e+=s.length-1}}o++}}static createElement(e,t){let r=u.createElement("template");return r.innerHTML=e,r}}function I(e,t,r=e,n){if(t===S)return t;let i=void 0!==n?r._$Co?.[n]:r._$Cl,o=h(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(e))._$AT(e,r,n),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(t=I(e,i._$AS(e,t.values),i,n)),t}class T{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??u).importNode(t,!0);P.currentNode=n;let i=P.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new R(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new U(i,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(i=P.nextNode(),o++)}return P.currentNode=u,n}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){h(e=I(this,e,t))?e===A||null==e||""===e?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==S&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):p(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&h(this._$AH)?this._$AA.nextSibling.data=e:this.$(u.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=O.createElement(_(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{let e=new T(n,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=$.get(e.strings);return void 0===t&&$.set(e.strings,t=new O(e)),t}T(e){f(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,n=0;for(let i of e)n===t.length?t.push(r=new R(this.k(d()),this.k(d()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}_$AI(e,t=this,r,n){let i=this.strings,o=!1;if(void 0===i)(o=!h(e=I(this,e,t,0))||e!==this._$AH&&e!==S)&&(this._$AH=e);else{let n,a;let s=e;for(e=i[0],n=0;n<i.length-1;n++)(a=I(this,s[r+n],t,n))===S&&(a=this._$AH[n]),o||=!h(a)||a!==this._$AH[n],a===A?e=A:e!==A&&(e+=(a??"")+i[n+1]),this._$AH[n]=a}o&&!n&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class j extends N{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class M extends N{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class B extends N{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??A)===S)return;let r=this._$AH,n=e===A&&r!==A||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==A&&(r===A||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class U{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}let L=n.litHtmlPolyfillSupport;L?.(O,R),(n.litHtmlVersions??=[]).push("3.0.0");let z=(e,t,r)=>{let n=r?.renderBefore??t,i=n._$litPart$;if(void 0===i){let e=r?.renderBefore??null;n._$litPart$=i=new R(t.insertBefore(d(),e),e,void 0,r??{})}return i._$AI(e),i}},18569:function(e,t,r){"use strict";r.d(t,{Cb:function(){return a},SB:function(){return s}});var n=r(3274);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i={attribute:!0,type:String,converter:n.Ts,reflect:!1,hasChanged:n.Qu},o=(e=i,t,r)=>{let{kind:n,metadata:o}=r,a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(r.name,e),"accessor"===n){let{name:n}=r;return{set(r){let i=t.get.call(this);t.set.call(this,r),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){let{name:n}=r;return function(r){let i=this[n];t.call(this,r),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function a(e){return(t,r)=>"object"==typeof r?o(e,t,r):((e,t,r)=>{let n=t.hasOwnProperty(r);return t.constructor.createProperty(r,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function s(e){return a({...e,state:!0,attribute:!1})}},92233:function(e,t,r){"use strict";r.d(t,{oi:function(){return o},iv:function(){return n.iv},dy:function(){return i.dy}});var n=r(3274),i=r(88382);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class o extends n.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,i.sY)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return i.Jb}}o._$litElement$=!0,o.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:o});let a=globalThis.litElementPolyfillSupport;a?.({LitElement:o}),(globalThis.litElementVersions??=[]).push("4.0.0")},6894:function(e,t,r){"use strict";let n,i,o;r.r(t),r.d(t,{UiHelperUtil:function(){return t7},WuiAccountButton:function(){return ru},WuiAllWalletsImage:function(){return rb},WuiAvatar:function(){return ri},WuiButton:function(){return ry},WuiCard:function(){return e$},WuiCardSelect:function(){return rD},WuiCardSelectLoader:function(){return rE},WuiChip:function(){return rT},WuiConnectButton:function(){return rj},WuiCtaButton:function(){return rU},WuiEmailInput:function(){return r3},WuiFlex:function(){return rt},WuiGrid:function(){return n5},WuiIcon:function(){return tC},WuiIconBox:function(){return rs},WuiIconLink:function(){return r8},WuiImage:function(){return tS},WuiInputElement:function(){return ne},WuiInputNumeric:function(){return nn},WuiInputText:function(){return r1},WuiLink:function(){return na},WuiListItem:function(){return nc},WuiListTransaction:function(){return ny},WuiListWallet:function(){return nS},WuiLoadingHexagon:function(){return t$},WuiLoadingSpinner:function(){return tD},WuiLoadingThumbnail:function(){return tT},WuiLogo:function(){return nP},WuiLogoSelect:function(){return nO},WuiNetworkButton:function(){return nR},WuiNetworkImage:function(){return r$},WuiOtp:function(){return nM},WuiQrCode:function(){return nW},WuiSearchBar:function(){return nq},WuiSeparator:function(){return n4},WuiShimmer:function(){return tj},WuiSnackbar:function(){return nV},WuiTabs:function(){return nY},WuiTag:function(){return nC},WuiText:function(){return tW},WuiTooltip:function(){return n0},WuiTransactionVisual:function(){return nb},WuiVisual:function(){return t4},WuiWalletImage:function(){return rf},customElement:function(){return eS},initializeTheming:function(){return em},setColorTheme:function(){return ey},setThemeVariables:function(){return ev}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let a=globalThis,s=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),c=new WeakMap;class u{constructor(e,t,r){if(this._$cssResult$=!0,r!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(s&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=c.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&c.set(t,e))}return e}toString(){return this.cssText}}let d=e=>new u("string"==typeof e?e:e+"",void 0,l),h=(e,...t)=>{let r=1===e.length?e[0]:t.reduce((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1],e[0]);return new u(r,e,l)},f=(e,t)=>{if(s)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),n=a.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=r.cssText,e.appendChild(t)}},p=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return d(t)})(e):e,{is:g,defineProperty:b,getOwnPropertyDescriptor:w,getOwnPropertyNames:m,getOwnPropertySymbols:y,getPrototypeOf:v}=Object,x=globalThis,C=x.trustedTypes,E=C?C.emptyScript:"",k=x.reactiveElementPolyfillSupport,S=(e,t)=>e,A={toAttribute(e,t){switch(t){case Boolean:e=e?E:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},$=(e,t)=>!g(e,t),P={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),x.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=P){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&b(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){let{get:n,set:i}=w(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){let o=n?.call(this);i.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??P}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;let e=v(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){let e=this.properties,t=[...m(e),...y(e)];for(let r of t)this.createProperty(r,e[r])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let e of r)t.unshift(p(e))}else void 0!==e&&t.push(p(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return f(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){let r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){let i=(void 0!==r.converter?.toAttribute?r.converter:A).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){let e=r.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:A;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r,n=!1,i){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??$)(n?i:this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$ES?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[S("elementProperties")]=new Map,_[S("finalized")]=new Map,k?.({ReactiveElement:_}),(x.reactiveElementVersions??=[]).push("2.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let D=globalThis,O=D.trustedTypes,I=O?O.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",R=`lit$${(Math.random()+"").slice(9)}$`,N="?"+R,j=`<${N}>`,M=document,B=()=>M.createComment(""),U=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,z=e=>L(e)||"function"==typeof e?.[Symbol.iterator],F="[ 	\n\f\r]",W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,q=/>/g,G=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Z=/'/g,V=/"/g,K=/^(?:script|style|textarea|title)$/i,Q=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Y=Q(1),X=Q(2),J=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),et=new WeakMap,er=M.createTreeWalker(M,129);function en(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==I?I.createHTML(t):t}let ei=(e,t)=>{let r=e.length-1,n=[],i,o=2===t?"<svg>":"",a=W;for(let t=0;t<r;t++){let r=e[t],s,l,c=-1,u=0;for(;u<r.length&&(a.lastIndex=u,null!==(l=a.exec(r)));)u=a.lastIndex,a===W?"!--"===l[1]?a=H:void 0!==l[1]?a=q:void 0!==l[2]?(K.test(l[2])&&(i=RegExp("</"+l[2],"g")),a=G):void 0!==l[3]&&(a=G):a===G?">"===l[0]?(a=i??W,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?G:'"'===l[3]?V:Z):a===V||a===Z?a=G:a===H||a===q?a=W:(a=G,i=void 0);let d=a===G&&e[t+1].startsWith("/>")?" ":"";o+=a===W?r+j:c>=0?(n.push(s),r.slice(0,c)+T+r.slice(c)+R+d):r+R+(-2===c?t:d)}return[en(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),n]};class eo{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,o=0,a=e.length-1,s=this.parts,[l,c]=ei(e,t);if(this.el=eo.createElement(l,r),er.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=er.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(let e of n.getAttributeNames())if(e.endsWith(T)){let t=c[o++],r=n.getAttribute(e).split(R),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:i,name:a[2],strings:r,ctor:"."===a[1]?eu:"?"===a[1]?ed:"@"===a[1]?eh:ec}),n.removeAttribute(e)}else e.startsWith(R)&&(s.push({type:6,index:i}),n.removeAttribute(e));if(K.test(n.tagName)){let e=n.textContent.split(R),t=e.length-1;if(t>0){n.textContent=O?O.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],B()),er.nextNode(),s.push({type:2,index:++i});n.append(e[t],B())}}}else if(8===n.nodeType){if(n.data===N)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(R,e+1));)s.push({type:7,index:i}),e+=R.length-1}}i++}}static createElement(e,t){let r=M.createElement("template");return r.innerHTML=e,r}}function ea(e,t,r=e,n){if(t===J)return t;let i=void 0!==n?r._$Co?.[n]:r._$Cl,o=U(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(e))._$AT(e,r,n),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(t=ea(e,i._$AS(e,t.values),i,n)),t}class es{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??M).importNode(t,!0);er.currentNode=n;let i=er.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new el(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new ef(i,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(i=er.nextNode(),o++)}return er.currentNode=M,n}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class el{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){U(e=ea(this,e,t))?e===ee||null==e||""===e?(this._$AH!==ee&&this._$AR(),this._$AH=ee):e!==this._$AH&&e!==J&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):z(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==ee&&U(this._$AH)?this._$AA.nextSibling.data=e:this.$(M.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=eo.createElement(en(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{let e=new es(n,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=et.get(e.strings);return void 0===t&&et.set(e.strings,t=new eo(e)),t}T(e){L(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,n=0;for(let i of e)n===t.length?t.push(r=new el(this.k(B()),this.k(B()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ec{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ee}_$AI(e,t=this,r,n){let i=this.strings,o=!1;if(void 0===i)(o=!U(e=ea(this,e,t,0))||e!==this._$AH&&e!==J)&&(this._$AH=e);else{let n,a;let s=e;for(e=i[0],n=0;n<i.length-1;n++)(a=ea(this,s[r+n],t,n))===J&&(a=this._$AH[n]),o||=!U(a)||a!==this._$AH[n],a===ee?e=ee:e!==ee&&(e+=(a??"")+i[n+1]),this._$AH[n]=a}o&&!n&&this.j(e)}j(e){e===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class eu extends ec{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ee?void 0:e}}class ed extends ec{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ee)}}class eh extends ec{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=ea(this,e,t,0)??ee)===J)return;let r=this._$AH,n=e===ee&&r!==ee||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==ee&&(r===ee||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ef{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ea(this,e)}}let ep=D.litHtmlPolyfillSupport;ep?.(eo,el),(D.litHtmlVersions??=[]).push("3.0.0");let eg=(e,t,r)=>{let n=r?.renderBefore??t,i=n._$litPart$;if(void 0===i){let e=r?.renderBefore??null;n._$litPart$=i=new el(t.insertBefore(B(),e),e,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class eb extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=eg(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}}eb._$litElement$=!0,eb.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:eb});let ew=globalThis.litElementPolyfillSupport;function em(e,t){n=document.createElement("style"),i=document.createElement("style"),o=document.createElement("style"),n.textContent=ex(e).core.cssText,i.textContent=ex(e).dark.cssText,o.textContent=ex(e).light.cssText,document.head.appendChild(n),document.head.appendChild(i),document.head.appendChild(o),ey(t)}function ey(e){i&&o&&("light"===e?(i.removeAttribute("media"),o.media="enabled"):(o.removeAttribute("media"),i.media="enabled"))}function ev(e){n&&i&&o&&(n.textContent=ex(e).core.cssText,i.textContent=ex(e).dark.cssText,o.textContent=ex(e).light.cssText)}function ex(e){return{core:h`
      :root {
        --w3m-color-mix-strength: ${d(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${d(e?.["--w3m-font-family"]||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${d(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${d(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${d(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-3xl: 40px;

        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );
        }
      }
    `,light:h`
      :root {
        --w3m-color-mix: ${d(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${d(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:h`
      :root {
        --w3m-color-mix: ${d(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${d(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}ew?.({LitElement:eb}),(globalThis.litElementVersions??=[]).push("4.0.0");let eC=h`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,eE=h`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,ek=h`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function eS(e){return function(t){return"function"==typeof t?(customElements.get(e)||customElements.define(e,t),t):function(e,t){let{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}var eA=h`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-125);
    overflow: hidden;
  }
`;let e$=class extends eb{render(){return Y`<slot></slot>`}};e$.styles=[eC,eA],e$=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([eS("wui-card")],e$);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eP={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:$},e_=(e=eP,t,r)=>{let{kind:n,metadata:i}=r,o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(r.name,e),"accessor"===n){let{name:n}=r;return{set(r){let i=t.get.call(this);t.set.call(this,r),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){let{name:n}=r;return function(r){let i=this[n];t.call(this,r),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function eD(e){return(t,r)=>"object"==typeof r?e_(e,t,r):((e,t,r)=>{let n=t.hasOwnProperty(r);return t.constructor.createProperty(r,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function eO(e){return eD({...e,state:!0,attribute:!1})}var eI=h`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;let eT=X`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,eR=X`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,eN=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ej=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eM=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,eB=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eU=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,eL=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,ez=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,eF=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eW=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,eH=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,eq=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eG=X`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,eZ=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eV=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,eK=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,eQ=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,eY=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,eX=X` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,eJ=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,e0=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,e1=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,e2=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,e5=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,e3=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,e6=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,e4=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,e8=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,e7=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,e9=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,te=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,tt=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,tr=X`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,tn=X`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,ti=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,to=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,ta=X` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,ts=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,tl=X`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,tc=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,tu=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,td=X`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,th=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,tf=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,tp=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,tg=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,tb=X`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,tw=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,tm=X`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,ty=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var tv=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tx={allWallets:eT,appStore:eR,chromeStore:eG,apple:eN,arrowBottom:ej,arrowLeft:eM,arrowRight:eB,arrowTop:eU,browser:eL,checkmark:ez,chevronBottom:eF,chevronLeft:eW,chevronRight:eH,chevronTop:eq,clock:eZ,close:eV,compass:eQ,coinPlaceholder:eK,copy:eY,cursor:eX,desktop:eJ,disconnect:e0,discord:e1,etherscan:e2,extension:e5,externalLink:e3,facebook:e6,filters:e4,github:e8,google:e7,helpCircle:e9,infoCircle:te,mail:tt,mobile:tr,networkPlaceholder:tn,nftPlaceholder:ti,off:to,playStore:ta,qrCode:ts,refresh:tl,search:tc,swapHorizontal:tu,swapVertical:td,telegram:th,twitch:tf,twitter:tp,twitterIcon:tg,wallet:tw,walletConnect:tm,walletPlaceholder:tb,warningCircle:ty},tC=class extends eb{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,Y`${tx[this.name]}`}};tC.styles=[eC,ek,eI],tv([eD()],tC.prototype,"size",void 0),tv([eD()],tC.prototype,"name",void 0),tv([eD()],tC.prototype,"color",void 0),tC=tv([eS("wui-icon")],tC);var tE=h`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,tk=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tS=class extends eb{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return Y`<img src=${this.src} alt=${this.alt} />`}};tS.styles=[eC,ek,tE],tk([eD()],tS.prototype,"src",void 0),tk([eD()],tS.prototype,"alt",void 0),tS=tk([eS("wui-image")],tS);var tA=h`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let t$=class extends eb{render(){return Y`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};t$.styles=[eC,tA],t$=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([eS("wui-loading-hexagon")],t$);var tP=h`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,t_=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tD=class extends eb{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,Y`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};tD.styles=[eC,tP],t_([eD()],tD.prototype,"color",void 0),t_([eD()],tD.prototype,"size",void 0),tD=t_([eS("wui-loading-spinner")],tD);var tO=h`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,tI=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tT=class extends eb{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return Y`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};tT.styles=[eC,tO],tI([eD({type:Number})],tT.prototype,"radius",void 0),tT=tI([eS("wui-loading-thumbnail")],tT);var tR=h`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    background: linear-gradient(
      90deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 2.5s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,tN=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tj=class extends eb{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,Y`<slot></slot>`}};tj.styles=[tR],tN([eD()],tj.prototype,"width",void 0),tN([eD()],tj.prototype,"height",void 0),tN([eD()],tj.prototype,"borderRadius",void 0),tj=tN([eS("wui-shimmer")],tj);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tM={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},tB=e=>(...t)=>({_$litDirective$:e,values:t});class tU{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tL=tB(class extends tU{constructor(e){if(super(e),e.type!==tM.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let r in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.st?.has(r)&&this.it.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.it)e in t||(r.remove(e),this.it.delete(e));for(let e in t){let n=!!t[e];n===this.it.has(e)||this.st?.has(e)||(n?(r.add(e),this.it.add(e)):(r.remove(e),this.it.delete(e)))}return J}});var tz=h`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`,tF=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tW=class extends eb{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,Y`<slot class=${tL(e)}></slot>`}};tW.styles=[eC,tz],tF([eD()],tW.prototype,"variant",void 0),tF([eD()],tW.prototype,"color",void 0),tF([eD()],tW.prototype,"align",void 0),tW=tF([eS("wui-text")],tW);let tH=X`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,tq=X`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,tG=X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,tZ=X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,tV=X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,tK=X`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,tQ=X`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,tY=X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,tX=X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,tJ=X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,t0=X`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,t1=X`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,t2=X`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `;var t5=h`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`,t3=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t6={browser:tH,dao:tq,defi:tG,defiAlt:tZ,eth:tV,layers:tK,lock:tQ,login:tY,network:tX,nft:tJ,noun:t0,profile:t1,system:t2},t4=class extends eb{constructor(){super(...arguments),this.name="browser"}render(){return Y`${t6[this.name]}`}};t4.styles=[eC,t5],t3([eD()],t4.prototype,"name",void 0),t4=t3([eS("wui-visual")],t4);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let t8=e=>e??ee,t7={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName(e){let t=new URL(e);return t.hostname},getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:n})=>e.length<=t+r?e:"end"===n?`${e.substring(0,t)}...`:"start"===n?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,""),r=t.substring(0,6),n=this.hexToRgb(r),i=[];for(let e=0;e<5;e+=1){let t=this.tintColor(n,.15*e);i.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${i[0]};
    --local-color-2: ${i[1]};
    --local-color-3: ${i[2]};
    --local-color-4: ${i[3]};
    --local-color-5: ${i[4]};
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[r,n,i]=e;return[Math.round(r+(255-r)*t),Math.round(n+(255-n)*t),Math.round(i+(255-i)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")};var t9=h`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,re=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rt=class extends eb{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&t7.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&t7.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&t7.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&t7.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&t7.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&t7.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&t7.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&t7.getSpacingStyles(this.margin,3)};
    `,Y`<slot></slot>`}};rt.styles=[eC,t9],re([eD()],rt.prototype,"flexDirection",void 0),re([eD()],rt.prototype,"flexWrap",void 0),re([eD()],rt.prototype,"flexBasis",void 0),re([eD()],rt.prototype,"flexGrow",void 0),re([eD()],rt.prototype,"flexShrink",void 0),re([eD()],rt.prototype,"alignItems",void 0),re([eD()],rt.prototype,"justifyContent",void 0),re([eD()],rt.prototype,"columnGap",void 0),re([eD()],rt.prototype,"rowGap",void 0),re([eD()],rt.prototype,"gap",void 0),re([eD()],rt.prototype,"padding",void 0),re([eD()],rt.prototype,"margin",void 0),rt=re([eS("wui-flex")],rt);var rr=h`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,rn=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ri=class extends eb{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return Y`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",Y`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=t7.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};ri.styles=[eC,rr],rn([eD()],ri.prototype,"imageSrc",void 0),rn([eD()],ri.prototype,"alt",void 0),rn([eD()],ri.prototype,"address",void 0),ri=rn([eS("wui-avatar")],ri);var ro=h`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,ra=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rs=class extends eb{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e="xxs";switch(this.size){case"lg":e="lg";break;case"md":e="md";break;case"mdl":e="mdl";break;case"sm":e="xs";break;default:e="xxs"}let t="lg"===this.size,r="opaque"===this.background,n="accent-100"===this.backgroundColor&&r||"success-100"===this.backgroundColor&&r||"error-100"===this.backgroundColor&&r||"inverse-100"===this.backgroundColor&&r;return this.style.cssText=`
       --local-bg-value: ${n?`var(--wui-icon-box-bg-${this.backgroundColor})`:`var(--wui-color-${this.backgroundColor})`};
       --local-bg-mix: ${n?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,Y` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};rs.styles=[eC,eE,ro],ra([eD()],rs.prototype,"size",void 0),ra([eD()],rs.prototype,"backgroundColor",void 0),ra([eD()],rs.prototype,"iconColor",void 0),ra([eD()],rs.prototype,"background",void 0),ra([eD({type:Boolean})],rs.prototype,"border",void 0),ra([eD()],rs.prototype,"borderColor",void 0),ra([eD()],rs.prototype,"icon",void 0),rs=ra([eS("wui-icon-box")],rs);var rl=h`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,rc=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ru=class extends eb{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return Y`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${t8(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${t7.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){let e=this.networkSrc?Y`<wui-image src=${this.networkSrc}></wui-image>`:Y`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return Y`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};ru.styles=[eC,eE,rl],rc([eD()],ru.prototype,"networkSrc",void 0),rc([eD()],ru.prototype,"avatarSrc",void 0),rc([eD()],ru.prototype,"balance",void 0),rc([eD({type:Boolean})],ru.prototype,"disabled",void 0),rc([eD({type:Boolean})],ru.prototype,"isProfileName",void 0),rc([eD()],ru.prototype,"address",void 0),ru=rc([eS("wui-account-button")],ru);var rd=h`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`,rh=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rf=class extends eb{constructor(){super(...arguments),this.size="md",this.name=""}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),Y` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?Y`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?Y`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:Y`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};rf.styles=[eC,rd],rh([eD()],rf.prototype,"size",void 0),rh([eD()],rf.prototype,"name",void 0),rh([eD()],rf.prototype,"imageSrc",void 0),rh([eD()],rf.prototype,"walletIcon",void 0),rf=rh([eS("wui-wallet-image")],rf);var rp=h`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`,rg=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rb=class extends eb{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return Y`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>Y`
          <wui-wallet-image
            size="inherit"
            imageSrc=${e}
            name=${t8(t)}
          ></wui-wallet-image>
        `)}
    ${e?[...Array(4-this.walletImages.length)].map(()=>Y` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};rb.styles=[eC,rp],rg([eD({type:Array})],rb.prototype,"walletImages",void 0),rb=rg([eS("wui-all-wallets-image")],rb);var rw=h`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,rm=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ry=class extends eb{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${"fullWidth"===this.variant?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;let e="md"===this.size?"paragraph-600":"small-600";return Y`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?Y`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:Y``}};ry.styles=[eC,eE,rw],rm([eD()],ry.prototype,"size",void 0),rm([eD({type:Boolean})],ry.prototype,"disabled",void 0),rm([eD({type:Boolean})],ry.prototype,"loading",void 0),rm([eD()],ry.prototype,"variant",void 0),ry=rm([eS("wui-button")],ry);let rv=X`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var rx=h`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`,rC=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rE=class extends eb{constructor(){super(...arguments),this.type="wallet"}render(){return Y`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?Y` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${rv}`:Y`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};rE.styles=[eC,eE,rx],rC([eD()],rE.prototype,"type",void 0),rE=rC([eS("wui-card-select-loader")],rE);let rk=X`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var rS=h`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,rA=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r$=class extends eb{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){let e="lg"===this.size;return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,Y`${this.templateVisual()} ${e?rk:rv}`}templateVisual(){return this.imageSrc?Y`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:Y`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};r$.styles=[eC,rS],rA([eD()],r$.prototype,"size",void 0),rA([eD()],r$.prototype,"name",void 0),rA([eD()],r$.prototype,"imageSrc",void 0),rA([eD({type:Boolean})],r$.prototype,"selected",void 0),r$=rA([eS("wui-network-image")],r$);var rP=h`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`,r_=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rD=class extends eb{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return Y`
      <button data-selected=${t8(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?Y`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${t8(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:Y`
      <wui-wallet-image size="md" imageSrc=${t8(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};rD.styles=[eC,eE,rP],r_([eD()],rD.prototype,"name",void 0),r_([eD()],rD.prototype,"type",void 0),r_([eD()],rD.prototype,"imageSrc",void 0),r_([eD({type:Boolean})],rD.prototype,"disabled",void 0),r_([eD({type:Boolean})],rD.prototype,"selected",void 0),rD=r_([eS("wui-card-select")],rD);var rO=h`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`,rI=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rT=class extends eb{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){let e="transparent"===this.variant?"small-600":"paragraph-600";return Y`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${t7.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?Y`<wui-image src=${this.imageSrc}></wui-image>`:null}};rT.styles=[eC,eE,rO],rI([eD()],rT.prototype,"variant",void 0),rI([eD()],rT.prototype,"imageSrc",void 0),rI([eD({type:Boolean})],rT.prototype,"disabled",void 0),rI([eD()],rT.prototype,"icon",void 0),rI([eD()],rT.prototype,"href",void 0),rT=rI([eS("wui-chip")],rT);var rR=h`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,rN=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rj=class extends eb{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return Y`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?Y`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};rj.styles=[eC,eE,rR],rN([eD()],rj.prototype,"size",void 0),rN([eD({type:Boolean})],rj.prototype,"loading",void 0),rj=rN([eS("wui-connect-button")],rj);var rM=h`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,rB=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rU=class extends eb{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return Y`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};rU.styles=[eC,eE,rM],rB([eD({type:Boolean})],rU.prototype,"disabled",void 0),rB([eD()],rU.prototype,"label",void 0),rB([eD()],rU.prototype,"buttonLabel",void 0),rU=rB([eS("wui-cta-button")],rU);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{D:rL}={S:T,A:R,P:N,C:1,M:ei,L:es,R:z,V:ea,D:el,I:ec,H:ed,N:eh,U:eu,B:ef},rz=e=>void 0===e.strings,rF=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),rF(e,t);return!0},rW=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},rH=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),rZ(t)}};function rq(e){void 0!==this._$AN?(rW(this),this._$AM=e,rH(this)):this._$AM=e}function rG(e,t=!1,r=0){let n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size){if(t){if(Array.isArray(n))for(let e=r;e<n.length;e++)rF(n[e],!1),rW(n[e]);else null!=n&&(rF(n,!1),rW(n))}else rF(this,e)}}let rZ=e=>{e.type==tM.CHILD&&(e._$AP??=rG,e._$AQ??=rq)};class rV extends tU{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),rH(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(rF(this,e),rW(this))}setValue(e){if(rz(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rK=()=>new rQ;class rQ{}let rY=new WeakMap,rX=tB(class extends rV{render(e){return ee}update(e,[t]){let r=t!==this.G;return r&&void 0!==this.G&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=t,this.ct=e.options?.host,this.ot(this.lt=e.element)),ee}ot(e){if("function"==typeof this.G){let t=this.ct??globalThis,r=rY.get(t);void 0===r&&(r=new WeakMap,rY.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ct,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){return"function"==typeof this.G?rY.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var rJ=h`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,r0=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r1=class extends eb{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=rK()}render(){let e=`wui-size-${this.size}`;return Y` ${this.templateIcon()}
      <input
        ${rX(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${t8(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?Y`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};r1.styles=[eC,eE,rJ],r0([eD()],r1.prototype,"size",void 0),r0([eD()],r1.prototype,"icon",void 0),r0([eD({type:Boolean})],r1.prototype,"disabled",void 0),r0([eD()],r1.prototype,"placeholder",void 0),r0([eD()],r1.prototype,"type",void 0),r0([eD()],r1.prototype,"keyHint",void 0),r1=r0([eS("wui-input-text")],r1);var r2=h`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,r5=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r3=class extends eb{render(){return Y`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?Y`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};r3.styles=[eC,r2],r5([eD()],r3.prototype,"errorMessage",void 0),r3=r5([eS("wui-email-input")],r3);var r6=h`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,r4=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r8=class extends eb{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return Y`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};r8.styles=[eC,eE,ek,r6],r4([eD()],r8.prototype,"size",void 0),r4([eD({type:Boolean})],r8.prototype,"disabled",void 0),r4([eD()],r8.prototype,"icon",void 0),r4([eD()],r8.prototype,"iconColor",void 0),r8=r4([eS("wui-icon-link")],r8);var r7=h`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`,r9=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ne=class extends eb{constructor(){super(...arguments),this.icon="copy"}render(){return Y`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};ne.styles=[eC,eE,r7],r9([eD()],ne.prototype,"icon",void 0),ne=r9([eS("wui-input-element")],ne);var nt=h`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`,nr=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nn=class extends eb{constructor(){super(...arguments),this.disabled=!1}render(){return Y`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};nn.styles=[eC,eE,nt],nr([eD({type:Boolean})],nn.prototype,"disabled",void 0),nn=nr([eS("wui-input-numeric")],nn);var ni=h`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`,no=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let na=class extends eb{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return Y`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};na.styles=[eC,eE,ni],no([eD({type:Boolean})],na.prototype,"disabled",void 0),no([eD()],na.prototype,"color",void 0),na=no([eS("wui-link")],na);var ns=h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,nl=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nc=class extends eb{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return Y`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${t8(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return Y`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return Y`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md";return Y`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?Y`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:Y``}chevronTemplate(){return this.chevron?Y`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};nc.styles=[eC,eE,ns],nl([eD()],nc.prototype,"icon",void 0),nl([eD()],nc.prototype,"variant",void 0),nl([eD()],nc.prototype,"iconVariant",void 0),nl([eD({type:Boolean})],nc.prototype,"disabled",void 0),nl([eD()],nc.prototype,"imageSrc",void 0),nl([eD()],nc.prototype,"alt",void 0),nl([eD({type:Boolean})],nc.prototype,"chevron",void 0),nl([eD({type:Boolean})],nc.prototype,"loading",void 0),nc=nl([eS("wui-list-item")],nc);var nu=h`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  :host([data-type='minted']),
  :host([data-type='nftSent']),
  :host([data-type='bought']) {
    border-radius: var(--wui-border-radius-xs);
  }

  wui-image {
    display: block;
    border-radius: inherit;
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`,nd=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nh=["withdrawed","buy","cryptoSent","nftSent"],nf=["deposited","received","bought","minted"],np=["minted","bought","nftSent"],ng=["deposited","withdrawed","cryptoSent","buy","received"],nb=class extends eb{constructor(){super(...arguments),this.type="buy"}render(){let e="accent-100",t="arrowTop";return nh.includes(this.type)?(e="accent-100",t="arrowTop"):nf.includes(this.type)&&np.includes(this.type)?(e="success-100",t="arrowBottom"):nf.includes(this.type)&&ng.includes(this.type)?(e="success-100",t="arrowBottom"):(e="accent-100",t="swapVertical"),this.dataset.type=this.type,Y`
      ${this.templateVisual()}
      <wui-icon-box
        size="xs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        .icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `}templateVisual(){return this.imageSrc?Y`<wui-image src=${this.imageSrc} alt=${this.type}></wui-image>`:np.includes(this.type)?Y`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:Y`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}};nb.styles=[eC,nu],nd([eD()],nb.prototype,"type",void 0),nd([eD()],nb.prototype,"imageSrc",void 0),nb=nd([eS("wui-transaction-visual")],nb);var nw=h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  button > wui-flex > wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  button > wui-flex > wui-text:nth-child(2) {
    text-transform: uppercase;
  }

  button:disabled {
    color: var(--wui-color-fg-300);
  }
`,nm=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ny=class extends eb{constructor(){super(...arguments),this.type="bought",this.disabled=!1,this.imageSrc="",this.date=new Date,this.transactionDetail=""}render(){let e="nftSent"===this.type||"cryptoSent"===this.type,t=e?"Sent":this.type,r=t7.getFormattedDate(this.date);return Y`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-transaction-visual
          type=${this.type}
          imageSrc=${this.imageSrc}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">${t}</wui-text>
          <wui-text variant="small-500" color="fg-200">${this.transactionDetail}</wui-text>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300">${r}</wui-text>
      </button>
    `}};ny.styles=[eC,eE,nw],nm([eD()],ny.prototype,"type",void 0),nm([eD({type:Boolean})],ny.prototype,"disabled",void 0),nm([eD()],ny.prototype,"imageSrc",void 0),nm([eD({attribute:!1})],ny.prototype,"date",void 0),nm([eD()],ny.prototype,"transactionDetail",void 0),ny=nm([eS("wui-list-transaction")],ny);var nv=h`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`,nx=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nC=class extends eb{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,Y`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};nC.styles=[eC,nv],nx([eD()],nC.prototype,"variant",void 0),nC=nx([eS("wui-tag")],nC);var nE=h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,nk=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nS=class extends eb{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return Y`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?Y` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?Y` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?Y`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:Y`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?Y`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?Y`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};nS.styles=[eC,eE,nE],nk([eD({type:Array})],nS.prototype,"walletImages",void 0),nk([eD()],nS.prototype,"imageSrc",void 0),nk([eD()],nS.prototype,"name",void 0),nk([eD()],nS.prototype,"tagLabel",void 0),nk([eD()],nS.prototype,"tagVariant",void 0),nk([eD()],nS.prototype,"icon",void 0),nk([eD()],nS.prototype,"walletIcon",void 0),nk([eD({type:Boolean})],nS.prototype,"disabled",void 0),nk([eD({type:Boolean})],nS.prototype,"showAllWallets",void 0),nS=nk([eS("wui-list-wallet")],nS);var nA=h`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,n$=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nP=class extends eb{constructor(){super(...arguments),this.logo="google"}render(){return Y`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};nP.styles=[eC,nA],n$([eD()],nP.prototype,"logo",void 0),nP=n$([eS("wui-logo")],nP);var n_=h`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,nD=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nO=class extends eb{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return Y`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};nO.styles=[eC,eE,n_],nD([eD()],nO.prototype,"logo",void 0),nD([eD({type:Boolean})],nO.prototype,"disabled",void 0),nO=nD([eS("wui-logo-select")],nO);var nI=h`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`,nT=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nR=class extends eb{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return Y`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?Y`<wui-image src=${this.imageSrc}></wui-image>`:Y`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};nR.styles=[eC,eE,nI],nT([eD()],nR.prototype,"imageSrc",void 0),nT([eD({type:Boolean})],nR.prototype,"disabled",void 0),nR=nT([eS("wui-network-button")],nR);var nN=h`
  :host {
    position: relative;
    display: block;
  }
`,nj=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nM=class extends eb{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(e,t)=>{let r=e.target,n=this.getInputElement(r);if(!n)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let i=n.selectionStart;switch(e.key){case"ArrowLeft":i&&n.setSelectionRange(i+1,i+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===n.value?this.focusInputField("prev",t):n.value=""}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1,r=this.numerics[e<this.length?e:t],n=r?this.getInputElement(r):void 0;n&&n.focus()}if("prev"===e){let e=t-1,r=this.numerics[e>-1?e:t],n=r?this.getInputElement(r):void 0;n&&n.focus()}}}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e))}render(){return Y`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((e,t)=>Y`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @keydown=${e=>this.handleKeyDown(e,t)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(e,t){let r=e.target,n=this.getInputElement(r);if(n){let r=n.value;if("insertFromPaste"===e.inputType)this.handlePaste(n,r,t);else{let i=t7.isNumber(r);i&&e.data?(n.value=e.data,this.focusInputField("next",t)):n.value=""}}}handlePaste(e,t,r){let n=t[0],i=n&&t7.isNumber(n);if(i){e.value=n;let i=t.substring(1);if(r+1<this.length&&i.length){let e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,i,r+1)}else this.focusInputField("next",r)}else e.value=""}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}};nM.styles=[eC,nN],nj([eD({type:Number})],nM.prototype,"length",void 0),nM=nj([eS("wui-otp")],nM);var nB=r(92592);function nU(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}let nL={generate(e,t,r){let n="#141414",i=[],o=function(e,t){let r=Array.prototype.slice.call(nB.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),n=Math.sqrt(r.length);return r.reduce((e,t,r)=>(r%n==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),a=t/o.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach(({x:e,y:t})=>{let r=(o.length-7)*a*e,l=(o.length-7)*a*t;for(let e=0;e<s.length;e+=1){let t=a*(7-2*e);i.push(X`
            <rect
              fill=${2===e?n:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${n}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?l+a*e+2.5:l+a*e}
              y= ${0===e?r+a*e+2.5:r+a*e}
            />
          `)}});let l=Math.floor((r+25)/a),c=o.length/2-l/2,u=o.length/2+l/2-1,d=[];o.forEach((e,t)=>{e.forEach((e,r)=>{!o[t][r]||t<7&&r<7||t>o.length-8&&r<7||t<7&&r>o.length-8||t>c&&t<u&&r>c&&r<u||d.push([t*a+a/2,r*a+a/2])})});let h={};return d.forEach(([e,t])=>{h[e]?h[e]?.push(t):h[e]=[t]}),Object.entries(h).map(([e,t])=>{let r=t.filter(e=>t.every(t=>!nU(e,t,a)));return[Number(e),r]}).forEach(([e,t])=>{t.forEach(t=>{i.push(X`<circle cx=${e} cy=${t} fill=${n} r=${a/2.5} />`)})}),Object.entries(h).filter(([e,t])=>t.length>1).map(([e,t])=>{let r=t.filter(e=>t.some(t=>nU(e,t,a)));return[Number(e),r]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let r=[];for(let e of t){let t=r.find(t=>t.some(t=>nU(e,t,a)));t?t.push(e):r.push([e])}return[e,r.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,r])=>{i.push(X`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${n}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)})}),i}};var nz=h`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,nF=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nW=class extends eb{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,Y`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return X`
      <svg height=${e} width=${e}>
        ${nL.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?Y`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:Y`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};nW.styles=[eC,nz],nF([eD()],nW.prototype,"uri",void 0),nF([eD({type:Number})],nW.prototype,"size",void 0),nF([eD()],nW.prototype,"theme",void 0),nF([eD()],nW.prototype,"imageSrc",void 0),nF([eD()],nW.prototype,"alt",void 0),nW=nF([eS("wui-qr-code")],nW);var nH=h`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let nq=class extends eb{constructor(){super(...arguments),this.inputComponentRef=rK()}render(){return Y`
      <wui-input-text
        ${rX(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};nq.styles=[eC,nH],nq=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([eS("wui-search-bar")],nq);var nG=h`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`,nZ=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nV=class extends eb{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return Y`
      <wui-icon-box
        size="sm"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};nV.styles=[eC,nG],nZ([eD()],nV.prototype,"backgroundColor",void 0),nZ([eD()],nV.prototype,"iconColor",void 0),nZ([eD()],nV.prototype,"icon",void 0),nZ([eD()],nV.prototype,"message",void 0),nV=nZ([eS("wui-snackbar")],nV);var nK=h`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`,nQ=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nY=class extends eb{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let r=t===this.activeTab;return Y`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let r=this.buttons[this.activeTab],n=this.buttons[e],i=r?.querySelector("wui-text"),o=n?.querySelector("wui-text"),a=n?.getBoundingClientRect(),s=o?.getBoundingClientRect();r&&i&&!t&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),n&&a&&s&&o&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,n.animate([{width:`${a.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:t?0:250,delay:t?0:50,fill:"forwards",easing:"ease"}))}};nY.styles=[eC,eE,nK],nQ([eD({type:Array})],nY.prototype,"tabs",void 0),nQ([eD()],nY.prototype,"onTabChange",void 0),nQ([eD({type:Array})],nY.prototype,"buttons",void 0),nQ([eD({type:Boolean})],nY.prototype,"disabled",void 0),nQ([eO()],nY.prototype,"activeTab",void 0),nQ([eO()],nY.prototype,"localTabWidth",void 0),nQ([eO()],nY.prototype,"isDense",void 0),nY=nQ([eS("wui-tabs")],nY);var nX=h`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,nJ=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let n0=class extends eb{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return Y`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};n0.styles=[eC,eE,nX],nJ([eD()],n0.prototype,"placement",void 0),nJ([eD()],n0.prototype,"message",void 0),n0=nJ([eS("wui-tooltip")],n0);var n1=h`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,n2=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let n5=class extends eb{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&t7.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&t7.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&t7.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&t7.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&t7.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&t7.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&t7.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&t7.getSpacingStyles(this.margin,3)};
    `,Y`<slot></slot>`}};n5.styles=[eC,n1],n2([eD()],n5.prototype,"gridTemplateRows",void 0),n2([eD()],n5.prototype,"gridTemplateColumns",void 0),n2([eD()],n5.prototype,"justifyItems",void 0),n2([eD()],n5.prototype,"alignItems",void 0),n2([eD()],n5.prototype,"justifyContent",void 0),n2([eD()],n5.prototype,"alignContent",void 0),n2([eD()],n5.prototype,"columnGap",void 0),n2([eD()],n5.prototype,"rowGap",void 0),n2([eD()],n5.prototype,"gap",void 0),n2([eD()],n5.prototype,"padding",void 0),n2([eD()],n5.prototype,"margin",void 0),n5=n2([eS("wui-grid")],n5);var n3=h`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`,n6=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let n4=class extends eb{constructor(){super(...arguments),this.text=""}render(){return Y`${this.template()}`}template(){return this.text?Y`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};n4.styles=[eC,n3],n6([eD()],n4.prototype,"text",void 0),n4=n6([eS("wui-separator")],n4)},6802:function(e,t,r){"use strict";let n;r.d(t,{OY:function(){return t$},o1:function(){return tA},k_:function(){return t_},y7:function(){return tP}});var i,o,a,s,l,c,u,d,h,f,p,g,b,w,m,y,v,x,C,E,k,S,A,$,P=r(67294),_=r(57974),D=r(66403),O=r(36635),I=r(6894),T=r(92233),R=r(18569),N=r(88382);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let j=e=>e??N.Ld;var M=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let B=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.networkImages=O.WM.state.networkImages,this.disabled=!1,this.balance="show",this.address=O.Ni.state.address,this.balanceVal=O.Ni.state.balance,this.balanceSymbol=O.Ni.state.balanceSymbol,this.profileName=O.Ni.state.profileName,this.profileImage=O.Ni.state.profileImage,this.network=O.fB.state.caipNetwork,this.unsubscribe.push(...[O.Ni.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),O.fB.subscribeKey("caipNetwork",e=>this.network=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.networkImages[this.network?.imageId??""],t="show"===this.balance;return T.dy`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        address=${j(this.profileName??this.address)}
        ?isProfileName=${Boolean(this.profileName)}
        networkSrc=${j(e)}
        avatarSrc=${j(this.profileImage)}
        balance=${t?O.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){O.IN.open()}};M([(0,R.Cb)({type:Boolean})],B.prototype,"disabled",void 0),M([(0,R.Cb)()],B.prototype,"balance",void 0),M([(0,R.SB)()],B.prototype,"address",void 0),M([(0,R.SB)()],B.prototype,"balanceVal",void 0),M([(0,R.SB)()],B.prototype,"balanceSymbol",void 0),M([(0,R.SB)()],B.prototype,"profileName",void 0),M([(0,R.SB)()],B.prototype,"profileImage",void 0),M([(0,R.SB)()],B.prototype,"network",void 0),B=M([(0,I.customElement)("w3m-account-button")],B);var U=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let L=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=O.Ni.state.isConnected,this.unsubscribe.push(O.Ni.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?T.dy`
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${j(this.balance)}
          >
          </w3m-account-button>
        `:T.dy`
          <w3m-connect-button
            size=${j(this.size)}
            label=${j(this.label)}
            loadingLabel=${j(this.loadingLabel)}
          ></w3m-connect-button>
        `}};U([(0,R.Cb)({type:Boolean})],L.prototype,"disabled",void 0),U([(0,R.Cb)()],L.prototype,"balance",void 0),U([(0,R.Cb)()],L.prototype,"size",void 0),U([(0,R.Cb)()],L.prototype,"label",void 0),U([(0,R.Cb)()],L.prototype,"loadingLabel",void 0),U([(0,R.SB)()],L.prototype,"isAccount",void 0),L=U([(0,I.customElement)("w3m-button")],L);var z=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let F=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=O.IN.state.open,this.unsubscribe.push(O.IN.subscribeKey("open",e=>this.open=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return T.dy`
      <wui-connect-button
        size=${j(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?O.IN.close():O.IN.open()}};z([(0,R.Cb)()],F.prototype,"size",void 0),z([(0,R.Cb)()],F.prototype,"label",void 0),z([(0,R.Cb)()],F.prototype,"loadingLabel",void 0),z([(0,R.SB)()],F.prototype,"open",void 0),F=z([(0,I.customElement)("w3m-connect-button")],F),r(90078);var W=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let H=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=O.fB.state.caipNetwork,this.connected=O.Ni.state.isConnected,this.unsubscribe.push(...[O.fB.subscribeKey("caipNetwork",e=>this.network=e),O.Ni.subscribeKey("isConnected",e=>this.connected=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return T.dy`
      <wui-network-button
        .disabled=${Boolean(this.disabled)}
        imageSrc=${j(O.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){O.IN.open({view:"Networks"})}};W([(0,R.Cb)({type:Boolean})],H.prototype,"disabled",void 0),W([(0,R.SB)()],H.prototype,"network",void 0),W([(0,R.SB)()],H.prototype,"connected",void 0),H=W([(0,I.customElement)("w3m-network-button")],H);var q=T.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,G=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Z=class extends T.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=O.Pc.state.view,this.unsubscribe.push(O.Pc.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{let t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return T.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return T.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return T.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return T.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"AllWallets":return T.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return T.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return T.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return T.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return T.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return T.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return T.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return T.dy`<w3m-downloads-view></w3m-downloads-view>`}}async onViewChange(e){let{history:t}=O.Pc.state,r=-10,n=10;t.length<this.prevHistoryLength&&(r=10,n=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${n}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};Z.styles=q,G([(0,R.SB)()],Z.prototype,"view",void 0),Z=G([(0,I.customElement)("w3m-router")],Z);var V=T.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`,K=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Q=class extends T.oi{constructor(){super(),this.usubscribe=[],this.networkImages=O.WM.state.networkImages,this.address=O.Ni.state.address,this.profileImage=O.Ni.state.profileImage,this.profileName=O.Ni.state.profileName,this.balance=O.Ni.state.balance,this.balanceSymbol=O.Ni.state.balanceSymbol,this.network=O.fB.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(...[O.Ni.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):O.IN.close()})],O.fB.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=this.networkImages[this.network?.imageId??""];return T.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${j(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?I.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):I.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${O.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${j(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){let{addressExplorerUrl:e}=O.Ni.state;return e?T.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){let{requestedCaipNetworks:e}=O.fB.state,t=!!e&&e.length>1,r=e?.find(({id:e})=>e===this.network?.id);return t||!r}onCopyAddress(){try{this.address&&(O.j1.copyToClopboard(this.address),O.KC.showSuccess("Address copied"))}catch{O.KC.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&O.Pc.push("Networks")}async onDisconnect(){try{this.disconecting=!0,await O.lZ.disconnect(),O.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),O.IN.close()}catch{O.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),O.KC.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){let{addressExplorerUrl:e}=O.Ni.state;e&&O.j1.openHref(e,"_blank")}};Q.styles=V,K([(0,R.SB)()],Q.prototype,"address",void 0),K([(0,R.SB)()],Q.prototype,"profileImage",void 0),K([(0,R.SB)()],Q.prototype,"profileName",void 0),K([(0,R.SB)()],Q.prototype,"balance",void 0),K([(0,R.SB)()],Q.prototype,"balanceSymbol",void 0),K([(0,R.SB)()],Q.prototype,"network",void 0),K([(0,R.SB)()],Q.prototype,"disconecting",void 0),Q=K([(0,I.customElement)("w3m-account-view")],Q);var Y=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let X=class extends T.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=O.j1.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return T.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?T.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:T.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return O.j1.isMobile()?T.dy`
        <wui-icon-box
          size="lg"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){O.Pc.push("ConnectingWalletConnect")}};Y([(0,R.SB)()],X.prototype,"search",void 0),X=Y([(0,I.customElement)("w3m-all-wallets-view")],X);var J=T.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,ee=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let et=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.connectors=O.AA.state.connectors,this.unsubscribe.push(O.AA.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return T.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(O.j1.isMobile())return null;let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);return e?T.dy`
      <wui-list-wallet
        imageSrc=${j(O.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:e}=O.hD.state;if(!e?.length)return null;let t=this.filterOutDuplicateWallets(e);return t.map(e=>T.dy`
        <wui-list-wallet
          imageSrc=${j(O.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}featuredTemplate(){let{featured:e}=O.QT.state;if(!e.length)return null;let t=this.filterOutDuplicateWallets(e);return t.map(e=>T.dy`
        <wui-list-wallet
          imageSrc=${j(O.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}recentTemplate(){let e=O.MO.getRecentWallets();return e.map(e=>T.dy`
        <wui-list-wallet
          imageSrc=${j(O.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>"ANNOUNCED"!==e.type?null:T.dy`
        <wui-list-wallet
          imageSrc=${j(O.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){let e=this.connectors.find(e=>"ANNOUNCED"===e.type);return this.connectors.map(t=>"INJECTED"===t.type&&O.lZ.checkInstalled()?T.dy`
        <wui-list-wallet
          imageSrc=${j(O.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel=${j(e?void 0:"installed")}
          tagVariant=${j(e?void 0:"success")}
        >
        </wui-list-wallet>
      `:null)}connectorsTemplate(){return this.connectors.map(e=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(e.type)?null:T.dy`
        <wui-list-wallet
          imageSrc=${j(O.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){let e=10*Math.floor(O.QT.state.count/10);return T.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${e}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){let{recommended:e}=O.QT.state,{customWallets:t,featuredWalletIds:r}=O.hD.state,{connectors:n}=O.AA.state,i=O.MO.getRecentWallets(),o=n.filter(e=>"ANNOUNCED"===e.type);if(r||t||!e.length)return null;let a=o.length+i.length,s=this.filterOutDuplicateWallets(e).slice(0,Math.max(0,2-a));return s.map(e=>T.dy`
        <wui-list-wallet
          imageSrc=${j(O.fz.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}onConnector(e){"WALLET_CONNECT"===e.type?O.j1.isMobile()?O.Pc.push("AllWallets"):O.Pc.push("ConnectingWalletConnect"):O.Pc.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){let{connectors:t}=O.AA.state,r=O.MO.getRecentWallets(),n=r.map(e=>e.id),i=t.map(e=>e.info?.rdns).filter(Boolean),o=e.filter(e=>!n.includes(e.id)&&!i.includes(e.rdns??void 0));return o}onAllWallets(){O.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),O.Pc.push("AllWallets")}onConnectWallet(e){O.Pc.push("ConnectingWalletConnect",{wallet:e})}};et.styles=J,ee([(0,R.SB)()],et.prototype,"connectors",void 0),et=ee([(0,I.customElement)("w3m-connect-view")],et);var er=T.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,en=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};class ei extends T.oi{constructor(){super(),this.wallet=O.Pc.state.data?.wallet,this.connector=O.Pc.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=O.fz.getWalletImage(this.wallet)??O.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=O.lZ.state.wcUri,this.error=O.lZ.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[O.lZ.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),O.lZ.subscribeKey("wcError",e=>this.error=e),O.lZ.subscribeKey("buffering",e=>this.buffering=e)])}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),T.dy`
      <wui-flex
        data-error=${j(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${j(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?T.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(O.lZ.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let e=O.u0.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return T.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(O.j1.copyToClopboard(this.uri),O.KC.showSuccess("Link copied"))}catch{O.KC.showError("Failed to copy")}}}ei.styles=er,en([(0,R.SB)()],ei.prototype,"uri",void 0),en([(0,R.SB)()],ei.prototype,"error",void 0),en([(0,R.SB)()],ei.prototype,"ready",void 0),en([(0,R.SB)()],ei.prototype,"showRetry",void 0),en([(0,R.SB)()],ei.prototype,"buffering",void 0),en([(0,R.Cb)({type:Boolean})],ei.prototype,"isMobile",void 0),en([(0,R.Cb)()],ei.prototype,"onRetry",void 0);let eo={INJECTED:"browser",ANNOUNCED:"browser"},ea=class extends ei{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");O.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:eo[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(await O.lZ.connectExternal(this.connector),O.IN.close(),O.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){O.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};ea=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,I.customElement)("w3m-connecting-external-view")],ea);var es=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let el=class extends T.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=O.Pc.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),O.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),T.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):T.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{let{wcPairingExpiry:t}=O.lZ.state;(e||O.j1.isPairingExpired(t))&&(O.lZ.connectWalletConnect(),await O.lZ.state.wcPromise,this.finalizeConnection(),O.IN.close())}catch(e){O.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),O.lZ.setWcError(!0),O.j1.isAllowedRetry(this.lastRetry)&&(O.KC.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:e,recentWallet:t}=O.lZ.state;e&&O.MO.setWalletConnectDeepLink(e),t&&O.MO.setWeb3ModalRecent(t),O.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:r,injected:n,rdns:i}=this.wallet,o=n?.map(({injected_id:e})=>e).filter(Boolean),a=i?[i]:o??[],s=a.length,l=O.lZ.checkInstalled(a),c=s&&l,u=t&&!O.j1.isMobile();c&&this.platforms.push("browser"),e&&this.platforms.push(O.j1.isMobile()?"mobile":"qrcode"),r&&this.platforms.push("web"),u&&this.platforms.push("desktop"),!c&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return T.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return T.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return T.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return T.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return T.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return T.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){let e=this.platforms.length>1;return e?T.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};es([(0,R.SB)()],el.prototype,"platform",void 0),es([(0,R.SB)()],el.prototype,"platforms",void 0),el=es([(0,I.customElement)("w3m-connecting-wc-view")],el);let ec=class extends T.oi{constructor(){super(...arguments),this.wallet=O.Pc.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return T.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?T.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?T.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?T.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?T.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&O.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&O.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&O.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&O.j1.openHref(this.wallet.homepage,"_blank")}};ec=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,I.customElement)("w3m-downloads-view")],ec);let eu=class extends T.oi{render(){return T.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{O.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=O.QT.state,{customWallets:r}=O.hD.state,n=[...t,...r??[],...e].slice(0,4);return n.map(e=>T.dy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${j(O.fz.getWalletImage(e))}
          @click=${()=>{O.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};eu=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,I.customElement)("w3m-get-wallet-view")],eu);var ed=T.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,eh=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ef=class extends T.oi{constructor(){super(),this.network=O.Pc.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=O.fB.state.caipNetwork,this.unsubscribe.push(O.fB.subscribeKey("caipNetwork",e=>{e?.id!==this.currentNetwork?.id&&O.Pc.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return T.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${j(O.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:T.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await O.fB.switchActiveNetwork(this.network),O.Pc.goBack())}catch{this.error=!0}}};ef.styles=ed,eh([(0,R.SB)()],ef.prototype,"showRetry",void 0),eh([(0,R.SB)()],ef.prototype,"error",void 0),eh([(0,R.SB)()],ef.prototype,"currentNetwork",void 0),ef=eh([(0,I.customElement)("w3m-network-switch-view")],ef);var ep=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eg=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=O.fB.state.caipNetwork,this.unsubscribe.push(O.fB.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return T.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){O.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),O.Pc.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=O.fB.state;return e?.length&&t?.sort((t,r)=>e.indexOf(r.id)-e.indexOf(t.id)),t?.map(t=>T.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===t.id}
          imageSrc=${j(O.fz.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${!r&&!e?.includes(t.id)}
        ></wui-card-select>
      `)}async onSwitchNetwork(e){let{isConnected:t}=O.Ni.state,{approvedCaipNetworkIds:r,supportsAllNetworks:n,caipNetwork:i}=O.fB.state;t&&i?.id!==e.id?r?.includes(e.id)?await O.fB.switchActiveNetwork(e):n&&O.Pc.push("SwitchNetwork",{network:e}):t||(O.fB.setCaipNetwork(e),O.Pc.push("Connect"))}};ep([(0,R.SB)()],eg.prototype,"caipNetwork",void 0),eg=ep([(0,I.customElement)("w3m-networks-view")],eg);let eb=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],ew=class extends T.oi{render(){return T.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eb}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{O.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};ew=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,I.customElement)("w3m-what-is-a-network-view")],ew);let em=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],ey=class extends T.oi{render(){return T.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${em}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){O.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),O.Pc.push("GetWallet")}};ey=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,I.customElement)("w3m-what-is-a-wallet-view")],ey);var ev=T.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,ex=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eC="local-paginator",eE=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!O.QT.state.wallets.length,this.wallets=O.QT.state.wallets,this.recommended=O.QT.state.recommended,this.featured=O.QT.state.featured,this.unsubscribe.push(...[O.QT.subscribeKey("wallets",e=>this.wallets=e),O.QT.subscribeKey("recommended",e=>this.recommended=e),O.QT.subscribeKey("featured",e=>this.featured=e)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return T.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await O.QT.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>T.dy`
        <wui-card-select-loader type="wallet" id=${j(t)}></wui-card-select-loader>
      `)}walletsTemplate(){let e=[...this.featured,...this.recommended,...this.wallets];return e.map(e=>T.dy`
        <wui-card-select
          imageSrc=${j(O.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:r,count:n}=O.QT.state,i=window.innerWidth<352?3:4,o=e.length+t.length,a=Math.ceil(o/i)*i-o+i;return(a-=e.length?r.length%i:0,0===n||[...r,...e,...t].length<n)?this.shimmerTemplate(a,eC):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${eC}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.initial){let{page:e,count:t,wallets:r}=O.QT.state;r.length<t&&O.QT.fetchWallets({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){let{connectors:t}=O.AA.state,r=t.find(({explorerId:t})=>t===e.id);r?O.Pc.push("ConnectingExternal",{connector:r}):O.Pc.push("ConnectingWalletConnect",{wallet:e})}};eE.styles=ev,ex([(0,R.SB)()],eE.prototype,"initial",void 0),ex([(0,R.SB)()],eE.prototype,"wallets",void 0),ex([(0,R.SB)()],eE.prototype,"recommended",void 0),ex([(0,R.SB)()],eE.prototype,"featured",void 0),eE=ex([(0,I.customElement)("w3m-all-wallets-list")],eE);var ek=T.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,eS=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eA=class extends T.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?T.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await O.QT.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:e}=O.QT.state;return e.length?T.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${e.map(e=>T.dy`
            <wui-card-select
              imageSrc=${j(O.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:T.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconcolor="fg-200"
            backgroundcolor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){let{connectors:t}=O.AA.state,r=t.find(({explorerId:t})=>t===e.id);r?O.Pc.push("ConnectingExternal",{connector:r}):O.Pc.push("ConnectingWalletConnect",{wallet:e})}};eA.styles=ek,eS([(0,R.SB)()],eA.prototype,"loading",void 0),eS([(0,R.Cb)()],eA.prototype,"query",void 0),eA=eS([(0,I.customElement)("w3m-all-wallets-search")],eA);var e$=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eP=class extends T.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(O.lZ.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return T.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};e$([(0,R.Cb)({type:Array})],eP.prototype,"platforms",void 0),e$([(0,R.Cb)()],eP.prototype,"onSelectPlatfrom",void 0),e$([(0,R.SB)()],eP.prototype,"buffering",void 0),eP=e$([(0,I.customElement)("w3m-connecting-header")],eP);let e_=class extends ei{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),O.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=O.AA.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns),r=e.find(e=>"INJECTED"===e.type);t?await O.lZ.connectExternal(t):r&&await O.lZ.connectExternal(r),O.IN.close(),O.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){O.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};e_=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,I.customElement)("w3m-connecting-wc-browser")],e_);let eD=class extends ei{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),O.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:r,href:n}=O.j1.formatNativeUrl(e,this.uri);O.lZ.setWcLinking({name:t,href:n}),O.lZ.setRecentWallet(this.wallet),O.j1.openHref(r,"_self")}catch{this.error=!0}}};eD=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,I.customElement)("w3m-connecting-wc-desktop")],eD);let eO=class extends ei{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),O.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:r,href:n}=O.j1.formatNativeUrl(e,this.uri);O.lZ.setWcLinking({name:t,href:n}),O.lZ.setRecentWallet(this.wallet),O.j1.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){let e=O.j1.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(O.lZ.setBuffering(!0),setTimeout(()=>{O.lZ.setBuffering(!1)},5e3))}};eO=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,I.customElement)("w3m-connecting-wc-mobile")],eO);var eI=T.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let eT=class extends ei{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),O.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),T.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return O.lZ.setWcLinking(void 0),O.lZ.setRecentWallet(this.wallet),T.dy`<wui-qr-code
      size=${e}
      theme=${O.u0.state.themeMode}
      uri=${this.uri}
      imageSrc=${j(O.fz.getWalletImage(this.wallet))}
      alt=${j(t)}
    ></wui-qr-code>`}};eT.styles=eI,eT=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,I.customElement)("w3m-connecting-wc-qrcode")],eT);let eR=class extends T.oi{constructor(){if(super(),this.wallet=O.Pc.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");O.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return T.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${j(O.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};eR=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,I.customElement)("w3m-connecting-wc-unsupported")],eR);let eN=class extends ei{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",O.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:r,href:n}=O.j1.formatUniversalUrl(e,this.uri);O.lZ.setWcLinking({name:t,href:n}),O.lZ.setRecentWallet(this.wallet),O.j1.openHref(r,"_blank")}catch{this.error=!0}}};eN=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,I.customElement)("w3m-connecting-wc-web")],eN);var ej=T.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,eM=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};function eB(){let e=O.Pc.state.data?.connector?.name,t=O.Pc.state.data?.wallet?.name,r=O.Pc.state.data?.network?.name,n=t??e;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:n?`Get ${n}`:"Downloads"}}let eU=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.heading=eB()[O.Pc.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(O.Pc.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),O.lZ.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return T.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${O.IN.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){O.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),O.Pc.push("WhatIsAWallet")}titleTemplate(){return T.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:e}=O.Pc.state;return this.showBack?T.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${O.Pc.goBack}
      ></wui-icon-link>`:T.dy`<wui-icon-link
      data-hidden=${"Connect"!==e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?T.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){let t=this.shadowRoot?.querySelector("wui-text");if(t){let r=eB()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:e}=O.Pc.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};eU.styles=[ej],eM([(0,R.SB)()],eU.prototype,"heading",void 0),eM([(0,R.SB)()],eU.prototype,"buffering",void 0),eM([(0,R.SB)()],eU.prototype,"showBack",void 0),eU=eM([(0,I.customElement)("w3m-header")],eU);var eL=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ez=class extends T.oi{constructor(){super(...arguments),this.data=[]}render(){return T.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>T.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>T.dy`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};eL([(0,R.Cb)({type:Array})],ez.prototype,"data",void 0),ez=eL([(0,I.customElement)("w3m-help-widget")],ez);var eF=T.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;let eW=class extends T.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=O.hD.state;return e||t?T.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=O.hD.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=O.hD.state;return e?T.dy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=O.hD.state;return e?T.dy`<a href=${e}>Privacy Policy</a>`:null}};eW.styles=[eF],eW=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,I.customElement)("w3m-legal-footer")],eW);var eH=T.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,eq=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eG=class extends T.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:r,chrome_store:n,homepage:i}=this.wallet,o=O.j1.isMobile(),a=O.j1.isIos(),s=O.j1.isAndroid(),l=[t,r,i,n].filter(Boolean).length>1,c=I.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!o?T.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>O.Pc.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&i?T.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?T.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&s?T.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&O.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&O.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&O.j1.openHref(this.wallet.homepage,"_blank")}};eG.styles=[eH],eq([(0,R.Cb)({type:Object})],eG.prototype,"wallet",void 0),eG=eq([(0,I.customElement)("w3m-mobile-download-links")],eG);var eZ=T.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`,eV=function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eK={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},eQ=class extends T.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=O.KC.state.open,this.unsubscribe.push(O.KC.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=O.KC.state,r=eK[t];return T.dy`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>O.KC.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};eQ.styles=eZ,eV([(0,R.SB)()],eQ.prototype,"open",void 0),eQ=eV([(0,I.customElement)("w3m-snackbar")],eQ);let eY=!1;class eX{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{O.Ni.setIsConnected(e)},this.setCaipAddress=e=>{O.Ni.setCaipAddress(e)},this.setBalance=(e,t)=>{O.Ni.setBalance(e,t)},this.setProfileName=e=>{O.Ni.setProfileName(e)},this.setProfileImage=e=>{O.Ni.setProfileImage(e)},this.resetAccount=()=>{O.Ni.resetAccount()},this.setCaipNetwork=e=>{O.fB.setCaipNetwork(e)},this.getCaipNetwork=()=>O.fB.state.caipNetwork,this.setRequestedCaipNetworks=e=>{O.fB.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>O.fB.getApprovedCaipNetworksData(),this.resetNetwork=()=>{O.fB.resetNetwork()},this.setConnectors=e=>{O.AA.setConnectors(e)},this.addConnector=e=>{O.AA.addConnector(e)},this.getConnectors=()=>O.AA.getConnectors(),this.resetWcConnection=()=>{O.lZ.resetWcConnection()},this.fetchIdentity=e=>O.Lr.fetchIdentity(e),this.setAddressExplorerUrl=e=>{O.Ni.setAddressExplorerUrl(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),O.IN.open(e)}async close(){await this.initOrContinue(),O.IN.close()}getThemeMode(){return O.u0.state.themeMode}getThemeVariables(){return O.u0.state.themeVariables}setThemeMode(e){O.u0.setThemeMode(e),(0,I.setColorTheme)(O.u0.state.themeMode)}setThemeVariables(e){O.u0.setThemeVariables(e),(0,I.setThemeVariables)(O.u0.state.themeVariables)}subscribeTheme(e){return O.u0.subscribe(e)}getState(){return{...O.Ie.state}}subscribeState(e){return O.Ie.subscribe(e)}getEvent(){return{...O.Xs.state}}subscribeEvents(e){return O.Xs.subscribe(e)}initControllers(e){O.fB.setClient(e.networkControllerClient),O.fB.setDefaultCaipNetwork(e.defaultChain),O.hD.setProjectId(e.projectId),O.hD.setIncludeWalletIds(e.includeWalletIds),O.hD.setExcludeWalletIds(e.excludeWalletIds),O.hD.setFeaturedWalletIds(e.featuredWalletIds),O.hD.setTokens(e.tokens),O.hD.setTermsConditionsUrl(e.termsConditionsUrl),O.hD.setPrivacyPolicyUrl(e.privacyPolicyUrl),O.hD.setCustomWallets(e.customWallets),O.hD.setEnableAnalytics(e.enableAnalytics),O.hD.setSdkVersion(e._sdkVersion),O.lZ.setClient(e.connectionControllerClient),e.themeMode&&O.u0.setThemeMode(e.themeMode),e.themeVariables&&O.u0.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!eY&&O.j1.isClient()&&(eY=!0,this.initPromise=new Promise(async e=>{await Promise.all([Promise.resolve().then(r.bind(r,6894)),Promise.resolve().then(r.bind(r,90078))]);let t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}let eJ="walletConnect",e0="injected",e1="coinbaseWallet",e2="safe",e5="ledger",e3="eip6963",e6="eip155",e4="3.1.0",e8={1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},e7={[e1]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[e2]:"461db637-8616-43ce-035a-d89b8a1d5800",[e5]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[eJ]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[e0]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},e9={[e1]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[e2]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[e5]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},te={[e0]:"Browser Wallet",[eJ]:"WalletConnect",[e1]:"Coinbase",[e5]:"Ledger",[e2]:"Safe"},tt={[e0]:"INJECTED",[eJ]:"WALLET_CONNECT",[e3]:"ANNOUNCED"};function tr(e){return e?Number(e.split(":")[1]):void 0}class tn extends eX{constructor(e){let{wagmiConfig:t,chains:r,defaultChain:n,tokens:i,_sdkVersion:o,...a}=e;if(!t)throw Error("web3modal:constructor - wagmiConfig is undefined");if(!a.projectId)throw Error("web3modal:constructor - projectId is undefined");if(!t.connectors.find(e=>e.id===eJ))throw Error("web3modal:constructor - WalletConnectConnector is required");let s={connectWalletConnect:async e=>{let r=t.connectors.find(e=>e.id===eJ);if(!r)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");r.on("message",t=>{"display_uri"===t.type&&(e(t.data),r.removeAllListeners())});let n=tr(this.getCaipNetwork()?.id);await (0,_.$j)({connector:r,chainId:n})},connectExternal:async({id:e,provider:r,info:n})=>{let i=t.connectors.find(t=>t.id===e);if(!i)throw Error("connectionControllerClient:connectExternal - connector is undefined");r&&n&&i.id===e3&&i.setEip6963Wallet?.({provider:r,info:n});let o=tr(this.getCaipNetwork()?.id);await (0,_.$j)({connector:i,chainId:o})},checkInstalled:e=>{let t=this.getConnectors().filter(e=>"ANNOUNCED"===e.type),r=this.getConnectors().find(e=>"INJECTED"===e.type);if(!e)return Boolean(window.ethereum);if(t.length){let r=e.some(e=>t.some(t=>t.info?.rdns===e));if(r)return!0}return!!r&&!!window?.ethereum&&e.some(e=>Boolean(window.ethereum?.[String(e)]))},disconnect:_.zP};super({networkControllerClient:{switchCaipNetwork:async e=>{let t=tr(e?.id);t&&await (0,_.If)({chainId:t})},async getApprovedCaipNetworksData(){let e=localStorage.getItem("wagmi.wallet");if(e?.includes(eJ)){let e=t.connectors.find(e=>e.id===eJ);if(!e)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let r=await e.getProvider(),n=r.signer?.session?.namespaces,i=n?.[e6]?.methods,o=n?.[e6]?.chains;return{supportsAllNetworks:i?.includes("wallet_addEthereumChain"),approvedCaipNetworkIds:o}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},connectionControllerClient:s,defaultChain:function(e){if(e)return{id:`${e6}:${e.id}`,name:e.name,imageId:e8[e.id]}}(n),tokens:function(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,r])=>{t[`${e6}:${e}`]=r}),t}(i),_sdkVersion:o??`html-wagmi-${e4}`,...a}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(r),this.syncConnectors(t),this.listenConnectors(t),(0,_.uH)(()=>this.syncAccount()),(0,_.QC)(()=>this.syncNetwork())}getState(){let e=super.getState();return{...e,selectedNetworkId:tr(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:tr(t.selectedNetworkId)}))}syncRequestedNetworks(e){let t=e?.map(e=>({id:`${e6}:${e.id}`,name:e.name,imageId:e8[e.id],imageUrl:this.options?.chainImages?.[e.id]}));this.setRequestedCaipNetworks(t??[])}async syncAccount(){let{address:e,isConnected:t}=(0,_.D0)(),{chain:r}=(0,_.Hy)();if(this.resetAccount(),t&&e&&r){let n=`${e6}:${r.id}:${e}`;this.setIsConnected(t),this.setCaipAddress(n),await Promise.all([this.syncProfile(e),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){let{address:e,isConnected:t}=(0,_.D0)(),{chain:r}=(0,_.Hy)();if(r){let n=String(r.id),i=`${e6}:${n}`;if(this.setCaipNetwork({id:i,name:r.name,imageId:e8[r.id],imageUrl:this.options?.chainImages?.[r.id]}),t&&e){let t=`${e6}:${r.id}:${e}`;if(this.setCaipAddress(t),r.blockExplorers?.default?.url){let t=`${r.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(t)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(e,r)}}}async syncProfile(e){try{let{name:t,avatar:r}=await this.fetchIdentity({caipChainId:`${e6}:${D.R.id}`,address:e});this.setProfileName(t),this.setProfileImage(r)}catch{let t=await (0,_.Lk)({address:e,chainId:D.R.id});if(t){this.setProfileName(t);let e=await (0,_.w6)({name:t,chainId:D.R.id});e&&this.setProfileImage(e)}}}async syncBalance(e,t){let r=await (0,_.EG)({address:e,chainId:t.id,token:this.options?.tokens?.[t.id]?.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(e){let t=[];e.connectors.forEach(({id:e,name:r})=>{e!==e3&&t.push({id:e,explorerId:e9[e],imageId:e7[e],imageUrl:this.options?.connectorImages?.[e],name:te[e]??r,type:tt[e]??"EXTERNAL"})}),this.setConnectors(t)}listenConnectors(e){let t=e.connectors.find(e=>e.id===e3);"undefined"!=typeof window&&t&&(window.addEventListener("eip6963:announceProvider",e=>{if(e.detail){let{info:r,provider:n}=e.detail;this.addConnector({id:e3,type:"ANNOUNCED",imageUrl:r.icon??this.options?.connectorImages?.[e3],name:r.name,provider:n,info:r}),t.isAuthorized({info:r,provider:n})}}),window.dispatchEvent(new Event("eip6963:requestProvider")))}}var ti=r(74278),to=function(e,t,r,n,i){if("m"===n)throw TypeError("Private method is not writable");if("a"===n&&!i)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(e,r):i?i.value=r:t.set(e,r),r},ta=function(e,t,r,n){if("a"===r&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)};let ts="connectedRdns";class tl extends ti._{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",i.set(this,void 0),o.set(this,void 0),to(this,i,this.options.getProvider(),"f")}async connect(e){let t=await super.connect(e);return ta(this,o,"f")&&this.storage?.setItem(ts,ta(this,o,"f").info.rdns),t}async disconnect(){await super.disconnect(),this.storage?.removeItem(ts),to(this,o,void 0,"f")}async isAuthorized(e){let t=this.storage?.getItem(ts);if(t){if(!e||t!==e.info.rdns)return!0;to(this,o,e,"f")}return super.isAuthorized()}async getProvider(){return Promise.resolve(ta(this,o,"f")?.provider??ta(this,i,"f"))}setEip6963Wallet(e){to(this,o,e,"f")}}i=new WeakMap,o=new WeakMap;var tc=r(38722);"undefined"==typeof window||(window.Buffer||(window.Buffer=tc.lW),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var tu=r(57421),td=r(57858),th=r(53516),tf=r(75276),tp=r(45775),tg=r(39028),tb=r(21032),tw=r(3980),tm=r(92106),ty=class extends tf.wR{constructor({chains:e,options:t}){super({chains:e,options:{reloadOnDisconnect:!1,...t}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,(0,tf.Ko)(this,a,void 0),(0,tf.Ko)(this,s,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,tp.K)(e[0])})},this.onChainChanged=e=>{let t=(0,th.J)(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:e}={}){try{let t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});let r=await t.enable(),n=(0,tp.K)(r[0]),i=await this.getChainId(),o=this.isChainUnsupported(i);if(e&&i!==e){let t=await this.switchChain(e);i=t.id,o=this.isChainUnsupported(i)}return{account:n,chain:{id:i,unsupported:o}}}catch(e){if(/(user closed modal|accounts received is empty)/i.test(e.message))throw new tg.ab(e);throw e}}async disconnect(){if(!(0,tf.ac)(this,s))return;let e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){let e=await this.getProvider(),t=await e.request({method:"eth_accounts"});return(0,tp.K)(t[0])}async getChainId(){let e=await this.getProvider(),t=(0,th.J)(e.chainId);return t}async getProvider(){if(!(0,tf.ac)(this,s)){let e=(await Promise.all([r.e(811),r.e(439)]).then(r.t.bind(r,45811,19))).default;"function"!=typeof e&&"function"==typeof e.default&&(e=e.default),(0,tf.qx)(this,a,new e(this.options));let t=tf.ac(this,a).walletExtension?.getChainId(),n=this.chains.find(e=>this.options.chainId?e.id===this.options.chainId:e.id===t)||this.chains[0],i=this.options.chainId||n?.id,o=this.options.jsonRpcUrl||n?.rpcUrls.default.http[0];(0,tf.qx)(this,s,(0,tf.ac)(this,a).makeWeb3Provider(o,i))}return(0,tf.ac)(this,s)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,tb.K)({account:r,chain:n,transport:(0,tw.P)(t)})}async isAuthorized(){try{let e=await this.getAccount();return!!e}catch{return!1}}async switchChain(e){let t=await this.getProvider(),r=(0,tm.eC)(e);try{return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),this.chains.find(t=>t.id===e)??{id:e,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(i){let n=this.chains.find(t=>t.id===e);if(!n)throw new td.B({chainId:e,connectorId:this.id});if(4902===i.code)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:n.name,nativeCurrency:n.nativeCurrency,rpcUrls:[n.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(n)}]}),n}catch(e){throw new tg.ab(e)}throw new tg.x3(i)}}async watchAsset({address:e,decimals:t=18,image:r,symbol:n}){let i=await this.getProvider();return i.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:r,symbol:n}}})}};a=new WeakMap,s=new WeakMap;var tv=r(5015),tx="eip155",tC="requestedChains",tE="wallet_addEthereumChain",tk=class extends tf.wR{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),(0,tf.Ko)(this,u),(0,tf.Ko)(this,h),(0,tf.Ko)(this,p),(0,tf.Ko)(this,b),(0,tf.Ko)(this,m),(0,tf.Ko)(this,v),(0,tf.Ko)(this,C),(0,tf.Ko)(this,k),(0,tf.Ko)(this,A),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,(0,tf.Ko)(this,l,void 0),(0,tf.Ko)(this,c,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,tp.K)(e[0])})},this.onChainChanged=e=>{let t=Number(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{(0,tf.U9)(this,v,x).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},(0,tf.U9)(this,u,d).call(this)}async connect({chainId:e,pairingTopic:t}={}){try{let r=e;if(!r){let e=this.storage?.getItem("store"),t=e?.state?.data?.chain?.id;r=t&&!this.isChainUnsupported(t)?t:this.chains[0]?.id}if(!r)throw Error("No chains found on connector.");let n=await this.getProvider();(0,tf.U9)(this,b,w).call(this);let i=(0,tf.U9)(this,p,g).call(this);if(n.session&&i&&await n.disconnect(),!n.session||i){let e=this.chains.filter(e=>e.id!==r).map(e=>e.id);this.emit("message",{type:"connecting"}),await n.connect({pairingTopic:t,chains:[r],optionalChains:e.length?e:void 0}),(0,tf.U9)(this,v,x).call(this,this.chains.map(({id:e})=>e))}let o=await n.enable(),a=(0,tp.K)(o[0]),s=await this.getChainId(),l=this.isChainUnsupported(s);return{account:a,chain:{id:s,unsupported:l}}}catch(e){if(/user rejected/i.test(e?.message))throw new tg.ab(e);throw e}}async disconnect(){let e=await this.getProvider();try{await e.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{(0,tf.U9)(this,m,y).call(this),(0,tf.U9)(this,v,x).call(this,[])}}async getAccount(){let{accounts:e}=await this.getProvider();return(0,tp.K)(e[0])}async getChainId(){let{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return(0,tf.ac)(this,l)||await (0,tf.U9)(this,u,d).call(this),e&&await this.switchChain(e),(0,tf.ac)(this,l)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),n=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,tb.K)({account:r,chain:n,transport:(0,tw.P)(t)})}async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),r=(0,tf.U9)(this,p,g).call(this);if(!e)return!1;if(r&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){let t=this.chains.find(t=>t.id===e);if(!t)throw new tg.x3(Error("chain not found on connector."));try{let r=await this.getProvider(),n=(0,tf.U9)(this,k,S).call(this),i=(0,tf.U9)(this,A,$).call(this),o=n.includes(e);if(!o&&i.includes(tE)){await r.request({method:tE,params:[{chainId:(0,tm.eC)(t.id),blockExplorerUrls:[t.blockExplorers?.default?.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});let n=(0,tf.U9)(this,C,E).call(this);n.push(e),(0,tf.U9)(this,v,x).call(this,n)}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,tm.eC)(e)}]}),t}catch(t){let e="string"==typeof t?t:t?.message;if(/user rejected request/i.test(e))throw new tg.ab(t);throw new tg.x3(t)}}};l=new WeakMap,c=new WeakMap,u=new WeakSet,d=async function(){return(0,tf.ac)(this,c)||"undefined"==typeof window||(0,tf.qx)(this,c,(0,tf.U9)(this,h,f).call(this)),(0,tf.ac)(this,c)},h=new WeakSet,f=async function(){let{EthereumProvider:e,OPTIONAL_EVENTS:t,OPTIONAL_METHODS:n}=await r.e(882).then(r.bind(r,20882)),[i,...o]=this.chains.map(({id:e})=>e);if(i){let{projectId:r,showQrModal:a=!0,qrModalOptions:s,metadata:c,relayUrl:u}=this.options;(0,tf.qx)(this,l,await e.init({showQrModal:a,qrModalOptions:s,projectId:r,optionalMethods:n,optionalEvents:t,chains:[i],optionalChains:o.length?o:void 0,rpcMap:Object.fromEntries(this.chains.map(e=>[e.id,e.rpcUrls.default.http[0]])),metadata:c,relayUrl:u}))}},p=new WeakSet,g=function(){let e=(0,tf.U9)(this,A,$).call(this);if(e.includes(tE)||!this.options.isNewChainsStale)return!1;let t=(0,tf.U9)(this,C,E).call(this),r=this.chains.map(({id:e})=>e),n=(0,tf.U9)(this,k,S).call(this);return(!n.length||!!n.some(e=>r.includes(e)))&&!r.every(e=>t.includes(e))},b=new WeakSet,w=function(){(0,tf.ac)(this,l)&&((0,tf.U9)(this,m,y).call(this),(0,tf.ac)(this,l).on("accountsChanged",this.onAccountsChanged),(0,tf.ac)(this,l).on("chainChanged",this.onChainChanged),(0,tf.ac)(this,l).on("disconnect",this.onDisconnect),(0,tf.ac)(this,l).on("session_delete",this.onDisconnect),(0,tf.ac)(this,l).on("display_uri",this.onDisplayUri),(0,tf.ac)(this,l).on("connect",this.onConnect))},m=new WeakSet,y=function(){(0,tf.ac)(this,l)&&((0,tf.ac)(this,l).removeListener("accountsChanged",this.onAccountsChanged),(0,tf.ac)(this,l).removeListener("chainChanged",this.onChainChanged),(0,tf.ac)(this,l).removeListener("disconnect",this.onDisconnect),(0,tf.ac)(this,l).removeListener("session_delete",this.onDisconnect),(0,tf.ac)(this,l).removeListener("display_uri",this.onDisplayUri),(0,tf.ac)(this,l).removeListener("connect",this.onConnect))},v=new WeakSet,x=function(e){this.storage?.setItem(tC,e)},C=new WeakSet,E=function(){return this.storage?.getItem(tC)??[]},k=new WeakSet,S=function(){if(!(0,tf.ac)(this,l))return[];let e=tf.ac(this,l).session?.namespaces;if(!e)return[];let t=(0,tv.fK)(e),r=t[tx]?.chains?.map(e=>parseInt(e.split(":")[1]||""));return r??[]},A=new WeakSet,$=function(){if(!(0,tf.ac)(this,l))return[];let e=tf.ac(this,l).session?.namespaces;if(!e)return[];let t=(0,tv.fK)(e),r=t[tx]?.methods;return r??[]};let tS=O.j1.getBlockchainApiUrl();function tA({projectId:e,chains:t,metadata:r}){let{publicClient:n}=(0,_.QB)(t,[function({projectId:e}){return function(t){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(t.id))return null;let r=`${tS}/v1/?chainId=${e6}:${t.id}&projectId=${e}`;return{chain:{...t,rpcUrls:{...t.rpcUrls,default:{http:[r]}}},rpcUrls:{http:[r]}}}}({projectId:e}),function(e){return e.rpcUrls.public.http[0]?{chain:e,rpcUrls:e.rpcUrls.public}:null}]);return(0,tu._g)({autoConnect:!0,connectors:[new tk({chains:t,options:{projectId:e,showQrModal:!1,metadata:r}}),new tl({chains:t}),new ti._({chains:t,options:{shimDisconnect:!0}}),new ty({chains:t,options:{appName:r?.name??"Unknown"}})],publicClient:n})}function t$(e){return n||(n=new tn({...e,_sdkVersion:`react-wagmi-${e4}`})),n}function tP(){if(!n)throw Error('Please call "createWeb3Modal" before using "useWeb3ModalTheme" hook');let[e,t]=(0,P.useState)(n.getThemeMode()),[r,i]=(0,P.useState)(n.getThemeVariables());return(0,P.useEffect)(()=>{let e=n?.subscribeTheme(e=>{t(e.themeMode),i(e.themeVariables)});return()=>{e?.()}},[]),{themeMode:e,themeVariables:r,setThemeMode:function(e){n?.setThemeMode(e)},setThemeVariables:function(e){n?.setThemeVariables(e)}}}function t_(){if(!n)throw Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');async function e(e){await n?.open(e)}async function t(){await n?.close()}return{open:e,close:t}}},53160:function(e,t,r){"use strict";r.d(t,{E:function(){return i}});var n=r(16867);function i(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?(0,n.P)(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}},20605:function(e,t,r){"use strict";r.d(t,{z:function(){return o}});var n=r(53160),i=r(16867);function o(e,t){t||(t=e.reduce((e,t)=>e+t.length,0));let r=(0,n.E)(t),o=0;for(let t of e)r.set(t,o),o+=t.length;return(0,i.P)(r)}},52217:function(e,t,r){"use strict";r.d(t,{m:function(){return o}});var n=r(73149),i=r(16867);function o(e,t="utf8"){let r=n.Z[t];if(!r)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?(0,i.P)(globalThis.Buffer.from(e,"utf-8")):r.decoder.decode(`${r.prefix}${e}`)}},37466:function(e,t,r){"use strict";r.d(t,{BB:function(){return o.B},mL:function(){return i.m},zo:function(){return n.z}});var n=r(20605),i=r(52217),o=r(92263)},92263:function(e,t,r){"use strict";r.d(t,{B:function(){return i}});var n=r(73149);function i(e,t="utf8"){let r=n.Z[t];if(!r)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8"):r.encoder.encode(e).substring(1)}},16867:function(e,t,r){"use strict";function n(e){return null!=globalThis.Buffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}r.d(t,{P:function(){return n}})},73149:function(e,t,r){"use strict";r.d(t,{Z:function(){return eG}});var n={};r.r(n),r.d(n,{identity:function(){return O}});var i={};r.r(i),r.d(i,{base2:function(){return I}});var o={};r.r(o),r.d(o,{base8:function(){return T}});var a={};r.r(a),r.d(a,{base10:function(){return R}});var s={};r.r(s),r.d(s,{base16:function(){return N},base16upper:function(){return j}});var l={};r.r(l),r.d(l,{base32:function(){return M},base32hex:function(){return z},base32hexpad:function(){return W},base32hexpadupper:function(){return H},base32hexupper:function(){return F},base32pad:function(){return U},base32padupper:function(){return L},base32upper:function(){return B},base32z:function(){return q}});var c={};r.r(c),r.d(c,{base36:function(){return G},base36upper:function(){return Z}});var u={};r.r(u),r.d(u,{base58btc:function(){return V},base58flickr:function(){return K}});var d={};r.r(d),r.d(d,{base64:function(){return Q},base64pad:function(){return Y},base64url:function(){return X},base64urlpad:function(){return J}});var h={};r.r(h),r.d(h,{base256emoji:function(){return en}});var f={};r.r(f),r.d(f,{sha256:function(){return ep},sha512:function(){return eg}});var p={};r.r(p),r.d(p,{identity:function(){return ew}});var g={};r.r(g),r.d(g,{code:function(){return ey},decode:function(){return ex},encode:function(){return ev},name:function(){return em}});var b={};r.r(b),r.d(b,{code:function(){return eS},decode:function(){return e$},encode:function(){return eA},name:function(){return ek}});var w=function(e,t){if(e.length>=255)throw TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var i=0;i<e.length;i++){var o=e.charAt(i),a=o.charCodeAt(0);if(255!==r[a])throw TypeError(o+" is ambiguous");r[a]=i}var s=e.length,l=e.charAt(0),c=Math.log(s)/Math.log(256),u=Math.log(256)/Math.log(s);function d(e){if("string"!=typeof e)throw TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[0]){for(var n=0,i=0;e[t]===l;)n++,t++;for(var o=(e.length-t)*c+1>>>0,a=new Uint8Array(o);e[t];){var u=r[e.charCodeAt(t)];if(255===u)return;for(var d=0,h=o-1;(0!==u||d<i)&&-1!==h;h--,d++)u+=s*a[h]>>>0,a[h]=u%256>>>0,u=u/256>>>0;if(0!==u)throw Error("Non-zero carry");i=d,t++}if(" "!==e[t]){for(var f=o-i;f!==o&&0===a[f];)f++;for(var p=new Uint8Array(n+(o-f)),g=n;f!==o;)p[g++]=a[f++];return p}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===t.length)return"";for(var r=0,n=0,i=0,o=t.length;i!==o&&0===t[i];)i++,r++;for(var a=(o-i)*u+1>>>0,c=new Uint8Array(a);i!==o;){for(var d=t[i],h=0,f=a-1;(0!==d||h<n)&&-1!==f;f--,h++)d+=256*c[f]>>>0,c[f]=d%s>>>0,d=d/s>>>0;if(0!==d)throw Error("Non-zero carry");n=h,i++}for(var p=a-n;p!==a&&0===c[p];)p++;for(var g=l.repeat(r);p<a;++p)g+=e.charAt(c[p]);return g},decodeUnsafe:d,decode:function(e){var r=d(e);if(r)return r;throw Error(`Non-${t} character`)}}};new Uint8Array(0);let m=e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw Error("Unknown type, must be binary type")},y=e=>new TextEncoder().encode(e),v=e=>new TextDecoder().decode(e);class x{constructor(e,t,r){this.name=e,this.prefix=t,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class C{constructor(e,t,r){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=r}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return k(this,e)}}class E{constructor(e){this.decoders=e}or(e){return k(this,e)}decode(e){let t=e[0],r=this.decoders[t];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}let k=(e,t)=>new E({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class S{constructor(e,t,r,n){this.name=e,this.prefix=t,this.baseEncode=r,this.baseDecode=n,this.encoder=new x(e,t,r),this.decoder=new C(e,t,n)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}let A=({name:e,prefix:t,encode:r,decode:n})=>new S(e,t,r,n),$=({prefix:e,name:t,alphabet:r})=>{let{encode:n,decode:i}=w(r,t);return A({prefix:e,name:t,encode:n,decode:e=>m(i(e))})},P=(e,t,r,n)=>{let i={};for(let e=0;e<t.length;++e)i[t[e]]=e;let o=e.length;for(;"="===e[o-1];)--o;let a=new Uint8Array(o*r/8|0),s=0,l=0,c=0;for(let t=0;t<o;++t){let o=i[e[t]];if(void 0===o)throw SyntaxError(`Non-${n} character`);l=l<<r|o,(s+=r)>=8&&(s-=8,a[c++]=255&l>>s)}if(s>=r||255&l<<8-s)throw SyntaxError("Unexpected end of data");return a},_=(e,t,r)=>{let n="="===t[t.length-1],i=(1<<r)-1,o="",a=0,s=0;for(let n=0;n<e.length;++n)for(s=s<<8|e[n],a+=8;a>r;)a-=r,o+=t[i&s>>a];if(a&&(o+=t[i&s<<r-a]),n)for(;o.length*r&7;)o+="=";return o},D=({name:e,prefix:t,bitsPerChar:r,alphabet:n})=>A({prefix:t,name:e,encode:e=>_(e,n,r),decode:t=>P(t,n,r,e)}),O=A({prefix:"\x00",name:"identity",encode:e=>v(e),decode:e=>y(e)}),I=D({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),T=D({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),R=$({prefix:"9",name:"base10",alphabet:"0123456789"}),N=D({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),j=D({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),M=D({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),B=D({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),U=D({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),L=D({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),z=D({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),F=D({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),W=D({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),H=D({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),q=D({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),G=$({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),Z=$({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),V=$({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),K=$({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),Q=D({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),Y=D({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),X=D({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),J=D({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),ee=Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),et=ee.reduce((e,t,r)=>(e[r]=t,e),[]),er=ee.reduce((e,t,r)=>(e[t.codePointAt(0)]=r,e),[]),en=A({prefix:"\uD83D\uDE80",name:"base256emoji",encode:function(e){return e.reduce((e,t)=>e+=et[t],"")},decode:function(e){let t=[];for(let r of e){let e=er[r.codePointAt(0)];if(void 0===e)throw Error(`Non-base256emoji character: ${r}`);t.push(e)}return new Uint8Array(t)}});function ei(e,t,r){t=t||[];for(var n=r=r||0;e>=2147483648;)t[r++]=255&e|128,e/=128;for(;-128&e;)t[r++]=255&e|128,e>>>=7;return t[r]=0|e,ei.bytes=r-n+1,t}function eo(e,t){var r,n=0,t=t||0,i=0,o=t,a=e.length;do{if(o>=a)throw eo.bytes=0,RangeError("Could not decode varint");r=e[o++],n+=i<28?(127&r)<<i:(127&r)*Math.pow(2,i),i+=7}while(r>=128);return eo.bytes=o-t,n}var ea={encode:ei,decode:eo,encodingLength:function(e){return e<128?1:e<16384?2:e<2097152?3:e<268435456?4:e<34359738368?5:e<4398046511104?6:e<562949953421312?7:e<72057594037927940?8:e<0x7fffffffffffffff?9:10}};let es=(e,t,r=0)=>(ea.encode(e,t,r),t),el=e=>ea.encodingLength(e),ec=(e,t)=>{let r=t.byteLength,n=el(e),i=n+el(r),o=new Uint8Array(i+r);return es(e,o,0),es(r,o,n),o.set(t,i),new eu(e,r,t,o)};class eu{constructor(e,t,r,n){this.code=e,this.size=t,this.digest=r,this.bytes=n}}let ed=({name:e,code:t,encode:r})=>new eh(e,t,r);class eh{constructor(e,t,r){this.name=e,this.code=t,this.encode=r}digest(e){if(e instanceof Uint8Array){let t=this.encode(e);return t instanceof Uint8Array?ec(this.code,t):t.then(e=>ec(this.code,e))}throw Error("Unknown type, must be binary type")}}let ef=e=>async t=>new Uint8Array(await crypto.subtle.digest(e,t)),ep=ed({name:"sha2-256",code:18,encode:ef("SHA-256")}),eg=ed({name:"sha2-512",code:19,encode:ef("SHA-512")}),eb=e=>ec(0,m(e)),ew={code:0,name:"identity",encode:m,digest:eb},em="raw",ey=85,ev=e=>m(e),ex=e=>m(e),eC=new TextEncoder,eE=new TextDecoder,ek="json",eS=512,eA=e=>eC.encode(JSON.stringify(e)),e$=e=>JSON.parse(eE.decode(e));class eP{constructor(e,t,r,n){this.code=t,this.version=e,this.multihash=r,this.bytes=n,this.byteOffset=n.byteOffset,this.byteLength=n.byteLength,this.asCID=this,this._baseCache=new Map,Object.defineProperties(this,{byteOffset:eM,byteLength:eM,code:ej,version:ej,multihash:ej,bytes:ej,_baseCache:eM,asCID:eM})}toV0(){if(0===this.version)return this;{let{code:e,multihash:t}=this;if(e!==eI)throw Error("Cannot convert a non dag-pb CID to CIDv0");if(t.code!==eT)throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");return eP.createV0(t)}}toV1(){switch(this.version){case 0:{let{code:e,digest:t}=this.multihash,r=Digest.create(e,t);return eP.createV1(this.code,r)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}equals(e){return e&&this.code===e.code&&this.version===e.version&&Digest.equals(this.multihash,e.multihash)}toString(e){let{bytes:t,version:r,_baseCache:n}=this;return 0===r?eD(t,n,e||base58btc.encoder):eO(t,n,e||base32.encoder)}toJSON(){return{code:this.code,version:this.version,hash:this.multihash.bytes}}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}static isCID(e){return eB(/^0\.0/,eU),!!(e&&(e[eN]||e.asCID===e))}get toBaseEncodedString(){throw Error("Deprecated, use .toString()")}get codec(){throw Error('"codec" property is deprecated, use integer "code" property instead')}get buffer(){throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")}get multibaseName(){throw Error('"multibaseName" property is deprecated')}get prefix(){throw Error('"prefix" property is deprecated')}static asCID(e){if(e instanceof eP)return e;if(null!=e&&e.asCID===e){let{version:t,code:r,multihash:n,bytes:i}=e;return new eP(t,r,n,i||eR(t,r,n.bytes))}if(null==e||!0!==e[eN])return null;{let{version:t,multihash:r,code:n}=e,i=Digest.decode(r);return eP.create(t,n,i)}}static create(e,t,r){if("number"!=typeof t)throw Error("String codecs are no longer supported");switch(e){case 0:if(t===eI)return new eP(e,t,r,r.bytes);throw Error(`Version 0 CID must use dag-pb (code: ${eI}) block encoding`);case 1:{let n=eR(e,t,r.bytes);return new eP(e,t,r,n)}default:throw Error("Invalid version")}}static createV0(e){return eP.create(0,eI,e)}static createV1(e,t){return eP.create(1,e,t)}static decode(e){let[t,r]=eP.decodeFirst(e);if(r.length)throw Error("Incorrect length");return t}static decodeFirst(e){let t=eP.inspectBytes(e),r=t.size-t.multihashSize,n=coerce(e.subarray(r,r+t.multihashSize));if(n.byteLength!==t.multihashSize)throw Error("Incorrect length");let i=n.subarray(t.multihashSize-t.digestSize),o=new Digest.Digest(t.multihashCode,t.digestSize,i,n),a=0===t.version?eP.createV0(o):eP.createV1(t.codec,o);return[a,e.subarray(t.size)]}static inspectBytes(e){let t=0,r=()=>{let[r,n]=varint.decode(e.subarray(t));return t+=n,r},n=r(),i=eI;if(18===n?(n=0,t=0):1===n&&(i=r()),0!==n&&1!==n)throw RangeError(`Invalid CID version ${n}`);let o=t,a=r(),s=r(),l=t+s;return{version:n,codec:i,multihashCode:a,digestSize:s,multihashSize:l-o,size:l}}static parse(e,t){let[r,n]=e_(e,t),i=eP.decode(n);return i._baseCache.set(r,e),i}}let e_=(e,t)=>{switch(e[0]){case"Q":{let r=t||base58btc;return[base58btc.prefix,r.decode(`${base58btc.prefix}${e}`)]}case base58btc.prefix:{let r=t||base58btc;return[base58btc.prefix,r.decode(e)]}case base32.prefix:{let r=t||base32;return[base32.prefix,r.decode(e)]}default:if(null==t)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[e[0],t.decode(e)]}},eD=(e,t,r)=>{let{prefix:n}=r;if(n!==base58btc.prefix)throw Error(`Cannot string encode V0 in ${r.name} encoding`);let i=t.get(n);if(null!=i)return i;{let i=r.encode(e).slice(1);return t.set(n,i),i}},eO=(e,t,r)=>{let{prefix:n}=r,i=t.get(n);if(null!=i)return i;{let i=r.encode(e);return t.set(n,i),i}},eI=112,eT=18,eR=(e,t,r)=>{let n=varint.encodingLength(e),i=n+varint.encodingLength(t),o=new Uint8Array(i+r.byteLength);return varint.encodeTo(e,o,0),varint.encodeTo(t,o,n),o.set(r,i),o},eN=Symbol.for("@ipld/js-cid/CID"),ej={writable:!1,configurable:!1,enumerable:!0},eM={writable:!1,enumerable:!1,configurable:!1},eB=(e,t)=>{if(e.test("0.0.0-dev"))console.warn(t);else throw Error(t)},eU=null,eL={...n,...i,...o,...a,...s,...l,...c,...u,...d,...h};({...f,...p});var ez=r(53160);function eF(e,t,r,n){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:r},decoder:{decode:n}}}let eW=eF("utf8","u",e=>{let t=new TextDecoder("utf8");return"u"+t.decode(e)},e=>{let t=new TextEncoder;return t.encode(e.substring(1))}),eH=eF("ascii","a",e=>{let t="a";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},e=>{e=e.substring(1);let t=(0,ez.E)(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}),eq={utf8:eW,"utf-8":eW,hex:eL.base16,latin1:eH,ascii:eH,binary:eH,...eL};var eG=eq},17832:function(e,t,r){"use strict";r.d(t,{sj:function(){return x},iH:function(){return k},CO:function(){return E},Ld:function(){return C}});let n=Symbol(),i=Symbol(),o=(e,t)=>new Proxy(e,t),a=Object.getPrototypeOf,s=new WeakMap,l=e=>e&&(s.has(e)?s.get(e):a(e)===Object.prototype||a(e)===Array.prototype),c=e=>"object"==typeof e&&null!==e,u=e=>{if(Array.isArray(e))return Array.from(e);let t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(e=>{e.configurable=!0}),Object.create(a(e),t)},d=e=>e[i]||e,h=(e,t,r,a)=>{if(!l(e))return e;let s=a&&a.get(e);if(!s){let t=d(e);s=Object.values(Object.getOwnPropertyDescriptors(t)).some(e=>!e.configurable&&!e.writable)?[t,u(t)]:[t],null==a||a.set(e,s)}let[c,f]=s,p=r&&r.get(c);return p&&!!f===p[1].f||((p=((e,t)=>{let r={f:t},o=!1,a=(t,n)=>{if(!o){let i=r.a.get(e);if(i||(i={},r.a.set(e,i)),"w"===t)i.w=!0;else{let e=i[t];e||(e=new Set,i[t]=e),e.add(n)}}},s={get:(t,n)=>n===i?e:(a("k",n),h(Reflect.get(t,n),r.a,r.c,r.t)),has:(t,i)=>i===n?(o=!0,r.a.delete(e),!0):(a("h",i),Reflect.has(t,i)),getOwnPropertyDescriptor:(e,t)=>(a("o",t),Reflect.getOwnPropertyDescriptor(e,t)),ownKeys:e=>(a("w"),Reflect.ownKeys(e))};return t&&(s.set=s.deleteProperty=()=>!1),[s,r]})(c,!!f))[1].p=o(f||c,p[0]),r&&r.set(c,p)),p[1].a=t,p[1].c=r,p[1].t=a,p[1].p},f=(e,t,r,n)=>{if(Object.is(e,t))return!1;if(!c(e)||!c(t))return!0;let i=r.get(d(e));if(!i)return!0;if(n){let r=n.get(e);if(r&&r.n===t)return r.g;n.set(e,{n:t,g:!1})}let o=null;try{for(let r of i.h||[])if(o=Reflect.has(e,r)!==Reflect.has(t,r))return o;if(!0===i.w){if(o=((e,t)=>{let r=Reflect.ownKeys(e),n=Reflect.ownKeys(t);return r.length!==n.length||r.some((e,t)=>e!==n[t])})(e,t))return o}else for(let r of i.o||[])if(o=!!Reflect.getOwnPropertyDescriptor(e,r)!=!!Reflect.getOwnPropertyDescriptor(t,r))return o;for(let a of i.k||[])if(o=f(e[a],t[a],r,n))return o;return null===o&&(o=!0),o}finally{n&&n.set(e,{n:t,g:o})}},p=e=>l(e)&&e[i]||null,g=(e,t=!0)=>{s.set(e,t)},b=e=>"object"==typeof e&&null!==e,w=new WeakMap,m=new WeakSet,y=(e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>b(e)&&!m.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),n=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},i=new WeakMap,o=(e,t,r=n)=>{let a=i.get(e);if((null==a?void 0:a[0])===t)return a[1];let s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return g(s,!0),i.set(e,[t,s]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(s,t))return;let n=Reflect.get(e,t),i={value:n,enumerable:!0,configurable:!0};if(m.has(n))g(n,!1);else if(n instanceof Promise)delete i.value,i.get=()=>r(n);else if(w.has(n)){let[e,t]=w.get(n);i.value=o(e,t(),r)}Object.defineProperty(s,t,i)}),Object.preventExtensions(s)},a=new WeakMap,s=[1,1],l=n=>{if(!b(n))throw Error("object required");let i=a.get(n);if(i)return i;let c=s[0],u=new Set,d=(e,t=++s[0])=>{c!==t&&(c=t,u.forEach(r=>r(e,t)))},h=s[1],f=(e=++s[1])=>(h===e||u.size||(h=e,y.forEach(([t])=>{let r=t[1](e);r>c&&(c=r)})),c),g=e=>(t,r)=>{let n=[...t];n[1]=[e,...n[1]],d(n,r)},y=new Map,v=(e,t)=>{if(y.has(e))throw Error("prop listener already exists");if(u.size){let r=t[3](g(e));y.set(e,[t,r])}else y.set(e,[t])},x=e=>{var t;let r=y.get(e);r&&(y.delete(e),null==(t=r[1])||t.call(r))},C=e=>{u.add(e),1===u.size&&y.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let n=e[3](g(r));y.set(r,[e,n])});let t=()=>{u.delete(e),0===u.size&&y.forEach(([e,t],r)=>{t&&(t(),y.set(r,[e]))})};return t},E=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),k=t(E,{deleteProperty(e,t){let r=Reflect.get(e,t);x(t);let n=Reflect.deleteProperty(e,t);return n&&d(["delete",[t],r]),n},set(t,n,i,o){let s=Reflect.has(t,n),c=Reflect.get(t,n,o);if(s&&(e(c,i)||a.has(i)&&e(c,a.get(i))))return!0;x(n),b(i)&&(i=p(i)||i);let u=i;if(i instanceof Promise)i.then(e=>{i.status="fulfilled",i.value=e,d(["resolve",[n],e])}).catch(e=>{i.status="rejected",i.reason=e,d(["reject",[n],e])});else{!w.has(i)&&r(i)&&(u=l(i));let e=!m.has(u)&&w.get(u);e&&v(n,e)}return Reflect.set(t,n,u,o),d(["set",[n],i,c]),!0}});return a.set(n,k),w.set(k,[E,f,o,C]),Reflect.ownKeys(n).forEach(e=>{let t=Object.getOwnPropertyDescriptor(n,e);"value"in t&&(k[e]=n[e],delete t.value,delete t.writable),Object.defineProperty(E,e,t)}),k})=>[l,w,m,e,t,r,n,i,o,a,s],[v]=y();function x(e={}){return v(e)}function C(e,t,r){let n;let i=w.get(e);i||console.warn("Please use proxy object");let o=[],a=i[3],s=!1,l=e=>{if(o.push(e),r){t(o.splice(0));return}n||(n=Promise.resolve().then(()=>{n=void 0,s&&t(o.splice(0))}))},c=a(l);return s=!0,()=>{s=!1,c()}}function E(e,t){let r=w.get(e);r||console.warn("Please use proxy object");let[n,i,o]=r;return o(n,i(),t)}function k(e){return m.add(e),e}},14503:function(e,t,r){"use strict";function n(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}r.d(t,{T:function(){return n}})},18011:function(e,t,r){"use strict";r.d(t,{O:function(){return f}});var n=r(16693),i=r(7210),o=r(77799),a=r(22676),s=r(61836),l=r(92106),c=r(74526),u=r(75719),d=r(72435),h=r(88819);async function f(e,{blockNumber:t,blockTag:r,coinType:f,name:p,universalResolverAddress:g}){let b=g;if(!b){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");b=(0,a.LI)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let a=(0,o.R)({abi:n.X$,functionName:"addr",...null!=f?{args:[(0,u.V)(p),BigInt(f)]}:{args:[(0,u.V)(p)]}}),c=await (0,h.L)(e,{address:b,abi:n.k3,functionName:"resolve",args:[(0,l.NC)((0,d.T)(p)),a],blockNumber:t,blockTag:r});if("0x"===c[0])return null;let g=(0,i.k)({abi:n.X$,args:null!=f?[(0,u.V)(p),BigInt(f)]:void 0,functionName:"addr",data:c[0]});if("0x"===g||"0x00"===(0,s.f)(g))return null;return g}catch(e){if((0,c.c)(e,"resolve"))return null;throw e}}},95270:function(e,t,r){"use strict";r.d(t,{r:function(){return E}});var n=r(88819),i=r(62027);class o extends i.G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class a extends i.G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class s extends i.G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class l extends i.G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}let c=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,u=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,d=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,h=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function f(e){try{let t=await fetch(e,{method:"HEAD"});if(200===t.status){let e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){if("object"==typeof t&&void 0!==t.response||!globalThis.hasOwnProperty("Image"))return!1;return new Promise(t=>{let r=new Image;r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},r.src=e})}}function p(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function g({uri:e,gatewayUrls:t}){let r=d.test(e);if(r)return{uri:e,isOnChain:!0,isEncoded:r};let n=p(t?.ipfs,"https://ipfs.io"),i=p(t?.arweave,"https://arweave.net"),o=e.match(c),{protocol:a,subpath:l,target:f,subtarget:g=""}=o?.groups||{},b="ipns:/"===a||"ipns/"===l,w="ipfs:/"===a||"ipfs/"===l||u.test(e);if(e.startsWith("http")&&!b&&!w){let r=e;return t?.arweave&&(r=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:r,isOnChain:!1,isEncoded:!1}}if((b||w)&&f)return{uri:`${n}/${b?"ipns":"ipfs"}/${f}${g}`,isOnChain:!1,isEncoded:!1};if("ar:/"===a&&f)return{uri:`${i}/${f}${g||""}`,isOnChain:!1,isEncoded:!1};let m=e.replace(h,"");if(m.startsWith("<svg")&&(m=`data:image/svg+xml;base64,${btoa(m)}`),m.startsWith("data:")||m.startsWith("{"))return{uri:m,isOnChain:!0,isEncoded:!1};throw new s({uri:e})}function b(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new o({data:e});return e.image||e.image_url||e.image_data}async function w({gatewayUrls:e,uri:t}){try{let r=await fetch(t).then(e=>e.json()),n=await m({gatewayUrls:e,uri:b(r)});return n}catch{throw new s({uri:t})}}async function m({gatewayUrls:e,uri:t}){let{uri:r,isOnChain:n}=g({uri:t,gatewayUrls:e});if(n)return r;let i=await f(r);if(i)return r;throw new s({uri:t})}async function y(e,{nft:t}){if("erc721"===t.namespace)return(0,n.L)(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return(0,n.L)(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new l({namespace:t.namespace})}async function v(e,{gatewayUrls:t,record:r}){return/eip155:/i.test(r)?x(e,{gatewayUrls:t,record:r}):m({uri:r,gatewayUrls:t})}async function x(e,{gatewayUrls:t,record:r}){let n=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[r,n,i]=t.split("/"),[o,s]=r.split(":"),[l,c]=n.split(":");if(!o||"eip155"!==o.toLowerCase())throw new a({reason:"Only EIP-155 supported"});if(!s)throw new a({reason:"Chain ID not found"});if(!c)throw new a({reason:"Contract address not found"});if(!i)throw new a({reason:"Token ID not found"});if(!l)throw new a({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:l.toLowerCase(),contractAddress:c,tokenID:i}}(r),i=await y(e,{nft:n}),{uri:o,isOnChain:s,isEncoded:l}=g({uri:i,gatewayUrls:t});if(s&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){let e=l?atob(o.replace("data:application/json;base64,","")):o,r=JSON.parse(e);return m({uri:b(r),gatewayUrls:t})}let c=n.tokenID;return"erc1155"===n.namespace&&(c=c.replace("0x","").padStart(64,"0")),w({gatewayUrls:t,uri:o.replace(/(?:0x)?{id}/,c)})}var C=r(16171);async function E(e,{blockNumber:t,blockTag:r,gatewayUrls:n,name:i,universalResolverAddress:o}){let a=await (0,C.g)(e,{blockNumber:t,blockTag:r,key:"avatar",name:i,universalResolverAddress:o});if(!a)return null;try{return await v(e,{record:a,gatewayUrls:n})}catch{return null}}},95602:function(e,t,r){"use strict";r.d(t,{w:function(){return c}});var n=r(16693),i=r(22676),o=r(92106),a=r(74526),s=r(72435),l=r(88819);async function c(e,{address:t,blockNumber:r,blockTag:c,universalResolverAddress:u}){let d=u;if(!d){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");d=(0,i.LI)({blockNumber:r,chain:e.chain,contract:"ensUniversalResolver"})}let h=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let t=await (0,l.L)(e,{address:d,abi:n.du,functionName:"reverse",args:[(0,o.NC)((0,s.T)(h))],blockNumber:r,blockTag:c});return t[0]}catch(e){if((0,a.c)(e,"reverse"))return null;throw e}}},15215:function(e,t,r){"use strict";r.d(t,{S:function(){return s}});var n=r(22676),i=r(92106),o=r(72435),a=r(88819);async function s(e,{blockNumber:t,blockTag:r,name:s,universalResolverAddress:l}){let c=l;if(!c){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");c=(0,n.LI)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}let[u]=await (0,a.L)(e,{address:c,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,i.NC)((0,o.T)(s))],blockNumber:t,blockTag:r});return u}},16171:function(e,t,r){"use strict";r.d(t,{g:function(){return h}});var n=r(16693),i=r(7210),o=r(77799),a=r(22676),s=r(92106),l=r(74526),c=r(75719),u=r(72435),d=r(88819);async function h(e,{blockNumber:t,blockTag:r,name:h,key:f,universalResolverAddress:p}){let g=p;if(!g){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");g=(0,a.LI)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let a=await (0,d.L)(e,{address:g,abi:n.k3,functionName:"resolve",args:[(0,s.NC)((0,u.T)(h)),(0,o.R)({abi:n.nZ,functionName:"text",args:[(0,c.V)(h),f]})],blockNumber:t,blockTag:r});if("0x"===a[0])return null;let l=(0,i.k)({abi:n.nZ,functionName:"text",data:a[0]});return""===l?null:l}catch(e){if((0,l.c)(e,"resolve"))return null;throw e}}},61376:function(e,t,r){"use strict";r.d(t,{R:function(){return m}});var n=r(14503),i=r(16693),o=r(62027),a=r(80377),s=r(97405),l=r(7210),c=r(77799),u=r(22676),d=r(92106),h=r(26445),f=r(87469),p=r(61163),g=r(74688),b=r(32357),w=r(47531);async function m(e,t){let{account:i=e.account,batch:l=Boolean(e.batch?.multicall),blockNumber:c,blockTag:u="latest",accessList:b,data:m,gas:v,gasPrice:x,maxFeePerGas:C,maxPriorityFeePerGas:E,nonce:k,to:S,value:A,...$}=t,P=i?(0,n.T)(i):void 0;try{(0,w.F)(t);let r=c?(0,d.eC)(c):void 0,n=r||u,i=e.chain?.formatters?.transactionRequest?.format||g.tG,o=i({...(0,p.K)($,{format:i}),from:P?.address,accessList:b,data:m,gas:v,gasPrice:x,maxFeePerGas:C,maxPriorityFeePerGas:E,nonce:k,to:S,value:A});if(l&&function({request:e}){let{data:t,to:r,...n}=e;return!(!t||t.startsWith("0x82ad56cb"))&&!!r&&!(Object.values(n).filter(e=>void 0!==e).length>0)}({request:o}))try{return await y(e,{...o,blockNumber:c,blockTag:u})}catch(e){if(!(e instanceof a.pZ)&&!(e instanceof a.mm))throw e}let s=await e.request({method:"eth_call",params:n?[o,n]:[o]});if("0x"===s)return{data:void 0};return{data:s}}catch(l){let n=function(e){if(!(e instanceof o.G))return;let t=e.walk();return"object"==typeof t.data?t.data.data:t.data}(l),{offchainLookup:i,offchainLookupSignature:a}=await r.e(422).then(r.bind(r,10422));if(n?.slice(0,10)===a&&S)return{data:await i(e,{data:n,to:S})};throw function(e,{docsPath:t,...r}){let n=(()=>{let t=(0,f.k)(e,r);return t instanceof h.cj?e:t})();return new s.cg(n,{docsPath:t,...r})}(l,{...t,account:P,chain:e.chain})}}async function y(e,t){let{batchSize:r=1024,wait:n=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:o,blockTag:h="latest",data:f,multicallAddress:p,to:g}=t,w=p;if(!w){if(!e.chain)throw new a.pZ;w=(0,u.LI)({blockNumber:o,chain:e.chain,contract:"multicall3"})}let m=o?(0,d.eC)(o):void 0,y=m||h,{schedule:v}=(0,b.S)({id:`${e.uid}.${y}`,wait:n,shouldSplitBatch(e){let t=e.reduce((e,{data:t})=>e+(t.length-2),0);return t>2*r},fn:async t=>{let r=t.map(e=>({allowFailure:!0,callData:e.data,target:e.to})),n=(0,c.R)({abi:i.F8,args:[r],functionName:"aggregate3"}),o=await e.request({method:"eth_call",params:[{data:n,to:w},y]});return(0,l.k)({abi:i.F8,args:[r],functionName:"aggregate3",data:o||"0x"})}}),[{returnData:x,success:C}]=await v({data:f,to:g});if(!C)throw new s.VQ({data:x});return"0x"===x?{data:void 0}:{data:x}}},43861:function(e,t,r){"use strict";r.d(t,{C:function(){return l},X:function(){return s}});var n=r(15371),i=r(79379),o=r(36765),a=r(24453);async function s(e,t){return l(e,t)}async function l(e,t){let{block:r,chain:s=e.chain,request:l,type:c="eip1559"}=t||{},u=await (async()=>"function"==typeof s?.fees?.baseFeeMultiplier?s.fees.baseFeeMultiplier({block:r,client:e,request:l}):s?.fees?.baseFeeMultiplier??1.2)();if(u<1)throw new n.Fz;let d=u.toString().split(".")[1]?.length??0,h=10**d,f=e=>e*BigInt(Math.ceil(u*h))/BigInt(h),p=r||await (0,o.Q)(e);if("function"==typeof s?.fees?.estimateFeesPerGas)return s.fees.estimateFeesPerGas({block:r,client:e,multiply:f,request:l,type:c});if("eip1559"===c){if("bigint"!=typeof p.baseFeePerGas)throw new n.e5;let t=l?.maxPriorityFeePerGas?l.maxPriorityFeePerGas:await (0,i.h)(e,{block:p,chain:s,request:l}),r=f(p.baseFeePerGas),o=l?.maxFeePerGas??r+t;return{maxFeePerGas:o,maxPriorityFeePerGas:t}}let g=l?.gasPrice??f(await (0,a.o)(e));return{gasPrice:g}}},81841:function(e,t,r){"use strict";r.d(t,{Q:function(){return w}});var n=r(14503),i=r(8998),o=r(92106),a=r(39625),s=r(15460),l=r(62027),c=r(33639);class u extends l.G{constructor(e,{account:t,docsPath:r,chain:n,data:i,gas:o,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:f,value:p}){let g=(0,c.xr)({from:t?.address,to:f,value:void 0!==p&&`${(0,a.d)(p)} ${n?.nativeCurrency.symbol||"ETH"}`,data:i,gas:o,gasPrice:void 0!==l&&`${(0,s.o)(l)} gwei`,maxFeePerGas:void 0!==u&&`${(0,s.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==d&&`${(0,s.o)(d)} gwei`,nonce:h});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}var d=r(26445),h=r(87469),f=r(61163),p=r(74688),g=r(47531),b=r(57331);async function w(e,t){let r=t.account??e.account;if(!r)throw new i.o({docsPath:"/docs/actions/public/estimateGas"});let a=(0,n.T)(r);try{let{accessList:r,blockNumber:n,blockTag:i,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:w,value:m,...y}="local"===a.type?await (0,b.Z)(e,t):t,v=n?(0,o.eC)(n):void 0,x=v||i;(0,g.F)(t);let C=e.chain?.formatters?.transactionRequest?.format||p.tG,E=C({...(0,f.K)(y,{format:C}),from:a.address,accessList:r,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:w,value:m}),k=await e.request({method:"eth_estimateGas",params:x?[E,x]:[E]});return BigInt(k)}catch(r){throw function(e,{docsPath:t,...r}){let n=(()=>{let t=(0,h.k)(e,r);return t instanceof d.cj?e:t})();return new u(n,{docsPath:t,...r})}(r,{...t,account:a,chain:e.chain})}}},79379:function(e,t,r){"use strict";r.d(t,{_:function(){return s},h:function(){return l}});var n=r(15371),i=r(95946),o=r(36765),a=r(24453);async function s(e,t){return l(e,t)}async function l(e,t){let{block:r,chain:s=e.chain,request:l}=t||{};if("function"==typeof s?.fees?.defaultPriorityFee){let t=r||await (0,o.Q)(e);return s.fees.defaultPriorityFee({block:t,client:e,request:l})}if(void 0!==s?.fees?.defaultPriorityFee)return s?.fees?.defaultPriorityFee;try{let t=await e.request({method:"eth_maxPriorityFeePerGas"});return(0,i.y_)(t)}catch{let[t,i]=await Promise.all([r?Promise.resolve(r):(0,o.Q)(e),(0,a.o)(e)]);if("bigint"!=typeof t.baseFeePerGas)throw new n.e5;let s=i-t.baseFeePerGas;if(s<0n)return 0n;return s}}},36765:function(e,t,r){"use strict";r.d(t,{Q:function(){return s}});var n=r(62027);class i extends n.G{constructor({blockHash:e,blockNumber:t}){let r="Block";e&&(r=`Block at hash "${e}"`),t&&(r=`Block at number "${t}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}var o=r(92106),a=r(43310);async function s(e,{blockHash:t,blockNumber:r,blockTag:n,includeTransactions:s}={}){let l=s??!1,c=void 0!==r?(0,o.eC)(r):void 0,u=null;if(!(u=t?await e.request({method:"eth_getBlockByHash",params:[t,l]}):await e.request({method:"eth_getBlockByNumber",params:[c||(n??"latest"),l]})))throw new i({blockHash:t,blockNumber:r});let d=e.chain?.formatters?.block?.format||a.Z;return d(u)}},79524:function(e,t,r){"use strict";r.d(t,{L:function(){return i}});var n=r(95946);async function i(e){let t=await e.request({method:"eth_chainId"});return(0,n.ly)(t)}},24453:function(e,t,r){"use strict";async function n(e){let t=await e.request({method:"eth_gasPrice"});return BigInt(t)}r.d(t,{o:function(){return n}})},86162:function(e,t,r){"use strict";r.d(t,{K:function(){return o}});var n=r(95946),i=r(92106);async function o(e,{address:t,blockTag:r="latest",blockNumber:o}){let a=await e.request({method:"eth_getTransactionCount",params:[t,o?(0,i.eC)(o):r]});return(0,n.ly)(a)}},88819:function(e,t,r){"use strict";r.d(t,{L:function(){return s}});var n=r(7210),i=r(77799),o=r(72365),a=r(61376);async function s(e,{abi:t,address:r,args:s,functionName:l,...c}){let u=(0,i.R)({abi:t,args:s,functionName:l});try{let{data:i}=await (0,a.R)(e,{data:u,to:r,...c});return(0,n.k)({abi:t,args:s,functionName:l,data:i||"0x"})}catch(e){throw(0,o.S)(e,{abi:t,address:r,args:s,docsPath:"/docs/contract/readContract",functionName:l})}}},57331:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(14503),i=r(43861),o=r(81841),a=r(36765),s=r(86162),l=r(8998),c=r(15371),u=r(47531),d=r(33639);async function h(e,t){let{account:r=e.account,chain:h,gas:f,nonce:p,type:g}=t;if(!r)throw new l.o;let b=(0,n.T)(r),w=await (0,a.Q)(e,{blockTag:"latest"}),m={...t,from:b.address};if(void 0===p&&(m.nonce=await (0,s.K)(e,{address:b.address,blockTag:"pending"})),void 0===g)try{m.type=function(e){if(e.type)return e.type;if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new d.j3({transaction:e})}(m)}catch{m.type="bigint"==typeof w.baseFeePerGas?"eip1559":"legacy"}if("eip1559"===m.type){let{maxFeePerGas:r,maxPriorityFeePerGas:n}=await (0,i.C)(e,{block:w,chain:h,request:m});if(void 0===t.maxPriorityFeePerGas&&t.maxFeePerGas&&t.maxFeePerGas<n)throw new c.ld({maxPriorityFeePerGas:n});m.maxPriorityFeePerGas=n,m.maxFeePerGas=r}else{if(void 0!==t.maxFeePerGas||void 0!==t.maxPriorityFeePerGas)throw new c.e5;let{gasPrice:r}=await (0,i.C)(e,{block:w,chain:h,request:m,type:"legacy"});m.gasPrice=r}return void 0===f&&(m.gas=await (0,o.Q)(e,{...m,account:{address:b.address,type:"json-rpc"}})),(0,u.F)(m),m}},99238:function(e,t,r){"use strict";async function n(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]})}r.d(t,{p:function(){return n}})},66403:function(e,t,r){"use strict";r.d(t,{R:function(){return i}});var n=r(22676);let i=(0,n.ax)({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}})},16189:function(e,t,r){"use strict";let n;r.d(t,{e:function(){return a}});var i=r(14503);let o=256;function a(e){let{batch:t,cacheTime:r=e.pollingInterval??4e3,key:a="base",name:s="Base Client",pollingInterval:l=4e3,type:c="base"}=e,u=e.chain,d=e.account?(0,i.T)(e.account):void 0,{config:h,request:f,value:p}=e.transport({chain:u,pollingInterval:l}),g={...h,...p},b={account:d,batch:t,cacheTime:r,chain:u,key:a,name:s,pollingInterval:l,request:f,transport:g,type:c,uid:function(e=11){if(!n||o+e>512){n="",o=0;for(let e=0;e<256;e++)n+=(256+256*Math.random()|0).toString(16).substring(1)}return n.substring(o,o+++e)}()};return Object.assign(b,{extend:function e(t){return r=>{let n=r(t);for(let e in b)delete n[e];let i={...t,...n};return Object.assign(i,{extend:e(i)})}}(b)})}},21032:function(e,t,r){"use strict";r.d(t,{K:function(){return j}});var n=r(16189),i=r(79524),o=r(92106);async function a(e,{chain:t}){let{id:r,name:n,nativeCurrency:i,rpcUrls:a,blockExplorers:s}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:(0,o.eC)(r),chainName:n,nativeCurrency:i,rpcUrls:a.default.http,blockExplorerUrls:s?Object.values(s).map(({url:e})=>e):void 0}]})}var s=r(30286),l=r(14503),c=r(8998),u=r(22676),d=r(26445),h=r(33639),f=r(87469),p=r(61163),g=r(74688),b=r(47531),w=r(57331),m=r(99238);async function y(e,t){let{account:r=e.account,chain:n=e.chain,accessList:o,data:a,gas:s,gasPrice:y,maxFeePerGas:v,maxPriorityFeePerGas:x,nonce:C,to:E,value:k,...S}=t;if(!r)throw new c.o({docsPath:"/docs/actions/wallet/sendTransaction"});let A=(0,l.T)(r);try{let r;if((0,b.F)(t),null!==n&&(r=await (0,i.L)(e),(0,u.qg)({currentChainId:r,chain:n})),"local"===A.type){let t=await (0,w.Z)(e,{account:A,accessList:o,chain:n,data:a,gas:s,gasPrice:y,maxFeePerGas:v,maxPriorityFeePerGas:x,nonce:C,to:E,value:k,...S});r||(r=await (0,i.L)(e));let l=n?.serializers?.transaction,c=await A.signTransaction({...t,chainId:r},{serializer:l});return await (0,m.p)(e,{serializedTransaction:c})}let l=n?.formatters?.transactionRequest?.format||g.tG,c=l({...(0,p.K)(S,{format:l}),accessList:o,data:a,from:A.address,gas:s,gasPrice:y,maxFeePerGas:v,maxPriorityFeePerGas:x,nonce:C,to:E,value:k});return await e.request({method:"eth_sendTransaction",params:[c]})}catch(e){throw function(e,{docsPath:t,...r}){let n=(()=>{let t=(0,f.k)(e,r);return t instanceof d.cj?e:t})();return new h.mk(n,{docsPath:t,...r})}(e,{...t,account:A,chain:t.chain||void 0})}}var v=r(45775);async function x(e){if(e.account?.type==="local")return[e.account.address];let t=await e.request({method:"eth_accounts"});return t.map(e=>(0,v.x)(e))}async function C(e){let t=await e.request({method:"wallet_getPermissions"});return t}async function E(e){let t=await e.request({method:"eth_requestAccounts"});return t.map(e=>(0,v.K)(e))}async function k(e,t){return e.request({method:"wallet_requestPermissions",params:[t]})}async function S(e,{account:t=e.account,message:r}){if(!t)throw new c.o({docsPath:"/docs/actions/wallet/signMessage"});let n=(0,l.T)(t);if("local"===n.type)return n.signMessage({message:r});let i="string"==typeof r?(0,o.$G)(r):r.raw instanceof Uint8Array?(0,o.NC)(r.raw):r.raw;return e.request({method:"personal_sign",params:[i,n.address]})}async function A(e,t){let{account:r=e.account,chain:n=e.chain,...a}=t;if(!r)throw new c.o({docsPath:"/docs/actions/wallet/signTransaction"});let s=(0,l.T)(r);(0,b.F)({account:s,...t});let d=await (0,i.L)(e);null!==n&&(0,u.qg)({currentChainId:d,chain:n});let h=n?.formatters||e.chain?.formatters,f=h?.transactionRequest?.format||g.tG;return"local"===s.type?s.signTransaction({...a,chainId:d},{serializer:e.chain?.serializers?.transaction}):await e.request({method:"eth_signTransaction",params:[{...f(a),chainId:(0,o.eC)(d),from:s.address}]})}var $=r(15102),P=r(96070),_=r(71352);async function D(e,{account:t=e.account,domain:r,message:n,primaryType:i,types:o}){if(!t)throw new c.o({docsPath:"/docs/actions/wallet/signTypedData"});let a=(0,l.T)(t),s={EIP712Domain:(0,_.cj)({domain:r}),...o};if((0,_.iC)({domain:r,message:n,primaryType:i,types:s}),"local"===a.type)return a.signTypedData({domain:r,primaryType:i,types:s,message:n});let u=(0,P.P)({domain:r??{},primaryType:i,types:s,message:n},(e,t)=>(0,$.v)(t)?t.toLowerCase():t);return e.request({method:"eth_signTypedData_v4",params:[a.address,u]})}async function O(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,o.eC)(t)}]})}async function I(e,t){let r=await e.request({method:"wallet_watchAsset",params:t});return r}var T=r(77799);async function R(e,{abi:t,address:r,args:n,dataSuffix:i,functionName:o,...a}){let s=(0,T.R)({abi:t,args:n,functionName:o}),l=await y(e,{data:`${s}${i?i.replace("0x",""):""}`,to:r,...a});return l}function N(e){return{addChain:t=>a(e,t),deployContract:t=>(function(e,{abi:t,args:r,bytecode:n,...i}){let o=(0,s.w)({abi:t,args:r,bytecode:n});return y(e,{...i,data:o})})(e,t),getAddresses:()=>x(e),getChainId:()=>(0,i.L)(e),getPermissions:()=>C(e),prepareTransactionRequest:t=>(0,w.Z)(e,t),requestAddresses:()=>E(e),requestPermissions:t=>k(e,t),sendRawTransaction:t=>(0,m.p)(e,t),sendTransaction:t=>y(e,t),signMessage:t=>S(e,t),signTransaction:t=>A(e,t),signTypedData:t=>D(e,t),switchChain:t=>O(e,t),watchAsset:t=>I(e,t),writeContract:t=>R(e,t)}}function j(e){let{key:t="wallet",name:r="Wallet Client",transport:i}=e,o=(0,n.e)({...e,key:t,name:r,transport:e=>i({...e,retryCount:0}),type:"walletClient"});return o.extend(N)}},31031:function(e,t,r){"use strict";r.d(t,{q:function(){return i}});var n=r(37029);function i({key:e,name:t,request:r,retryCount:i=3,retryDelay:o=150,timeout:a,type:s},l){return{config:{key:e,name:t,request:r,retryCount:i,retryDelay:o,timeout:a,type:s},request:(0,n.n)(r,{retryCount:i,retryDelay:o}),value:l}}},3980:function(e,t,r){"use strict";r.d(t,{P:function(){return i}});var n=r(31031);function i(e,t={}){let{key:r="custom",name:i="Custom Provider",retryDelay:o}=t;return({retryCount:a})=>(0,n.q)({key:r,name:i,request:e.request.bind(e),retryCount:t.retryCount??a,retryDelay:o,type:"custom"})}},16693:function(e,t,r){"use strict";r.d(t,{$o:function(){return c},F8:function(){return n},X$:function(){return l},du:function(){return a},k3:function(){return o},nZ:function(){return s}});let n=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],i=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],o=[...i,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],a=[...i,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],s=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],l=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],c=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},21746:function(e,t,r){"use strict";r.d(t,{$:function(){return n},Up:function(){return i},hZ:function(){return o}});let n={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},i={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},o={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},84192:function(e,t,r){"use strict";r.d(t,{Bd:function(){return o},Zn:function(){return i},ez:function(){return n}});let n={gwei:9,wei:18},i={ether:-9,wei:9},o={ether:-18,gwei:-9}},57412:function(e,t,r){"use strict";r.d(t,{CI:function(){return E},FM:function(){return p},Gy:function(){return x},KY:function(){return y},M4:function(){return d},MX:function(){return m},SM:function(){return v},cO:function(){return s},dh:function(){return C},fM:function(){return a},fs:function(){return h},gr:function(){return u},hn:function(){return k},lC:function(){return g},mv:function(){return b},wM:function(){return S},wb:function(){return c},xB:function(){return l},xL:function(){return w},yP:function(){return f}});var n=r(80522),i=r(39135),o=r(62027);class a extends o.G{constructor({docsPath:e}){super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class s extends o.G{constructor({docsPath:e}){super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class l extends o.G{constructor({data:e,params:t,size:r}){super(`Data size of ${r} bytes is too small for given parameters.`,{metaMessages:[`Params: (${(0,n.h)(t,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=r}}class c extends o.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class u extends o.G{constructor({expectedLength:e,givenLength:t,type:r}){super(`ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class d extends o.G{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,i.d)(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class h extends o.G{constructor({expectedLength:e,givenLength:t}){super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class f extends o.G{constructor(e,{docsPath:t}){super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class p extends o.G{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class g extends o.G{constructor(e,{docsPath:t}){super(`Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class b extends o.G{constructor(e,{docsPath:t}={}){super(`Event ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class w extends o.G{constructor(e,{docsPath:t}={}){super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class m extends o.G{constructor(e,{docsPath:t}){super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class y extends o.G{constructor({expectedSize:e,givenSize:t}){super(`Expected bytes${e}, got bytes${t}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class v extends o.G{constructor({abiItem:e,data:t,params:r,size:i}){super(`Data size of ${i} bytes is too small for non-indexed event parameters.`,{metaMessages:[`Params: (${(0,n.h)(r,{includeName:!0})})`,`Data:   ${t} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=t,this.params=r,this.size=i}}class x extends o.G{constructor({abiItem:e,param:t}){super(`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,n.t)(e,{includeName:!0})}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class C extends o.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class E extends o.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class k extends o.G{constructor(e){super(`Value "${e}" is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class S extends o.G{constructor(e){super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},8998:function(e,t,r){"use strict";r.d(t,{o:function(){return i}});var n=r(62027);class i extends n.G{constructor({docsPath:e}={}){super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},26087:function(e,t,r){"use strict";r.d(t,{b:function(){return i}});var n=r(62027);class i extends n.G{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},62027:function(e,t,r){"use strict";r.d(t,{G:function(){return i}});var n=r(35280);class i extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,n.bo)()});let r=t.cause instanceof i?t.cause.details:t.cause?.message?t.cause.message:t.details,o=t.cause instanceof i&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return function e(t,r){return r?.(t)?t:t&&"object"==typeof t&&"cause"in t?e(t.cause,r):r?null:t}(this,e)}}},80377:function(e,t,r){"use strict";r.d(t,{Bk:function(){return a},Yl:function(){return o},mm:function(){return i},pZ:function(){return s}});var n=r(62027);class i extends n.G{constructor({blockNumber:e,chain:t,contract:r}){super(`Chain "${t.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class o extends n.G{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class a extends n.G{constructor(){super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class s extends n.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}},97405:function(e,t,r){"use strict";r.d(t,{cg:function(){return b},uq:function(){return w},Lu:function(){return m},Dk:function(){return y},VQ:function(){return v}});var n=r(14503),i=r(21746),o=r(86899),a=r(80522),s=r(96070);function l({abiItem:e,args:t,includeFunctionName:r=!0,includeName:n=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${r?e.name:""}(${e.inputs.map((e,r)=>`${n&&e.name?`${e.name}: `:""}${"object"==typeof t[r]?(0,s.P)(t[r]):t[r]}`).join(", ")})`}var c=r(40840),u=r(39625),d=r(15460),h=r(57412),f=r(62027),p=r(33639),g=r(35280);class b extends f.G{constructor(e,{account:t,docsPath:r,chain:i,data:o,gas:a,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:h,to:f,value:g}){let b=t?(0,n.T)(t):void 0,w=(0,p.xr)({from:b?.address,to:f,value:void 0!==g&&`${(0,u.d)(g)} ${i?.nativeCurrency.symbol||"ETH"}`,data:o,gas:a,gasPrice:void 0!==s&&`${(0,d.o)(s)} gwei`,maxFeePerGas:void 0!==l&&`${(0,d.o)(l)} gwei`,maxPriorityFeePerGas:void 0!==c&&`${(0,d.o)(c)} gwei`,nonce:h});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class w extends f.G{constructor(e,{abi:t,args:r,contractAddress:n,docsPath:i,functionName:o,sender:s}){let u=(0,c.m)({abi:t,args:r,name:o}),d=u?l({abiItem:u,args:r,includeFunctionName:!1,includeName:!1}):void 0,h=u?(0,a.t)(u,{includeName:!0}):void 0,f=(0,p.xr)({address:n&&(0,g.CR)(n),function:h,args:d&&"()"!==d&&`${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${d}`,sender:s});super(e.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",f].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=r,this.cause=e,this.contractAddress=n,this.functionName=o,this.sender=s}}class m extends f.G{constructor({abi:e,data:t,functionName:r,message:n}){let s,c,u,d,f;if(t&&"0x"!==t)try{f=(0,o.p)({abi:e,data:t});let{abiItem:r,errorName:n,args:s}=f;if("Error"===n)u=s[0];else if("Panic"===n){let[e]=s;u=i.$[e]}else{let e=r?(0,a.t)(r,{includeName:!0}):void 0,t=r&&s?l({abiItem:r,args:s,includeFunctionName:!1,includeName:!1}):void 0;c=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(n?.length??0).keys()].map(()=>" ").join("")}${t}`:""]}}catch(e){s=e}else n&&(u=n);s instanceof h.yP&&(c=[`Unable to decode signature "${d=s.signature}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`]),super(u&&"execution reverted"!==u||d?[`The contract function "${r}" reverted with the following ${d?"signature":"reason"}:`,u||d].join("\n"):`The contract function "${r}" reverted.`,{cause:s,metaMessages:c}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=f,this.reason=u,this.signature=d}}class y extends f.G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class v extends f.G{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},69760:function(e,t,r){"use strict";r.d(t,{$:function(){return o},m:function(){return i}});var n=r(62027);class i extends n.G{constructor({offset:e,position:t,size:r}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class o extends n.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}},87788:function(e,t,r){"use strict";r.d(t,{Cd:function(){return o},J5:function(){return i},M6:function(){return a}});var n=r(62027);class i extends n.G{constructor({max:e,min:t,signed:r,size:n,value:i}){super(`Number "${i}" is not in safe ${n?`${8*n}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class o extends n.G{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class a extends n.G{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},15371:function(e,t,r){"use strict";r.d(t,{Fz:function(){return o},e5:function(){return a},ld:function(){return s}});var n=r(15460),i=r(62027);class o extends i.G{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class a extends i.G{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class s extends i.G{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,n.o)(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}},26445:function(e,t,r){"use strict";r.d(t,{C_:function(){return d},G$:function(){return s},Hh:function(){return a},M_:function(){return o},WF:function(){return h},ZI:function(){return l},cj:function(){return b},cs:function(){return g},dR:function(){return f},pZ:function(){return p},se:function(){return u},vU:function(){return c}});var n=r(15460),i=r(62027);class o extends i.G{constructor({cause:e,message:t}={}){let r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class a extends i.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,n.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class s extends i.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,n.o)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class l extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class c extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class d extends i.G{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class h extends i.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class f extends i.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class p extends i.G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class g extends i.G{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:r}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,n.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${(0,n.o)(r)} gwei`:""}).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(g,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class b extends i.G{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},78863:function(e,t,r){"use strict";r.d(t,{Gg:function(){return a},W5:function(){return c},bs:function(){return l},c9:function(){return s}});var n=r(96070),i=r(62027),o=r(35280);class a extends i.G{constructor({body:e,details:t,headers:r,status:i,url:a}){super("HTTP request failed.",{details:t,metaMessages:[i&&`Status: ${i}`,`URL: ${(0,o.Gr)(a)}`,e&&`Request body: ${(0,n.P)(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=i,this.url=a}}class s extends i.G{constructor({body:e,details:t,url:r}){super("WebSocket request failed.",{details:t,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,n.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class l extends i.G{constructor({body:e,error:t,url:r}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,n.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class c extends i.G{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,o.Gr)(t)}`,`Request body: ${(0,n.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},39028:function(e,t,r){"use strict";r.d(t,{B:function(){return l},GD:function(){return m},I0:function(){return E},KB:function(){return g},LX:function(){return c},Og:function(){return f},PE:function(){return v},Pv:function(){return w},Ts:function(){return x},XS:function(){return d},ab:function(){return y},gS:function(){return b},ir:function(){return S},nY:function(){return u},pT:function(){return p},s7:function(){return s},u5:function(){return C},x3:function(){return k},yR:function(){return h}});var n=r(62027),i=r(78863);class o extends n.G{constructor(e,{code:t,docsPath:r,metaMessages:n,shortMessage:o}){super(o,{cause:e,docsPath:r,metaMessages:n||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof i.bs?e.code:t??-1}}class a extends o{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class s extends o{constructor(e){super(e,{code:s.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class l extends o{constructor(e){super(e,{code:l.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class c extends o{constructor(e){super(e,{code:c.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(c,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class u extends o{constructor(e){super(e,{code:u.code,shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class d extends o{constructor(e){super(e,{code:d.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class h extends o{constructor(e){super(e,{code:h.code,shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class f extends o{constructor(e){super(e,{code:f.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class p extends o{constructor(e){super(e,{code:p.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class g extends o{constructor(e){super(e,{code:g.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class b extends o{constructor(e){super(e,{code:b.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class w extends o{constructor(e){super(e,{code:w.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class m extends o{constructor(e){super(e,{code:m.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class y extends a{constructor(e){super(e,{code:y.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class v extends a{constructor(e){super(e,{code:v.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class x extends a{constructor(e){super(e,{code:x.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class C extends a{constructor(e){super(e,{code:C.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class E extends a{constructor(e){super(e,{code:E.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class k extends a{constructor(e){super(e,{code:k.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(k,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class S extends o{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}},33639:function(e,t,r){"use strict";r.d(t,{Bh:function(){return u},Yb:function(){return d},j3:function(){return l},mc:function(){return h},mk:function(){return c},xY:function(){return s},xr:function(){return a}});var n=r(39625),i=r(15460),o=r(62027);function a(e){let t=Object.entries(e).map(([e,t])=>void 0===t||!1===t?null:[e,t]).filter(Boolean),r=t.reduce((e,[t])=>Math.max(e,t.length),0);return t.map(([e,t])=>`  ${`${e}:`.padEnd(r+1)}  ${t}`).join("\n")}class s extends o.G{constructor(){super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class l extends o.G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",a(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class c extends o.G{constructor(e,{account:t,docsPath:r,chain:o,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:f,value:p}){let g=a({chain:o&&`${o?.name} (id: ${o?.id})`,from:t?.address,to:f,value:void 0!==p&&`${(0,n.d)(p)} ${o?.nativeCurrency.symbol||"ETH"}`,data:s,gas:l,gasPrice:void 0!==c&&`${(0,i.o)(c)} gwei`,maxFeePerGas:void 0!==u&&`${(0,i.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==d&&`${(0,i.o)(d)} gwei`,nonce:h});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class u extends o.G{constructor({blockHash:e,blockNumber:t,blockTag:r,hash:n,index:i}){let o="Transaction";r&&void 0!==i&&(o=`Transaction at block time "${r}" at index "${i}"`),e&&void 0!==i&&(o=`Transaction at block hash "${e}" at index "${i}"`),t&&void 0!==i&&(o=`Transaction at block number "${t}" at index "${i}"`),n&&(o=`Transaction with hash "${n}"`),super(`${o} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class d extends o.G{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class h extends o.G{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}},35280:function(e,t,r){"use strict";r.d(t,{CR:function(){return n},Gr:function(){return i},bo:function(){return o}});let n=e=>e,i=e=>e,o=()=>"viem@1.16.5"},34450:function(e,t,r){"use strict";r.d(t,{r:function(){return u}});var n=r(57412),i=r(45775),o=r(39135),a=r(3972),s=r(61836),l=r(95946),c=r(45444);function u(e,t){if("0x"===t&&e.length>0)throw new n.wb;if((0,o.d)(t)&&32>(0,o.d)(t))throw new n.xB({data:t,params:e,size:(0,o.d)(t)});return function({data:e,params:t}){let r=[],u=0;for(let h=0;h<t.length;h++){if(u>=(0,o.d)(e))throw new n.xB({data:e,params:t,size:(0,o.d)(e)});let f=t[h],{consumed:p,value:g}=function e({data:t,param:r,position:o}){let u=(0,c.S)(r.type);if(u){let[n,i]=u;return function(t,{param:r,length:n,position:i}){if(!n){let n=(0,l.ly)((0,a.tP)(t,i,i+32,{strict:!0})),o=(0,l.ly)((0,a.tP)(t,n,n+32,{strict:!0})),s=0,c=[];for(let i=0;i<o;++i){let i=e({data:(0,a.tP)(t,n+32),param:r,position:s});s+=i.consumed,c.push(i.value)}return{value:c,consumed:32}}if(d(r)){let o=(0,c.S)(r.type),s=!o?.[0],u=0,d=[];for(let o=0;o<n;++o){let n=(0,l.ly)((0,a.tP)(t,i,i+32,{strict:!0})),c=e({data:(0,a.tP)(t,n),param:r,position:s?u:32*o});u+=c.consumed,d.push(c.value)}return{value:d,consumed:32}}let o=0,s=[];for(let a=0;a<n;++a){let n=e({data:t,param:r,position:i+o});o+=n.consumed,s.push(n.value)}return{value:s,consumed:o}}(t,{length:n,param:{...r,type:i},position:o})}if("tuple"===r.type)return function(t,{param:r,position:n}){let i=0===r.components.length||r.components.some(({name:e})=>!e),o=i?[]:{},s=0;if(d(r)){let c=(0,l.ly)((0,a.tP)(t,n,n+32,{strict:!0}));for(let n=0;n<r.components.length;++n){let l=r.components[n],u=e({data:(0,a.tP)(t,c),param:l,position:s});s+=u.consumed,o[i?n:l?.name]=u.value}return{consumed:32,value:o}}for(let a=0;a<r.components.length;++a){let l=r.components[a],c=e({data:t,param:l,position:n+s});s+=c.consumed,o[i?a:l?.name]=c.value}return{consumed:s,value:o}}(t,{param:r,position:o});if("string"===r.type)return function(e,{position:t}){let r=(0,l.ly)((0,a.tP)(e,t,t+32,{strict:!0})),n=(0,l.ly)((0,a.tP)(e,r,r+32,{strict:!0}));if(0===n)return{consumed:32,value:""};let i=(0,l.rR)((0,s.f)((0,a.tP)(e,r+32,r+32+n,{strict:!0})));return{consumed:32,value:i}}(t,{position:o});if(r.type.startsWith("bytes"))return function(e,{param:t,position:r}){let[n,i]=t.type.split("bytes");if(!i){let t=(0,l.ly)((0,a.tP)(e,r,r+32,{strict:!0})),n=(0,l.ly)((0,a.tP)(e,t,t+32,{strict:!0}));if(0===n)return{consumed:32,value:"0x"};let i=(0,a.tP)(e,t+32,t+32+n,{strict:!0});return{consumed:32,value:i}}let o=(0,a.tP)(e,r,r+parseInt(i),{strict:!0});return{consumed:32,value:o}}(t,{param:r,position:o});let h=(0,a.tP)(t,o,o+32,{strict:!0});if(r.type.startsWith("uint")||r.type.startsWith("int"))return function(e,{param:t}){let r=t.type.startsWith("int"),n=parseInt(t.type.split("int")[1]||"256");return{consumed:32,value:n>48?(0,l.y_)(e,{signed:r}):(0,l.ly)(e,{signed:r})}}(h,{param:r});if("address"===r.type)return{consumed:32,value:(0,i.x)((0,a.tP)(h,-20))};if("bool"===r.type)return{consumed:32,value:(0,l.XA)(h)};throw new n.CI(r.type,{docsPath:"/docs/contract/decodeAbiParameters"})}({data:e,param:f,position:u});r.push(g),u+=p}return r}({data:t,params:e})}function d(e){let{type:t}=e;if("string"===t||"bytes"===t||t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(d);let r=(0,c.S)(e.type);return!!(r&&d({...e,type:r[1]}))}},86899:function(e,t,r){"use strict";r.d(t,{p:function(){return c}});var n=r(21746),i=r(57412),o=r(3972),a=r(40552),s=r(34450),l=r(80522);function c({abi:e,data:t}){let r=(0,o.tP)(t,0,4);if("0x"===r)throw new i.wb;let c=[...e||[],n.Up,n.hZ],u=c.find(e=>"error"===e.type&&r===(0,a.o)((0,l.t)(e)));if(!u)throw new i.yP(r,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:u,args:"inputs"in u&&u.inputs&&u.inputs.length>0?(0,s.r)(u.inputs,(0,o.tP)(t,4)):void 0,errorName:u.name}}},7210:function(e,t,r){"use strict";r.d(t,{k:function(){return s}});var n=r(57412),i=r(34450),o=r(40840);let a="/docs/contract/decodeFunctionResult";function s({abi:e,args:t,functionName:r,data:s}){let l=e[0];if(r&&!(l=(0,o.m)({abi:e,args:t,name:r})))throw new n.xL(r,{docsPath:a});if("function"!==l.type)throw new n.xL(void 0,{docsPath:a});if(!l.outputs)throw new n.MX(l.name,{docsPath:a});let c=(0,i.r)(l.outputs,s);return c&&c.length>1?c:c&&1===c.length?c[0]:void 0}},45444:function(e,t,r){"use strict";r.d(t,{E:function(){return d},S:function(){return f}});var n=r(57412),i=r(26087),o=r(49321),a=r(57040),s=r(61769),l=r(39135),c=r(3972),u=r(92106);function d(e,t){if(e.length!==t.length)throw new n.fs({expectedLength:e.length,givenLength:t.length});let r=function({params:e,values:t}){let r=[];for(let d=0;d<e.length;d++)r.push(function e({param:t,value:r}){let d=f(t.type);if(d){let[i,o]=d;return function(t,{length:r,param:i}){let o=null===r;if(!Array.isArray(t))throw new n.hn(t);if(!o&&t.length!==r)throw new n.gr({expectedLength:r,givenLength:t.length,type:`${i.type}[${r}]`});let s=!1,l=[];for(let r=0;r<t.length;r++){let n=e({param:i,value:t[r]});n.dynamic&&(s=!0),l.push(n)}if(o||s){let e=h(l);if(o){let t=(0,u.eC)(l.length,{size:32});return{dynamic:!0,encoded:l.length>0?(0,a.zo)([t,e]):t}}if(s)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,a.zo)(l.map(({encoded:e})=>e))}}(r,{length:i,param:{...t,type:o}})}if("tuple"===t.type)return function(t,{param:r}){let n=!1,i=[];for(let o=0;o<r.components.length;o++){let a=r.components[o],s=Array.isArray(t)?o:a.name,l=e({param:a,value:t[s]});i.push(l),l.dynamic&&(n=!0)}return{dynamic:n,encoded:n?h(i):(0,a.zo)(i.map(({encoded:e})=>e))}}(r,{param:t});if("address"===t.type)return function(e){if(!(0,o.U)(e))throw new i.b({address:e});return{dynamic:!1,encoded:(0,s.gc)(e.toLowerCase())}}(r);if("bool"===t.type)return{dynamic:!1,encoded:(0,s.gc)((0,u.C4)(r))};if(t.type.startsWith("uint")||t.type.startsWith("int")){let e=t.type.startsWith("int");return function(e,{signed:t}){return{dynamic:!1,encoded:(0,u.eC)(e,{size:32,signed:t})}}(r,{signed:e})}if(t.type.startsWith("bytes"))return function(e,{param:t}){let[,r]=t.type.split("bytes"),i=(0,l.d)(e);if(!r){let t=e;return i%32!=0&&(t=(0,s.gc)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,a.zo)([(0,s.gc)((0,u.eC)(i,{size:32})),t])}}if(i!==parseInt(r))throw new n.M4({expectedSize:parseInt(r),value:e});return{dynamic:!1,encoded:(0,s.gc)(e,{dir:"right"})}}(r,{param:t});if("string"===t.type)return function(e){let t=(0,u.$G)(e),r=Math.ceil((0,l.d)(t)/32),n=[];for(let e=0;e<r;e++)n.push((0,s.gc)((0,c.tP)(t,32*e,(e+1)*32),{dir:"right"}));return{dynamic:!0,encoded:(0,a.zo)([(0,s.gc)((0,u.eC)((0,l.d)(t),{size:32})),...n])}}(r);throw new n.dh(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}({param:e[d],value:t[d]}));return r}({params:e,values:t}),d=h(r);return 0===d.length?"0x":d}function h(e){let t=0;for(let r=0;r<e.length;r++){let{dynamic:n,encoded:i}=e[r];n?t+=32:t+=(0,l.d)(i)}let r=[],n=[],i=0;for(let o=0;o<e.length;o++){let{dynamic:a,encoded:s}=e[o];a?(r.push((0,u.eC)(t+i,{size:32})),n.push(s),i+=(0,l.d)(s)):r.push(s)}return(0,a.zo)([...r,...n])}function f(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},30286:function(e,t,r){"use strict";r.d(t,{w:function(){return s}});var n=r(57412),i=r(57040),o=r(45444);let a="/docs/contract/encodeDeployData";function s({abi:e,args:t,bytecode:r}){if(!t||0===t.length)return r;let s=e.find(e=>"type"in e&&"constructor"===e.type);if(!s)throw new n.fM({docsPath:a});if(!("inputs"in s)||!s.inputs||0===s.inputs.length)throw new n.cO({docsPath:a});let l=(0,o.E)(s.inputs,t);return(0,i.SM)([r,l])}},77799:function(e,t,r){"use strict";r.d(t,{R:function(){return c}});var n=r(57412),i=r(57040),o=r(40552),a=r(45444),s=r(80522),l=r(40840);function c({abi:e,args:t,functionName:r}){let c=e[0];if(r&&!(c=(0,l.m)({abi:e,args:t,name:r})))throw new n.xL(r,{docsPath:"/docs/contract/encodeFunctionData"});if("function"!==c.type)throw new n.xL(void 0,{docsPath:"/docs/contract/encodeFunctionData"});let u=(0,s.t)(c),d=(0,o.o)(u),h="inputs"in c&&c.inputs?(0,a.E)(c.inputs,t??[]):void 0;return(0,i.SM)([d,h??"0x"])}},80522:function(e,t,r){"use strict";r.d(t,{h:function(){return o},t:function(){return i}});var n=r(57412);function i(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new n.wM(e.type);return`${e.name}(${o(e.inputs,{includeName:t})})`}function o(e,{includeName:t=!1}={}){return e?e.map(e=>(function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${o(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")})(e,{includeName:t})).join(t?", ":","):""}},40840:function(e,t,r){"use strict";r.d(t,{m:function(){return s}});var n=r(15102),i=r(74059),o=r(40552),a=r(49321);function s({abi:e,args:t=[],name:r}){let s=(0,n.v)(r,{strict:!1}),l=e.filter(e=>s?"function"===e.type?(0,o.o)(e)===r:"event"===e.type&&(0,i.e)(e)===r:"name"in e&&e.name===r);if(0!==l.length){if(1===l.length)return l[0];for(let e of l){if(!("inputs"in e))continue;if(!t||0===t.length){if(!e.inputs||0===e.inputs.length)return e;continue}if(!e.inputs||0===e.inputs.length||e.inputs.length!==t.length)continue;let r=t.every((t,r)=>{let n="inputs"in e&&e.inputs[r];return!!n&&function e(t,r){let n=typeof t,i=r.type;switch(i){case"address":return(0,a.U)(t);case"bool":return"boolean"===n;case"function":case"string":return"string"===n;default:if("tuple"===i&&"components"in r)return Object.values(r.components).every((r,n)=>e(Object.values(t)[n],r));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i))return"number"===n||"bigint"===n;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i))return"string"===n||t instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i))return Array.isArray(t)&&t.every(t=>e(t,{...r,type:i.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(t,n)});if(r)return e}return l[0]}}},45775:function(e,t,r){"use strict";r.d(t,{K:function(){return l},x:function(){return s}});var n=r(26087),i=r(11187),o=r(56254),a=r(49321);function s(e,t){let r=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),n=(0,o.w)((0,i.qX)(r),"bytes"),a=(t?r.substring(`${t}0x`.length):r).split("");for(let e=0;e<40;e+=2)n[e>>1]>>4>=8&&a[e]&&(a[e]=a[e].toUpperCase()),(15&n[e>>1])>=8&&a[e+1]&&(a[e+1]=a[e+1].toUpperCase());return`0x${a.join("")}`}function l(e,t){if(!(0,a.U)(e))throw new n.b({address:e});return s(e,t)}},49321:function(e,t,r){"use strict";r.d(t,{U:function(){return i}});let n=/^0x[a-fA-F0-9]{40}$/;function i(e){return n.test(e)}},37029:function(e,t,r){"use strict";r.d(t,{n:function(){return l},y:function(){return s}});var n=r(62027),i=r(78863),o=r(39028),a=r(7760);let s=e=>"code"in e?-1!==e.code&&-32004!==e.code&&-32005!==e.code&&-32042!==e.code&&-32603!==e.code:e instanceof i.Gg&&!!e.status&&403!==e.status&&408!==e.status&&413!==e.status&&429!==e.status&&500!==e.status&&502!==e.status&&503!==e.status&&504!==e.status;function l(e,{retryDelay:t=150,retryCount:r=3}={}){return async l=>(0,a.J)(async()=>{try{return await e(l)}catch(e){switch(e.code){case o.s7.code:throw new o.s7(e);case o.B.code:throw new o.B(e);case o.LX.code:throw new o.LX(e);case o.nY.code:throw new o.nY(e);case o.XS.code:throw new o.XS(e);case o.yR.code:throw new o.yR(e);case o.Og.code:throw new o.Og(e);case o.pT.code:throw new o.pT(e);case o.KB.code:throw new o.KB(e);case o.gS.code:throw new o.gS(e);case o.Pv.code:throw new o.Pv(e);case o.GD.code:throw new o.GD(e);case o.ab.code:throw new o.ab(e);case o.PE.code:throw new o.PE(e);case o.Ts.code:throw new o.Ts(e);case o.u5.code:throw new o.u5(e);case o.I0.code:throw new o.I0(e);case o.x3.code:throw new o.x3(e);case 5e3:throw new o.ab(e);default:if(e instanceof n.G)throw e;throw new o.ir(e)}}},{delay:({count:e,error:r})=>{if(r&&r instanceof i.Gg){let e=r?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*parseInt(e)}return~~(1<<e)*t},retryCount:r,shouldRetry:({error:e})=>!s(e)})}},22676:function(e,t,r){"use strict";r.d(t,{LI:function(){return a},ax:function(){return o},qg:function(){return i}});var n=r(80377);function i({chain:e,currentChainId:t}){if(!e)throw new n.Bk;if(t!==e.id)throw new n.Yl({chain:e,currentChainId:t})}function o(e,t={}){let{fees:r=e.fees,formatters:n=e.formatters,serializers:i=e.serializers}=t;return{...e,fees:r,formatters:n,serializers:i}}function a({blockNumber:e,chain:t,contract:r}){let i=t?.contracts?.[r];if(!i)throw new n.mm({chain:t,contract:{name:r}});if(e&&i.blockCreated&&i.blockCreated>e)throw new n.mm({blockNumber:e,chain:t,contract:{name:r,blockCreated:i.blockCreated}});return i.address}},57040:function(e,t,r){"use strict";function n(e){return"string"==typeof e[0]?i(e):function(e){let t=0;for(let r of e)t+=r.length;let r=new Uint8Array(t),n=0;for(let t of e)r.set(t,n),n+=t.length;return r}(e)}function i(e){return`0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`}r.d(t,{SM:function(){return i},zo:function(){return n}})},15102:function(e,t,r){"use strict";function n(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}r.d(t,{v:function(){return n}})},61769:function(e,t,r){"use strict";r.d(t,{gc:function(){return o},vk:function(){return i}});var n=r(69760);function i(e,{dir:t,size:r=32}={}){return"string"==typeof e?o(e,{dir:t,size:r}):function(e,{dir:t,size:r=32}={}){if(null===r)return e;if(e.length>r)throw new n.$({size:e.length,targetSize:r,type:"bytes"});let i=new Uint8Array(r);for(let n=0;n<r;n++){let o="right"===t;i[o?n:r-n-1]=e[o?n:e.length-n-1]}return i}(e,{dir:t,size:r})}function o(e,{dir:t,size:r=32}={}){if(null===r)return e;let i=e.replace("0x","");if(i.length>2*r)throw new n.$({size:Math.ceil(i.length/2),targetSize:r,type:"hex"});return`0x${i["right"===t?"padEnd":"padStart"](2*r,"0")}`}},39135:function(e,t,r){"use strict";r.d(t,{d:function(){return i}});var n=r(15102);function i(e){return(0,n.v)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},3972:function(e,t,r){"use strict";r.d(t,{tP:function(){return a}});var n=r(69760),i=r(15102),o=r(39135);function a(e,t,r,{strict:n}={}){return(0,i.v)(e,{strict:!1})?function(e,t,r,{strict:n}={}){s(e,t);let i=`0x${e.replace("0x","").slice((t??0)*2,(r??e.length)*2)}`;return n&&l(i,t,r),i}(e,t,r,{strict:n}):function(e,t,r,{strict:n}={}){s(e,t);let i=e.slice(t,r);return n&&l(i,t,r),i}(e,t,r,{strict:n})}function s(e,t){if("number"==typeof t&&t>0&&t>(0,o.d)(e)-1)throw new n.m({offset:t,position:"start",size:(0,o.d)(e)})}function l(e,t,r){if("number"==typeof t&&"number"==typeof r&&(0,o.d)(e)!==r-t)throw new n.m({offset:r,position:"end",size:(0,o.d)(e)})}},61836:function(e,t,r){"use strict";function n(e,{dir:t="left"}={}){let r="string"==typeof e?e.replace("0x",""):e,n=0;for(let e=0;e<r.length-1&&"0"===r["left"===t?e:r.length-e-1].toString();e++)n++;return(r="left"===t?r.slice(n):r.slice(0,r.length-n),"string"==typeof e)?(1===r.length&&"right"===t&&(r=`${r}0`),`0x${r.length%2==1?`0${r}`:r}`):r}r.d(t,{f:function(){return n}})},95946:function(e,t,r){"use strict";r.d(t,{XA:function(){return c},Yf:function(){return s},ly:function(){return u},rR:function(){return d},y_:function(){return l}});var n=r(87788),i=r(39135),o=r(61836),a=r(11187);function s(e,{size:t}){if((0,i.d)(e)>t)throw new n.M6({givenSize:(0,i.d)(e),maxSize:t})}function l(e,t={}){let{signed:r}=t;t.size&&s(e,{size:t.size});let n=BigInt(e);if(!r)return n;let i=(e.length-2)/2,o=(1n<<8n*BigInt(i)-1n)-1n;return n<=o?n:n-BigInt(`0x${"f".padStart(2*i,"f")}`)-1n}function c(e,t={}){let r=e;if(t.size&&(s(r,{size:t.size}),r=(0,o.f)(r)),"0x00"===(0,o.f)(r))return!1;if("0x01"===(0,o.f)(r))return!0;throw new n.Cd(r)}function u(e,t={}){return Number(l(e,t))}function d(e,t={}){let r=(0,a.nr)(e);return t.size&&(s(r,{size:t.size}),r=(0,o.f)(r,{dir:"right"})),new TextDecoder().decode(r)}},11187:function(e,t,r){"use strict";r.d(t,{O0:function(){return c},nr:function(){return h},qX:function(){return f}});var n=r(62027),i=r(15102),o=r(61769),a=r(95946),s=r(92106);let l=new TextEncoder;function c(e,t={}){return"number"==typeof e||"bigint"==typeof e?function(e,t){let r=(0,s.eC)(e,t);return h(r)}(e,t):"boolean"==typeof e?function(e,t={}){let r=new Uint8Array(1);return(r[0]=Number(e),"number"==typeof t.size)?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{size:t.size})):r}(e,t):(0,i.v)(e)?h(e,t):f(e,t)}let u={zero:48,nine:57,A:65,F:70,a:97,f:102};function d(e){return e>=u.zero&&e<=u.nine?e-u.zero:e>=u.A&&e<=u.F?e-(u.A-10):e>=u.a&&e<=u.f?e-(u.a-10):void 0}function h(e,t={}){let r=e;t.size&&((0,a.Yf)(r,{size:t.size}),r=(0,o.vk)(r,{dir:"right",size:t.size}));let i=r.slice(2);i.length%2&&(i=`0${i}`);let s=i.length/2,l=new Uint8Array(s);for(let e=0,t=0;e<s;e++){let r=d(i.charCodeAt(t++)),o=d(i.charCodeAt(t++));if(void 0===r||void 0===o)throw new n.G(`Invalid byte sequence ("${i[t-2]}${i[t-1]}" in "${i}").`);l[e]=16*r+o}return l}function f(e,t={}){let r=l.encode(e);return"number"==typeof t.size?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{dir:"right",size:t.size})):r}},92106:function(e,t,r){"use strict";r.d(t,{$G:function(){return h},C4:function(){return l},NC:function(){return s},ci:function(){return c},eC:function(){return u}});var n=r(87788),i=r(61769),o=r(95946);let a=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function s(e,t={}){return"number"==typeof e||"bigint"==typeof e?u(e,t):"string"==typeof e?h(e,t):"boolean"==typeof e?l(e,t):c(e,t)}function l(e,t={}){let r=`0x${Number(e)}`;return"number"==typeof t.size?((0,o.Yf)(r,{size:t.size}),(0,i.vk)(r,{size:t.size})):r}function c(e,t={}){let r="";for(let t=0;t<e.length;t++)r+=a[e[t]];let n=`0x${r}`;return"number"==typeof t.size?((0,o.Yf)(n,{size:t.size}),(0,i.vk)(n,{dir:"right",size:t.size})):n}function u(e,t={}){let r;let{signed:o,size:a}=t,s=BigInt(e);a?r=o?(1n<<8n*BigInt(a)-1n)-1n:2n**(8n*BigInt(a))-1n:"number"==typeof e&&(r=BigInt(Number.MAX_SAFE_INTEGER));let l="bigint"==typeof r&&o?-r-1n:0;if(r&&s>r||s<l){let t="bigint"==typeof e?"n":"";throw new n.J5({max:r?`${r}${t}`:void 0,min:`${l}${t}`,signed:o,size:a,value:`${e}${t}`})}let c=`0x${(o&&s<0?(1n<<BigInt(8*a))+BigInt(s):s).toString(16)}`;return a?(0,i.vk)(c,{size:a}):c}let d=new TextEncoder;function h(e,t={}){let r=d.encode(e);return c(r,t)}},11511:function(e,t,r){"use strict";r.d(t,{i:function(){return i}});var n=r(15102);function i(e){if(66!==e.length||0!==e.indexOf("[")||65!==e.indexOf("]"))return null;let t=`0x${e.slice(1,65)}`;return(0,n.v)(t)?t:null}},74526:function(e,t,r){"use strict";r.d(t,{c:function(){return a}});var n=r(21746),i=r(62027),o=r(97405);function a(e,t){if(!(e instanceof i.G))return!1;let r=e.walk(e=>e instanceof o.Lu);return r instanceof o.Lu&&(!!(r.data?.errorName==="ResolverNotFound"||r.data?.errorName==="ResolverWildcardNotSupported"||r.reason?.includes("Wildcard on non-extended resolvers is not supported"))||"reverse"===t&&r.reason===n.$[50])}},42216:function(e,t,r){"use strict";r.d(t,{d:function(){return s}});var n=r(11187),i=r(92106),o=r(56254),a=r(11511);function s(e){let t=new Uint8Array(32).fill(0);return e?(0,a.i)(e)||(0,o.w)((0,n.qX)(e)):(0,i.ci)(t)}},75719:function(e,t,r){"use strict";r.d(t,{V:function(){return l}});var n=r(57040),i=r(11187),o=r(92106),a=r(56254),s=r(11511);function l(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,o.ci)(t);let r=e.split(".");for(let e=r.length-1;e>=0;e-=1){let o=(0,s.i)(r[e]),l=o?(0,i.O0)(o):(0,a.w)((0,i.qX)(r[e]),"bytes");t=(0,a.w)((0,n.zo)([t,l]),"bytes")}return(0,o.ci)(t)}},72435:function(e,t,r){"use strict";r.d(t,{T:function(){return o}});var n=r(11187),i=r(42216);function o(e){let t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);let r=new Uint8Array((0,n.qX)(t).byteLength+2),o=0,a=t.split(".");for(let e=0;e<a.length;e++){let t=(0,n.qX)(a[e]);t.byteLength>255&&(t=(0,n.qX)(`[${(0,i.d)(a[e]).slice(2)}]`)),r[o]=t.length,r.set(t,o+1),o+=t.length+1}return r.byteLength!==o+1?r.slice(0,o+1):r}},72365:function(e,t,r){"use strict";r.d(t,{S:function(){return s}});var n=r(57412),i=r(62027),o=r(97405),a=r(39028);function s(e,{abi:t,address:r,args:s,docsPath:l,functionName:c,sender:u}){let{code:d,data:h,message:f,shortMessage:p}=e instanceof o.VQ?e:e instanceof i.G?e.walk(e=>"data"in e)||e.walk():{},g=e instanceof n.wb?new o.Dk({functionName:c}):[3,a.XS.code].includes(d)&&(h||f||p)?new o.Lu({abi:t,data:"object"==typeof h?h.data:h,functionName:c,message:p??f}):e;return new o.uq(g,{abi:t,args:s,contractAddress:r,docsPath:l,functionName:c,sender:u})}},87469:function(e,t,r){"use strict";r.d(t,{k:function(){return o}});var n=r(62027),i=r(26445);function o(e,t){let r=(e.details||"").toLowerCase(),o=e.walk(e=>e.code===i.M_.code);if(o instanceof n.G)return new i.M_({cause:e,message:o.details});if(i.M_.nodeMessage.test(r))return new i.M_({cause:e,message:e.details});if(i.Hh.nodeMessage.test(r))return new i.Hh({cause:e,maxFeePerGas:t?.maxFeePerGas});if(i.G$.nodeMessage.test(r))return new i.G$({cause:e,maxFeePerGas:t?.maxFeePerGas});if(i.ZI.nodeMessage.test(r))return new i.ZI({cause:e,nonce:t?.nonce});if(i.vU.nodeMessage.test(r))return new i.vU({cause:e,nonce:t?.nonce});if(i.se.nodeMessage.test(r))return new i.se({cause:e,nonce:t?.nonce});else if(i.C_.nodeMessage.test(r))return new i.C_({cause:e});else if(i.WF.nodeMessage.test(r))return new i.WF({cause:e,gas:t?.gas});else if(i.dR.nodeMessage.test(r))return new i.dR({cause:e,gas:t?.gas});else if(i.pZ.nodeMessage.test(r))return new i.pZ({cause:e});else if(i.cs.nodeMessage.test(r))return new i.cs({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas});return new i.cj({cause:e})}},43310:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(6073);function i(e){let t=e.transactions?.map(e=>"string"==typeof e?e:(0,n.Tr)(e));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,difficulty:e.difficulty?BigInt(e.difficulty):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}},61163:function(e,t,r){"use strict";function n(e,{format:t}){if(!t)return{};let r=Object.keys(t({}));return r.reduce((t,r)=>(e?.hasOwnProperty(r)&&(t[r]=e[r]),t),{})}r.d(t,{K:function(){return n}})},6073:function(e,t,r){"use strict";r.d(t,{Tr:function(){return o},c8:function(){return i}});var n=r(95946);let i={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function o(e){let t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,n.ly)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,n.ly)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?i[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),"eip2930"===t.type&&(delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t}},74688:function(e,t,r){"use strict";r.d(t,{tG:function(){return o}});var n=r(92106);let i={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function o(e){return{...e,gas:void 0!==e.gas?(0,n.eC)(e.gas):void 0,gasPrice:void 0!==e.gasPrice?(0,n.eC)(e.gasPrice):void 0,maxFeePerGas:void 0!==e.maxFeePerGas?(0,n.eC)(e.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==e.maxPriorityFeePerGas?(0,n.eC)(e.maxPriorityFeePerGas):void 0,nonce:void 0!==e.nonce?(0,n.eC)(e.nonce):void 0,type:void 0!==e.type?i[e.type]:void 0,value:void 0!==e.value?(0,n.eC)(e.value):void 0}}},74059:function(e,t,r){"use strict";r.d(t,{e:function(){return l}});var n=r(11187),i=r(9e3);let o=e=>(0,i.r)(e);var a=r(56254);let s=e=>(0,a.w)((0,n.O0)(e)),l=e=>s(o(e))},40552:function(e,t,r){"use strict";r.d(t,{o:function(){return l}});var n=r(3972),i=r(11187),o=r(9e3),a=r(56254);let s=e=>(0,a.w)((0,i.O0)(e)),l=e=>(0,n.tP)(s((0,o.r)(e)),0,4)},9e3:function(e,t,r){"use strict";r.d(t,{r:function(){return a}});var n=r(80522);let i=/((function|event)\s)?(.*)(\((.*)\))/;function o(e){let t=e.match(i),r=t?.[2]||void 0,n=t?.[3],o=t?.[5]||void 0;return{type:r,name:n,params:o}}let a=e=>{if("string"==typeof e){let t=o(e).name,r=function(e){let t=o(e).params,r=t?.split(",").map(e=>e.trim().split(" "));return r?.map(e=>({type:e[0],name:"indexed"===e[1]?e[2]:e[1],..."indexed"===e[1]?{indexed:!0}:{}}))}(e)||[];return`${t}(${r.map(({type:e})=>e).join(",")})`}return(0,n.t)(e)}},56254:function(e,t,r){"use strict";function n(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function i(e,...t){if(!(e instanceof Uint8Array))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function o(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}r.d(t,{w:function(){return N}});let a=BigInt(4294967296-1),s=BigInt(32),l=(e,t,r)=>e<<r|t>>>32-r,c=(e,t,r)=>t<<r|e>>>32-r,u=(e,t,r)=>t<<r-32|e>>>64-r,d=(e,t,r)=>e<<r-32|t>>>64-r,h=e=>e instanceof Uint8Array,f=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),p=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0];if(!p)throw Error("Non little-endian hardware is not supported");function g(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}(e)),!h(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));class b{clone(){return this._cloneInto()}}let[w,m,y]=[[],[],[]],v=BigInt(0),x=BigInt(1),C=BigInt(2),E=BigInt(7),k=BigInt(256),S=BigInt(113);for(let e=0,t=x,r=1,n=0;e<24;e++){[r,n]=[n,(2*r+3*n)%5],w.push(2*(5*n+r)),m.push((e+1)*(e+2)/2%64);let i=v;for(let e=0;e<7;e++)(t=(t<<x^(t>>E)*S)%k)&C&&(i^=x<<(x<<BigInt(e))-x);y.push(i)}let[A,$]=function(e,t=!1){let r=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let i=0;i<e.length;i++){let{h:o,l}=function(e,t=!1){return t?{h:Number(e&a),l:Number(e>>s&a)}:{h:0|Number(e>>s&a),l:0|Number(e&a)}}(e[i],t);[r[i],n[i]]=[o,l]}return[r,n]}(y,!0),P=(e,t,r)=>r>32?u(e,t,r):l(e,t,r),_=(e,t,r)=>r>32?d(e,t,r):c(e,t,r);class D extends b{constructor(e,t,r,i=!1,o=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=r,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,n(r),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=f(this.state)}keccak(){!function(e,t=24){let r=new Uint32Array(10);for(let n=24-t;n<24;n++){for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let n=(t+8)%10,i=(t+2)%10,o=r[i],a=r[i+1],s=P(o,a,1)^r[n],l=_(o,a,1)^r[n+1];for(let r=0;r<50;r+=10)e[t+r]^=s,e[t+r+1]^=l}let t=e[2],i=e[3];for(let r=0;r<24;r++){let n=m[r],o=P(t,i,n),a=_(t,i,n),s=w[r];t=e[s],i=e[s+1],e[s]=o,e[s+1]=a}for(let t=0;t<50;t+=10){for(let n=0;n<10;n++)r[n]=e[t+n];for(let n=0;n<10;n++)e[t+n]^=~r[(n+2)%10]&r[(n+4)%10]}e[0]^=A[n],e[1]^=$[n]}r.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){o(this);let{blockLen:t,state:r}=this;e=g(e);let n=e.length;for(let i=0;i<n;){let o=Math.min(t-this.pos,n-i);for(let t=0;t<o;t++)r[this.pos++]^=e[i++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:r,blockLen:n}=this;e[r]^=t,(128&t)!=0&&r===n-1&&this.keccak(),e[n-1]^=128,this.keccak()}writeInto(e){o(this,!1),i(e),this.finish();let t=this.state,{blockLen:r}=this;for(let n=0,i=e.length;n<i;){this.posOut>=r&&this.keccak();let o=Math.min(r-this.posOut,i-n);e.set(t.subarray(this.posOut,this.posOut+o),n),this.posOut+=o,n+=o}return e}xofInto(e){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return n(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(!function(e,t){i(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}(e,this),this.finished)throw Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:t,suffix:r,outputLen:n,rounds:i,enableXOF:o}=this;return e||(e=new D(t,r,n,o,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=r,e.outputLen=n,e.enableXOF=o,e.destroyed=this.destroyed,e}}let O=function(e){let t=t=>e().update(g(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}(()=>new D(136,1,32));var I=r(15102),T=r(11187),R=r(92106);function N(e,t){let r=O((0,I.v)(e,{strict:!1})?(0,T.O0)(e):e);return"bytes"===(t||"hex")?r:(0,R.NC)(r)}},32357:function(e,t,r){"use strict";r.d(t,{S:function(){return i}});let n=new Map;function i({fn:e,id:t,shouldSplitBatch:r,wait:i=0}){let o=async()=>{let t=l();a();let r=t.map(({args:e})=>e);0!==r.length&&e(r).then(e=>{t.forEach(({pendingPromise:t},r)=>t.resolve?.([e[r],e]))}).catch(e=>{t.forEach(({pendingPromise:t})=>t.reject?.(e))})},a=()=>n.delete(t),s=()=>l().map(({args:e})=>e),l=()=>n.get(t)||[],c=e=>n.set(t,[...l(),e]);return{flush:a,async schedule(e){let t={},n=new Promise((e,r)=>{t.resolve=e,t.reject=r}),a=r?.([...s(),e]);a&&o();let u=l().length>0;return u?(c({args:e,pendingPromise:t}),n):(c({args:e,pendingPromise:t}),setTimeout(o,i),n)}}}},7760:function(e,t,r){"use strict";r.d(t,{J:function(){return i}});var n=r(62914);function i(e,{delay:t=100,retryCount:r=2,shouldRetry:i=()=>!0}={}){return new Promise((o,a)=>{let s=async({count:l=0}={})=>{let c=async({error:e})=>{let r="function"==typeof t?t({count:l,error:e}):t;r&&await (0,n.D)(r),s({count:l+1})};try{let t=await e();o(t)}catch(e){if(l<r&&await i({count:l,error:e}))return c({error:e});a(e)}};s()})}},96070:function(e,t,r){"use strict";r.d(t,{P:function(){return n}});let n=(e,t,r)=>JSON.stringify(e,(e,r)=>{let n="bigint"==typeof r?r.toString():r;return"function"==typeof t?t(e,n):n},r)},47531:function(e,t,r){"use strict";r.d(t,{F:function(){return l}});var n=r(14503),i=r(26087),o=r(26445),a=r(33639),s=r(49321);function l(e){let{account:t,gasPrice:r,maxFeePerGas:l,maxPriorityFeePerGas:c,to:u}=e,d=t?(0,n.T)(t):void 0;if(d&&!(0,s.U)(d.address))throw new i.b({address:d.address});if(u&&!(0,s.U)(u))throw new i.b({address:u});if(void 0!==r&&(void 0!==l||void 0!==c))throw new a.xY;if(l&&l>2n**256n-1n)throw new o.Hh({maxFeePerGas:l});if(c&&l&&c>l)throw new o.cs({maxFeePerGas:l,maxPriorityFeePerGas:c})}},71352:function(e,t,r){"use strict";r.d(t,{cj:function(){return d},iC:function(){return u}});var n=r(57412),i=r(26087),o=r(49321),a=r(39135),s=r(92106);let l=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,c=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function u({domain:e,message:t,primaryType:r,types:u}){let d=(e,t)=>{for(let r of e){let{name:e,type:h}=r,f=t[e],p=h.match(c);if(p&&("number"==typeof f||"bigint"==typeof f)){let[e,t,r]=p;(0,s.eC)(f,{signed:"int"===t,size:parseInt(r)/8})}if("address"===h&&"string"==typeof f&&!(0,o.U)(f))throw new i.b({address:f});let g=h.match(l);if(g){let[e,t]=g;if(t&&(0,a.d)(f)!==parseInt(t))throw new n.KY({expectedSize:parseInt(t),givenSize:(0,a.d)(f)})}let b=u[h];b&&d(b,f)}};if(u.EIP712Domain&&e&&d(u.EIP712Domain,e),"EIP712Domain"!==r){let e=u[r];d(e,t)}}function d({domain:e}){return["string"==typeof e?.name&&{name:"name",type:"string"},e?.version&&{name:"version",type:"string"},"number"==typeof e?.chainId&&{name:"chainId",type:"uint256"},e?.verifyingContract&&{name:"verifyingContract",type:"address"},e?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}},39625:function(e,t,r){"use strict";r.d(t,{d:function(){return o}});var n=r(84192),i=r(15229);function o(e,t="wei"){return(0,i.b)(e,n.ez[t])}},15460:function(e,t,r){"use strict";r.d(t,{o:function(){return o}});var n=r(84192),i=r(15229);function o(e,t="wei"){return(0,i.b)(e,n.Zn[t])}},15229:function(e,t,r){"use strict";function n(e,t){let r=e.toString(),n=r.startsWith("-");n&&(r=r.slice(1));let[i,o]=[(r=r.padStart(t,"0")).slice(0,r.length-t),r.slice(r.length-t)];return o=o.replace(/(0+)$/,""),`${n?"-":""}${i||"0"}${o?`.${o}`:""}`}r.d(t,{b:function(){return n}})},62914:function(e,t,r){"use strict";async function n(e){return new Promise(t=>setTimeout(t,e))}r.d(t,{D:function(){return n}})},57421:function(e,t,r){"use strict";function n(){}r.d(t,{eM:function(){return ea},_g:function(){return en},mA:function(){return ec},$4:function(){return eh}});let i="undefined"==typeof window||"Deno"in window;function o(){}function a(e,t,r){return w(e)?"function"==typeof t?{...r,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function s(e,t,r){return w(e)?"function"==typeof t?{...r,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:"function"==typeof e?{...t,mutationFn:e}:{...e}}function l(e,t,r){return w(e)?[{...t,queryKey:e},r]:[e||{},t]}function c(e,t){let{type:r="all",exact:n,fetchStatus:i,predicate:o,queryKey:a,stale:s}=e;if(w(a)){if(n){if(t.queryHash!==d(a,t.options))return!1}else{if(!f(t.queryKey,a))return!1}}if("all"!==r){let e=t.isActive();if("active"===r&&!e||"inactive"===r&&e)return!1}return("boolean"!=typeof s||t.isStale()===s)&&(void 0===i||i===t.state.fetchStatus)&&(!o||!!o(t))}function u(e,t){let{exact:r,fetching:n,predicate:i,mutationKey:o}=e;if(w(o)){if(!t.options.mutationKey)return!1;if(r){if(h(t.options.mutationKey)!==h(o))return!1}else{if(!f(t.options.mutationKey,o))return!1}}return("boolean"!=typeof n||"loading"===t.state.status===n)&&(!i||!!i(t))}function d(e,t){let r=(null==t?void 0:t.queryKeyHashFn)||h;return r(e)}function h(e){return JSON.stringify(e,(e,t)=>g(t)?Object.keys(t).sort().reduce((e,r)=>(e[r]=t[r],e),{}):t)}function f(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(r=>!f(e[r],t[r]))}function p(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function g(e){if(!b(e))return!1;let t=e.constructor;if(void 0===t)return!0;let r=t.prototype;return!!(b(r)&&r.hasOwnProperty("isPrototypeOf"))}function b(e){return"[object Object]"===Object.prototype.toString.call(e)}function w(e){return Array.isArray(e)}function m(e){return new Promise(t=>{setTimeout(t,e)})}function y(e){m(0).then(e)}let v=console,x=function(){let e=[],t=0,r=e=>{e()},n=e=>{e()},i=e=>{let r;t++;try{r=e()}finally{--t||s()}return r},o=n=>{t?e.push(n):y(()=>{r(n)})},a=e=>(...t)=>{o(()=>{e(...t)})},s=()=>{let t=e;e=[],t.length&&y(()=>{n(()=>{t.forEach(e=>{r(e)})})})},l=e=>{r=e},c=e=>{n=e};return{batch:i,batchCalls:a,schedule:o,setNotifyFunction:l,setBatchNotifyFunction:c}}();class C{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){let t={listener:e};return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}let E=new class extends C{constructor(){super(),this.setup=e=>{if(!i&&window.addEventListener){let t=()=>e();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){let t=this.focused!==e;t&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}},k=["online","offline"],S=new class extends C{constructor(){super(),this.setup=e=>{if(!i&&window.addEventListener){let t=()=>e();return k.forEach(e=>{window.addEventListener(e,t,!1)}),()=>{k.forEach(e=>{window.removeEventListener(e,t)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()})}setOnline(e){let t=this.online!==e;t&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}};function A(e){return Math.min(1e3*2**e,3e4)}function $(e){return(null!=e?e:"online")!=="online"||S.isOnline()}class P{constructor(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent}}function _(e){return e instanceof P}function D(e){let t,r,n,i=!1,o=0,a=!1,s=new Promise((e,t)=>{r=e,n=t}),l=t=>{a||(f(new P(t)),null==e.abort||e.abort())},c=()=>{i=!0},u=()=>{i=!1},d=()=>!E.isFocused()||"always"!==e.networkMode&&!S.isOnline(),h=n=>{a||(a=!0,null==e.onSuccess||e.onSuccess(n),null==t||t(),r(n))},f=r=>{a||(a=!0,null==e.onError||e.onError(r),null==t||t(),n(r))},p=()=>new Promise(r=>{t=e=>{let t=a||!d();return t&&r(e),t},null==e.onPause||e.onPause()}).then(()=>{t=void 0,a||null==e.onContinue||e.onContinue()}),g=()=>{let t;if(!a){try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(h).catch(t=>{var r,n;if(a)return;let s=null!=(r=e.retry)?r:3,l=null!=(n=e.retryDelay)?n:A,c="function"==typeof l?l(o,t):l,u=!0===s||"number"==typeof s&&o<s||"function"==typeof s&&s(o,t);if(i||!u){f(t);return}o++,null==e.onFail||e.onFail(o,t),m(c).then(()=>{if(d())return p()}).then(()=>{i?f(t):g()})})}};return $(e.networkMode)?g():p().then(g),{promise:s,cancel:l,continue:()=>{let e=null==t?void 0:t();return e?s:Promise.resolve()},cancelRetry:c,continueRetry:u}}class O{destroy(){this.clearGcTimeout()}scheduleGc(){var e;this.clearGcTimeout(),"number"==typeof(e=this.cacheTime)&&e>=0&&e!==1/0&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,null!=e?e:i?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class I extends O{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||v,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,r=void 0!==t,n=r?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?null!=n?n:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(e,t){var r,n;let i=(r=this.state.data,null!=(n=this.options).isDataEqual&&n.isDataEqual(r,e)?r:"function"==typeof n.structuralSharing?n.structuralSharing(r,e):!1!==n.structuralSharing?function e(t,r){if(t===r)return t;let n=p(t)&&p(r);if(n||g(t)&&g(r)){let i=n?t.length:Object.keys(t).length,o=n?r:Object.keys(r),a=o.length,s=n?[]:{},l=0;for(let i=0;i<a;i++){let a=n?i:o[i];s[a]=e(t[a],r[a]),s[a]===t[a]&&l++}return i===a&&l===i?t:s}return r}(r,e):e);return this.dispatch({data:i,type:"success",dataUpdatedAt:null==t?void 0:t.updatedAt,manual:null==t?void 0:t.manual}),i}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;let r=this.promise;return null==(t=this.retryer)||t.cancel(e),r?r.then(o).catch(o):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>!1!==e.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!Math.max(this.state.dataUpdatedAt+(e||0)-Date.now(),0)}onFocus(){var e;let t=this.observers.find(e=>e.shouldFetchOnWindowFocus());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}onOnline(){var e;let t=this.observers.find(e=>e.shouldFetchOnReconnect());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var r,n,i,o;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=t&&t.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(i=this.retryer)||i.continueRetry(),this.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let a=function(){if("function"==typeof AbortController)return new AbortController}(),s={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{if(a)return this.abortSignalConsumed=!0,a.signal}})};l(s);let c=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(s)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),u={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:c};l(u),null==(r=this.options.behavior)||r.onFetch(u),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(n=u.fetchOptions)?void 0:n.meta))&&this.dispatch({type:"fetch",meta:null==(o=u.fetchOptions)?void 0:o.meta});let d=e=>{if(_(e)&&e.silent||this.dispatch({type:"error",error:e}),!_(e)){var t,r,n,i;null==(t=(r=this.cache.config).onError)||t.call(r,e,this),null==(n=(i=this.cache.config).onSettled)||n.call(i,this.state.data,e,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=D({fn:u.fetchFn,abort:null==a?void 0:a.abort.bind(a),onSuccess:e=>{var t,r,n,i;if(void 0===e){d(Error(this.queryHash+" data is undefined"));return}this.setData(e),null==(t=(r=this.cache.config).onSuccess)||t.call(r,e,this),null==(n=(i=this.cache.config).onSettled)||n.call(i,e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:d,onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:u.options.retry,retryDelay:u.options.retryDelay,networkMode:u.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){this.state=(t=>{var r,n;switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(r=e.meta)?r:null,fetchStatus:$(this.options.networkMode)?"fetching":"paused",...!t.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:null!=(n=e.dataUpdatedAt)?n:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let i=e.error;if(_(i)&&i.revert&&this.revertState)return{...this.revertState,fetchStatus:"idle"};return{...t,error:i,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),x.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}class T extends C{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,r){var n;let i=t.queryKey,o=null!=(n=t.queryHash)?n:d(i,t),a=this.get(o);return a||(a=new I({cache:this,logger:e.getLogger(),queryKey:i,queryHash:o,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(a)),a}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){let t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter(t=>t!==e),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){x.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){let[r]=l(e,t);return void 0===r.exact&&(r.exact=!0),this.queries.find(e=>c(r,e))}findAll(e,t){let[r]=l(e,t);return Object.keys(r).length>0?this.queries.filter(e=>c(r,e)):this.queries}notify(e){x.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}onFocus(){x.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){x.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class R extends O{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||v,this.observers=[],this.state=e.state||N(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(t=>t!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,t;return null!=(e=null==(t=this.retryer)?void 0:t.continue())?e:this.execute()}async execute(){var e,t,r,n,i,o,a,s,l,c,u,d,h,f,p,g,b,w,m,y;let v="loading"===this.state.status;try{if(!v){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(l=(c=this.mutationCache.config).onMutate)?void 0:l.call(c,this.state.variables,this));let e=await (null==(u=(d=this.options).onMutate)?void 0:u.call(d,this.state.variables));e!==this.state.context&&this.dispatch({type:"loading",context:e,variables:this.state.variables})}let h=await (()=>{var e;return this.retryer=D({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(e=this.options.retry)?e:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(e=(t=this.mutationCache.config).onSuccess)?void 0:e.call(t,h,this.state.variables,this.state.context,this)),await (null==(r=(n=this.options).onSuccess)?void 0:r.call(n,h,this.state.variables,this.state.context)),await (null==(i=(o=this.mutationCache.config).onSettled)?void 0:i.call(o,h,null,this.state.variables,this.state.context,this)),await (null==(a=(s=this.options).onSettled)?void 0:a.call(s,h,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:h}),h}catch(e){try{throw await (null==(h=(f=this.mutationCache.config).onError)?void 0:h.call(f,e,this.state.variables,this.state.context,this)),await (null==(p=(g=this.options).onError)?void 0:p.call(g,e,this.state.variables,this.state.context)),await (null==(b=(w=this.mutationCache.config).onSettled)?void 0:b.call(w,void 0,e,this.state.variables,this.state.context,this)),await (null==(m=(y=this.options).onSettled)?void 0:m.call(y,void 0,e,this.state.variables,this.state.context)),e}finally{this.dispatch({type:"error",error:e})}}}dispatch(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"loading":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!$(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...t,...e.state}}})(this.state),x.batch(()=>{this.observers.forEach(t=>{t.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function N(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class j extends C{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,r){let n=new R({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:r,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0});return this.add(n),n}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){x.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return void 0===e.exact&&(e.exact=!0),this.mutations.find(t=>u(e,t))}findAll(e){return this.mutations.filter(t=>u(e,t))}notify(e){x.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}resumePausedMutations(){var e;return this.resuming=(null!=(e=this.resuming)?e:Promise.resolve()).then(()=>{let e=this.mutations.filter(e=>e.state.isPaused);return x.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(o)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function M(e,t){return null==e.getNextPageParam?void 0:e.getNextPageParam(t[t.length-1],t)}class B{constructor(e={}){this.queryCache=e.queryCache||new T,this.mutationCache=e.mutationCache||new j,this.logger=e.logger||v,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=E.subscribe(()=>{E.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=S.subscribe(()=>{S.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,t;this.mountCount--,0===this.mountCount&&(null==(e=this.unsubscribeFocus)||e.call(this),this.unsubscribeFocus=void 0,null==(t=this.unsubscribeOnline)||t.call(this),this.unsubscribeOnline=void 0)}isFetching(e,t){let[r]=l(e,t);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,t){var r;return null==(r=this.queryCache.find(e,t))?void 0:r.state.data}ensureQueryData(e,t,r){let n=a(e,t,r),i=this.getQueryData(n.queryKey);return i?Promise.resolve(i):this.fetchQuery(n)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:e,state:t})=>{let r=t.data;return[e,r]})}setQueryData(e,t,r){let n=this.queryCache.find(e),i=null==n?void 0:n.state.data,o="function"==typeof t?t(i):t;if(void 0===o)return;let s=a(e),l=this.defaultQueryOptions(s);return this.queryCache.build(this,l).setData(o,{...r,manual:!0})}setQueriesData(e,t,r){return x.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e,t){var r;return null==(r=this.queryCache.find(e,t))?void 0:r.state}removeQueries(e,t){let[r]=l(e,t),n=this.queryCache;x.batch(()=>{n.findAll(r).forEach(e=>{n.remove(e)})})}resetQueries(e,t,r){let[n,i]=l(e,t,r),o=this.queryCache,a={type:"active",...n};return x.batch(()=>(o.findAll(n).forEach(e=>{e.reset()}),this.refetchQueries(a,i)))}cancelQueries(e,t,r){let[n,i={}]=l(e,t,r);void 0===i.revert&&(i.revert=!0);let a=x.batch(()=>this.queryCache.findAll(n).map(e=>e.cancel(i)));return Promise.all(a).then(o).catch(o)}invalidateQueries(e,t,r){let[n,i]=l(e,t,r);return x.batch(()=>{var e,t;if(this.queryCache.findAll(n).forEach(e=>{e.invalidate()}),"none"===n.refetchType)return Promise.resolve();let r={...n,type:null!=(e=null!=(t=n.refetchType)?t:n.type)?e:"active"};return this.refetchQueries(r,i)})}refetchQueries(e,t,r){let[n,i]=l(e,t,r),a=x.batch(()=>this.queryCache.findAll(n).filter(e=>!e.isDisabled()).map(e=>{var t;return e.fetch(void 0,{...i,cancelRefetch:null==(t=null==i?void 0:i.cancelRefetch)||t,meta:{refetchPage:n.refetchPage}})})),s=Promise.all(a).then(o);return null!=i&&i.throwOnError||(s=s.catch(o)),s}fetchQuery(e,t,r){let n=a(e,t,r),i=this.defaultQueryOptions(n);void 0===i.retry&&(i.retry=!1);let o=this.queryCache.build(this,i);return o.isStaleByTime(i.staleTime)?o.fetch(i):Promise.resolve(o.state.data)}prefetchQuery(e,t,r){return this.fetchQuery(e,t,r).then(o).catch(o)}fetchInfiniteQuery(e,t,r){let n=a(e,t,r);return n.behavior={onFetch:e=>{e.fetchFn=()=>{var t,r,n,i,o,a,s;let l;let c=null==(t=e.fetchOptions)?void 0:null==(r=t.meta)?void 0:r.refetchPage,u=null==(n=e.fetchOptions)?void 0:null==(i=n.meta)?void 0:i.fetchMore,d=null==u?void 0:u.pageParam,h=(null==u?void 0:u.direction)==="forward",f=(null==u?void 0:u.direction)==="backward",p=(null==(o=e.state.data)?void 0:o.pages)||[],g=(null==(a=e.state.data)?void 0:a.pageParams)||[],b=g,w=!1,m=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{var t,r;return null!=(t=e.signal)&&t.aborted?w=!0:null==(r=e.signal)||r.addEventListener("abort",()=>{w=!0}),e.signal}})},y=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),v=(e,t,r,n)=>(b=n?[t,...b]:[...b,t],n?[r,...e]:[...e,r]),x=(t,r,n,i)=>{if(w)return Promise.reject("Cancelled");if(void 0===n&&!r&&t.length)return Promise.resolve(t);let o={queryKey:e.queryKey,pageParam:n,meta:e.options.meta};m(o);let a=y(o),s=Promise.resolve(a).then(e=>v(t,n,e,i));return s};if(p.length){if(h){let t=void 0!==d,r=t?d:M(e.options,p);l=x(p,t,r)}else if(f){let t=void 0!==d,r=t?d:null==(s=e.options).getPreviousPageParam?void 0:s.getPreviousPageParam(p[0],p);l=x(p,t,r,!0)}else{b=[];let t=void 0===e.options.getNextPageParam,r=!c||!p[0]||c(p[0],0,p);l=r?x([],t,g[0]):Promise.resolve(v([],g[0],p[0]));for(let r=1;r<p.length;r++)l=l.then(n=>{let i=!c||!p[r]||c(p[r],r,p);if(i){let i=t?g[r]:M(e.options,n);return x(n,t,i)}return Promise.resolve(v(n,g[r],p[r]))})}}else l=x([]);let C=l.then(e=>({pages:e,pageParams:b}));return C}}},this.fetchQuery(n)}prefetchInfiniteQuery(e,t,r){return this.fetchInfiniteQuery(e,t,r).then(o).catch(o)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){let r=this.queryDefaults.find(t=>h(e)===h(t.queryKey));r?r.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){if(!e)return;let t=this.queryDefaults.find(t=>f(e,t.queryKey));return null==t?void 0:t.defaultOptions}setMutationDefaults(e,t){let r=this.mutationDefaults.find(t=>h(e)===h(t.mutationKey));r?r.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){if(!e)return;let t=this.mutationDefaults.find(t=>f(e,t.mutationKey));return null==t?void 0:t.defaultOptions}defaultQueryOptions(e){if(null!=e&&e._defaulted)return e;let t={...this.defaultOptions.queries,...this.getQueryDefaults(null==e?void 0:e.queryKey),...e,_defaulted:!0};return!t.queryHash&&t.queryKey&&(t.queryHash=d(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.useErrorBoundary&&(t.useErrorBoundary=!!t.suspense),t}defaultMutationOptions(e){return null!=e&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==e?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}function U(e){return e.state.isPaused}function L(e){return"success"===e.state.status}let z=["added","removed","updated"];function F(e){return z.includes(e)}async function W({queryClient:e,persister:t,maxAge:r=864e5,buster:n="",hydrateOptions:i}){try{let o=await t.restoreClient();if(o){if(o.timestamp){let a=Date.now()-o.timestamp>r,s=o.buster!==n;a||s?t.removeClient():function(e,t,r){if("object"!=typeof t||null===t)return;let n=e.getMutationCache(),i=e.getQueryCache(),o=t.mutations||[],a=t.queries||[];o.forEach(t=>{var i;n.build(e,{...null==r?void 0:null==(i=r.defaultOptions)?void 0:i.mutations,mutationKey:t.mutationKey},t.state)}),a.forEach(({queryKey:t,state:n,queryHash:o})=>{var a;let s=i.get(o);if(s){if(s.state.dataUpdatedAt<n.dataUpdatedAt){let{fetchStatus:e,...t}=n;s.setState(t)}return}i.build(e,{...null==r?void 0:null==(a=r.defaultOptions)?void 0:a.queries,queryKey:t,queryHash:o},{...n,fetchStatus:"idle"})})}(e,o.clientState,i)}else t.removeClient()}}catch(e){t.removeClient()}}async function H({queryClient:e,persister:t,buster:r="",dehydrateOptions:n}){let i={buster:r,timestamp:Date.now(),clientState:function(e,t={}){let r=[],n=[];if(!1!==t.dehydrateMutations){let n=t.shouldDehydrateMutation||U;e.getMutationCache().getAll().forEach(e=>{n(e)&&r.push({mutationKey:e.options.mutationKey,state:e.state})})}if(!1!==t.dehydrateQueries){let r=t.shouldDehydrateQuery||L;e.getQueryCache().getAll().forEach(e=>{r(e)&&n.push({state:e.state,queryKey:e.queryKey,queryHash:e.queryHash})})}return{mutations:r,queries:n}}(e,n)};await t.persistClient(i)}var q=r(57974),G=r(67294);let Z=G.createContext(void 0),V=G.createContext(!1);function K(e,t){return e||(t&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Z),window.ReactQueryClientContext):Z)}let Q=({context:e}={})=>{let t=G.useContext(K(e,G.useContext(V)));if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},Y=({client:e,children:t,context:r,contextSharing:n=!1})=>{G.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);let i=K(r,n);return G.createElement(V.Provider,{value:!r&&n},G.createElement(i.Provider,{value:e},t))};var X=r(61688);class J extends C{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var t;let r=this.options;this.options=this.client.defaultMutationOptions(e),!function(e,t){if(e&&!t||t&&!e)return!1;for(let r in e)if(e[r]!==t[r])return!1;return!0}(r,this.options)&&this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(t=this.currentMutation)||t.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.currentMutation)||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();let t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==e?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let e=this.currentMutation?this.currentMutation.state:N(),t={...e,isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(e){x.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var t,r,n,i,o,a,s,l;e.onSuccess?(null==(t=(r=this.mutateOptions).onSuccess)||t.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(n=(i=this.mutateOptions).onSettled)||n.call(i,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):e.onError&&(null==(o=(a=this.mutateOptions).onError)||o.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(s=(l=this.mutateOptions).onSettled)||s.call(l,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)})})}}let ee=X.useSyncExternalStore;function et(){}var er=r(52798);function en({queryClient:e=new B({defaultOptions:{queries:{cacheTime:864e5,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:t=(0,q.o6)({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:q.wp}),persister:r="undefined"!=typeof window?function({storage:e,key:t="REACT_QUERY_OFFLINE_CACHE",throttleTime:r=1e3,serialize:i=JSON.stringify,deserialize:o=JSON.parse,retry:a}){if(e){let n=r=>{try{e.setItem(t,i(r));return}catch(e){return e}};return{persistClient:function(e,t=100){let r=null;return function(...n){null===r&&(r=setTimeout(()=>{e(...n),r=null},t))}}(e=>{let t=e,r=n(t),i=0;for(;r&&t;)i++,(t=null==a?void 0:a({persistedClient:t,error:r,errorCount:i}))&&(r=n(t))},r),restoreClient:()=>{let r=e.getItem(t);if(r)return o(r)},removeClient:()=>{e.removeItem(t)}}}return{persistClient:n,restoreClient:()=>void 0,removeClient:n}}({key:"cache",storage:t,serialize:e=>e,deserialize:e=>e}):void 0,...i}){let o=(0,q._g)({...i,storage:t});return r&&function(e){let t;W(e).then(()=>{(function(e){let t=e.queryClient.getQueryCache().subscribe(t=>{F(t.type)&&H(e)}),r=e.queryClient.getMutationCache().subscribe(t=>{F(t.type)&&H(e)});()=>{t(),r()}})(e)})}({queryClient:e,persister:r,dehydrateOptions:{shouldDehydrateQuery:e=>0!==e.cacheTime&&!1!==e.queryKey[0].persist}}),Object.assign(o,{queryClient:e})}var ei=G.createContext(void 0),eo=G.createContext(void 0);function ea({children:e,config:t}){return G.createElement(ei.Provider,{children:G.createElement(Y,{children:e,client:t.queryClient,context:eo}),value:t})}function es(){let e=G.useContext(ei);if(!e)throw Error("`useConfig` must be used within `WagmiConfig`.\n\nRead more: https://wagmi.sh/react/WagmiConfig");return e}X.useSyncExternalStore;var el=e=>"object"==typeof e&&!Array.isArray(e);function ec({onConnect:e,onDisconnect:t}={}){let r=es(),n=G.useCallback(e=>(0,q.uH)(e),[r]),i=function(e,t,r=t,n=q.vZ){let i=G.useRef([]),o=(0,er.useSyncExternalStoreWithSelector)(e,t,r,e=>e,(e,t)=>{if(el(e)&&el(t)&&i.current.length){for(let r of i.current){let i=n(e[r],t[r]);if(!i)return!1}return!0}return n(e,t)});if(el(o)){let e={...o};return Object.defineProperties(e,Object.entries(e).reduce((e,[t,r])=>({...e,[t]:{configurable:!1,enumerable:!0,get:()=>(i.current.includes(t)||i.current.push(t),r)}}),{})),e}return o}(n,q.D0),o=G.useRef(),a=o.current;return G.useEffect(()=>{a?.status!=="connected"&&"connected"===i.status&&e?.({address:i.address,connector:i.connector,isReconnected:a?.status==="reconnecting"||a?.status===void 0}),a?.status==="connected"&&"disconnected"===i.status&&t?.(),o.current=i},[e,t,a,i]),i}var eu=e=>[{entity:"connect",...e}],ed=e=>{let{connector:t,chainId:r}=e;if(!t)throw Error("connector is required");return(0,q.$j)({connector:t,chainId:r})};function eh({chainId:e,connector:t,onError:r,onMutate:n,onSettled:i,onSuccess:o}={}){let a=es(),{data:l,error:c,isError:u,isIdle:d,isLoading:h,isSuccess:f,mutate:p,mutateAsync:g,reset:b,status:w,variables:m}=function(e,t,r){let n=s(e,t,r);return function(e,t,r){var n,i;let o=s(e,void 0,void 0),a=Q({context:o.context}),[l]=G.useState(()=>new J(a,o));G.useEffect(()=>{l.setOptions(o)},[l,o]);let c=ee(G.useCallback(e=>l.subscribe(x.batchCalls(e)),[l]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),u=G.useCallback((e,t)=>{l.mutate(e,t).catch(et)},[l]);if(c.error&&(n=l.options.useErrorBoundary,i=[c.error],"function"==typeof n?n(...i):!!n))throw c.error;return{...c,mutate:u,mutateAsync:c.mutate}}({context:eo,...n})}(eu({connector:t,chainId:e}),ed,{onError:r,onMutate:n,onSettled:i,onSuccess:o}),y=G.useCallback(r=>p({chainId:r?.chainId??e,connector:r?.connector??t}),[e,t,p]),v=G.useCallback(r=>g({chainId:r?.chainId??e,connector:r?.connector??t}),[e,t,g]);return{connect:y,connectAsync:v,connectors:a.connectors,data:l,error:c,isError:u,isIdle:d,isLoading:h,isSuccess:f,pendingConnector:m?.connector,reset:b,status:w,variables:m}}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(91118),t(80880)}),_N_E=e.O()}]);