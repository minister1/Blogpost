import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render(){
    const {fields :{title,categories,content}, handleSubmit} = this.props;

    return(
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3> Create A New Post </h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>

        <div className="form-group">
          <label>Content</label>
          <textArea className="form-control" {...content}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

//connect : 1st argumment is mapStateToProps, 2nd argumment is mapDispatchToProps
//reduxForm : 1st argumment is form, 2nd argumment is mapStateToProps , 3rd argumment is mapDispatchToProps
export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content']
},null, { createPost }) (PostsNew);
