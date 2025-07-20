import Login from "@/components/userAuth/Login";

interface PageProps {
    searchParams: { redirect?: string };
}

export default function page({ searchParams }: PageProps) {
    const redirectUrl = searchParams.redirect || '/';
    return <Login redirectUrl={redirectUrl} />;
}
