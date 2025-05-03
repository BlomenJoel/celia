import { redirect } from 'next/navigation';

export default function NotFound() {
    // as soon as this “not-found” UI is hit, we bounce home
    redirect('/');
}