import React, { Component } from 'react';
import portfolio from './../static/portfolio.json';
import './../../css/_portfolio.less';

class Portfolio extends Component {
    render() {
        return (
            <div className="rightbar__wrapper">
                <div className="portfolio__section">
                    <h1 className="aboutus__section--heading">Awesome
                        <span className="aboutus__section--colortext">Portfolio</span>
                    </h1>
                    <div className="portfolio__section--boxwrap">
                        {portfolio.map(data => {
                            const { imgName = '', key = '', imgUrl = '' } = data;
                            return (
                                <div className="portfolio__section--imgsection" key={key}>
                                    <img className="portfolio__section--imglist" src={imgUrl} />
                                    <div className="portfolio__section--hoverview">
                                        <span className="portfolio__section--plusicon"></span>
                                        <h2>{imgName}</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;