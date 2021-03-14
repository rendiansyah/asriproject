import React from 'react'
import './App.css';
import Data from './Data'
import Input from './Input'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { nama: 'Budi', umur: 20 }
  }

  _ubahNama = () => this.setState({
    nama: 'Ani',
    umur: 18
  })

  _ubahNama2 = (namabaru) => this.setState({
    nama: namabaru
  })

  _ubahUmur2 = (umurbaru) => this.setState({
    umur: parseInt(umurbaru)
  })
  render() {
    return (
      <div className="App">
        <header className="App-header">
          State dan Props di Component React.js
      </header>
      <Data>
        nama = {this.state.nama}
        umur = {this.state.umur}
      </Data>
      <Input>
        _ubahNama = {this._ubahNama}
        _ubahNama2 = {this._ubahNama2}
        _ubahUmur2 = {this._ubahUmur2}
      </Input>
      </div>
    );
  }
}

export default App;