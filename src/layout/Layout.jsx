import NextTopLoader from "nextjs-toploader";

export default function Layout({ children, initialLocale }) {
    // Put Header or Footer around the children element
    // Example
    return (
        <main dir={initialLocale === "ar" ? "rtl" : "ltr"}>
            {/* <Navbar /> */}
            {children}
            {/* <Footer /> */}
            <NextTopLoader color='#6658F8' showSpinner={false} />
        </main>
    );
}
