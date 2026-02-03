# Hướng dẫn cài đặt các gói còn thiếu

## Cài đặt dependencies

Dự án này yêu cầu **Bun 1.3+** làm package manager.

### Bước 1: Kiểm tra Bun đã được cài đặt chưa

```bash
bun --version
```

Nếu chưa có, cài đặt Bun:

```bash
# macOS/Linux
curl -fsSL https://bun.sh/install | bash

# Sau đó thêm vào PATH (thêm vào ~/.zshrc hoặc ~/.bashrc)
export PATH="$HOME/.bun/bin:$PATH"
```

### Bước 2: Cài đặt tất cả dependencies

Từ thư mục gốc của project (`/Users/vietchung/Downloads/trangquynhcode`):

```bash
bun install
```

Lệnh này sẽ:
- Cài đặt tất cả dependencies từ `package.json`
- Cài đặt dependencies cho tất cả workspaces
- Tạo `node_modules` và các file lock

### Bước 3: Kiểm tra cài đặt thành công

```bash
# Kiểm tra node_modules đã được tạo
ls -la node_modules

# Test chạy ứng dụng
npm run dev -- --help
```

## Nếu gặp lỗi

### Lỗi: "bun: command not found"
- Đảm bảo Bun đã được cài đặt và có trong PATH
- Chạy lại: `export PATH="$HOME/.bun/bin:$PATH"`

### Lỗi: Network/Connection issues
- Kiểm tra kết nối internet
- Thử lại: `bun install`

### Lỗi: Permission denied
- Đảm bảo bạn có quyền ghi vào thư mục project
- Nếu cần, chạy với sudo (không khuyến nghị)

## Sau khi cài đặt xong

Bạn có thể chạy ứng dụng:

```bash
# Xem tất cả lệnh có sẵn
npm run dev -- --help

# Chạy web interface
npm run dev -- web

# Hoặc chạy trực tiếp với bun
bun run --cwd packages/trangquynhcode --conditions=browser src/index.ts web
```
