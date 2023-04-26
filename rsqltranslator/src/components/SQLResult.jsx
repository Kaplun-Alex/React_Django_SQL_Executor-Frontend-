import { TextField, Button } from "@mui/material";
import { useState } from "react";

function SQLResult() {
    const [value, setValue] = useState("")
    
    const clearValue = () => {
        setValue("")        
    }

    const changeValue = event => {
        setValue(event.target.value)
    }

    return (  
        <>
        <Button onClick={clearValue}
              type="submit"
              variant="contained"
              sx={{mt: 3, mb: 2, bgcolor: 'black'}} 
            >
              Clear
        </Button>

        <TextField 
            onChange={changeValue}
            value={value}
            label="Result" 
            variant="outlined" 
            style={{ width: "100%" }}
            >
        </TextField>

        </>
    );
}

export default SQLResult;