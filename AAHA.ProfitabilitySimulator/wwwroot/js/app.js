require('./profitability-simulator');
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';
import ES6Lib from './es6codelib';
import 'bootstrap/js/src/collapse.js';

//import { library, dom } from '@fortawesome/fontawesome-svg-core'
//import { fas } from '@fortawesome/free-solid-svg-icons'
//import { far } from '@fortawesome/free-regular-svg-icons'
//import { fab } from '@fortawesome/free-brands-svg-icons'
//library.add(fas, far, fab) 

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
library.add(faPencilAlt, faChevronDown, faChevronUp);
dom.watch();
//dom.i2svg()

//import { faIgloo } from '@fortawesome/free-solid-svg-icons'

//library.add(faIgloo)

//const igloo = icon({ prefix: 'fas', iconName: 'igloo' })


//module.hot.accept();
