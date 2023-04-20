import { Subject } from 'rxjs';

const subject = new Subject();
setTimeout(() => subject.next(1), 1000);
subject.subscribe(v => console.log(v))