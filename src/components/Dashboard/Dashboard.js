import React, {Component} from 'react'
import {connect} from 'react-redux'
import './dashboard.scss'

class Dashboard extends Component {

    render() {
        const {id,title,user_img} = this.props.posts
        const {userid,username,password} = this.props.user
        let posts = this.props.posts.map(e => {
            return (
                <div className='post-wrapper' key={e.id}>
                    <p>{e.title}</p>
                    <p>{username}</p>
                    <img src={e.user_img} alt='user'/>
                </div>
            )
        })
        return (
            <div className='main-display'>
                <div className='left-side-column'>
                    <image src={user_img} className='user-image' alt='user'/>
                    <image className='home-image'/>
                    <image className='edit-image'/>
                    <p>{username}</p>
                    <image className='log-out-image'/>
                </div>
                <div>
                    <input className='search-bar' placeholder='Search by Title'/>
                    <div className='search-icon'></div>
                    <div className='reset-butt-cont'><button className='reset-button'>Reset</button></div>
                    <span>My Posts</span>
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

export default connect(mapStateToProps, )(Dashboard)