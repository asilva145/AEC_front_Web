import React from 'react';
import Row from "react-bootstrap/Row";
import {Categorie} from '../Categorie/Categorie';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
