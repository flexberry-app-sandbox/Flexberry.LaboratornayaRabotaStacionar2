import {
  defineNamespace,
  defineProjections,
  Model as ТчИтОтчПоБолMixin
} from '../mixins/regenerated/models/i-i-s-laboratornaya-rabota-stacionar-2-тч-ит-отч-по-бол';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТчИтОтчПоБолMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
