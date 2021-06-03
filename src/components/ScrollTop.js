import React, { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollTop(props) {
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return <div></div>;
}

export default ScrollTop;
