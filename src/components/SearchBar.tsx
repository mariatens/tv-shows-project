interface SearchBarProps {
  value: string;
  onChange: (searchInput: string) => void;
}

//lifting to parent
export function SearchBar(props: SearchBarProps): JSX.Element {
  return (
    <input
      placeholder="search here!"
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
      className="search-bar"
    />
  );
}
