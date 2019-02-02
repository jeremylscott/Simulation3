import React, {Component} from 'react'
import {connect} from 'react-redux'
import './home.scss'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state ={
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div className='mainDisplay'>
                <div className='centerDisplay'>
                    <div className='smiley'></div>
                    <h1>Helo</h1>
                    <div className='userCont'>
                        <p>Username:</p>
                        <input className='useNameInput' onChange={this.handleChange} value='username'
                            placeholder='Username'/>
                    </div>
                    <div className='passCont'>
                        <p>Password:</p>
                        <input className='passInput' onChange={this.handleChange} value='password' 
                            placeholder='Password'/>
                    </div>
                    <div className='buttCont'>
                        <button className='logButt'>Login</button>
                        <button className='regButt'>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, )(Home)