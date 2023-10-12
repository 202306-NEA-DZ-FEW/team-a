import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";

import "@/styles/globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ToastContainer />
            <Component {...pageProps} />;
        </>
    );
}

export default appWithTranslation(MyApp);
