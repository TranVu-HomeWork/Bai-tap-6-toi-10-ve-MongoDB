const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Tên sản phẩm là bắt buộc.'],
      minLength: [5, 'Tên sản phẩm phải có ít nhất 5 ký tự.'],
      trim: true
    },
    price: {
      type: Number,
      required: [true, 'Giá sản phẩm là bắt buộc.'],
      min: [0, 'Giá sản phẩm không được nhỏ hơn 0.']
    },
    category: {
      type: String,
      required: [true, 'Danh mục sản phẩm là bắt buộc.'],
      trim: true
    },
    stock: {
      type: Number,
      min: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', productSchema);