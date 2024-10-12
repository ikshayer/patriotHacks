

import {extendTheme, withDefaultColorScheme} from '@chakra-ui/react'


const theme = extendTheme({
    
        styles: {
          global: () => ({
            body: {
              bg: "#242424",
              margin: "20px 20px"
            },
            fonts: {
                heading: `'Open Sans', sans-serif`,
                body: `'Raleway', sans-serif`,
                colors: '#344e41'
            },

            
          }),
        },
      
    }
)




export default theme