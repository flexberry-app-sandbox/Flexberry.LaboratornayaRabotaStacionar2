import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-laboratornaya-rabota-stacionar-2-диагноз', 'Unit | Model | i-i-s-laboratornaya-rabota-stacionar-2-диагноз', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
