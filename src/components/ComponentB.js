import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function ComponentB() {
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();
  const photoId = parseInt(window.location.pathname.split('/').pop());

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
      .then(response => response.json())
      .then(data => setPhoto(data));
  }, [photoId]);

  return (
    <div>
      <h1>{photo ? photo.title : 'Загрузка...'}</h1>
      {photo && <img src={photo.url} alt={photo.title} />}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default ComponentB