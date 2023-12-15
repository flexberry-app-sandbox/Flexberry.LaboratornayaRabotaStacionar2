import { Serializer as ДиагнозSerializer } from
  '../mixins/regenerated/serializers/i-i-s-laboratornaya-rabota-stacionar-2-диагноз';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДиагнозSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
