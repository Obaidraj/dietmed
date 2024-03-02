import { Outlet, Navigate } from 'react-router-dom'
import ProtectedLayout from '../../Layout/ProtectedLayout'

const PrivateRoutes = () => {
    let auth = {'token': true}
    return(
        auth.token ?<ProtectedLayout> <Outlet/></ProtectedLayout> : <Navigate to="/auth/login"/>
    )
}

export default PrivateRoutes