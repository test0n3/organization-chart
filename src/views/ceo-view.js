import React from 'react';
import InputNameCeo from '../components/input';

function CeoName() {
  const [nameCeo, setNameCeo] = React.useState('');

  return (
    <div>
      {nameCeo ? (
        <div>{ nameCeo }</div>
      ) : (
        <InputNameCeo nameCeo={nameCeo} setNameCeo={setNameCeo} />
      )}
    </div>
  );
}

export default CeoName;
