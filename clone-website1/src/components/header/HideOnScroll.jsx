import * as React from "react"

import {Slide, useScrollTrigger} from "@material-ui/core"


const HideOnScroll = ({children}) => {

    const trigger = useScrollTrigger();
    return (
        <Slide in={!trigger} direction="down" appear={true}>
            {children}
        </Slide>
    )
};


export default HideOnScroll