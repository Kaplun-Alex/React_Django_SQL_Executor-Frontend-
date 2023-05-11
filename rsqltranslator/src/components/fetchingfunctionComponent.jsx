import axios from 'axios'

export default async function descriptionLoader () {

    return axios.get(GET_DESCRIPTION, {

    })
    .then((responce) => {
    const answer = responce.data
    console.log(answer)
    return answer.results
    })
   
    .catch((error) => {
    console.error(error)
    })

}