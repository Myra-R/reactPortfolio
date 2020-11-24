import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./footer.css";
function footer() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.


  return (
    <div class="footer">
  <p>Footer</p>
</div>
  );
}

export default footer;
