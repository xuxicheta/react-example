import { ChangeEvent, useRef, useState } from 'react';
import debounce from 'lodash.debounce';

export function BeerSearch({ onSearch = (v: string) => undefined }: { onSearch?: (s: string) => void }) {
  const [value, setValue] = useState<string>('');
  const onSearchDebounced = useRef(debounce(onSearch, 300)).current;

  const onChange = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setValue(value);
    onSearchDebounced(value);
  };


  return (
    <form className="my-4">
      <label className="flex">
        <span>Search:</span>

        <input
          className="ml-4 pl-2 w-full outline-none border border-gray-300"
          type="text"
          placeholder="...start typing to search"
          value={value}
          onChange={onChange}
        />
      </label>
    </form>
  );
}
