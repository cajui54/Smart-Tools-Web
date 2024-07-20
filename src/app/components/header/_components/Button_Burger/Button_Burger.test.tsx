import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import ButtonBuger from './index';

describe('Testing ButtonBuger component', () => {
  it('should contain component ButtonBuger in screen', () => {
    render(
      <Provider store={store}>
        <ButtonBuger />
      </Provider>
    );
    const btnBurger = screen.getByLabelText('burgeButton');

    expect(btnBurger).toBeInTheDocument();
  });
  it('should not there the class animationButtonBurger in burgeButton', () => {
    render(
      <Provider store={store}>
        <ButtonBuger />
      </Provider>
    );
    const btnBurger = screen.getByLabelText('burgeButton');

    expect(btnBurger).not.toHaveClass('animationButtonBurger');
  });
  it('should contain the class animationButtonBurger in burgeButton to click it', () => {
    render(
      <Provider store={store}>
        <ButtonBuger />
      </Provider>
    );
    const menuButton = screen.getByLabelText('btnMenu');

    fireEvent.click(menuButton);

    const btnBurger = screen.getByLabelText('burgeButton');

    expect(btnBurger).toHaveClass('animationButtonBurger');
  });
});
