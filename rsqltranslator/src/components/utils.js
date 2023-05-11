import axios from 'axios'
import CVault from '../vaults/ConstantVault';

export default async function sqlAxiosGetter(rowSQL) {
    try {
      const response = await axios.get(rowSQL, {
        headers: {
          myHeader: 'header'
        },
        params: {
          data: rowSQL
        }
      });
        const responceData = response.data
        CVault.constantList.SQLRESULT = responceData
        return (response)
      } 
      catch (error) {
        return (error)
      }  
}

//SELECT column_name, data_type
//FROM information_schema.columns
//WHERE table_schema = 'public' AND table_name = 'staff_info';