import React from 'react'

const CommentForm = () => {
  return (
    <div className="bg-white mb-3" style={{"padding": "30px"}}>
    <h4 className="text-uppercase mb-4" style={{"letterSpacing": "5px;"}}>Leave a comment</h4>
    <form>
        <div className="form-group">
            <label for="name">Name *</label>
            <input type="text" className="form-control" id="name"/>
        </div>
        <div className="form-group">
            <label for="email">Email *</label>
            <input type="email" className="form-control" id="email"/>
        </div>
        <div className="form-group">
            <label for="website">Website</label>
            <input type="url" className="form-control" id="website"/>
        </div>

        <div className="form-group">
            <label for="message">Message *</label>
            <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
        </div>
        <div className="form-group mb-0">
            <input type="submit" value="Leave a comment"
                className="btn btn-primary font-weight-semi-bold py-2 px-3"/>
        </div>
    </form>
</div>
  )
}

export default CommentForm