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
    <form className="p-5 ">
      <label className="pl-3 border border-gray-300 flex sm:w-full">
        <span>Search:</span>

        <input
          className="ml-4 w-full outline-none"
          type="text"
          placeholder="...enter search text here"
          value={value}
          onChange={onChange}
        />
      </label>
    </form>
  );
}
