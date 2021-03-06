import React, {Component} from 'react';
import Navbar from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import LocalizedStrings from 'react-localization';
import Language from "../../context/Language";
import styles from './About.module.scss';
import reactLogo from './Assets/react-min.jpg';
import reactSpringLogo from './Assets/spring-min.jpg';
import reactRouterLogo from './Assets/router-min.jpg';
import netlifyLogo from './Assets/netlify-min.jpg';
import bootstrapLogo from './Assets/bootstrap-min.jpg';
import {Spring, config} from "react-spring/renderprops";
import {Helmet} from "react-helmet";


const localization = new LocalizedStrings({
   bn: {
      aboutTitle: `অংকুর সম্পর্কে`,
      aboutDes: 'অংকুর ডেভেলপ করেছেন জামিয়ুস সিয়াম। <a href="https://jamiussiam.com" target="_blank">পারসোনাল ওয়েবসাইট</a> <br/> অংকুরের ব্যাপারে যেকোনো কিছুর জন্য মেইল করতে পারেন jamiussiam [at] gmail.com এই অ্যাড্রেসে।',
      tech: 'ব্যবহারকৃত টেকনোলজি',
      aboutDes1: 'অংকুর ডেভেলপ করেছেন জামিয়ুস সিয়াম। অংকুরের ব্যাপারে যেকোনো কিছুর জন্য মেইল করতে পারেন jamiussiam [at] gmail.com এই অ্যাড্রেসে।',

   },
   en: {
      aboutTitle: `About Angkur`,
      aboutDes: 'Angkur is developed by Jamius Siam. <a href="https://jamiussiam.com" target="_blank">Personal Website</a>' +
          '<br/> For any queries related to Angkur, you can mail to jamiussiam [at] gmail.com',
      tech: 'Technologies Used',
      aboutDes1: 'Angkur is developed by Jamius Siam.  For any queries related to Angkur, you can mail to jamiussiam [at] gmail.com'
   }
});

class About extends Component {

   static contextType = Language;

   render() {

      localization.setLanguage(this.context.lang);

      return (
          <div>
             <Helmet>
                <title>{localization.aboutTitle} - {this.context.lang === 'en' ? 'Angkur' : 'অংকুর'}</title>
                <meta property="description" content={localization.aboutDes1}/>

                <meta property="og:title"
                      content={`${localization.aboutTitle} - ${this.context.lang === 'en' ? 'Angkur' : 'অংকুর'}`}/>
                <meta property="og:description" content={localization.aboutDes1}/>
             </Helmet>

             <Navbar showBG/>
             <div className="container-c">
                <div className="row">
                   <div className="col">
                      <h2>{localization.aboutTitle}</h2>
                      <p className="lead mb-4" dangerouslySetInnerHTML={{__html: localization.aboutDes}}/>
                   </div>
                </div>

                <h2 className="mt-5">{localization.tech}</h2>
             </div>

             <Spring from={{opacity: 0, transform: 'translateY(-50px)'}}
                     to={{opacity: 1, transform: 'translateY(0px)'}}
                     config={{...config.gentle, delay: 300}}>
                {
                   props => (
                       <div style={props} className="container">
                          <div className="row align-center justify-content-center">
                             <div className="col-md-3 my-4">
                                <img className={`img-fluid ${styles.brands}`} src={reactLogo} alt="react logo"/>
                             </div>
                             <div className="col-md-3 my-4">
                                <img className={`img-fluid ${styles.brands}`} src={netlifyLogo} alt="netlify logo"/>
                             </div>
                             <div className="col-md-3 my-4">
                                <img className={`img-fluid ${styles.brands}`} src={reactRouterLogo}
                                     alt="react router logo"/>
                             </div>
                          </div>
                          <div className="row justify-content-center">
                             <div className="col-md-3 my-4">
                                <img className={`img-fluid ${styles.brands}`} src={reactSpringLogo}
                                     alt="react spring logo"/>
                             </div>
                             <div className="col-md-3 my-4">
                                <img className={`img-fluid ${styles.brands}`} src={bootstrapLogo} alt="bootstrap logo"/>
                             </div>
                          </div>
                       </div>
                   )
                }
             </Spring>
             <Footer/>
          </div>
      );
   }
}

export default About;