(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{hico:function(e,t,n){"use strict";n.r(t),n.d(t,"InfoModule",function(){return p});var i=n("ofXK"),o=n("tyNb"),a=n("fXoL"),r=n("aceb");function c(e,t){if(1&e&&(a.Sb(0,"nb-accordion-item"),a.Sb(1,"nb-accordion-item-header"),a.xc(2),a.Rb(),a.Sb(3,"nb-accordion-item-body"),a.Sb(4,"p"),a.xc(5),a.Rb(),a.Sb(6,"p"),a.xc(7),a.Rb(),a.Sb(8,"p"),a.xc(9),a.Rb(),a.Rb(),a.Rb()),2&e){const e=t.$implicit;a.Bb(2),a.yc(e.title),a.Bb(3),a.zc("Endpoint: ",e.link,""),a.Bb(2),a.zc("Properties: ",e.properties,""),a.Bb(2),a.yc(e.info)}}const s=[{path:"",component:(()=>{class e{constructor(){this.todos=[{title:"Deck",info:"Decks are placed into the Participant object. They are basically used right now to do analysis on the deck as a whole. Will need to expand object to get a more granular view.",properties:["name: string ","color: string ","archType: string ","format: string ","win_count : number ","loss_count : number"],link:"/deck"},{title:"Participant",info:"Participants are placed into the Game Object. These may be removed in the future. They do give the ability to easily grab Player and Deck combinations.",properties:["player: player_id ","deck: deck_id ","place: number"],link:"/participant"},{title:"Game",info:"Games are placed into the Player Object. When these are inserted the win_count and loss_count are updated on the decks. The player objects are also updated either in their wins and losses list.",properties:["winner: participant_id ","loser: participant_id[] "," type: string"],link:"/game"},{title:"Player",info:"Player is the top object. These have no real rules yet. Will probably expand these to have names unique.",properties:["name: string ","wins: game_id[] "," losses: game_id[]"],link:"/player"}]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["app-info"]],decls:24,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(a.Sb(0,"div"),a.Sb(1,"h4"),a.xc(2,"Basic Backend Breakdown"),a.Rb(),a.Sb(3,"p"),a.xc(4,"API URL: https://node-api-szmkxbu6aq-uw.a.run.app/api/"),a.Rb(),a.Sb(5,"p"),a.xc(6,"Four Objects"),a.Rb(),a.Sb(7,"ul"),a.Sb(8,"li"),a.xc(9,"Deck"),a.Rb(),a.Sb(10,"li"),a.xc(11,"Participant"),a.Rb(),a.Sb(12,"li"),a.xc(13,"Game"),a.Rb(),a.Sb(14,"li"),a.xc(15,"Player"),a.Rb(),a.Rb(),a.Sb(16,"p"),a.xc(17,"Each of these objects currently supports Get All and Post"),a.Rb(),a.Sb(18,"p"),a.xc(19,"Each object has a unqiue ID generated by MongoDB, these are ommitted on the information found below"),a.Rb(),a.Sb(20,"p"),a.xc(21,"An explanation of each object can be found below"),a.Rb(),a.Rb(),a.Sb(22,"nb-accordion"),a.vc(23,c,10,4,"nb-accordion-item",0),a.Rb()),2&e&&(a.Bb(23),a.hc("ngForOf",t.todos))},directives:[r.a,i.m,r.c,r.d,r.b],styles:[""]}),e})()}];let b=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[o.g.forChild(s)],o.g]}),e})(),p=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[i.c,b,r.e]]}),e})()}}]);