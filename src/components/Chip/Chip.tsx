import { userData } from "../../data/userData";

type ChipProps = {
  user: userData;
  onRemove: () => void;
};

const Chip: React.FC<ChipProps> = ({ user, onRemove }) => {
  return (
    <div className="flex gap-2 items-center justify-between p-2 m-2 bg-gray-200 rounded-full text-gray-500 border-2">
      <div className="flex items-center">
        <img className="w-8 h-8 rounded-full" src={user.imageSrc} alt="avatar" />
        <span className="ml-2 font-semibold">{user.name}</span>
      </div>
      <button onClick={onRemove} className="px-0.5">
        X
      </button>
    </div>
  );
};

export default Chip;
