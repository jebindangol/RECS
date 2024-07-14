import React from "react";

interface TitleProps {}
const Herotitle: React.FC<TitleProps> = ({}) => {
    return (
        <div className="text-white md:w-[400px] text-center font-bold tracking-wider text-xl md:text-3xl">
            EVERYBODY DESERVES A BETTER HOME
        </div>
    )
}
export default Herotitle