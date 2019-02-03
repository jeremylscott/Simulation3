import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {updateTitle,getPostInfo,editPost} from '../../ducks/reducer'
import './postinfo.scss'

class PostInfo extends Component {

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            this.forceUpdate()
        }
    }
     
    render() {
        const {id} = this.props.posts
        const {username,user_img} = this.props.user

        return (
            <div className='post-info-wrapper'>
                <div className='top-row'>
                    <div className='post-info-title'>
                        <span>{this.props.title}</span>
                    </div>
                    <div className='username-image'>
                        <span className='user2'>by: {username}</span>
                        <img src={user_img} className='image2' alt='user'/>
                    </div>
                </div>
                    <div className='post-image-title'>
                        <img className='large-post-image' src={this.props.posts.user_img} alt='user'/>
                        <input className='title-input' onChange={(e) => this.props.updateTitle(e.target.value)} placeholder={this.props.title}/>
                        <Link to='/dashboard'><button className='title-button' onClick={() => {this.props.editPost(id,this.props.title)
                           window.location.reload()}} >Change Title</button></Link>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps,{updateTitle,getPostInfo,editPost})(PostInfo)