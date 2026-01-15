import React, {ReactNode} from 'react'

interface Props{
    children: ReactNode
    bgColor?: string | undefined
    href?: string | undefined
}

const SocialButton: React.FC<Props> = ({children, bgColor="black", href = "#"}) => {
  
  let bgHoverColorClass;
  
  switch(bgColor){
    case "twitter":
        bgHoverColorClass = "hover:bg-twitter";
        break;
    case "linkedin":
        bgHoverColorClass = "hover:bg-linkedin";
        break;
    case "instagram":
        bgHoverColorClass = "hover:bg-instagram";
        break;
    case "github":
        bgHoverColorClass = "hover:bg-github";
        break;
    default:
        bgHoverColorClass = "hover:bg-black";
        break;
  }

  
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
    <button className={`group h-12 w-12 bg-white ${bgHoverColorClass} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center`}>
        <div className=' fill-black group-hover:fill-white transition-colors duration-200 ease-in-out'>
        {children}
    </div>
    </button>
    </a>
  )
}

export default SocialButton