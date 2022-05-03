/* eslint-disable @typescript-eslint/naming-convention */
import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Factura} from './factura.model';

@model({
  settings: {
    foreignKeys: {
      fk_ProductoFactura_id_factura: {
        name: 'fk_ProductoFactura_id_factura',
        entity: 'Factura',
        entityKey: 'id',
        foreignKey: 'id_factura',
      },
    },
  },
})
export class ProductoFactura extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  precioUnitario: number;

  @property({
    type: 'number',
    required: true,
  })
  productoId: number;

  @belongsTo(() => Factura, {name: 'pertenece_a'})
  id_factura: number;

  constructor(data?: Partial<ProductoFactura>) {
    super(data);
  }
}

export interface ProductoFacturaRelations {
  // describe navigational properties here
}

export type ProductoFacturaWithRelations = ProductoFactura &
  ProductoFacturaRelations;
