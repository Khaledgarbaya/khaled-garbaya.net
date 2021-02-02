import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      id="mcjs"
      dangerouslySetInnerHTML={{
        __html: `
!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/19b98089cf0ee082f3fef5efd/7efeafdd76ac487560bda5256.js");
          `,
      }}
    />,
  ]);
};
