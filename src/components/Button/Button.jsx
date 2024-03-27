import './Button.scss';

//add onlick, and pass in specific function as prop
export default function Button(prop) {
const {buttonText, buttonwidth, classname} = prop
  return (
<button style={{ width: buttonwidth }} className={`${classname} button`}><p className='button__text'>{buttonText}</p></button>
  )
}