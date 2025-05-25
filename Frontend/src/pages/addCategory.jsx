import React, { useState } from "react";

const AddCategoryPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    parent: "none",
    description: "",
    image: null,
  });

  const [categories, setCategories] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const parentCategories = [
    { value: "none", label: "None" },
    { value: "grow-media", label: "Grow Media" },
    { value: "net-cups", label: "Net Cups" },
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      name: formData.name,
      parent: formData.parent,
      description: formData.description,
    };
    setCategories((prev) => [...prev, newCategory]);
    setFormData({
      name: "",
      parent: "none",
      description: "",
      image: null,
    });
    setSuccessMessage("Category added successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-6 gap-6">
      <div className="lg:w-1/2">
        <div className="card bg-base-100 shadow-xl p-8">
          <h2 className="card-title mb-6 text-2xl font-semibold">Add New Category</h2>
          {successMessage && <div className="alert alert-success mb-4">{successMessage}</div>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="label mb-1">
                <span className="label-text text-base font-medium">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label mb-1">
                <span className="label-text text-base font-medium">Parent Category</span>
              </label>
              <select
                name="parent"
                value={formData.parent}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                {parentCategories.map((cat) => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="label mb-1">
                <span className="label-text text-base font-medium">Description</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                rows="3"
              />
            </div>

            <div>
              <label className="label mb-1">
                <span className="label-text text-base font-medium">Image</span>
              </label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
                className="file-input file-input-bordered w-full"
              />
              {formData.image && (
                <div className="mt-4">
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img
                        src={URL.createObjectURL(formData.image)}
                        alt="Preview"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Add Category
            </button>
          </form>
        </div>
      </div>

      <div className="lg:w-1/2">
        <div className="card bg-base-100 shadow-xl p-8">
          <h2 className="card-title mb-6 text-2xl font-semibold">Existing Categories</h2>
          {categories.length === 0 ? (
            <p className="text-gray-500">No categories added yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Parent</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((cat, i) => (
                    <tr key={i}>
                      <td>{cat.name}</td>
                      <td>{cat.parent}</td>
                      <td>{cat.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCategoryPage;
