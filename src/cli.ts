import {get as getIP} from "./";

getIP()
.then((ip: string) => {
    console.log(ip);
    process.exit(0);
}).catch((err: any) => {
    console.error(JSON.stringify(err));
    process.exit(1);
});
