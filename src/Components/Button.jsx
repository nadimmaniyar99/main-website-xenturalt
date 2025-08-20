import React from 'react';

import { Link } from 'react-router-dom';

const Button= () => { 



  return (
   <>
   <div className="pagination">
         
           <Link to="/previousPage">
            <button>&larr; Prev</button>
          </Link>
          {/* <a href="portfolio.html"> */}
          <Link to="/nextPage">
            <button >Next &rarr;</button>
          </Link>
          



         

        </div> 
   
   </>
   );
}; 
export default Button;