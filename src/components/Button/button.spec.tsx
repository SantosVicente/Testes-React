import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import Button from './';

const buttonTestID = 'Button';

describe('Button', () => {
  //beforeEach(() => {
  //  render(<Button>Button Test</Button>);
  //});

  test('render test', () => {
    const { getByTestId } = render(<Button>Button Test</Button>);

    expect(getByTestId(buttonTestID)).toBeInTheDocument();
  });

  test('children test', () => {
    const { getByTestId } = render(<Button>Button Test</Button>);

    expect(getByTestId(buttonTestID)).toHaveTextContent('Button Test');
  });

  test('Should be able to fire event', () => {
    const handleClick = vi.fn();

    const { getByTestId } = render(
      <Button onClick={handleClick}>Button Test</Button>
    );

    fireEvent.click(getByTestId(buttonTestID));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('Should be able to have a default style', () => {
    const { getByTestId } = render(<Button>Button Test</Button>);

    expect(getByTestId(buttonTestID)).toHaveClass('bg-blue-500');
  });
});
