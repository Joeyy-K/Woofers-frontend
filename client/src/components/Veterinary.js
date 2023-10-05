// npm install react-leaflet
// npm install leaflet
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const veterinariansData = [
    {
      name: 'The Andys Veterinary Hospital',
      address: 'Loresho Ridge, No. 46, Nairobi, Kenya',
      coordinates: [-1.25058256729, 36.7601466179],
      phone: ['020 204 4155', '0722 752 182'],
    },
    {
      name: 'Petville Veterinary Clinic',
      address: 'Mbaruk road, Nairobi, Kenya',
      coordinates: [-1.30312, 36.80127],
      phone: ['+254724950976'],
    },
    {
      name: 'Mobivet Veterinary Clinic',
      address: '75 Olenguruone Avenue, Kileleshwa, Nairobi, Kenya',
      coordinates: [-1.276652, 36.787977],
      phone: ['0727 333 722', '0727 426 449'],
    },
    {
      name: 'Secombe Veterinary Surgeons',
      address: 'Langata Road 469, Nairobi, Kenya, 00502',
      coordinates: [-1.34255, 36.7650986],
      phone: ['0722 720 759'],
    },
    {
      name: 'Hardy Veterinary Clinic',
      address: 'Kongoni Rd, Nairobi',
      coordinates: [-1.3644186, 36.7406679],
      phone: ['0727 347 404', '0768 015 191'],
    },
    {
      name: 'Jakaranda Veterinary Clinic',
      address: 'Rhapta Road Westlands, 44482, Nairobi, Kenya',
      coordinates: [-1.266626, 36.799903],
      phone: ['0720 486 797', '0759 892 994'],
    },
    {
      name: 'Cockar Veterinary Clinic',
      address: 'Rosslyn Lone Tree Estate, Limuru Road',
      coordinates: [-1.2150185, 36.7896544],
      phone: ['0733 666 447', '0733 666 448'],
    },
    {
      name: 'St Austins Rd Veterinary Clinic',
      address: 'Along James Gichuru Road',
      coordinates: [-1.270801, 36.772543],
      phone: ['0722 646 191'],
    },
    {
      name: 'Noble Veterinary Surgeons',
      address: 'Five Star Road, South C',
      coordinates: [-1.324393, 36.811168],
      phone: ['0722 657 719'],
    },
    {
      name: 'Garden Veterinary Services',
      address: 'Runda Evergreen, Woodvale Lane',
      coordinates: [-1.223400, 36.800548],
      phone: ['0722 526 897', '0722 898 522'],
    },
    {
      name: 'Petpals Veterinary Surgeons',
      address: 'Theta Lane, Lenana Road, Kilimani',
      coordinates: [-1.2880428, 36.7964052],
      phone: ['0707 229 056', '0717 761 160'],
    },
    {
      name: 'Vet On Call Healthcare Ltd',
      address: 'Garden Estate',
      coordinates: [-1.2263, 36.8585],
      phone: ['0721 470 028', '0733 532 213'],
    },
];  

function Veterinarians() {
    return (
      <div className="flex bg-white">
        {/* Left Side - Veterinary Locations */}
        <div className="w-1/3 p-4">
          <h1 className="text-2xl font-semibold mb-4">Veterinary Locations</h1>
          <ul>
            {veterinariansData.map((vet, index) => (
              <li key={index} className="mb-4">
                <h2 className="text-lg font-medium">{vet.name}</h2>
                <p className="text-gray-600">{vet.address}</p>
                <p className="text-gray-600">Coordinates: {vet.coordinates.join(', ')}</p>
                <p className="text-gray-600">Contacts: {vet.phone.join(', ')}</p>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Right Side - Map */}
        <div className="w-2/3 h-screen">
          <MapContainer center={[-1.2921, 36.8219]} zoom={12} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {veterinariansData.map((vet, index) => (
              <Marker key={vet.name} position={vet.coordinates}>
                <Popup>{vet.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    );
  }
  
  export default Veterinarians;
