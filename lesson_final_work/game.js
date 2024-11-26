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
    return function start() {
      console.log(`Марблы. \nБот: ${countBall.computer} \nИгрок: ${countBall.player}`);

      alert(`Марблы. \nБот: ${countBall.computer} \nИгрок: ${countBall.player}`);
      const stepPlayer = () => {
        if (countBall.player > 0) {
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
          console.log('Число бота:', inputNumBot);
          console.log('Игрок:', inputStrPlayer);
          console.log('Бот:', isEven(inputNumBot));
          alert(`Игрок: ${inputStrPlayer}\nБот: ${isEven(inputNumBot)} \nШариков ${inputNumBot}`);
          if (isEven(inputNumBot) === inputStrPlayer) {
            countBall.player += inputNumBot;
            countBall.computer -= inputNumBot;
          } else if (isEven(inputNumBot) !== inputStrPlayer) {
            if (countBall.player > inputNumBot) {
              countBall.player -= inputNumBot;
              countBall.computer += inputNumBot;
            } else {
              alert('Поражение');
              countBall.computer += countBall.player;
              countBall.player = 0;
              console.log(`Бот: ${countBall.computer} \nИгрок: ${countBall.player}`);
              return false;
            }
          }
        } else {
          alert('Поражение');
          return false;
        }
        return true;
      };
      if (!stepPlayer()) {
        alert(`Марблы. \nБот: ${countBall.computer} \nИгрок: ${countBall.player}`);
        return console.log('close');
      };

      alert(`Марблы. \nБот: ${countBall.computer} \nИгрок: ${countBall.player}`);
      const stepBot = () => {
        if (countBall.computer > 0) {
          let inputNumPlayer = prompt(`От 1 до ${countBall.player}`, Number());

          if (inputNumPlayer === null) {
            return false;
          } else if (+inputNumPlayer <= 0 || +inputNumPlayer > countBall.player || Number.isNaN(+inputNumPlayer)) {
            return stepBot();
          };
          inputNumPlayer = Number(inputNumPlayer);
          const inputStrBot = isEven(
            getRandomIntInclusive(1, countBall.player));
          alert(`Игрок: ${isEven(inputNumPlayer)}\nБот: ${inputStrBot} \nШариков ${inputNumPlayer}`);
          console.log('Число игрока:', inputNumPlayer);
          console.log('Игрок:', isEven(inputNumPlayer));
          console.log('Бот:', inputStrBot);
          if (isEven(inputNumPlayer) === inputStrBot) {
            countBall.computer += inputNumPlayer;
            countBall.player -= inputNumPlayer;
          } else if (isEven(inputNumPlayer) !== inputStrBot) {
            if (countBall.computer > inputNumPlayer) {
              countBall.computer -= inputNumPlayer;
              countBall.player += inputNumPlayer;
            } else {
              alert('Победа');
              countBall.player += countBall.computer;
              countBall.computer = 0;
              console.log(`Бот: ${countBall.computer} \nИгрок: ${countBall.player}`);
              return false;
            }
          }
        } else {
          alert('Победа');
          return false;
        }
        return true;
      };
      if (!stepBot()) {
        alert(`Марблы. \nБот: ${countBall.computer} \nИгрок: ${countBall.player}`);
        return console.log('close');
      };
      start();
    };
  };

  window.marble = game;
})();
