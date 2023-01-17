import React from 'react'
export const useWidthScreen = () => {
    const [width, setWidth] = React.useState(window.screen.width)
   
    const handleSize = React.useCallback(
     (e : UIEvent) => {
     
       setWidth(window.innerWidth);
     }, [width]
    );
    
      React.useEffect(()=> {
     
       window.addEventListener('resize', handleSize)
    
       return () => {
         window.removeEventListener('resize', handleSize)
        
       }
      }, [width])


      return  { width , setWidth}
}

export const usePositionY = () => {
  const [y, setY] = React.useState(window.scrollY);

    const handleNavigation = React.useCallback(
      (e : any) => {
        const window = e.currentTarget;
    
        setY(window.scrollY);
      }, [y]
    );
    
    React.useEffect(() => {
      setY(window.scrollY);
      
      window.addEventListener("scroll", handleNavigation);
    
      return () => {
        window.removeEventListener("scroll", handleNavigation);
      };
    }, [handleNavigation]);

    return [y, setY]
}
