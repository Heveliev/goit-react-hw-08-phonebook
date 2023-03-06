import PropTypes from 'prop-types';
import { ContactInput, Title } from './Input.styled';





export const Input = ({type,pattern,name,title,titleBox}) =>{
    return(<>
    <Title>{titleBox}
    <ContactInput
    type={type}
    pattern={pattern}
    name={name}
    title={title}
    required/></Title>
    </>

    )
}

Input.propTypes = {
    type:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    pattern:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    titleBox:PropTypes.string.isRequired
}