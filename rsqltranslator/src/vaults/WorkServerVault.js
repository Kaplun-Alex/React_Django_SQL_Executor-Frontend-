import {makeAutoObservable} from 'mobx'


class WorkServerVault {

    serverEndpoint = {
        'name': 'default',
        'ip':'127.0.0.1',
        'fullEndpoint':'default'}
    
    constructor(){
        makeAutoObservable(this);
    }
    getServerEndpoint(){
        return (this.serverEndpoint.fullEndpoint);
    } 
    setServerEndpoint(value){
        this.serverEndpoint.fullEndpoint = value
    } 
}

const WSVault = new WorkServerVault()

export default WSVault;