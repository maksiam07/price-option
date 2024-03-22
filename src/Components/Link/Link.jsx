import PropTypes from 'prop-types';

const Link = ({rout}) => {
    return (
        <li className="mr-10">
            <a href={rout.path}>{rout.name}</a>
        </li>
    );
};

Link.propTypes ={
    rout: PropTypes.object
}

export default Link;