import React from "react";

function MobileTopbar() {
  return (
    <div
      className="d-md-none py-2 text-center"
      style={{
        backgroundColor: "#c1eaf4",
        borderBottom: "1px solidrgb(5, 25, 31)",
        zIndex: 1050,
        position: "sticky",
        top: 0,
      }}
    >
      <img
        src="/assets/img/logo horizontal.png"
        alt="Guide-Go"
        height="22"
        style={{ maxWidth: "100px" }}
      />
    </div>
  );
}

export default MobileTopbar;
