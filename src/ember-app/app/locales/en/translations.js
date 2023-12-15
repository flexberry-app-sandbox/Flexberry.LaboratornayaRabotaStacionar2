import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISLaboratornaya_rabota_Stacionar_2ДиагнозLForm from './forms/i-i-s-laboratornaya-rabota-stacionar-2-диагноз-l';
import IISLaboratornaya_rabota_Stacionar_2ДолжностьLForm from './forms/i-i-s-laboratornaya-rabota-stacionar-2-должность-l';
import IISLaboratornaya_rabota_Stacionar_2ИтОтчПоБолLForm from './forms/i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол-l';
import IISLaboratornaya_rabota_Stacionar_2ИтОтчПоЛетLForm from './forms/i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет-l';
import IISLaboratornaya_rabota_Stacionar_2ОтПоОцЛечПацLForm from './forms/i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац-l';
import IISLaboratornaya_rabota_Stacionar_2ПациентLForm from './forms/i-i-s-laboratornaya-rabota-stacionar-2-пациент-l';
import IISLaboratornaya_rabota_Stacionar_2СпрСотрLForm from './forms/i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр-l';
import IISLaboratornaya_rabota_Stacionar_2ДиагнозEForm from './forms/i-i-s-laboratornaya-rabota-stacionar-2-диагноз-e';
import IISLaboratornaya_rabota_Stacionar_2ДолжностьEForm from './forms/i-i-s-laboratornaya-rabota-stacionar-2-должность-e';
import IISLaboratornaya_rabota_Stacionar_2ИтОтчПоБолEForm from './forms/i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол-e';
import IISLaboratornaya_rabota_Stacionar_2ИтОтчПоЛетEForm from './forms/i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет-e';
import IISLaboratornaya_rabota_Stacionar_2ОтПоОцЛечПацEForm from './forms/i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац-e';
import IISLaboratornaya_rabota_Stacionar_2ПациентEForm from './forms/i-i-s-laboratornaya-rabota-stacionar-2-пациент-e';
import IISLaboratornaya_rabota_Stacionar_2СпрСотрEForm from './forms/i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр-e';
import IISLaboratornaya_rabota_Stacionar_2ДиагнозModel from './models/i-i-s-laboratornaya-rabota-stacionar-2-диагноз';
import IISLaboratornaya_rabota_Stacionar_2ДолжностьModel from './models/i-i-s-laboratornaya-rabota-stacionar-2-должность';
import IISLaboratornaya_rabota_Stacionar_2ИтОтчПоБолModel from './models/i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол';
import IISLaboratornaya_rabota_Stacionar_2ИтОтчПоЛетModel from './models/i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет';
import IISLaboratornaya_rabota_Stacionar_2ОтПоОцЛечПацModel from './models/i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац';
import IISLaboratornaya_rabota_Stacionar_2ПациентModel from './models/i-i-s-laboratornaya-rabota-stacionar-2-пациент';
import IISLaboratornaya_rabota_Stacionar_2СпрСотрModel from './models/i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр';
import IISLaboratornaya_rabota_Stacionar_2ТЧИтОтчПоЛетModel from './models/i-i-s-laboratornaya-rabota-stacionar-2-т-ч-ит-отч-по-лет';
import IISLaboratornaya_rabota_Stacionar_2ТчИтОтчПоБолModel from './models/i-i-s-laboratornaya-rabota-stacionar-2-тч-ит-отч-по-бол';
import IISLaboratornaya_rabota_Stacionar_2ТчОтчЛечПацModel from './models/i-i-s-laboratornaya-rabota-stacionar-2-тч-отч-леч-пац';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-laboratornaya-rabota-stacionar-2-диагноз': IISLaboratornaya_rabota_Stacionar_2ДиагнозModel,
    'i-i-s-laboratornaya-rabota-stacionar-2-должность': IISLaboratornaya_rabota_Stacionar_2ДолжностьModel,
    'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол': IISLaboratornaya_rabota_Stacionar_2ИтОтчПоБолModel,
    'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет': IISLaboratornaya_rabota_Stacionar_2ИтОтчПоЛетModel,
    'i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац': IISLaboratornaya_rabota_Stacionar_2ОтПоОцЛечПацModel,
    'i-i-s-laboratornaya-rabota-stacionar-2-пациент': IISLaboratornaya_rabota_Stacionar_2ПациентModel,
    'i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр': IISLaboratornaya_rabota_Stacionar_2СпрСотрModel,
    'i-i-s-laboratornaya-rabota-stacionar-2-т-ч-ит-отч-по-лет': IISLaboratornaya_rabota_Stacionar_2ТЧИтОтчПоЛетModel,
    'i-i-s-laboratornaya-rabota-stacionar-2-тч-ит-отч-по-бол': IISLaboratornaya_rabota_Stacionar_2ТчИтОтчПоБолModel,
    'i-i-s-laboratornaya-rabota-stacionar-2-тч-отч-леч-пац': IISLaboratornaya_rabota_Stacionar_2ТчОтчЛечПацModel
  },

  'application-name': 'Laboratornaya_rabota_ stacionar_2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Laboratornaya_rabota_ stacionar_2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Laboratornaya_rabota_ stacionar_2',
          title: 'Laboratornaya_rabota_ stacionar_2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        стационар: {
          caption: 'Стационар',
          title: 'Стационар',
          'i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-laboratornaya-rabota-stacionar-2-пациент-l': {
            caption: 'Пациенты',
            title: ''
          },
          'i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац-l': {
            caption: 'Отчет по оценке лечения пациента',
            title: ''
          },
          'i-i-s-laboratornaya-rabota-stacionar-2-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-laboratornaya-rabota-stacionar-2-диагноз-l': {
            caption: 'Диагноз',
            title: ''
          },
          'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол-l': {
            caption: 'Итоговый отчет по больным',
            title: ''
          },
          'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет-l': {
            caption: 'Итоговый отчет по летальности',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-laboratornaya-rabota-stacionar-2-диагноз-l': IISLaboratornaya_rabota_Stacionar_2ДиагнозLForm,
    'i-i-s-laboratornaya-rabota-stacionar-2-должность-l': IISLaboratornaya_rabota_Stacionar_2ДолжностьLForm,
    'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол-l': IISLaboratornaya_rabota_Stacionar_2ИтОтчПоБолLForm,
    'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет-l': IISLaboratornaya_rabota_Stacionar_2ИтОтчПоЛетLForm,
    'i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац-l': IISLaboratornaya_rabota_Stacionar_2ОтПоОцЛечПацLForm,
    'i-i-s-laboratornaya-rabota-stacionar-2-пациент-l': IISLaboratornaya_rabota_Stacionar_2ПациентLForm,
    'i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр-l': IISLaboratornaya_rabota_Stacionar_2СпрСотрLForm,
    'i-i-s-laboratornaya-rabota-stacionar-2-диагноз-e': IISLaboratornaya_rabota_Stacionar_2ДиагнозEForm,
    'i-i-s-laboratornaya-rabota-stacionar-2-должность-e': IISLaboratornaya_rabota_Stacionar_2ДолжностьEForm,
    'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол-e': IISLaboratornaya_rabota_Stacionar_2ИтОтчПоБолEForm,
    'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет-e': IISLaboratornaya_rabota_Stacionar_2ИтОтчПоЛетEForm,
    'i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац-e': IISLaboratornaya_rabota_Stacionar_2ОтПоОцЛечПацEForm,
    'i-i-s-laboratornaya-rabota-stacionar-2-пациент-e': IISLaboratornaya_rabota_Stacionar_2ПациентEForm,
    'i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр-e': IISLaboratornaya_rabota_Stacionar_2СпрСотрEForm
  },

});

export default translations;
