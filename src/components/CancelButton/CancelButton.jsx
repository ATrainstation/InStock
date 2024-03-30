import React from 'react'
import "./CancelButton.scss";


function CancelButton({link}) {
  return (
    
    
    <button className="cancel-button" onClick={link}>
      Cancel
    </button>
    
  )
}

export default CancelButton