const Button = ({ onClickHandler, value, title, disable }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns" disabled={disable} style={{}}>
      {title}
    </button>
  );
};

export default Button;
