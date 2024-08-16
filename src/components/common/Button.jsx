import PropTypes from 'prop-types';


export function Button({ name, image, className , onClick}) {
    return (
        <div className={className}>
          <button className='relative text-lg font-semibold text-white border-none bg-transparent cursor-pointer p-0 overflow-hidden' onClick ={onClick}>
            <img src={image} className='button-image' alt='' />
            <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full'>{name}</span>
          </button>
        </div>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
};