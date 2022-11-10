import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Nav } from './Navbar';
import { FaRegThumbsUp } from 'react-icons/fa'
import Context from './context';
import * as UI from 'react-bootstrap'
import moment from 'moment'
import { useNavigate } from 'react-router-dom';
export const Dashboard = () => {
  const { user } = useContext(Context);
  const [posts, setPosts] = useState([])
  const [dataExists, setDataExists] = useState(false)
  const navigate=useNavigate()
  useEffect(() => {
    let headers = {
      "app-id": "6368e6989cd624596e67a6c4"
    }
    axios.get("https://dummyapi.io/data/v1/post", { headers }).then(res => {
      if (res !== undefined) {
        setPosts(res.data.data)
        setDataExists(true)
      }
    })
  }, [])
  function postData(post){
    navigate('/post', {
      state: post,
    })
  }
  return (
    <>
      <Nav></Nav>
      <UI.Container>
        <div className="row">
          <div className="col-sm-8">
            <h2>
              <span style={{ fontStyle: "italic" }}>Welcome Back,</span> <span style={{ color: "green", fontStyle: "italic" }}>{user}</span>
            </h2>
          </div>
        </div>
      </UI.Container>
      <br></br>
      {dataExists == false &&
      <UI.Container>
        <UI.Row>
        <UI.Col sm={4} md={4} lg={3} xl={3} xxl={3}>
          </UI.Col>
          <UI.Col sm={4} md={4} lg={6} xl={6} xxl={6}>
          <span style={{fontSize:"25px",color:"var(--blue)",textAlign:"center"}}>Please Wait, We are loading your posts...</span>
          </UI.Col>
          <UI.Col sm={4} md={4} lg={3} xl={3} xxl={3}>
          </UI.Col>
        </UI.Row>
       </UI.Container>
      }
      <div class="container" style={{ display: dataExists ? "block" : "none" }}>
        <UI.Row>
          {posts.length > 0 && posts.map(post => {
            return <UI.Col sm={4} md={4} lg={4} xl={4} xxl={4}>
              
              <UI.Card className="card"  onClick={()=>postData(post)} style={{ cursor: "pointer" }}>
                <UI.Card.Title><a><img src={post.image} alt="card__image" class="card__image" width="600" height="300" /></a></UI.Card.Title>
                <UI.Card.Body style={{ height: "200px" }}>
                  <span class="tag tag-blue"><FaRegThumbsUp size={18} /> <span style={{ fontSize: "16px" }}>{post.likes}</span></span>
                  <br /><p>{post.text}</p>
                  <span style={{ color: "green" }}>#{post.tags[0]} #{post.tags[1]} #{post.tags[2]}</span>
                </UI.Card.Body>
                <UI.Card.Footer>
                  <div class="user">
                    <img src={post.owner.picture} alt="user__image" class="user__image" width="80" height="80" />
                    <div class="user__info">
                      <h5>{post.owner.title} {post.owner.Margarita} {post.owner.lastName}</h5>
                      <small>Posted On {moment(post.publishDate).format('DD/MM/YYYY')}</small>
                    </div>
                  </div>
                </UI.Card.Footer>
              </UI.Card>
              <br />
            </UI.Col>
          })
          }
        </UI.Row>
      </div>
    </>
  );
}

export default Dashboard;