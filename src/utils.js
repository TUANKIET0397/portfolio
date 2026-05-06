// utils.js dùng để chứa các hàm tiện ích,
// giúp tái sử dụng mã và giữ cho mã chính gọn gàng hơn.
// Dưới đây là một ví dụ về cách bạn có thể sử dụng utils.js để lấy URL của một hình ảnh từ thư mục assets:
export const getImageUrl = (path) => {
    return new URL(`assets/${path}`, import.meta.url).href
}
