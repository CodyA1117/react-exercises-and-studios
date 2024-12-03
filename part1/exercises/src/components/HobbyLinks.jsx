import React from 'react';

function HobbyLinks() {
  const hobbyLinks = [
    "https://www.goodreads.com/",
    "https://www.reddit.com/r/programming/",
  ];

  return (
    <div>
      <h2>Hobby Links</h2>
      {hobbyLinks.map((link, index) => (
        <a key={index} href={link} target="_blank" rel="noopener noreferrer">
          {`Visit site ${index + 1}`}
        </a>
      ))}
    </div>
  );
}

export default HobbyLinks;
