import React from 'react';

import Heading from './Heading';
import List from './List';

const fav = "test other export";
const test = "sk";
function HeadingList() {
    return (<> <Heading/> < List /> </>);
};

export default HeadingList;
export { fav, test };