import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './index';

const onClick = jest.fn();

test('should click triggered', () => {
  const { getByRole } = render(
    <Button
      onClick={onClick}
    />
  );

  userEvent.click(getByRole('button'));
  expect(onClick).toHaveBeenCalled();
});
