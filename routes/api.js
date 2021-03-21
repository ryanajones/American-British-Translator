const Translator = require('../components/translator.js');

module.exports = function (app) {
  const translator = new Translator();

  app.route('/api/translate').post((req, res) => {
    const { text, locale } = req.body;

    // Return error if text is empty
    if (text === '') {
      res.json({ error: 'No text to translate' });
    }

    // Return error if one of the required fields are missing
    if (text === undefined || locale === undefined) {
      res.json({ error: 'Required field(s) missing' });
    }

    // Return error if locale does not match one of the two
    // specified locales
    if (locale !== 'american-to-british' && locale !== 'british-to-american') {
      res.json({ error: 'Invalid value for locale field' });
    }

    // Handle translation if locale is American to British
    if (locale === 'american-to-british') {
      const translatedText = translator.americanToBritish(text);
      res.json({ text, translation: translatedText });
    }

    // Handle translation if locale is British to American
    if (locale === 'british-to-american') {
      const translatedText = translator.britishToAmerican(text);
      res.json({ text, translation: translatedText });
    }
  });
};
