import { TextField, Button} from "@mui/material";
import WSVault from "../vaults/WorkServerVault";
import { useState } from "react";

function ServerPointFieldComponent() {

    const [value, setValue] = useState("")
    
    const changeValue = event => {
      setValue(event.target.value)
    }
        
    const setServerEnpoint = () => {
      WSVault.setServerEndpoint(value)
      console.log(WSVault.getServerEndpoint())
    }

    const delServerEnpoint = () => {
      WSVault.setServerEndpoint('default') 
      setValue('')
    }

    return (
        <>
        <TextField 
            onChange={changeValue}
            value={value}
            label="Server Endpoint" 
            variant="outlined" 
            style={{ width: "100%" }}
            >
        </TextField>

        <Button onClick={setServerEnpoint}
              type="submit"
              variant="contained"
              sx={{mt: 3, mb: 2, bgcolor: 'black'}} 
            >
              Set
        </Button>
        <Button onClick={delServerEnpoint}
              type="submit"
              variant="contained"
              sx={{mt: 3, mb: 2, bgcolor: 'black'}} 
            >
              Clear
        </Button>
        </>
      );
}

export default ServerPointFieldComponent;