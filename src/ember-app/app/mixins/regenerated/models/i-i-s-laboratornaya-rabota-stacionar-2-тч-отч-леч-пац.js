import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  оцЛеч: DS.attr('string'),
  рецептура: DS.attr('string'),
  диагноз: DS.belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-диагноз', { inverse: null, async: false }),
  отПоОцЛечПац: DS.belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац', { inverse: 'тчОтчЛечПац', async: false })
});

export let ValidationRules = {
  оцЛеч: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-тч-отч-леч-пац.validations.оцЛеч.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  рецептура: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-тч-отч-леч-пац.validations.рецептура.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  диагноз: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-тч-отч-леч-пац.validations.диагноз.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отПоОцЛечПац: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-тч-отч-леч-пац.validations.отПоОцЛечПац.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТчОтчЛечПацE', 'i-i-s-laboratornaya-rabota-stacionar-2-тч-отч-леч-пац', {
    диагноз: belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-диагноз', 'Диагноз', {
      наименование: attr('Диагноз', { index: 1 })
    }, { index: 0, displayMemberPath: 'диагноз' }),
    оцЛеч: attr('Оценка лечения', { index: 2 }),
    рецептура: attr('Рецептура', { index: 3 })
  });
};
