import { makeAutoObservable } from 'mobx';
import axios from 'axios';


class featchingClassComponent {
    data = []
    isFetching = false
    error = null
    
    constructor() {
        makeAutoObservable(this)
    }

  fetchData() {
    this.isFetching = true
    axios.get("127.0.0.1:8000")
      .then(response => {
        this.data = response.data
        this.isFetching = false
        console.log('Success');
      })
      .catch(err => {
        this.error = err
        this.isFetching = false
        console.log('Error');
      })
  };
}

const fetchClass = new featchingClassComponent()


export default fetchClass;