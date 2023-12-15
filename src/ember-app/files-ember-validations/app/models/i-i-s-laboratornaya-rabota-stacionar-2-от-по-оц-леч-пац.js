import {
  defineNamespace,
  defineProjections,
  Model as ОтПоОцЛечПацMixin
} from '../mixins/regenerated/models/i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтПоОцЛечПацMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
