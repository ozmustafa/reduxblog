import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deletePost} from '../actions/deleteAction'

class Post extends Component {
    
    handleClick = () => {
       this.props.deletePost(this.props.post.id); 
       this.props.history.push('/');
    }
    
    render() {
        const post=this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button onClick={this.handleClick} className="btn grey">Delete Post</button>
                </div>
            </div>
        ) : (
            <div className="center">
                Loading post...
            </div>
        )
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) =>{
    let pid=ownProps.match.params.post_id;
    
    return{
        post:state.posts.find(post=>post.id === pid)
    }
}

const mapDispatchToProps = (dispatch) =>{
    
    return{
        deletePost:(id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);