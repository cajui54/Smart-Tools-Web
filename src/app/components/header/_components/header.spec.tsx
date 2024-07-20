import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import Header from '..';

describe('Testing Header component', () => {
  it('should begin with classes of closed menu', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const btnBurger = screen.getByLabelText('burgeButton');

    expect(btnBurger).not.toHaveClass('animationButtonBurger');

    const navbar = screen.getByLabelText('navbar');

    expect(navbar).toHaveClass('animationNavbar');
  });
  it('should open menu to click button', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const menubtnBuger = screen.getByLabelText('btnMenu');

    fireEvent.click(menubtnBuger);

    const btnBurger = screen.getByLabelText('burgeButton');

    expect(btnBurger).toHaveClass('animationButtonBurger');

    const navbar = screen.getByLabelText('navbar');

    expect(navbar).not.toHaveClass('navbar');
  });
});
