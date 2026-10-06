# Star Wars Memory Game

A React-based memory game originally developed as part of the University of Minnesota Full Stack Web Development program and now being modernized with a focus on software quality engineering, automated testing, regression testing, and continuous integration.

## Project Overview

The goal of the game is to select Star Wars characters without selecting the same character twice.

After each selection, the character cards are shuffled. The player's current score increases for each unique character selected. Selecting a duplicate character resets the current score while preserving the highest score achieved.

This repository also serves as a portfolio project demonstrating an incremental software modernization and testing workflow.

## Application Behavior

The game implements the following core behavior:

- The game begins with a Current Score of 0 and Top Score of 0.
- Selecting a character that has not previously been selected increases the Current Score.
- Character cards are shuffled after each selection.
- Selecting the same character again resets the Current Score to 0.
- The highest score achieved is retained as the Top Score.

## Technologies

- React
- JavaScript
- HTML/CSS
- Vite
- Vitest
- jsdom
- React DOM Test Utilities
- Node.js / npm
- Git
- GitHub
- GitHub Actions

## Automated Testing

The project includes automated component and behavioral regression tests.

Current automated test coverage verifies:

1. The application renders without crashing.
2. The memory-game component renders without crashing.
3. Selecting a character increments the Current Score.
4. Selecting a duplicate character resets the Current Score and preserves the Top Score.

The current automated test suite contains:

- 2 test suites
- 4 automated tests

Run the tests locally with:

```bash
npm test
```
The test script uses Vitest in non-interactive run mode:

```bash
npm test
```
## Continuous Integration

GitHub Actions CI has been added to automatically execute the project's automated tests.

The CI workflow currently runs when:

- Code is pushed to the `modernize-react-app` branch.
- A pull request targets the `master` branch.

The workflow:

1. Checks out the repository.
2. Configures Node.js 24.
3. Installs project dependencies.
4. Executes the Vitest automated test suite with `npm test`.

The CI environment is aligned with the modern Vite/Vitest toolchain and provides automated regression
feedback whenever changes are pushed to the modernization branch.

This provides automated regression feedback whenever changes are pushed to the modernization branch.

## 2026 Modernization Work

The original application was created as a Full Stack Web Development coursework project. In 2026, a modernization effort was started to improve code quality, automated testing, and development practices.

### Completed

- Established a working local development environment.
- Verified the existing application behavior manually.
- Established an automated-test baseline.
- Identified direct React state mutation in the game logic.
- Refactored score handling to use React `setState()`.
- Replaced direct mutation of the clicked-character array with an immutable state update.
- Verified application behavior after the refactor.
- Added component-level automated testing.
- Added behavioral regression testing for scoring.
- Added duplicate-selection and Top Score regression coverage.
- Added GitHub Actions continuous integration.
- Verified the automated test suite successfully executes in GitHub Actions.
- Migrated the development and production build tooling from Create React App to Vite.
- Converted JSX source files to `.jsx` and replaced legacy CommonJS image loading with ES module imports.
- Verified application rendering and core game behavior after the Vite migration.
- Verified the Vite production build successfully completes.
- Migrated the automated test suite from the legacy CRA/Jest toolchain to Vitest with jsdom.
- Preserved all 4 existing regression tests during the test-runner migration.
- Removed the obsolete `react-scripts` dependency and its legacy dependency tree.
- Reduced the local npm dependency audit from more than 200 reported findings to 0 reported vulnerabilities.
- Updated GitHub Actions to run the Vitest suite on Node.js 24.
- Diagnosed and corrected CI compatibility issues introduced during the toolchain migration.
- Verified the modernized test suite successfully executes in GitHub Actions.

## Quality Engineering Approach

The modernization work follows an incremental quality-engineering workflow:

**Baseline → Identify Issue → Refactor → Test → Verify → Commit → CI Validation**

Changes are intentionally kept small and independently verifiable to reduce regression risk and maintain traceable Git history.

## Running the Project Locally

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```
By default, Vite serves the application locally at:

```text
http://localhost:5173
```

Run the automated tests:

```bash
npm test
```
Create a production build:

```bash
npm run build
```

## Current Modernization Branch

Active modernization work is being performed on:

```text
modernize-react-app
```

This keeps modernization work separate from the original project history until changes are reviewed and ready to be integrated.

## Planned Improvements

Future modernization work may include:

- Expand automated behavioral and edge-case test coverage.
- Add automated test coverage reporting.
- Upgrade React in a controlled, separately tested change.
- Improve accessibility and accessibility-focused testing.
- Strengthen CI quality gates with reproducible dependency installation and production build validation.
- Modernize GitHub Pages deployment for the Vite build.
- Continue removing obsolete application code where identified.
- Review future dependency updates incrementally and verify them through automated regression testing.

## Dependency Modernization

The application was originally built with an older React and Create React App dependency stack.

As part of the 2026 modernization effort, Create React App and `react-scripts` were removed and the project was migrated to Vite and Vitest. This substantially reduced the legacy dependency tree and resulted in 0 vulnerabilities reported by the local npm audit on the modernization branch.

React remains on the original application version and will be upgraded separately so that framework changes can be tested independently from the completed build-tool and test-runner migration.

The repository's default branch may continue to show legacy dependency alerts until the modernization work is reviewed and integrated.

## Portfolio Context

This repository demonstrates both the original web-development project and a later software-quality modernization effort.

The modernization work demonstrates:

- Software testing and behavioral regression test design
- Refactoring while preserving existing application behavior
- React state-management improvements
- Migration of legacy build and test tooling
- Automated verification with Vitest and jsdom
- Dependency and security-risk reduction
- Git-based incremental change control
- Continuous integration with GitHub Actions
- CI failure investigation and environment compatibility troubleshooting
- Production-build verification with Vite
- Incremental modernization of legacy software