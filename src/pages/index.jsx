import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import Layout from "@/layout/Layout";

export default function HomePage(props) {
    const { t } = useTranslation("common");
    const { initialLocale } = props._nextI18Next;

    return (
        <Layout initialLocale={initialLocale}>
            <p className='text-3xl font-futuraBlack'>{t("test")}</p>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <Link href='/' locale='en'>
                    <span className='fi fi-gb'></span> English
                </Link>
                <Link href='/' locale='fr'>
                    <span className='fi fi-fr'></span> Français
                </Link>
                <Link href='/' locale='ar'>
                    <span className='fi fi-sa'></span> العربية
                </Link>
            </div>
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
