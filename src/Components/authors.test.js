import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Authors from './authors';

it('renders the memory game without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Authors />, div);

  ReactDOM.unmountComponentAtNode(div);
});
it('increments the current score when a character is clicked', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Authors />, div);

  const character = div.querySelector('img[alt="Han Solo"]');
  TestUtils.Simulate.click(character.parentElement);

  expect(div.textContent).toContain('Current Score: 1');

  ReactDOM.unmountComponentAtNode(div);
});
it('resets the current score and preserves the top score after a duplicate click', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Authors />, div);

  let character = div.querySelector('img[alt="Han Solo"]');
  TestUtils.Simulate.click(character.parentElement);

  expect(div.textContent).toContain('Current Score: 1');

  character = div.querySelector('img[alt="Han Solo"]');
  TestUtils.Simulate.click(character.parentElement);

  expect(div.textContent).toContain('Current Score: 0');
  expect(div.textContent).toContain('Top Score: 1');

  ReactDOM.unmountComponentAtNode(div);
});