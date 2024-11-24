'use strict';


(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const getFigure = lang => {
    let words = {
      isSure: 'Вы уверены?',
      computer: 'Компьютер',
      you: 'Вы',
      player: 'Игрок',
      draw: 'Ничья',
      win: 'Победа',
      defeat: 'Поражение',
      isContinue: 'Продолжить?',
      total: 'Результат',
    };
    if (lang[0] === 'rock') {
      return words = {
        isSure: 'Are you sure?',
        computer: 'Computer',
        you: 'You',
        player: 'Player',
        draw: 'Draw',
        win: 'Win',
        defeat: 'Defeat',
        isContinue: 'Continue?',
        total: 'Result',
      };
    }; return words;
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = language === 'EN' || language === 'ENG' ?
            FIGURES_ENG : FIGURES_RUS;
    return function start() {
      let inputValue = prompt(`${lang[0]}, ${lang[1]}, ${lang[2]}?`, String());
      if (inputValue === null) {
        if (confirm(getFigure(lang).isSure)) {
          return console.log('close');
        };
        return start();
      };
      inputValue = inputValue[0]?.toLowerCase();
      const randomIndex = getRandomIntInclusive(0, 2);
      const randomElement = lang[randomIndex];

      const inputElement = lang.find(
        item => inputValue === item[0].toLowerCase());
      const inputIndex = lang.indexOf(inputElement);
      console.log(inputElement, randomElement);
      console.log(inputIndex, randomIndex);
      if (inputIndex >= 0) {
        const output = `${getFigure(lang).computer}: ${randomElement} \n${getFigure(lang).you}: ${inputElement} `;
        if (inputIndex === randomIndex) {
          alert(`${output} \n${getFigure(lang).draw}`);
        } else if (inputIndex === 0 && randomIndex === 1 ||
                           inputIndex === 1 && randomIndex === 2 ||
                           inputIndex === 2 && randomIndex === 0) {
          result.player += 1;
          alert(`${output} \n${getFigure(lang).win}`);
        } else {
          result.computer += 1;
          alert(`${output} \n${getFigure(lang).defeat}`);
        };

        if (!confirm(getFigure(lang).isContinue)) {
          return alert(`${getFigure(lang).total}: \n${getFigure(lang).computer}: ${result.computer} \n${getFigure(lang).player}: ${result.player}`);
        };
      }
      start();
    };
  };

  window.RPS = game;
})();
