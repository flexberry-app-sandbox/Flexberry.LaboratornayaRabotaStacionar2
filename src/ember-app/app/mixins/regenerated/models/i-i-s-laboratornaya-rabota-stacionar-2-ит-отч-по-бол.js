import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  периодДо: DS.attr('date'),
  периодОт: DS.attr('date'),
  спрСотр: DS.belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр', { inverse: null, async: false }),
  тчИтОтчПоБол: DS.hasMany('i-i-s-laboratornaya-rabota-stacionar-2-тч-ит-отч-по-бол', { inverse: 'итОтчПоБол', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  периодДо: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол.validations.периодДо.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  периодОт: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол.validations.периодОт.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  спрСотр: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол.validations.спрСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тчИтОтчПоБол: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол.validations.тчИтОтчПоБол.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИтОтчПоБолE', 'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол', {
    дата: attr('Дата создания', { index: 0 }),
    спрСотр: belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр', 'Фио сотрудника', {
      фио: attr('Фио сотрудника', { index: 2 })
    }, { index: 1 }),
    периодОт: attr('ПериодОт', { index: 3 }),
    периодДо: attr('ПериодДо', { index: 4 }),
    тчИтОтчПоБол: hasMany('i-i-s-laboratornaya-rabota-stacionar-2-тч-ит-отч-по-бол', 'Табличная часть итоговый отчет по больным стационара', {
      леПоПлан: attr('Лечение по плану', { index: 0 }),
      лечПоФакт: attr('Лечению по факту', { index: 1 }),
      показатель: attr('Показатель', { index: 2 })
    })
  });

  modelClass.defineProjection('ИтОтчПоБолL', 'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол', {
    спрСотр: belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр', 'Фио сотрудника', {
      фио: attr('Фио сотрудника', { index: 0 })
    }, { index: -1, hidden: true }),
    дата: attr('Дата создания', { index: 1 }),
    периодОт: attr('Период От', { index: 2 }),
    периодДо: attr('Период До', { index: 3 })
  });
};
