import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradintBg";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
              
               "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-8 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  imgClassName,
  titleClassName,
spareImg,
    img,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
               
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
              )}
              style={{
              
                background: "rgb(4,7,27)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="flex items-center justify-center w-full h-full overflow-hidden">
        <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
          {img && (
            <img
          src={img}
          alt="img"
          className={cn(
            "object-cover object-center w-full h-full transition duration-200 group-hover/bento:scale-110",
            imgClassName,
           
          )}
          />
          )}
          </div>
          <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
            
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id===6 && (
          <BackgroundGradientAnimation>
            <div className="absolute inset-0 z-50 flex items-center justify-center w-full h-full">

            </div>
          </BackgroundGradientAnimation>
        )}

        <div>
          
        </div>
          </div>
      
      <div className="transition duration-200 group-hover/bento:translate-x-2">
    
        <div className="">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
