import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ИтОтчПоЛетMixin
} from '../mixins/regenerated/models/i-i-s-laboratornaya-rabota-stacionar-2-ит-отч-по-лет';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ИтОтчПоЛетMixin, Validations, {
});

defineProjections(Model);

export default Model;
