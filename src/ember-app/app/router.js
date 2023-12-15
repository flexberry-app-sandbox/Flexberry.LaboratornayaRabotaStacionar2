import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-диагноз-l');
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-диагноз-e',
  { path: 'i-i-s-laboratornaya-rabota-stacionar-2-диагноз-e/:id' });
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-диагноз-e.new',
  { path: 'i-i-s-laboratornaya-rabota-stacionar-2-диагноз-e/new' });
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-должность-l');
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-должность-e',
  { path: 'i-i-s-laboratornaya-rabota-stacionar-2-должность-e/:id' });
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-должность-e.new',
  { path: 'i-i-s-laboratornaya-rabota-stacionar-2-должность-e/new' });
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол-l');
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол-e',
  { path: 'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол-e/:id' });
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол-e.new',
  { path: 'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол-e/new' });
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет-l');
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет-e',
  { path: 'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет-e/:id' });
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет-e.new',
  { path: 'i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет-e/new' });
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац-l');
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац-e',
  { path: 'i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац-e/:id' });
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац-e.new',
  { path: 'i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац-e/new' });
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-пациент-l');
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-пациент-e',
  { path: 'i-i-s-laboratornaya-rabota-stacionar-2-пациент-e/:id' });
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-пациент-e.new',
  { path: 'i-i-s-laboratornaya-rabota-stacionar-2-пациент-e/new' });
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр-l');
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр-e',
  { path: 'i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр-e/:id' });
  this.route('i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр-e.new',
  { path: 'i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр-e/new' });
});

export default Router;
