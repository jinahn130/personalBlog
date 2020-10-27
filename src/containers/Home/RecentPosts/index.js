import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={"https://i.ibb.co/kDk0qVQ/workout.jpg"} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Featured</span>
                <h2>Working Out During Quarantine</h2>
                <span>posted on October 26, 2020 by Jin Seong Ahn</span>
                <p>Since the beginning of the quarantine, I struggleed to find places to work out. As gyms started opening up around me, I was tempted to go, but I have a family member with a weak immune system. As a college student, I spend a lot of my day on my chair, whether I am studying, playing games, playing guitar, or watching TV. I was starting to get back pain for sitting too long, but I still did not feel motivated to exercise because I had no equipments. However, when I moved into a house with 9 of my close friends in Seattle this September, we invested our money into setting up a small gym in the back of our house. We do not have that many weights or benches, but we have just enough equipments to workout our chest, shoulder, legs, and abs. With all the equipments set up and my friends encouraging me to workout, I have been working out 5 days a week. This is a significant progress from the beginning of the quarantine. I believe that working out is great for the body and the mind because I wake up feeling stronger and more well-rested. I wish that even when I did not have any equipments, I worked out more because I feel much healthier.</p>

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts