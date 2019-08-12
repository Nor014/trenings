import React from 'react';

class Forms extends React.Component {
  constructor(props) {
    super(props)
  }

  onChange = (event) => {
    this.props.onChange(event)
  }

  onSubmit = (event) => {
    this.props.onSubmit(event)
  }

  render() {
    const { data, km } = this.props
    return (
      <form className='forms-inner' onSubmit={this.onSubmit}>
        <div className='form'>
          <label htmlFor='data'>Дата (ДД.ММ.ГГ)</label>
          <input type="text" id='data' name='data' value={data} className='block' onChange={this.onChange} />
        </div>

        <div className='form'>
          <label htmlFor='km'>Пройдено км</label>
          <input type="text" id='km' name='km' value={km} className='block' onChange={this.onChange} />
        </div>

        <button type='submit' className='button block'>OK</button>
      </form>
    )
  }
}

export default Forms;