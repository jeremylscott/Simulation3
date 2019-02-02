import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './dashboard.scss'
import {getPosts} from '../../ducks/reducer'

class Dashboard extends Component {

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        const {user_img} = this.props.posts
        const {username} = this.props.user
        console.log(this.props.user.username);
        let posts = this.props.posts.map(e => {
            return (
                <Link to={`/postinfo/${e.id}`}><div className='post-wrapper' key={e.id}>
                    <p className='title'>{e.title}</p>
                    <p className='user'>by {this.props.user.username}</p>
                    <img src={e.user_img} className='image' alt='user'/>
                </div></Link>
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

export default connect(mapStateToProps,{getPosts})(Dashboard)