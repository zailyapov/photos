import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ComponentA() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, []);

  return (
    <div>
      <h1>Photos</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <Link to={`/componentb/${photo.id}`}>{photo.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default ComponentA