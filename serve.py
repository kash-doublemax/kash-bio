"""
本地開發用 HTTP server，補上 Python 預設 mimetypes 缺少的 webp / avif 支援。

使用：
    python serve.py            # 預設 8000 埠
    python serve.py 8080       # 指定其他埠

網站根目錄：與 serve.py 同一資料夾
"""
import http.server
import mimetypes
import socketserver
import sys

mimetypes.add_type("image/webp", ".webp")
mimetypes.add_type("image/avif", ".avif")
mimetypes.add_type("font/woff2", ".woff2")
mimetypes.add_type("application/manifest+json", ".webmanifest")

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000


class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print(f"Serving on http://127.0.0.1:{PORT}/  (Ctrl+C to stop)")
    httpd.serve_forever()
