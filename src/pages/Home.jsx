import { useState } from 'react';
import React from 'react';
import Header from '../components/Header';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <section className="bg-black from-indigo-700 to-purple-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">Embark on a Literary Journey</h2>
          <p className="text-lg lg:text-xl mb-8">Dive into a world of imagination with our curated collection of books.</p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-300 hover:text-white transition duration-300">Get Started</button>
        </div>
      </section>

    {/* Featured Books Section */}
<section className="py-16 bg-gray-100">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl lg:text-4xl font-bold mb-8">Featured Books</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Featured Book Card 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Book Image */}
        <img src="https://cdn2.penguin.com.au/covers/original/9781473517714.jpg" alt="Book Cover" className="w-full h-40 object-cover mb-4 rounded-md" />
        {/* Book Title */}
        <h3 className="text-xl font-semibold mb-2">Book Title 1</h3>
        {/* Book Author */}
        <p className="text-gray-600">by Author Name</p>
        {/* Add more book details as needed */}
        {/* Example: */}
        {/* <p className="text-gray-600">Genre: Fiction</p> */}
      </div>

      {/* Featured Book Card 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Book Image */}
        <img src="https://th.bing.com/th/id/R.a9678076c6bd634724eeeda1a88929be?rik=K8iZGhPQqcrFaA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-9_dRxkJhwWg%2fU4RMCZvq59I%2fAAAAAAAASMw%2fbs8uuR2pumM%2fs1600%2fHarry%2bPotter%2band%2bthe%2bChamber%2bof%2bSecrets%2bby%2bJ.K.%2bRowling.jpg&ehk=3tb1K7Wdiyb5Q%2bR3GIjw8IwWWL9RcoTlXqy%2f5jVafso%3d&risl=&pid=ImgRaw&r=0" alt="Book Cover" className="w-full h-40 object-cover mb-4 rounded-md" />
        {/* Book Title */}
        <h3 className="text-xl font-semibold mb-2">Book Title 2</h3>
        {/* Book Author */}
        <p className="text-gray-600">by Author Name</p>
        {/* Add more book details as needed */}
      </div>

      {/* Featured Book Card 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Book Image */}
        <img src="https://th.bing.com/th/id/OIP.DZ8USorZ5afzSuBwAUKUUQHaLN?rs=1&pid=ImgDetMain" alt="Book Cover" className="w-full h-40 object-cover mb-4 rounded-md" />
        {/* Book Title */}
        <h3 className="text-xl font-semibold mb-2">Book Title 3</h3>
        {/* Book Author */}
        <p className="text-gray-600">by Author Name</p>
        {/* Add more book details as needed */}
      </div>

      {/* Featured Book Card 4 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Book Image */}
        <img src="https://images.thenile.io/r1000/9780007487288.jpg" alt="Book Cover" className="w-full h-40 object-cover mb-4 rounded-md" />
        {/* Book Title */}
        <h3 className="text-xl font-semibold mb-2">Book Title 4</h3>
        {/* Book Author */}
        <p className="text-gray-600">by Author Name</p>
        {/* Add more book details as needed */}
      </div>
    </div>
  </div>
</section>


      {/* Categories Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Replace with your category items */}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-indigo-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 BookWise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
