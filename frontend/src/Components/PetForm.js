import React, { useState } from 'react';
import './PetForm.css';

const PetForm = () => {
  const [formData, setFormData] = useState({
    petType: '',
    petPhotos: ['', '', ''],
    name: '',
    age: '',
    sex: '',
    breed: '',
    keyFacts: [],
    location: '',
  });

  const citiesInTunisia = [
    'Tunis', 'Sfax', 'Sousse', 'Ettadhamen', 'Kairouan',
    'Gabès', 'Bizerte', 'Ariana', 'Gafsa', 'Monastir',
    'Ben Arous', 'Kasserine', 'Médenine', 'Nabeul', 'Tataouine',
    'Beja', 'Manouba', 'Jendouba', 'Zaghouan', 'Siliana',
    'Kebili', 'Tozeur', 'Mahdia', 'Sidi Bouzid'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (index, file) => {
    const updatedPhotos = [...formData.petPhotos];
    updatedPhotos[index] = file;
    setFormData({ ...formData, petPhotos: updatedPhotos });
  };

  const handleKeyFactChange = (e) => {
    const { value, checked } = e.target;
    const updatedKeyFacts = checked
      ? [...formData.keyFacts, value]
      : formData.keyFacts.filter((fact) => fact !== value);

    setFormData({ ...formData, keyFacts: updatedKeyFacts });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <form className="pet-form" onSubmit={handleSubmit}>
      <h2>Give a Pet</h2>

      {/* Pet Type */}
      Are you giving a dog or cat?
      <label>
        
        <select name="petType" value={formData.petType} onChange={handleChange} required>
          <option value="" disabled>Select</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
        </select>
      </label>
            {/* Location */}
            <h3>Pet's Location</h3>
            City:
      <label className='location'>
        
        <select name="location" value={formData.location} onChange={handleChange} required>
          <option value="" disabled>Select a city</option>
          {citiesInTunisia.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>

      {/* Pet Photos */}
      <div className="photo-section">
  <h3>Photos</h3>
  <p>You can add up to 3 photos (jpg, png, jpeg). For the best results, please upload landscape or square images.</p>
  <div className="photo-grid">
    {formData.petPhotos.map((photo, index) => (
      <div key={index} className="photo-box">
        <label htmlFor={`photo-${index + 1}`} className="photo-label">
          <input
            type="file"
            id={`photo-${index + 1}`}
            accept="image/*"
            onChange={(e) => handlePhotoChange(index, e.target.files[0])}
          />
          <div className={`photo-placeholder ${photo ? 'uploaded' : ''}`}>
            {!photo ? (
              <>
                <i className="bi bi-image placeholder-icon"></i>
                <span>{index + 1}{index === 0 ? '. Main' : ''}</span>
              </>
            ) : (
              <img
                src={URL.createObjectURL(photo)}
                alt={`Uploaded Preview ${index + 1}`}
                className="uploaded-photo"
              />
            )}
          </div>
        </label>
      </div>
    ))}
  </div>
</div>




      {/* Characteristics */}
      <h3>Characteristics</h3>
      <div className='characteristics'>
      
      <div>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Age:
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </label>
      </div>
      <div>
      <label>
        Sex:
        <input
          type="text"
          name="sex"
          value={formData.sex}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Breed:
        <input
          type="text"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
          required
        />
      </label>
      </div>
      </div>
      {/* Key Facts */}
      <h3>Key Facts</h3>
      <div className="key-facts">
        <label>
          <input
            type="checkbox"
            
            value="Can live with other dogs"
            checked={formData.keyFacts.includes('Can live with other dogs')}
            onChange={handleKeyFactChange}
          />
          Can live with other dogs
        </label>
        <label>
          <input
          
            type="checkbox"
            value="Can live with other cats"
            checked={formData.keyFacts.includes('Can live with other cats')}
            onChange={handleKeyFactChange}
          />
          Can live with other cats
        </label>
        <label>
          <input
            type="checkbox"
            
            value="Friendly with children and cats"
            checked={formData.keyFacts.includes('Friendly with children and cats')}
            onChange={handleKeyFactChange}
          />
          Friendly with children and cats
        </label>
        <label>
          <input
            type="checkbox"
            
            value="Microchipped"
            checked={formData.keyFacts.includes('Microchipped')}
            onChange={handleKeyFactChange}
          />
          Microchipped
        </label>
        <label>
          <input
            type="checkbox"
            
            value="House-trained"
            checked={formData.keyFacts.includes('House-trained')}
            onChange={handleKeyFactChange}
          />
          House-trained
        </label>
      </div>

      {/* description section */}

      <div className="description-section">
  <h3>Description</h3>
  <textarea
    name="description"
    value={formData.description || ''}
    onChange={handleChange}
    placeholder="Write a description about your pet (e.g., personality, special needs, behavior)."
    rows="5"
    required
  ></textarea>
</div>

{/* fee section */}
<div className="fees-section">
  <h3>Adoption Fees</h3>
  <div className="fees-options">
    <label>
      <input
        type="radio"
        name="fee"
        value="Free"
        checked={formData.fee === 'Free'}
        onChange={handleChange}
        required
      />
      Free
    </label>
    <label>
      <input
        type="radio"
        name="fee"
        value="SetFee"
        checked={formData.fee === 'SetFee'}
        onChange={handleChange}
      />
      Set a Fee
    </label>
    </div>

    {formData.fee === 'SetFee' && (
      <input
        className='enterfee'
        type="number"
        name="feeAmount"
        value={formData.feeAmount || ''}
        onChange={handleChange}
        placeholder="Enter fee amount"
        min="0"
      />
    )}
  
</div>



      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default PetForm;