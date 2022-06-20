import React , {useContext} from 'react';
import './Project.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import { ThemeContext } from '../../Context';

function Project() {

    const {state} = useContext(ThemeContext);

    const projects = [
        {
            heading: 'An Ecommerce Application',
            details: 'A full stack ecommerce web application having similar functinalities like Flipkart. User and seller can register themselves. User can search , check availability , view details of products and can also view previous order. Also they can add product to cart. Seller can add different products for their business.',
            year: '2021',
            tech: ' Node JS, Express JS, MongoDB Database, Angular10, Angular Material'
        },
        {
            heading: 'Batch Job Scheduling System',
            details: 'Worked as a frontend developer and developed the UI of the Batch Job Controlling and Monitoring System as a part of Infosys Internal Hackathon. In this system we can schedule new batch , control previously scheduled batch from UI.Admin can view all the details of the scheduled batch and can also view the details previously completed batch.',
            year: '2021',
            tech: 'Angular10, Angular Material'
        },
        {
            heading: 'Covid-19 Tracker',
            details: "A Covid-19 dashboard that show a statistical report in tabular format as well as graphical format of COVID-19 effected patients per country. It also shows the record of affected,deceased and recovered patient. It can also show the report for WorldWide data.",
            year: '2020',
            tech: 'React JS, Chart JS'
        }
    ];

    return (
        <div className="project" id='project'>
            <div className="p-heading">
                <span>Some <span id='orange'>Projects</span> I have Built...</span>
                <div className='blur1 p-blur1' style={{ background: '#ABF1FF94' }}></div>
                <div className='blur1 p-blur2' style={{ background: 'var(--purple)' }}></div>
            </div>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    projects.map((project, index) => {
                        return (<SwiperSlide key={index}  >
                            <div className='project-detail' style={{background : state.darkMode? 'white' : ''}}>
                                <div className='heading'>
                                    <span className='heading-text'>{project.heading}</span>
                                    <span className='year'>{project.year}</span>
                                </div>
                                <span className='details'>{project.details}</span>
                                <span className='tech'>{'Skills: ' + project.tech}</span>
                            </div>
                        </SwiperSlide>)
                    })
                }
            </Swiper>
        </div>
    )
}

export default Project