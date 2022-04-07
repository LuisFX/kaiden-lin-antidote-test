import { render } from '@testing-library/react';
import Item from './index';

const mockPatient = {
  groupBy: 'February 11',
  date: '2 weeks ago',
  name: 'Angela',
  avatar: '/assets/avatar.png'
};

test('should render values', () => {
  const { getByText } = render(
    <Item
      patient={mockPatient}
    />
  );

  expect(getByText('Angela')).toBeInTheDocument();
});
