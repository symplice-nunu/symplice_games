import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

export default function Cash() {
  const [cashRecords, setCashRecords] = useState([
    { id: 1, name: 'John Doe', date: '2025-01-01', dueDate: '2025-02-01', type: 'Credit', status: 'Paid', amount: 500 },
    { id: 2, name: 'Jane Smith', date: '2025-01-02', dueDate: '2025-02-02', type: 'Debit', status: 'Unpaid', amount: 300 },
    { id: 3, name: 'Michael Johnson', date: '2025-01-03', dueDate: '2025-02-03', type: 'Credit', status: 'Paid', amount: 700 },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [newCashRecord, setNewCashRecord] = useState({
    id: null,
    name: '',
    date: '',
    dueDate: '',
    type: 'Credit',
    status: 'Paid',
    amount: 0,
    previousAmount: 0, // Store the previous amount for comparison
  });

  const handleEdit = (id) => {
    const cashToEdit = cashRecords.find((cash) => cash.id === id);
    setNewCashRecord({ ...cashToEdit, previousAmount: cashToEdit.amount });
    setModalVisible(true);
  };

  const handleDelete = (id) => {
    alert(`Deleting cash record with ID: ${id}`);
  };

  const handleAddCashRecord = () => {
    setModalVisible(true);
    setNewCashRecord({ name: '', date: '', dueDate: '', type: 'Credit', status: 'Paid', amount: 0, previousAmount: 0, id: null });
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCashRecord((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If it's an update, check if the amount has increased
    const finalAmount = newCashRecord.amount;
    const increaseAmount = finalAmount - newCashRecord.previousAmount;

    if (newCashRecord.id === null) {
      // Adding a new record
      setCashRecords((prevRecords) => [
        ...prevRecords,
        { ...newCashRecord, id: prevRecords.length + 1 },
      ]);
      alert('New cash record added!');
    } else {
      // Editing an existing record
      if (increaseAmount > 0) {
        alert(`Amount increased by: ${increaseAmount}`);
      }
      setCashRecords((prevRecords) =>
        prevRecords.map((cash) => (cash.id === newCashRecord.id ? newCashRecord : cash))
      );
      alert('Cash record updated!');
    }
    setModalVisible(false);
    setNewCashRecord({ name: '', date: '', dueDate: '', type: 'Credit', status: 'Paid', amount: 0, previousAmount: 0, id: null });
  };

  // Filtering logic
  const filteredCashRecords = cashRecords
    .filter((cash) =>
      cash.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cash.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((cash) => (statusFilter ? cash.status === statusFilter : true))
    .filter((cash) => (typeFilter ? cash.type === typeFilter : true));

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Cash Records</h1>

      {/* Search and Filters */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search Cash Records..."
          className="px-4 py-2 border border-gray-300 rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        {/* Status Filter Dropdown */}
        <select
          className="px-4 py-2 border border-gray-300 rounded-md ml-4"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Paid">Paid</option>
          <option value="Unpaid">Unpaid</option>
        </select>

        {/* Type Filter Dropdown */}
        <select
          className="px-4 py-2 border border-gray-300 rounded-md ml-4"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Credit">Credit</option>
          <option value="Debit">Debit</option>
        </select>

        {/* Add New Cash Record Button */}
        <button
          onClick={handleAddCashRecord}
          className="bg-teal-600 text-white px-6 py-2 rounded-lg ml-4 hover:bg-teal-800 transition duration-300"
        >
          Add New Cash Record
        </button>
      </div>

      {/* Cash Records Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="px-6 py-3 text-left text-sm font-medium">ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Due Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Type</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Amount</th> {/* New Column for Amount */}
              <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCashRecords.map((cash) => (
              <tr key={cash.id} className="bg-white border-b hover:bg-teal-50">
                <td className="px-6 py-4 text-sm text-gray-700">{cash.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{cash.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{cash.date}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{cash.dueDate}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{cash.type}</td>
                <td className="px-6 py-4 text-sm text-gray-700">${cash.amount}</td> {/* Display Amount */}
                <td className="px-6 py-4 text-sm text-gray-700">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      cash.status === 'Paid' ? 'bg-teal-600' : 'bg-red-600'
                    }`}
                  >
                    {cash.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => handleEdit(cash.id)}
                    className="text-teal-600 hover:text-teal-800 mr-4"
                  >
                    <FiEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(cash.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Adding/Editing Cash Record */}
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {newCashRecord.id ? 'Edit Cash Record' : 'Add New Cash Record'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newCashRecord.name}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={newCashRecord.date}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={newCashRecord.dueDate}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={newCashRecord.type}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Credit">Credit</option>
                  <option value="Debit">Debit</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                  Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={newCashRecord.amount}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={newCashRecord.status}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-800"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
