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
              sx={{mt: 3, mb: 2, bgcolor: 'black', ":hover": {color: 'black', backgroundColor: 'white'}}} 
              style={{ width: "8%" }} 
            >
              Clear
        </Button>
        <div>
            <h1>
            Connect to server: {CVault.getServerEndpoint()}
            </h1>
        </div>
        <div>
            <h1>
            Resource name: {CVault.getDatabaseName()}
            </h1>
        </div>
        <div>
            <h1>
            User name: {CVault.getUserName()}
            </h1>
        </div>
        <div>
            <h1>
            User password: {CVault.getUserPassword()}
            </h1>
        </div>
        <div>
            <h1>
            SQL String: {CVault.getSQLFetchingQueryString()}
            </h1>
        </div>

        <div>
            <h1>
                {CVault.getSQLResultValue()}
                
            </h1>
        </div>
        </Container>
        

        </>
    );
})

export default SQLResult;