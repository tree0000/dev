import React from 'react';

const BooleanCompoent = ({study}) => {
    const message = study ? "공부하자" : "놀자";
    return (
        <div>
            {message}
        </div>
    );
};

export default BooleanCompoent;