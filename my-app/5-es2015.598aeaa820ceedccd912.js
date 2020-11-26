(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{MwFL:function(e,t,i){"use strict";i.r(t),i.d(t,"DataModule",function(){return v});var c=i("ofXK"),s=i("tyNb");class n{}class r{constructor(){this.deck=void 0,this.player=void 0,this.place=void 0}}var a=i("fXoL"),l=i("aceb"),o=i("Oz8O"),p=i("QIP1"),u=i("VdwR");function b(e,t){if(1&e&&(a.Sb(0,"nb-option",4),a.xc(1),a.Rb()),2&e){const e=t.$implicit;a.ic("value",e._id),a.Bb(1),a.yc(e.name)}}function h(e,t){if(1&e&&(a.Sb(0,"nb-option",4),a.xc(1),a.Rb()),2&e){const e=t.$implicit;a.ic("value",e._id),a.Bb(1),a.yc(e.name)}}function d(e,t){if(1&e&&(a.Sb(0,"nb-option",4),a.xc(1),a.Rb()),2&e){const e=t.$implicit;a.ic("value",e),a.Bb(1),a.yc(e)}}let f=(()=>{class e{constructor(){this.deckList=[],this.playerList=[],this.numberList=[],this.participant=null}ngOnInit(){}playerChange(e){this.participant.player=this.playerList.find(t=>t._id===e)}deckChange(e){this.participant.deck=this.deckList.find(t=>t._id===e)}placementChange(e){this.participant.place=Number(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["app-form"]],inputs:{deckList:"deckList",playerList:"playerList",numberList:"numberList",participant:"participant"},decls:12,vars:5,consts:[["placeholder","Select Player",3,"selected","selectedChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Select Deck",3,"selected","selectedChange"],["placeholder","Select Placement",3,"selectedChange"],[3,"value"]],template:function(e,t){1&e&&(a.Sb(0,"h3"),a.xc(1,"Input Player"),a.Rb(),a.Sb(2,"nb-select",0),a.Zb("selectedChange",function(e){return t.playerChange(e)})("selectedChange",function(e){return t.selectedPlayerId=e}),a.vc(3,b,2,2,"nb-option",1),a.Rb(),a.Sb(4,"h3"),a.xc(5,"Input Deck"),a.Rb(),a.Sb(6,"nb-select",2),a.Zb("selectedChange",function(e){return t.deckChange(e)})("selectedChange",function(e){return t.selectedDeckId=e}),a.vc(7,h,2,2,"nb-option",1),a.Rb(),a.Sb(8,"h3"),a.xc(9,"Placement"),a.Rb(),a.Sb(10,"nb-select",3),a.Zb("selectedChange",function(e){return t.placementChange(e)}),a.vc(11,d,2,2,"nb-option",1),a.Rb()),2&e&&(a.Bb(2),a.hc("selected",t.selectedPlayerId),a.Bb(1),a.hc("ngForOf",t.playerList),a.Bb(3),a.hc("selected",t.selectedDeckId),a.Bb(1),a.hc("ngForOf",t.deckList),a.Bb(4),a.hc("ngForOf",t.numberList))},directives:[l.x,c.m,l.w],styles:[""]}),e})();function y(e,t){if(1&e&&(a.Sb(0,"nb-option",8),a.xc(1),a.Rb()),2&e){const e=t.$implicit;a.ic("value",e),a.Bb(1),a.yc(e)}}function m(e,t){if(1&e&&(a.Sb(0,"nb-layout-column"),a.Nb(1,"app-form",9),a.Rb()),2&e){const e=t.index,i=a.bc();a.Bb(1),a.hc("deckList",i.deckList)("playerList",i.playerList)("numberList",i.numberList)("participant",i.participantList[e])}}const L=function(){return[]},g=[{path:"",component:(()=>{class e{constructor(e,t,i,c){this.toastrService=e,this.deckService=t,this.playerService=i,this.gameService=c,this.deckList=[],this.playerList=[],this.participantList=[],this.types=["Modern","Commander","Standard"],this.selectedType=null,this.numberList=[1,2],this.numberOfPlayers=2}ngOnInit(){this.deckService.getDecks().subscribe(e=>{this.deckList=e}),this.playerService.getPlayerNames().subscribe(e=>{this.playerList=e}),this.participantList.push(new r),this.participantList.push(new r)}addPlayer(){this.numberOfPlayers<4&&(this.participantList.push(new r),this.numberOfPlayers++,this.numberList.push(this.numberOfPlayers))}subPlayer(){this.numberOfPlayers>2&&(this.participantList.pop(),this.numberList.pop(),this.numberOfPlayers--)}submitGame(){try{this.errorCheck();let e=new n;e.winner=this.participantList.find(e=>1===e.place),e.loser=[];for(let t of this.participantList)1!==t.place&&e.loser.push(t);e.type=this.selectedType,this.gameService.submitNewGame(e).subscribe(e=>{this.toastrService.show("Posted Sucessfully.","Success",{status:"success"})})}catch(e){this.toastrService.show(e,"Error",{status:"danger"})}}errorCheck(){try{this.nullCheck(),this.repeatedValueCheck(this.playerList,"player"),this.repeatedValueCheck(this.deckList,"deck"),this.placementCheck()}catch(e){throw e}}placementCheck(){let e=Object.assign([],this.numberList);for(let t of this.participantList){let i=e.indexOf(t.place);if(-1===i)throw"Each placement must be unique";e.splice(i,1)}}repeatedValueCheck(e,t){let i=Object.assign([],e);for(let c of this.participantList){let e=i.indexOf(c[t]);if(-1===e)throw"Each value in a field must be unique";i.splice(e,1)}}nullCheck(){for(let e of this.participantList)if(void 0===e.place||void 0===e.deck||void 0===e.player||void 0===e.place)throw"Not all Participant fields are filled out";if(null===this.selectedPlayerId)throw"No Type Selected"}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(l.F),a.Mb(o.a),a.Mb(p.a),a.Mb(u.a))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-data"]],decls:12,vars:4,consts:[["nbButton","","status","success",3,"click"],["nbButton","","ghost","","status","success",3,"click"],["icon","plus-circle-outline"],["nbButton","","ghost","","status","danger",3,"click"],["icon","minus-circle-outline"],["placeholder","Select Type",3,"selected","selectedChange"],[3,"value",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[3,"value"],[3,"deckList","playerList","numberList","participant"]],template:function(e,t){1&e&&(a.Sb(0,"h2"),a.xc(1,"Game Input"),a.Rb(),a.Sb(2,"button",0),a.Zb("click",function(){return t.submitGame()}),a.xc(3,"Submit"),a.Rb(),a.Sb(4,"button",1),a.Zb("click",function(){return t.addPlayer()}),a.Nb(5,"nb-icon",2),a.Rb(),a.Sb(6,"button",3),a.Zb("click",function(){return t.subPlayer()}),a.Nb(7,"nb-icon",4),a.Rb(),a.Sb(8,"nb-select",5),a.Zb("selectedChange",function(e){return t.selectedType=e}),a.vc(9,y,2,2,"nb-option",6),a.Rb(),a.Sb(10,"nb-layout"),a.vc(11,m,2,4,"nb-layout-column",7),a.Rb()),2&e&&(a.Bb(8),a.hc("selected",t.selectedType),a.Bb(1),a.hc("ngForOf",t.types),a.Bb(2),a.hc("ngForOf",a.jc(3,L).constructor(t.numberOfPlayers)))},directives:[l.f,l.k,l.x,c.m,l.q,l.w,l.p,f],styles:[""]}),e})()}];let k=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[s.g.forChild(g)],s.g]}),e})(),v=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[c.c,k,l.y,l.g,l.m,l.t]]}),e})()}}]);