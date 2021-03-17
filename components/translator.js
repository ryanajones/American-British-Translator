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
      const regexPhrase = new RegExp(key);
      if (regexPhrase.test(translatedText)) {
        translatedText = translatedText.replace(key, americanOnly[key]);
      }
    }

    // Check to see if text has any American to British words to translate
    for (const key in americanToBritishSpelling) {
      const regexPhrase = new RegExp(key);
      if (regexPhrase.test(translatedText)) {
        translatedText = translatedText.replace(
          key,
          americanToBritishSpelling[key]
        );
      }
    }
    return translatedText;
  }

  britishToAmerican(text) {
    let translatedText = text;

    // Check to see if text has any British only words to translate
    for (const key in britishOnly) {
      const regexPhrase = new RegExp(key);
      if (regexPhrase.test(translatedText)) {
        translatedText = translatedText.replace(key, americanOnly[key]);
      }
    }

    // Check to see if text has any British to American words to translate
    for (const key in americanToBritishSpelling) {
      const regexPhrase = new RegExp(americanToBritishSpelling[key]);
      if (regexPhrase.test(translatedText)) {
        translatedText = translatedText.replace(
          americanToBritishSpelling[key],
          key
        );
      }
    }
    return translatedText;
  }
}

module.exports = Translator;
