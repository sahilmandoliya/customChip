import React, { useState, ChangeEvent, useRef } from "react";
import Chip from "../Chip/Chip";
import Dropdown from "../Dropdown/Dropdown";
import { user, userData } from "../../data/userData";

const ChipInput: React.FC = () => {
  const [items, setItems] = useState<userData[]>(user);
  const [selectedPersons, setSelectedPersons] = useState<userData[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [lastIndex, setLastIndex] = useState<number>(-1);
  const [inFocus, setInFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handlePersonSelect = (person: userData) => {
    if (!selectedPersons.includes(person)) {
      setSelectedPersons([...selectedPersons, person]);
      setItems(items.filter((item) => item !== person));
      setInputValue("");
      inputRef.current?.focus();
    }
  };

  const handleRemove = (person: userData) => {
    setSelectedPersons(selectedPersons.filter((item) => item !== person));
    setItems([...items, person]);
    inputRef.current?.focus();
  };

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (lastIndex === -1) {
        setLastIndex(selectedPersons.length - 1);
      } else {
        handleRemove(selectedPersons[lastIndex]);
        setLastIndex(-1);
      }
    }
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="relative flex flex-wrap border-b-4 border-indigo-500 bg-slate-100 min-h-14 lg:max-w-[1100px] w-full">
      {selectedPersons.map((user, index) => (
        <Chip key={index} user={user} onRemove={() => handleRemove(user)} />
      ))}

      <div className="relative">
        <div className="absolute">
          <input
            ref={inputRef}
            className="p-2 m-2 bg-gray-200 bg-transparent focus:outline-none"
            type="text"
            placeholder="Add a new user..."
            value={inputValue}
            onKeyDown={handleBackspace}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            onFocus={() => setInFocus(true)}
          />

          {inFocus && (
            <Dropdown items={filteredItems} onSelect={handlePersonSelect} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChipInput;
