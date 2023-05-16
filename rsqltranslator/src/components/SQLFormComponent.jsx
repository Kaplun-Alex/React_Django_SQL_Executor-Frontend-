import { TextField, Button, Container } from "@mui/material";
import { useState } from "react";
import sqlAxiosGetter from "./utils";
import RVault from "../vaults/ResponseVault";
import CVault from "../vaults/ConstantVault";
import {Box} from "@mui/material"


function SQLFormComponent() {
    const [value, setValue] = useState()

    const getValue = () => {
//        console.log(value) 
        let sqlQuestion = 'http://' + CVault.constantList.SERVERENDPOINT+ '/' + 
        CVault.constantList.DATABASE + '/api?sql=' + value
        CVault.setSQLFetchingQueryString(value)
        console.log(sqlQuestion)
        let responseData = sqlAxiosGetter(sqlQuestion)
        RVault.setResponseData(responseData)
    }
    
    const changeValue = event => {
        setValue(event.target.value)
//       console.log(value)
    }

    return (  
        <>
        <Container >
            <Box sx={{display: "flex", justifyContent: 'space-between'}}>
                    <TextField sx={{display: "flex"}}
                        margin="normal"
                        onChange={changeValue}
                        value={value}
                        label="write SQL script" 
                        variant="outlined" 
                        style={{width: "90%"}}            
                        >
                    </TextField>
                    <Button 
                        type="submit"
                        variant="contained"
                        sx={{mt: 3, mb: 2, bgcolor: 'black', ":hover": {color: 'black', backgroundColor: 'white'}}}
                        style={{ width: "8%" }} 
                        >
                    Clear
                    </Button> 
            </Box>
            <Button onClick={getValue}
                type="submit"
                variant="contained"
                sx={{mt: 3, mb: 2, bgcolor: 'black', ":hover": {color: 'black', backgroundColor: 'white'}}}
                style={{ width: "100%", border: 10 }}
                >
              EXECUTE
            </Button>
        </Container>        
        </>
    );
}

export default SQLFormComponent;