import { Handler } from "@netlify/functions";
import { TERMS } from "../../src/data/sourceData"; // Import dữ liệu gốc

const handler: Handler = async (event, context) => {
  // Cấu hình Headers cho CORS
  const headers = {
    "Access-Control-Allow-Origin": "*", // Cho phép mọi domain truy cập
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Các method cho phép
    "Content-Type": "application/json; charset=utf-8",
  };

  // Xử lý Preflight request (Method OPTIONS)
  // Trình duyệt sẽ gửi request này trước khi gửi request chính để kiểm tra CORS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  // Xử lý request chính (GET)
  try {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(TERMS), // Chuyển đổi mảng TERMS thành JSON string
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};

export { handler };
