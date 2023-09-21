'use client';
import { type ReactNode } from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter, useSearchParams } from 'next/navigation';

import { ConnectClient } from '@/components/functional/ConnectClient';
import { PostCards } from '@/components/model/PostCards';
import { PostDetail } from '@/components/model/PostDetail';
import { PostForm } from '@/components/model/PostForm';
import { SideBar } from '@/components/model/SideBar';

export default function Home(): ReactNode {
  // const router = useRouter();
  // useEffect(() => {
  //   if (window != undefined) {
  //     const originToken = localStorage.getItem('jwtToken');
  //     if (originToken === null && originToken !== '') {
  //       void router.push('/signup');
  //     }
  //   }
  // }, []);

  const searchParam = useSearchParams();
  const router = useRouter();

  const postId = searchParam.get('post_id');
  const closePostDetail = (): void => {
    router.push('/');
  };

  return (
    <main className="min-h-screen w-full bg-custom-dark-light flex">
      <ConnectClient baseUrl={String(process.env['NEXT_PUBLIC_BACKEND_URL'])}>
        <SideBar />
        <div className="min-w-[400px]  w-1/2 max-w-[500px] border-r border-l border-custom-dark-main border-opacity-50 px-5 ml-5">
          <PostForm userIcon="https://avatars.githubusercontent.com/u/65708479?v=4" />
          <div className="h-[calc(100vh-226px)] overflow-y-auto">
            <PostCards
              openPostDetail={(): void => {
                console.log('click post card');
              }}
              clickFavoriteButton={(): void => {
                console.log('clickFavoriteButton');
              }}
              clickReplyButton={(): void => {
                console.log('clickReplyButton');
              }}
              clickRepostButton={(): void => {
                console.log('clickRepostButton');
              }}
              clickShareButton={(): void => {
                console.log('clickShareButton');
              }}
            />
          </div>
        </div>
        <div className="min-w-[300px] w-1/2 max-w-[500px] py-5 px-5">
          {postId !== null ? (
            <>
              <div className="w-full mb-5 flex justify-end">
                <FontAwesomeIcon
                  icon={faXmark}
                  size="lg"
                  className="cursor-pointer"
                  onClick={closePostDetail}
                />
              </div>
              <PostDetail />
            </>
          ) : null}
        </div>
      </ConnectClient>
    </main>
  );
}
