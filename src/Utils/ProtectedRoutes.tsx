import { Navigate , Outlet } from "react-router-dom"
 
interface Props {
    isAllowed : boolean 
     children? : JSX.Element
      redirectTo : string 
}
export const ProtectedRoute = ({ isAllowed , children, redirectTo = "/" } : Props)   => {
    
  if (!isAllowed) return <Navigate to={redirectTo} />

  return children ? children : <Outlet/>  ;
};