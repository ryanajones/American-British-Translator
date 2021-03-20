const chai = require('chai');

const { assert } = chai;

const Translator = require('../components/translator.js');

const translator = new Translator();

// Text to translate and translated text array

const translateText = [
  'Mangoes are my favorite fruit.',
  'I ate yogurt for breakfast.',
  "We had a party at my friend's condo.",
  'Can you toss this in the trashcan for me?',
  'The parking lot was full.',
  'Like a high tech Rube Goldberg machine.',
  'To play hooky means to skip class or work.',
  'No Mr. Bond, I expect you to die.',
  'Dr. Grosh will see you now.',
  'Lunch is at 12:15 today.',
  'We watched the footie match for a while.',
  'Paracetamol takes up to an hour to work.',
  'First, caramelise the onions.',
  'I spent the bank holiday at the funfair.',
  'I had a bicky then went to the chippy.',
  "I've just got bits and bobs in my bum bag.",
  'The car boot sale at Boxted Airfield was called off.',
  'Have you met Mrs Kalyani?',
  "Prof Joyner of King's College, London.",
  'Tea time is usually around 4 or 4.30.',
];
const translatedText = [
  'Mangoes are my <span class="highlight">favourite</span> fruit.',
  'I ate <span class="highlight">yoghurt</span> for breakfast.',
  'We had a party at my friend\'s <span class="highlight">flat</span>.',
  'Can you toss this in the <span class="highlight">bin</span> for me?',
  'The <span class="highlight">car park</span> was full.',
  'Like a high tech <span class="highlight">Heath Robinson device</span>.',
  'To <span class="highlight">bunk off</span> means to skip class or work.',
  'No <span class="highlight">Mr</span> Bond, I expect you to die.',
  '<span class="highlight">Dr</span> Grosh will see you now.',
  'Lunch is at <span class="highlight">12.15</span> today.',
  'We watched the <span class="highlight">soccer</span> match for a while.',
  '<span class="highlight">Tylenol</span> takes up to an hour to work.',
  'First, <span class="highlight">caramelize</span> the onions.',
  'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.',
  'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.',
  'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.',
  'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.',
  'Have you met <span class="highlight">Mrs.</span> Kalyani?',
  '<span class="highlight">Prof.</span> Joyner of King\'s College, London.',
  'Tea time is usually around 4 or <span class="highlight">4:30</span>.',
];

suite('Unit Tests', () => {
  suite('Function_ translator.americanToBritish(text)', () => {
    test('Translate "Mangoes are my favorite fruit." to British English', (done) => {
      assert.equal(
        translator.americanToBritish(translateText[0]),
        translatedText[0]
      );
      done();
    });
    test('Translate "I ate yogurt for breakfast." to British English', (done) => {
      assert.equal(
        translator.americanToBritish(translateText[1]),
        translatedText[1]
      );
      done();
    });
    test('Translate "We had a party at my friend\'s condo." to British English', (done) => {
      assert.equal(
        translator.americanToBritish(translateText[2]),
        translatedText[2]
      );
      done();
    });
    test('Translate "Can you toss this in the trashcan for me?" to British English', (done) => {
      assert.equal(
        translator.americanToBritish(translateText[3]),
        translatedText[3]
      );
      done();
    });
    test('Translate "The parking lot was full." to British English', (done) => {
      assert.equal(
        translator.americanToBritish(translateText[4]),
        translatedText[4]
      );
      done();
    });
    test('Translate "Like a high tech Rube Goldberg machine." to British English', (done) => {
      assert.equal(
        translator.americanToBritish(translateText[5]),
        translatedText[5]
      );
      done();
    });
    test('Translate "To play hooky means to skip class or work." to British English', (done) => {
      assert.equal(
        translator.americanToBritish(translateText[6]),
        translatedText[6]
      );
      done();
    });
    test('Translate "No Mr. Bond, I expect you to die." to British English', (done) => {
      assert.equal(
        translator.americanToBritish(translateText[7]),
        translatedText[7]
      );
      done();
    });
    test('Translate "Dr. Grosh will see you now." to British English', (done) => {
      assert.equal(
        translator.americanToBritish(translateText[8]),
        translatedText[8]
      );
      done();
    });
    test('Translate "Lunch is at 12:15 today." to British English', (done) => {
      assert.equal(
        translator.americanToBritish(translateText[9]),
        translatedText[9]
      );
      done();
    });
    test('Translate "We watched the footie match for a while." to American English', (done) => {
      assert.equal(
        translator.britishToAmerican(translateText[10]),
        translatedText[10]
      );
      done();
    });
    test('Translate "Paracetamol takes up to an hour to work." to American English', (done) => {
      assert.equal(
        translator.britishToAmerican(translateText[11]),
        translatedText[11]
      );
      done();
    });
    test('Translate "First, caramelise the onions." to American English', (done) => {
      assert.equal(
        translator.britishToAmerican(translateText[12]),
        translatedText[12]
      );
      done();
    });
    test('Translate "I spent the bank holiday at the funfair." to American English', (done) => {
      assert.equal(
        translator.britishToAmerican(translateText[13]),
        translatedText[13]
      );
      done();
    });
    test('Translate "I had a bicky then went to the chippy." to American English', (done) => {
      assert.equal(
        translator.britishToAmerican(translateText[14]),
        translatedText[14]
      );
      done();
    });
    test('Translate "I\'ve just got bits and bobs in my bum bag." to American English', (done) => {
      assert.equal(
        translator.britishToAmerican(translateText[15]),
        translatedText[15]
      );
      done();
    });
    test('Translate "The car boot sale at Boxted Airfield was called off." to American English', (done) => {
      assert.equal(
        translator.britishToAmerican(translateText[16]),
        translatedText[16]
      );
      done();
    });
    test('Translate "Have you met Mrs Kalyani?" to American English', (done) => {
      assert.equal(
        translator.britishToAmerican(translateText[17]),
        translatedText[17]
      );
      done();
    });
    test('Translate "Prof Joyner of King\'s College, London." to American English', (done) => {
      assert.equal(
        translator.britishToAmerican(translateText[18]),
        translatedText[18]
      );
      done();
    });
    test('Translate "Tea time is usually around 4 or 4.30." to American English', (done) => {
      assert.equal(
        translator.britishToAmerican(translateText[19]),
        translatedText[19]
      );
      done();
    });
    test('Highlight translation in "Mangoes are my favorite fruit."', (done) => {
      const highlightExist = translator.americanToBritish(translateText[0]);
      const regExpHighlight = new RegExp(
        `<span class="highlight">favourite</span>`
      );
      assert.equal(regExpHighlight.test(highlightExist), true);
      done();
    });
    test('Highlight translation in "I ate yogurt for breakfast.', (done) => {
      const highlightExist = translator.americanToBritish(translateText[1]);
      const regExpHighlight = new RegExp(
        `<span class="highlight">yoghurt</span>`
      );
      assert.equal(regExpHighlight.test(highlightExist), true);
      done();
    });
    test('Highlight translation in "We watched the footie match for a while."', (done) => {
      const highlightExist = translator.britishToAmerican(translateText[10]);
      const regExpHighlight = new RegExp(
        `<span class="highlight">soccer</span>`
      );
      assert.equal(regExpHighlight.test(highlightExist), true);
      done();
    });
    test('Highlight translation in "Paracetamol takes up to an hour to work."', (done) => {
      const highlightExist = translator.britishToAmerican(translateText[11]);
      const regExpHighlight = new RegExp(
        `<span class="highlight">Tylenol</span>`
      );
      assert.equal(regExpHighlight.test(highlightExist), true);
      done();
    });
  });
});
