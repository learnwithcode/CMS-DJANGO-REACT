import React from 'react';
import axios from 'axios';

// local import here;
import Header from '../../layout/header';
import ContactCTA from '../../layout/contactCTA';
import Footer from '../../layout/footer';

class ServiceDetail extends React.Component {

    state = {
        subService: {
            service : []
        },
        selectSubServiceID: null,
        highlight : null
    }

    componentDidMount() {
        const serviceID = this.props.match.params.serviceID
        console.log(serviceID)

        axios.get(`https://logix101.herokuapp.com/pages/api/service/` + `${serviceID}/`)
        .then( response => {
            console.log(response.data);
            this.setState({subService:response.data})
        } )      

    }

    onSubSectionClick(id){
        this.setState({
                selectSubServiceID:id,
                highlight: `tag-service-box--highlight`})
    }
   
    render() {
        let subServiceTitle = this.state.subService.service.map(ser => {
            return (
            
                <div className={`tag-service-box ${this.state.highlight}`} key={ser.id} onClick={ () => this.onSubSectionClick(ser.id)}>
                     <h2 className='title-text'>{ser.title}</h2>
                </div>
               
            ) 
        
        })

       

        let subservice = this.state.subService.service.map(ser => {
            if (this.state.selectSubServiceID === ser.id) {
                return (

                    <div className='service-detail__container--right' key={ser.id}>
                        <h2 className='title-text u-mar-bot-med'>{ser.title}</h2>
                        <p className='para--grey u-mar-bot-lar'>{ser.description}</p>
                    </div>
            )
            }

        })
        return(
            <React.Fragment>
                    <Header title={this.state.subService.title} 
                    para={this.state.subService.description}
                    img={require('../../../static/images/service_banner.png')}/>

                    <section  className='service-detail u-mar-top-lar'>

                        <div className='service-detail__container u-mar-top-lar'>
                            <div className='service-detail__container--left'>
                                <h3 className='heading-tertiary u-mar-bot-small'>{this.state.subService.title}</h3>    
                                <h2 className='heading-secondary u-mar-bot-med'>{this.state.subService.description}</h2>                
                            </div>

                            <div className='service-detail__container--right'>
                            <img src={require('../../../static/images/digisocial.png')} alt='Logo' className='container__grey-box--img'/>
                            </div>
                        </div>

                        <div className='sub-service'>
                            <h3 className='heading-tertiary u-mar-bot-small'>Explore Our Services</h3>
                        
                        </div>

                        <div className='tag-service'>
                             {subServiceTitle}
                        </div>
                        

                        <div className='service-detail__container u-mar-top-lar'>
                            <div className='service-detail__container--left'>
                                <img src={require('../../../static/images/socialmedia.png')} alt='Logo' className='container__grey-box--img'/>         
                            </div>

                            {subservice}
                        </div>
                        
                    </section>
                <ContactCTA/>  
                <Footer/>
            </React.Fragment>
        )
    }

}

export default ServiceDetail;