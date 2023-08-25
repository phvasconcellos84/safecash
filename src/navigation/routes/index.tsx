import React, { useState } from "react";
import { View } from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes = () => {
    const [isAuthenticated, setIsAuthenticaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    );
}

export default Routes;