import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧИтОтчПоЛетMixin
} from '../mixins/regenerated/models/i-i-s-laboratornaya-rabota-stacionar-2-т-ч-ит-отч-по-лет';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧИтОтчПоЛетMixin, Validations, {
});

defineProjections(Model);

export default Model;
