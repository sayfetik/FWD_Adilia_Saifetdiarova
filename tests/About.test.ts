import { test, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { About } from '../src/lib';

test('About component renders correctly', () => {
  const { getByText } = render(About);
  expect(getByText('About')).toBeTruthy();
  expect(getByText('Skills')).toBeTruthy();
});
