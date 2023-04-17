/* eslint-disable @next/next/no-img-element */
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import { Loading } from "./components/Loading";

const CreatePostWizard = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="flex w-full gap-3">
      <img
        src={user.profileImageUrl}
        alt="Profile Image"
        className="w-16 rounded-full"
      />
      <input
        placeholder="Type something !"
        className="grow bg-transparent outline-none"
      />
    </div>
  );
};

const Home: NextPage = () => {
  const { isSignedIn } = useUser();

  const { data: posts, isLoading } = api.posts.getAll.useQuery();

  if (isLoading) return <Loading />;

  if (!posts) return <div>Something went wrong...</div>;

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen items-center justify-center">
        <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
          <div className="flex border-b border-slate-400 p-4">
            {!isSignedIn && <SignInButton />}
            {isSignedIn && (
              <div className="gap-4">
                <CreatePostWizard />
                <SignOutButton />
              </div>
            )}
          </div>
          <div className="flex flex-col">
            {[...posts, ...posts].map((post) => (
              <div key={post.id} className="border-b border-slate-400 p-8">
                {post.content}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
