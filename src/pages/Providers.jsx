import React, { useState } from 'react';
import './Providers.css';

const Providers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvider, setSelectedProvider] = useState(null);

  const providers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Family Medicine',
      experience: '15 years',
      image: 'https://via.placeholder.com/150x150/0077B6/FFFFFF?text=Dr.+Johnson',
      bio: 'Dr. Johnson is a board-certified family physician with over 15 years of experience in comprehensive primary care. She specializes in preventive medicine and chronic disease management.'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Internal Medicine',
      experience: '12 years',
      image: 'https://via.placeholder.com/150x150/00B4D8/FFFFFF?text=Dr.+Chen',
      bio: 'Dr. Chen focuses on adult medicine, with particular expertise in cardiology and diabetes management. He is committed to providing personalized care for complex medical conditions.'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrics',
      experience: '10 years',
      image: 'https://via.placeholder.com/150x150/CAF0F8/0077B6?text=Dr.+Rodriguez',
      bio: 'Dr. Rodriguez is passionate about children\'s health and development. She provides comprehensive pediatric care from newborns to adolescents, emphasizing preventive care and early intervention.'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Cardiology',
      experience: '18 years',
      image: 'https://via.placeholder.com/150x150/FFD700/0077B6?text=Dr.+Wilson',
      bio: 'Dr. Wilson is a leading cardiologist specializing in preventive cardiology and heart disease management. He combines advanced medical knowledge with compassionate patient care.'
    },
    {
      id: 5,
      name: 'Dr. Lisa Thompson',
      specialty: 'Women\'s Health',
      experience: '14 years',
      image: 'https://via.placeholder.com/150x150/FF69B4/FFFFFF?text=Dr.+Thompson',
      bio: 'Dr. Thompson provides comprehensive women\'s healthcare services, including gynecological care, family planning, and menopause management. She is dedicated to women\'s wellness at every stage.'
    },
    {
      id: 6,
      name: 'Dr. Robert Davis',
      specialty: 'Orthopedics',
      experience: '16 years',
      image: 'https://via.placeholder.com/150x150/32CD32/FFFFFF?text=Dr.+Davis',
      bio: 'Dr. Davis specializes in musculoskeletal disorders and sports medicine. He offers both surgical and non-surgical treatments for joint and bone conditions.'
    }
  ];

  const filteredProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (provider) => {
    setSelectedProvider(provider);
  };

  const closeModal = () => {
    setSelectedProvider(null);
  };

  return (
    <div className="providers">
      <div className="providers-hero">
        <div className="container">
          <h1>Meet Our Providers</h1>
          <p>Experienced healthcare professionals dedicated to your well-being</p>
        </div>
      </div>

      <section className="providers-section">
        <div className="container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="providers-grid">
            {filteredProviders.map(provider => (
              <div key={provider.id} className="provider-card" onClick={() => openModal(provider)}>
                <img src={provider.image} alt={provider.name} />
                <h3>{provider.name}</h3>
                <p className="specialty">{provider.specialty}</p>
                <p className="experience">{provider.experience} experience</p>
                <span className="view-profile">View Profile</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProvider && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <img src={selectedProvider.image} alt={selectedProvider.name} className="modal-image" />
            <h2>{selectedProvider.name}</h2>
            <p className="modal-specialty">{selectedProvider.specialty}</p>
            <p className="modal-experience">{selectedProvider.experience} experience</p>
            <p className="modal-bio">{selectedProvider.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Providers;