export class CreateOrderItemDto {
    quantity: number;
    price: number;
    productId: number; // Relación con la tabla Product
    orderId: number;   // Relación con la tabla Order
  }
  