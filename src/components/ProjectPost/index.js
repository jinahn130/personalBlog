import React from 'react';
import './style.css';
import Card from '../UI/Card';

/**
* @author
* @function ProjectPost
**/

const ProjectPost = (props) => {

  return(
        <div className="blogPostContainer">
            <Card>

            <div className="blogHeader">
                    <h1 className="postTitle">Web programming</h1>
                </div>

                <div className="blogHeader">
                    <h3 className="projectTitle">Back end engineering at Sensoria Health</h3>
                </div>

                <div className="postImageContainer">
                    <img src={require('../../blogPostImages/postman.jpg')} alt="Post Image" />
                </div>

                <div className="postContent">
                    <p1>Sensoria Health is a company that sells clothing and equipment to monitor and analyze people’s health.  As a software engineer intern, I developed a role-based web API, allowing patients or doctors to fetch information from the cloud server through the company’s websites. Over the three months, I learned how to unit test an enterprise scale software and build an efficient APIs using the MVC architecture and RESTful services. I mainly used C# and Microsoft web framework called ASP .NET Core. </p1>
                    <br/><br/>
                    <p1>One of my achievements throughout working at the company was implementing a cache solution to the web API. I used Redis cache to reduce the response time of HTTP requests. Redis cache allows the company to upload the result of query made by a local user to the cloud server. I also helped creating data models to handle patient data more effectively and securely. I used concepts such as model binding and role based authentication API.</p1>
                </div>

                <div className="blogHeader">
                    <h3 className="projectTitle">Replicating A LinkTree Website Using Cloudflare's Workers</h3>
                </div>              

                <div className="postImageContainer">
                    <img src={require('../../blogPostImages/worker.JPG')} alt="Post Image" />
                </div>

                <div className="postContent">
                    <p1>Linktree is a popular websites where people can upload easily accessible links to their social and professional profiles. I used HTMLRewriter capability of the Cloudflare's Workers to modify a static HTML page. Adding links to javascript array display a trailing list of web links.</p1>
                    <br/><br/>
                    <a href="https://my-worker.jinahn130.workers.dev/">Click here to check out my wrangler page</a>
                    <br/>
                </div>

                <div className="blogHeader">
                    <h1 className="postTitle">Embedded Systems</h1>
                </div>

                <div className="blogHeader">
                    <h3 className="projectTitle">Weather Station</h3>
                </div>

                <div className="postImageContainer">
                    <img src={require('../../blogPostImages/project1.jpg')} alt="Post Image" />
                </div>

                <div className="postContent">
                    <p1>This project uses pressure, temperature, light, gas, and humidity sensors to measure data useful for setting up a weather station. Data points are sent to the arduino cloud server to display various graphs and charts.</p1>
                </div>
            </Card>
        </div>
   )

 }

export default ProjectPost