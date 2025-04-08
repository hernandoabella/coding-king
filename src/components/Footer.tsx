import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div className="p-10 text-center">
          <p>&copy; CodingKing {new Date().getFullYear()}. Made with ❤️ by @hernandoabella</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
