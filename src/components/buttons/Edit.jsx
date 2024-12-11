import useStore from "../../helpers/store";

const Edit = () => {
  const { openFormModal } = useStore();
  return (
    <button
      id="edit"
      className="w-[73px] h-[48px] bg-11 rounded-full items-center justify-center 
      font-spartan font-bold text-7 text-sm leading-[10px] tracking-[-0.25px]
      dark:bg-4 dark:hover:bg-5 hover:bg-5"
      onClick={() => {
        openFormModal("edit");
      }}
    >
      Edit
    </button>
  );
};

export default Edit;
