import React, {Component} from 'react'
import {connect} from 'react-redux'
import './newform.scss'

class NewForm extends Component {

    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(NewForm)