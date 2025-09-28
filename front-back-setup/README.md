# Front + Back Setup (Minimal)

- Backend: Node `http` on port 4000 → endpoint: `/api/hello`
- Frontend: CDN React page served by a simple static server (or open the file directly)

## Run

1. Backend:

```bash
node backend/server.js
```

2. Frontend (option A: Python static server):

```bash
cd frontend
python3 -m http.server 5173
```

Open `http://localhost:5173`.

Or, option B: open `frontend/index.html` directly in your browser.

## Notes
- CORS is enabled in the backend for simplicity.
- Adjust ports as needed.
