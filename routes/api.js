const Translator = require('../components/translator.js');

module.exports = function (app) {
  const translator = new Translator();

  app.route('/api/translate').post((req, res) => {
    const { text, locale } = req.body;

    // Handle translation if locale is American to British
    if (locale === 'american-to-british') {
      const translatedText = translator.americanToBritish(text);
      console.log(translatedText);
      res.json({ translation: translatedText });
    }

    // Handle translation if locale is British to American
    if (locale === 'british-to-american') {
      const translatedText = translator.britishToAmerican(text);
      res.json({ translation: translatedText });
    }
  });
};
