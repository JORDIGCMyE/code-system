'use client'
import { cn } from "@/lib/utils";
import Image from "next/image";

export const CardsComponent = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        imageSrc: string;
    }[];
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-10 m-auto justify-center 2xl:w-[1350px]",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="relative group block p-4 h-full w-full"
                >
                    <Card imageSrc={item.imageSrc}>
                        <Image
                            src={item.imageSrc}
                            width={300}
                            height={200}
                            alt="Starboard Desktop App"
                            className="w-full rounded-3xl shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
                            priority
                        />
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription className="text-black opacity-80 text-base max-w-full">
                            {item.description}
                        </CardDescription>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
    imageSrc: string;
}) => {
    return (
        <div
            className={cn(
                "w-full rounded-2xl overflow-hidden bg-white",
                className
            )}
        >
            <div className="p-4">{children}</div>
        </div>
    );
};

export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4
            className={cn(
                "text-black text-lg sm:text-xl font-bold tracking-wide mt-2",
                className
            )}
        >
            {children}
        </h4>
    );
};

export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-2 text-black text-sm leading-relaxed",
                className
            )}
        >
            {children}
        </p>
    );
};