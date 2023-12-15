import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фио: DS.attr('string')
});

export let ValidationRules = {
  фио: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-пациент.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПациентE', 'i-i-s-laboratornaya-rabota-stacionar-2-пациент', {
    фио: attr('Фио', { index: 0 })
  });

  modelClass.defineProjection('ПациентL', 'i-i-s-laboratornaya-rabota-stacionar-2-пациент', {
    фио: attr('Фио', { index: 0 })
  });
};
