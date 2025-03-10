import React, { useState } from 'react';
import { BoxList } from '../../components/BoxList/BoxList';
import { NavBar } from '../../components/NavBar/NavBar';
import Swal from 'sweetalert2';
import { Boxes } from '../../components/Data/Boxes';
import { Button } from 'react-bootstrap';

function AddBox() {
  const [boxes, setBoxes] = useState(Boxes);

  const handleAddBox = () => {
    Swal.fire({
      title: 'Add New Box',
      text: 'Enter box information',
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Name">
        <input id="swal-input2" class="swal2-input" placeholder="Price">
        <input id="swal-input3" class="swal2-input" placeholder="Image URL">
        <input id="swal-input4" class="swal2-input" placeholder="Status">
      `,
      focusConfirm: false,
      preConfirm: () => {
        const boxName = document.getElementById('swal-input1').value;
        const price = document.getElementById('swal-input2').value;
        const image = document.getElementById('swal-input3').value;
        const status = document.getElementById('swal-input4').value;
        
        if (!boxName || !price || !image || !status) {
          Swal.showValidationMessage('Please enter all information');
          return false;
        }
        
        return { 
          boxName,
          price, 
          image, 
          status 
        };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const newBox = {
          id: boxes.length + 1,
          name: result.value.boxName,
          price: result.value.price,
          image: result.value.image,
          status: result.value.status
        };
        
        setBoxes([...boxes, newBox]); 
        Boxes.push(newBox); 
        Swal.fire('Success', 'Box added successfully', 'success');
      }
    });
  };

  return (
    <div>
      <NavBar />
      <Button  
        className="btn btn-primary my-5" 
        onClick={handleAddBox}
      >
        Add New Box
      </Button>
      <BoxList className="-my-1" boxes={boxes} /> {}
     
    </div>
  );
}

export default AddBox;