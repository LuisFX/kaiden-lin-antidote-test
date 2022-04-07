import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from './index';

test('starts without value', () => {
  const placeholderText = 'placeholder';

  const { getByRole } = render(
    <SearchInput
      placeholder={placeholderText}
      onChange={() => {}}
    />
  );

  const textbox = getByRole('textbox');

  expect(textbox).toHaveValue('');
});

test('triggers onChange', async () => {
  const onSearch = jest.fn();
  const inputText = 'Jane';

  const { getByRole } = render(
    <SearchInput
      onChange={onSearch}
    />
  );

  const textbox = getByRole('textbox');

  userEvent.type(textbox, inputText);

  await new Promise((resolve) => setTimeout(resolve, 500));

  expect(textbox).toHaveValue(inputText);
});
