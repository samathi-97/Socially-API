import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi'
import { SrtipeController } from './stripe.controller';
import {StripeService } from './stripe.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        STRIPE_SECRET_KEY: Joi.string(),
        STRIPE_CURRENCY: Joi.string(),
        FRONTEND_URL: Joi.string(),
        // ...
      })
    }),
   // ...
  ],
  controllers: [SrtipeController],
  providers: [StripeService,]
})
export class StripeModule {}