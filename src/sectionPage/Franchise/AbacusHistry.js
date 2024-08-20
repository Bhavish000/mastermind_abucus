import React, { useState } from 'react';
import CountUp from 'react-countup';

const AbacusHistroy = () => {

    const [state, setState] = useState(true);

    const counters = [
        {
            countNum: 25 ,
            countTitle: 'Skill Training LeaderShip ',
            counterPrefix: ' Years',
            // countIcon: countIcon1
        },
        {
            countNum: 17,
            countTitle: 'Countries',
            counterPrefix: '',
            // countIcon: countIcon2
        },
        {
            countNum : 2000 ,
            countTitle: `Center's`,
            counterPrefix: '+',
            // countIcon: countIcon3
        },
        {
            countNum: 1000000 ,
            countTitle: 'Children Benefited',
            counterPrefix: '+',
            // countIcon: countIcon1
        }

    ];

    return (
        <div id="rs-about" className="rs-about style3 pt-100 pb-100 md-pt-30 md-pb-30">
            <div className="container">
                <div className="">
                    <div className="">
                        {counters &&
                            <div className="row  couter-area">
                                {counters.map( (counter, num) => (
                                    <div key={num} className="col-md-6 col-lg-3 md-mb-30">
                                        <div className="counter-item one">
                                            {/* <img className="count-img" src={counter.countIcon} alt="" /> */}
                                            <i className="fa-solid fa-arrow-trend-up count-img"></i>
                                            <h3 className="number rs-count">  &nbsp;
                                                <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                               
                                                <span className="counter-prefix">{counter.counterPrefix}</span>
                                            </h3>
                                            <div className="divdesc mb-0">{counter.countTitle}</div>
                                        </div>
                                    </div>
                                )).slice(0,1)}
                                {counters.map( (counter, num) => (
                                    <div key={num} className="col-md-6 col-lg-3 md-mb-30">
                                        <div className="counter-item two">
                                            {/* <img className="count-img" src={counter.countIcon} alt="" /> */}
                                            <i className="fa-solid fa-earth-asia count-img"></i>
                                            <h3 className="number rs-count">
                                                <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                                
                                                <span className="counter-prefix">{counter.counterPrefix}</span>
                                            </h3>
                                            <div className=" divdesc mb-0">{counter.countTitle}</div>
                                        </div>
                                    </div>
                                )).slice(1,2)}
                                {counters.map( (counter, num) => (
                                    <div key={num} className="col-md-6 col-lg-3 md-mb-30">
                                        <div className="counter-item three">
                                            {/* <img className="count-img" src={counter.countIcon} alt="" /> */}
                                            <i className="fa-regular fa-building count-img"></i>
                                            <h3 className="number rs-count">
                                                <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                               
                                                <span className="counter-prefix">{counter.counterPrefix}</span>
                                            </h3>
                                            <div className="divdesc mb-0">{counter.countTitle}</div>
                                        </div>
                                    </div>
                                )).slice(2,3)}
                                 {counters.map( (counter, num) => (
                                    <div key={num} className="col-md-6 col-lg-3 md-mb-30">
                                        <div className="counter-item four">
                                            {/* <img className="count-img" src={counter.countIcon} alt="" /> */}
                                            <i className="fa-solid fa-users-rectangle count-img"></i>
                                            <h3 className="number rs-count">
                                                <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                               
                                                <span className="counter-prefix">{counter.counterPrefix}</span>
                                            </h3>
                                            <div className="divdesc mb-0">{counter.countTitle}</div>
                                        </div>
                                    </div>
                                )).slice(3,4)}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AbacusHistroy;