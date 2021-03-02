import React, { useEffect, useState } from "react";
import { Breadcrumbs } from "nextjs-breadcrumbs";

const Breadcrumb = () => {
  const breadcrumb = Breadcrumbs();
  const values = breadcrumb?.props?.children?.props?.children[1];

  return (
    <ul className="flex text-gray-500 text-sm lg:text-base p-5">
      {values &&
        values.map((value, index, array) => {
          const isTheLast = index === array.length - 1;
          // console.log("VALUE", value?.props?.children?.props?.href);
          return (
            <li key={value.key} className="inline-flex items-center">
              <a href={value?.props?.children?.props?.href}>
                {value?.props?.children?.props?.children}
              </a>
              {!isTheLast && (
                <svg
                  className="h-5 w-auto text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default Breadcrumb;
