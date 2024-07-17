import { screen, render } from '@testing-library/react';
import Home from './page';

describe('Testing Home component', () => {
  it('should render with title "Hello"', () => {
    render(<Home />);

    const title = screen.getByRole('heading', { level: 2 });

    expect(title.textContent).toBe('Hello');
  });
});
