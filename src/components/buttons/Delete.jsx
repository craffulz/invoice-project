import useStore from "../../helpers/store";

const Delete = () => {
  const { openModal } = useStore();
  return (
    <button
      id="delete"
      className="w-[89px] h-[48px] rounded-full bg-9 hover:bg-10 
    font-spartan font-bold text-white text-sm leading-[10px] tracking-[-0.25px]"
      onClick={() => {
        openModal('DELETE');
      }}
    >
      Delete
    </button>
  );
};

export default Delete;
