function ButtonFollow(props) {
    return (
       <span>{props.isFollowing ? 'Seguindo': 'Seguir'}</span>
    )
}

export default ButtonFollow;

// import React, { useState } from 'react';

// function ButtonFollow() {
//   const [seguindo, setSeguindo] = useState(false);

//   const handleSeguirClick = () => {
//     setSeguindo(!seguindo);
//   };

//   return (
//     <button onClick={handleSeguirClick}>
//       {seguindo ? 'Seguindo' : 'Seguir'}
//     </button>
//   );
// }

// export default ButtonFollow;
