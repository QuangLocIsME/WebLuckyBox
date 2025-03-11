import React, { useState } from 'react';
import { Boxes } from '../Data/Boxes';
import Pagination from 'react-bootstrap/Pagination';
import { useNavigate } from 'react-router-dom';

function BoxList() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Boxes.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(Boxes.length / itemsPerPage);
  const handleBoxClick = (boxId) => {
    navigate(`/box/${boxId}`);
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Tên Lucky Box</th>
            <th className="border px-4 py-2">Giá</th>
            <th className="border px-4 py-2">Hình</th>
            <th className="border px-4 py-2">Trạng Thái</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((box) => (
            <tr 
              key={box.id} 
              className="text-center hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => handleBoxClick(box.id)}
            >
              <td className="border px-4 py-2">{box.id}</td>
              <td className="border px-4 py-2">{box.name}</td>
              <td className="border px-4 py-2">{box.price}</td>
              <td className="border px-4 py-2">
                <img
                  src={box.image}
                  alt={box.name}
                  className="w-20 h-20 object-cover mx-auto rounded-lg"
                />
              </td>
              <td className="border px-4 py-2">{box.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-4 flex justify-center">
        <Pagination>
          <Pagination.First 
            onClick={() => handlePageChange(1)} 
            disabled={currentPage === 1}
          />
          <Pagination.Prev 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {paginationItems}
          <Pagination.Next 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last 
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  );
}

export { BoxList };