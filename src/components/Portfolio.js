import React, { useState } from "react";

const Portfolio = () => {
  return (
    <div className="my-4 py-4" id="portfolio">
      <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
        Reviews
      </h2>
      <div className="flex justify-center">
        <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
      </div>

      <div className="px-4" data-aos="fade-down" data-aos-delay="600">
        <div className="flex gap-5 overflow-x-auto flex-nowrap">
          {/* Dummy Reviews */}
          {[
            {
              name: "John Doe",
              rating: 5,
              review:
                "Excellent product! Highly recommended! Excellent product! Highly recommended! Excellent product! Highly recommended! Excellent product! Highly recommended! Excellent product! Highly recommended! Excellent product! Highly recommended!",
            },
            {
              name: "Jane Smith",
              rating: 4,
              review: "Great tool but room for improvement.",
            },
            {
              name: "Michael Johnson",
              rating: 5,
              review: "Amazing experience! Will use again!",
            },
            {
              name: "Emily Davis",
              rating: 4,
              review: "Workflow improved significantly!",
            },
            {
              name: "Daniel Lee",
              rating: 5,
              review: "Seamless integration and easy to use!",
            },
            {
              name: "Sophia Brown",
              rating: 5,
              review: "Solid product with helpful features!",
            },
          ].map((review, index) => {
            // Get initials from the name
            const initials = review.name
              .split(" ")
              .map((word) => word[0])
              .join("");
            return (
              <div
                key={index}
                className="bg-white w-64 lg:w-80 transition-all ease-in-out duration-400 text-gray-700 hover:scale-105 rounded-lg shadow-lg p-6"
                style={{ height: "auto" }} // Auto height for content
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 text-white rounded-full mr-3 flex items-center justify-center font-semibold text-xl">
                    {initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{review.name}</h4>
                    <div className="flex items-center">
                      <span className="text-yellow-400">
                        {"⭐".repeat(review.rating)}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-md font-medium leading-5 text-gray-600">
                  <ReviewText text={review.review} />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Component to handle text truncation and "Read More"
const ReviewText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <span>
        {isExpanded
          ? text
          : `${text.slice(0, 100)}...`} {/* Truncate after 100 chars */}
      </span>
      {text.length > 100 && (
        <button
          onClick={toggleReadMore}
          className="text-blue-600 ml-2 cursor-pointer"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default Portfolio;
