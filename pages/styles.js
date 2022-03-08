import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6),
  },
  boxContainer: {
      paddingBottom: theme.spacing(5),
  },
  box1: {
      backgroundColor: theme.palette.background.grey,
      padding: theme.spacing(3),
      marginBottom: theme.spacing(5),
      boxShadow: '5px 0px 20px #ac0d0d',
      borderRadius: '5px 5px 5px 100px',
  },
  box2: {
      backgroundColor: theme.palette.background.grey,
      padding: theme.spacing(3),
      marginBottom: theme.spacing(5),
      boxShadow: '-5px 0 20px #ac0d0d',
      borderRadius: '5px 5px 100px 5px',
  },
  title: {
    color: theme.palette.title.main,
  },
  btn: {
    backgroundColor: '#ac0d0d',
    color: theme.palette.title.main,
    fontWeight: 'bold',
    transition: '.3s',

    '&:hover': {
      backgroundColor: theme.palette.title.main,
      color: '#ac0d0d',
    },
  },
}))

export default useStyles;