import React from 'react'
import './Post.css'
import comment from '../../img/comment.png'
import like from '../../img/like.png'
import share from '../../img/share.png'
import notLike from '../../img/notlike.png'

export const Post = ({data}) => {
  return (
    <div className="post">
        <img src={data.img} alt="" />
        <div className="postReact">
            <img src={data.liked ? like :notLike} alt="" />
            <img src={comment}alt="" />
            <img src={share} alt="" />

        </div>
        <span style={{color:"var(--gray)",fontSize:"14px"}}>{data.likes} likes</span>
        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}
