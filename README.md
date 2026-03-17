# Connect Four

A full-stack web application that brings the classic Connect Four game to your browser, featuring both offline couch co-op and real-time online multiplayer modes.

## Features

* **Dual Game Modes** — Play locally with a friend on the same screen (Couch Co-op) or connect online for a competitive multiplayer experience.
* **Real-Time Sync** — Instantaneous move updates and turn tracking for both players in online mode via WebSockets.
* **Synchronized Restart** — A voting system that requires both players to agree before the board resets for a new round.
* **Smart Connection Logic** — Automatically detects the host environment to seamlessly route WebSocket connections.
* **Responsive UI** — Clean, modern interface styled with Tailwind CSS, featuring smooth drop animations for game pieces.

## Tech Stack

**Frontend**
* HTML5 & Vanilla JavaScript
* Tailwind CSS
* Native WebSocket API

**Backend**
* Python 3
* `websockets` library (Asynchronous server)
* `asyncio` (Concurrency management)
* `http.server` (Built-in static file hosting)

## Getting Started

### Prerequisites

* Python 3.8+
* A modern web browser

### Backend

# Clone the repo
git clone https://github.com/your-username/connect-four.git
cd connect-four

# Install dependencies
pip install websockets

# Run the server
python server.py


### Frontend

* **For Local/Couch Co-op:** Open your browser and navigate to `http://localhost:8000`.
* **For Online Multiplayer (LAN):** Find your machine's local IP address (e.g., `192.168.x.x`). Have your opponent navigate to `http://192.168.x.x:8000` on their device while connected to the same network.
