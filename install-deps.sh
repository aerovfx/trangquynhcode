#!/bin/bash

# Script cài đặt dependencies cho OpenCode
# Chạy script này: bash install-deps.sh

set -e

echo "🔍 Kiểm tra Bun..."

# Kiểm tra Bun
if ! command -v bun &> /dev/null; then
    echo "❌ Bun chưa được cài đặt!"
    echo ""
    echo "📦 Đang cài đặt Bun..."
    curl -fsSL https://bun.sh/install | bash
    
    # Thêm vào PATH
    export PATH="$HOME/.bun/bin:$PATH"
    
    # Kiểm tra lại
    if ! command -v bun &> /dev/null; then
        echo "❌ Không thể tìm thấy Bun sau khi cài đặt"
        echo "💡 Vui lòng thêm vào PATH: export PATH=\"\$HOME/.bun/bin:\$PATH\""
        exit 1
    fi
fi

BUN_VERSION=$(bun --version)
echo "✅ Bun đã được cài đặt: $BUN_VERSION"

echo ""
echo "📦 Đang cài đặt dependencies..."
bun install

echo ""
echo "✅ Hoàn tất! Dependencies đã được cài đặt."
echo ""
echo "🚀 Bạn có thể chạy ứng dụng với:"
echo "   npm run dev -- --help"
echo "   hoặc"
echo "   npm run dev -- web"
