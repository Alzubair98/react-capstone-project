import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Fullphone from '../component/fullPhone';
import store from '../Redux/configuration';

it('match snapshot for details page', () => {
  const tree = render(
    <BrowserRouter>
      <Provider store={store}>
        <Fullphone />
      </Provider>
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
