import { render, screen, fireEvent } from '@testing-library/react';

import Task from '../components/Task';


test('is removed from the list when the delete button is clicked', () => {

  const onDelete = jest.fn();

  render(<Task task={{ text: 'Buy rice', category: 'Food', id: 1 }} onDelete={onDelete} />);

  const deleteButton = screen.getByRole('button', { name: 'X' });

  fireEvent.click(deleteButton);

});


test('renders correctly with task data', () => {

  render(<Task task={{ text: 'Buy rice', category: 'Food', id: 1 }} />);

  expect(screen.getByText('Buy rice')).toBeInTheDocument();

  expect(screen.getByText('Food')).toBeInTheDocument();

});

