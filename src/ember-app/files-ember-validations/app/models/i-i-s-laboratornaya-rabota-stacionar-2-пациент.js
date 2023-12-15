import {
  defineNamespace,
  defineProjections,
  Model as ПациентMixin
} from '../mixins/regenerated/models/i-i-s-laboratornaya-rabota-stacionar-2-пациент';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПациентMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
