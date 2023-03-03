import React from 'react';
import {Link, Outlet} from "react-router-dom";

function Template(){

return(

  <>
    <header>
      {/*votre navigation*/}    
    </header>
    <section>
      <Outlet/>
    </section>
    <footer>
      {/*votre footer*/}
    </footer>

  </>
)
}


export default Template;