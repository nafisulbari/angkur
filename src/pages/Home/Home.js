import React, {Component} from 'react';
import Navbar from "../../components/Nav/Navbar";
import styles from './Home.module.scss';
import {Spring, config} from 'react-spring/renderprops';
import LocalizedStrings from 'react-localization';
import Language from '../../context/Language';
import FontList from '../../components/FontList/FontList';
import {Link} from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Feature from "../../components/Feature/Feature";


const localization = new LocalizedStrings({
   bn: {
      HeroTitle: 'আপনার ওয়েবসাইটে বাংলা ওয়েব ফন্ট অ্যাড করুন',
      HeroSubTitle: 'সহজে এবং বিনামূল্যে',
      CalltoActionButton: 'ফন্টগুলো দেখুন',
      SecondaryButton: 'আরো জানুন',
   },
   en: {
      HeroTitle: 'Add Bangla Web Fonts to your Website',
      HeroSubTitle: 'It\'s Free and Easy',
      CalltoActionButton: 'Browse Fonts',
      SecondaryButton: 'Learn More',
   },

});

class Home extends Component {

   static contextType = Language;

   render() {
      window.scrollTo(0, 0);
      localization.setLanguage(this.context.lang);

      return (
          <div>
             <header className={styles.HeroBg}>


                <Navbar/>

                <Spring from={{transform: 'translate3d(0px, +20px, 0px)'}}
                        to={{transform: 'translate3d(0px, 0px, 0px)'}}
                        config={config.gentle}>
                   {props => (

                       <div style={props} className="container">
                          <div className="d-flex flex-column align-items-center text-center">
                             <h1 className={"text-light " + styles.heroTitle}>
                                {localization.HeroTitle}
                             </h1>
                             <h2 className={"text-light " + styles.heroSubTitle}>
                                {localization.HeroSubTitle}
                             </h2>
                             <div className={"d-flex flex-column flex-lg-row " + styles.coaButtons}>
                                <Link to={`/en/fonts`}>
                                   <button
                                       className={"cbtn cbtn-orange " + styles.cbtn}>{localization.CalltoActionButton}</button>
                                </Link>
                                <button className="cbtn cbtn-outline-orange">{localization.SecondaryButton}</button>
                             </div>
                          </div>
                       </div>


                   )}
                </Spring>
             </header>

             <Feature/>

             <hr/>

             <FontList/>
             <Footer/>
          </div>
      );
   }
}

export default Home;