import React from 'react'

const DropDownArrow = () => {
  return (
       <svg
                  className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-muted-text pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
  )
}

export default DropDownArrow
