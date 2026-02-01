# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-02-01

### Added
- **Modular Build System**: Python script (`scripts/build.py`) to assemble the site from individual HTML modules.
- **Responsive Navigation**: New mobile-friendly hamburger menu implementation.
- **Base Template**: `docker/templates/base.html` with improved meta tags and SEO.
- **Modules**: Content split into 11 separate chapters in `docker/modules/`.
- **Documentation**: `readme.md`, `about.md`, `structure.md`, `changelog.md`.

### Changed
- Refactored monolithic `index.html` into a modular structure.
- Updated UI with refined CSS variables and modern spacing.
- Improved "Back to Top" functionality (if applicable) and smooth scrolling.

### Fixed
- Fixed duplicate script loading for `quiz-engine.js`.
- Resolved mobile responsiveness issues for navigation.

## [0.9.0] - Initial Version
- Initial release of the Docker Memo with single-page HTML structure.
- Basic chapters covering Docker commands, images, volumes, and networks.
- Integration of Quiz Engine.
