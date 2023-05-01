"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TennisGame = void 0;
var messenger_1 = require("./messenger");
var TennisGame = /** @class */ (function () {
    function TennisGame() {
        this.score = '';
    }
    TennisGame.prototype.getScore = function (player1Name, player2Name, m_score1, m_score2) {
        var tempScore = 0;
        var playerPoint = 4;
        var advantageScore = 1;
        var winScore = 2;
        if (m_score1 == m_score2) {
            this.displayScore(m_score1);
        }
        else if (m_score1 >= playerPoint || m_score2 >= playerPoint) {
            this.displayMsg(m_score1, m_score2, advantageScore, player1Name, player2Name, winScore);
        }
        else {
            for (var i = 1; i < 3; i++) {
                if (i == 1)
                    tempScore = m_score1;
                else {
                    this.score += "-";
                    tempScore = m_score2;
                }
                switch (tempScore) {
                    case 0:
                        this.score += "Love";
                        break;
                    case 1:
                        this.score += "Fifteen";
                        break;
                    case 2:
                        this.score += "Thirty";
                        break;
                    case 3:
                        this.score += "Forty";
                        break;
                }
            }
        }
    };
    TennisGame.prototype.displayMsg = function (m_score1, m_score2, advantageScore, player1Name, player2Name, winScore) {
        var minusResult = m_score1 - m_score2;
        if (minusResult == advantageScore)
            this.score = "".concat(messenger_1.Messenger.ADVANTAGE, " ").concat(player1Name);
        else if (minusResult == -advantageScore)
            this.score = "".concat(messenger_1.Messenger.ADVANTAGE, " ").concat(player2Name);
        else if (minusResult >= winScore)
            this.score = "".concat(messenger_1.Messenger.WIN, " ").concat(player1Name);
        else
            this.score = "".concat(messenger_1.Messenger.WIN, " ").concat(player2Name);
    };
    TennisGame.prototype.displayScore = function (m_score1) {
        switch (m_score1) {
            case 0:
                this.score = messenger_1.Messenger.ZERO;
                break;
            case 1:
                this.score = messenger_1.Messenger.ONE;
                break;
            case 2:
                this.score = messenger_1.Messenger.TWO;
                break;
            case 3:
                this.score = messenger_1.Messenger.THREE;
                break;
            default:
                this.score = messenger_1.Messenger.DEFAULT;
                break;
        }
    };
    return TennisGame;
}());
exports.TennisGame = TennisGame;
