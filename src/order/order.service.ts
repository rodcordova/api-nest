import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateOrderDto) {
    return this.prisma.order.create({ data });//El servicio llama a Prisma para insertar el registro
  }

  findAll() {
    return this.prisma.order.findMany({
      include: { OrderItems: true }, // Incluye los elementos de la orden
    });
  }

  findOne(id: number) {
    return this.prisma.order.findUnique({
      where: { id },
      include: { OrderItems: true },
    });
  }

  update(id: number, data: UpdateOrderDto) {
    return this.prisma.order.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.order.delete({ where: { id } });
  }
}
