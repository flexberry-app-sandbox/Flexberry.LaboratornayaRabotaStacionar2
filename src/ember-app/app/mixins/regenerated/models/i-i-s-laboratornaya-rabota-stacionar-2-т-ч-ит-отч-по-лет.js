import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  причЛет: DS.attr('string'),
  число: DS.attr('string'),
  итОтчПоЛет: DS.belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет', { inverse: 'тЧИтОтчПоЛет', async: false })
});

export let ValidationRules = {
  причЛет: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-т-ч-ит-отч-по-лет.validations.причЛет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  число: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-т-ч-ит-отч-по-лет.validations.число.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  итОтчПоЛет: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-т-ч-ит-отч-по-лет.validations.итОтчПоЛет.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧИтОтчПоЛетE', 'i-i-s-laboratornaya-rabota-stacionar-2-т-ч-ит-отч-по-лет', {
    причЛет: attr('Причина летальности', { index: 0 }),
    число: attr('Число людей', { index: 1 })
  });
};
