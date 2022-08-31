import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Secondcont from '../component/animalCard';
import store from '../Redux/configuration';

it('match snapshot for details page', () => {
  const tree = render(
    <BrowserRouter>
      <Provider store={store}>
        <Secondcont />
      </Provider>
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
