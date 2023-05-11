import { TextField, Container} from "@mui/material";
import Stack from '@mui/material/Stack'
import WSVault from "../vaults/WorkServerVault";
import { useState } from "react";
import CVault from "../vaults/ConstantVault";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function ServerPointFieldComponent() {

    const [serverEndpointValue, setServerEndpointValueValue] = useState()
    const [databaseNameValue, setDatabaseNameValue] = useState()
    const [userNameValue, setUserNameValue] = useState()
    const [passwordValue, setPasswordValue] = useState()
    
    const changeServerEndpointValue = event => {
      setServerEndpointValueValue(event.target.serverEndpointValue)
    }
    const changeDatabaseNameValue= event => {
      setDatabaseNameValue(event.target.databaseNameValue)
    }
    const changeUserNameValue = event => {
      setUserNameValue(event.target.userNameValue)
    }
    const changePasswordValue = event => {
      setPasswordValue(event.target.passwordValue)
    }

    const setConfigurationData = () => {
      CVault.constantList.SERVERENDPOINT = "Connect to server:  " + serverEndpointValue
      console.log(WSVault.getServerEndpoint())
    }

    const clearFields = () => {
      CVault.constantList.SERVERENDPOINT = "Connect to server:  NOT DEFINED"
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
        <Stack spacing={2} sx={{
              alignItems: 'center',
            }}>
          <ButtonGroup
                  disableElevation
                  variant="contained"
                >     
              <Button onClick={setConfigurationData}
                  sx={{bgcolor: 'black', width: 100, marginLeft: 1, marginRight: 1}}
                  >Set
              </Button>
                  <Button margin='normal' onClick={clearFields}
                  sx={{bgcolor: 'black', width: 100, marginLeft: 1, marginRight: 1}}
                  >Clear
              </Button> 
          </ButtonGroup>
                        
        </Stack>

        </Container>     
        </>
      );
}

export default ServerPointFieldComponent;