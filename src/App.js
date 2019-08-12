import React from 'react';
import './App.css';
import Forms from './Forms'
import Table from './Table'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: '', km: '', walkHistory: [] }
    this.walkHistory = []
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
      let sameDate = this.walkHistory.find(el => el.key === data);

      // Проверка одинаковых дат
      sameDate ? sameDate.value += km : this.walkHistory.push({ key: data, value: km })

      // Сортировка по возрастанию
      this.walkHistory.sort(function (a, b) {
        return (new Date(b.key).getTime() - new Date(a.key).getTime())
      })

      this.setState(prevState => ({ ...prevState, walkHistory: this.walkHistory }), () => console.log(this.state))
    }
  }

  onClick = (key) => {
    this.walkHistory = this.walkHistory.filter(el => el.key !== key)
    this.setState(prevState => ({ walkHistory: this.walkHistory }))
  }

  render() {
    return (
      <div className="App">
        <Forms data={this.state.data} km={this.state.km} onChange={this.onChange} onSubmit={this.onSubmit} />
        <Table walkHistory={this.state.walkHistory} onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
