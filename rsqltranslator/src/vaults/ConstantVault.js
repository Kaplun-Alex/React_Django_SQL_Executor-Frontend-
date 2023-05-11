import {makeAutoObservable} from 'mobx'


class ConstantVault {

    constantList = {
        'DEFAULTCONSTANT': 'Constant',
        'SERVERENDPOINT': 'Connect to server:  NOT DEFINED',
        'SQLFETCHQUERYSTRING': 'SQL String: NOT DEFINED',
        'DATABASE' : 'default',
        'USERNAME': 'default',
        'PASWORD': 'default',
        'SQLRESULT': '',
    }
            
    constructor(){
        makeAutoObservable(this);
    }

    setSQLResultValue(value){
        this.constantList.SQLResult = value
        console.log(this.value)
    }

}

const CVault = new ConstantVault()

export default CVault;