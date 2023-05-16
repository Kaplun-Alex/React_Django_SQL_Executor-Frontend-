import axios from 'axios'
import CVault from '../vaults/ConstantVault';

export default async function sqlAxiosGetter(rowSQL) {
    try {
      const response = await axios.get(rowSQL, {
        headers: {
          dataBaseFeetchString: CVault.constantList.SQLFETCHQUERYSTRING,
          dataBaseName: CVault.constantList.DATABASE,
          dataBaseuserName: CVault.constantList.USERNAME,
          dataBaseuserPassword: CVault.constantList.PASWORD,
        },
        params: {
          data: rowSQL
        }
      });
        const responceData = response.data
        CVault.setSQLResultValue(responceData)
        return (response)
      } 
      catch (error) {
        return (error)
      }  
}

//SELECT column_name, data_type
//FROM information_schema.columns
//WHERE table_schema = 'public' AND table_name = 'staff_info';