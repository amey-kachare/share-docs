import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import {ListGroup,ListGroupItem} from 'reactstrap'

const Footer = () => {
  return (
    <footer class="footer bg-slate-400 text-white w-full h-50 flex bottom-0 fixed"> 
  <div class="container mx-auto px-6 py-4"> 
    <div class="flex"> 
      <div class="w-full md:w-1/3"> 
        <h6 class="text-lg font-bold">About Us</h6> 
	<p class="mt-2 text-gray-100">This is a file sharing project where files can be shared locally with encryption.</p> 
      </div> 
      <div class="w-full md:w-1/3 mt-6 md:mt-0"> 
        <h6 class="text-lg font-bold">Quick Links</h6> 
        <ul class="mt-2 text-gray-100 space-y-2"> 
          <li><a href="/">Dashboard</a></li> 
          <li><a href="/login">Login</a></li> 
          <li><a href="/register">Register</a></li> 
        </ul> 
      </div> 
      <div class="w-full md:w-1/3 mt-6 md:mt-0"> 
        <h6 class="text-lg font-bold">Contact</h6> 
        <p class="mt-2 text-gray-100">123, Main Street, Karad</p> 
        <p class="mt-2 text-gray-100">Email: kachareaamey@gmail.com</p> 
      </div> 
    </div> 
    <hr class="border-t border-gray-200 mt-6"/> 
    <div class="flex justify-between items-center mt-6"> 
      <div> 
        <p class="text-sm text-gray-100">© 2024 . All rights reserved.</p> 
      </div> 
      <div class="flex space-x-4"> 
        <a href="#"><i class="fab fa-facebook-f"></i></a> 
        <a href="#"><i class="fab fa-twitter"></i></a> 
        <a href="#"><i class="fab fa-instagram"></i></a> 
      </div> 
    </div> 
  </div> 
</footer>
  )
}

export default Footer
