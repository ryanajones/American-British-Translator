/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
  americanToBritish(text) {
    let translatedText = text;

    // Check to see if text has any American only words to translate
    for (const key in americanOnly) {
      const regexPhrase = new RegExp(`(?<=\\s|^)${key}(?=\\s|$|\\.|,)`, 'ig');
      if (regexPhrase.test(translatedText)) {
        translatedText = translatedText.replace(
          regexPhrase,
          `<span class="highlight">${americanOnly[key]}</span>`
        );
      }
    }

    // Check to see if text has any American to British words to translate
    for (const key in americanToBritishSpelling) {
      const regexPhrase = new RegExp(`(?<=\\s|^)${key}(?=\\s|$|\\.|,)`, 'ig');
      if (regexPhrase.test(translatedText)) {
        translatedText = translatedText.replace(
          regexPhrase,
          `<span class="highlight">${americanToBritishSpelling[key]}</span>`
        );
      }
    }

    // Check to see if text has time format to translate
    const regexTime = /(10|11|12|[1-9]):[0-5][0-9]/g;
    if (regexTime.test(translatedText)) {
      const found = text.match(regexTime);
      let translatedTime;
      found.forEach((el, i) => {
        translatedTime = found[i].replace(/:/, '.');
        translatedText = translatedText.replace(
          found[i],
          `<span class="highlight">${translatedTime}</span>`
        );
      });
    }

    // Check to see if text has titles
    const textSplit = translatedText.split(' ');
    textSplit.forEach((el, i) => {
      for (const key in americanToBritishTitles) {
        if (el === key) {
          textSplit[
            i
          ] = `<span class="highlight">${americanToBritishTitles[key]}</span>`;
        }
      }
      translatedText = textSplit.join(' ');
    });

    // Handle if text requires no translation
    if (translatedText === text) {
      translatedText = 'Everything looks good to me!';
    }

    return translatedText;
  }

  britishToAmerican(text) {
    let translatedText = text;

    // Check to see if text has any British only words to translate
    for (const key in britishOnly) {
      const regexPhrase = new RegExp(`(?<=\\s|^)${key}(?=\\s|$|\\.|,)`, 'ig');
      if (regexPhrase.test(translatedText)) {
        translatedText = translatedText.replace(
          regexPhrase,
          `<span class="highlight">${britishOnly[key]}</span>`
        );
      }
    }

    // Check to see if text has any British to American words to translate
    for (const key in americanToBritishSpelling) {
      const regexPhrase = new RegExp(
        `(?<=\\s|^)${americanToBritishSpelling[key]}(?=\\s|$|\\.|,)`,
        'ig'
      );

      if (regexPhrase.test(translatedText)) {
        translatedText = translatedText.replace(
          regexPhrase,
          `<span class="highlight">${key}</span>`
        );
      }
    }

    // Check to see if text has time format to translate
    const regexTime = /(10|11|12|[1-9])\.[0-5][0-9]/g;
    if (regexTime.test(translatedText)) {
      const found = text.match(regexTime);
      let translatedTime;
      found.forEach((el, i) => {
        translatedTime = found[i].replace(/\./, ':');
        translatedText = translatedText.replace(
          found[i],
          `<span class="highlight">${translatedTime}</span>`
        );
      });
    }

    // Check to see if text has titles
    const textSplit = translatedText.split(' ');
    textSplit.forEach((el, i) => {
      for (const key in americanToBritishTitles) {
        if (el === americanToBritishTitles[key]) {
          textSplit[i] = `<span class="highlight">${key}</span>`;
        }
      }
      translatedText = textSplit.join(' ');
    });

    // Handle if text requires no translation
    if (translatedText === text) {
      translatedText = 'Everything looks good to me!';
    }

    return translatedText;
  }
}

module.exports = Translator;
