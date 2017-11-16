import React from 'react'

//here will be plate containter
//inside it I'll be rendering my posts. It will be object with keys such as date,
//title, auth, snap, vote and I'll map and render accordingly

const Plate = ()=>(
    <div className="post-plate">
        <div className="date">10 oct 2018</div>
        <div className="title">New Post</div>
        <div className="author">D. Julia Holmes</div>
        <div className="snap">Bla bla bla, I'm taking a cat</div>
        <div className="vote">2</div>
    </div>
    )
export default Plate;