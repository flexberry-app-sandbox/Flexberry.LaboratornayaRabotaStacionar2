import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СпрСотрMixin
} from '../mixins/regenerated/models/i-i-s-laboratornaya-rabota-stacionar-2-спр-сотр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СпрСотрMixin, Validations, {
});

defineProjections(Model);

export default Model;
