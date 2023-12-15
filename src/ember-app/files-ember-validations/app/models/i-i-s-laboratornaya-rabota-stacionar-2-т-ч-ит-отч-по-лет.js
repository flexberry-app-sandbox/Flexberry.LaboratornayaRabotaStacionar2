import {
  defineNamespace,
  defineProjections,
  Model as ТЧИтОтчПоЛетMixin
} from '../mixins/regenerated/models/i-i-s-laboratornaya-rabota-stacionar-2-т-ч-ит-отч-по-лет';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧИтОтчПоЛетMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
