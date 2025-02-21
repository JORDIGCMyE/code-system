'use client'

import Button from "../Button";
import { FaCheck } from "react-icons/fa";
import ProductSection from "./ProductSection";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { poppins } from "@/app/ui/fonts";
import Carousel from "../ui/Carousel";
import { CardsComponent } from "../ui/card-component";
import ScrollToTopButton from "../ui/ScrollToTopButton";
import ContactProducts from "../ui/ContactProducts";
import { motion } from "framer-motion";

interface ProductSection {
    title: string;
    description: string;
    content: JSX.Element;
}

interface ProductContent {
    title: string;
    imageSrc: string;
    description: string;
}

interface CopyProduct {
    titleCarrousel: string;
    description: string;
    checkpoints: string[];
    imageSrc: string[];
    buttonText: string;
    buttonLink: string;
    content: ProductSection[];
    content2: ProductContent[];
}

interface ProductTemplateProps {
    copyProduct: CopyProduct;
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ copyProduct }) => {
    return (
        <motion.section
            className={`${poppins.className}`}
            variants={{
                hidden: {
                    opacity: 0,
                    y: -30,
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
            <div className="mt-20 lg:flex justify-center">
                <div className=" overflow-hidden pb-8 pt-8">
                    <Carousel images={copyProduct.imageSrc} />
                </div>
                <div id="infoProduct" className="flex p-8">
                    <div className="m-auto">
                        <h2 className="text-4xl font-extrabold text-black sm:text-5xl pb-8">
                            {copyProduct.titleCarrousel}
                        </h2>
                        <p className="max-w-2xl pb-4 pt-4 text-black">
                            {copyProduct.description}
                        </p>
                        <ul className="mb-6 space-y-4">
                            {copyProduct.checkpoints.map((checkpoint, index) => (
                                <li key={index} className="flex items-center text-black">
                                    <FaCheck className="text-green-500 mr-3" />
                                    {checkpoint}
                                </li>
                            ))}
                        </ul>
                        <Button link="/contact" className="my-4 max-w-64 hover:scale-105 transition-all duration-300 ease-in-out">
                            Contactanos
                        </Button>
                    </div>
                </div>
            </div>
            <div className="pt-8 pb-8">
                <StickyScroll content={copyProduct.content} />
            </div>
            <div className="w-full">
                <CardsComponent items={copyProduct.content2} />
            </div>
            <ScrollToTopButton />
            <ContactProducts />
        </motion.section>
    );
};

export default ProductTemplate;
