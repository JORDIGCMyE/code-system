import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

const RelatedPost = ({ id }: { id: number }) => {

  const filteredPosts = BlogData.filter(post => post._id !== id);
  const shuffledPosts = filteredPosts.sort(() => Math.random() - 0.5);
  const relatedPosts = shuffledPosts.slice(0, 3);

  return (
    <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
      <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
        Related Posts
      </h4>

      <div>
        {relatedPosts.map((post, key) => (
          <div
            className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
            key={key}
          >
            <div className="relative w-50 h-20">
              {post.mainImage ? (
                <Image
                  className="rounded-lg object-cover w-full h-full"
                  src={post.mainImage}
                  alt="Blog"
                  fill
                />
              ) : (
                "No image"
              )}
            </div>
            <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
              <Link
                href={{
                  pathname: `/news/blog-details`,
                  query: { id: post._id },
                }} >
                {`${post.title.slice(0, 40)}...`}
              </Link>
            </h5>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RelatedPost;
