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

export const productSchema = {
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().min(2).max(30).required(),
    image: Joi.object().keys({
      fileName: Joi.string().required(),
      originalName: Joi.string().required(),
    }),
    category: Joi.string().required(),
    description: Joi.string(),
    price: Joi.number().allow(null),
  }),
};

export const validateOrder = celebrate(orderSchema);
export const validateProduct = celebrate(productSchema);
