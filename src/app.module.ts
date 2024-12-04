import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [ProductModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
