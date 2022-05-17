import React, { useState } from 'react';

import MyAccordion from './MyAccordion';
import { questions } from './QuestionApi';

const Accordion = () => {
	const [ data] = useState(questions);

	return (
		<React.StrictMode>
			<section className='main-div'>
				<h1>React Interview Questions </h1>
				{data.map((current, index) => {
					const {id}  = current;
					return <MyAccordion key={id} {...current} />;
				})}
				
			</section>
		</React.StrictMode>
	);
};

export default Accordion;
