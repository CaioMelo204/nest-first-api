import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prismaService.product.create({
      data: {
        ...createProductDto,
        quantity: 0,
      }
    })
  }

  findAll() {
    return this.prismaService.product.findMany()
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.product.findUniqueOrThrow({
        where: {
          id
        }
      });
    } catch (err) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prismaService.product.update({
      where: {
        id,
      },
      data: {
        ...updateProductDto,
      }
    })
  }

  remove(id: number) {
    return this.prismaService.product.delete({
      where: {
        id,
      }
    })
  }
}
