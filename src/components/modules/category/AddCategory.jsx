import { Link } from "react-router-dom";
import Breadcrumb from "../../partials/Breadcrumb";
import { useState } from "react";

const AddCategory = () => {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <>
            <Breadcrumb title="Add category" />
            <div className="row justify-content-center mb-5">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between">
                                <h4 className="mb-0">Category</h4>
                                <Link to={'/category/list'} className="btn btn-outline-primary">Category list</Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                onChange={handleInputChange}
                                                name="name"
                                                value={formData.name}
                                                id="name"
                                                placeholder="Enter category name"
                                            />
                                            {errors.name && <span className="error-message text-danger">{errors.name}</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label>Slug</label>
                                            <input
                                                type="text"
                                                onChange={handleInputChange}
                                                name="slug"
                                                value={formData.slug}
                                                id="slug"
                                                placeholder="Enter category slug"
                                            />
                                            {errors.slug && <span className="error-message text-danger">{errors.slug}</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label>Serial</label>
                                            <input
                                                type="number"
                                                onChange={handleInputChange}
                                                name="serial"
                                                value={formData.serial}
                                                id="serial"
                                                placeholder="Enter category serial"
                                            />
                                            {errors.serial && <span className="error-message text-danger">{errors.serial}</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label>Status</label>
                                            <select name="status" id="status">
                                                <option value="1">Active</option>
                                                <option value="0">In active</option>
                                            </select>
                                            {errors.serial && <span className="error-message text-danger">{errors.serial}</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label>Description</label>
                                            <textarea name="description" id="description" cols="30" rows="10"></textarea>
                                            {errors.description && <span className="error-message text-danger">{errors.description}</span>}
                                        </div>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-primary">Add category</button>
                                    </div>
                                </div>

                            </form>

                        </div>
                        <div className="card-footer text-muted">
                            2 days ago
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCategory;