import { render, screen, fireEvent } from '@testing-library/react';

import TaskList from '../components/TaskList';

import { TASKS } from '../data';


test('displays all items when initially rendered', () => {

  render(<TaskList tasks={TASKS} />);


});
