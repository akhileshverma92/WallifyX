import React, { useEffect, useState } from 'react'
import './Home.css'
import Nav from '../Nav/Nav'



function Home() {
  const apiKey = 'Py7nLVZ1L6PzKtBZmgIbOEtCX2TFOF2OxPokGuigRiGzR6nnlw0rZMys';

  
async function fetchImages(query) {
  const url = `https://api.pexels.com/v1/search?query=${query}&per_page=25`;

  const options = {
      method: 'GET',
      headers: {
          'Authorization': apiKey
      }
  };

  try {
      const response = await fetch(url, options);
      if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);
      return data.photos;
  } catch (error) {
      console.error('Fetching images failed', error);
  }
}

function displayImages(images) {
  const gallery = document.getElementById('image-gallery');
  gallery.innerHTML = ''; // Clear any existing content

  images.forEach(image => {
      const imageItem = document.createElement('div');
      imageItem.className = 'image-item';

      const img = document.createElement('img');
      const btn = document.createElement('button');
      const d_bt= document.createElement('a');

      d_bt.href = image.src.landscape;
      // d_bt.innerHTML = "DOWNLOAD";
      // $("d_btn").attr("download",true);
      btn.innerHTML = image.alt;
      img.src = image.src.landscape;
      img.alt = image.photographer;

      imageItem.appendChild(img);
      imageItem.appendChild(btn);
      imageItem.appendChild(d_bt);
      gallery.appendChild(imageItem);
  });
}



function searchImages() {
  const query = document.getElementById('searchQuery').value; // Get the value of the search query input
  fetchImages(query).then(images => {
      if (images) {
        displayImages(images);
      }
  });
}

const clear =()=>{
  // window.location.reload()
  const cleardata = document.getElementById('image-gallery');
  cleardata.innerHTML = '';

}
  return (
    <>
      <Nav />
      <div className="home">
        <p>Search image you want</p>
        <input type="text" name="" id="searchQuery" placeholder='Search Images'/>
        <div className="btn_sec">
        <button onClick= {searchImages}>GET IMAGES</button>
        <button onClick={clear}>CLEAR</button>
        </div>
       
        <div id='image-gallery'>
        </div>
      </div>
<footer>
 MADE BY DEV AKKYYY
</footer>


    </>
  )
}

export default Home