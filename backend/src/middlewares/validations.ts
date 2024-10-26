import { celebrate, Joi, Segments } from 'celebrate';

enum Payment {
  Online = 'online',
  Card = 'card',
}

export const orderSchema = {
  [Segments.BODY]: Joi.object().keys({
    payment: Joi.string().valid(...Object.values(Payment)).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().length(11).required(),
    address: Joi.string().required(),
    total: Joi.number().required(),
    items: Joi.array().items(Joi.string().required()).required(),
  }),
};

export const validateOrder = celebrate(orderSchema);
