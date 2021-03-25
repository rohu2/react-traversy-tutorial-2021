import PropTypes from 'prop-types'
import Button from './Button.js'
import {useLocation} from 'react-router-dom'

const Header = ({title , onAdd, showAdd }) => {
   
    const location = useLocation()




return(


<header className='header'>

<h1 style={{}} >{title}</h1>
{ location.pathname === '/' &&   <Button color={showAdd ? 'red' : 'green'} text= {showAdd ? 'Close' : 'Open' }  onClick={onAdd} />}

</header>

)


}





export default Header