import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <p className="text-center">
          &copy; My Company {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
