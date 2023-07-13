'use client';

import Link from 'next/link';

const Navigation = () => {
  const user = { id: 'aa1234', name: 'nakagome' };

  return (
    <header>
      <div className="container">
        <Link href="/" className="p-3 text-lg font-bold">
          Next.js Sample
        </Link>
        <div className="absolute right-5">
          {user.id ? (
            <div className="flex space-x-4">
              <Link href="/auth/firestore">Firestore</Link>
              <Link href="/auth/profile">プロフィール</Link>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link href="/auth/login">ログイン</Link>
              <Link href="/auth/signup">サインアップ</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Navigation;
