import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { LoggerMiddleware } from './logger.middleware';
import { CatController } from './cat/cat.controller';

@Module({
  imports: [CatModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(CatController);
  }
}
