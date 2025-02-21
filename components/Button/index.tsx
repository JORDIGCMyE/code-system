import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    link?: string;
    className?: string;
    [key: string]: unknown;
}


const Button = ({ children, link, className, ...props }: ButtonProps) => {
    const buttonContent = (
        <button
            role="button"
            {...props}
            className={`${className || ""} px-4 py-2.5 font-medium text-sm text-center rounded-3xl inline-block bg-[#c21d2c] text-white shadow hover:bg-[#D5202F] transition duration-300 ease-in-out`}
        >
            {children}
        </button>
    );

    return link ? (
        <Link href={link} passHref>
            {buttonContent}
        </Link>
    ) : (
        buttonContent
    );
};

export default Button;
