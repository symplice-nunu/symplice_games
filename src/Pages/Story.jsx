import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

export default function Story() {
  const [stories, setStories] = useState([
    {
      id: 1,
      title: 'Story One',
      content: 'This is the first story content.',
      status: 'Published',
      tiktok: 'Yes',
      instagram: 'No',
      youtube: 'Yes',
    },
    {
      id: 2,
      title: 'Story Two',
      content: 'This is the second story content.',
      status: 'Unpublished',
      tiktok: 'No',
      instagram: 'Yes',
      youtube: 'No',
    },
    {
      id: 3,
      title: 'Story Three',
      content: 'This is the third story content.',
      status: 'Published',
      tiktok: 'Yes',
      instagram: 'Yes',
      youtube: 'Yes',
    },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [tiktokFilter, setTiktokFilter] = useState('');
  const [instagramFilter, setInstagramFilter] = useState('');
  const [youtubeFilter, setYoutubeFilter] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [newStory, setNewStory] = useState({
    id: null,
    title: '',
    content: '',
    status: 'Published',
    tiktok: 'Yes',
    instagram: 'No',
    youtube: 'Yes',
  });

  const handleEdit = (id) => {
    const storyToEdit = stories.find((story) => story.id === id);
    setNewStory({ ...storyToEdit });
    setModalVisible(true);
  };

  const handleDelete = (id) => {
    alert(`Deleting story with ID: ${id}`);
  };

  const handleAddStory = () => {
    setModalVisible(true);
    setNewStory({ title: '', content: '', status: 'Published', tiktok: 'Yes', instagram: 'No', youtube: 'Yes', id: null });
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newStory.id === null) {
      setStories((prevStories) => [
        ...prevStories,
        { ...newStory, id: prevStories.length + 1 },
      ]);
      alert('New story added!');
    } else {
      setStories((prevStories) =>
        prevStories.map((story) => (story.id === newStory.id ? newStory : story))
      );
      alert('Story updated!');
    }
    setModalVisible(false);
    setNewStory({ title: '', content: '', status: 'Published', tiktok: 'Yes', instagram: 'No', youtube: 'Yes', id: null });
  };

  const filteredStories = stories
    .filter((story) =>
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((story) => (statusFilter ? story.status === statusFilter : true))
    .filter((story) => (tiktokFilter ? story.tiktok === tiktokFilter : true))
    .filter((story) => (instagramFilter ? story.instagram === instagramFilter : true))
    .filter((story) => (youtubeFilter ? story.youtube === youtubeFilter : true));

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Stories</h1>

      {/* Search and Filters */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search Stories..."
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
          <option value="Published">Published</option>
          <option value="Unpublished">Unpublished</option>
        </select>

        {/* TikTok Filter Dropdown */}
        <select
          className="px-4 py-2 border border-gray-300 rounded-md ml-4"
          value={tiktokFilter}
          onChange={(e) => setTiktokFilter(e.target.value)}
        >
          <option value="">TikTok</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {/* Instagram Filter Dropdown */}
        <select
          className="px-4 py-2 border border-gray-300 rounded-md ml-4"
          value={instagramFilter}
          onChange={(e) => setInstagramFilter(e.target.value)}
        >
          <option value="">Instagram</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {/* YouTube Filter Dropdown */}
        <select
          className="px-4 py-2 border border-gray-300 rounded-md ml-4"
          value={youtubeFilter}
          onChange={(e) => setYoutubeFilter(e.target.value)}
        >
          <option value="">YouTube</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {/* Add New Story Button */}
        <button
          onClick={handleAddStory}
          className="bg-teal-600 text-white px-6 py-2 rounded-lg ml-4 hover:bg-teal-800 transition duration-300"
        >
          Add New Story
        </button>
      </div>

      {/* Stories Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="px-6 py-3 text-left text-sm font-medium">ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Title</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Content</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium">TikTok</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Instagram</th>
              <th className="px-6 py-3 text-left text-sm font-medium">YouTube</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStories.map((story) => (
              <tr key={story.id} className="bg-white border-b hover:bg-teal-50">
                <td className="px-6 py-4 text-sm text-gray-700">{story.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{story.title}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{story.content}</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      story.status === 'Published' ? 'bg-teal-600' : 'bg-red-600'
                    }`}
                  >
                    {story.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{story.tiktok}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{story.instagram}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{story.youtube}</td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => handleEdit(story.id)}
                    className="text-teal-600 hover:text-teal-800 mr-4"
                  >
                    <FiEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(story.id)}
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

      {/* Modal for Adding/Editing Story */}
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {newStory.id ? 'Edit Story' : 'Add New Story'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Story Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newStory.title}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                  Story Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={newStory.content}
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
                  value={newStory.status}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Published">Published</option>
                  <option value="Unpublished">Unpublished</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="tiktok" className="block text-sm font-medium text-gray-700">
                  TikTok
                </label>
                <select
                  id="tiktok"
                  name="tiktok"
                  value={newStory.tiktok}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                  Instagram
                </label>
                <select
                  id="instagram"
                  name="instagram"
                  value={newStory.instagram}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="youtube" className="block text-sm font-medium text-gray-700">
                  YouTube
                </label>
                <select
                  id="youtube"
                  name="youtube"
                  value={newStory.youtube}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-400 text-white px-6 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-6 py-2 rounded-lg"
                >
                  {newStory.id ? 'Update Story' : 'Add Story'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
