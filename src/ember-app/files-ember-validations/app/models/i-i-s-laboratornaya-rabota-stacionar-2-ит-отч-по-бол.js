import {
  defineNamespace,
  defineProjections,
  Model as ИтОтчПоБолMixin
} from '../mixins/regenerated/models/i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИтОтчПоБолMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
