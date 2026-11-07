# Kết quả thực hành Session 6 - Bài 6 đến Bài 10

## Bài 6 - Schema Validation

Đã tạo model `Product` với các trường `name`, `price`, `category` và `stock`.

- Tên sản phẩm là bắt buộc và có ít nhất 5 ký tự.
- Giá sản phẩm không nhỏ hơn 0.
- Danh mục là bắt buộc.
- Mongoose tự tạo `createdAt` và `updatedAt`.

## Bài 7 - Truy vấn logic

Đã thêm dữ liệu product và truy vấn thành công các sản phẩm thuộc danh mục `Laptop` hoặc `Mobile`, có giá dưới `20000`.

## Bài 8 - Embedded Document

Đã tạo collection `stores`. Mỗi cửa hàng có embedded document `location` gồm `street`, `district` và `city`.

## Bài 9 - Populate dữ liệu

Đã tạo collection `orders`. Trường `product_id` tham chiếu đến collection `products` bằng `ObjectId`.

Sử dụng `populate('product_id')` để lấy thông tin đơn hàng kèm đầy đủ chi tiết sản phẩm.

## Bài 10 - Cập nhật field bị thiếu

Đã cập nhật thành công các product chưa có field `stock`.

Kết quả kiểm tra trên MongoDB:

```text
10 product đã có stock: 10
```

Khi chạy lại script, kết quả `0` product cần cập nhật là đúng vì không còn document nào thiếu field `stock`.
