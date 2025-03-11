import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Boxes } from '../../components/Data/Boxes';
import Card from 'react-bootstrap/Card';

function ViewDetailBox() {
  const { id } = useParams();
  const [box, setBox] = useState(null);

  useEffect(() => {
    const foundBox = Boxes.find(box => box.id === parseInt(id));
    setBox(foundBox);
  }, [id]);

  if (!box) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen p-8 flex justify-center items-center bg-gradient-to-r from-blue-100 to-purple-100">
      <Card className="w-96 shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <Card.Img 
          variant="top" 
          src={box.image} 
          className="h-64 object-cover"
        />
        <Card.Body className="p-6 bg-white rounded-b-lg">
          <Card.Title className="text-2xl font-bold text-gray-800 mb-4">
            {box.name}
          </Card.Title>
          <Card.Text className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-semibold">Price:</span>
              <span className="text-green-600 font-bold text-xl">${box.price}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-semibold">Status:</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                box.status === 'Available' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {box.status}
              </span>
            </div>
          </Card.Text>
          <div className="mt-6 flex gap-3">
           
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export { ViewDetailBox };