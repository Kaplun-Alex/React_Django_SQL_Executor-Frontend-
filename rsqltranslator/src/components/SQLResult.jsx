import { Button, Container } from "@mui/material";
import { observer } from 'mobx-react-lite';
import CVault from "../vaults/ConstantVault";


const SQLResult = observer(() => {
    //const [value, setValue] = useState("")

    const clearResultField = () =>{
        CVault.constantList.SERVERENDPOINT = 'Connect to server:  NOT DEFINED'
        CVault.constantList.SQLFETCHQUERYSTRING = 'SQL String: NOT DEFINED' 
    }
    
    return (  
        <>
        <Container>
            <Button onClick={clearResultField}
              type="submit"
              variant="contained"
              sx={{mt: 3, mb: 2, bgcolor: 'black'}} 
              style={{ width: "8%" }} 
            >
              Clear
        </Button>
        <div>
            <h1>
                {CVault.constantList.SERVERENDPOINT}
            </h1>
        </div>
        <div>
            <h1>
                {CVault.constantList.SQLFETCHQUERYSTRING}
            </h1>
        </div>
        <div>
            <h1>
                Result:
            </h1>
        </div>
        <div>
            <h1>
                {CVault.constantList.SQLRESULT}
                
            </h1>
        </div>
        </Container>
        

        </>
    );
})

export default SQLResult;