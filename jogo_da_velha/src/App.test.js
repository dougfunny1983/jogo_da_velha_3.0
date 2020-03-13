import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { initialState, reducer } from './reducers/reducer';
import App from './App';

const clear = () =>
  afterEach(function() {
    cleanup();
  });

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

describe('Testando o redux', () => {
  test('Verificando se renderiza o tabuleiro', () => {
    const { getByTestId } = renderWithRedux(<App />);
    const results = getByTestId('resultado');
    const table = getByTestId('tabuleiro');
    expect(table).toBeInTheDocument();
    expect(results).toHaveTextContent('Próximo Jogador: X');
  });
  clear();
  test('Verificando a existencia do botão', () => {
    const { getByTestId } = renderWithRedux(<App />);
    const btn = getByTestId('btn');
    expect(btn).toHaveTextContent('Recomeçar!');
  });
  clear();
  test('testando algum click no tabuleiro', () => {
    const { getByTestId } = renderWithRedux(<App />);
    const results = getByTestId('resultado');
    fireEvent.click(getByTestId(/0/i));
    expect(results).toHaveTextContent('Próximo Jogador: O');
  });
  clear();
  test('Verificando se o x ganha', () => {
    const { getByTestId } = renderWithRedux(<App />);
    const results = getByTestId('resultado');
    fireEvent.click(getByTestId(/0/i));
    fireEvent.click(getByTestId(/1/i));
    fireEvent.click(getByTestId(/2/i));
    fireEvent.click(getByTestId(/3/i));
    fireEvent.click(getByTestId(/4/i));
    fireEvent.click(getByTestId(/5/i));
    fireEvent.click(getByTestId(/6/i));
    expect(results).toHaveTextContent('Vencedor: X!!! S2');
  });
  clear();
  test('Verificando se a bolinha ganha', () => {
    const { getByTestId } = renderWithRedux(<App />);
    const results = getByTestId('resultado');
    fireEvent.click(getByTestId('btn'));
    fireEvent.click(getByTestId(/0/i));
    fireEvent.click(getByTestId(/2/i));
    fireEvent.click(getByTestId(/1/i));
    fireEvent.click(getByTestId(/4/i));
    fireEvent.click(getByTestId(/3/i));
    fireEvent.click(getByTestId(/6/i));
    expect(results).toHaveTextContent('Vencedor: O!!! S2');
  });
  clear();
  test('Verificando empate', () => {
    const { getByTestId } = renderWithRedux(<App />);
    const results = getByTestId('resultado');
    fireEvent.click(getByTestId('btn'));
    fireEvent.click(getByTestId(/1/i));
    fireEvent.click(getByTestId(/0/i));
    fireEvent.click(getByTestId(/4/i));
    fireEvent.click(getByTestId(/2/i));
    fireEvent.click(getByTestId(/3/i));
    fireEvent.click(getByTestId(/5/i));
    fireEvent.click(getByTestId(/6/i));
    fireEvent.click(getByTestId(/7/i));
    fireEvent.click(getByTestId(/8/i));
    expect(results).toHaveTextContent('Empate');
  });
  clear();
});
