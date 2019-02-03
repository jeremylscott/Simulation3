import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './dashboard.scss'
import {getPosts,logout} from '../../ducks/reducer'
import search from '../../images/searchIcon.png'
import house from '../../images/house.png'
import edit from '../../images/edit.png'
import logPic from '../../images/logout.png'

class Dashboard extends Component {

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        const {username,user_img} = this.props.user
        console.log(this.props.user)

        let posts = this.props.posts.map(e => {
            return (
                <Link to={`/postinfo/${e.id}`} className='link-post'><div className='post-wrapper' key={e.id}>
                    <span className='title'>{e.title}</span>
                    <span className='user'>by: {this.props.user.username}</span>
                    <img src={e.user_img} className='image' alt='user'/>
                </div></Link>
            )
        })
        return (
            <div className='main-display'>
                <div className='left-side-column'>
                    <div className='imageCont'>
                        <img src={this.props.user.user_img} className='user-image' alt='user'/>
                        <span>{username}</span>
                    </div>
                    <div className='home-edit-cont'>
                        <img src={house}className='home-image' alt='houseIcon'/>
                        <img src={edit} className='edit-image' alt='editIcon'/>
                    </div>
                    <div className='logoutCont' onClick={this.props.logout}>
                        <img src={logPic} className='log-out-image' alt='logout'/>
                    </div>
                </div>
                <div className='searchCont'>
                    <input className='search-bar' placeholder='Search by Title'/>
                    <img src={search} className='search-icon' alt='magnifyGlass'/>
                    <div className='reset-butt-cont'><button className='reset-button'>Reset</button></div>
                    <span className='my-posts'>My Posts</span>
                    <input type='checkbox'/>
                </div>
                <div className='middle-display'>
                    {posts}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps,{getPosts,logout})(Dashboard)