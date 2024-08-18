import { render, screen, fireEvent } from '@testing-library/react';

import App from '../components/App';


test('clicking the category button adds a class of \'selected\' to the button', () => {

  render(<App />);

  const codeButton = screen.getByRole('button', { name: 'Code' });

  fireEvent.click(codeButton);


});
