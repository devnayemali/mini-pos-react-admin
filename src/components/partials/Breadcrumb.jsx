/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";

const Breadcrumb = ({ title = ''}) => {
    return (
        <>
            <Helmet>
                <title>{title} Mini Pos</title>
            </Helmet>
            <h3 className="mt-4">{title}</h3>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard {'->'} {title}</li>
            </ol>
        </>
    );
};

export default Breadcrumb;