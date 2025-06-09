import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 py-4 border-t">
      <p>&copy; {new Date().getFullYear()} Patient Directory App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;