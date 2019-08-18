import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { walkHistory } = this.props

    return (
      <div className='block  table-block'>
        {walkHistory.map(el =>
          <div key={el.key} className='row'>
            <div>{el.key} </div>
            <div>{el.value} </div>
            <button onClick={() =>this.props.onRemoveRecordClick(el.key)}> Удалить</button>
          </div>
        )}
      </div>
    )
  }
}

export default Table;

