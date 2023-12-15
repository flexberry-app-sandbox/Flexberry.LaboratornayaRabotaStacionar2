import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСозд: DS.attr('date'),
  пациент: DS.belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-пациент', { inverse: null, async: false }),
  спрСотр: DS.belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр', { inverse: null, async: false }),
  тчОтчЛечПац: DS.hasMany('i-i-s-laboratornaya-rabota-stacionar-2-тч-отч-леч-пац', { inverse: 'отПоОцЛечПац', async: false })
});

export let ValidationRules = {
  датаСозд: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац.validations.датаСозд.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  пациент: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац.validations.пациент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрСотр: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац.validations.спрСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тчОтчЛечПац: {
    descriptionKey: 'models.i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац.validations.тчОтчЛечПац.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтПоОцЛечПацE', 'i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац', {
    датаСозд: attr('Дата создания', { index: 0 }),
    спрСотр: belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр', 'Фио сотрудника', {
      фио: attr('Фио сотрудника', { index: 2 })
    }, { index: 1 }),
    пациент: belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-пациент', 'Фио пациента', {
      фио: attr('Фио пациента', { index: 4 })
    }, { index: 3 }),
    тчОтчЛечПац: hasMany('i-i-s-laboratornaya-rabota-stacionar-2-тч-отч-леч-пац', 'Табличная часть отчет по оценке лечения пациента', {
      диагноз: belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-диагноз', 'Диагноз', {
        наименование: attr('Диагноз', { index: 1 })
      }, { index: 0, displayMemberPath: 'диагноз' }),
      оцЛеч: attr('Оценка лечения', { index: 2 }),
      рецептура: attr('Рецептура', { index: 3 })
    })
  });

  modelClass.defineProjection('ОтПоОцЛечПацL', 'i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац', {
    датаСозд: attr('Дата создания', { index: 0 }),
    спрСотр: belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр', 'Фио сотрудника', {
      фио: attr('Фио сотрудника', { index: 1 })
    }, { index: -1, hidden: true }),
    пациент: belongsTo('i-i-s-laboratornaya-rabota-stacionar-2-пациент', 'Фио пациента', {
      фио: attr('Фио пациента', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
