"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { poppins } from "@/app/ui/fonts";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { _id, mainImage, title, metadata } = blog;

  return (
    <div className={`${poppins.className} animate_top rounded-3xl bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection text-black`}>
      <Link
        href={{
          pathname: `/news/blog-details`,
          query: { id: _id },
        }}
        className="relative block aspect-[368/239]">
        <div className="relative w-full h-64 overflow-hidden rounded-3xl">
          <Image
            className="transform transition-all duration-300 hover:scale-110 object-cover"
            src={mainImage}
            alt={title}
            fill
          />
        </div>
      </Link>

      <div className="px-4">
        <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
          <Link
            href={{
              pathname: `/news/blog-details`,
              query: { id: _id },
            }} >
            {`${title.slice(0, 40)}...`}
          </Link>
        </h3>
        <p className="line-clamp-3 text-black opacity-90">{metadata}</p>
      </div>
    </div>
  );
};

export default BlogItem;
