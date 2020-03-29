import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import TechItem from './TechItem';
import {getTechs} from '../../actions/techActions';

const TechListModal = ({techState: {techs, loading}, getTechs}) => {
    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading &&
                        techs !== null &&
                        techs.map((tech) => (
                            <TechItem tech={tech} key={tech.id} />
                        ))}
                </ul>
            </div>
        </div>
    );
};

TechListModal.propTypes = {
    techState: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    techState: state.tech
});

export default connect(mapStateToProps, {getTechs})(TechListModal);
