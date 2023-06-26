import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <>
    <h2 className="title">{title}</h2>
    {children}
  </>
);
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section;
