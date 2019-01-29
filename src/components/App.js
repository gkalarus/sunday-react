import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import './App.css';
import * as currentWeekNumber from 'current-week-number';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import { BeatLoader } from 'react-spinners';


const API = `https://jakitydzien.pl/api/?type=json&api_key=cb01cde96fa2e2ddd437656a92c2da98`

const proxyUrl = 'https://cors-anywhere.herokuapp.com/'


class App extends Component {

  state = {
    nextSunday: null,
    weekNumber: currentWeekNumber(),
    sundayDetails: null,
    texts: {
      open: 'Biegnij do sklepu, świat za oknem poczeka...',
      close: 'Świat jest piękny, wyjdź na spacer z przyjacielem!'
    },
    loading: true
  }

  getDate = (date) => {
    let lastDay = date.getDate() - (date.getDay() - 1) + 6;
    return new Date(date.setDate(lastDay));
  }

  handleCheck = (weekNumber) => {
    fetch(proxyUrl + `${API}&w=${weekNumber}&include_sunday_type=true`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          sundayDetails: data,
          loading: false
        })
      })
  }

  componentDidMount() {
    const dt = new Date();
    this.handleCheck(this.state.weekNumber);
    this.setState({
      nextSunday: this.getDate(dt).toLocaleDateString(),
    })
  }

  render() {

    const {sundayDetails, weekNumber, nextSunday, texts, loading} = this.state
    console.log(sundayDetails, weekNumber)

    if(sundayDetails && sundayDetails[`${weekNumber}`].niedziela === 'handlowa') {
      document.body.style.backgroundImage = `url(${img1})`
    } else if (sundayDetails && sundayDetails[`${weekNumber}`].niedziela === 'niehandlowa') {
      document.body.style.backgroundImage = `url(${img2})`
    }
    return (
      <div className="App">
        {loading && 
          <div className='sweet-loading'>
            <BeatLoader
              sizeUnit={"px"}
              size={15}
              color={'#123abc'}
              loading={loading}
            />
          </div>
        }
        {!loading && <Header nextSunday={nextSunday} />}
        {!loading && 
          <Main 
            sundayDetails={sundayDetails} 
            weekNumber={weekNumber}
            texts={texts}
          />
        }
        {!loading && <Footer />}
      </div>
    );
  }
}

export default App;
