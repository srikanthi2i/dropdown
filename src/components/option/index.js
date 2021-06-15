import './index.css';
import Chip from '../chip';

function Option(props) {

  const data = props.options;
  const constructedObj = {};
  for (let i = 0; i < data.length; i++) {
    for(let key in data[i])  {
      const dataKey = data[i][key];
      if (constructedObj[key] && constructedObj[key][dataKey]) {
        constructedObj[key] = {
        ...constructedObj[key],
        [data[i][key]]: constructedObj[key][dataKey] + JSON.stringify(data[i])};
      } else {
        constructedObj[key] = {
          ...constructedObj[key],
          [data[i][key]]: JSON.stringify(data[i])};
      }
    }
  }

  return (
    <div className="Options__container">
      {Object.keys(constructedObj).map(function(key) {
        return <div className="Option" value={key} key={key}>
          <Chip chips={constructedObj[key]} onSelect={props.onSelect} />
        </div>
      })}
    </div>
  );
}

export default Option;