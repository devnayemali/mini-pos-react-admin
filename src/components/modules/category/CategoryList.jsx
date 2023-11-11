import { Link } from "react-router-dom";
import Breadcrumb from "../../partials/Breadcrumb";

const CategoryList = () => {
    return (
        <>
             <Breadcrumb title="category list" />
            <div className="row justify-content-center mb-5">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between">
                                <h4 className="mb-0">Category</h4>
                                <Link to={'/category/list'} className="btn btn-primary">Category list</Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                                
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

export default CategoryList;