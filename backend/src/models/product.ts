import mongoose from 'mongoose';

interface IProductImage {
  fileName: string;
  originalName: string;
}

interface IProduct {
  title: string;
  image: IProductImage;
  category: string;
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
    required: true,
  },
  category: {
    type: String,
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
