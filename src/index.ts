import * as request from "superagent";

export let get = async () => {
    let url = "https://api.ipify.org";
    let ret = await request.get(url).query({"format": "json"}).timeout(15000);
    if (ret.status === 200 && ret.body && typeof ret.body.ip === "string" && ret.body.ip) {
        return ret.body.ip as string;
    } else {
        throw `unable to determine my public ip address from ${url}`;
    }	
}