import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import '../App.css'
import * as UI from 'react-bootstrap';
import { FaRegThumbsUp } from 'react-icons/fa'
import moment from 'moment'
import { Nav } from './Navbar';

export const Post = () => {
    const location = useLocation()
    const [postData, setPostData] = useState('')
    useEffect(() => {
        if (location !== undefined && location.state !== undefined) {
            setPostData(location.state)
        }
    }, [])
    return (
        <>
              <Nav></Nav>
              <UI.Container className="example">
            <div style={{ display: postData !== undefined ? "block" : "none" }}>
                <h2></h2>
                <div id="example">
                    <br></br>
                    <UI.Row>
                        <UI.Col sm={4} md={4} lg={6} xl={6} xxl={6}>
                            <img src={postData.image} alt="card__image" class="card__image" width="300" height="300" />
                        </UI.Col>
                        <UI.Col sm={4} md={4} lg={6} xl={6} xxl={6}>
                            <span class="tag tag-blue"><FaRegThumbsUp size={18} /> <span style={{ fontSize: "16px" }}>{postData.likes}</span></span>
                            <br /><p><b>{postData.text}</b></p>
                            <span style={{ color: "black" }}>#{postData?.['tags']?.[0]} #{postData?.['tags']?.[1]} #{postData['tags']?.[2]}</span>
                            <br></br>
                            <UI.Col sm={4} md={4} lg={3} xl={3} xxl={3}>
                                <div class="user">
                                    <img src={postData?.['owner']?.picture} alt="user__image" class="user__image" width="80" height="80" />
                                    <div class="user__info">
                                        <h3>{postData?.['owner']?.title} {postData?.['owner']?.Margarita} {postData?.['owner']?.lastName}</h3>
                                        <small>Posted On {moment(postData?.publishDate).format('DD/MM/YYYY')}</small>
                                    </div>
                                </div>
                            </UI.Col>
                            <UI.Col sm={4} md={4} lg={3} xl={3} xxl={3}>
                            </UI.Col>
                        </UI.Col>
                    </UI.Row>
                </div>
            </div>
        </UI.Container>
        </>
     
    )
}