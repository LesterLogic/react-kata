import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div>
            <div className="logo"><img src="/images/driveway-logo.svg" alt="Driveway.com" /></div>
            <section>
                <h2>Welcome to Driveway.com!</h2>
                <p>
                    Driveway.com takes pride in helping people in all phases of their
                    car-ownership. Because people have a lot of anxiety about bringing in their cars
                    for service and repair, a robust suite of services is being built to make
                    working with dealerships more transparent.
                </p>
                <p>As our scrappy new candidate, you have received your first user story
                    to build a light-weight and snappy UI to offer choices of available
                    services and help users book appointments! (such as oil changes, tire
                    replacements, etc).
                </p>
            </section>
            <section className="userStory">
                <h3>User Story - 2021: Build New Page for Displaying Available Services</h3>
                <p>
                    <strong>Description:</strong> As a Driveway.com user, I would like a page
                    where I can view the available service and repair offerings at my local dealership.
                </p>
                <p>
                    <strong>Acceptance Criteria:</strong>
                    <ul>
                        <li>The page must be available at the path <i>/scheduler</i></li>
                        <li>The page must contain the Driveway.com logo</li>
                        <li>The page must contain some descriptive text (use placeholder text for now)</li>
                        <li>The page must contain a button with the text 'Get Started'
                            <ul>
                                <li>Clicking the button must show the user a table of available services</li>
                                <li>The button should not be visible at the same time as the table</li>
                            </ul>
                        </li>
                        <li>Services table must contain columns displaying: service name, duration, and available time slot</li>
                        <li>Elements should be styled in a professional manner</li>
                    </ul>
                    <p>If time allows:</p>
                    <ul>
                        <li>Provide a simple way for a user to book an appointment for an available service.</li>
                    </ul>
                </p>
            </section>
            <section>
                <p>
                    Our intrepid backend team has already created three endpoints for you to use:
                </p>
                <p>
                    <strong>API Address:</strong> http://localhost:2000
                </p>
                <dl>
                    <dt><strong>`GET` /services</strong></dt>
                    <dd>
                        <p>Returns an array of services available within the next 14 calendar days. Each contains:
                            <ul>
                                <li>Service ID</li>
                                <li>Service Name</li>
                                <li>Service Duration (in seconds).</li>
                            </ul>
                        </p>
                        <p>
                            Example JSON response:
                        </p>
                        <pre>
{`[
    {
        "id": 1,
        "serviceName": "Replace Brakes",
        "serviceDuration": 3600
    },
    {
        "id": 2,
        "serviceName": "Oil Change",
        "serviceDuration": 1800
    },
    {
        "id": 3,
        "serviceName": "Rotate Tires",
        "serviceDuration": 1800
    }
]`}
                        </pre>
                    </dd>
                    <dt><strong>`GET` /appointments</strong></dt>
                    <dd>
                        <p>Returns an array of available service appointment times within the next 14 calendar days. Each contains:
                            <ul>
                                <li>Appointment ID</li>
                                <li>Service Name</li>
                                <li>Service ID</li>
                                <li>Appointment Start Time (as date string).</li>
                            </ul>
                        </p>
                        <p>
                            Example JSON response:
                        </p>
                        <pre>
{`[
{
    "id": "bad285b2-471c-480f-82fa-26d01f77651f",
    "serviceName": "Replace Brakes",
    "serviceId": 1,
    "apptStartTime": "2021-01-23T01:46:20.639Z"
  },
  {
    "id": "ff68f91b-f68c-4b81-aaf3-fb2160173315",
    "serviceName": "Replace Brakes",
    "serviceId": 1,
    "apptStartTime": "2021-01-15T12:27:44.044Z"
  }
]`}
                        </pre>
                    </dd>
                    <dt><strong>`PUT` /appointments/:id</strong></dt>
                    <dd>
                        <p>Book the requested appointment for a particular customer and vehicle. Request
                            body must contain:
                            <ul>
                                <li>Customer Email</li>
                                <li>Customer Name</li>
                                <li>Vehicle Make</li>
                                <li>Vehicle Model</li>
                                <li>Vehicle Model Year</li>
                            </ul>
                        </p>
                        <p>
                            Example JSON Request:
                        </p>
                        <pre>{`
{
    "email": "JohnDoe123@example.com",
    "name": "John Doe",
    "make": "Mazda",
    "model": "Miata",
    "modelYear": "2005"
}
                        `}</pre>
                    </dd>
                </dl>
            </section>
            <section>
                <p>Your first task will be to program this button to load the LandingPage component where you'll create your application. Good luck!</p>
                <button>I am ready!</button>
            </section>
        </div>
    );
}

export default WelcomePage;