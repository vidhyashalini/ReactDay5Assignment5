import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {
		
        const userToken = sessionStorage.getItem('user-token');
		
        if (!userToken || userToken === 'undefined') 
		{
            setIsLoggedIn(false);                
            return navigate('/Login?returnUrl=' + props.returnUrl);
         //   return navigate('/Login');
        }
        setIsLoggedIn(true);
    }

    useEffect(() => {
       // alert(props.returnUrl);       
        checkUserToken();
    }, [isLoggedIn]);

    return (
        <>
            {
                isLoggedIn ? props.children : null
            }
        </>
    );
}

export default ProtectedRoute;