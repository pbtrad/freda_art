import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='section-container'>
            

<div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Artist</h3>
                    <p className='about-details'>
                        About details
                        
                    </p>

                    

                    {/* Sub section 3 */}
                    {/*<h3 className='about-sub-head'>Public Speaker</h3>
                    <p className='about-details'>
                        Being a passionate public speaker, I've given talks at
                        more than 75 events till now! Want me to speak in your
                        event?{' '}
                        <a
                            className='about-link-element'
                            href='mailto:info@theleanprogrammer.com'
                        >
                            Email me the details!
                        </a>
    </p>*/}
                </div>

                
            </div>

            
        </div>
    );
};

export default About;