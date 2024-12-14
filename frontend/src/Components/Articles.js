import React, { useState } from 'react';
import './Articles.css'; // Import the external CSS


function Articles() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articlesData = {
    "Power of Pets": `
      Discover how pets contribute positively to mental health, offering therapeutic benefits to people of all ages. 
      The simple act of petting a dog or cat can boost your mood and lower stress levels, making pets an essential part 
      of mental well-being.
    `,
    "The Importance of Pets in Our Lives": `
      This article explores how pets improve quality of life, reduce feelings of loneliness, and provide emotional support.
      Learn more about the roles pets play in our lives and how they help in various stages of life.
    `,
    "Mood-Boosting Power of Dogs": `
      Dogs are known to be the best companions, but did you know that spending time with a dog can increase levels of happiness and reduce anxiety? 
      This article delves into the science behind dogs' positive impact on mood.
    `,
    "Pets in Africa": `
      In Africa, pets play an important role in society as both companions and protectors. 
      This article highlights how pets are integrated into African communities and the role they play in everyday life.
    `,
  };

  return (
    <div className="Article-container">

      <h1>Learn More About Pets</h1>
      <p>
        Here are some more articles about pets to learn more about the profound effects pets have on our well-being, 
        health, and lives in general. Explore these insightful reads to discover how pets can enrich your life!
      </p>

      {/* Main Layout with Article Links */}
      <div className="main-layout">
        {/* Article Links Section */}
        <div className="toc">
          <h2>Article Links</h2>
          <ul>
            <li>
              <a href="https://newsinhealth.nih.gov/2018/02/power-pets" target="_blank" rel="noopener noreferrer">
                Power of Pets
              </a>
            </li>
            <li>
              <a href="https://www.transitionslifecare.org/2020/05/27/the-importance-of-pets-in-our-lives/" target="_blank" rel="noopener noreferrer">
                The Importance of Pets in Our Lives
              </a>
            </li>
            <li>
              <a href="https://www.helpguide.org/wellness/pets/mood-boosting-power-of-dogs" target="_blank" rel="noopener noreferrer">
                Mood-Boosting Power of Dogs
              </a>
            </li>
            <li>
              <a href="https://theconversation.com/africa/topics/pets-1701" target="_blank" rel="noopener noreferrer">
                Pets in Africa
              </a>
            </li>
          </ul>
        </div>

        {/* Content Section */}
        <div>
          {selectedArticle ? (
            <>
              <h2>{selectedArticle}</h2>
              <p style={{ whiteSpace: 'pre-line' }}>{articlesData[selectedArticle]}</p>
            </>
          ) : null}
        </div>
      </div>

      {/* Video Link Section Below Content */}
      <div className="video-link-section">
        <h3>Watch More About Pets</h3>
        <div className="video-container">
          <a href="https://www.youtube.com/@AnimalWised" target="_blank" rel="noopener noreferrer">
            Visit AnimalWised YouTube Channel
          </a>
        </div>
      </div>
    </div>
  );
}

export default Articles;
