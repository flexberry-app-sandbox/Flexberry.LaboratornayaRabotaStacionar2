import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-диагноз.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДиагнозE', 'i-i-s-laboratornaya-rabota-stacionar-2-диагноз', {
    наименование: attr('Диагноз', { index: 0 })
  });

  modelClass.defineProjection('ДиагнозL', 'i-i-s-laboratornaya-rabota-stacionar-2-диагноз', {
    наименование: attr('Диагноз', { index: 0 })
  });
};
