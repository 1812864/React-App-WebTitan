import './App.css';
import HeaderPage from './component/Header';
import SliderPage from './component/Slider';
import SubSlider from './component/SubSlider'
import SubSlider1 from './component/SubSlider1';
import SubSlider2 from './component/SubSlider2';
import SubSlider3 from './component/SubSlider3';
import SubSlider3to3 from './component/SubSlider3to3';
import SubSlider3to2 from './component/SubSlider3to2';
import SubSlider3to1 from './component/SubSlider3to1';
import SubSlider4 from './component/SubSlider4';
import FooterPage from './component/Footer';
import Login from './pages/login';
import SubFooterPage from './component/SubFooter';
import React from 'react';
import SubSlider3to4 from './component/SubSlider3to4';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      renderPage: ''
    }

    this.renderLogin = this.renderLogin.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  renderLogin () {
    this.setState({ renderPage: 'login' })
  }

  handleCloseModal () {
    this.setState({ renderPage: '' })
  }

  render() {
    let { renderPage } = this.state
    return (
      <div >
          <HeaderPage renderLogin={this.renderLogin}/>
          <SliderPage/>
          <SubSlider />
          <SubSlider1 />
          <SubSlider2 />
          <SubSlider3 />
          <SubSlider3to2 />
          <SubSlider3to4 />
          <SubSlider3to1 />
          <SubSlider3to3 />
          <SubSlider4 />
          <FooterPage />
          <Login renderLogin={renderPage === 'login'} handleCloseModal={this.handleCloseModal} />
          <SubFooterPage />
      </div>
    );
  }
}

export default App;
