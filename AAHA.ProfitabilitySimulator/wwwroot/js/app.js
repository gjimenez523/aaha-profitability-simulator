require('./profitability-simulator');
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';
import ES6Lib from './es6codelib';
import 'bootstrap/js/src/collapse.js';
//import { library, icon } from '@fortawesome/fontawesome-svg-core'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
//import { faCheck } from "@fortawesome/free-regular-svg-icons/faAddressBook";



library.add(fas, far, fab) 
//library.add(faCheck);
//library.add(far, fab) 
//library.add(faCheck);
dom.watch();
//dom.i2svg()

//import { faIgloo } from '@fortawesome/free-solid-svg-icons'

//library.add(faIgloo)

//const igloo = icon({ prefix: 'fas', iconName: 'igloo' })


//module.hot.accept();
