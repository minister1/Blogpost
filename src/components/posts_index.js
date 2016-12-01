import React, { Component }from 'react';
import {fetchPosts} from '../actions/index.js'
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PostsIndex extends Component{

  componentWillMount(){

    this.props.fetchPosts();
  }
  render(){
    return(
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
       List of blog posts.
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text
       </div>
       <div>
       test text 1234
       </div>
       <div className="text-xs-right">
         <Link to="posts/new" className="btn btn-primary">
           Add a post
         </Link>
       </div>
       </div>

    );
  }
}

// function mapDispatchToProps (dispatch){
//   return bindActionCreators ({fetchPosts},dispatch);
// }
export default connect (null,{ fetchPosts }) (PostsIndex);
