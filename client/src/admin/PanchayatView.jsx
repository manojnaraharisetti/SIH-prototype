import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PanchayatView.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

const PanchayatView = () => {
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/data/getadmindata", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.data.status === 200) {
          setData(response.data.data);
        } else {
          console.log("Error: Unable to fetch data");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  const header = (
    <div className="table-header">
      <h1 className="text-center mt-2">Image Upload Projects With Mysql database</h1>
      <div className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          placeholder="Search..."
          onInput={(e) => setGlobalFilter(e.target.value)}
        />
      </div>
    </div>
  );

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/data/delete/${id}`);
      if (response.status === 200) {
        // Data deleted successfully, update the data state to remove the deleted row
        const updatedData = data.filter((row) => row.id !== id);
        setData(updatedData);
        console.log(`Deleted row with ID ${id}`);
      } else {
        console.error("Error deleting data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <><li><a href="panchayathome">Home</a></li>
    <div className="container mt-2">
      <DataTable
        value={data}
        header={header}
        globalFilter={globalFilter}
        emptyMessage="No records found"
      >
        <Column field="id" header="ID" sortable />
        <Column field="admin_sellername" header="Seller Name" sortable />
        <Column field="admin_sellernumber" header="Seller Number" sortable />
        <Column field="admin_productname" header="Product Name" sortable />
        <Column field="admin_housenumber" header="House Number" sortable />
        <Column field="admin_street" header="Street" sortable />
        <Column field="admin_city" header="City" sortable />
        <Column field="admin_gender" header="Gender" sortable />
        <Column
          field="admin_image"
          header="Image"
          body={(rowData) => (
            <img
              src={`http://localhost:5000/uploads/${rowData.admin_image}`}
              alt="User Upload"
              style={{ maxWidth: '100px', maxHeight: '100px' }}
            />
          )}
        />
        <Column
          header="Actions"
          body={(rowData) => (
            <div className="action-buttons">
              <button onClick={() => handleDelete(rowData.id)}>d</button>
              <button>u</button>
            </div>
          )}
        />
      </DataTable>
    </div>
    </>
  );
};

export default PanchayatView;
