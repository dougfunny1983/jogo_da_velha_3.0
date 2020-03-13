// import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import  * as actions from '../src/actions/action'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const value = 'Finish docs'
    const expectedAction = {
      type: actions.GET_A_CLICK,
      value
    }
    expect(actions.getClick(value)).toEqual(expectedAction)
  })
});
