(this["webpackJsonpnordic-energy-uniswap"]=this["webpackJsonpnordic-energy-uniswap"]||[]).push([[5],{962:function(e,t,n){"use strict";var r=n(36),a=n(47),i=n(44),u=n(20),c=n(43),l=n(4),o=n(0),s=n.n(o),m=n(5),d=n(961),b=n.n(d),f=n(963),p=n.n(f);function h(){var e=Object(l.a)(["\n  ",";\n  color: ",";\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n\n  span {\n    margin-right: 12px;\n  }\n\n  img {\n    height: 0.75rem;\n    width: 0.75rem;\n  }\n"]);return h=function(){return e},e}function E(){var e=Object(l.a)(["\n  background-color: ",";\n  padding: 1.5rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  margin-top: 1rem;\n"]);return E=function(){return e},e}function v(){var e=Object(l.a)(["\n  color: ",";\n  font-size: 0.75rem;\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n"]);return v=function(){return e},e}var g=m.d.div(v(),(function(e){var t=e.error,n=e.theme;return t?n.salmonRed:n.doveGray})),y=m.d.div(E(),(function(e){return e.theme.concreteGray})),j=m.d.div(h(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.royalBlue})),O=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={showDetails:!1},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"renderDetails",value:function(){return this.state.showDetails?s.a.createElement(y,null,this.props.renderTransactionDetails()):null}},{key:"render",value:function(){var e=this,t=this.props,n=t.openDetailsText,r=t.closeDetailsText,a=t.contextualInfo,i=t.isError;return a?s.a.createElement(g,{error:i},a):s.a.createElement(s.a.Fragment,null,s.a.createElement(j,{onClick:function(){return e.setState((function(e){return{showDetails:!e.showDetails}}))}},this.state.showDetails?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,r),s.a.createElement("img",{src:p.a,alt:"dropup"})):s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,n),s.a.createElement("img",{src:b.a,alt:"dropdown"}))),this.renderDetails())}}]),t}(o.Component);O.defaultProps={openDetailsText:"Transaction Details",closeDetailsText:"Hide Details",renderTransactionDetails:function(){},contextualInfo:"",isError:!1},t.a=O},963:function(e,t,n){e.exports=n.p+"static/media/dropup-blue.b96d70e1.svg"},968:function(e,t,n){e.exports=n.p+"static/media/plus-blue.e8021e51.svg"},969:function(e,t,n){e.exports=n.p+"static/media/plus-grey.d8e0be7d.svg"},972:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return re}));var r=n(18),a=n.n(r),i=n(42),u=n(11),c=n(13),l=n(4),o=n(0),s=n.n(o),m=n(59),d=n(10),b=n(14),f=n(123),p=n(5),h=n(26),E=n(959),v=n(956),g=n(962),y=n(968),j=n.n(y),O=n(969),N=n.n(O),T=n(71),x=n(6),D=n(86),w=n(106),U=n(174),A=n(175);function V(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n\n  button {\n    max-width: 20rem;\n  }\n"]);return V=function(){return e},e}function k(){var e=Object(l.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  color: ",";\n"]);return k=function(){return e},e}function C(){var e=Object(l.a)(["\n  ",";\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  padding: 0.25rem 1rem 0;\n"]);return C=function(){return e},e}function P(){var e=Object(l.a)(["\n  ","\n  padding: 1rem 0;\n"]);return P=function(){return e},e}function L(){var e=Object(l.a)(["\n  width: 0.625rem;\n  height: 0.625rem;\n  position: relative;\n  padding: 0.875rem;\n"]);return L=function(){return e},e}function S(){var e=Object(l.a)(["\n  ","\n  justify-content: center;\n  align-items: center;\n"]);return S=function(){return e},e}function M(){var e=Object(l.a)(["\n  margin-top: 1rem;\n"]);return M=function(){return e},e}function _(){var e=Object(l.a)(["\n  font-size: 0.75rem;\n  line-height: 1rem;\n  text-align: center;\n\n  :first-child {\n    padding-bottom: 0.3rem;\n    font-weight: 500;\n  }\n"]);return _=function(){return e},e}function z(){var e=Object(l.a)(["\n  margin-top: 1rem;\n  padding: 1rem;\n  margin-bottom: 2rem;\n  border: 1px solid rgba($pizazz-orange, 0.4);\n  background-color: rgba($pizazz-orange, 0.1);\n  border-radius: 1rem;\n"]);return z=function(){return e},e}function H(){var e=Object(l.a)(["\n  color: ",";\n"]);return H=function(){return e},e}var R=b.ethers.utils.bigNumberify(200),Z=b.ethers.utils.bigNumberify(1e3),W=p.d.span(H(),(function(e){return e.theme.royalBlue})),q=p.d.div(z()),F=p.d.div(_()),B=p.d.div(M()),I=p.d.div(S(),(function(e){return e.theme.flexRowNoWrap})),G=p.d.img(L()),J=p.d.div(P(),(function(e){return e.theme.flexColumnNoWrap})),Y=p.d.div(C(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGray})),$=p.d.span(k(),(function(e){return e.theme.chaliceGray})),K=p.d.div(V());function Q(e){if(e){var t=e.mul(R).div(b.ethers.utils.bigNumberify(1e4)),n=e.sub(t),r=e.add(t);return{minimum:n.lt(b.ethers.constants.Zero)?b.ethers.constants.Zero:n,maximum:r.gt(b.ethers.constants.MaxUint256)?b.ethers.constants.MaxUint256:r}}return{}}var X={inputValue:"",outputValue:"",lastEditedField:0,outputCurrency:""};function ee(e,t){switch(t.type){case"SELECT_CURRENCY":return Object(c.a)({},e,{outputCurrency:t.payload});case"UPDATE_VALUE":var n=e.inputValue,r=e.outputValue,a=t.payload,i=a.field,u=a.value;return Object(c.a)({},e,{inputValue:0===i?u:n,outputValue:1===i?u:r,lastEditedField:i});case"UPDATE_DEPENDENT_VALUE":var l=e.inputValue,o=e.outputValue,s=t.payload,m=s.field,d=s.value;return Object(c.a)({},e,{inputValue:0===m?d:l,outputValue:1===m?d:o});default:return X}}function te(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];try{if(e&&(t||0===t)&&n&&(r||0===r)){var i=b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18));return a?e.mul(i).div(n).mul(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(r))).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(t))):n.mul(i).div(e).mul(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(t))).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(r)))}}catch(u){}}function ne(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return te(e,18,t,n,r)}function re(){var e=Object(m.b)().t,t=Object(d.useWeb3Context)(),n=t.library,r=t.active,c=t.account,l=Object(o.useReducer)(ee,X),p=Object(u.a)(l,2),y=p[0],O=p[1],V=y.inputValue,k=y.outputValue,C=y.lastEditedField,P=y.outputCurrency,L=Object(o.useState)(),S=Object(u.a)(L,2),M=S[0],_=S[1],z=Object(o.useState)(),H=Object(u.a)(z,2),R=H[0],te=H[1],re=Object(o.useState)(),ae=Object(u.a)(re,2),ie=ae[0],ue=ae[1],ce=Object(o.useState)(),le=Object(u.a)(ce,2),oe=le[0],se=le[1],me=Object(w.c)(P),de=me.symbol,be=me.decimals,fe=me.exchangeAddress,pe=Object(T.e)(fe),he=Object(o.useState)(),Ee=Object(u.a)(he,2),ve=Ee[0],ge=Ee[1],ye=Object(o.useCallback)((function(){pe&&pe.totalSupply().then((function(e){ge(e)}))}),[pe]);Object(o.useEffect)((function(){return ye(),n.on("block",ye),function(){n.removeListener("block",ye)}}),[ye,n]);var je=Object(U.b)(c,fe),Oe=Object(U.b)(fe,"ETH"),Ne=Object(U.b)(fe,P),Te=Object(U.c)(P),xe=Te.reserveETH,De=Te.reserveToken,we=!!(xe&&De&&xe.isZero()&&De.isZero()),Ue=je&&ve&&!1===we&&!ve.isZero()?je.mul(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))).div(ve):void 0,Ae=Oe&&Ue?Oe.mul(Ue).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))):void 0,Ve=Ne&&Ue?Ne.mul(Ue).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))):void 0,ke=we?M:ve&&M&&Oe&&!Oe.isZero()?ve.mul(M).div(Oe):void 0,Ce=Object(U.b)(c,"ETH"),Pe=Object(U.b)(c,P),Le=Oe&&ve&&!1===we&&!ve.isZero()?Oe.mul(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))).div(ve):void 0,Se=Ne&&ve&&!1===we&&!ve.isZero()?Ne.mul(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))).div(ve):void 0,Me=R&&Q(R).maximum,_e=ke&&Q(ke).minimum,ze=Object(o.useMemo)((function(){return ne(xe,De,be)}),[xe,De,be]),He=Object(o.useMemo)((function(){return ne(xe,De,be,!0)}),[xe,De,be]);function Re(){f.a.event({category:"TransactionDetail",action:"Open"});var t=function(e){return s.a.createElement(W,null,e)};return we?s.a.createElement("div",null,s.a.createElement("div",null,e("youAreAdding")," ",t("".concat(V," ETH"))," ",e("and")," ",t("".concat(k," ").concat(de))," ",e("intoPool")),s.a.createElement(B,null,e("youAreSettingExRate")," ",t("1 ETH = ".concat(Object(x.a)(ne(M,R,be),18,4,!1)," ").concat(de)),"."),s.a.createElement(B,null,e("youWillMint")," ",t("".concat(V))," ",e("liquidityTokens")),s.a.createElement(B,null,e("totalSupplyIs0"))):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,e("youAreAdding")," ",t("".concat(Object(x.a)(M,18,4)," ETH"))," ",e("and")," ","at most"," ",t("".concat(Object(x.a)(Me,be,4)," ").concat(de))," ",e("intoPool")),s.a.createElement(B,null,e("youWillMint")," ",t(Object(x.a)(ke,18,4))," ",e("liquidityTokens")),s.a.createElement(B,null,e("totalSupplyIs")," ",t(Object(x.a)(ve,18,4))),s.a.createElement(B,null,e("tokenWorth")," ",t(Object(x.a)(Le,18,4))," ETH ",e("and")," ",t(Object(x.a)(Se,be,Math.min(be,4)))," ",de))}var Ze=Object(D.e)(),We=r&&c,qe=null===ie||null===oe;function Fe(){return(Fe=Object(i.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.a.event({category:"Pool",action:"AddLiquidity"}),t=Math.ceil(Date.now()/1e3)+900,e.next=4,pe.estimate.addLiquidity(we?b.ethers.constants.Zero:_e,we?R:Me,t,{value:M});case 4:n=e.sent,pe.addLiquidity(we?b.ethers.constants.Zero:_e,we?R:Me,t,{value:M,gasLimit:Object(x.b)(n,Z)}).then((function(e){Ze(e)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Be(e){return"Balance: ".concat(e)}Object(o.useEffect)((function(){if(we){if(V){var e=b.ethers.utils.parseUnits(V,18);_(e)}if(k){var t=b.ethers.utils.parseUnits(k,be);te(t)}}}),[be,V,we,k]),Object(o.useEffect)((function(){if(!1===we&&V&&ze&&0===C&&be)try{var t=b.ethers.utils.parseUnits(V,18);if(t.lte(b.ethers.constants.Zero)||t.gte(b.ethers.constants.MaxUint256))throw Error();_(t);var n=ze.mul(t).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18-be)));return te(n),O({type:"UPDATE_DEPENDENT_VALUE",payload:{field:1,value:Object(x.a)(n,be,4,!1)}}),function(){se(),_(),te(),O({type:"UPDATE_DEPENDENT_VALUE",payload:{field:1,value:""}})}}catch(r){se(e("inputNotValid"))}}),[V,we,C,ze,be,e]),Object(o.useEffect)((function(){if(!1===we&&k&&He&&1===C&&be)try{var t=b.ethers.utils.parseUnits(k,be);if(t.lte(b.ethers.constants.Zero)||t.gte(b.ethers.constants.MaxUint256))throw Error();te(t);var n=He.mul(t).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(be)));return _(n),O({type:"UPDATE_DEPENDENT_VALUE",payload:{field:0,value:Object(x.a)(n,18,4,!1)}}),function(){ue(),te(),_(),O({type:"UPDATE_DEPENDENT_VALUE",payload:{field:0,value:""}})}}catch(r){ue(e("inputNotValid"))}}),[k,we,C,He,be,e]),Object(o.useEffect)((function(){M&&Ce&&(M.gt(Ce)?ue(e("insufficientBalance")):ue(null)),Me&&Pe&&(Me.gt(Pe)?se(e("insufficientBalance")):se(null))}),[M,Ce,Me,Pe,e]);var Ie=Object(A.b)(c,P,fe),Ge=Object(o.useState)(!1),Je=Object(u.a)(Ge,2),Ye=Je[0],$e=Je[1];return Object(o.useEffect)((function(){if(R&&Ie)return Ie.lt(R)&&(se(e("unlockTokenCont")),$e(!0)),function(){se(),$e(!1)}}),[R,Ie,e]),s.a.createElement(s.a.Fragment,null,we?s.a.createElement(q,null,s.a.createElement(F,null,s.a.createElement("span",{role:"img","aria-label":"first-liquidity"},"\ud83d\udeb0")," ",e("firstLiquidity")),s.a.createElement(F,null,e("initialExchangeRate",{symbol:de}))):null,s.a.createElement(E.a,{title:e("deposit"),extraText:Ce&&Be(Object(x.a)(Ce,18,4)),onValueChange:function(e){O({type:"UPDATE_VALUE",payload:{value:e,field:0}})},selectedTokenAddress:"ETH",value:V,errorMessage:ie,disableTokenSelect:!0}),s.a.createElement(v.a,null,s.a.createElement(I,null,s.a.createElement(G,{src:We?j.a:N.a,alt:"plus"}))),s.a.createElement(E.a,{title:e("deposit"),description:we?"":k?"(".concat(e("estimated"),")"):"",extraText:Pe&&Be(Object(x.a)(Pe,be,Math.min(be,4))),selectedTokenAddress:P,onCurrencySelected:function(e){O({type:"SELECT_CURRENCY",payload:e})},onValueChange:function(e){O({type:"UPDATE_VALUE",payload:{value:e,field:1}})},value:k,showUnlock:Ye,errorMessage:oe}),s.a.createElement(v.a,{hideBottom:!0},s.a.createElement(J,null,s.a.createElement(Y,null,s.a.createElement($,null,e("exchangeRate")),s.a.createElement("span",null,ze?"1 ETH = ".concat(Object(x.a)(ze,18,4)," ").concat(de):" - ")),s.a.createElement(Y,null,s.a.createElement($,null,e("currentPoolSize")),s.a.createElement("span",null,Oe&&Ne?"".concat(Object(x.a)(Oe,18,4)," ETH + ").concat(Object(x.a)(Ne,be,Math.min(4,be))," ").concat(de):" - ")),s.a.createElement(Y,null,s.a.createElement($,null,e("yourPoolShare")," (",Oe&&Object(x.a)(Ue,16,2),"%)"),s.a.createElement("span",null,Ae&&Ve?"".concat(Object(x.a)(Ae,18,4)," ETH + ").concat(Object(x.a)(Ve,be,Math.min(4,be))," ").concat(de):" - ")))),function(){var t="",n=!1;return ie||oe?(t=ie||oe,n=!0):P?V?c||(t=e("noWallet"),n=!0):t=e("enterValueCont"):t=e("selectTokenCont"),s.a.createElement(g.a,{openDetailsText:e("transactionDetails"),closeDetailsText:e("hideDetails"),contextualInfo:t,isError:n,renderTransactionDetails:Re})}(),s.a.createElement(K,null,s.a.createElement(h.b,{disabled:!qe,onClick:function(){return Fe.apply(this,arguments)}},e("addLiquidity"))))}}}]);
//# sourceMappingURL=5.95a0c325.chunk.js.map