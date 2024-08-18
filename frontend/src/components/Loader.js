import React from 'react'
import spoon from '../assets/spoon-loader.webm'
import '../styles/loader.css'
function Loader() {
  return (
    <div class="loading-spinner">
    <div class="loading-spinner-inner">
      <div class="loading-spinner-circle"></div>
      <div class="loading-spinner-circle"></div>
      <div class="loading-spinner-circle"></div>
      <div class="loading-spinner-circle"></div>
      <div class="loading-spinner-circle"></div>
    </div>
  </div>
  )
}

export default Loader