import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div className="p-10 text-center">
          <p>&copy; Coding King 2024 - {new Date().getFullYear()}. <em>Made with love by <a href="https://www.x.com/hernandoabella">@hernandoabella</a></em></p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
