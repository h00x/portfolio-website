import Typography from 'typography'
import lawtonTheme from 'typography-theme-lawton'

lawtonTheme.bodyFontFamily = ['Raleway', 'sans-serif']
lawtonTheme.googleFonts[0].styles = ['400', '400i', '700', '800']
lawtonTheme.headerColor = 'hsl(27, 100%, 96%)'
lawtonTheme.bodyColor = 'hsl(204, 8%, 24%)'
lawtonTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
    a: {
        fontWeight: 'normal'
    }
})


const typography = new Typography(lawtonTheme)

export default typography
export const rhythm = typography.rhythm