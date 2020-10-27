import React from 'react'
import './style.css';
import Card from '../UI/Card';

export default function ResumeContainer() {
    return (
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <h1 className="postTitle"></h1>

                </div>

                <div className="postImageContainer">
                    <img src={require('../../blogPostImages/resume.jpg')} alt="Post Image" />
                    
                </div>

                <div className="postContent">
                    <a href="https://drive.google.com/file/d/1W77gx_xE3qWFK4FOxuKeR3fOkRzO-5e1/view?usp=sharing">
            Download Resume on Google Drive
                    </a>                    
                </div>
                
            </Card>
        </div>
    )
}
