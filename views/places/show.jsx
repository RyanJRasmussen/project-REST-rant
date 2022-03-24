const React = require('react')
const comment = require('../../models/comment')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    // data.place.comments.map(comment => {console.log(comment)})
    // if(data.place.comments.length){
    //     console.log(comments)
    // }
    if (data.place.comments.length) {
        comments = data.place.comments.map((comment) => {
        return (
            <div className="border">
                <h2 className="rant">{comment.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                <h4>{comment.content}</h4>
                <h3>
                    <stong> {comment.author}</stong>
                </h3>
                <h4>Rating: {comment.stars}</h4>
            </div>
        )
        })
    }

    return (
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <h3>Located in {data.place.city}, {data.place.state}</h3>
                <img src={data.place.pic} alt={data.place.name}></img>
                <h3>{data.place.showEstablished()}</h3>
                <h4>Serving {data.place.cuisines}</h4>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fillrule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                        Delete
                    </button>
                </form>    
                <hr></hr>
                <div id='rating'>Ratings</div>
                <hr></hr>
                <div className="h3">Comments</div>
                <div className = "text-muted">{comments}</div>
                <div className='footer'>Author: Ryan Rasmussen</div>
            </main>
        </Def>
    
    )
}
module.exports = show