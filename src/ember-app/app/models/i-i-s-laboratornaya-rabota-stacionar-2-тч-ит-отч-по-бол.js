import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТчИтОтчПоБолMixin
} from '../mixins/regenerated/models/i-i-s-laboratornaya-rabota-stacionar-2-тч-ит-отч-по-бол';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТчИтОтчПоБолMixin, Validations, {
});

defineProjections(Model);

export default Model;
