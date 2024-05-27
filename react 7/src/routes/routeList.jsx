import Login from "../page/Login";
import Home from "../page/Home";
import DetailMenu from "../page/DetailMenu";
import ProtectedRoute from "../ProtectedRoute"
export const routeList = [
    {
        path : "/",
        element:<Home/>
    },
    {
        path : "/login",
        element:<Login/>
    },
    {
        path : "/menu/id",
        element: (
            <ProtectedRoute>
             <DetailMenu/>
            </ProtectedRoute>
        ),
    },
];

export default routeList;