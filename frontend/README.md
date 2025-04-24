# Snake on the Throne - Frontend

A retro-styled blockchain gaming platform built with React, TypeScript, and Vite, featuring a unique meme battle system with betting capabilities.

## 🎮 Features

### Visual Design

- Retro arcade-style UI with neon green (#00FF66) aesthetics
- Custom pixel art font using "Press Start 2P"
- Responsive grid background with dynamic glow effects
- Animated UI elements and transitions

### Game Components

- Interactive meme battle arena
- Real-time matchmaking system
- Character customization interface
- Live leaderboard updates
- Betting system integration

### Technical Stack

- **Framework:** React 18+ with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom retro theme
- **State Management:** React Context + Hooks
- **Routing:** React Router v6
- **Blockchain Integration:** Web3.js/Ethers.js

## 🚀 Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm
- MetaMask or similar Web3 wallet

### Installation

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build
```

### Environment Setup

Create a `.env` file in the frontend root:

```env
VITE_APP_API_URL=your_backend_url
VITE_APP_CONTRACT_ADDRESS=your_contract_address
```

## 🎨 UI Components

### Layout Structure

- `components/` - Reusable UI components
- `pages/` - Main route pages
- `hooks/` - Custom React hooks
- `context/` - Global state management
- `utils/` - Helper functions
- `assets/` - Images and static files

## 🔧 Development

### Code Style

- ESLint configuration for TypeScript
- Prettier for code formatting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
