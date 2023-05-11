import { TextField, Button, Stack, Container } from "@mui/material";
import { useState } from "react";
import WSVault from "../vaults/WorkServerVault";
import sqlAxiosGetter from "./utils";
import RVault from "../vaults/ResponseVault";
import CVault from "../vaults/ConstantVault";


function SQLFormComponent() {
    const [value, setValue] = useState()

    const getValue = () => {
        console.log(value) 
        let sqlQuestion = 'http://'+WSVault.serverEndpoint.fullEndpoint+'/sqls/api?sql='+value
        CVault.constantList.SQLFETCHQUERYSTRING = 'SQL String:  ' + value
        console.log(sqlQuestion)
        let responseData = sqlAxiosGetter(sqlQuestion)
        RVault.setResponseData(responseData)
    }
    
    const changeValue = event => {
        setValue(event.target.value)
    }

    return (  
        <>
        <Container >
            <Stack>
            <TextField margin="normal"
                id="sqlguestion"
                onChange={changeValue}
                value={value}
                label="write SQL script" 
                variant="outlined"             
                >
            </TextField>

            <Button onClick={getValue}
                type="submit"
                variant="contained"
                sx={{mt: 3, mb: 2, bgcolor: 'black'}}
                style={{ width: "100%", border: 10 }}
                >
              EXECUTE
            </Button>
        </Stack>
        </Container>        
        </>
    );
}

export default SQLFormComponent;