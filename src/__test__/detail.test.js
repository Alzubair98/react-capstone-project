import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Details from '../component/details';
import store from '../Redux/configuration';

it('match snapshot for details page', () => {
  const tree = render(
    <BrowserRouter>
      <Provider store={store}>
        <Details />
      </Provider>
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
