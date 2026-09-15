import React from 'react';
import { useParams } from 'react-router-dom';

const UseParamsComp = () => {
  const params = useParams();

  return (
    <div>UseParamsComp
        Parameter id: {params.id}
    </div>
  );
};

export default UseParamsComp;