!function(e){var t={};function a(u){if(t[u])return t[u].exports;var l=t[u]={i:u,l:!1,exports:{}};return e[u].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=t,a.d=function(e,t,u){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:u})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var u=Object.create(null);if(a.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(u,l,function(t){return e[t]}.bind(null,l));return u},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=9)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=Object.freeze({ACE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,SIX:6,SEVEN:7,EIGHT:8,NINE:9,TEN:10,JACK:11,QUEEN:12,KING:13,text:function(e){return u.validate(e),e===u.ACE?"A":e===u.JACK?"J":e===u.QUEEN?"Q":e===u.KING?"K":e},validate:function(e){if(null==e||e<1||e>13)throw Error("Invalid rank value: "+e+". Must be number between 1 and 13.")}});t.default=u},function(e,t,a){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(13)),d=Object.freeze({SPADE:1,CLUB:2,DIAMOND:3,HEART:4,text:function(e){switch(d.validate(e),e){case d.SPADE:return"Spade";case d.CLUB:return"Club";case d.DIAMOND:return"Diamond";case d.HEART:return"Heart"}},getDrawFunction:function(e){switch(d.validate(e),e){case d.SPADE:return l.default.drawSpade;case d.CLUB:return l.default.drawClub;case d.DIAMOND:return l.default.drawDiamond;case d.HEART:return l.default.drawHeart;default:throw Error("Invalid suit value: "+e)}},validate:function(e){if("number"!=typeof e||e<1||e>4)throw new Error("Invalid suit value: "+e+". Must be number between 1 and 4.")}});t.default=d},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){if(e<0||e>9)throw Error("Invalid row number: "+e);if(t<0||t>9)throw Error("Invalid column number: "+t);this.row=e,this.col=t}return e.prototype.toString=function(){return"row: "+this.row+", col: "+this.col},e}();t.default=u},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=Object.freeze({NUMBER_OF_CARDS_TWO_PLAYER:7,CANVAS_WIDTH:600,CANVAS_HEIGHT:600,CARD_SIZE:60,RANK_FONT_FAMILY:"22px Helvetica",RANK_X_OFFSET:2,RANK_Y_OFFSET:20,SUIT_FONT_FAMILY:"35px Helvetica",SUIT_X_OFFSET:50,SUIT_Y_OFFSET:36,SUIT_WIDTH:15,SUIT_HEIGHT:20,INDEX_FONT_FAMILY:"10px Helvetica",INDEX_X_OFFSET:33,INDEX_Y_OFFSET:15,TURN_INTERVAL:200,CHIP_RADIUS:12,PLAYER_CARDS_DIV_FONT_SIZE:"18px",PLAYER_CARDS_INDEX_FONT_SIZE:"10px",RESULT_DIV_FONT_SIZE:"50px"}),l=Object.freeze({NUMBER_OF_CARDS_TWO_PLAYER:7,CANVAS_WIDTH:1200,CANVAS_HEIGHT:1200,CARD_SIZE:120,RANK_FONT_FAMILY:"45px Helvetica",RANK_X_OFFSET:2,RANK_Y_OFFSET:40,SUIT_FONT_FAMILY:"70px Helvetica",SUIT_X_OFFSET:98,SUIT_Y_OFFSET:77,SUIT_WIDTH:30,SUIT_HEIGHT:40,INDEX_FONT_FAMILY:"20px Helvetica",INDEX_X_OFFSET:66,INDEX_Y_OFFSET:20,TURN_INTERVAL:200,CHIP_RADIUS:24,PLAYER_CARDS_DIV_FONT_SIZE:"36px",PLAYER_CARDS_INDEX_FONT_SIZE:"20px",RESULT_DIV_FONT_SIZE:"50px"}),d=Object.freeze({get NUMBER_OF_CARDS_TWO_PLAYER(){return n.NUMBER_OF_CARDS_TWO_PLAYER},get CANVAS_WIDTH(){return n.CANVAS_WIDTH},get CANVAS_HEIGHT(){return n.CANVAS_HEIGHT},get CARD_SIZE(){return n.CARD_SIZE},get RANK_FONT_FAMILY(){return n.RANK_FONT_FAMILY},get RANK_X_OFFSET(){return n.RANK_X_OFFSET},get RANK_Y_OFFSET(){return n.RANK_Y_OFFSET},get SUIT_FONT_FAMILY(){return n.SUIT_FONT_FAMILY},get SUIT_X_OFFSET(){return n.SUIT_X_OFFSET},get SUIT_Y_OFFSET(){return n.SUIT_Y_OFFSET},get SUIT_WIDTH(){return n.SUIT_WIDTH},get SUIT_HEIGHT(){return n.SUIT_HEIGHT},get INDEX_FONT_FAMILY(){return n.INDEX_FONT_FAMILY},get INDEX_X_OFFSET(){return n.INDEX_X_OFFSET},get INDEX_Y_OFFSET(){return n.INDEX_Y_OFFSET},get TURN_INTERVAL(){return n.INDEX_Y_OFFSET},get CHIP_RADIUS(){return n.CHIP_RADIUS},get PLAYER_CARDS_DIV_FONT_SIZE(){return n.PLAYER_CARDS_DIV_FONT_SIZE},get PLAYER_CARDS_INDEX_FONT_SIZE(){return n.PLAYER_CARDS_INDEX_FONT_SIZE},get RESULT_DIV_FONT_SIZE(){return n.RESULT_DIV_FONT_SIZE}}),n=l;t.setupGameConfig=function(e){void 0===e&&(e=!1),n=e?u:l},t.default=d},function(e,t,a){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(0)),d=u(a(1)),n=function(){function e(e,t){if(t<1||t>4)throw new Error("Invalid suit value: "+t);if(e<1||e>13)throw new Error("Invalid rank value: "+e);this.rank=e,this.suit=t,this.twoEyedJack=this.isTwoEyedJack(),this.oneEyedJack=this.isOneEyedJack()}return e.prototype.isTwoEyedJack=function(){return this.suit===d.default.DIAMOND&&this.rank===l.default.JACK||this.suit===d.default.CLUB&&this.rank===l.default.JACK},e.prototype.isOneEyedJack=function(){return this.suit===d.default.SPADE&&this.rank===l.default.JACK||this.suit===d.default.HEART&&this.rank===l.default.JACK},e.prototype.matches=function(e){return null!=e&&(e.suit===this.suit&&e.rank===this.rank)},e.prototype.toString=function(){return"Rank: "+this.rankDisplay()+", Suit: "+d.default.text(this.suit)},e.prototype.clone=function(){return new e(this.rank,this.suit)},e.prototype.rankDisplay=function(){return l.default.text(this.rank)},e.prototype.suitDisplay=function(){switch(this.suit){case d.default.SPADE:return"♠";case d.default.HEART:return"♥";case d.default.DIAMOND:return"♦";case d.default.CLUB:return"♣";default:throw new Error("Invalid suit: "+d.default.text(this.suit))}},e.prototype.suitColor=function(){switch(this.suit){case d.default.SPADE:case d.default.CLUB:return"#000";case d.default.HEART:case d.default.DIAMOND:return"red";default:throw new Error("Invalid suit: "+d.default.text(this.suit))}},e.prototype.getDisplayHtml=function(){return this.rankDisplay()+' <span style="color: '+this.suitColor()+'">'+this.suitDisplay()+"</span>"},e}();t.default=n},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=function(e,t,a){this.type=e,this.card=t,this.position=a};t.default=u},function(e,t,a){"use strict";var u;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.PLACE_CHIP=1]="PLACE_CHIP",e[e.REPLACE_DEAD_CARD=2]="REPLACE_DEAD_CARD",e[e.REMOVE_CHIP=3]="REMOVE_CHIP"}(u||(u={})),t.default=u},function(e,t,a){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(4)),d=u(a(1)),n=u(a(0)),f=function(){function e(){this.cards=[],this.discardedCards=[],this.addOneDeck(),this.addOneDeck()}return e.prototype.addOneDeck=function(){this.addCardsForSuit(d.default.CLUB),this.addCardsForSuit(d.default.DIAMOND),this.addCardsForSuit(d.default.HEART),this.addCardsForSuit(d.default.SPADE)},e.prototype.addCardsForSuit=function(e){this.cards.push(new l.default(n.default.ACE,e)),this.cards.push(new l.default(n.default.TWO,e)),this.cards.push(new l.default(n.default.THREE,e)),this.cards.push(new l.default(n.default.FOUR,e)),this.cards.push(new l.default(n.default.FIVE,e)),this.cards.push(new l.default(n.default.SIX,e)),this.cards.push(new l.default(n.default.SEVEN,e)),this.cards.push(new l.default(n.default.EIGHT,e)),this.cards.push(new l.default(n.default.NINE,e)),this.cards.push(new l.default(n.default.TEN,e)),this.cards.push(new l.default(n.default.JACK,e)),this.cards.push(new l.default(n.default.QUEEN,e)),this.cards.push(new l.default(n.default.KING,e))},e.prototype.shuffle=function(){for(var e,t,a=this.cards.length;0!==a;)t=Math.floor(Math.random()*a),a-=1,e=this.cards[a],this.cards[a]=this.cards[t],this.cards[t]=e},e.prototype.isEmpty=function(){return 0===this.cards.length},e.prototype.dealCard=function(){this.isEmpty()&&(console.log("No cards left in the deck, reshuffling from discard pile."),this.moveCardsFromDiscardPile(),this.shuffle());var e=this.removeTopCard();return this.discardedCards.push(e),e},e.prototype.removeTopCard=function(){return this.cards.splice(0,1)[0]},e.prototype.moveCardsFromDiscardPile=function(){for(var e=0;e<this.discardedCards.length;e++){var t=this.discardedCards[e];this.discardedCards.splice(e,1),this.cards.push(t)}},e}();t.default=f},function(e,t,a){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(5)),d=u(a(6)),n=u(a(2));function f(e,t){var a=t.col-e.col,u=t.row-e.row;return Math.sqrt(a*a+u*u)}function r(e,t){for(var a=0;a<e.length;a++)for(var u=e[a],l=0;l<u.length;l++){var d=u[l];if(d.isEmptySlot()&&d.hasMatchingCard(t))return new n.default(a,l)}return null}t.default=function(e,t,a){for(var u=[],o=0;o<t.length;o++){var i=t[o],s=r(e,i);if(null==s)return new l.default(d.default.REPLACE_DEAD_CARD,i);u.push(s)}var c=function(e,t){var a=t[0],u=f(e,t[0]);return t.forEach(function(t){var l=f(e,t);l<u&&(a=t,u=l)}),a}(new n.default(5,5),u),w=e[c.row][c.col];if(!w.isEmptySlot()||null==w.card)throw Error("Slot is not empty at position: "+c.toString());return new l.default(d.default.PLACE_CHIP,w.card,c)}},function(e,t,a){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(10)),d=u(a(8)),n=u(a(18));window.Game=l.default,window.ManualUser=n.default,window.Computer=d.default},function(e,t,a){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var d=u(a(11)),n=u(a(12)),f=u(a(7)),r=l(a(3)),o=u(a(5)),i=u(a(4)),s=u(a(8)),c=u(a(15)),w=u(a(6)),E=u(a(16)),h=u(a(17)),p=u(a(1)),A=u(a(0)),I=u(a(2)),_=function(){function e(e,t,a,u,l){if(void 0===a&&(a="Computer"),void 0===u&&(u=s.default),void 0===l&&(l=!1),null==t||"function"!=typeof t)throw Error("Must provide game algorithm function to play");r.setupGameConfig(l),this.canvas=this.createCanvas(),this.ctx=this.setupCanvas(),this.resultHeader=this.createResultHeading(),this.player1DisplayDiv=this.createPlayerCardsHolder("player1DisplayDiv"),this.player2DisplayDiv=this.createPlayerCardsHolder("player2DisplayDiv"),this.player1=new d.default(e,r.default.NUMBER_OF_CARDS_TWO_PLAYER,!1,E.default.GREEN),this.player2=new d.default(a,r.default.NUMBER_OF_CARDS_TWO_PLAYER,!0,E.default.BLUE),this.computer1=t,this.computer2=u,this.board=new n.default,this.deck=new f.default,this.start()}return e.prototype.start=function(){this.deck.shuffle(),this.dealCards(this.player1),this.dealCards(this.player2),this.display(),this.playOneRound()},e.prototype.playOneRound=function(){var e=this;try{try{this.nextPlayerMove(this.player1,this.computer1),this.display()}catch(e){return console.error(e),void this.markGameOver(this.player2.name+' won because of other player\'s \n          error: <small style="color: #848484">'+e.message+"</small>")}if(this.isGameOver(this.player1))return void this.markGameOver(this.player1.name+" wins!");try{this.nextPlayerMove(this.player2,this.computer2),this.display()}catch(e){return console.error(e),void this.markGameOver(this.player1.name+' won because of other player\'s \n          error: <small style="color: #848484">'+e.message+"</small>")}if(this.isGameOver(this.player2))return void this.markGameOver(this.player2.name+" wins!");this.turnTimeout=setTimeout(function(){return e.playOneRound()},r.default.TURN_INTERVAL)}catch(e){console.error(e,this),this.markGameOver("Game error: "+e.message)}},e.prototype.nextPlayerMove=function(e,t,a){void 0===a&&(a=!1);var u=t(this.board.cloneSlots(),e.cloneCards(),e.chipColor);this.validateMoveStructure(u);var l=this.createMoveClassObject(u);switch(this.validatePlayerHasCard(e,l.card),this.dealNewCardToPlayer(e,l.card),l.type){case w.default.PLACE_CHIP:if(null==l.position)throw Error("Invalid position to place chip");this.board.placeChip(new c.default(e.chipColor),l.card,l.position);break;case w.default.REPLACE_DEAD_CARD:if(this.validateDeadCard(e,l),a)return;return this.display(),void this.nextPlayerMove(e,t,!0);case w.default.REMOVE_CHIP:if(null==l.position)throw Error("Invalid position ["+l.position+"]");return this.validateRemoveChip(l,e),void this.board.removeChip(l.position);default:throw new Error("Invalid move type: "+l.type)}},e.prototype.createMoveClassObject=function(e){return new o.default(e.type,new i.default(e.card.rank,e.card.suit),null!=e.position?new I.default(e.position.row,e.position.col):e.position)},e.prototype.validateMoveStructure=function(e){if(null==e)throw Error("Move cannot be null or undefined");if(null==e.type||e.type!==w.default.REMOVE_CHIP&&e.type!==w.default.PLACE_CHIP&&e.type!==w.default.REPLACE_DEAD_CARD)throw console.log("Move",e),Error("Invalid move structure. move.type must be number 1,2 or 3.");if(null==e.card||null==e.card.suit||null==e.card.rank)throw console.log("Move",e),Error("Invalid move structure. move.card should have suit & rank.");if(p.default.validate(e.card.suit),A.default.validate(e.card.rank),e.type!==w.default.REPLACE_DEAD_CARD&&(null==e.position||null==e.position.row||null==e.position.col||e.position.row<0||e.position.row>9||e.position.col<0||e.position.col>9))throw console.log("Move",e),Error("Invalid move structure. move.position must have row & col attributes \n      with values between 0 & 9 inclusive.")},e.prototype.validateRemoveChip=function(e,t){if(!e.card.isOneEyedJack())throw Error("Card is not oneEyedJack ["+e.card.toString()+"]");if(null==e.position)throw Error("Invalid position ["+e.position+"]");var a=this.board.slots[e.position.row][e.position.col];if(null==a.chip)throw Error("There is no chip at position: "+e.position.toString()+" "+a);if(a.chip.color===t.chipColor)throw Error("Select chip of opponent player.");if(null!=a.chip&&a.chip.isInSequence())throw Error("Chip is already part of a sequence")},e.prototype.validateDeadCard=function(e,t){for(var a=0;a<this.board.slots.length;a+=1)for(var u=this.board.slots[a],l=0;l<u.length;l+=1){var d=u[l];if(d.isEmptySlot()&&d.hasMatchingCard(t.card))throw Error("Card is not dead: "+t.card.toString())}},e.prototype.validatePlayerHasCard=function(e,t){for(var a=0,u=e.cards;a<u.length;a++){if(u[a].matches(t))return}throw new Error("Card should belong to player's hand: "+t.toString())},e.prototype.display=function(){var e=this;requestAnimationFrame(function(){e.board.displayBoard(e.ctx)}),this.player1.display(this.player1DisplayDiv),this.player2.display(this.player2DisplayDiv)},e.prototype.isGameOver=function(e){return h.default.calculate(this.board,e.chipColor)},e.prototype.markGameOver=function(e){this.resultHeader.innerHTML=e,this.resultHeader.style.display="block",null!=this.turnTimeout&&clearTimeout(this.turnTimeout),this.display()},e.prototype.dealCards=function(e){for(var t=0;t<r.default.NUMBER_OF_CARDS_TWO_PLAYER;t+=1)this.dealCardToPlayer(e)},e.prototype.dealCardToPlayer=function(e){var t=this.deck.dealCard();e.addCard(t)},e.prototype.dealNewCardToPlayer=function(e,t){e.discardCard(t),this.dealCardToPlayer(e)},e.prototype.createResultHeading=function(){var e=document.createElement("h1");return e.id="resultHeading",e.style.display="none",e.style.fontSize=r.default.RESULT_DIV_FONT_SIZE,e.style.cssFloat="right",this.appendElementToBody(e),e},e.prototype.createPlayerCardsHolder=function(e){var t=document.createElement("div");return t.id=e,t.style.fontSize=r.default.PLAYER_CARDS_DIV_FONT_SIZE,this.appendElementToBody(t),t},e.prototype.createCanvas=function(){var e=document.createElement("canvas");return e.width=r.default.CANVAS_WIDTH,e.height=r.default.CANVAS_HEIGHT,e.id="canvasId",this.appendElementToBody(e),e},e.prototype.appendElementToBody=function(e){document.getElementsByTagName("body")[0].appendChild(e)},e.prototype.setupCanvas=function(){var e=window.devicePixelRatio||1,t=this.canvas.getBoundingClientRect();this.canvas.width=t.width*e,this.canvas.height=t.height*e;var a=this.canvas.getContext("2d");if(null===a)throw Error("Unable to get CanvasRenderingContext2D");return a.scale(e,e),a},e}();t.default=_},function(e,t,a){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(3)),d=function(){function e(e,t,a,u){this.name=e,this.cards=[],this.maxCardsAllowed=t,this.isComputer=a,this.chipColor=u,this.sequenceCount=0}return e.prototype.addCard=function(e){if(this.cards.length===this.maxCardsAllowed)throw Error("A player cannot have more than "+this.maxCardsAllowed+" cards");this.cards.push(e)},e.prototype.discardCard=function(e){for(var t=0;t<this.cards.length;t++){if(this.cards[t].matches(e))return void this.cards.splice(t,1)}throw new Error("Player does not have this card: "+e.toString())},e.prototype.cloneCards=function(){var e=[];return this.cards.forEach(function(t){return e.push(t.clone())}),e},e.prototype.sequenceCompleted=function(){this.sequenceCount++},e.prototype.getSequenceCount=function(){return this.sequenceCount},e.prototype.display=function(e){var t=0;e.innerHTML='<span style="color: '+this.chipColor+'">'+this.name+"</span>: "+this.cards.map(function(e){var a=e.isOneEyedJack()?"👁":e.isTwoEyedJack()?"👀":"";return e.getDisplayHtml()+a+'<span style="font-size:'+l.default.PLAYER_CARDS_INDEX_FONT_SIZE+';">('+t+++")</span>"}).join(", ")},e}();t.default=d},function(e,t,a){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(4)),d=u(a(0)),n=u(a(1)),f=u(a(7)),r=u(a(2)),o=u(a(3)),i=u(a(14)),s=function(){function e(){this.slots=[[new i.default(!0),new i.default(!1,new l.default(d.default.TWO,n.default.SPADE)),new i.default(!1,new l.default(d.default.THREE,n.default.SPADE)),new i.default(!1,new l.default(d.default.FOUR,n.default.SPADE)),new i.default(!1,new l.default(d.default.FIVE,n.default.SPADE)),new i.default(!1,new l.default(d.default.SIX,n.default.SPADE)),new i.default(!1,new l.default(d.default.SEVEN,n.default.SPADE)),new i.default(!1,new l.default(d.default.EIGHT,n.default.SPADE)),new i.default(!1,new l.default(d.default.NINE,n.default.SPADE)),new i.default(!0)],[new i.default(!1,new l.default(d.default.SIX,n.default.CLUB)),new i.default(!1,new l.default(d.default.FIVE,n.default.CLUB)),new i.default(!1,new l.default(d.default.FOUR,n.default.CLUB)),new i.default(!1,new l.default(d.default.THREE,n.default.CLUB)),new i.default(!1,new l.default(d.default.TWO,n.default.CLUB)),new i.default(!1,new l.default(d.default.ACE,n.default.HEART)),new i.default(!1,new l.default(d.default.KING,n.default.HEART)),new i.default(!1,new l.default(d.default.QUEEN,n.default.HEART)),new i.default(!1,new l.default(d.default.TEN,n.default.HEART)),new i.default(!1,new l.default(d.default.TEN,n.default.SPADE))],[new i.default(!1,new l.default(d.default.SEVEN,n.default.CLUB)),new i.default(!1,new l.default(d.default.ACE,n.default.SPADE)),new i.default(!1,new l.default(d.default.TWO,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.THREE,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.FOUR,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.FIVE,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.SIX,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.SEVEN,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.NINE,n.default.HEART)),new i.default(!1,new l.default(d.default.QUEEN,n.default.SPADE))],[new i.default(!1,new l.default(d.default.EIGHT,n.default.CLUB)),new i.default(!1,new l.default(d.default.KING,n.default.SPADE)),new i.default(!1,new l.default(d.default.SIX,n.default.CLUB)),new i.default(!1,new l.default(d.default.FIVE,n.default.CLUB)),new i.default(!1,new l.default(d.default.FOUR,n.default.CLUB)),new i.default(!1,new l.default(d.default.THREE,n.default.CLUB)),new i.default(!1,new l.default(d.default.TWO,n.default.CLUB)),new i.default(!1,new l.default(d.default.EIGHT,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.EIGHT,n.default.HEART)),new i.default(!1,new l.default(d.default.KING,n.default.SPADE))],[new i.default(!1,new l.default(d.default.NINE,n.default.CLUB)),new i.default(!1,new l.default(d.default.QUEEN,n.default.SPADE)),new i.default(!1,new l.default(d.default.SEVEN,n.default.CLUB)),new i.default(!1,new l.default(d.default.SIX,n.default.HEART)),new i.default(!1,new l.default(d.default.FIVE,n.default.HEART)),new i.default(!1,new l.default(d.default.FOUR,n.default.HEART)),new i.default(!1,new l.default(d.default.ACE,n.default.HEART)),new i.default(!1,new l.default(d.default.NINE,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.SEVEN,n.default.HEART)),new i.default(!1,new l.default(d.default.ACE,n.default.SPADE))],[new i.default(!1,new l.default(d.default.TEN,n.default.CLUB)),new i.default(!1,new l.default(d.default.TEN,n.default.SPADE)),new i.default(!1,new l.default(d.default.EIGHT,n.default.CLUB)),new i.default(!1,new l.default(d.default.SEVEN,n.default.HEART)),new i.default(!1,new l.default(d.default.TWO,n.default.HEART)),new i.default(!1,new l.default(d.default.THREE,n.default.HEART)),new i.default(!1,new l.default(d.default.KING,n.default.HEART)),new i.default(!1,new l.default(d.default.TEN,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.SIX,n.default.HEART)),new i.default(!1,new l.default(d.default.TWO,n.default.DIAMOND))],[new i.default(!1,new l.default(d.default.QUEEN,n.default.CLUB)),new i.default(!1,new l.default(d.default.NINE,n.default.SPADE)),new i.default(!1,new l.default(d.default.NINE,n.default.CLUB)),new i.default(!1,new l.default(d.default.EIGHT,n.default.HEART)),new i.default(!1,new l.default(d.default.NINE,n.default.HEART)),new i.default(!1,new l.default(d.default.TEN,n.default.HEART)),new i.default(!1,new l.default(d.default.QUEEN,n.default.HEART)),new i.default(!1,new l.default(d.default.QUEEN,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.FIVE,n.default.HEART)),new i.default(!1,new l.default(d.default.THREE,n.default.DIAMOND))],[new i.default(!1,new l.default(d.default.KING,n.default.CLUB)),new i.default(!1,new l.default(d.default.EIGHT,n.default.SPADE)),new i.default(!1,new l.default(d.default.TEN,n.default.CLUB)),new i.default(!1,new l.default(d.default.QUEEN,n.default.CLUB)),new i.default(!1,new l.default(d.default.KING,n.default.CLUB)),new i.default(!1,new l.default(d.default.ACE,n.default.CLUB)),new i.default(!1,new l.default(d.default.ACE,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.KING,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.FOUR,n.default.HEART)),new i.default(!1,new l.default(d.default.FOUR,n.default.DIAMOND))],[new i.default(!1,new l.default(d.default.ACE,n.default.CLUB)),new i.default(!1,new l.default(d.default.SEVEN,n.default.SPADE)),new i.default(!1,new l.default(d.default.SIX,n.default.SPADE)),new i.default(!1,new l.default(d.default.FIVE,n.default.SPADE)),new i.default(!1,new l.default(d.default.FOUR,n.default.SPADE)),new i.default(!1,new l.default(d.default.THREE,n.default.SPADE)),new i.default(!1,new l.default(d.default.TWO,n.default.SPADE)),new i.default(!1,new l.default(d.default.TWO,n.default.HEART)),new i.default(!1,new l.default(d.default.THREE,n.default.HEART)),new i.default(!1,new l.default(d.default.FIVE,n.default.DIAMOND))],[new i.default(!0),new i.default(!1,new l.default(d.default.ACE,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.KING,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.QUEEN,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.TEN,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.NINE,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.EIGHT,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.SEVEN,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.SIX,n.default.DIAMOND)),new i.default(!0)]]}return e.prototype.removeChip=function(e){var t=this.slots[e.row][e.col];if(null==t.chip)throw Error("There is no chip to be removed at position: "+e.toString());t.removeChip()},e.prototype.placeChip=function(e,t,a){this.validateChipCanBePlaced(t,a),this.slots[a.row][a.col].placeChip(e)},e.prototype.validateChipCanBePlaced=function(e,t){var a=t.row,u=t.col,l=this.slots[a][u];if(null!=l.chip)throw Error("Chip already placed at position: "+t.toString());if(l.isCorner)throw Error("Card cannot be placed at four corners");if(null==l.card||!e.isTwoEyedJack()&&!e.matches(l.card))throw console.log(l),Error("Card at: "+a+", "+u+" in deck is: "+(null==l.card?"corner":l.card.toString())+", and player's card is "+e.toString())},e.prototype.verifyBoard=function(){for(var e=new f.default,t=0;t<this.slots.length;t+=1)for(var a=this.slots[t],u=0;u<a.length;u+=1){var l=a[u];if(!l.isCorner)for(var d=0;d<e.cards.length;d++){var n=e.cards[d];if(l.isEmptySlot()&&l.hasMatchingCard(n)){e.cards.splice(d,1);break}}}console.log(e)},e.prototype.displayBoard=function(e){e.clearRect(0,0,o.default.CANVAS_WIDTH,o.default.CANVAS_HEIGHT);for(var t=0;t<this.slots.length;t+=1)for(var a=this.slots[t],u=0;u<a.length;u+=1){var l=a[u],d=new r.default(t,u);if(l.isCorner)this.drawCorner(e,d);else if(null!=l.chip)this.drawChip(e,l,d);else{if(!l.isEmptySlot())throw Error("Invalid board element: "+l);this.drawCard(e,l,d)}}},e.prototype.drawCorner=function(e,t){this.drawBorderedRect(e,t,"#eee");var a=o.default.CHIP_RADIUS,u=o.default.CARD_SIZE/2,l=t.row*o.default.CARD_SIZE+u,d=t.col*o.default.CARD_SIZE+u;e.fillStyle="#000",e.beginPath(),e.arc(d,l,a,0,2*Math.PI,!1),e.fill()},e.prototype.drawChip=function(e,t,a){if(null==t.card||null==t.chip)throw Error("Chip should be present at the slot: "+a.toString());this.drawCard(e,t,a);var u=o.default.CARD_SIZE/2,l=a.row*o.default.CARD_SIZE+u,d=a.col*o.default.CARD_SIZE+u;t.chip.isInSequence()&&(e.fillStyle="#000",e.beginPath(),e.arc(d,l,o.default.CHIP_RADIUS,0,2*Math.PI,!1),e.fill()),e.fillStyle=t.chip.color,e.beginPath();var n=t.chip.isInSequence()?o.default.CHIP_RADIUS/2:o.default.CHIP_RADIUS;e.arc(d,l,n,0,2*Math.PI,!1),e.fill()},e.prototype.drawCard=function(e,t,a){if(null==t.card)throw Error("Card should be present at slot: "+a.toString());var u=t.card,l=a.col*o.default.CARD_SIZE,d=a.row*o.default.CARD_SIZE;e.fillStyle="#000",e.rect(l,d,o.default.CARD_SIZE,o.default.CARD_SIZE),e.stroke(),e.fillStyle="#000",e.font=o.default.RANK_FONT_FAMILY;var f=l+o.default.RANK_X_OFFSET,r=d+o.default.RANK_Y_OFFSET;e.fillText(""+u.rankDisplay(),f,r),e.font=o.default.INDEX_FONT_FAMILY;var i=l+o.default.INDEX_X_OFFSET,s=d+o.default.INDEX_Y_OFFSET;e.fillText("("+a.row+", "+a.col+")",i,s),n.default.getDrawFunction(u.suit)(e,l+o.default.SUIT_X_OFFSET,d+o.default.SUIT_Y_OFFSET,o.default.SUIT_WIDTH,o.default.SUIT_HEIGHT)},e.prototype.drawBorderedRect=function(e,t,a){var u=t.row*o.default.CARD_SIZE,l=t.col*o.default.CARD_SIZE,d=o.default.CARD_SIZE;e.fillStyle="#000",e.fillRect(l,u,d,d),e.fillStyle=a,e.fillRect(l+1,u+1,d-2,d-2)},e.prototype.cloneSlots=function(){var e=[];return this.slots.map(function(t){e.push(t.map(function(e){return e.clone()}))}),e},e}();t.default=s,t.DEFAULT_BOARD_STATE=[[new i.default(!0),new i.default(!1,new l.default(d.default.TWO,n.default.SPADE)),new i.default(!1,new l.default(d.default.THREE,n.default.SPADE)),new i.default(!1,new l.default(d.default.FOUR,n.default.SPADE)),new i.default(!1,new l.default(d.default.FIVE,n.default.SPADE)),new i.default(!1,new l.default(d.default.SIX,n.default.SPADE)),new i.default(!1,new l.default(d.default.SEVEN,n.default.SPADE)),new i.default(!1,new l.default(d.default.EIGHT,n.default.SPADE)),new i.default(!1,new l.default(d.default.NINE,n.default.SPADE)),new i.default(!0)],[new i.default(!1,new l.default(d.default.SIX,n.default.CLUB)),new i.default(!1,new l.default(d.default.FIVE,n.default.CLUB)),new i.default(!1,new l.default(d.default.FOUR,n.default.CLUB)),new i.default(!1,new l.default(d.default.THREE,n.default.CLUB)),new i.default(!1,new l.default(d.default.TWO,n.default.CLUB)),new i.default(!1,new l.default(d.default.ACE,n.default.HEART)),new i.default(!1,new l.default(d.default.KING,n.default.HEART)),new i.default(!1,new l.default(d.default.QUEEN,n.default.HEART)),new i.default(!1,new l.default(d.default.TEN,n.default.HEART)),new i.default(!1,new l.default(d.default.TEN,n.default.SPADE))],[new i.default(!1,new l.default(d.default.SEVEN,n.default.CLUB)),new i.default(!1,new l.default(d.default.ACE,n.default.SPADE)),new i.default(!1,new l.default(d.default.TWO,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.THREE,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.FOUR,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.FIVE,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.SIX,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.SEVEN,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.NINE,n.default.HEART)),new i.default(!1,new l.default(d.default.QUEEN,n.default.SPADE))],[new i.default(!1,new l.default(d.default.EIGHT,n.default.CLUB)),new i.default(!1,new l.default(d.default.KING,n.default.SPADE)),new i.default(!1,new l.default(d.default.SIX,n.default.CLUB)),new i.default(!1,new l.default(d.default.FIVE,n.default.CLUB)),new i.default(!1,new l.default(d.default.FOUR,n.default.CLUB)),new i.default(!1,new l.default(d.default.THREE,n.default.CLUB)),new i.default(!1,new l.default(d.default.TWO,n.default.CLUB)),new i.default(!1,new l.default(d.default.EIGHT,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.EIGHT,n.default.HEART)),new i.default(!1,new l.default(d.default.KING,n.default.SPADE))],[new i.default(!1,new l.default(d.default.NINE,n.default.CLUB)),new i.default(!1,new l.default(d.default.QUEEN,n.default.SPADE)),new i.default(!1,new l.default(d.default.SEVEN,n.default.CLUB)),new i.default(!1,new l.default(d.default.SIX,n.default.HEART)),new i.default(!1,new l.default(d.default.FIVE,n.default.HEART)),new i.default(!1,new l.default(d.default.FOUR,n.default.HEART)),new i.default(!1,new l.default(d.default.ACE,n.default.HEART)),new i.default(!1,new l.default(d.default.NINE,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.SEVEN,n.default.HEART)),new i.default(!1,new l.default(d.default.ACE,n.default.SPADE))],[new i.default(!1,new l.default(d.default.TEN,n.default.CLUB)),new i.default(!1,new l.default(d.default.TEN,n.default.SPADE)),new i.default(!1,new l.default(d.default.EIGHT,n.default.CLUB)),new i.default(!1,new l.default(d.default.SEVEN,n.default.HEART)),new i.default(!1,new l.default(d.default.TWO,n.default.HEART)),new i.default(!1,new l.default(d.default.THREE,n.default.HEART)),new i.default(!1,new l.default(d.default.KING,n.default.HEART)),new i.default(!1,new l.default(d.default.TEN,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.SIX,n.default.HEART)),new i.default(!1,new l.default(d.default.TWO,n.default.DIAMOND))],[new i.default(!1,new l.default(d.default.QUEEN,n.default.CLUB)),new i.default(!1,new l.default(d.default.NINE,n.default.SPADE)),new i.default(!1,new l.default(d.default.NINE,n.default.CLUB)),new i.default(!1,new l.default(d.default.EIGHT,n.default.HEART)),new i.default(!1,new l.default(d.default.NINE,n.default.HEART)),new i.default(!1,new l.default(d.default.TEN,n.default.HEART)),new i.default(!1,new l.default(d.default.QUEEN,n.default.HEART)),new i.default(!1,new l.default(d.default.QUEEN,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.FIVE,n.default.HEART)),new i.default(!1,new l.default(d.default.THREE,n.default.DIAMOND))],[new i.default(!1,new l.default(d.default.KING,n.default.CLUB)),new i.default(!1,new l.default(d.default.EIGHT,n.default.SPADE)),new i.default(!1,new l.default(d.default.TEN,n.default.CLUB)),new i.default(!1,new l.default(d.default.QUEEN,n.default.CLUB)),new i.default(!1,new l.default(d.default.KING,n.default.CLUB)),new i.default(!1,new l.default(d.default.ACE,n.default.CLUB)),new i.default(!1,new l.default(d.default.ACE,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.KING,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.FOUR,n.default.HEART)),new i.default(!1,new l.default(d.default.FOUR,n.default.DIAMOND))],[new i.default(!1,new l.default(d.default.ACE,n.default.CLUB)),new i.default(!1,new l.default(d.default.SEVEN,n.default.SPADE)),new i.default(!1,new l.default(d.default.SIX,n.default.SPADE)),new i.default(!1,new l.default(d.default.FIVE,n.default.SPADE)),new i.default(!1,new l.default(d.default.FOUR,n.default.SPADE)),new i.default(!1,new l.default(d.default.THREE,n.default.SPADE)),new i.default(!1,new l.default(d.default.TWO,n.default.SPADE)),new i.default(!1,new l.default(d.default.TWO,n.default.HEART)),new i.default(!1,new l.default(d.default.THREE,n.default.HEART)),new i.default(!1,new l.default(d.default.FIVE,n.default.DIAMOND))],[new i.default(!0),new i.default(!1,new l.default(d.default.ACE,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.KING,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.QUEEN,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.TEN,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.NINE,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.EIGHT,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.SEVEN,n.default.DIAMOND)),new i.default(!1,new l.default(d.default.SIX,n.default.DIAMOND)),new i.default(!0)]]},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(){}return e.drawSpade=function(e,t,a,u,l){e.save();var d=.7*u,n=.7*l,f=.3*l;e.beginPath(),e.moveTo(t,a),e.bezierCurveTo(t,a+n/2,t-u/2,a+n/2,t-u/2,a+n),e.bezierCurveTo(t-u/2,a+1.3*n,t,a+1.3*n,t,a+n),e.bezierCurveTo(t,a+1.3*n,t+u/2,a+1.3*n,t+u/2,a+n),e.bezierCurveTo(t+u/2,a+n/2,t,a+n/2,t,a),e.closePath(),e.fill(),e.beginPath(),e.moveTo(t,a+n),e.quadraticCurveTo(t,a+n+f,t-d/2,a+n+f),e.lineTo(t+d/2,a+n+f),e.quadraticCurveTo(t,a+n+f,t,a+n),e.closePath(),e.fillStyle="black",e.fill(),e.restore()},e.drawHeart=function(e,t,a,u,l){e.save(),e.beginPath();var d=.3*l;e.moveTo(t,a+d),e.bezierCurveTo(t,a,t-u/2,a,t-u/2,a+d),e.bezierCurveTo(t-u/2,a+(l+d)/2,t,a+(l+d)/2,t,a+l),e.bezierCurveTo(t,a+(l+d)/2,t+u/2,a+(l+d)/2,t+u/2,a+d),e.bezierCurveTo(t+u/2,a,t,a,t,a+d),e.closePath(),e.fillStyle="red",e.fill(),e.restore()},e.drawClub=function(e,t,a,u,l){e.save();var d=.3*u,n=.5*u;e.fillStyle="black",e.beginPath(),e.arc(t,a+d+.05*l,d,0,2*Math.PI,!1),e.fill(),e.beginPath(),e.arc(t+d,a+.6*l,d,0,2*Math.PI,!1),e.fill(),e.beginPath(),e.arc(t-d,a+.6*l,d,0,2*Math.PI,!1),e.fill(),e.beginPath(),e.arc(t,a+.5*l,d/2,0,2*Math.PI,!1),e.fill(),e.moveTo(t,a+.6*l),e.quadraticCurveTo(t,a+l,t-n/2,a+l),e.lineTo(t+n/2,a+l),e.quadraticCurveTo(t,a+l,t,a+.6*l),e.closePath(),e.fill(),e.restore()},e.drawDiamond=function(e,t,a,u,l){e.save(),e.beginPath(),e.moveTo(t,a),e.lineTo(t-u/2,a+l/2),e.lineTo(t,a+l),e.lineTo(t+u/2,a+l/2),e.closePath(),e.fillStyle="red",e.fill(),e.restore()},e}();t.default=u},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t,a){if(e&&(null!=t||null!=a))throw Error("Chip/card cannot be placed in corner");this.isCorner=e,this.card=t,this.chip=a}return e.prototype.placeChip=function(e){if(null==e)throw Error("Chip cannot be null or undefined");if(null!=this.chip)throw Error("Chip already placed in this slot");this.chip=e},e.prototype.removeChip=function(){if(null==this.chip)throw Error("There is no chip in this slot");this.chip=void 0},e.prototype.isEmptySlot=function(){return!this.isCorner&&null==this.chip},e.prototype.hasMatchingCard=function(e){return e.matches(this.card||null)},e.prototype.clone=function(){return new e(this.isCorner,null!=this.card?this.card.clone():void 0,null!=this.chip?this.chip.clone():void 0)},e}();t.default=u},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){void 0===t&&(t=!1),this.color=e,this.inSequence=t}return e.prototype.markInSequence=function(){this.inSequence=!0},e.prototype.clone=function(){return new e(this.color,this.inSequence)},e.prototype.isInSequence=function(){return this.inSequence},e}();t.default=u},function(e,t,a){"use strict";var u;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BLUE="#1E90FF",e.GREEN="#228B22"}(u||(u={})),t.default=u},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(){}return e.calculate=function(e,t){for(var a=0,u=function(u){var d=e.slots[u];a=l.calculateSequenceCount(d,t,a);var n=e.slots.map(function(e){return e[u]});a=l.calculateSequenceCount(n,t,a)},l=this,d=0;d<10;d++)u(d);for(var n=0,f=0,r=0;r<10;r++){var o=[];n=0,f=r;for(var i=0;i<10;i++)n<=9&&f<=9&&(o.push(e.slots[n][f]),n++,f++);a=this.calculateSequenceCount(o,t,a)}for(r=1;r<10;r++){o=[];n=r,f=0;for(i=0;i<10;i++)n<=9&&f<=9&&(o.push(e.slots[n][f]),n++,f++);a=this.calculateSequenceCount(o,t,a)}for(r=9;r>0;r--){o=[];f=r,n=0;for(i=9;i>0;i--)n<=9&&f>=0&&(o.push(e.slots[n][f]),n++,f--);a=this.calculateSequenceCount(o,t,a)}for(r=1;r<10;r++){o=[];f=9,n=r;for(i=1;i<9;i++)n<=9&&f>=0&&(o.push(e.slots[n][f]),n++,f--);a=this.calculateSequenceCount(o,t,a)}return a>1},e.calculateSequenceCount=function(t,a,u){var l=e.hasSequence(t,a);return l.hasSequence()&&(l.markChipsInSequence(),10===l.sequenceCount?u+=2:u++),u},e.hasSequence=function(e,t){for(var a=new l,u=0;u<e.length;u++){var d=e[u];if(d.isCorner||null!=d.chip&&d.chip.color===t)null!=d.chip?a.addChip(d.chip):a.addCorner();else{if(a.hasSequence())return a;a.resetSequence()}}return a},e}();t.default=u;var l=function(){function e(){this.sequenceChips=[],this.gameOver=!1,this.sequenceCount=0,this.cornerCount=0}return e.prototype.resetSequence=function(){this.sequenceChips=[],this.sequenceCount=0,this.cornerCount=0},e.prototype.addCorner=function(){this.cornerCount++,this.sequenceCount++},e.prototype.addChip=function(e){this.sequenceChips.push(e),this.sequenceCount++},e.prototype.markChipsInSequence=function(){if(10!==this.sequenceCount)for(var e=0;e<5-this.cornerCount;e++)this.sequenceChips[e].markInSequence();else this.sequenceChips.forEach(function(e){return e.markInSequence()})},e.prototype.hasSequence=function(){return this.sequenceCount>4},e}()},function(e,t,a){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(5)),d=u(a(6)),n=u(a(2));function f(e,t){for(var a=0;a<e.length;a++)for(var u=e[a],l=0;l<u.length;l++){var d=u[l];if(d.isEmptySlot()&&d.hasMatchingCard(t))return new n.default(a,l)}return null}t.default=function(e,t,a){t.map(function(e){return e.toString()}).join(",");var u=prompt("***p = place chip, r = remove chip, d = dead card*** \n  ***[p|r|d][card index][card position]*** \n  ***Example place first card at position 1:1-> p011***");if(!u)return function(e,t){for(var a=0;a<t.length;a++){var u=t[a],n=f(e,u);if(null!=n)return new l.default(d.default.PLACE_CHIP,u,n)}throw new Error("All player cards are dead cards")}(e,t);var r=u.substr(0,1),o=Number(u.substr(1,1)),i=Number(u.substr(2,1)),s=Number(u.substr(3,1));console.log("type: "+r+", index: "+o+", row: "+i+", col: "+s);var c=t[o];switch(r){case"p":return new l.default(d.default.PLACE_CHIP,c,new n.default(i,s));case"r":return new l.default(d.default.REMOVE_CHIP,c,new n.default(i,s));case"d":return new l.default(d.default.REPLACE_DEAD_CARD,c);default:throw new Error("Invalid move")}}}]);