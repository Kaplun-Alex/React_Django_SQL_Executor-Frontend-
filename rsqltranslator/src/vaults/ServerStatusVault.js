import {makeAutoObservable} from 'mobx'


class ServerStatusVault {

    redis = {'name':'REDIS', 'status':'stopped'}
    email = {'name':'EMAIL', 'status':'stopped'}
    sheduller = {'name':'SHEDULLER', 'status':'stopped'}
    flower = {'name':'FLOWER', 'status':'stopped'}
    rest = {'name':'REST', 'status':'stopped'}
    frontend = {'name':'FRONTEND', 'status':'stopped'}
    
    constructor(){
        makeAutoObservable(this);

    }
    getRedisStatus(){
        return (this.redis.status);
    }   
    getEmailStatus(){
        return (this.email.status);
    }
    getShedullerStatus(){
        return (this.sheduller.status);
    }
    getFlowerStatus(){
        return (this.flower).status;
    }
    getRestStatus(){
        return (this.rest.status);
    }
    getFrontStatus(){
        return (this.frontend.status);
    }
    setEmailStatus(emailstatus){
        this.email.status = emailstatus
        console.log(this.emai)
    }
    setRedisStatus(redisstatus){
        this.redis.status = redisstatus
        console.log(this.redis)
    }
    setShedullerStatus(shedullerstatus){
        this.sheduller.status = shedullerstatus
        console.log(this.sheduller)
    }
    setFlowerStatus(flowerstatus){
        this.flower.status = flowerstatus
        console.log(this.frontend)
    }
    setRestStatus(reststatus){
        this.rest.status = reststatus
        console.log(this.rest)
    }
    setFrontStatus(frontstatus){
        this.frontend.status = frontstatus
        console.log(this.frontend)
    }
    getServerStatusVaultServices(){
        console.log(this.email, this.flower, this.frontend, this.redis, this.sheduller)
        return (this.email, this.flower, this.frontend, this.redis, this.sheduller);
    }
}

const SSvault = new ServerStatusVault()

export default SSvault;