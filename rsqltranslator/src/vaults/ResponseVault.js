import {makeAutoObservable} from 'mobx'


class ResponseVault {

    response = []
            
    constructor(){
        makeAutoObservable(this);
    }
    getResponseData(){
        return (this.response.data);
    } 
    setResponseData(responseData){
        this.response = responseData
        console.log(this.response)
    } 
    delResponseData(){
        return (this.serverEndpoint.fullEndpoint);
    } 
}

const RVault = new ResponseVault()

export default RVault;