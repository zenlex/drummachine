(this.webpackJsonpdrummachine=this.webpackJsonpdrummachine||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/SteelD_Q.93a97c9d.wav"},function(e,t,a){e.exports=a.p+"static/media/BD.7fc21491.wav"},function(e,t,a){e.exports=a.p+"static/media/Snare.138f1a96.wav"},function(e,t,a){e.exports=a.p+"static/media/SteelD_A.bf9a89d6.wav"},function(e,t,a){e.exports=a.p+"static/media/SteelD_S.a899748f.wav"},function(e,t,a){e.exports=a.p+"static/media/SteelD_D.3bd5053d.wav"},function(e,t,a){e.exports=a.p+"static/media/SteelD_Z.37321acf.wav"},function(e,t,a){e.exports=a.p+"static/media/SteelD_X.38da79ca.wav"},function(e,t,a){e.exports=a.p+"static/media/SteelD_C.3981d0b7.wav"},function(e,t,a){e.exports=a.p+"static/media/DS-Q-HiTom.432064f0.wav"},function(e,t,a){e.exports=a.p+"static/media/DS-W-MidTom.f1ae555f.wav"},function(e,t,a){e.exports=a.p+"static/media/DS-E-LowTom.6abcf00b.wav"},function(e,t,a){e.exports=a.p+"static/media/DS-A-ClosedHat.d1800db8.wav"},function(e,t,a){e.exports=a.p+"static/media/DS-S-OpenHat.143956d1.wav"},function(e,t,a){e.exports=a.p+"static/media/DS-D-CymLow.767d1383.wav"},function(e,t,a){e.exports=a.p+"static/media/DS-Z-Kick1.088b280f.wav"},function(e,t,a){e.exports=a.p+"static/media/DS-X-Kick2.f66c2653.wav"},function(e,t,a){e.exports=a.p+"static/media/DS-C-Snare.e951d6b2.wav"},function(e,t,a){e.exports=a.p+"static/media/SC-1.1d83ea0d.wav"},function(e,t,a){e.exports=a.p+"static/media/SC-2.e550b689.wav"},function(e,t,a){e.exports=a.p+"static/media/SC-3.6b62f050.wav"},function(e,t,a){e.exports=a.p+"static/media/SC-4.f2399024.wav"},function(e,t,a){e.exports=a.p+"static/media/SC-5.85e036e5.wav"},function(e,t,a){e.exports=a.p+"static/media/SC-6.1dd54ba9.wav"},function(e,t,a){e.exports=a.p+"static/media/SC-7.d508653e.wav"},function(e,t,a){e.exports=a.p+"static/media/SC-8.0cbaeb06.wav"},function(e,t,a){e.exports=a.p+"static/media/SC-9.b9a0144a.wav"},function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"SteelDrum",(function(){return he})),a.d(n,"dubStep",(function(){return Se})),a.d(n,"swedishChef",(function(){return ve}));var i=a(0),o=a.n(i),d=a(7),c=a.n(d),r=(a(40),a(41),a(2)),s=a(3),u=a(1),l=a(5),p=a(4),y=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={padStyle:"drum-pad pad-inactive"},n.playSound=n.playSound.bind(Object(u.a)(n)),n.togglePadStyle=n.togglePadStyle.bind(Object(u.a)(n)),n.clickHandle=n.clickHandle.bind(Object(u.a)(n)),n.keyPressHandle=n.keyPressHandle.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyPressHandle)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyPressHandle)}},{key:"playSound",value:function(){var e=this;this.togglePadStyle();var t=document.getElementById(this.props.hotkey);t.currentTime=0;var a=t.play();void 0!==a&&a.then((function(e){console.log("audio played auto")})).catch((function(e){console.log("playback prevented")})),this.props.updateDisplay(this.props.clipId),setTimeout((function(){return e.togglePadStyle()}),150)}},{key:"clickHandle",value:function(){this.playSound()}},{key:"keyPressHandle",value:function(e){e.key!==this.props.hotkey&&e.keyCode!==this.props.keyCode||this.playSound()}},{key:"togglePadStyle",value:function(){"drum-pad pad-inactive"===this.state.padStyle?this.setState({padStyle:"drum-pad pad-active"}):this.setState({padStyle:"drum-pad pad-inactive"})}},{key:"render",value:function(){return o.a.createElement("div",{className:this.state.padStyle,id:this.props.clipId,onClick:this.clickHandle},o.a.createElement("audio",{className:"clip",id:this.props.hotkey,src:this.props.audioSrc}," "),this.props.hotkey)}}]),a}(o.a.Component),k=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.currPadBank.map((function(t,a,n){return o.a.createElement(y,{key:a,audioSrc:n[a].audioSrc,clipId:n[a].id,hotkey:n[a].hotkey,keyCode:n[a].keyCode,updateDisplay:e.props.updateDisplay})}));return o.a.createElement("div",{id:"padgrid"},t)}}]),a}(o.a.Component);var m=function(e){return o.a.createElement("p",null,e.clipId)},h=a(8),S=a.n(h),v=a(9),f=a.n(v),C=a(10),b=a.n(C),D=a(11),w=a.n(D),x=a(12),E=a.n(x),g=a(13),O=a.n(g),j=a(14),B=a.n(j),H=a(15),P=a.n(H),I=a(16),T=a.n(I),A=a(17),M=a.n(A),V=a(18),W=a.n(V),_=a(19),K=a.n(_),L=a(20),Q=a.n(L),X=a(21),Z=a.n(X),N=a(22),F=a.n(N),G=a(23),J=a.n(G),U=a(24),$=a.n(U),q=a(25),z=a.n(q),R=a(26),Y=a.n(R),ee=a(27),te=a.n(ee),ae=a(28),ne=a.n(ae),ie=a(29),oe=a.n(ie),de=a(30),ce=a.n(de),re=a(31),se=a.n(re),ue=a(32),le=a.n(ue),pe=a(33),ye=a.n(pe),ke=a(34),me=a.n(ke),he=[{hotkey:"Q",keyCode:81,audioSrc:S.a,id:"Steel Drum D5"},{hotkey:"W",keyCode:87,audioSrc:f.a,id:"Kick"},{hotkey:"E",keyCode:69,audioSrc:b.a,id:"Snare"},{hotkey:"A",keyCode:65,audioSrc:w.a,id:"Steel Drum D4"},{hotkey:"S",keyCode:83,audioSrc:E.a,id:"Steel Drum F#4"},{hotkey:"D",keyCode:68,audioSrc:O.a,id:"Steel Drum A4"},{hotkey:"Z",keyCode:90,audioSrc:B.a,id:"Steel Drum D3"},{hotkey:"X",keyCode:88,audioSrc:P.a,id:"Steel Drum F#3"},{hotkey:"C",keyCode:67,audioSrc:T.a,id:"Steel Drum A3"}],Se=[{hotkey:"Q",keyCode:81,audioSrc:M.a,id:"Hi Tom"},{hotkey:"W",keyCode:87,audioSrc:W.a,id:"Mid Tom"},{hotkey:"E",keyCode:69,audioSrc:K.a,id:"Low Tom"},{hotkey:"A",keyCode:65,audioSrc:Q.a,id:"Closed Hat"},{hotkey:"S",keyCode:83,audioSrc:Z.a,id:"Open Hat"},{hotkey:"D",keyCode:68,audioSrc:F.a,id:"Crash"},{hotkey:"Z",keyCode:90,audioSrc:J.a,id:"Kick 1"},{hotkey:"X",keyCode:88,audioSrc:$.a,id:"Kick 2"},{hotkey:"C",keyCode:67,audioSrc:z.a,id:"Snare"}],ve=[{hotkey:"Q",keyCode:81,audioSrc:Y.a,id:"Shrimpees"},{hotkey:"W",keyCode:87,audioSrc:te.a,id:"Bursh"},{hotkey:"E",keyCode:69,audioSrc:ne.a,id:"Geif"},{hotkey:"A",keyCode:65,audioSrc:oe.a,id:"Gurndib"},{hotkey:"S",keyCode:83,audioSrc:ce.a,id:"Sigiv"},{hotkey:"D",keyCode:68,audioSrc:se.a,id:"Versht"},{hotkey:"Z",keyCode:90,audioSrc:le.a,id:"Duurrndiv"},{hotkey:"X",keyCode:88,audioSrc:ye.a,id:"B\xd8rdig"},{hotkey:"C",keyCode:67,audioSrc:me.a,id:"G\xd8\xd8rt"}],fe=Object.keys(n);console.log("drumBankIds = ",fe);var Ce=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={currBankIndex:0,currentBank:n[fe[0]],noOfBanks:3,volVal:.5},i.updateDisplay=i.updateDisplay.bind(Object(u.a)(i)),i.volChange=i.volChange.bind(Object(u.a)(i)),i.clearDisplay=i.clearDisplay.bind(Object(u.a)(i)),i.bankSelect=i.bankSelect.bind(Object(u.a)(i)),i}return Object(s.a)(a,[{key:"updateDisplay",value:function(e){var t=this;this.setState({display:e}),setTimeout((function(){return t.clearDisplay()}),1500)}},{key:"volChange",value:function(e){var t=this,a=e.target.value;this.setState({volVal:a,display:"Volume: "+Math.floor(100*a)}),setTimeout((function(){return t.clearDisplay()}),800)}},{key:"clearDisplay",value:function(){this.setState({display:""})}},{key:"bankSelect",value:function(e){var t=this.state.currBankIndex,a=this.state.noOfBanks-1;"next"===e&&(t=t<a?t+=1:0),"prev"===e&&(t=t>0?t-=1:a),this.setState({currBankIndex:t,currentBank:n[fe[t]]}),this.updateDisplay(fe[t])}},{key:"render",value:function(){var e=this;return[].slice.call(document.getElementsByClassName("clip")).forEach((function(t){t.volume=e.state.volVal})),o.a.createElement("div",{id:"drum-machine"},o.a.createElement("header",null,"BAMF Drum Machine"),o.a.createElement(k,{currPadBank:this.state.currentBank,updateDisplay:this.updateDisplay}),o.a.createElement("div",{id:"controlsbox"},o.a.createElement("div",{id:"display"},o.a.createElement(m,{clipId:this.state.display})),o.a.createElement("div",{id:"controls"},o.a.createElement("div",{id:"bank-select"},o.a.createElement("h2",null,"Select Bank:"),o.a.createElement("div",{id:"bank-prev",onClick:function(){return e.bankSelect("prev")}}),o.a.createElement("div",{id:"bank-next",onClick:function(){return e.bankSelect("next")}})),o.a.createElement("h2",null,"Volume:"),o.a.createElement("input",{type:"range",id:"volume",min:"0",max:"1",step:".01",value:this.state.volVal,onChange:this.volChange}))))}}]),a}(o.a.Component);var be=function(){return o.a.createElement("div",{className:"wrapper"},o.a.createElement(Ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.9d12c8ae.chunk.js.map