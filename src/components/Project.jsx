import React from 'react';

function Project() {
    return <div id="project">
        <img src="images/project.png" width="6%"/>

        <div className="clearfix">
            <div className="left-project-container">
                <img src="images/eldereach.png" width="150px"/>
                <h3 className="project-header">Eldereach (May - Jul 2020)</h3>
                <p>An Android mobile application developed to connect the caregivers of the elderly with charity organizations in Singapore by providing needy elderly greater accessibility to services, as well as allowing charity organizations and volunteers
                    to source for opportunities to provide services to the elderly.
                    <br/>
                    <br/>
                    <em>Developed using Android Studio, Firebase, Firestore, in Java and XML.</em></p>
            </div>
        </div>

        <div className="clearfix">
            <div className="right-project-container">
                <img src="images/cooking-papa.png" width="150px"/>
                <h3 className="project-header">Cooking Papa (Jan - May 2020)</h3>
                <p>A desktop command line app developed to help university students who live alone learn how to cook. With Cooking Papa, users can easily edit recipes, keep track of ingredients they currently have at home and have a shopping list that assists
                    them in their grocery shopping process.
                    <br/>
                    <br/>
                    <em>Developed using IntelliJ and SceneBuilder, in Java, JavaFX, and FXML.</em></p>
            </div>
        </div>

        <div className="clearfix">
            <div className="left-project-container">
                <img src="images/spreent.png" width="150px"/>
                <h3 className="project-header">Spreent-bot (Jan 2020)</h3>
                <p>A Telegram bot developed to connect shoppers looking to pool their purchases in order to meet the required spending for free shipping and discounts. It allows users to create 'Spreents', indicating the amount of their items, and allows
                    keen users to join the 'Spreent'.
                    <br/>
                    <br/>
                    <em>Developed using Firestore, in Python.</em></p>
            </div>
        </div>

        <div className="clearfix">
            <div className="right-project-container">
                <img src="images/wing-it.png" width="150px"/>
                <h3 className="project-header">wing_it! (Jun - Aug 2019)</h3>
                <p>An Android mobile application developed to help travellers create an itinerary which best allows them visit all their places of interest within the span of their travels. wing_it! allows users to indicate their desired duration to spend
                    at a place of interest, and takes it into account when devising the itinerary.
                    <br/>
                    <br/>
                    <em>Developed using Android Studio, in Java and XML.</em></p>
            </div>
        </div>
        <hr/>
    </div>
}

export default Project;