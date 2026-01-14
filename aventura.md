# Aventura - Website Reference Document

## Overview

**Aventura** is an AI-powered interactive fiction and creative writing application. It's a cross-platform desktop and mobile app that combines collaborative storytelling with intelligent AI assistance, allowing users to create immersive narratives with extensive customization options.

- **Current Version**: 0.3.8
- **Repository**: https://github.com/unkarelian/Aventura
- **License**: AGPL-3.0 (GNU Affero General Public License v3)
- **Bundle ID**: com.karelian.aventura

---

## Target Audience

1. **Creative Writers & Authors** - Novelists seeking AI collaboration, worldbuilders, experimental fiction creators
2. **Tabletop RPG Enthusiasts** - Interactive fiction players, Game Masters, character backstory creators
3. **AI Enthusiasts** - Prompt engineers, LLM experimenters, custom API users
4. **Game Developers** - Interactive narrative designers, branching story creators
5. **Community Crossover** - SillyTavern/Character.AI users, AIDungeon players, writing communities

---

## Platform Support

### Desktop
- **Windows**: Installer (.exe)
- **macOS**: DMG package
- **Linux**: DEB package, AppImage

### Mobile
- **Android**: APK (universal builds)
- **iOS**: Planned (infrastructure in place)

---

## Technology Stack

### Frontend
- **SvelteKit 5** with Svelte 5 runes
- **TypeScript 5.6+** (strict mode)
- **Tailwind CSS 3.4+**
- **Vite 6.0+** build tool
- **Lucide** icons

### Backend
- **Tauri 2** (Rust 2021 edition)
- **SQLite** database with migrations
- **Axum** HTTP server (for network sync)

### AI & Processing
- **OpenRouter API** (70+ providers, 100+ models)
- **Harper.js** (WebAssembly-based local grammar checking)
- **NanoGPT** (image generation)
- **gpt-tokenizer** (token counting)

---

## Core Features

### Story Modes
- **Adventure Mode**: Interactive fiction with multiple-choice actions and dynamic world tracking (second-person perspective)
- **Creative Writing Mode**: Freeform collaborative writing with AI assistance
- **POV Options**: First, second, or third-person perspectives
- **Tense Control**: Past or present tense narrative style

### AI Integration
- Access to **70+ LLM providers** via OpenRouter
- **Streaming responses** for real-time text generation
- Configurable parameters (temperature, token limits up to 1M)
- **Extended thinking/reasoning** support
- Custom API endpoint support for OpenAI-compatible providers
- **API Profiles** for saving multiple configurations

### Intelligent Memory System
- **Automatic chapter summarization** for context management
- Configurable token threshold (default: 24,000 tokens)
- **AI-powered memory retrieval** surfaces relevant past events
- Chapter metadata tracking (keywords, characters, locations, plot threads, emotional tone)
- **In-story time tracking** per chapter

### Unified Lorebook/World-Building
Single interface for managing 6 entry types:
- Characters
- Locations
- Items
- Factions
- Concepts
- Events

**Features:**
- Dynamic state tracking (relationships, visit history, quantities, etc.)
- Multiple injection modes (always, keyword-based, relevance-based, never)
- Hidden information system for undiscovered secrets
- Aliases for flexible referencing
- **AI Lore Management Agent** - autonomously creates and updates entries

### Import/Export Compatibility
- JSON and YAML formats
- **SillyTavern character cards** (V1/V2 JSON and PNG)
- Custom lorebook import with AI classification
- Full story export/import

### Advanced Writing Tools
- **Local grammar checking** (Harper.js, WebAssembly - no external API needed)
- **AI-powered style analysis** for repetitive words/phrases
- **Action suggestions** matching player writing style
- Persistent suggestions saved between sessions

### World Tracking
- **Character Management**: Relationships, dispositions, status, portraits, visual descriptors
- **Location Tracking**: Visit history, discovery status, connections
- **Inventory Management**: Quantities, equipment status, item locations
- **Quest/Story Beats**: Milestones, revelations, plot points with status tracking
- **In-Story Time System**: Year/Day/Hour/Minute progression

### Template System
**Built-in Genre Templates:**
- Fantasy Adventure
- Sci-Fi Exploration
- Mystery Investigation
- Horror Survival
- Slice of Life
- Custom (user-created)

**Template Features:**
- Custom system prompts
- Initial state configuration
- Opening scene text
- Interactive setup wizard with AI assistance

### Image Generation
- Embedded scene images within story entries
- AI-powered scene detection
- NanoGPT provider integration
- Character portrait support (upload, generate, or existing)
- Configurable sizes (512x512 or 1024x1024)

### Checkpoint System
- Named checkpoints for full state snapshots
- Deep state saves (entries, characters, locations, items, beats, chapters, time)
- **Retry system** for alternative narrative paths
- Checkpoint export as JSON

### Story Branching (Alt Timelines)
- Create alternate timelines from any point
- Hierarchical branch trees with visual representation
- Branch management (rename, switch, track entry counts)
- Isolated world state per branch

### Network Synchronization
- Local network sync between devices
- **QR code pairing** for easy device connection
- Bidirectional story push/pull
- Server mode for story sharing
- Conflict resolution and version checking

### Text-to-Speech
- OpenAI-compatible TTS integration
- Configurable voice, model, speed
- Voice preview functionality
- Automatic narration

---

## UI Customization

### Themes
- Dark (default)
- Light
- Light Solarized
- Retro Console
- Fallen Down (special theme)

### Fonts
- System fonts
- Google Fonts integration
- Font source configuration

### Text Size
- Small, Medium, Large options

### Display Options
- Word count toggle
- Mobile-optimized responsive design
- Swipe navigation on mobile
- Collapsible sidebar

---

## Main UI Screens

1. **Story View** - Chronological entry display with virtualized scrolling, streaming generation, location/time display
2. **Action Input Panel** - Multiple input modes (do/say/think/story/free), grammar indicators, retry/undo
3. **Library View** - Story selection, new story creation, template browser, import/export
4. **Lorebook View** - Two-panel layout for entry list and editing, search, import/export
5. **Memory View** - Chapter cards with summaries, manual chapter creation, memory settings
6. **World Panels** - Sidebar panels for Characters, Locations, Inventory, Time, Quests, Branches
7. **Settings Modal** - Tabbed interface for API, generation, UI, prompts, image, TTS, advanced settings
8. **Setup Wizard** - Multi-step story creation with genre selection, protagonist generation, world config

---

## Unique Selling Points

1. **Unified World-Building System** - Single interface for all lore types with dynamic state tracking
2. **Intelligent Context Management** - Automatic chapter summarization with AI-powered memory retrieval
3. **Multi-Provider AI Access** - OpenRouter integration with 70+ LLM providers, no vendor lock-in
4. **Local Grammar Checking** - Offline grammar checking without external API calls
5. **Story Branching** - Explore alternate timelines without losing original story
6. **Network Sync** - Cross-device synchronization via local network with QR pairing
7. **Autonomous Lore Management** - AI agent automatically creates/updates world entries
8. **Comprehensive Prompt System** - Custom prompts with macro system for dynamic content
9. **Integrated Image Generation** - Scene images and character portraits for visual storytelling
10. **Open Source (AGPL)** - Community-driven development with full transparency
11. **Cross-Platform** - Desktop (Win/Mac/Linux) and Android, iOS planned
12. **SillyTavern Compatibility** - Import character cards and lorebooks from popular formats

---

## Branding Assets

### App Icons Available
- PNG: 32x32, 64x64, 128x128, 128x128@2x
- Windows: icon.ico
- macOS: icon.icns
- Linux: icon.png
- Windows Store: Various square sizes (30x30 to 310x310)
- iOS: Prepared variants in /icons/ios/

### Product Details
- **Name**: Aventura
- **Default Window**: 1280x800 pixels (minimum 800x600)

---

## Architecture Overview

### Frontend Structure
```
src/
├── routes/                    # SvelteKit pages
├── lib/
│   ├── components/           # 47 Svelte components by feature
│   │   ├── layout/           # AppShell, Header, Sidebar
│   │   ├── story/            # Story display, input, suggestions
│   │   ├── lorebook/         # Lore management UI
│   │   ├── memory/           # Chapter management
│   │   ├── world/            # Character, location, inventory panels
│   │   ├── settings/         # Configuration UI
│   │   ├── sync/             # Network sync UI
│   │   ├── wizard/           # Story creation wizard
│   │   ├── branch/           # Timeline management
│   │   └── prompts/          # Prompt editing
│   ├── services/             # 36 TypeScript services
│   │   ├── ai/               # AI orchestration (20+ services)
│   │   └── database.ts       # SQLite CRUD
│   ├── stores/               # Svelte stores (.svelte.ts)
│   └── types/                # TypeScript interfaces
```

### Backend Structure
```
src-tauri/
├── src/
│   ├── lib.rs               # Tauri commands
│   └── sync/                # Network sync module (Axum)
├── migrations/              # 11 SQLite migrations
└── icons/                   # App icons
```

### Data Flow
1. User actions → Svelte stores update
2. Store changes → DatabaseService persists to SQLite
3. AI requests → AIService → OpenRouter API (streaming)
4. Results → Processed and stored in database

---

## Recent Development Activity

**Total Commits**: 214+ (active development)

**Recent Changes:**
- Version bump to 0.3.8
- Fixed chapters not being exported
- Added OpenAI-compatible TTS
- Mobile UI improvements
- Checkpoint export functionality
- Checkpoints feature
- Performance improvements
- Separate profiles for queries
- Increased max tokens to 1M
- Added "Fallen Down" theme

**Release Channel**: GitHub releases with auto-updater support

---

## Configuration Options

### API Configuration
- OpenRouter API key
- Custom API endpoints
- Model selection
- Temperature (0.0-2.0)
- Max tokens (up to 1M)
- Extended thinking settings

### Memory Settings
- Token threshold (default: 24,000)
- Chapter buffer (default: 10)
- Auto-summarize toggle
- Memory retrieval toggle

### Image Generation
- Enable/disable auto-generation
- Image size selection
- NanoGPT API key

### TTS Settings
- API endpoint and key
- Model and voice selection
- Speed adjustment

---

## Summary

Aventura is a mature, feature-rich application for AI-assisted creative writing and interactive fiction. It distinguishes itself through its comprehensive world-building system, intelligent memory management, multi-provider AI support, and cross-platform availability. The open-source nature (AGPL) and compatibility with existing formats (SillyTavern) make it accessible to a wide community of writers and storytellers.
