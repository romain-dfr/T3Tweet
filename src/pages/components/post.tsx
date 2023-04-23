import Image from "next/image";
import type { RouterOutputs } from "~/utils/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

dayjs.extend(relativeTime);

type PostWithPost = RouterOutputs["posts"]["getAll"][number];

const PostView = (props: PostWithPost) => {
  const { post, author } = props;
  return (
    <div key={post.id} className="flex gap-3 border-b border-slate-400 p-4">
      <Image
        src={author.profileImageUrl ?? ""}
        alt="Profile image"
        className="rounded-full"
        width={56}
        height={56}
      />
      <div className="flex flex-col">
        <div className="flex text-slate-300">
          <Link href={`/@${author.username}`}>
            <span>
              {`@${author.username} · ${dayjs(post.createdAt).fromNow()}`}
            </span>
          </Link>
        </div>
        <Link href={`/post/${post.id}`}>
          <span className="text-2xl">{post.content}</span>
        </Link>
      </div>
    </div>
  );
};

export default PostView;
