import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getTechs} from '../../actions/techActions';

const TechSelectOptions = ({techState: {techs, loading}, getTechs}) => {
    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    return (
        !loading &&
        techs !== null &&
        techs.map(({id, firstName, lastName}) => (
            <option key={id} value={`${firstName} ${lastName}`}>
                {firstName} {lastName}
            </option>
        ))
    );
};

TechSelectOptions.propTypes = {
    techState: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    techState: state.tech
});

export default connect(mapStateToProps, {getTechs})(TechSelectOptions);
