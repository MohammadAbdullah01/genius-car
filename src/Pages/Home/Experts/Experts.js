import React from 'react';
import { Row } from 'react-bootstrap';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: "will smith", img: expert1 },
    { id: 2, name: "Bhabar azam", img: expert2 },
    { id: 3, name: "Gatter smill", img: expert3 },
    { id: 4, name: "Lingzin sha", img: expert4 },
    { id: 5, name: "Franklas tin", img: expert5 },
    { id: 6, name: "Sanaya karim", img: expert6 }
]

const Experts = () => {
    return (
        <div id='experts'>
            <h1 className='text-primary text-center my-3'>experts</h1>
            <Row className='g-5 mx-auto'>
                {experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                >
                </Expert>)}
            </Row>
        </div>
    );
};

export default Experts;