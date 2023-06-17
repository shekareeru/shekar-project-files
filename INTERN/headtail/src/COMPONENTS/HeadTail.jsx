import React, { useRef, useState } from 'react';

function HeadTail() {
  const [selectedOption, setSelectedOption] = useState('');

  const [data, setData] = useState({
    data: [],
  });

  const prevSelecteOption = useRef('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (selectedOption === '') {
      alert('Please Select a Value');
      return;
    }

    if (selectedOption !== prevSelecteOption.current && selectedOption !== 'Select Value') {
      let diffData = {
        ...data,
        data: [...data.data, [selectedOption]],
      };
      setData(diffData);
      setSelectedOption('Select Value');
    } else {
      if (selectedOption !== 'Select Value') {
        let prevIndexArray = data.data.slice();
        const length = prevIndexArray.length - 1;
        prevIndexArray[length].push(selectedOption);
        let sameData = {
          ...data,
          data: prevIndexArray,
        };
        setData(sameData);
        setSelectedOption('Select Value');
      }
    }
    prevSelecteOption.current = selectedOption;
  };

  const handleClickDelete = (col, index, item) => {
    let arr = data.data[col].splice(index, 1);
    let temp = {
      ...data,
      data: data.data,
    };
    setData(temp);
  };

  return (
    <div className="container">
      <div>
        <h1>Head & Tail</h1>
      </div>
      <div>
        <form>
          <select
            id="ht"
            className="form-select"
            value={selectedOption}
            onChange={handleChange}
            required
          >
            <option value="" hidden>
              Select Value
            </option>
            <option value="H">H</option>
            <option value="T">T</option>
          </select>
          <button
            type="submit"
            className="btn btn-primary mt-5"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {data.data.length > 0 &&
          data.data.map((arr, col) => {
            return (
              <div key={col}>
                {arr.length > 0 &&
                  arr.map((item, index) => {
                    return (
                      <table key={`${col}-${index}`}>
                        <tbody>
                          <tr>
                            <td>
                              <button
                                id="torh"
                                className="btn btn-primary m-2"
                                data-tooltip={`Row ${col + 1}, Column ${index + 1}`}
                                onClick={() => handleClickDelete(col, index, item)}
                              >
                                {item}
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    );
                  })}
              </div>
            );
          })}
      </div>

      <style jsx>{`
        button[data-tooltip]:hover::before {
          content: attr(data-tooltip);
          position: absolute;
          left: 50%;
          transform: translate(-50%, -100%);
          padding: 0.25rem;
          background-color: #333;
          color: #fff;
          border-radius: 4px;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
}

export default HeadTail;


