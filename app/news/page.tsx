'use client'

import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { poppins } from "../ui/fonts";
import { motion } from "framer-motion";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { IoMdArrowDroprightCircle,IoMdArrowDropleftCircle } from "react-icons/io";
import { useState } from "react";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(BlogData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedBlogData = BlogData.slice(startIndex, endIndex);

  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <motion.section
        className={` ${poppins.className} mb-20`}
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <h2 className="text-6xl font-bold text-primary mt-20 mb-12 p-4">
            Noticias
          </h2>
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {displayedBlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
          
          {/* Pagination Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center justify-center bg-white hover:scale-105 transition-all duration-300 ease-in-out p-2 rounded-full disabled:opacity-50 hover:bg-primary-dark transition-colors"
            >
              <IoMdArrowDropleftCircle className="text-[#c21d2c]" style={{ fontSize: "3rem" }} />
            </button>
            <span className="flex items-center px-4 py-2">
              {currentPage} de {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center bg-white hover:scale-105 transition-all duration-300 ease-in-out p-2 rounded-full disabled:opacity-50 hover:bg-primary-dark transition-colors"
            >
              <IoMdArrowDroprightCircle className="text-[#c21d2c]" style={{ fontSize: "3rem" }} />
            </button>
          </div>
        </div>
        <ScrollToTopButton />
      </motion.section>
    </>
  );
};

export default BlogPage;