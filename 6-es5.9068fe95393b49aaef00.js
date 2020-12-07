!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"fj/z":function(e,o,c){"use strict";c.r(o),c.d(o,"GameDisplayModule",function(){return k});var b=c("ofXK"),r=c("tyNb"),a=c("fXoL"),i=c("QIP1");function l(n,t){if(1&n&&(a.Sb(0,"tr"),a.Sb(1,"td"),a.xc(2,"Win"),a.Rb(),a.Sb(3,"td"),a.xc(4),a.Rb(),a.Sb(5,"td"),a.xc(6),a.Rb(),a.Sb(7,"td"),a.xc(8),a.Rb(),a.Sb(9,"td"),a.xc(10),a.Rb(),a.Sb(11,"td"),a.xc(12),a.Rb(),a.Sb(13,"td"),a.xc(14),a.Rb(),a.Rb()),2&n){var e=t.$implicit;a.Bb(4),a.yc(e.loser[0].player.name),a.Bb(2),a.yc(e.type),a.Bb(2),a.yc(e.winner.deck.name),a.Bb(2),a.yc(e.winner.deck.color),a.Bb(2),a.yc(e.loser[0].deck.name),a.Bb(2),a.yc(e.loser[0].deck.color)}}function d(n,t){if(1&n&&(a.Sb(0,"tr"),a.Sb(1,"td"),a.xc(2,"Loss"),a.Rb(),a.Sb(3,"td"),a.xc(4),a.Rb(),a.Sb(5,"td"),a.xc(6),a.Rb(),a.Sb(7,"td"),a.xc(8),a.Rb(),a.Sb(9,"td"),a.xc(10),a.Rb(),a.Sb(11,"td"),a.xc(12),a.Rb(),a.Sb(13,"td"),a.xc(14),a.Rb(),a.Rb()),2&n){var e=t.$implicit;a.Bb(4),a.yc(e.winner.player.name),a.Bb(2),a.yc(e.type),a.Bb(2),a.yc(e.winner.deck.name),a.Bb(2),a.yc(e.winner.deck.color),a.Bb(2),a.yc(e.loser[0].deck.name),a.Bb(2),a.yc(e.loser[0].deck.color)}}function s(n,t){if(1&n&&(a.Sb(0,"div"),a.Sb(1,"h2"),a.xc(2),a.Rb(),a.Sb(3,"table",1),a.Sb(4,"tr"),a.Sb(5,"th"),a.xc(6,"Opponent"),a.Rb(),a.Sb(7,"th"),a.xc(8,"Result"),a.Rb(),a.Sb(9,"th"),a.xc(10,"Format"),a.Rb(),a.Sb(11,"th"),a.xc(12,"Winning Deck"),a.Rb(),a.Sb(13,"th"),a.xc(14,"Deck color"),a.Rb(),a.Sb(15,"th"),a.xc(16,"Loser Deck"),a.Rb(),a.Sb(17,"th"),a.xc(18,"Deck color"),a.Rb(),a.Rb(),a.vc(19,l,15,6,"tr",0),a.vc(20,d,15,6,"tr",0),a.Rb(),a.Rb()),2&n){var e=t.$implicit;a.Bb(2),a.Ac("",e.name," - ",e.wins.length," and ",e.losses.length,""),a.Bb(17),a.hc("ngForOf",e.wins),a.Bb(1),a.hc("ngForOf",e.losses)}}var f,g,p,h=[{path:"",component:(f=function(){function e(t){n(this,e),this.playerService=t,this.playerAndInfo=[]}var o,c,b;return o=e,(c=[{key:"ngOnInit",value:function(){var n=this;this.playerService.getPlayers().subscribe(function(t){n.playerAndInfo=t})}}])&&t(o.prototype,c),b&&t(o,b),e}(),f.\u0275fac=function(n){return new(n||f)(a.Mb(i.a))},f.\u0275cmp=a.Gb({type:f,selectors:[["app-game-display"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"darkTable"]],template:function(n,t){1&n&&a.vc(0,s,21,5,"div",0),2&n&&a.hc("ngForOf",t.playerAndInfo)},directives:[b.m],styles:["table.darkTable[_ngcontent-%COMP%]{font-family:Arial Black,Gadget,sans-serif;border:2px solid #000;background-color:#4a4a4a;width:100%;height:200px;text-align:center;border-collapse:collapse}table.darkTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table.darkTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #4a4a4a;padding:3px 2px}table.darkTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:13px;color:#e6e6e6}table.darkTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background:#888}table.darkTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#000;border-bottom:3px solid #000}table.darkTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:15px;font-weight:700;color:#e6e6e6;text-align:center;border-left:2px solid #4a4a4a}table.darkTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{border-left:none}table.darkTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:#e6e6e6;background:#000;background:linear-gradient(180deg,#404040 0,#191919 66%,#000);border-top:1px solid #4a4a4a}table.darkTable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:12px}"]}),f)}],u=((g=function t(){n(this,t)}).\u0275mod=a.Kb({type:g}),g.\u0275inj=a.Jb({factory:function(n){return new(n||g)},imports:[[r.g.forChild(h)],r.g]}),g),y=c("aceb"),x=c("3Pt+"),k=((p=function t(){n(this,t)}).\u0275mod=a.Kb({type:p}),p.\u0275inj=a.Jb({factory:function(n){return new(n||p)},imports:[[b.c,u,y.s,x.b]]}),p)}}])}();