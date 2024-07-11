import { test, expect } from 'vitest';
import { render, waitFor } from '@testing-library/svelte';
import { Comic } from '../src/lib';

const mockComic = {
  month: '',
  num: 0,
  link: '',
  year: '',
  news: '',
  safe_title: '',
  transcript: "",
  alt: "",
  img: '',
  title: '',
  day: ''
};

test('Comic component renders correctly', async () => {
  const { getByTestId } = render(Comic, { props: { data: { comic: mockComic } }});
  await waitFor(() => {
    expect(getByTestId('image')).toBeTruthy();
    expect(getByTestId('title')).toBeTruthy();
    expect(getByTestId('date')).toBeTruthy();
    expect(getByTestId('relative-date')).toBeTruthy();
  });
});
