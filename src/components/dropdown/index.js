import React, { useState } from 'react';
import './index.css';
import Option from '../option';


function Dropdown() {
  const [showDropdown, toggleDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const data = [
    {a: 12, b:10, c: 14},
    {a: 21, b:70, d: 91},
    {a: 12, c:77, d: 95, m: 40}
  ];


  return (
    <section className="Dropdown">
      <div className="Dropdown__container" onClick={() => toggleDropdown(!showDropdown)}>
        <div className="selectedOption">{selectedValue ? selectedValue: 'Please select the value...'}</div>
        {showDropdown && <Option options={data} onSelect={setSelectedValue} />}
        <span className={showDropdown ? 'Dropdown__container--up-arrow': 'Dropdown__container--down-arrow'}></span>
      </div>
      <div><span>Selected value: </span><strong>{selectedValue}</strong></div>
    </section>
  );
}

export default Dropdown;