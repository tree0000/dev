import React from 'react';
function MovieComponent(props){
const { title, open, img } = props;
return (
    
<div>
<h1>제목 : {title} </h1>
<h1>개봉 : {open} </h1>
<img src={img} alt={title} width="250px" />
<hr/>
</div>
);
};
export default MovieComponent;

