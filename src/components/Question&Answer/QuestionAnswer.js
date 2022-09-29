import React from 'react';
import './Question&Answer.css'

const QuestionAnswer = () => {
    return (
        <div className='question-UI'>
            <div>
                <h2 >***InterView Question ***</h2> 
                <h3 >1.How does React work?</h3>
                <p>React uses a declarative paradigm that makes it easier to reason about your application <br /> and aims to be both efficient and flexible. It designs simple views <br /> for each state in your application, and React will efficiently update <br /> and render just the right component when your data changes.</p>
            </div>
            <div>
                <h3>2.Props VS State</h3>
                <p>Props are used to pass data from one component to another. The state <br /> is a local data storage that is local to the component only and <br /> cannot be passed to other components.</p>
            </div>
            <div>
                <h3>3.What is the work of useEffect without data load?</h3>
                <p>By using this Hook, you tell React that your component needs to do something <br /> after render. React will remember the function you passed (we'll refer to it as our “effect”), <br /> and call it later after performing the DOM updates.</p>
            </div>
        </div>
    );
};

export default QuestionAnswer;