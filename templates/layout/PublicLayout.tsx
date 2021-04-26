import React from "react";
import Footer from "../../organisms/Footer";

const PublicLayout: React.FC<any> = ({ children }) =>
{
  return (
    <>
      <div className="grid grid-areas-mobile-layout md:grid-areas-tablet-layout lg:grid-areas-desktop-layout grid-cols-desktop-layout
      h-full dg-main-bg">
        <main className="grid-in-main min-h-screen w-full">
          {children}
        </main>
        <Footer className="text-center flex grid-in-footer border m-4 w-auto p-4 text-sm text-gray-200 rounded justify-center">
          2021 © DigiChanges
        </Footer>
      </div>
    </>
  );
};

export default PublicLayout;
