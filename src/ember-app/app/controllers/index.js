import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.стационар.caption'),
          title: i18n.t('forms.application.sitemap.стационар.title'),
          children: [{
            link: 'i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр-l',
            caption: i18n.t('forms.application.sitemap.стационар.i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.стационар.i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр-l.title'),
            children: null
          }, {
            link: 'i-i-s-laboratornaya-rabota-stacionar-2-пациент-l',
            caption: i18n.t('forms.application.sitemap.стационар.i-i-s-laboratornaya-rabota-stacionar-2-пациент-l.caption'),
            title: i18n.t('forms.application.sitemap.стационар.i-i-s-laboratornaya-rabota-stacionar-2-пациент-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац-l',
            caption: i18n.t('forms.application.sitemap.стационар.i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац-l.caption'),
            title: i18n.t('forms.application.sitemap.стационар.i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-laboratornaya-rabota-stacionar-2-должность-l',
            caption: i18n.t('forms.application.sitemap.стационар.i-i-s-laboratornaya-rabota-stacionar-2-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.стационар.i-i-s-laboratornaya-rabota-stacionar-2-должность-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-laboratornaya-rabota-stacionar-2-диагноз-l',
            caption: i18n.t('forms.application.sitemap.стационар.i-i-s-laboratornaya-rabota-stacionar-2-диагноз-l.caption'),
            title: i18n.t('forms.application.sitemap.стационар.i-i-s-laboratornaya-rabota-stacionar-2-диагноз-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол-l',
            caption: i18n.t('forms.application.sitemap.стационар.i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол-l.caption'),
            title: i18n.t('forms.application.sitemap.стационар.i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет-l',
            caption: i18n.t('forms.application.sitemap.стационар.i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет-l.caption'),
            title: i18n.t('forms.application.sitemap.стационар.i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})