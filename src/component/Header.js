import logo from '../img/logo-white.png'
import Menu from '../img/Menu.svg'
import Flag from '../img/Flag.svg'
import React from 'react'

class HeaderPage extends React.Component {
    constructor ( props ) {
        super ( props )
        this.handleScroll = this.handleScroll.bind ( this )
        
     }
     componentDidMount ( ) {
        window.addEventListener ( ' scroll ' , this.handleScroll ( ) )
     }
     componentWillUnmount ( ) {
        window.removeEventListener ( ' scroll ' , this.handleScroll ( ) )
     }
     
     handleScroll ( ) {
        document.onscroll = function(){
            changeHeader()
        }
        function changeHeader(){
            let mainHeader = document.getElementById("main-header")
            if(document.documentElement.scrollTop>0){
                if(!mainHeader.classList.contains("fixed")){
                    mainHeader.classList.add("fixed");
                }
            }
            else {
                mainHeader.classList.remove("fixed")
            }
        }
     }
        // Implement code
    render() {
        return (
            <div className="header" id="main-header">
                <div className="logo">
                    <a href="#bottom">
                        <img src={logo} />
                    </a>
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <button>
                            <img src={Menu} width="32px" height="27px" />
                            </button>
                        </li>
                        <li>
                            <a>
                            <button id="btn-menu" className="btn-menu" onClick={this.props.renderLogin}>Login</button>
                            <span>日本</span>
                            </a>
                        </li>
                        <li className="home">
                            <a href="">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default HeaderPage;

