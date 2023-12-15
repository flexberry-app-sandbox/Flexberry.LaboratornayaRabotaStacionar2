import {
  defineNamespace,
  defineProjections,
  Model as ИтОтчПоЛетMixin
} from '../mixins/regenerated/models/i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИтОтчПоЛетMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
