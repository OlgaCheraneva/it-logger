import React, {useState, useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {updateLog} from '../../actions/logActions';

const EditLogModal = ({current, updateLog}) => {
    const [message, setMessage] = useState('');
    const [tech, setTech] = useState('');
    const [attention, setAttention] = useState(false);

    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setTech(current.tech);
            setAttention(current.attention);
        }
    }, [current]);

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({html: 'Please enter a message and tech'});
        } else {
            const updatedLog = {
                id: current.id,
                message,
                tech,
                attention,
                date: new Date()
            };

            updateLog(updatedLog);
            M.toast({html: `Log updated by ${tech}`});

            setMessage('');
            setTech('');
            setAttention(false);
        }
    };

    return (
        <div id="edit-log-modal" className="modal modal-size-75">
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select
                            name="tech"
                            value={tech}
                            className="browser-default"
                            onChange={(e) => setTech(e.target.value)}
                        >
                            <option value="" disabled>
                                Select Technician
                            </option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention}
                                    onChange={() => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a
                    href="#!"
                    className="modal-close waves-effect waves-light blue btn"
                    onClick={onSubmit}
                >
                    Enter
                </a>
            </div>
        </div>
    );
};

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    current: state.log.current
});

export default connect(mapStateToProps, {updateLog})(EditLogModal);
