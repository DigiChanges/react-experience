import React from "react";
import Footer from "../../organisms/Footer";

const PublicLayout: React.FC<any> = ({ children }) =>
{
  return (
    <>
      <div className="grid grid-areas-md-private-layout h-full text-gray-700 body-font bg-gray-900">
        <main className="grid-in-main min-h-screen w-full">
          {children}
        </main>
        <Footer className="flex grid-in-footer border m-4 w-auto p-4 text-sm text-gray-200 rounded justify-center">
          2021 © DigiChanges
        </Footer>
      </div>
    </>
  );
};

export default PublicLayout;
