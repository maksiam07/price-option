import PropTypes from 'prop-types'
import { FaCheck } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-2'> <FaCheck className='text-green-500'></FaCheck> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;