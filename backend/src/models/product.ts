import mongoose from 'mongoose';

interface IProductImage {
  fileName: string;
  originalName: string;
}

enum Category {
  soft = 'софт-скил',
  hard = 'хард-скил',
  other = 'другое',
  additional = 'дополнительное',
  button = 'кнопка',
}

interface IProduct {
  title: string;
  image: IProductImage;
  category: Category;
  description?: string;
  price?: number | null;
}

const productScheme = new mongoose.Schema<IProduct>({
  title: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
    unique: true,
  },
  image: {
    fileName: {
      type: String,
      required: true,
    },
    originalName: {
      type: String,
      required: true,
    },
  },
  category: {
    type: String,
    enum: Object.values(Category),
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
});

export default mongoose.model<IProduct>('product', productScheme);
