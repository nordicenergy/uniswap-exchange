(this["webpackJsonpnordic_energy-uniswap"]=this["webpackJsonpnordic_energy-uniswap"]||[]).push([[10],{800:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 9 10",fill:"currentColor"},e),a.a.createElement("path",{d:"M5.298 0H4.24v7.911h-.075L1.256 4.932l-.717.735L4.769 10 9 5.667l-.718-.735-2.908 2.979h-.076V0z",fill:"currentColor"}))}},801:function(e,t,n){"use strict";var r=n(27),a=n(35),i=n(39),c=n(34),u=n(38),o=n(106),l=n(3),s=n(0),m=n.n(s),f=n(4),b=n(61),d=n(799),h=n(786);function v(){var e=Object(l.a)(["\n  path {\n    stroke: ",";\n  }\n"]);return v=function(){return e},e}function p(){var e=Object(l.a)(["\n  path {\n    stroke: ",";\n  }\n"]);return p=function(){return e},e}function g(){var e=Object(l.a)(["\n  ",";\n  color: ",";\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n\n  span {\n    margin-right: 12px;\n  }\n\n  img {\n    height: 0.75rem;\n    width: 0.75rem;\n  }\n"]);return g=function(){return e},e}function j(){var e=Object(l.a)(["\n  background-color: ",";\n  padding: 1.5rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  margin-top: 1rem;\n"]);return j=function(){return e},e}function y(){var e=Object(l.a)(["\n  color: ",";\n  font-size: 0.75rem;\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n"]);return y=function(){return e},e}var O=f.d.div(y(),(function(e){var t=e.error,n=e.theme;return t?n.salmonRed:n.doveGray})),E=f.d.div(j(),(function(e){return e.theme.concreteGray})),w=f.d.div(g(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.royalBlue})),x=Object(f.d)((function(e){e.isError,e.highSlippageWarning;var t=Object(o.a)(e,["isError","highSlippageWarning"]);return m.a.createElement(d.a,t)}))(p(),(function(e){return e.theme.royalBlue})),N=Object(f.d)((function(e){e.isError,e.highSlippageWarning;var t=Object(o.a)(e,["isError","highSlippageWarning"]);return m.a.createElement(h.a,t)}))(v(),(function(e){return e.theme.royalBlue})),k=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,u=new Array(a),o=0;o<a;o++)u[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(u)))).state={showDetails:!1},n}return Object(u.a)(t,e),Object(a.a)(t,[{key:"renderDetails",value:function(){return this.state.showDetails?m.a.createElement(E,null,this.props.renderTransactionDetails()):null}},{key:"render",value:function(){var e=this,t=this.props,n=t.openDetailsText,r=t.closeDetailsText,a=t.contextualInfo,i=t.isError;return a?m.a.createElement(O,{error:i},a):m.a.createElement(m.a.Fragment,null,m.a.createElement(w,{onClick:function(){!e.state.showDetails&&b.a.event({category:"Advanced Interaction",action:"Open Advanced Details",label:"Pool Page Details"}),e.setState((function(e){return{showDetails:!e.showDetails}}))}},this.state.showDetails?m.a.createElement(m.a.Fragment,null,m.a.createElement("span",null,r),m.a.createElement(N,null)):m.a.createElement(m.a.Fragment,null,m.a.createElement("span",null,n),m.a.createElement(x,null))),this.renderDetails())}}]),t}(s.Component);k.defaultProps={openDetailsText:"Advanced Details",closeDetailsText:"Hide Advanced",renderTransactionDetails:function(){},contextualInfo:"",isError:!1},t.a=k},910:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));var r=n(14),a=n.n(r),i=n(31),c=n(7),u=n(3),o=n(0),l=n.n(o),s=n(60),m=n(61),f=n(47),b=n(16),d=n(4),h=n(11),v=n(15),p=n(802),g=n(801),j=n(782),y=n(800),O=n(77),E=n(78),w=n(73),x=n(5);function N(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n\n  button {\n    max-width: 20rem;\n  }\n"]);return N=function(){return e},e}function k(){var e=Object(u.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  color: ",";\n"]);return k=function(){return e},e}function T(){var e=Object(u.a)(["\n  ",";\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  padding: 0.25rem 1rem 0;\n"]);return T=function(){return e},e}function D(){var e=Object(u.a)(["\n  margin-top: 1rem;\n"]);return D=function(){return e},e}function S(){var e=Object(u.a)(["\n  ","\n  padding: 1rem 0;\n"]);return S=function(){return e},e}function W(){var e=Object(u.a)(["\n  font-size: 1.25rem;\n  line-height: 1.5rem;\n  padding: 1rem 0;\n"]);return W=function(){return e},e}function C(){var e=Object(u.a)(["\n  font-size: 1.25rem;\n  line-height: 1.5rem;\n  padding: 1rem 0.75rem;\n"]);return C=function(){return e},e}function A(){var e=Object(u.a)(["\n  ","\n  min-height: 3.5rem;\n"]);return A=function(){return e},e}function H(){var e=Object(u.a)(["\n  ","\n  color: ",";\n  width: 0.625rem;\n  height: 0.625rem;\n  position: relative;\n  padding: 0.875rem;\n"]);return H=function(){return e},e}function M(){var e=Object(u.a)(["\n  ","\n  justify-content: center;\n  align-items: center;\n"]);return M=function(){return e},e}function R(){var e=Object(u.a)(["\n  color: ",";\n"]);return R=function(){return e},e}var B=b.ethers.utils.bigNumberify(200),z=b.ethers.utils.bigNumberify(1e3),L=d.d.span(R(),(function(e){return e.theme.royalBlue})),q=d.d.div(M(),(function(e){return e.theme.flexRowNoWrap})),I=Object(d.d)(y.a)(H(),(function(e){return e.theme.flexRowNoWrap}),(function(e){var t=e.theme;return e.active?t.royalBlue:t.doveGray})),P=d.d.div(A(),(function(e){return e.theme.flexRowNoWrap})),Z=d.d.div(C()),G=d.d.div(W()),F=d.d.div(S(),(function(e){return e.theme.flexColumnNoWrap})),U=d.d.div(D()),V=d.d.div(T(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGray})),J=d.d.span(k(),(function(e){return e.theme.doveGray})),_=d.d.div(N());function K(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];try{if(e&&(t||0===t)&&n&&(r||0===r)){var i=b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18));return a?e.mul(i).div(n).mul(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(r))).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(t))):n.mul(i).div(e).mul(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(t))).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(r)))}}catch(c){}}function Q(e){if(e){var t=e.mul(B).div(b.ethers.utils.bigNumberify(1e4)),n=e.sub(t),r=e.add(t);return{minimum:n.lt(b.ethers.constants.Zero)?b.ethers.constants.Zero:n,maximum:r.gt(b.ethers.constants.MaxUint256)?b.ethers.constants.MaxUint256:r}}return{}}function X(e){var t=e.params,n=Object(s.b)().t,r=Object(h.k)(),u=r.library,d=r.account,y=r.active,N=Object(O.e)();Object(o.useEffect)((function(){Object(f.a)().push(window.location.pathname+"")}),[]);var k=Object(o.useState)(t.poolTokenAddress),T=Object(c.a)(k,2),D=T[0],S=T[1],W=Object(o.useState)(t.poolTokenAmount?t.poolTokenAmount:""),C=Object(c.a)(W,2),A=C[0],H=C[1],M=Object(o.useState)(),R=Object(c.a)(M,2),B=R[0],X=R[1],Y=Object(o.useState)(),$=Object(c.a)(Y,2),ee=$[0],te=$[1];Object(o.useEffect)((function(){try{var e=b.ethers.utils.parseUnits(A,18);te(e)}catch(t){""!==A&&X(n("inputNotValid"))}return function(){X(),te()}}),[n,A]);var ne=Object(E.c)(D),re=ne.symbol,ae=ne.decimals,ie=ne.exchangeAddress,ce=Object(o.useState)(),ue=Object(c.a)(ce,2),oe=ue[0],le=ue[1],se=Object(w.c)(d,ie),me=Object(w.c)(ie,"ETH"),fe=Object(w.c)(ie,D);Object(o.useEffect)((function(){ee&&se&&(ee.gt(se)?X(n("insufficientBalance")):X(null))}),[se,n,ee]);var be=Object(h.f)(ie),de=se&&oe&&!oe.isZero()?se.mul(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))).div(oe):void 0,he=de&&Object(x.a)(de,16,4),ve=me&&de&&me.mul(de).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))),pe=fe&&de&&fe.mul(de).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))),ge=me&&oe&&!oe.isZero()?me.mul(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))).div(oe):void 0,je=fe&&oe&&!oe.isZero()?fe.mul(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))).div(oe):void 0,ye=ge&&ee?ge.mul(ee).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))):void 0,Oe=je&&ee?je.mul(ee).div(b.ethers.utils.bigNumberify(10).pow(b.ethers.utils.bigNumberify(18))):void 0,Ee=ye?Q(ye).minimum:void 0,we=Oe?Q(Oe).minimum:void 0,xe=Object(o.useCallback)((function(){be&&be.totalSupply().then((function(e){le(e)}))}),[be]);Object(o.useEffect)((function(){return xe(),u.on("block",xe),function(){u.removeListener("block",xe)}}),[xe,u]);var Ne=Object(w.e)();function ke(){return(ke=Object(i.a)(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Ne*(ye/1e18)*2,m.a.event({category:"Transaction",action:"Remove Liquidity",label:D,value:t}),n=Math.ceil(Date.now()/1e3)+900,e.next=5,be.estimate.removeLiquidity(ee,Ee,we,n);case 5:r=e.sent,be.removeLiquidity(ee,Ee,we,n,{gasLimit:Object(x.b)(r,z)}).then((function(e){N(e)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Te=function(e){return l.a.createElement(L,null,e)};function De(){return l.a.createElement("div",null,l.a.createElement("div",null,n("youAreRemoving")," ",Te("".concat(Object(x.a)(ye,18,4)," ETH"))," ",n("and")," ",Te("".concat(Object(x.a)(Oe,ae,Math.min(ae,4))," ").concat(re))," ",n("outPool")),l.a.createElement(U,null,n("youWillRemove")," ",Te(Object(x.a)(ee,18,4))," ",n("liquidityTokens")),l.a.createElement(U,null,n("totalSupplyIs")," ",Te(Object(x.a)(oe,18,4))),l.a.createElement(U,null,n("tokenWorth")," ",Te(Object(x.a)(ge,18,4))," ETH ",n("and")," ",Te(Object(x.a)(je,ae,Math.min(4,ae)))," ",re))}var Se=y&&d,We=null===B,Ce=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return K(e,18,t,n,r)}(me,fe,ae);return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{title:n("poolTokens"),extraText:se&&function(e){return"Balance: ".concat(e)}(Object(x.a)(se,18,4)),extraTextClickHander:function(){if(se){var e=se;e.gt(b.ethers.constants.Zero)&&H(Object(x.a)(e,18,18,!1))}},onCurrencySelected:S,onValueChange:H,value:A,errorMessage:B,selectedTokenAddress:D}),l.a.createElement(j.a,null,l.a.createElement(q,null,l.a.createElement(I,{active:Se,alt:"arrow"}))),l.a.createElement(p.a,{title:n("output"),description:ye&&Oe?"(".concat(n("estimated"),")"):"",key:"remove-liquidity-input",renderInput:function(){return ye&&Oe?l.a.createElement(P,null,l.a.createElement(Z,null,"".concat(Object(x.a)(ye,18,4,!1)," ETH")),l.a.createElement(G,null," + "),l.a.createElement(Z,null,"".concat(Object(x.a)(Oe,ae,Math.min(4,ae))," ").concat(re))):l.a.createElement(P,null)},disableTokenSelect:!0,disableUnlock:!0}),l.a.createElement(j.a,{key:"remove-liquidity-input-under",hideBottom:!0},l.a.createElement(F,null,l.a.createElement(V,null,l.a.createElement(J,null,n("exchangeRate")),Ce?l.a.createElement("span",null,"1 ETH = ".concat(Object(x.a)(Ce,18,4)," ").concat(re)):" - "),l.a.createElement(V,null,l.a.createElement(J,null,n("currentPoolSize")),me&&fe&&(ae||0===ae)?l.a.createElement("span",null,"".concat(Object(x.a)(me,18,4)," ETH + ").concat(Object(x.a)(fe,ae,Math.min(ae,4))," ").concat(re)):" - "),l.a.createElement(V,null,l.a.createElement(J,null,n("yourPoolShare")," (",he&&he,"%)"),ve&&pe?l.a.createElement("span",null,"".concat(Object(x.a)(ve,18,4)," ETH + ").concat(Object(x.a)(pe,ae,Math.min(ae,4))," ").concat(re)):" - "))),function(){var e="",t=!1;return B?(e=B,t=!0):D&&"ETH"!==D?ee?d||(e=n("noWallet"),t=!0):e=n("enterValueCont"):e=n("selectTokenCont"),l.a.createElement(g.a,{key:"context-info",openDetailsText:n("transactionDetails"),closeDetailsText:n("hideDetails"),contextualInfo:e,isError:t,renderTransactionDetails:De})}(),l.a.createElement(_,null,l.a.createElement(v.b,{disabled:!We,onClick:function(){return ke.apply(this,arguments)}},n("removeLiquidity"))))}}}]);
//# sourceMappingURL=10.a05cec2a.chunk.js.map