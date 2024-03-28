import './Button.scss';

//add onlick, and pass in specific function as prop
export default function Button(prop) {
const {buttonText, classname} = prop
  return (
<button className={`${classname} button`}><p className='button__text'>{buttonText}</p></button>
  )
}