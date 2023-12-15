import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-laboratornaya-rabota-stacionar-2-от-по-оц-леч-пац-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-laboratornaya-rabota-stacionar-2-тч-отч-леч-пац+диагноз':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'диагноз',
            required: true,
            relationName: 'диагноз',
            projection: 'ДиагнозL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
