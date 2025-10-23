import React, { use } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading';

function PrivateRoute({children}) {
    const { user, loading,  } = use(AuthContext);
    const location = useLocation();

    if(loading){
        return (
          <Loading>
            <span className="loading loading-dots loading-xl"></span>;
          </Loading>
        );
    }
    if(user && user?.email){
       return children;   
    }

    return <Navigate state={loading?.pathname} to='/auth/login'></Navigate>
}

export default PrivateRoute