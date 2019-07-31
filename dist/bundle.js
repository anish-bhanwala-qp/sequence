!function(e){var t={};function a(u){if(t[u])return t[u].exports;var l=t[u]={i:u,l:!1,exports:{}};return e[u].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=t,a.d=function(e,t,u){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:u})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var u=Object.create(null);if(a.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(u,l,function(t){return e[t]}.bind(null,l));return u},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){"use strict";var u;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.ACE=0]="ACE",e[e.TWO=1]="TWO",e[e.THREE=2]="THREE",e[e.FOUR=3]="FOUR",e[e.FIVE=4]="FIVE",e[e.SIX=5]="SIX",e[e.SEVEN=6]="SEVEN",e[e.EIGHT=7]="EIGHT",e[e.NINE=8]="NINE",e[e.TEN=9]="TEN",e[e.JACK=10]="JACK",e[e.QUEEN=11]="QUEEN",e[e.KING=12]="KING"}(u||(u={})),t.default=u},function(e,t,a){"use strict";var u;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.SPADE=0]="SPADE",e[e.CLUB=1]="CLUB",e[e.DIAMOND=2]="DIAMOND",e[e.HEART=3]="HEART"}(u||(u={})),t.default=u},function(e,t,a){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(3)),f=u(a(1)),d=u(a(0)),n=function(){function e(){for(var e in this.cards=[],f.default)if(isNaN(Number(e))&&f.default.hasOwnProperty(e)){var t=f.default[f.default[e]];for(var a in d.default)if(isNaN(Number(a))&&d.default.hasOwnProperty(a)){var u=d.default[d.default[a]];this.cards.push(new l.default(u,t))}}}return e.prototype.shuffle=function(){for(var e,t,a=this.cards.length;0!==a;)t=Math.floor(Math.random()*a),a-=1,e=this.cards[a],this.cards[a]=this.cards[t],this.cards[t]=e},e.prototype.isEmpty=function(){return 0===this.cards.length},e.prototype.dealCard=function(){if(this.isEmpty())throw new Error("No cards left in the deck");return this.removeTopCard()},e.prototype.removeTopCard=function(){return this.cards.splice(0,1)[0]},e}();t.default=n},function(e,t,a){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(0)),f=u(a(1)),d=function(){function e(e,t){this.rank=e,this.suit=t}return e.prototype.isTwoEyedJack=function(){return this.suit===f.default.DIAMOND&&this.rank===l.default.JACK||this.suit===f.default.CLUB&&this.rank===l.default.JACK},e.prototype.isOneEyedJack=function(){return this.suit===f.default.SPADE&&this.rank===l.default.JACK||this.suit===f.default.HEART&&this.rank===l.default.JACK},e}();t.default=d},function(e,t,a){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(5)),f=u(a(2)),d=new l.default;console.log(d),console.log(new f.default)},function(e,t,a){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(6)),f=u(a(7)),d=u(a(2)),n=u(a(8)),r=function(){function e(){this.player1=new l.default("player1",n.default.NUMBER_OF_CARDS_TWO_PLAYER),this.player2=new l.default("computer",n.default.NUMBER_OF_CARDS_TWO_PLAYER),this.board=new f.default,this.deck=new d.default,this.interval=0}return e.prototype.start=function(){this.deck.shuffle(),this.dealCards(this.player1),this.dealCards(this.player2),this.interval=setInterval(function(){})},e.prototype.nextPlayerMove=function(e,t){t(this.board,e.cards)},e.prototype.markGameOver=function(e){alert(e),clearInterval(this.interval)},e.prototype.dealCards=function(e){for(var t=0;t<n.default.NUMBER_OF_CARDS_TWO_PLAYER;t+=1){var a=this.deck.dealCard();e.addCard(a)}},e}();t.default=r},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){this.name=e,this.cards=[],this.maxCardsAllowed=t}return e.prototype.addCard=function(e){if(this.cards.length===this.maxCardsAllowed)throw Error("A player cannot have more than "+this.maxCardsAllowed+" cards");this.cards.push(e)},e}();t.default=u},function(e,t,a){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(3)),f=u(a(0)),d=u(a(1)),n=u(a(2)),r=function(){this.cards=[[null,new l.default(f.default.TWO,d.default.SPADE),new l.default(f.default.THREE,d.default.SPADE),new l.default(f.default.FOUR,d.default.SPADE),new l.default(f.default.FIVE,d.default.SPADE),new l.default(f.default.SIX,d.default.SPADE),new l.default(f.default.SEVEN,d.default.SPADE),new l.default(f.default.EIGHT,d.default.SPADE),new l.default(f.default.NINE,d.default.SPADE),null],[new l.default(f.default.SIX,d.default.CLUB),new l.default(f.default.FIVE,d.default.CLUB),new l.default(f.default.FOUR,d.default.CLUB),new l.default(f.default.THREE,d.default.CLUB),new l.default(f.default.TWO,d.default.CLUB),new l.default(f.default.ACE,d.default.HEART),new l.default(f.default.KING,d.default.HEART),new l.default(f.default.QUEEN,d.default.HEART),new l.default(f.default.TEN,d.default.HEART),new l.default(f.default.TEN,d.default.SPADE)],[new l.default(f.default.SEVEN,d.default.CLUB),new l.default(f.default.ACE,d.default.SPADE),new l.default(f.default.TWO,d.default.DIAMOND),new l.default(f.default.THREE,d.default.DIAMOND),new l.default(f.default.FOUR,d.default.DIAMOND),new l.default(f.default.FIVE,d.default.DIAMOND),new l.default(f.default.SIX,d.default.DIAMOND),new l.default(f.default.SEVEN,d.default.DIAMOND),new l.default(f.default.NINE,d.default.HEART),new l.default(f.default.QUEEN,d.default.SPADE)],[new l.default(f.default.EIGHT,d.default.CLUB),new l.default(f.default.KING,d.default.SPADE),new l.default(f.default.SIX,d.default.CLUB),new l.default(f.default.FIVE,d.default.CLUB),new l.default(f.default.FOUR,d.default.CLUB),new l.default(f.default.THREE,d.default.CLUB),new l.default(f.default.TWO,d.default.CLUB),new l.default(f.default.EIGHT,d.default.DIAMOND),new l.default(f.default.EIGHT,d.default.HEART),new l.default(f.default.KING,d.default.SPADE)],[new l.default(f.default.NINE,d.default.CLUB),new l.default(f.default.QUEEN,d.default.SPADE),new l.default(f.default.SEVEN,d.default.CLUB),new l.default(f.default.SIX,d.default.HEART),new l.default(f.default.FIVE,d.default.HEART),new l.default(f.default.FOUR,d.default.HEART),new l.default(f.default.ACE,d.default.HEART),new l.default(f.default.NINE,d.default.DIAMOND),new l.default(f.default.SEVEN,d.default.HEART),new l.default(f.default.ACE,d.default.SPADE)],[new l.default(f.default.TEN,d.default.CLUB),new l.default(f.default.TEN,d.default.SPADE),new l.default(f.default.EIGHT,d.default.CLUB),new l.default(f.default.SEVEN,d.default.HEART),new l.default(f.default.TWO,d.default.HEART),new l.default(f.default.THREE,d.default.HEART),new l.default(f.default.KING,d.default.HEART),new l.default(f.default.TEN,d.default.DIAMOND),new l.default(f.default.SIX,d.default.HEART),new l.default(f.default.TWO,d.default.DIAMOND)],[new l.default(f.default.QUEEN,d.default.CLUB),new l.default(f.default.NINE,d.default.SPADE),new l.default(f.default.NINE,d.default.CLUB),new l.default(f.default.EIGHT,d.default.HEART),new l.default(f.default.NINE,d.default.HEART),new l.default(f.default.TEN,d.default.HEART),new l.default(f.default.QUEEN,d.default.HEART),new l.default(f.default.QUEEN,d.default.DIAMOND),new l.default(f.default.FIVE,d.default.HEART),new l.default(f.default.THREE,d.default.DIAMOND)],[new l.default(f.default.KING,d.default.CLUB),new l.default(f.default.EIGHT,d.default.SPADE),new l.default(f.default.TEN,d.default.CLUB),new l.default(f.default.QUEEN,d.default.CLUB),new l.default(f.default.KING,d.default.CLUB),new l.default(f.default.ACE,d.default.CLUB),new l.default(f.default.ACE,d.default.DIAMOND),new l.default(f.default.KING,d.default.DIAMOND),new l.default(f.default.FOUR,d.default.HEART),new l.default(f.default.FOUR,d.default.DIAMOND)],[new l.default(f.default.ACE,d.default.CLUB),new l.default(f.default.SEVEN,d.default.SPADE),new l.default(f.default.SIX,d.default.SPADE),new l.default(f.default.FIVE,d.default.SPADE),new l.default(f.default.FOUR,d.default.SPADE),new l.default(f.default.THREE,d.default.SPADE),new l.default(f.default.TWO,d.default.SPADE),new l.default(f.default.TWO,d.default.HEART),new l.default(f.default.THREE,d.default.HEART),new l.default(f.default.FIVE,d.default.DIAMOND)],[null,new l.default(f.default.ACE,d.default.SPADE),new l.default(f.default.KING,d.default.SPADE),new l.default(f.default.QUEEN,d.default.SPADE),new l.default(f.default.TEN,d.default.SPADE),new l.default(f.default.NINE,d.default.SPADE),new l.default(f.default.EIGHT,d.default.SPADE),new l.default(f.default.SEVEN,d.default.HEART),new l.default(f.default.SIX,d.default.HEART),null]]};t.default=r,t.verifyBoard=function(){for(var e=new r,t=new n.default,a=0;a<e.cards.length;a+=1)for(var u=e.cards[a],l=0;l<u.length;l+=1){var f=u[l];if(null!=f)for(var d=0;d<t.cards.length;d++){var E=t.cards[d];if(E.suit===f.suit&&E.rank===f.rank){t.cards.splice(d,1);break}}}console.log(t)}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=Object.freeze({NUMBER_OF_CARDS_TWO_PLAYER:7});t.default=u}]);