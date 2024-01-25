import Topics from "./Pages/TopicsView"
import TopicAndComments from "./Pages/TopicAndCommentsView";
import Home from "./Pages/home";
import React, {ComponentType, ReactNode} from "react";
import "./App.css";
import {BrowserRouter, Route, Routes, Navigate, RouteProps} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, orange } from "@mui/material/colors";
import AuthService from "./Logic/AuthService";

const theme = createTheme({
    palette: {
        primary: blue,
        secondary: orange,
    },
});

// interface ProtectedRouteProps extends RouteProps {
//     component: ComponentType<any>;
//     children?: ReactNode;
//     render?: (props: any) => ReactNode;
// }
// const ProtectedRoute : React.FC<ProtectedRouteProps> = ({ component: Component,
//                                                             render,
//                                                             children,
//                                                             ...rest }) => (
//     <Route
//         {...rest}
//         render={(props: any) =>
//             AuthService.isAuthenticatedUser() ? (
//                 Component ? <Component {...props} /> : render ? render(props) : children
//             ) : (
//                 <Navigate to="/login" />
//             )
//         }
//     />
// );
const App: React.FC = () => {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/topics" element={<Topics />} />
                        <Route path="/topics/:id" element={<TopicAndComments />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;
