/**
 * SUNFLOWER MARKETING LLC - LEAD CAPTURE & EMAIL NOTIFICATION WEBHOOK
 * 
 * HƯỚNG DẪN CÀI ĐẶT (MẤT 2 PHÚT):
 * 1. Mở Google Drive, tạo một file Google Trang tính mới (ví dụ đặt tên: "Sunflower Marketing - Khách Hàng Tiềm Năng").
 * 2. Trên thanh menu, chọn: Tiện ích mở rộng (Extensions) > Apps Script.
 * 3. Xóa hết code mặc định trong file Code.gs, dán toàn bộ đoạn code bên dưới vào.
 * 4. Bấm "Lưu" (biểu tượng đĩa mềm 💾 hoặc Ctrl + S).
 * 5. Bấm nút màu xanh "Triển khai" (Deploy) ở góc trên bên phải > chọn "Triển khai mới" (New deployment).
 * 6. Bấm vào biểu tượng bánh răng bên cạnh "Chọn loại" > chọn "Ứng dụng web" (Web app).
 * 7. Thiết lập cấu hình:
 *    - Mô tả: "Sunflower Lead Webhook"
 *    - Thực thi dưới dạng (Execute as): "Tôi" (Me)
 *    - Ai có quyền truy cập (Who has access): "Bất kỳ ai" (Anyone) -> RẤT QUAN TRỌNG: Phải chọn Anyone!
 * 8. Bấm "Triển khai" (Deploy), cấp quyền truy cập tài khoản Google nếu được hỏi.
 * 9. Copy đường link "URL của ứng dụng web" (Web App URL có dạng: https://script.google.com/macros/s/.../exec)
 *    và dán vào file .env (VITE_FORM_WEBHOOK_URL) hoặc src/constants.ts!
 */

// CẤU HÌNH EMAIL NHẬN THÔNG BÁO (Có thể điền nhiều email cách nhau bằng dấu phẩy)
var NOTIFICATION_EMAIL = "hello@sunflowermarketing.com";

function doPost(e) {
  try {
    var contents = e.postData.contents;
    var data = JSON.parse(contents);

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Tự động khởi tạo tiêu đề cột nếu sheet còn trống
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Thời Gian Gửi (UTC)",
        "Họ và Tên",
        "Số Điện Thoại",
        "Ngành Cơ Sở",
        "Dịch Vụ Quan Tâm",
        "Website / Google Maps",
        "Ghi Chú Nhu Cầu",
        "Đồng Ý Nhận SMS (Consent)",
        "Ngôn Ngữ",
      ]);

      // Định dạng header màu xanh navy Sunflower
      var headerRange = sheet.getRange(1, 1, 1, 9);
      headerRange.setBackground("#0F172A");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    var now = new Date();
    var timeFormatted = Utilities.formatDate(now, "America/Denver", "yyyy-MM-dd HH:mm:ss") + " (US MST)";

    // 1. Ghi một dòng mới vào Google Sheet
    sheet.appendRow([
      timeFormatted,
      data.name || "N/A",
      data.phone || "N/A",
      data.businessType || "Chưa chọn",
      data.service || "Chưa chọn",
      data.url || "Không có",
      data.note || "Không có",
      data.smsConsent ? "ĐỒNG Ý (Opted-in)" : "KHÔNG",
      data.lang || "vi",
    ]);

    // Tự động căn lề dòng vừa thêm
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1, 1, 9).setVerticalAlignment("middle");

    // 2. Gửi Email thông báo về hello@sunflowermarketing.com
    var emailSubject = "🌻 [Khách Mới Đăng Ký] " + (data.name || "Khách") + " - " + (data.businessType || "Digital Marketing");

    var emailHtmlBody = 
      "<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden;'>" +
        "<div style='background-color: #0F172A; padding: 20px; text-align: center; color: #FFFFFF;'>" +
          "<h2 style='margin: 0; font-size: 20px; color: #F59E0B;'>🌻 SUNFLOWER MARKETING LLC</h2>" +
          "<p style='margin: 5px 0 0 0; font-size: 14px; color: #94A3B8;'>Thông báo yêu cầu tư vấn mới từ Website</p>" +
        "</div>" +
        "<div style='padding: 24px; background-color: #FFFFFF; color: #334155; line-height: 1.6;'>" +
          "<table style='width: 100%; border-collapse: collapse;'>" +
            "<tr><td style='padding: 8px 0; color: #64748B; width: 140px;'><strong>Họ và tên:</strong></td><td style='padding: 8px 0; font-size: 16px; font-weight: bold; color: #0F172A;'>" + (data.name || "N/A") + "</td></tr>" +
            "<tr><td style='padding: 8px 0; color: #64748B;'><strong>Số điện thoại:</strong></td><td style='padding: 8px 0; font-size: 16px; font-weight: bold; color: #2563EB;'><a href='tel:" + (data.phone || "") + "' style='color: #2563EB; text-decoration: none;'>" + (data.phone || "N/A") + "</a></td></tr>" +
            "<tr><td style='padding: 8px 0; color: #64748B;'><strong>Ngành cơ sở:</strong></td><td style='padding: 8px 0; color: #0F172A;'>" + (data.businessType || "N/A") + "</td></tr>" +
            "<tr><td style='padding: 8px 0; color: #64748B;'><strong>Gói quan tâm:</strong></td><td style='padding: 8px 0; color: #0F172A;'>" + (data.service || "N/A") + "</td></tr>" +
            "<tr><td style='padding: 8px 0; color: #64748B;'><strong>Website / Maps:</strong></td><td style='padding: 8px 0;'><a href='" + (data.url || "#") + "' target='_blank' style='color: #2563EB;'>" + (data.url || "Không có") + "</a></td></tr>" +
            "<tr><td style='padding: 8px 0; color: #64748B;'><strong>Ghi chú nhu cầu:</strong></td><td style='padding: 8px 0; color: #0F172A;'>" + (data.note || "Không có") + "</td></tr>" +
            "<tr><td style='padding: 8px 0; color: #64748B;'><strong>SMS Consent:</strong></td><td style='padding: 8px 0; font-weight: bold; color: " + (data.smsConsent ? "#059669" : "#DC2626") + ";'>" + (data.smsConsent ? "✓ Khách đã đồng ý nhận SMS" : "✗ Chưa chọn nhận SMS") + "</td></tr>" +
            "<tr><td style='padding: 8px 0; color: #64748B;'><strong>Thời gian:</strong></td><td style='padding: 8px 0; color: #64748B;'>" + timeFormatted + "</td></tr>" +
          "</table>" +
          "<div style='margin-top: 24px; padding: 16px; background-color: #F8FAFC; border-radius: 8px; text-align: center;'>" +
            "<a href='tel:" + (data.phone || "") + "' style='display: inline-block; background-color: #2563EB; color: #FFFFFF; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 24px;'>Gọi điện tư vấn ngay: " + (data.phone || "") + "</a>" +
          "</div>" +
        "</div>" +
        "<div style='background-color: #F1F5F9; padding: 12px; text-align: center; font-size: 12px; color: #64748B;'>" +
          "Sunflower Marketing LLC • Hotline: +1 (866) 956-9413 • Sheridan, WY 82801, USA" +
        "</div>" +
      "</div>";

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: emailSubject,
      htmlBody: emailHtmlBody,
    });

    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
