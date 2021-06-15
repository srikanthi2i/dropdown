import './index.css';

function Chip(props) {
  const data = props.chips;

  return (
    <div className="Chips__container">
      {Object.keys(data).map(function(key) {
        return <div className="Chip" key={key} onClick={() => props.onSelect(data[key])}>
          <div>{key}</div>
        </div>
      })}
    </div>
  );
}

export default Chip;