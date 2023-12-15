import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  леПоПлан: DS.attr('string'),
  лечПоФакт: DS.attr('string'),
  показатель: DS.attr('string'),
  итОтчПоБол: DS.belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол', { inverse: 'тчИтОтчПоБол', async: false })
});

export let ValidationRules = {
  леПоПлан: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-тч-ит-отч-по-бол.validations.леПоПлан.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  лечПоФакт: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-тч-ит-отч-по-бол.validations.лечПоФакт.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  показатель: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-тч-ит-отч-по-бол.validations.показатель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  итОтчПоБол: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-тч-ит-отч-по-бол.validations.итОтчПоБол.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТчИтОтчПоБолE', 'i-i-s-laboratornaya-rabota-stacionar-2-тч-ит-отч-по-бол', {
    леПоПлан: attr('Лечение по плану', { index: 0 }),
    лечПоФакт: attr('Лечению по факту', { index: 1 }),
    показатель: attr('Показатель', { index: 2 })
  });
};
