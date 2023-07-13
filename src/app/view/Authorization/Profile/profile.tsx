'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Loading from '../../../loading';

const Profile = () => {
  const router = useRouter();
  const [loadingLogout, setLaodingLoguout] = useState(false);

  const logout = async () => {
    setLaodingLoguout(true);
    router.push('/');
    router.refresh;
    setLaodingLoguout(false);
  };

  return (
    <div className="mx-auto max-w-sm">
      <div className="text-center">
        {loadingLogout ? (
          <Loading />
        ) : (
          <div className="inline-block cursor-pointer text-red-500" onClick={logout}>
            ログアウト
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
