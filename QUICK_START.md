# TrangQuynhCode - Quick Start Guide

## ✅ Đã hoàn thành

- ✅ Đã đổi tên toàn bộ từ "opencode" → "trangquynhcode"
- ✅ Đã cài đặt dependencies
- ✅ Đã cấu hình Bun local

## 🚀 Cách chạy ứng dụng

### Cách 1: Sử dụng npm (khuyến nghị)

Script đã được cấu hình để tự động sử dụng Bun local:

```bash
npm run dev -- web          # Chạy web interface
npm run dev -- --help       # Xem tất cả commands
npm run dev -- run "task"   # Chạy với một task
```

### Cách 2: Sử dụng Bun local trực tiếp

```bash
./.bun-local/bin/bun run --cwd packages/trangquynhcode --conditions=browser src/index.ts web
```

### Cách 3: Thêm Bun vào PATH (tùy chọn)

Nếu muốn sử dụng `bun` command trực tiếp:

```bash
# Thêm vào ~/.zshrc hoặc ~/.bashrc
export PATH="$HOME/Downloads/trangquynhcode/.bun-local/bin:$PATH"

# Sau đó reload shell
source ~/.zshrc  # hoặc source ~/.bashrc

# Bây giờ có thể dùng:
bun run --cwd packages/trangquynhcode --conditions=browser src/index.ts web
```

## 📝 Các lệnh phổ biến

```bash
# Web interface
npm run dev -- web

# Headless server
npm run dev -- serve

# Chạy với message
npm run dev -- run "your task here"

# Xem help
npm run dev -- --help
```

## 🔧 Troubleshooting

### Lỗi: "bun: command not found"
- Script đã được cấu hình để tự động sử dụng Bun local
- Nếu vẫn lỗi, thử chạy trực tiếp: `./.bun-local/bin/bun --version`

### Lỗi: "Cannot find module"
- Chạy lại: `./.bun-local/bin/bun install`

### Lỗi: "packages/opencode not found"
- Đã được đổi thành `packages/trangquynhcode`
- Đảm bảo bạn đang chạy từ thư mục gốc của project

## 📦 Package Names

Tất cả packages đã được đổi tên:
- `@opencode-ai/*` → `@trangquynhcode-ai/*`
- `opencode` → `trangquynhcode`
- `OpenCode` → `TrangQuynhCode`

## 🎉 Hoàn tất!

Ứng dụng đã sẵn sàng sử dụng với tên mới "TrangQuynhCode"!
