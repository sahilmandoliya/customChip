import { userData } from "../../data/userData";

type DropdownProps = {
  items: userData[];
  onSelect: (person: userData) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ items, onSelect }) => {
  return (
    <div className="flex flex-col overflow-y-auto h-48">
      {items.map((person, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-2 bg-gray-200 cursor-pointer hover:bg-gray-300"
          onClick={() => onSelect(person)}
        >
          <div className="flex items-center text-gray-500 rounded-full hover:bg-gray-300">
            <img className="w-8 h-8 rounded-full" src={person.imageSrc} alt="avatar" />
            <span className="ml-2 font-semibold">{person.name}</span>
            <span className="ml-2 text-xs text-gray-400">{person.emailId}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
