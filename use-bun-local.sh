#!/bin/bash

# Script để sử dụng Bun local đã được cài đặt
# Chạy: source use-bun-local.sh hoặc . use-bun-local.sh

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
export PATH="$SCRIPT_DIR/.bun-local/bin:$PATH"

echo "✅ Đã thêm Bun local vào PATH"
echo "📍 Bun version: $(bun --version)"
echo ""
echo "🚀 Bây giờ bạn có thể chạy:"
echo "   bun install          # Cài đặt dependencies"
echo "   npm run dev -- web    # Chạy web interface"
echo "   npm run dev -- --help # Xem tất cả lệnh"
