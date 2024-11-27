'use strict';

(() => {
  const value = ['четное', 'нечетное'];

  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const isEven = (number) => {
    if (number % 2 === 0) {
      return value[0];
    } else if (number % 2 !== 0) {
      return value[1];
    }
  };

  const game = () => {
    const countBall = {
      player: 5,
      computer: 5,
    };
    const currentStatus = (toStart = '') => `${toStart} \nБот: ${
      countBall.computer
    }\nИгрок: ${
      countBall.player
    }`;
    const getMove = (number, firstPlayerGuess,
        secondPlayerGuess, isPlayerTurn) => {
      const currentFirstPlayer = isPlayerTurn ? 'Игрок' : 'Бот';
      const currentSecondPlayer = isPlayerTurn ? 'Бот' : 'Игрок';

      console.log(`${currentFirstPlayer}:`, firstPlayerGuess);
      console.log(`${currentSecondPlayer}:`, secondPlayerGuess);
      console.log(`${currentFirstPlayer} число:`, number);
      alert(`${currentFirstPlayer}: ${
        firstPlayerGuess}\n${currentSecondPlayer}: ${
        secondPlayerGuess}\nШариков: ${number}`);
      if (firstPlayerGuess === secondPlayerGuess) {
        if (isPlayerTurn) {
          countBall.player += number;
          countBall.computer -= number;
        } else {
          countBall.computer += number;
          countBall.player -= number;
        }
      } else {
        if (isPlayerTurn) {
          if (countBall.player > number) {
            countBall.player -= number;
            countBall.computer += number;
          } else {
            alert('Поражение');
            countBall.computer += countBall.player;
            countBall.player = 0;
            console.log(currentStatus('Итог:'));
            return false;
          }
        } else {
          if (countBall.computer > number) {
            countBall.computer -= number;
            countBall.player += number;
          } else {
            alert('Победа');
            countBall.player += countBall.computer;
            countBall.computer = 0;
            console.log(currentStatus('Итог:'));
            return false;
          }
        }
      }
      return true;
    };

    return function start() {
      const stepPlayer = () => {
        if (countBall.player > 0) {
          console.log(currentStatus('Марблы.'));
          alert(currentStatus('Марблы.'));
          const inputNumBot = getRandomIntInclusive(1, countBall.computer);
          let inputStrPlayer = prompt('Четное или нечетное?', String());
          if (inputStrPlayer === null) {
            return false;
          } else if (inputStrPlayer === '') {
            return stepPlayer();
          };
          inputStrPlayer = value.find(
            item => inputStrPlayer.toLowerCase() ===
          item.substring(0, inputStrPlayer.length).toLowerCase());
          if (inputStrPlayer === undefined) {
            return stepPlayer();
          };
          console.log(inputNumBot);
          return getMove(inputNumBot, inputStrPlayer,
            isEven(inputNumBot), true);
        } else {
          alert('Поражение');
          return false;
        }
      };
      if (!stepPlayer()) {
        alert(currentStatus('Итог:'));
        return console.log('close');
      };
      const stepBot = () => {
        if (countBall.computer > 0) {
          console.log(currentStatus('Марблы.'));
          alert(currentStatus('Марблы.'));
          let inputNumPlayer = prompt(`От 1 до ${countBall.player}`, Number());
          if (inputNumPlayer === null) {
            return false;
          } else if (+inputNumPlayer <= 0 ||
            +inputNumPlayer > countBall.player ||
            Number.isNaN(+inputNumPlayer)) {
            return stepBot();
          };
          inputNumPlayer = Number(inputNumPlayer);
          const inputStrBot = isEven(
            getRandomIntInclusive(1, countBall.player));
          console.log(inputStrBot);
          return getMove(inputNumPlayer, inputStrBot,
            isEven(inputNumPlayer), false);
        } else {
          alert('Победа');
          return false;
        }
      };
      if (!stepBot()) {
        alert(currentStatus('Итог:'));
        return console.log('close');
      };
      start();
    };
  };

  window.marble = game;
})();
