import React, { useState } from 'react';
import './Tips.css';
import NavigationBar from './NavigationBar';

function Tips() {
  const [selectedTip, setSelectedTip] = useState(null);

  const tipsData = {
    "Dog Health Tips": `
      1. Don't overfeed your dog; it will significantly impact their health and happiness. 
      Overweight dogs are more prone to diabetes, arthritis, and heart issues.
      2. Ensure your dog receives regular vet checkups, vaccinations, and parasite control treatments. 
      Prevention is key to maintaining their health.
      3. Brush your dog's teeth regularly or use dental treats to reduce plaque and prevent gum disease.
      4. Check their ears for signs of infection, such as redness, bad odor, or excessive scratching.
    `,
    "Housekeeping and Puppy-Proofing": `
      1. Keep dangerous items like chemicals, sharp objects, and small items (choking hazards) out of reach.
      2. Use baby gates or barriers to limit access to certain areas, especially during the puppy stage.
      3. Secure trash bins to prevent your dog from eating harmful foods like chocolate, grapes, or chicken bones.
      4. Remove toxic plants (e.g., lilies, aloe vera, or poinsettias) from areas your dog can access.
    `,
    "Exercise and Mental Stimulation": `
      1. Daily walks are essential for your dog's physical and mental well-being. 
      Aim for at least 30-60 minutes, depending on their breed and energy level.
      2. Engage in interactive games like fetch, tug-of-war, or hide-and-seek.
      3. Use puzzle toys or treat-dispensing toys to challenge your dog mentally.
      4. If your dog is highly active, consider agility training or dog sports like flyball.
    `,
    "Bonding": `
      1. Spend quality time with your pet every day. This could be through cuddling, grooming, or playtime.
      2. Positive reinforcement training strengthens your bond while teaching your dog good behavior.
      3. Take your dog on outings, like visiting pet-friendly parks or cafes, to create shared experiences.
      4. Learn your dog’s body language to understand their emotions and improve communication.
    `,
    "Training": `
      1. Start with basic commands like 'sit,' 'stay,' 'come,' and 'down.' These commands form the foundation of good behavior.
      2. Use positive reinforcement methods like treats, toys, or verbal praise.
      3. Keep training sessions short and focused, ideally 5-10 minutes each, to avoid overwhelming your dog.
      4. Gradually introduce distractions during training to help your dog stay focused in real-world scenarios.
    `,
    "Winter Care": `
      1. Provide warm bedding and shelter for your dog to prevent hypothermia or frostbite during cold weather.
      2. Protect their paws from ice, snow, and salt by using dog booties or paw balms.
      3. Limit outdoor time during extreme cold, especially for small or short-haired breeds.
      4. Ensure access to clean, unfrozen water, as dehydration can occur even in winter.
    `,
    "Summer Care": `
      1. Always provide fresh water and access to shaded areas when outdoors in the heat.
      2. Avoid walking your dog on hot pavements, which can burn their paw pads. Check the pavement temperature with your hand.
      3. Never leave your dog in a parked car, even for a few minutes, as temperatures can rise dangerously fast.
      4. Consider a cooling vest or mat for high-energy dogs to help them stay comfortable during summer activities.
    `,
    "Dog Safety": `
      1. Always leash your dog in public places to prevent accidents or conflicts with other animals.
      2. Microchip your dog and ensure their ID tag has up-to-date contact information.
      3. Keep household items like electrical cords and small objects (e.g., buttons, coins) out of reach.
      4. Supervise interactions with small children to ensure both the dog and child feel safe.
    `,
  };

  return (
    <div className="tips-container">

      <h1>Dog Care Tips: How to Be the Best Pet Parent</h1>
      <p>
        Whether you've just adopted a new puppy or you've had dogs your whole life, this guide will provide valuable tips 
        to keep your furry friend happy, healthy, and safe. Explore detailed advice for every aspect of pet care.
      </p>

      {/* Main Layout with Video on Left */}
      <div className="main-layout">
        {/* Video Section */}
        <div className="video-section">
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/TOU2JL9mW1k"
            title="Dog Care Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Table of Contents */}
        <div className="toc">
          <h2>Table of Contents</h2>
          <ul>
            {Object.keys(tipsData).map((subtitle, index) => (
              <li key={index} onClick={() => setSelectedTip(subtitle)}>
                {subtitle}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        {selectedTip ? (
          <>
            <h2>{selectedTip}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{tipsData[selectedTip]}</p>
            {selectedTip === "Training" && (
              <div className="video-container">
                <h3>Training Video</h3>
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/eHbcb2EQC88"
                  title="Dog Training Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </>
        ) : (
          <p>Select a topic from the Table of Contents to learn more.</p>
        )}
      </div>

      
    </div>
  );
}

export default Tips;
