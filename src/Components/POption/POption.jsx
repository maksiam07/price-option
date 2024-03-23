import PropTypes from 'prop-types'
import Feature from '../Features/Feature';

const POption = ({option}) => {

    const {name, price, features} = option

    return (
        <div className='bg-blue-500 rounded-lg flex flex-col p-4'>
            <h2 className='text-center '>
                <span className='text-6xl '>{price}</span>
                
            </h2>
            <h4 className='text-3xl text-center my-8'>{name }</h4>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className='mt-12 bg-green-600 w-full rounded-lg hover:bg-green-900 text-white p-4'>buy now</button>
        </div>
    );
};

POption.propTypes = {
    option: PropTypes.object
}

export default POption;