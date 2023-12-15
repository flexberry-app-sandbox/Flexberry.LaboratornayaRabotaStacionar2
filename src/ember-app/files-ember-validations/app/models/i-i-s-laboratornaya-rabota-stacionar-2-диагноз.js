import {
  defineNamespace,
  defineProjections,
  Model as ДиагнозMixin
} from '../mixins/regenerated/models/i-i-s-laboratornaya-rabota-stacionar-2-диагноз';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДиагнозMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
