import { TextField, Container, Button, Box} from "@mui/material";
import Stack from '@mui/material/Stack'
import { useState } from "react";
import CVault from "../vaults/ConstantVault";


function ServerPointFieldComponent() {

    const [serverEndpointValue, setServerEndpointValueValue] = useState()
    const [databaseNameValue, setDatabaseNameValue] = useState()
    const [userNameValue, setUserNameValue] = useState()
    const [passwordValue, setPasswordValue] = useState()

    const setConfigurationData = () => {
      CVault.setServerEndpoint(serverEndpointValue)
      CVault.setDatabaseName(databaseNameValue)
      CVault.setUserName(userNameValue)
      CVault.setUserPassword(passwordValue)
    }
    const changeServerEndpointValue = event => {
      setServerEndpointValueValue(event.target.value)
    }
    const changeDatabaseNameValue = event => {
      setDatabaseNameValue(event.target.value)
    }
    const changeUserNameValue = event => {
      setUserNameValue(event.target.value)
    }
    const changePasswordValue = event => {
      setPasswordValue(event.target.value)
    }

    const clearFields = () => {
      CVault.setServerEndpoint("NOT DEFINED")
      setServerEndpointValueValue('')
      setDatabaseNameValue('')
      setUserNameValue('')
      setPasswordValue('')
    }

    return (
        <>
        <Container>
          <Stack sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <TextField margin="normal"
                  onChange={changeServerEndpointValue}
                  value={serverEndpointValue}
                  label="Server Endpoint" 
                  variant="outlined" 
                  style={{ width: "50%" }}
                  >
              </TextField>

              <TextField margin="normal"
                  onChange={changeDatabaseNameValue}
                  value={databaseNameValue}
                  label="Database name" 
                  variant="outlined" 
                  style={{ width: "50%" }}
                  >
              </TextField>

              <TextField margin="normal"
                  onChange={changeUserNameValue}
                  value={userNameValue}
                  label="Username" 
                  variant="outlined" 
                  style={{ width: "50%" }}
                  >
              </TextField>

              <TextField margin="normal"
                  onChange={changePasswordValue}
                  value={passwordValue}
                  label="Password" 
                  style={{ width: "50%" }}
                  >
              </TextField>

          </Stack>
        </Container>


        <Container>
          <Box sx={{display: 'flex', justifyContent: "space-evenly"}}>
            <Button onClick={setConfigurationData}
              type="submit"
              variant="contained"
              sx={{bgcolor: 'black', width: 100, marginLeft: 1, marginRight: 1, ":hover": {color: 'black', backgroundColor: 'white'}}}
              >Set
            </Button>
              <Button onClick={clearFields}
              type="submit"
              variant="contained"
              sx={{bgcolor: 'black', width: 100, marginLeft: 1, marginRight: 1, ":hover": {color: 'black', backgroundColor: 'white'}}}
              >Clear
            </Button> 
          </Box>
        </Container>     
        </>
      );
}

export default ServerPointFieldComponent;