import { render, fireEvent, screen } from '@testing-library/react';
import FormConvertText from '.';

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

    const areatext = screen.getByPlaceholderText('Digite seu texto aqui...');

    expect(areatext).toBeInTheDocument();

    fireEvent.change(areatext, { target: { value: input } });

    screen.getByDisplayValue(input);

    const button = screen.getByRole('button', { name: 'reset' });

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(areatext).not.toHaveTextContent(input);
  });
  it('should convert all letter to uppercase to click on uppercase button', () => {
    render(<FormConvertText />);
    const text = 'i have dream';

    const areatext = screen.getByPlaceholderText('Digite seu texto aqui...');
    const button = screen.getByRole('button', { name: 'Uppercase' });

    fireEvent.input(areatext, { target: { value: text } });

    screen.getByDisplayValue(text);

    fireEvent.click(button);

    expect(areatext).not.toHaveTextContent(text);
    screen.getByDisplayValue('I HAVE DREAM');
  });
});
