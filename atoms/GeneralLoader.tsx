import React from 'react'

const GeneralLoader = ({
  cssScreenContainer,
  cssSpinnerContainer,
  cssSpinner 
}) => {
  return (
    <div className={ cssScreenContainer }>
      <div className={ cssSpinnerContainer }>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="grey"
          className="animate-spin w-1/2 ml-1/4"
          height='96px'
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
        </svg>
        <p className={ cssSpinner }>Loading...</p>
      </div>
    </div>
  )
}

export default GeneralLoader
