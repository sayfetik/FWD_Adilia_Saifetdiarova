import { expect, test } from 'vitest';
import { render } from '@testing-library/svelte';
import {Footer} from '../src/lib';

test('Footer component contains links', () => {
  const { getByTestId } = render(Footer);

  expect(getByTestId('tg-link').getAttribute('href')).toBe('https://t.me/sayfetik');
  expect(getByTestId('gh-link').getAttribute('href')).toBe('https://github.com/sayfetik');
  expect(getByTestId('email').getAttribute('href')).toBe('mailto:sayfetik2005@gmail.com');
  expect(getByTestId('vk-link').getAttribute('href')).toBe('https://vk.com/sayfetik05');
  expect(getByTestId('inst-link').getAttribute('href')).toBe('https://www.instagram.com/sayfetik05/');
});
