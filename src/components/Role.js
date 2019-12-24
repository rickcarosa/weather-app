import React from 'react';
import { InnerContainer, Button} from './styled-components'

const Role = props => {
const {role} = props
    return(
        <InnerContainer>
        {
            {
                ADMIN: (
                    <>
                        <Button> ADMIN </Button>
                    </>
                ),

                LIMADMIN: (
                    <>
                        <Button> LIMADMIN </Button>
                    </>
                )
            }[role]
        }
        </InnerContainer>
    )
}

export default Role;