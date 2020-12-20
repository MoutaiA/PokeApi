import React from 'react';

function CardFailedLoading() {
    return (
        <div>
            <div className="failed-card-header">
                <div className="warning">
                    <img src="images/warning.png" alt="Logo of a warning" />
                    <h1>You've entered an invalid Pokémon or no Pokémon at all !</h1>
                    <img src="images/warning.png" alt="Logo of a warning" />
                </div>
                <div>Please enter a valid Pokémon in the search bar.</div>
            </div>
        </div>
    );
}

export default CardFailedLoading;