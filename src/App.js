import React from 'react';
import './App.css';
import Forms from './Forms'
import Table from './Table'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: '', km: '', walkHistory: [] }
  }

  onChange = (event) => {
    const { name, value } = event.target
    this.setState(prevState => ({ ...prevState, [name]: value }))
  }

  onSubmit = (event) => {
    event.preventDefault()

    // Валидация ввода
    if (!/\d{2}.\d{2}.\d{4}/.test(this.state.data)) {
      this.setState(prevState => ({ ...prevState, data: 'ошибка ввода' }))

    } else if (isNaN(this.state.km)) {
      this.setState(prevState => ({ ...prevState, km: 'ошибка ввода' }))

    } else {

      let data = this.state.data;
      let km = Number(this.state.km);

      this.setState(prevState => ({
        ...prevState,

        walkHistory: this.state.walkHistory.find(el => el.key === data)
          ? this.state.walkHistory.map(el => el.key === data ? { key: el.key, value: el.value + km } : el)
          : this.state.walkHistory.concat({ key: data, value: km })
      }), () => console.log(this.state)
      )
    }
  }

  onRemoveRecordClick = (key) => {
    this.setState(prevState => ({ walkHistory: this.state.walkHistory.filter(el => el.key !== key) }))
  }

  render() {
    return (
      <div className="App">
        <Forms data={this.state.data} km={this.state.km} onChange={this.onChange} onSubmit={this.onSubmit} />
        <Table walkHistory={this.state.walkHistory.sort(function (a, b) { return (new Date(b.key).getTime() - new Date(a.key).getTime()) })}
          onRemoveRecordClick={this.onRemoveRecordClick} />
      </div>
    );
  }
}

export default App;
