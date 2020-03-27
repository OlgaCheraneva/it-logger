import React, {useEffect, useState} from 'react';

export const TechListModal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
    }, []);

    const getTechs = async () => {
        setLoading(true);
        const res = await fetch('/techs');
        const data = await res.json();
        setTechs(data);
        setLoading(false);
    };

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading &&
                        techs.map((tech) => (
                            <li className="collection-item">
                                {tech.firstName}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};
