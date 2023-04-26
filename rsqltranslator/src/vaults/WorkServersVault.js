import {makeAutoObservable} from 'mobx'


class WorkServersVault {

    nameOfServers = {}
    
    constructor(){
        makeAutoObservable(this);

    }
    
}

const WSVault = new WorkServersVault()

export default WSVault;