import Link from "next/link";
export default function NotFound() {
    return (
        <div>
            <h1>Failed To Load</h1>
            <Link href={'/'}>Go Home</Link>
        </div>
    );
}