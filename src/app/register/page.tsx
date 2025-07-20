import Register from "@/components/userAuth/Register";

interface PageProps {
    searchParams: { redirect?: string };
}

export default function page({ searchParams }: PageProps) {
    const redirectUrl = searchParams.redirect || '/';
    return <Register redirectUrl={redirectUrl} />;
}
