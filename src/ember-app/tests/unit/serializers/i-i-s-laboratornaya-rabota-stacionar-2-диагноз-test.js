import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-laboratornaya-rabota-stacionar-2-диагноз', 'Unit | Serializer | i-i-s-laboratornaya-rabota-stacionar-2-диагноз', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-laboratornaya-rabota-stacionar-2-диагноз',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-laboratornaya-rabota-stacionar-2-диагноз',
    'model:i-i-s-laboratornaya-rabota-stacionar-2-должность',
    'model:i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол',
    'model:i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет',
    'model:i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац',
    'model:i-i-s-laboratornaya-rabota-stacionar-2-пациент',
    'model:i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр',
    'model:i-i-s-laboratornaya-rabota-stacionar-2-т-ч-ит-отч-по-лет',
    'model:i-i-s-laboratornaya-rabota-stacionar-2-тч-ит-отч-по-бол',
    'model:i-i-s-laboratornaya-rabota-stacionar-2-тч-отч-леч-пац',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
