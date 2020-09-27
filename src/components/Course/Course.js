import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBook } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    //  console.log(props);    
    const course = props.course;
    //  console.log(course);
   
   return (
        <div>
            <div className="row course-container">
                <div className="col-md-5 course-img">
                    <img  src={course.picture} alt=""/>
                </div>
                <div className="col-md-7 course-details">
                    <h5>Course-ID : {course.course_id}</h5>
                    <h4>Course-Name : {course.course_name}</h4>
                    <h5>Short Descriptio:</h5>
                    <p>{course.short_description}</p>
                    <h5>Instructor: {course.instructor}</h5> 
                    <h4>Price : ${course.price}</h4>
                 <button onClick={ () => props.addHandaler(course)} className="btn btn-success"><FontAwesomeIcon icon={faBook} /> Enrolled Now</button> 
                </div>
              
            </div>
        </div>
    );
};

export default Course;