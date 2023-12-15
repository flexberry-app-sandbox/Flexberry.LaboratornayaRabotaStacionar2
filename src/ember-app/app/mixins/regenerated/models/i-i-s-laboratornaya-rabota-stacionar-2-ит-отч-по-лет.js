import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  место: DS.attr('string'),
  периодДо: DS.attr('date'),
  периодОт: DS.attr('date'),
  спрСотр: DS.belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр', { inverse: null, async: false }),
  тЧИтОтчПоЛет: DS.hasMany('i-i-s-laboratornaya-rabota-stacionar-2-т-ч-ит-отч-по-лет', { inverse: 'итОтчПоЛет', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  место: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет.validations.место.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  периодДо: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет.validations.периодДо.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  периодОт: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет.validations.периодОт.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  спрСотр: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет.validations.спрСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧИтОтчПоЛет: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет.validations.тЧИтОтчПоЛет.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИтОтчПоЛетE', 'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет', {
    дата: attr('Дата cоздания', { index: 0 }),
    спрСотр: belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр', 'Фио сотрудника', {
      фио: attr('Фио сотрудника', { index: 2 })
    }, { index: 1 }),
    периодОт: attr('Период От', { index: 3 }),
    периодДо: attr('Период До', { index: 4 }),
    место: attr('Место', { index: 5 }),
    тЧИтОтчПоЛет: hasMany('i-i-s-laboratornaya-rabota-stacionar-2-т-ч-ит-отч-по-лет', 'Табличная часть Итоговый отчет по летальности', {
      причЛет: attr('Причина летальности', { index: 0 }),
      число: attr('Число людей', { index: 1 })
    })
  });

  modelClass.defineProjection('ИтОтчПоЛетL', 'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет', {
    дата: attr('Дата создания', { index: 0 }),
    спрСотр: belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр', 'Фио сотурдника', {
      фио: attr('Фио сотурдника', { index: 1 })
    }, { index: -1, hidden: true }),
    периодОт: attr('Период От', { index: 2 }),
    периодДо: attr('Период До', { index: 3 }),
    место: attr('Место', { index: 4 })
  });
};
