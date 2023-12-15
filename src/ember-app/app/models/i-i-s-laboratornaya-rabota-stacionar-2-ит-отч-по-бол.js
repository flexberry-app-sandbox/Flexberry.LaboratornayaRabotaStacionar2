import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ИтОтчПоБолMixin
} from '../mixins/regenerated/models/i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-бол';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ИтОтчПоБолMixin, Validations, {
});

defineProjections(Model);

export default Model;
