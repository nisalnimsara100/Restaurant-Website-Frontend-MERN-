import React from 'react'

const AboutUs = () => {
  return (
    <div className='pt-12 mb-0 pb-0'>
      <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header Section */}
      {/* <div
        className="bg-cover bg-center h-96 flex flex-col justify-center items-center text-white rounded-lg shadow-lg"
        style={{ backgroundImage: "url(`/images/sri-lanka-banner.jpg`)" }}
      >
        <h1 className="text-5xl font-bold mb-4">About Gimsara Bojunhala</h1>
        <p className="text-2xl">Where Tradition Meets Taste</p>
      </div> */}

      {/* Our Story Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-green mb-6">Our Story</h2>
        <p className="text-lg leading-relaxed">
          Gimsara Bojunhala was born out of a love for authentic Sri Lankan cuisine. Our founders,
          inspired by the rich culinary traditions of Sri Lanka, set out to create a dining experience
          that brings the flavors of the island to your plate. From our humble beginnings as a small
          family-run kitchen, we have grown into a beloved restaurant that celebrates the essence of
          Sri Lankan culture through food.
        </p>
      </div>

      {/* Meet the Team Section */}
      <div className="bg-orange-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-green mb-8 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="../../public/images/chef1.jpeg"
                alt="Chef Anura"
                className="w-48 h-48 rounded-full mx-auto border-4 text-green"
              />
              <h3 className="text-2xl font-semibold mt-4">Chef Sanjaya</h3>
              <p className="text-gray-600">Head Chef</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="../../public/images/chef3.jpeg"
                alt="Chef Nimali"
                className="w-48 h-48 rounded-full mx-auto border-4 text-green"
              />
              <h3 className="text-2xl font-semibold mt-4">Chef Nimali</h3>
              <p className="text-gray-600">BBQ Chef</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="../../public/images/chef2.jpeg"
                alt="Chef Sanjaya"
                className="w-48 h-48 rounded-full mx-auto border-4 text-green"
              />
              <h3 className="text-2xl font-semibold mt-4">Chef Lalith</h3>
              <p className="text-gray-600">Sous Chef</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sri Lankan Culture Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-green mb-6">Celebrating Sri Lankan Culture</h2>
        <p className="text-lg leading-relaxed">
          At Gimsara Bojunhala, we believe that food is more than just sustenance—it is a way to
          connect with our heritage. Each dish is crafted using traditional recipes and fresh,
          locally sourced ingredients, ensuring an authentic taste of Sri Lanka. From our signature
          hoppers to our aromatic curries, every bite tells a story of our island is vibrant culture.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="bg-green py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Experience the Taste of Sri Lanka</h2>
          <p className="text-lg text-orange-100 mb-8">
            Ready to explore our menu? Order now or visit us to enjoy a culinary journey like no other!
          </p>
          <button className="bg-white text-green px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition duration-300">
            Explore Menu
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutUs
