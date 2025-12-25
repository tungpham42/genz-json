export interface GenZTerm {
  term: string; // Từ khóa (ví dụ: "Khum", "Chằm Zn")
  definition: string; // Định nghĩa nghiêm túc
  variation?: string[]; // Các biến thể (ví dụ: "khum" -> "không")
  example: string; // Ví dụ minh họa (càng hài hước càng tốt)
  tags: string[]; // Phân loại: #tinhyeu, #congso, #haihuoc
}
