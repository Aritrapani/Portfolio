import React from 'react';
import './Experience.css';
import School from '@iconscout/react-unicons/icons/uil-graduation-cap';
import Work from '@iconscout/react-unicons/icons/uil-suitcase';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
    const data = [
        {
            heading : 'Parihati PS High School , Parihati',
            time: '2008-2014',
            details : 'Secondary - WBBSE'
        },
        {
            heading : 'Midnapore Collegiate School , Midnapore',
            time: '2014-2016',
            details : "Higher Secondary - WBCHSE"
        },
        {
            heading: "St.Thomas' College of Engineering and Technology , Kolkata",
            time: "2016-2020",
            details : "BTech in Computer Science and Engineering"
        },
        {
            heading: 'Power programmer , Infosys',
            time: "September 2020 - Present",
            details: "Working as a Frontend Developer and helped the team to redevelop some exsisting applications from scratch using React JS , SCSS and D3 JS"
        }
    ]


  return (
     <div className="experience" id='experience'>
        <div className="e-heading">
                <span>My <span id='orange-text'>Experience</span>...</span>
                <div className='blur1 e-blur1' style={{ background: '#ABF1FF94' }}></div>
                <div className='blur1 e-blur2' style={{ background: 'var(--purple)' }}></div>
        </div>
        <VerticalTimeline lineColor="var(--orange)">
            {data.map((exp,index) => {
                return (
                    <VerticalTimelineElement
                       contentStyle={{ boxShadow : 'var(--boxShadow)'}}
                       className='verticalElem'
                       date={exp.time}
                       iconStyle={{background: index == 3 ? '#e25822' :'var(--orange)' , color:'#fff'}}
                       icon={index == 3 ? <Work /> : <School />}
                       style={{fontSize: '0.8rem'}}
                    >
                        <h3 className='heading' style={{fontSize : '1rem' , color:'var(--black)'}}>{exp.heading}</h3>
                        <p className='exp-details' style={{fontSize : '0.8rem' , color:'var(--gray)'}}>{exp.details}</p>
                    </VerticalTimelineElement>
                )
            })}
        </VerticalTimeline>
     </div>
  )
}

export default Experience