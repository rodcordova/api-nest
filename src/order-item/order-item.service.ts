import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

@Injectable()
export class OrderItemService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateOrderItemDto) {
    return this.prisma.orderItem.create({ data });
  }

  findAll() {
    return this.prisma.orderItem.findMany({
      include: { Product: true, Order: true }, // Incluye datos relacionados
    });
  }

  findOne(id: number) {
    return this.prisma.orderItem.findUnique({
      where: { id },
      include: { Product: true, Order: true },
    });
  }

  update(id: number, data: UpdateOrderItemDto) {
    return this.prisma.orderItem.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.orderItem.delete({ where: { id } });
  }
}
