import React from 'react'


export const Footer = () => {
    let year = new Date().getFullYear();
  return (
    <footer className="py-5 px-5 my-3 bg-dark text-light">
   

    <div className="d-flex justify-content-center py-2  border-top">
      <p>© {year} Company, Inc. All rights reserved.</p>
      
    </div>
  </footer>
  )
}
