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
- Create React App
- Jest
- React DOM Test Utilities
- Git
- GitHub
- GitHub Actions
- Node.js / npm

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

For a non-interactive test run similar to the CI environment:

```bash
npm test -- --watchAll=false
```

## Continuous Integration

GitHub Actions CI has been added to automatically execute the project's automated tests.

The CI workflow currently runs when:

- Code is pushed to the `modernize-react-app` branch.
- A pull request targets the `master` branch.

The workflow:

1. Checks out the repository.
2. Configures Node.js.
3. Installs project dependencies.
4. Executes the automated test suite in CI mode.

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

The application runs locally at:

```text
http://localhost:3000
```

Run the automated tests:

```bash
npm test
```

## Current Modernization Branch

Active modernization work is being performed on:

```text
modernize-react-app
```

This keeps modernization work separate from the original project history until changes are reviewed and ready to be integrated.

## Planned Improvements

Future modernization work may include:

- Expand automated behavioral and edge-case coverage.
- Add test coverage reporting.
- Remove obsolete application state and legacy code.
- Review and modernize outdated dependencies in controlled increments.
- Address dependency security findings without introducing regressions.
- Improve accessibility and testability.
- Modernize deployment.
- Continue improving CI quality gates.

## Legacy Dependency Notice

This application was originally built using an older React/Create React App dependency stack.

Dependency modernization is being handled separately from functional refactoring and test development so that upgrades can be tested and verified incrementally rather than introducing large, difficult-to-diagnose changes.

## Portfolio Context

This repository demonstrates both the original web-development project and a later software-quality modernization effort.

The modernization work emphasizes:

- Software testing
- Behavioral and regression test design
- Defect prevention through automated verification
- React state-management improvements
- Git-based change control
- Continuous integration
- Incremental modernization of legacy software