import { screen, render } from '@testing-library/react';
import Home from './page';

describe('Testing Home component', () => {
  it('should render with title "Hello"', () => {
    render(<Home />);
  });
});
