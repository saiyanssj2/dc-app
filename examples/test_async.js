// Hàm giả lập việc gọi API
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Dữ liệu đã được lấy!" };
            resolve(data);
        }, 5000); // Giả lập 2 giây để lấy dữ liệu
    });
}

// Hàm async sử dụng await để gọi fetchData
async function getData() {
    try {
        console.log("Đang lấy dữ liệu...");
        const result = await fetchData(); // Chờ kết quả từ fetchData
        console.log(result.message); // Hiển thị kết quả
    } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
    }
}

// Gọi hàm getData
getData();
