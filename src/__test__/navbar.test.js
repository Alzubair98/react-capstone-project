import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../component/navbar';
import store from '../Redux/configuration';

it('match snapshot for details page', () => {
  const tree = render(
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
      </Provider>
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
