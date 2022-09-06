import * as style from './FilterDropdownStyle';

export default function FilterDropdown({ options, setSort, setNextPage }) {
  const handleChange = (e, { value }) => {
    setSort(value);
    setNextPage(1);
  };
  return (
    <style.FilterDropdown
      defaultValue={options[0].value}
      fluid
      selection
      options={options}
      onChange={handleChange}
    />
  );
}
