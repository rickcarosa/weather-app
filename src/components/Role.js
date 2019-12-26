import React from 'react';
import { InnerContainer, Button} from './styled-components'

const Role = props => {
const {role} = props
    return(
        <InnerContainer>
        {
            {
                ADMIN: (
                    // jsx elements need to have one wrapper so you use react fragments to wrap multiple elements
                    <>
                        <Button> ADMIN </Button>
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