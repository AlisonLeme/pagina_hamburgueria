// import para criar o tema personalizado
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        background: {
            default: '#181818',
            grey: '#787878',
        },
        title: {
            main: '#ffffff'
        }
    }
})

export default theme