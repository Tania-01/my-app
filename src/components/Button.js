
function Button(props) {
    return (
      <div className={props.class}>
          <button>{props.value}</button>
      </div>
    );
}

export default Button;