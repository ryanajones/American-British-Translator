const chai = require('chai');
const chaiHttp = require('chai-http');

const { assert } = chai;
const server = require('../server.js');

chai.use(chaiHttp);

const Translator = require('../components/translator.js');

// Variables
const text = 'Mangoes are my favorite fruit.';
const translation =
  'Mangoes are my <span class="highlight">favourite</span> fruit.';
const locale = 'american-to-british';

suite('Functional Tests', () => {
  suite('POST /api/translate', () => {
    test('Translation with text and locale fields', (done) => {
      chai
        .request(server)
        .post('/api/translate')
        .send({ text, locale })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.isObject(res.body, 'Response should be an object');
          assert.property(res.body, 'text', 'text should be present');
          assert.property(
            res.body,
            'translation',
            'translation should be present'
          );
          assert.equal(res.body.text, text);
          assert.equal(res.body.translation, translation);
          done();
        });
    });

    test('Translation with text and invalid locale field', (done) => {
      chai
        .request(server)
        .post('/api/translate')
        .send({ text, locale: 'american-to-brit' })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.isObject(res.body, 'Response should be an object');
          assert.property(res.body, 'error', 'error should be present');
          assert.equal(res.body.error, 'Invalid value for locale field');
          done();
        });
    });

    test('Translation with missing text field', (done) => {
      chai
        .request(server)
        .post('/api/translate')
        .send({ locale })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.isObject(res.body, 'Response should be an object');
          assert.property(res.body, 'error', 'error should be present');
          assert.equal(res.body.error, 'Required field(s) missing');
          done();
        });
    });

    test('Translation with missing locale field', (done) => {
      chai
        .request(server)
        .post('/api/translate')
        .send({ text })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.isObject(res.body, 'Response should be an object');
          assert.property(res.body, 'error', 'error should be present');
          assert.equal(res.body.error, 'Required field(s) missing');
          done();
        });
    });

    test('Translation with empty text', (done) => {
      chai
        .request(server)
        .post('/api/translate')
        .send({ text: '', locale })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.isObject(res.body, 'Response should be an object');
          assert.property(res.body, 'error', 'error should be present');
          assert.equal(res.body.error, 'No text to translate');
          done();
        });
    });

    test('Translation with text that needs no translation', (done) => {
      chai
        .request(server)
        .post('/api/translate')
        .send({ text: 'hey', locale })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.isObject(res.body, 'Response should be an object');
          assert.property(res.body, 'text', 'text should be present');
          assert.property(
            res.body,
            'translation',
            'translation should be present'
          );
          assert.equal(res.body.text, 'hey');
          assert.equal(res.body.translation, 'Everything looks good to me!');
          done();
        });
    });
  });
});
