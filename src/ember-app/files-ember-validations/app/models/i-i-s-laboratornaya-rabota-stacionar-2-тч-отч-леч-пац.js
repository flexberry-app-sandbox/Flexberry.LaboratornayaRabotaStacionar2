import {
  defineNamespace,
  defineProjections,
  Model as ТчОтчЛечПацMixin
} from '../mixins/regenerated/models/i-i-s-laboratornaya-rabota-stacionar-2-тч-отч-леч-пац';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТчОтчЛечПацMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
