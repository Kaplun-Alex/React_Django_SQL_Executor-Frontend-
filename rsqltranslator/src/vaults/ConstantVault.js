import {makeAutoObservable} from 'mobx'


class ConstantVault {

    constantList = {
        'DEFAULTCONSTANT': 'Constant',
        'SERVERENDPOINT': '-----',
        'DATABASE' : '-----',
        'USERNAME': 'No user',
        'PASWORD': 'default',
        'SQLFETCHQUERYSTRING': 'Not defined',
        'SQLRESULT': '',
    }
            
    constructor(){
        makeAutoObservable(this);
    }

    setDefaultConstant(value){
        this.constantList.DEFAULTCONSTANT = value
    } 
    setServerEndpoint(value){
        this.constantList.SERVERENDPOINT = value
    } 
    setDatabaseName(value){
        this.constantList.DATABASE = value
    } 
    setUserName(value){
        this.constantList.USERNAME = value
    } 
    setUserPassword(value){
        this.constantList.PASWORD = value
    } 
    setSQLFetchingQueryString(value){
        this.constantList.SQLFETCHQUERYSTRING = value
    } 
    setSQLResultValue(value){
        this.constantList.SQLRESULT = value
    }

    getDefaultConstant(){
        return this.constantList.DEFAULTCONSTANT
    } 
    getServerEndpoint(){
        return this.constantList.SERVERENDPOINT
    } 
    getDatabaseName(){
        return this.constantList.DATABASE
    } 
    getUserName(){
        return this.constantList.USERNAME
    } 
    getUserPassword(){
        return this.constantList.PASWORD
    } 
    getSQLFetchingQueryString(){
        return this.constantList.SQLFETCHQUERYSTRING
    } 
    getSQLResultValue(){
        return this.constantList.SQLRESULT
    }
}

const CVault = new ConstantVault()

export default CVault;