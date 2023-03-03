import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    return {
        redirect: {
            destination: "/home",
            permanent: false,
        },
    };

};

export default function Index() { }