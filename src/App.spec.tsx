import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from './App';

describe('App', () => {
  test('render test', () => {
    const { getByText } = render(<App />);

    expect(getByText('React App')).toBeInTheDocument();
  });
});
