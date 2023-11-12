import { LinearProgress } from "@mui/material";

export default function Loading() {
    return (
        <main className="text-center">
            <h1 className="m-5 font-sriracha text-3xl">Loading your result...</h1>
            <LinearProgress color="inherit"/>
        </main>
    );
}