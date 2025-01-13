import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

export default function Plan() {
  const [plans, setPlans] = useState([
    { id: 1, plan: 'Basic Plan', date: '2025-01-01', dueDate: '2025-02-01', description: 'Basic subscription plan with limited features.', status: 'Active' },
    { id: 2, plan: 'Premium Plan', date: '2025-01-02', dueDate: '2025-02-02', description: 'Premium subscription plan with additional features.', status: 'Inactive' },
    { id: 3, plan: 'Enterprise Plan', date: '2025-01-03', dueDate: '2025-02-03', description: 'Enterprise-level plan with full features and support.', status: 'Active' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [newPlan, setNewPlan] = useState({
    id: null,
    plan: '',
    date: '',
    dueDate: '',
    description: '',
    status: 'Active',
  });

  const handleEdit = (id) => {
    const planToEdit = plans.find((plan) => plan.id === id);
    setNewPlan({ ...planToEdit });
    setModalVisible(true);
  };

  const handleDelete = (id) => {
    alert(`Deleting plan with ID: ${id}`);
  };

  const handleAddPlan = () => {
    setModalVisible(true);
    setNewPlan({ plan: '', date: '', dueDate: '', description: '', status: 'Active', id: null });
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlan((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPlan.id === null) {
      setPlans((prevPlans) => [
        ...prevPlans,
        { ...newPlan, id: prevPlans.length + 1 },
      ]);
      alert('New plan added!');
    } else {
      setPlans((prevPlans) =>
        prevPlans.map((plan) => (plan.id === newPlan.id ? newPlan : plan))
      );
      alert('Plan updated!');
    }
    setModalVisible(false);
    setNewPlan({ plan: '', date: '', dueDate: '', description: '', status: 'Active', id: null });
  };

  const filteredPlans = plans
    .filter((plan) =>
      plan.plan.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plan.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((plan) => (statusFilter ? plan.status === statusFilter : true));

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Plans</h1>

      {/* Search and Status Filter */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search Plans..."
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
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        {/* Add New Plan Button */}
        <button
          onClick={handleAddPlan}
          className="bg-teal-600 text-white px-6 py-2 rounded-lg ml-4 hover:bg-teal-800 transition duration-300"
        >
          Add New Plan
        </button>
      </div>

      {/* Plans Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="px-6 py-3 text-left text-sm font-medium">ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Plan</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Due Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Description</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlans.map((plan) => (
              <tr key={plan.id} className="bg-white border-b hover:bg-teal-50">
                <td className="px-6 py-4 text-sm text-gray-700">{plan.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{plan.plan}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{plan.date}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{plan.dueDate}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{plan.description}</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      plan.status === 'Active' ? 'bg-teal-600' : 'bg-red-600'
                    }`}
                  >
                    {plan.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => handleEdit(plan.id)}
                    className="text-teal-600 hover:text-teal-800 mr-4"
                  >
                    <FiEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(plan.id)}
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

      {/* Modal for Adding/Editing Plan */}
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {newPlan.id ? 'Edit Plan' : 'Add New Plan'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="plan" className="block text-sm font-medium text-gray-700">
                  Plan Name
                </label>
                <input
                  type="text"
                  id="plan"
                  name="plan"
                  value={newPlan.plan}
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
                  value={newPlan.date}
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
                  value={newPlan.dueDate}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newPlan.description}
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
                  value={newPlan.status}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-400 text-white px-6 py-2 rounded-md hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-800"
                >
                  {newPlan.id ? 'Update Plan' : 'Add Plan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
