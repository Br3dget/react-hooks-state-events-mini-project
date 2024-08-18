import { render, screen, fireEvent } from '@testing-library/react';

import NewTaskForm from '../components/NewTaskForm';

import { CATEGORIES } from '../data';


test('calls the onTaskFormSubmit callback prop when the form is submitted', () => {

  const onTaskFormSubmit = jest.fn();

  render(<NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />);

});


