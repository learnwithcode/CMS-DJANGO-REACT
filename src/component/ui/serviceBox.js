import React from 'react';

// local import here;
import Button from './button';

function serviceBox(props) {
    return(
        <React.Fragment>
            
            <div className='service-layout__box'>
                    <div className='service-layout__box-container--right'>
                        <img src={require('../../static/images/ser1.png')} alt='Logo' className='service-layout__box--1'/>
                    </div>    

                    <div className='service-layout__box-container--left'>
                        <h3 className='title-text u-mar-bot-small'>{props.title}</h3> 
                        <h3 className='title-text-grey u-mar-bot-small'>{props.description}</h3>
                        <div className='service-layout__box-container--left-services u-mar-bot-small'>
                            {props.children}
                        </div>
                        <Button color='btn--blue' to={props.link}>Read More</Button>  
                    </div>
                </div>
            

        </React.Fragment>

      
    )
}

export default serviceBox;