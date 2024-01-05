import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import ProfileCard from './ProfileCard';

const contentStyle = {
  
    display:'flex',
    flexDirection: "column",
    width:"80%",
    height:"100%",
    gap:"1rem",
    alignItems:'center',
    justifyContent: "center",
    textAlign:"center",
    marginTop:'5rem',
    marginInline:"auto" 


}

const Review = ({testimonials}) => {
     
  return (
     
    <Carousel   style={{ backgroundColor: '#f0f0f0', height: '400px' }}>
        {
            testimonials.map((testimonial , idx) => {
                return (

                    <Carousel.Item key  = {idx}>

                        <div style={contentStyle}>
                            <h3>{testimonial.text}</h3>
                            <ProfileCard image = {testimonial.reviewer_image} name ={testimonial.reviewer_name} jobTitle={testimonial.reviewer_designation} />

                        </div>
                    </Carousel.Item>
                )
            })
        }
    </Carousel>
  )
}

export default Review