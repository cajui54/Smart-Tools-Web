import { render, fireEvent, screen } from '@testing-library/react';
import FormConvertText from '.';
import { text } from 'stream/consumers';

describe('Testing FormConvertText component', () => {
  it('should contain the button reset', () => {
    render(<FormConvertText />);

    const button = screen.getByRole('button', { name: 'reset' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('reset');
  });
  it('should clear areatext when click on button', () => {
    render(<FormConvertText />);
    const input = 'I have dream';

    const areatext = screen.getByPlaceholderText('Digite seu text aqui...');

    expect(areatext).toBeInTheDocument();

    fireEvent.change(areatext, { target: { value: input } });

    screen.getByText(input);
  });
});
