import css from "../ButtonAdd/ButtonAdd.module.css";

const ButtonAdd = ({ text }) => {
  return (
    <button type="submit" className={css.buttonAdd}>
      {text}
    </button>
  );
};

export default ButtonAdd;
