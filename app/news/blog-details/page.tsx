'use client';

import React, { Suspense } from "react";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import Image from "next/image";
import { poppins } from "@/app/ui/fonts";
import { useSearchParams } from "next/navigation";
import BlogData from "@/components/Blog/blogData";

const SingleBlogContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const blogPostId = Number(id);

  if (!id) {
    return <div>Loading...</div>;
  }

  const blogPost = BlogData.find((blog) => blog._id.toString() === id.toString());

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <section className={`${poppins.className} pb-20 pt-15 lg:pb-25 lg:pt-25 xl:pb-30 xl:pt-30`}>
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
        <div className="lg:w-2/3">
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              <div className="mb-10 w-full overflow-hidden">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={blogPost.mainImage}
                    alt={blogPost.title}
                    fill
                    className="rounded-md object-cover object-center"
                  />
                </div>
              </div>

              <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                {blogPost.title}
              </h2>

              <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                <li>
                  <span className="text-black dark:text-white">Author: </span> {blogPost.author?.name || "Unknown"}
                </li>
                <li>
                  <span className="text-black dark:text-white">Published On: </span> {blogPost.publishedAt || "Unknown"}
                </li>
                <li>
                  <span className="text-black dark:text-white">Category:</span> {blogPost.tags?.join(", ") || "Uncategorized"}
                </li>
              </ul>

              <div className="blog-details">
                <p className="text-black opacity-90">{blogPost.body}</p>

                {blogPost.body?.includes("<img>") && (
                  <div className="flex flex-wrap gap-5">
                    {blogPost.body.match(/<img[^>]+src="([^">]+)"/g)?.map((imgTag, index) => {
                      const src = imgTag.match(/src="([^">]+)"/)?.[1];
                      return src && (
                        <Image
                          key={index}
                          src={src}
                          width={350}
                          height={200}
                          alt="image"
                        />
                      );
                    })}
                  </div>
                )}
              </div>

              <SharePost tags={blogPost.tags || []} />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-[32%]">
            <RelatedPost id={blogPostId} />
          </div>
        </div>
      </div>
    </section>
  );
};

const SingleBlogPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SingleBlogContent />
    </Suspense>
  );
};

export default SingleBlogPage;
