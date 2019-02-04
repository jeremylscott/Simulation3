import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './home.scss'
import {login,register,findPostAmount} from '../../ducks/reducer'
import smile from '../../images/smile.png'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state ={
            username: '',
            password: '',
            image: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLog = () => {
        this.props.login(this.state.username,this.state.password)
        this.props.findPostAmount(this.state.username)
    }

    handleReg = (e) => {
        this.props.register(this.state.username,this.state.password,this.state.image)

        setTimeout(() => {
            window.location.reload()
        }, 500);
    }

    render() {
        const {username,password,image} = this.state
        return (
            <div className='mainDisplay'>
                <div className='centerDisplay'>
                    <div className='smiley'>
                        <img src={smile} className='smile-pic' alt='smiley face'/>
                        <h1>Helo</h1>
                    </div>
                    <div className='userCont'>
                        <p>Username:</p>
                        <input onChange={this.handleChange} type='text' name='username' className='userNameInput' 
                            value={username} placeholder='Username'/>
                    </div>
                    <div className='passCont'>
                        <p>Password:</p>
                        <input onChange={this.handleChange} name='password' type='password' className='passInput' 
                            value={password} placeholder='Password'/>
                    </div>
                    <div className='imgCont'>
                        <p>Picture:</p>
                        <input onChange={this.handleChange} name='image' type='text' className='imageInput' 
                            value={image} placeholder='Picture'/>
                    </div>
                    <div className='buttCont'>
                        <Link to='/dashboard'><button onClick={this.handleLog} className='logButt'>Login</button></Link>
                        <button onClick={this.handleReg} className='regButt'>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps,{login,register,findPostAmount})(Home)