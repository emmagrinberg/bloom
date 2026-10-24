import {Outlet} from "react-router";

export function RootLayout() {
    return (
        <div className="app">
            <main className="main">
                <Outlet />
            </main>
        </div>
    );
}