import { TextField, Button } from "@mui/material";
import { useState } from "react";

function SQLFormComponent() {
    const [value, setValue] = useState("")
    
    const getValue = () => {
        console.log(value)        
    }

    const changeValue = event => {
        setValue(event.target.value)
    }

    return (  
        <>
        <TextField 
            onChange={changeValue}
            value={value}
            label="write SQL script" 
            variant="outlined" 
            style={{ width: "100%" }}
            >
        </TextField>

        <Button onClick={getValue}
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt: 3, mb: 2, bgcolor: 'black'}} 
            >
              EXECUTE
        </Button>
        </>
    );
}

export default SQLFormComponent;