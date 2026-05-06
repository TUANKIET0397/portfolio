// utils.js dùng để chứa các hàm tiện ích,
// giúp tái sử dụng mã và giữ cho mã chính gọn gàng hơn.
// Dưới đây là một ví dụ về cách bạn có thể sử dụng utils.js để lấy URL của một hình ảnh từ thư mục assets:

// Khởi tạo một bản đồ các tài sản bằng cách sử dụng import.meta.glob để nhập tất cả các tệp trong thư mục assets
const assetMap = import.meta.glob("./assets/**/*", {
    eager: true, // Sử dụng eager: true để nhập tất cả các tệp ngay lập tức và có thể truy cập chúng thông qua assetMap
    import: "default", // Chỉ lấy giá trị mặc định của mỗi tệp, tức là URL của hình ảnh sau khi được xử lý bởi bundler
})

export const getImageUrl = (path) => {
    // const key = `./assets/${path}`
    // const url = assetMap[key]

    // if (!url) {
    //     console.warn(`Missing asset: ${key}`)
    // }

    // return url
    return assetMap[`./assets/${path}`] || ""
}
